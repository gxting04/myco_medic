import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { ShieldAlert } from 'lucide-react'
import Data from '@/shared/Data'
import { getStoredProducts, productInGroup } from '@/lib/catalog'
import { findProductByRouteParam } from '@/utils/productUrl'
import { categorySlug } from '@/utils/seo'
import { useLockBodyScroll } from '@/lib/hooks'

// Malaysian medical device advertising rules (MDA) restrict Airway Management
// promotion to healthcare professionals, so that catalogue — its group listing,
// its category pages and its product pages — is gated behind this notice.
const AIRWAY_GROUP_ID = 1
const STORAGE_KEY = 'myco_hcp_ack'

function isAirwayPage(pathname, search) {
  if (pathname === '/products') {
    const params = new URLSearchParams(search)
    const groupId = Number.parseInt(params.get('groupId'), 10)
    const categoryId = Number.parseInt(params.get('categoryId'), 10)
    if (groupId === AIRWAY_GROUP_ID) return true
    return Data.productCategories.some((c) => c.id === categoryId && c.groupId === AIRWAY_GROUP_ID)
  }

  const category = pathname.match(/^\/products\/category\/([^/]+)\/?$/)
  if (category) {
    const slug = decodeURIComponent(category[1])
    return Data.productCategories.some((c) => c.groupId === AIRWAY_GROUP_ID && categorySlug(c.name) === slug)
  }

  const product = pathname.match(/^\/product\/([^/]+)\/?$/)
  if (product) {
    const param = decodeURIComponent(product[1])
    const found = findProductByRouteParam(param, Data.initialProducts) || findProductByRouteParam(param, getStoredProducts())
    return productInGroup(found, AIRWAY_GROUP_ID)
  }

  return false
}

function readAck() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function HcpNotice() {
  const { pathname, search } = useLocation()
  const navigate = useNavigate()
  // Decided after mount: the prerendered HTML never contains the dialog, and
  // a visitor who already confirmed this session is not asked again.
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(isAirwayPage(pathname, search) && !readAck())
  }, [pathname, search])

  useLockBodyScroll(open)

  if (!open) return null

  const confirm = () => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* still close for this page view */
    }
    setOpen(false)
  }

  const leave = () => {
    setOpen(false)
    navigate('/products', { replace: true })
  }

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm" aria-hidden />
      <div
        role="alertdialog"
        aria-modal="true"
        aria-labelledby="hcp-notice-title"
        aria-describedby="hcp-notice-body"
        className="relative w-full max-w-md rounded-2xl bg-white p-6 text-center shadow-2xl sm:p-8"
      >
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-50 text-amber-600">
          <ShieldAlert className="h-6 w-6" />
        </div>
        <h2 id="hcp-notice-title" className="mt-4 text-lg font-semibold text-gray-900">
          For Healthcare Professionals Only
        </h2>
        <p id="hcp-notice-body" className="mt-3 text-sm leading-relaxed text-gray-600">
          This webpage content is intended for Healthcare Professionals only, not for general public as per Malaysia Advertisement Regulation.
        </p>
        <div className="mt-6 flex flex-col gap-2 sm:flex-row-reverse">
          <button type="button" onClick={confirm} className="btn-primary flex-1 py-2.5" autoFocus>
            I am a Healthcare Professional
          </button>
          <button type="button" onClick={leave} className="btn-outline flex-1 py-2.5">
            Leave
          </button>
        </div>
      </div>
    </div>
  )
}

export default HcpNotice
