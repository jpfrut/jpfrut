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
    'font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2 border-2 border-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-200'

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
      color: toneToken.onSolid,
      borderColor: 'transparent',
      boxShadow: shadows.brandGlowSoft,
    },
    surface: {
      background: toneToken.surface,
      color: toneToken.onSurface,
      borderColor: toneToken.border,
      boxShadow: 'none',
    },
    outline: {
      background: 'transparent',
      color: toneToken.onSurface,
      borderColor: toneToken.border,
      boxShadow: 'none',
    },
    iconOnly: {
      background: toneToken.surface,
      color: toneToken.onSurface,
      borderColor: toneToken.border,
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
        ${resolvedVariant === 'iconOnly' ? 'rounded-full' : ''}
        ${spacingClasses}
        ${disabled ? disabledClasses : ''}
        ${className}
      `}
      style={{
        background: variantStyle.background,
        color: variantStyle.color,
        borderColor: variantStyle.borderColor,
        boxShadow: variantStyle.boxShadow,
      }}
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
