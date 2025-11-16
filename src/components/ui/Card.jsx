import { motion } from 'framer-motion'

const variants = {
  default: 'surface-card text-primary-900 border border-card',
  neutral: 'surface-neutral text-primary-900 border border-card',
  hero: 'surface-hero text-white border border-card/0',
  cta: 'surface-cta text-white border border-card/0',
  accent: 'surface-accent text-white border border-card/0',
  outline: 'surface-card text-primary-900 border border-dashed border-card'
}

const Card = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  glass = false,
  variant = 'default',
  onClick,
  ...props
}) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300 shadow-lg'
  const hoverClasses = hover ? 'hover:scale-[1.02] hover:shadow-2xl cursor-pointer' : ''
  const variantClasses = variants[variant] || variants.default
  const backgroundClasses = gradient
    ? 'surface-hero text-white border border-card/0'
    : glass
      ? 'glass-effect text-primary-900 border border-glass'
      : variantClasses

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -5 } : {}}
      onClick={onClick}
      className={`
        ${baseClasses}
        ${hoverClasses}
        ${backgroundClasses}
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
