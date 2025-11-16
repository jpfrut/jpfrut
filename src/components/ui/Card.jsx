import { motion } from 'framer-motion'
import { surfaces } from '../../theme/brandTokens'

const surfaceVariants = {
  surface: surfaces.card,
  tintPrimary: surfaces.tintPrimary,
  tintSecondary: surfaces.tintSecondary,
  glass: surfaces.glass,
}

const Card = ({
  children,
  className = '',
  hover = true,
  variant = 'surface',
  onClick,
  ...props
}) => {
  const baseClasses = 'rounded-2xl p-6 transition-all duration-300 border shadow-none'
  const hoverClasses = hover ? 'cursor-pointer' : ''
  const normalizedClassName = className ?? ''
  const tone = surfaceVariants[variant] ?? surfaceVariants.surface

  const hasCustomBackground = /(^|\s)(bg-|from-|via-|to-)/.test(normalizedClassName)
  const hasCustomBorder = /(^|\s)border(-|\[)/.test(normalizedClassName)
  const hasCustomShadow = normalizedClassName.includes('shadow')

  const surfaceStyles = {}

  if (!hasCustomBackground && tone?.base) {
    surfaceStyles.background = tone.gradient ?? tone.base
  }

  if (!hasCustomBorder && tone?.border) {
    surfaceStyles.borderColor = tone.border
  }

  if (!hasCustomShadow && tone?.shadow) {
    surfaceStyles.boxShadow = tone.shadow
  }

  if (variant === 'glass' && tone?.blur) {
    surfaceStyles.backdropFilter = `blur(${tone.blur})`
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={hover ? { y: -5 } : {}}
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} ${normalizedClassName}`}
      style={surfaceStyles}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
