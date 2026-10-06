import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, ChevronRight, ClipboardList, Link2, Mail, Share2, ShieldCheck, Truck, Users } from 'lucide-react'
import { FaWhatsapp } from 'react-icons/fa'
import Data from '../shared/Data'
import ImageGallery from './ImageGallery'
import ProductCard from './ProductCard'
import RichText from './RichText'
import { getProductImageAlt } from '@/utils/productUrl'
import { getRelatedProducts } from '@/lib/catalog'
import { useQuote } from '@/context/QuoteContext'
import { COMPANY, mailtoLink, whatsappLink } from '@/lib/site'

// Normalise the various YouTube URL shapes into an /embed/ URL for the iframe.
function toYouTubeEmbedUrl(url) {
  if (url.includes('youtu.be/')) {
    return `https://www.youtube.com/embed/${url.split('youtu.be/')[1].split('?')[0]}`
  }
  if (url.includes('youtube.com/watch?v=')) {
    return `https://www.youtube.com/embed/${url.split('v=')[1].split('&')[0]}`
  }
  if (url.includes('youtube.com/embed/')) {
    return url
  }
  return `https://www.youtube.com/embed/${url.split('/').pop().split('?')[0]}`
}

const ASSURANCES = [
  { icon: ShieldCheck, text: `Supplying Malaysian hospitals since ${COMPANY.since}` },
  { icon: Truck, text: 'Delivery nationwide from our Puchong warehouse' },
  { icon: Users, text: 'On-site product demonstrations available' }
]

/** Two-column section: label on the left, content on the right (stacked on phones). */
function DetailSection({ id, title, children }) {
  return (
    <section id={id} className="grid scroll-mt-24 gap-4 border-t border-gray-200 py-10 md:grid-cols-[14rem,1fr] md:gap-10 md:py-12">
      <h2 className="text-lg font-semibold tracking-tight text-gray-900">{title}</h2>
      <div className="min-w-0">{children}</div>
    </section>
  )
}

function KeyValueList({ data }) {
  return (
    <dl className="divide-y divide-gray-100 overflow-hidden rounded-xl border border-gray-200">
      {Object.entries(data).map(([key, value]) => (
        <div key={key} className="grid gap-1 px-4 py-3 text-sm sm:grid-cols-[12rem,1fr] sm:gap-4">
          <dt className="font-medium text-gray-900">{key}</dt>
          <dd className="text-gray-600">{value}</dd>
        </div>
      ))}
    </dl>
  )
}

function ShareButton({ name }) {
  const [copied, setCopied] = useState(false)
  useEffect(() => {
    if (!copied) return
    const t = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(t)
  }, [copied])

  const share = async () => {
    const url = window.location.href
    if (navigator.share) {
      try {
        await navigator.share({ title: name, url })
        return
      } catch (err) {
        if (err?.name === 'AbortError') return
      }
    }
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
    } catch {
      window.prompt('Copy this link', url)
    }
  }

  return (
    <button type="button" onClick={share} className="inline-flex items-center gap-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900">
      {copied ? <Check className="h-4 w-4 text-emerald-600" /> : typeof navigator !== 'undefined' && navigator.share ? <Share2 className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}
      {copied ? 'Link copied' : 'Share'}
    </button>
  )
}

/**
 * Standard product page. Product-specific pages pass their copy in as
 * `product.description` and can append extra blocks (size charts, tables…)
 * through `sections: [{ id, title, content }]`.
 */
