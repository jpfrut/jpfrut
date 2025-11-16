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
      hoverBackground: toneToken.hover?.solid ?? toneToken.gradient,
      activeBackground: toneToken.active?.solid ?? toneToken.gradient,
      color: toneToken.onSolid,
      borderColor: 'transparent',
      hoverBorder: 'transparent',
      activeBorder: 'transparent',
    },
    tint: {
      background: toneToken.surface,
      hoverBackground: toneToken.hover?.surface ?? toneToken.surface,
      activeBackground: toneToken.active?.surface ?? toneToken.surface,
      color: toneToken.onSurface,
      borderColor: 'transparent',
      hoverBorder: 'transparent',
      activeBorder: 'transparent',
    },
    outline: {
      background: 'transparent',
      hoverBackground: toneToken.hover?.surface ?? toneToken.surface,
      activeBackground: toneToken.active?.surface ?? toneToken.surface,
      color: toneToken.onSurface,
      borderColor: toneToken.border,
      hoverBorder: toneToken.hover?.border ?? toneToken.border,
      activeBorder: toneToken.active?.border ?? toneToken.border,
    },
  }

  const style = variantStyles[resolvedVariant] ?? variantStyles.tint
  const normalizedClassName = className ?? ''
  const hasCustomBackground = /(^|\s)(bg-|from-|via-|to-|bg\[)/.test(normalizedClassName)
  const hasCustomText = /(^|\s)text-/.test(normalizedClassName)
  const hasCustomBorder = /(^|\s)border(-|\[)/.test(normalizedClassName)

  const interactiveClasses = [
    !hasCustomBackground
      ? 'bg-[var(--badge-bg)] hover:bg-[var(--badge-bg-hover)] active:bg-[var(--badge-bg-active)]'
      : '',
    !hasCustomText ? 'text-[color:var(--badge-text)]' : '',
    !hasCustomBorder
      ? 'border-[color:var(--badge-border)] hover:border-[color:var(--badge-border-hover)] active:border-[color:var(--badge-border-active)]'
      : '',
  ]
    .filter(Boolean)
    .join(' ')

  const styleVariables = {}

  if (!hasCustomBackground) {
    styleVariables['--badge-bg'] = style.background
    styleVariables['--badge-bg-hover'] = style.hoverBackground ?? style.background
    styleVariables['--badge-bg-active'] = style.activeBackground ?? style.hoverBackground ?? style.background
  }

  if (!hasCustomText) {
    styleVariables['--badge-text'] = style.color
  }

  if (!hasCustomBorder) {
    styleVariables['--badge-border'] = style.borderColor ?? 'transparent'
    styleVariables['--badge-border-hover'] = style.hoverBorder ?? styleVariables['--badge-border']
    styleVariables['--badge-border-active'] =
      style.activeBorder ?? styleVariables['--badge-border-hover']
  }

  return (
    <motion.span
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      className={`
        inline-flex items-center gap-1.5 rounded-full font-semibold border border-transparent
        ${sizes[size]}
        ${pulse ? 'animate-pulse' : ''}
        ${interactiveClasses}
        ${className}
      `}
      style={styleVariables}
    >
      {icon && <span className="flex items-center" aria-hidden="true">{icon}</span>}
      {children}
    </motion.span>
  )
}

export default Badge
