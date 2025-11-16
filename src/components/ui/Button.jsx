import { motion } from 'framer-motion'
import { tones, shadows } from '../../theme/brandTokens'

const toneKeys = Object.keys(tones)

const Button = ({
  children,
  onClick,
  variant = 'solid',
  tone = 'primary',
  size = 'md',
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
  ...props
}) => {
  const baseClasses =
    'font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-200'

  let resolvedVariant = variant
  let resolvedTone = tone

  if (toneKeys.includes(variant) && tone === 'primary') {
    resolvedTone = variant
    resolvedVariant = 'solid'
  }

  if (variant === 'ghost') {
    resolvedVariant = 'surface'
  }

  const toneToken = tones[resolvedTone] ?? tones.primary

  const variantStyles = {
    solid: {
      background: toneToken.gradient,
      hoverBackground: toneToken.hover?.solid ?? toneToken.gradient,
      activeBackground: toneToken.active?.solid ?? toneToken.gradient,
      color: toneToken.onSolid,
      borderColor: 'transparent',
      hoverBorder: 'transparent',
      activeBorder: 'transparent',
      boxShadow: shadows.brandGlowSoft,
    },
    surface: {
      background: toneToken.surface,
      hoverBackground: toneToken.hover?.surface ?? toneToken.surface,
      activeBackground: toneToken.active?.surface ?? toneToken.surface,
      color: toneToken.onSurface,
      borderColor: toneToken.border,
      hoverBorder: toneToken.hover?.border ?? toneToken.border,
      activeBorder: toneToken.active?.border ?? toneToken.border,
      boxShadow: 'none',
    },
    outline: {
      background: 'transparent',
      hoverBackground: toneToken.hover?.surface ?? toneToken.surface,
      activeBackground: toneToken.active?.surface ?? toneToken.surface,
      color: toneToken.onSurface,
      borderColor: toneToken.border,
      hoverBorder: toneToken.hover?.border ?? toneToken.border,
      activeBorder: toneToken.active?.border ?? toneToken.border,
      boxShadow: 'none',
    },
    iconOnly: {
      background: toneToken.surface,
      hoverBackground: toneToken.hover?.surface ?? toneToken.surface,
      activeBackground: toneToken.active?.surface ?? toneToken.surface,
      color: toneToken.onSurface,
      borderColor: toneToken.border,
      hoverBorder: toneToken.hover?.border ?? toneToken.border,
      activeBorder: toneToken.active?.border ?? toneToken.border,
      boxShadow: 'none',
    },
  }

  const variantStyle = variantStyles[resolvedVariant] ?? variantStyles.solid

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-7 py-3.5 text-lg',
  }

  const iconOnlySizes = {
    sm: 'w-9 h-9 text-sm',
    md: 'w-11 h-11 text-base',
    lg: 'w-14 h-14 text-lg',
  }

  const spacingClasses =
    resolvedVariant === 'iconOnly'
      ? iconOnlySizes[size] ?? iconOnlySizes.md
      : sizes[size] ?? sizes.md

  const disabledClasses = 'opacity-50 cursor-not-allowed'
  const normalizedClassName = className ?? ''
  const hasCustomBackground = /(^|\s)(bg-|from-|via-|to-|bg\[)/.test(normalizedClassName)
  const hasCustomBorder = /(^|\s)border(-|\[)/.test(normalizedClassName)
  const hasCustomText = /(^|\s)text-/.test(normalizedClassName)

  const interactiveClasses = [
    !hasCustomBackground
      ? 'bg-[var(--btn-bg)] hover:bg-[var(--btn-bg-hover)] active:bg-[var(--btn-bg-active)]'
      : '',
    !hasCustomBorder
      ? 'border-[color:var(--btn-border)] hover:border-[color:var(--btn-border-hover)] active:border-[color:var(--btn-border-active)]'
      : '',
    !hasCustomText ? 'text-[color:var(--btn-text)]' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const styleVariables = {}

  if (!hasCustomBackground) {
    styleVariables['--btn-bg'] = variantStyle.background
    styleVariables['--btn-bg-hover'] = variantStyle.hoverBackground ?? variantStyle.background
    styleVariables['--btn-bg-active'] = variantStyle.activeBackground ?? variantStyle.background
  }

  if (!hasCustomBorder) {
    styleVariables['--btn-border'] = variantStyle.borderColor ?? 'transparent'
    styleVariables['--btn-border-hover'] = variantStyle.hoverBorder ?? styleVariables['--btn-border']
    styleVariables['--btn-border-active'] = variantStyle.activeBorder ?? styleVariables['--btn-border-hover']
  }

  if (!hasCustomText) {
    styleVariables['--btn-text'] = variantStyle.color
  }

  if (variantStyle.boxShadow) {
    styleVariables.boxShadow = variantStyle.boxShadow
  }

  const renderIcon = (position) => {
    if (!icon || resolvedVariant === 'iconOnly') return null
    if (iconPosition !== position) return null
    return (
      <span className="flex items-center" aria-hidden="true">
        {icon}
      </span>
    )
  }

  return (
    <motion.button
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${baseClasses}
        ${interactiveClasses}
        ${resolvedVariant === 'iconOnly' ? 'rounded-full' : ''}
        ${spacingClasses}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
      style={styleVariables}
      {...props}
    >
      {resolvedVariant === 'iconOnly' ? (
        icon ? (
          <span className="flex items-center justify-center" aria-hidden={!children}>
            {icon}
          </span>
        ) : (
          children
        )
      ) : (
        <>
          {renderIcon('left')}
          <span className="whitespace-nowrap">{children}</span>
          {renderIcon('right')}
        </>
      )}
    </motion.button>
  )
}

export default Button
