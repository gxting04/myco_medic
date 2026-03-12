import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import Data from '../shared/Data'
import { useCart } from '../context/CartContext'
import Button from './ui/button'
import { ArrowLeft } from 'lucide-react'
import { isPurchasableProduct } from '@/utils/purchasableProducts'
import ShopeeButton from './ShopeeButton'

function ProductDetailDefault({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const isPurchasable = isPurchasableProduct(product)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [expandedSections, setExpandedSections] = useState({
    description: true,
    sizeGuide: false
  })

  // Get group information if product has no category
  const group = useMemo(() => {
    if (product.groupId && !product.category) {
      return Data.productGroups.find(g => g.id === product.groupId)
    }
    return null
  }, [product.groupId, product.category])

  // Determine if product belongs to a category or group
  const hasCategory = product.category !== null && product.category !== undefined
  const displayName = hasCategory ? product.category : (group?.name || 'Products')
  // Build back link - if product has no category, go to ProductsPage with groupId query param
  const backLink = hasCategory 
    ? `/products/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`
    : (group ? `/products?groupId=${group.id}` : '/products')

  // Get product images - support multiple images or fallback to single image
  const productImages = useMemo(() => {
    if (product.images && Array.isArray(product.images) && product.images.length > 0) {
      return product.images
    }
    return product.image ? [product.image] : []
  }, [product])

  // Get variants (colors and sizes) - support product variants or use defaults
  const colors = useMemo(() => {
    if (product.variants?.colors && Array.isArray(product.variants.colors)) {
      return product.variants.colors
    }
    // Default: single color option
    return [{ name: 'Default', value: 'default', hex: '#000000' }]
  }, [product])

  const sizes = useMemo(() => {
    if (product.variants?.sizes && Array.isArray(product.variants.sizes)) {
      return product.variants.sizes
    }
    // Default: single size option
    return [{ name: 'Free Size', value: 'free' }]
  }, [product])

  // Initialize selected variants
  React.useEffect(() => {
    if (colors.length > 0 && !selectedColor) {
      setSelectedColor(colors[0].value)
    }
    if (sizes.length > 0 && !selectedSize) {
      setSelectedSize(sizes[0].value)
    }
  }, [colors, sizes, selectedColor, selectedSize])

  // Get stock status
  const stockStatus = useMemo(() => {
    const stock = product.stock ?? product.stockQuantity ?? null
    if (stock === null || stock === undefined) {
      return { status: 'available', message: 'Item is in stock' }
    }
    if (stock === 0) {
      return { status: 'out_of_stock', message: 'Item is out of stock' }
    }
    if (stock <= 5) {
      return { status: 'low_stock', message: `Only ${stock} left in stock` }
    }
    return { status: 'available', message: 'Item is in stock' }
  }, [product])

  // Get product description
  const description = product.description || product.longDescription || `High-quality ${product.name} designed for medical professionals. This product meets medical grade standards and is suitable for clinical use.`

  const handleAddToCart = () => {
    const selectedColorObj = colors.find(c => c.value === selectedColor)
    const selectedSizeObj = sizes.find(s => s.value === selectedSize)
    
    // Build variant label if variants are selected
    const variantLabel = []
    if (selectedColorObj && colors.length > 1) {
      variantLabel.push(selectedColorObj.name)
    }
    if (selectedSizeObj && sizes.length > 1) {
      variantLabel.push(selectedSizeObj.name)
    }
    
    const variantInfo = {
      color: selectedColor,
      size: selectedSize,
      colorName: selectedColorObj?.name,
      sizeName: selectedSizeObj?.name,
      variantLabel: variantLabel.length > 0 ? variantLabel.join(' - ') : null
    }
    
    addToCart(product, quantity, variantInfo)
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  const handleBuyNow = () => {
    const selectedColorObj = colors.find(c => c.value === selectedColor)
    const selectedSizeObj = sizes.find(s => s.value === selectedSize)
    
    const variantLabel = []
    if (selectedColorObj && colors.length > 1) {
      variantLabel.push(selectedColorObj.name)
    }
    if (selectedSizeObj && sizes.length > 1) {
      variantLabel.push(selectedSizeObj.name)
    }
    
    const variantInfo = {
      color: selectedColor,
      size: selectedSize,
      colorName: selectedColorObj?.name,
      sizeName: selectedSizeObj?.name,
      variantLabel: variantLabel.length > 0 ? variantLabel.join(' - ') : null
    }
    
    addToCart(product, quantity, variantInfo)
    navigate('/checkout')
  }

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }))
  }

  return (
    <div>
      <Header/>
      
      <div className='pt-24 md:pt-32 pb-8 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
          {/* Back Button */}
          <Link
            to={backLink}
            className='inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group'
          >
            <ArrowLeft className='w-5 h-5 group-hover:-translate-x-1 transition-transform' />
            <span className='text-sm font-medium'>Back</span>
          </Link>

          {/* Breadcrumb */}
          <nav className='mb-6'>
            <div className='flex items-center space-x-2 text-sm text-gray-500'>
              <Link to='/' className='hover:text-primary'>Home</Link>
              <span>›</span>
              {displayName && (
                <>
                  <Link to={backLink} className='hover:text-primary'>{displayName}</Link>
                  <span>›</span>
                </>
              )}
              <span className='text-gray-900 font-medium'>{product.name}</span>
            </div>
          </nav>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 mb-12 md:mb-16'>
            {/* Product Images */}
            <div className='space-y-4'>
              {/* Main Image */}
              {productImages.length > 0 && (
                <div className='relative overflow-hidden rounded-xl bg-white aspect-square group shadow-lg'>
                  <img 
                    src={productImages[selectedImageIndex]} 
                    alt={product.name}
                    className='w-full h-full object-contain transition-transform duration-500 group-hover:scale-105'
                  />
                  {productImages.length > 1 && (
                    <div className='absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-gray-800 shadow-lg border border-gray-200'>
                      {selectedImageIndex + 1} / {productImages.length}
                    </div>
                  )}
                  {/* Image zoom indicator */}
                  <div className='absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-medium text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    Hover to zoom
                  </div>
                </div>
              )}
              
              {/* Thumbnail Gallery */}
              {productImages.length > 1 && (
                <div className='grid grid-cols-4 sm:grid-cols-5 gap-3'>
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                        selectedImageIndex === index 
                          ? 'border-primary ring-2 ring-primary ring-offset-2 shadow-md scale-105' 
                          : 'border-gray-200 hover:border-gray-400 hover:shadow-sm'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} view ${index + 1}`}
                        className='w-full h-full object-cover'
                      />
                      {selectedImageIndex === index && (
                        <div className='absolute inset-0 bg-primary/10 pointer-events-none' />
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className='space-y-6 lg:pt-4'>
              {/* Product Title */}
              <div className='pb-2 border-b border-gray-100'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight'>{product.name}</h1>
                {product.articleCode && (
                  <div className='flex items-center gap-2 mt-2'>
                    <span className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Article Code:</span>
                    <span className='text-sm font-semibold text-gray-700 bg-gray-50 px-2 py-1 rounded'>{product.articleCode}</span>
                  </div>
                )}
              </div>

              {/* Color Selection */}
              {colors.length > 1 && (
                <div>
                  <label className='block text-sm font-semibold text-gray-900 mb-3'>
                    Color <span className='text-gray-500 font-normal'>{colors.find(c => c.value === selectedColor)?.name || ''}</span>
                  </label>
                  <div className='flex flex-wrap gap-2'>
                    {colors.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`px-4 py-2.5 rounded-lg border-2 transition-all duration-200 font-medium ${
                          selectedColor === color.value
                            ? 'border-primary bg-primary/10 text-primary shadow-md'
                            : 'border-gray-300 hover:border-gray-400 bg-white'
                        }`}
                      >
                        {color.hex ? (
                          <div className='flex items-center gap-2'>
                            <div 
                              className='w-5 h-5 rounded-full border-2 border-gray-300 shadow-sm'
                              style={{ backgroundColor: color.hex }}
                            />
                            <span className='text-sm'>{color.name}</span>
                          </div>
                        ) : (
                          <span className='text-sm'>{color.name}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {sizes.length > 1 && (
                <div>
                  <label className='block text-sm font-semibold text-gray-900 mb-3'>
                    Size <span className='text-gray-500 font-normal'>{sizes.find(s => s.value === selectedSize)?.name || ''}</span>
                  </label>
                  <div className='flex flex-wrap gap-2'>
                    {sizes.map((size) => (
                      <button
                        key={size.value}
                        onClick={() => setSelectedSize(size.value)}
                        className={`px-4 py-2.5 rounded-lg border-2 transition-all duration-200 font-medium ${
                          selectedSize === size.value
                            ? 'border-primary bg-primary/10 text-primary shadow-md'
                            : 'border-gray-300 hover:border-gray-400 bg-white'
                        }`}
                      >
                        {size.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* WhatsApp Contact */}
              <a 
                href={`https://wa.me/60123822001?text=Hi, I'm interested in ${product.name}`}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full border-2 border-primary text-primary py-4 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 font-semibold text-center shadow-md hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-3 group'
              >
                <svg className='w-6 h-6 group-hover:scale-110 transition-transform' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
                </svg>
                Contact on WhatsApp
              </a>

              {/* Shopee Button - Only show if product has shopeeUrl */}
              {product.shopeeUrl && (
                <ShopeeButton shopeeUrl={product.shopeeUrl} />
              )}
            </div>
          </div>

          {/* Expandable Sections */}
          <div className='border-t border-gray-200 pt-10 space-y-8'>
            {/* Description */}
            <div className='bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100'>
              <button
                onClick={() => toggleSection('description')}
                className='w-full flex items-center justify-between text-left py-2 mb-4 group'
              >
                <h2 className='text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors flex items-center gap-3'>
                  <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' />
                  </svg>
                  Product Description
                </h2>
                <svg 
                  className={`w-6 h-6 text-gray-400 transition-transform duration-300 group-hover:text-primary ${expandedSections.description ? 'rotate-180' : ''}`}
                  fill='none' 
                  stroke='currentColor' 
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              {expandedSections.description && (
                <div className='py-4 text-gray-700'>
                  <div className='whitespace-pre-line prose prose-sm md:prose-base max-w-none'>
                    {description.split('\n').map((line, index) => {
                      // Handle bold text (**text**)
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <p key={index} className='font-bold text-gray-900 mb-3 mt-6 first:mt-0 text-lg'>
                            {line.replace(/\*\*/g, '')}
                          </p>
                        )
                      }
                      // Handle bullet points
                      if (line.trim().startsWith('•')) {
                        return (
                          <div key={index} className='flex items-start gap-3 mb-2'>
                            <span className='text-primary mt-1.5 text-xl font-bold'>•</span>
                            <span className='text-base leading-relaxed'>{line.replace(/^•\s*/, '')}</span>
                          </div>
                        )
                      }
                      // Handle regular paragraphs
                      if (line.trim()) {
                        return <p key={index} className='mb-4 text-base leading-relaxed'>{line}</p>
                      }
                      return <br key={index} />
                    })}
                  </div>
                  {(product.video || product.youtubeUrl) && (
                    <div className='mt-8 pt-8 border-t border-gray-200'>
                      <h3 className='font-bold text-gray-900 mb-6 text-xl flex items-center gap-2'>
                        <svg className='w-6 h-6 text-primary' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z' />
                        </svg>
                        Product Video
                      </h3>
                      {product.youtubeUrl ? (
                        <div className='rounded-xl overflow-hidden bg-gray-100 aspect-video shadow-lg border border-gray-200'>
                          <iframe
                            src={(() => {
                              const url = product.youtubeUrl
                              // Handle youtu.be format
                              if (url.includes('youtu.be/')) {
                                const videoId = url.split('youtu.be/')[1].split('?')[0]
                                return `https://www.youtube.com/embed/${videoId}`
                              }
                              // Handle youtube.com format
                              if (url.includes('youtube.com/watch?v=')) {
                                const videoId = url.split('v=')[1].split('&')[0]
                                return `https://www.youtube.com/embed/${videoId}`
                              }
                              // Handle youtube.com/embed format (already correct)
                              if (url.includes('youtube.com/embed/')) {
                                return url
                              }
                              // Default: try to extract ID from end of URL
                              return `https://www.youtube.com/embed/${url.split('/').pop().split('?')[0]}`
                            })()}
                            title={`${product.name} - Product Video`}
                            className='w-full h-full'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                          ></iframe>
                        </div>
                      ) : (
                        <div className='rounded-xl overflow-hidden bg-gray-100 shadow-lg border border-gray-200'>
                          <video 
                            src={product.video}
                            controls
                            className='w-full h-auto max-h-[600px]'
                            preload='metadata'
                          >
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                    </div>
                  )}
                  {product.specifications && (
                    <div className='mt-6 space-y-3 pt-6 border-t border-gray-200'>
                      <h3 className='font-semibold text-gray-900 mb-3'>Specifications</h3>
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className='flex flex-col sm:flex-row sm:items-start gap-1'>
                          <span className='font-medium text-gray-900 sm:w-32'>{key}:</span>
                          <span className='text-gray-700'>{value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Size Guide */}
            {(product.sizeGuide || product.dimensions) && (
              <div>
                <button
                  onClick={() => toggleSection('sizeGuide')}
                  className='w-full flex items-center justify-between text-left py-4 border-b border-gray-200 hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors duration-200 group'
                >
                  <h2 className='text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors'>Size Guide</h2>
                  <svg 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:text-primary ${expandedSections.sizeGuide ? 'rotate-180' : ''}`}
                    fill='none' 
                    stroke='currentColor' 
                    viewBox='0 0 24 24'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                  </svg>
                </button>
                {expandedSections.sizeGuide && (
                  <div className='py-6 text-gray-700'>
                    {product.sizeGuide ? (
                      <div className='whitespace-pre-line prose prose-sm max-w-none'>
                        {product.sizeGuide.split('\n').map((line, index) => {
                          if (line.trim().startsWith('•')) {
                            return (
                              <div key={index} className='flex items-start gap-2 mb-1'>
                                <span className='text-primary mt-1'>•</span>
                                <span>{line.replace(/^•\s*/, '')}</span>
                              </div>
                            )
                          }
                          if (line.trim().startsWith('**') && line.endsWith('**')) {
                            return (
                              <p key={index} className='font-semibold text-gray-900 mb-2 mt-4 first:mt-0'>
                                {line.replace(/\*\*/g, '')}
                              </p>
                            )
                          }
                          if (line.trim()) {
                            return <p key={index} className='mb-2'>{line}</p>
                          }
                          return <br key={index} />
                        })}
                      </div>
                    ) : (
                      <div className='space-y-3'>
                        {product.dimensions && Object.entries(product.dimensions).map(([key, value]) => (
                          <div key={key} className='flex flex-col sm:flex-row sm:items-start gap-1'>
                            <span className='font-medium text-gray-900 sm:w-32'>{key}:</span>
                            <span className='text-gray-700'>{value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

          </div>

          {/* Back Navigation */}
          <div className='mt-12 pt-8 border-t border-gray-200'>
            <Link 
              to={backLink}
              className='inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors'
            >
              <svg className='mr-2 w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
              </svg>
              Back to {displayName} {hasCategory ? 'Products' : ''}
            </Link>
          </div>
        </div>
      </div>
      
      <Footer/>
      <WhatsAppFloat phone='+60123822001' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default ProductDetailDefault
