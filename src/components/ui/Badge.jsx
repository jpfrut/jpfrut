import { motion } from 'framer-motion'

const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  icon,
  pulse = false,
  className = '',
}) => {
  const variants = {
    default: 'bg-slate-100 text-slate-700',
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
  }

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`
        inline-flex items-center gap-1.5 rounded-full font-semibold
        ${variants[variant]}
        ${sizes[size]}
        ${pulse ? 'animate-pulse' : ''}
        ${className}
      `}
    >
      {icon && <span>{icon}</span>}
      {children}
    </motion.span>
  )
}

export default Badge
