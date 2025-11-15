import { motion } from 'framer-motion'

const Card = ({
  children,
  className = '',
  hover = true,
  gradient = false,
  onClick,
  ...props
}) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300'
  const hoverClasses = hover ? 'hover:scale-105 hover:shadow-2xl cursor-pointer' : ''
  const gradientClasses = gradient
    ? 'bg-gradient-to-br from-white to-primary-50/30'
    : 'bg-white'

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
        ${gradientClasses}
        shadow-lg
        border border-slate-200/50
        ${className}
      `}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
