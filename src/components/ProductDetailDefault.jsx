import React, { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import Data from '../shared/Data'
import { useCart } from '../context/CartContext'
import Button from './ui/button'

function ProductDetailDefault({ product }) {
  const navigate = useNavigate()
  const { addToCart } = useCart()
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedSize, setSelectedSize] = useState(null)
  const [expandedSections, setExpandedSections] = useState({
    description: true,
    sizeGuide: false,
    returnPolicy: false,
    faq: false
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
  const backLink = hasCategory 
    ? `/products/category/${product.category.toLowerCase().replace(/\s+/g, '-')}`
    : (group ? `/products/group/${group.name.toLowerCase().replace(/\s+/g, '-')}` : '/products')

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
      
      <div className='py-8 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
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

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-16'>
            {/* Product Images */}
            <div className='space-y-4'>
              {/* Main Image */}
              {productImages.length > 0 && (
                <div className='relative overflow-hidden rounded-lg bg-gray-50 aspect-square group'>
                  <img 
                    src={productImages[selectedImageIndex]} 
                    alt={product.name}
                    className='w-full h-full object-contain transition-transform duration-300 group-hover:scale-105'
                  />
                  {productImages.length > 1 && (
                    <div className='absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-gray-700 shadow-md'>
                      {selectedImageIndex + 1} / {productImages.length}
                    </div>
                  )}
                </div>
              )}
              
              {/* Thumbnail Gallery */}
              {productImages.length > 1 && (
                <div className='grid grid-cols-4 sm:grid-cols-5 gap-3'>
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImageIndex === index 
                          ? 'border-primary ring-2 ring-primary ring-offset-2' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`${product.name} view ${index + 1}`}
                        className='w-full h-full object-cover'
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Information */}
            <div className='space-y-6'>
              {/* Product Title */}
              <div>
                <h1 className='text-3xl sm:text-4xl font-bold text-gray-900 mb-3'>{product.name}</h1>
                {product.articleCode && (
                  <p className='text-sm text-gray-500'>Article Code: {product.articleCode}</p>
                )}
              </div>

              {/* Price */}
              <div className='flex items-baseline gap-3'>
                {product.salePrice && product.salePrice < product.price ? (
                  <>
                    <span className='text-3xl font-bold text-primary'>RM{product.salePrice.toFixed(2)}</span>
                    <span className='text-xl text-gray-400 line-through'>RM{product.price.toFixed(2)}</span>
                    <span className='text-sm text-red-600 font-medium bg-red-50 px-2 py-1 rounded'>Sale</span>
                  </>
                ) : (
                  <span className='text-3xl font-bold text-primary'>RM{product.price.toFixed(2)}</span>
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

              {/* Quantity Selector */}
              <div>
                <label className='block text-sm font-semibold text-gray-900 mb-3'>Quantity</label>
                <div className='flex items-center gap-3'>
                  <div className='flex items-center border-2 border-gray-300 rounded-lg overflow-hidden'>
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className='px-4 py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-700 font-medium disabled:opacity-50 disabled:cursor-not-allowed'
                      disabled={quantity <= 1}
                    >
                      −
                    </button>
                    <input 
                      type='number' 
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className='w-16 text-center border-x-2 border-gray-300 py-2.5 focus:outline-none focus:ring-2 focus:ring-primary font-medium'
                      min='1'
                    />
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className='px-4 py-2.5 hover:bg-gray-100 active:bg-gray-200 transition-colors text-gray-700 font-medium'
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Stock Status */}
              <div className={`text-sm font-medium py-2 ${
                stockStatus.status === 'out_of_stock' 
                  ? 'text-red-600' 
                  : stockStatus.status === 'low_stock' 
                    ? 'text-orange-600' 
                    : 'text-green-600'
              }`}>
                {stockStatus.message}
              </div>

              {/* Add to Cart Button */}
              <Button
                onClick={handleAddToCart}
                disabled={stockStatus.status === 'out_of_stock'}
                variant={addedToCart ? 'success' : stockStatus.status === 'out_of_stock' ? 'secondary' : 'primary'}
                size='xl'
                className='w-full'
                icon={addedToCart ? (
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M5 13l4 4L19 7' />
                  </svg>
                ) : null}
              >
                {addedToCart ? (
                  'Added to Cart'
                ) : (
                  `Add to Cart • RM${((product.salePrice || product.price) * quantity).toFixed(2)}`
                )}
              </Button>

              {/* WhatsApp Contact */}
              <a 
                href={`https://wa.me/60196649622?text=Hi, I'm interested in ${product.name} (RM${product.price.toFixed(2)})`}
                target='_blank'
                rel='noopener noreferrer'
                className='block w-full border-2 border-primary text-primary py-3.5 rounded-lg hover:bg-primary hover:text-white transition-all duration-200 font-medium text-center shadow-sm hover:shadow-md active:scale-[0.98] flex items-center justify-center gap-2'
              >
                <svg className='w-5 h-5' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z'/>
                </svg>
                Contact on WhatsApp
              </a>
            </div>
          </div>

          {/* Expandable Sections */}
          <div className='border-t border-gray-200 pt-8 space-y-6'>
            {/* Description */}
            <div>
              <button
                onClick={() => toggleSection('description')}
                className='w-full flex items-center justify-between text-left py-4 border-b border-gray-200 hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors duration-200 group'
              >
                <h2 className='text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors'>Description</h2>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:text-primary ${expandedSections.description ? 'rotate-180' : ''}`}
                  fill='none' 
                  stroke='currentColor' 
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              {expandedSections.description && (
                <div className='py-6 text-gray-700'>
                  <div className='whitespace-pre-line prose prose-sm max-w-none'>
                    {description.split('\n').map((line, index) => {
                      // Handle bold text (**text**)
                      if (line.startsWith('**') && line.endsWith('**')) {
                        return (
                          <p key={index} className='font-semibold text-gray-900 mb-2 mt-4 first:mt-0'>
                            {line.replace(/\*\*/g, '')}
                          </p>
                        )
                      }
                      // Handle bullet points
                      if (line.trim().startsWith('•')) {
                        return (
                          <div key={index} className='flex items-start gap-2 mb-1'>
                            <span className='text-primary mt-1'>•</span>
                            <span>{line.replace(/^•\s*/, '')}</span>
                          </div>
                        )
                      }
                      // Handle regular paragraphs
                      if (line.trim()) {
                        return <p key={index} className='mb-3'>{line}</p>
                      }
                      return <br key={index} />
                    })}
                  </div>
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

            {/* Return & Refund Policy */}
            <div>
              <button
                onClick={() => toggleSection('returnPolicy')}
                className='w-full flex items-center justify-between text-left py-4 border-b border-gray-200 hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors duration-200 group'
              >
                <h2 className='text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors'>Return & Refund Policy</h2>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:text-primary ${expandedSections.returnPolicy ? 'rotate-180' : ''}`}
                  fill='none' 
                  stroke='currentColor' 
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              {expandedSections.returnPolicy && (
                <div className='py-6 text-gray-700 space-y-4'>
                  <div>
                    <h3 className='font-semibold mb-2'>Returns</h3>
                    <p>We provide returns for all items except sale & promotion items and specifically stated non-returnable & non-exchange items. Products sold at mark down prices cannot be returned or exchanged. We reserve the right for final decision.</p>
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>Refund</h3>
                    <p>Refund via Account's Store Credit at our website only.</p>
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>Exchange</h3>
                    <p>You may exchange your item(s) size (except sales items) via postage and at our physical store, depending on item availability.</p>
                  </div>
                  <div>
                    <h3 className='font-semibold mb-2'>Defective</h3>
                    <p>Products must be in original condition with proof of receipt. We're unable to accept your return as it had been washed.</p>
                  </div>
                </div>
              )}
            </div>

            {/* FAQ */}
            <div>
              <button
                onClick={() => toggleSection('faq')}
                className='w-full flex items-center justify-between text-left py-4 border-b border-gray-200 hover:bg-gray-50 px-2 -mx-2 rounded-lg transition-colors duration-200 group'
              >
                <h2 className='text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors'>Frequently Asked Questions</h2>
                <svg 
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 group-hover:text-primary ${expandedSections.faq ? 'rotate-180' : ''}`}
                  fill='none' 
                  stroke='currentColor' 
                  viewBox='0 0 24 24'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
                </svg>
              </button>
              {expandedSections.faq && (
                <div className='py-6 space-y-4'>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>How long does it normally take to ship out items once payment is made?</h3>
                    <p className='text-gray-700'>We will process your order within 24 hours and ship your orders within 5-7 working days, except wishlist item(s).</p>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Where can I find my tracking number?</h3>
                    <p className='text-gray-700'>Tracking numbers will be provided by email once shipped.</p>
                  </div>
                  <div>
                    <h3 className='font-semibold text-gray-900 mb-2'>Where can I track my parcel?</h3>
                    <p className='text-gray-700'>Local orders are delivered via Skynet/Poslaju/Pgeon/EasyParcel. Orders can be tracked at the provided tracking link.</p>
                  </div>
                </div>
              )}
            </div>
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
      <WhatsAppFloat phone='+60196649622' message={`Hi, I'm interested in ${product.name}`} />
    </div>
  )
}

export default ProductDetailDefault
