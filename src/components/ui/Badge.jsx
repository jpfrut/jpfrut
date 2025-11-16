import { motion } from 'framer-motion'
import { tones } from '../../theme/brandTokens'

const toneKeys = Object.keys(tones)

const Badge = ({
  children,
  variant = 'tint',
  tone = 'neutral',
  size = 'md',
  icon,
  pulse = false,
  className = '',
}) => {
  let resolvedVariant = variant
  let resolvedTone = tone

  if (toneKeys.includes(variant) && tone === 'neutral') {
    resolvedTone = variant
    resolvedVariant = 'tint'
  }

  const toneToken = tones[resolvedTone] ?? tones.neutral

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  }

  const variantStyles = {
    solid: {
      background: toneToken.gradient,
      color: toneToken.onSolid,
      borderColor: 'transparent',
    },
    tint: {
      background: toneToken.surface,
      color: toneToken.onSurface,
      borderColor: 'transparent',
    },
    outline: {
      background: 'transparent',
      color: toneToken.onSurface,
      borderColor: toneToken.border,
    },
  }

  const style = variantStyles[resolvedVariant] ?? variantStyles.tint
  const normalizedClassName = className ?? ''
  const hasCustomBackground = /(^|\s)(bg-|from-|via-|to-)/.test(normalizedClassName)
  const hasCustomText = /(^|\s)text-/.test(normalizedClassName)
  const hasCustomBorder = /(^|\s)border(-|\[)/.test(normalizedClassName)

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`
        inline-flex items-center gap-1.5 rounded-full font-semibold border border-transparent
        ${sizes[size]}
        ${pulse ? 'animate-pulse' : ''}
        ${className}
      `}
      style={{
        background: hasCustomBackground ? undefined : style.background,
        color: hasCustomText ? undefined : style.color,
        borderColor: hasCustomBorder ? undefined : style.borderColor,
      }}
    >
      {icon && <span className="flex items-center" aria-hidden="true">{icon}</span>}
      {children}
    </motion.span>
  )
}

export default Badge
