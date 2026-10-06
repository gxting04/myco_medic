import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Search } from 'lucide-react'
import PageSEO from '@/components/PageSEO'
import { useUI } from '@/context/UIContext'

function NotFound() {
  const { openSearch } = useUI()
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <PageSEO title="Page not found" description="The page you were looking for could not be found." path="/404" noindex />
      <p className="eyebrow">Error 404</p>
      <h1 className="heading-lg mt-3">We couldn’t find that page</h1>
      <p className="lead mt-4 max-w-md">It may have moved, or the link may be out of date. Try searching the catalogue instead.</p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <button type="button" onClick={() => openSearch()} className="btn-primary">
          <Search className="h-4 w-4" /> Search products
        </button>
        <Link to="/" className="btn-outline">
          <ArrowLeft className="h-4 w-4" /> Back to home
        </Link>
      </div>
    </section>
  )
}

export default NotFound
