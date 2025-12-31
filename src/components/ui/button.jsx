import React from 'react'
import { cn } from '@/lib/utils'

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'default',
  children, 
  disabled,
  loading,
  icon,
  iconPosition = 'left',
  ...props 
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center gap-2 font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 focus:ring-primary shadow-md hover:shadow-lg active:scale-[0.98]',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500 shadow-sm hover:shadow-md active:scale-[0.98]',
    outline: 'border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary shadow-sm hover:shadow-md active:scale-[0.98]',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg active:scale-[0.98]',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-md hover:shadow-lg active:scale-[0.98]',
    link: 'text-primary hover:text-primary/80 underline-offset-4 hover:underline focus:ring-primary p-0 shadow-none',
  }
  
  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    default: 'px-4 py-2.5 text-base rounded-lg',
    lg: 'px-6 py-3.5 text-lg rounded-lg',
    xl: 'px-8 py-4 text-xl rounded-xl',
    icon: 'p-2 rounded-lg',
  }
  
  const iconSizes = {
    sm: 'w-4 h-4',
    default: 'w-5 h-5',
    lg: 'w-5 h-5',
    xl: 'w-6 h-6',
    icon: 'w-5 h-5',
  }
  
  const iconSize = iconSizes[size]
  const displayIcon = loading ? (
    <svg className={cn('animate-spin', iconSize)} fill='none' viewBox='0 0 24 24'>
      <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4' />
      <path className='opacity-75' fill='currentColor' d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z' />
    </svg>
  ) : icon
  
  return (
    <button
      ref={ref}
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {iconPosition === 'left' && displayIcon}
      {loading ? <span className='opacity-75'>{children}</span> : children}
      {iconPosition === 'right' && displayIcon}
    </button>
  )
})

Button.displayName = 'Button'

export default Button
