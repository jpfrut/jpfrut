import { motion } from 'framer-motion'

const Card = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  onClick,
  ...props
}) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300 border border-card shadow-lg'
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl cursor-pointer' : ''
  const backgroundClasses = gradient ? 'surface-hero text-white' : 'surface-card'

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