function ProductDetailDefault({ product, sections = [] }) {
  const { add, has, open } = useQuote()
  const inList = has(product.id)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)

  const group = useMemo(() => Data.productGroups.find((g) => g.id === product.groupId) || null, [product.groupId])
  const hasCategory = product.category !== null && product.category !== undefined
  const crumbs = [
    { name: 'Products', to: '/products' },
    group && { name: group.name, to: `/products?groupId=${group.id}` },
    hasCategory && { name: product.category, to: `/products/category/${product.category.toLowerCase().replace(/\s+/g, '-')}` }
  ].filter(Boolean)

  const productImages = useMemo(() => {
    if (Array.isArray(product.images) && product.images.length > 0) return product.images
    return product.image ? [product.image] : []
  }, [product])

  // `videos` array of { src | youtubeUrl, title }, or the single `youtubeUrl` / `video` fields
  const productVideos = useMemo(() => {
    if (Array.isArray(product.videos)) {
      const videos = product.videos.filter((v) => v && (v.src || v.youtubeUrl))
      if (videos.length > 0) return videos
    }
    if (product.youtubeUrl) return [{ youtubeUrl: product.youtubeUrl }]
    if (product.video) return [{ src: product.video }]
    return []
  }, [product])

  const colors = Array.isArray(product.variants?.colors) ? product.variants.colors : []
  const sizes = Array.isArray(product.variants?.sizes) ? product.variants.sizes : []

  useEffect(() => {
    setSelectedColor(colors[0]?.value ?? null)
    setSelectedSize(sizes[0]?.value ?? null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product.id])

  const description =
    product.description ||
    product.longDescription ||
    `High-quality ${product.name} designed for medical professionals. This product meets medical grade standards and is suitable for clinical use.`

  // First paragraph doubles as the summary next to the gallery.
  const summary = useMemo(() => {
    const first = description.split('\n').find((l) => l.trim() && !l.trim().startsWith('•') && !/^\*\*.*\*\*:?$/.test(l.trim()))
    return first ? first.replace(/\*\*/g, '').trim() : ''
  }, [description])

  const variantText = [
    colors.length > 1 && colors.find((c) => c.value === selectedColor)?.name,
    sizes.length > 1 && sizes.find((s) => s.value === selectedSize)?.name
  ]
    .filter(Boolean)
    .join(', ')
  const enquiry = `Hi Myco Medic, I'm interested in ${product.name}${variantText ? ` (${variantText})` : ''}${
    product.articleCode ? ` [${product.articleCode}]` : ''
  }. Could you share pricing and availability?`

  const related = useMemo(() => getRelatedProducts(product, 4), [product])

  const stock = product.stock ?? product.stockQuantity ?? null

  return (
    <div className="bg-white">
      <div className="container-page pb-16 pt-6 md:pt-8">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-6 md:mb-8">
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
            <li>
              <Link to="/" className="hover:text-gray-900">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.to} className="flex items-center gap-1">
                <ChevronRight className="h-3.5 w-3.5 text-gray-300" aria-hidden />
                <Link to={c.to} className="hover:text-gray-900">
                  {c.name}
                </Link>
              </li>
            ))}
            <li className="flex min-w-0 items-center gap-1">
              <ChevronRight className="h-3.5 w-3.5 text-gray-300" aria-hidden />
              <span className="truncate text-gray-900" aria-current="page">
                {product.name}
              </span>
            </li>
          </ol>
        </nav>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <ImageGallery images={productImages} alt={getProductImageAlt(product)} />

          <div className="lg:pt-2">
            {(hasCategory || group) && <p className="eyebrow">{hasCategory ? product.category : group.name}</p>}
            <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-gray-900 sm:text-4xl">{product.name}</h1>

            <div className="mt-4 flex flex-wrap items-center gap-2">
              {product.articleCode && <span className="chip">Article code · {product.articleCode}</span>}
              {stock === 0 ? (
                <span className="chip border-amber-200 bg-amber-50 text-amber-700">Currently out of stock</span>
              ) : (
                <span className="chip border-emerald-200 bg-emerald-50 text-emerald-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> Available to order
                </span>
              )}
            </div>

            {summary && <p className="mt-6 line-clamp-5 text-base leading-relaxed text-gray-600">{summary}</p>}

            {colors.length > 1 && (
              <fieldset className="mt-8">
                <legend className="mb-3 text-sm font-medium text-gray-900">
                  Colour <span className="font-normal text-gray-500">— {colors.find((c) => c.value === selectedColor)?.name}</span>
                </legend>
                <div className="flex flex-wrap gap-2">
                  {colors.map((color) => (
                    <button
                      key={color.value}
                      type="button"
                      onClick={() => setSelectedColor(color.value)}
                      aria-pressed={selectedColor === color.value}
                      className={`inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm transition-colors ${
                        selectedColor === color.value ? 'border-gray-900 text-gray-900' : 'border-gray-200 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {color.hex && <span className="h-4 w-4 rounded-full border border-black/10" style={{ backgroundColor: color.hex }} />}
                      {color.name}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {sizes.length > 1 && (
              <fieldset className="mt-6">
                <legend className="mb-3 text-sm font-medium text-gray-900">
                  Size <span className="font-normal text-gray-500">— {sizes.find((s) => s.value === selectedSize)?.name}</span>
                </legend>
                <div className="flex flex-wrap gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size.value}
                      type="button"
                      onClick={() => setSelectedSize(size.value)}
                      aria-pressed={selectedSize === size.value}
                      className={`min-w-[3rem] rounded-lg border px-3 py-2 text-sm transition-colors ${
                        selectedSize === size.value ? 'border-gray-900 text-gray-900' : 'border-gray-200 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {size.name}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {/* Actions */}
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50/60 p-5">
              <p className="text-sm text-gray-600">
                Pricing depends on quantity and specification. Send us an enquiry and our team will come back to you with a quotation.
              </p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <button type="button" onClick={() => (inList ? open() : add(product))} className={inList ? 'btn-outline' : 'btn-primary'}>
                  {inList ? <Check className="h-4 w-4 text-primary" /> : <ClipboardList className="h-4 w-4" />}
                  {inList ? 'In quote list — view' : 'Add to quote list'}
                </button>
                <a href={whatsappLink(enquiry)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                  <FaWhatsapp className="h-4 w-4" />
                  Enquire on WhatsApp
                </a>
              </div>
              {product.shopeeUrl && (
                <a
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn mt-2 w-full border border-[#ee4d2d]/30 bg-white text-[#ee4d2d] hover:bg-[#ee4d2d]/5"
                >
                  <img src="/shopee_logo.png" alt="" className="h-4 w-auto" />
                  Buy on Shopee
                </a>
              )}
              <div className="mt-4 flex items-center justify-between border-t border-gray-200 pt-4">
                <a href={mailtoLink(COMPANY.salesEmail, `Enquiry: ${product.name}`, enquiry)} className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900">
                  <Mail className="h-4 w-4" /> Email sales
                </a>
                <ShareButton name={product.name} />
              </div>
            </div>

            <ul className="mt-6 space-y-2.5">
              {ASSURANCES.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3 text-sm text-gray-600">
                  <Icon className="h-4 w-4 shrink-0 text-gray-400" aria-hidden />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <DetailSection id="overview" title="Overview">
            <RichText text={description} className="max-w-3xl" />
          </DetailSection>

          {sections.map((s) => (
            <DetailSection key={s.id} id={s.id} title={s.title}>
              {s.content}
            </DetailSection>
          ))}

          {product.specifications && (
            <DetailSection id="specifications" title="Specifications">
              <KeyValueList data={product.specifications} />
            </DetailSection>
          )}

          {(product.sizeGuide || product.dimensions) && (
            <DetailSection id="size-guide" title="Size guide">
              {product.sizeGuide ? <RichText text={product.sizeGuide} /> : <KeyValueList data={product.dimensions} />}
            </DetailSection>
          )}

          {productVideos.length > 0 && (
            <DetailSection id="videos" title={productVideos.length > 1 ? 'Videos' : 'Video'}>
              <div className="space-y-8">
                {productVideos.map((video, index) => (
                  <div key={video.src || video.youtubeUrl || index}>
                    {video.title && <h3 className="mb-3 text-sm font-medium text-gray-900">{video.title}</h3>}
                    <div className="aspect-video overflow-hidden rounded-xl border border-gray-200 bg-gray-900">
                      {video.youtubeUrl ? (
                        <iframe
                          src={toYouTubeEmbedUrl(video.youtubeUrl)}
                          title={video.title || `${product.name} — product video`}
                          className="h-full w-full"
                          loading="lazy"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video src={video.src} title={video.title || `${product.name} — product video`} className="h-full w-full" controls playsInline preload="metadata">
                          Your browser does not support the video tag.
                        </video>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </DetailSection>
          )}
        </div>

        {related.length > 0 && (
          <section className="mt-8 border-t border-gray-200 pt-12" aria-labelledby="related-title">
            <div className="mb-6 flex items-end justify-between gap-4">
              <h2 id="related-title" className="heading-md">
                Related products
              </h2>
              {group && (
                <Link to={`/products?groupId=${group.id}`} className="hidden text-sm font-medium text-primary hover:text-primary-700 sm:inline">
                  View all in {group.name} →
                </Link>
              )}
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
              {related.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}

export default ProductDetailDefault
