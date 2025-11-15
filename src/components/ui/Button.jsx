import { motion } from 'framer-motion'

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon,
  ...props
}) => {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:from-primary-600 hover:to-primary-700 shadow-lg hover:shadow-xl',
    secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-600 text-white hover:from-secondary-600 hover:to-secondary-700 shadow-lg hover:shadow-xl',
    outline: 'border-2 border-primary-500 text-primary-600 hover:bg-primary-50',
    ghost: 'text-primary-600 hover:bg-primary-50',
    success: 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 shadow-lg',
    danger: 'bg-gradient-to-r from-red-500 to-rose-600 text-white hover:from-red-600 hover:to-rose-700 shadow-lg',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  }

  const disabledClasses = 'opacity-50 cursor-not-allowed'

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
      {...props}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.button>
  )
}

export default Button
