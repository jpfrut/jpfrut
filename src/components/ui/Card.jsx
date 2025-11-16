import { motion } from 'framer-motion'
import { surfaces } from '../../theme/brandTokens'

const surfaceVariants = {
  surface: surfaces.card,
  tintPrimary: surfaces.tintPrimary,
  tintSecondary: surfaces.tintSecondary,
  // Glass variant removed - Mentora Hub uses solid colors
}

const Card = ({
  children,
  className = '',
  hover = true,
  variant = 'surface',
  onClick,
  ...props
}) => {
  // Mentora Hub: Border radius 8-12px, padding generoso, sin sombras pesadas
  const baseClasses = 'rounded-lg p-6 transition-colors duration-200 border'
  const hoverClasses = hover ? 'cursor-pointer' : ''
  const normalizedClassName = className ?? ''
  const tone = surfaceVariants[variant] ?? surfaceVariants.surface

  const hasCustomBackground = /(^|\s)(bg-|from-|via-|to-)/.test(normalizedClassName)
  const hasCustomBorder = /(^|\s)border(-|\[)/.test(normalizedClassName)
  const hasCustomShadow = normalizedClassName.includes('shadow')

  const backgroundClasses =
    !hasCustomBackground && tone?.base
      ? 'bg-[var(--card-bg)] hover:bg-[var(--card-bg-hover)]'
      : ''
  const borderClasses =
    !hasCustomBorder && tone?.border
      ? 'border-[color:var(--card-border)] hover:border-[color:var(--card-border-hover)]'
      : ''

  const surfaceStyles = {}

  if (!hasCustomBackground && tone?.base) {
    surfaceStyles['--card-bg'] = tone.base
    surfaceStyles['--card-bg-hover'] = tone.hover ?? tone.base
  }

  if (!hasCustomBorder && tone?.border) {
    surfaceStyles['--card-border'] = tone.border
    surfaceStyles['--card-border-hover'] = tone.hoverBorder ?? tone.border
  }

  // Mentora Hub: Sombras sutiles, no pesadas
  if (!hasCustomShadow && tone?.shadow) {
    surfaceStyles.boxShadow = tone.shadow
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      // Mentora Hub: Sin transforms exagerados en hover
      whileHover={hover ? { y: -2 } : {}}
      onClick={onClick}
      className={`${baseClasses} ${hoverClasses} ${backgroundClasses} ${borderClasses} ${normalizedClassName}`}
      style={surfaceStyles}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export default Card
