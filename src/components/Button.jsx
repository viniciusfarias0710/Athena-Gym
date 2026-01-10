export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  ...props 
}) {
  const baseStyles = 'font-semibold rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2'
  
  const variants = {
    primary: 'bg-primary-900 text-white hover:bg-primary-800 focus:ring-primary-500',
    secondary: 'bg-primary-700 text-white hover:bg-primary-800 focus:ring-primary-500',
    accent: 'bg-accent-600 text-white hover:bg-accent-700 focus:ring-accent-500',
    outline: 'border-2 border-primary-900 text-white bg-primary-900 hover:bg-primary-800 focus:ring-primary-500'
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
