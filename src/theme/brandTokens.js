const brandColors = {
  primary: {
    50: '#e6e9f5',
    100: '#ccd3eb',
    200: '#99a7d7',
    300: '#667bc3',
    400: '#334faf',
    500: '#0F7CDA',
    600: '#001D7A',
    700: '#001662',
    800: '#001049',
    900: '#000a31',
  },
  secondary: {
    50: '#fff3ed',
    100: '#ffe7db',
    200: '#ffcfb7',
    300: '#ffb793',
    400: '#ff9f6f',
    500: '#FF3F00',
    600: '#cc3200',
    700: '#992600',
    800: '#661900',
    900: '#330d00',
  },
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#EFEFEF',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  accent: {
    aqua: '#00BBE6',
    brillante: '#0F7CDA',
  },
}

export const surfaces = {
  default: {
    base: brandColors.primary[50],
    gradient: `linear-gradient(135deg, ${brandColors.primary[50]} 0%, ${brandColors.neutral[50]} 85%)`,
  },
  muted: {
    base: brandColors.neutral[100],
  },
  card: {
    base: '#ffffff',
    border: 'rgba(15, 124, 218, 0.12)',
  },
  glass: {
    base: 'rgba(255, 255, 255, 0.78)',
    border: 'rgba(255, 255, 255, 0.35)',
    blur: '18px',
  },
  hero: {
    base: brandColors.primary[700],
    gradient: `linear-gradient(135deg, ${brandColors.primary[500]} 0%, ${brandColors.primary[700]} 85%)`,
  },
}

export const text = {
  strong: brandColors.primary[800],
  default: brandColors.neutral[900],
  muted: brandColors.neutral[600],
  inverse: '#ffffff',
  accent: brandColors.accent.aqua,
}

export const icons = {
  primary: text.strong,
  secondary: brandColors.secondary[500],
  accent: brandColors.accent.aqua,
  muted: text.muted,
  inverse: text.inverse,
}

export const shadows = {
  brandGlow: '0 25px 65px rgba(15, 124, 218, 0.35)',
  brandGlowSoft: '0 15px 35px rgba(15, 124, 218, 0.25)',
  focus: '0 0 0 3px rgba(0, 29, 122, 0.25)',
}

export const gradients = {
  heroBlue: surfaces.hero.gradient,
  ctaOrange: `linear-gradient(135deg, ${brandColors.secondary[400]} 0%, ${brandColors.secondary[600]} 80%)`,
  accentAqua: `linear-gradient(135deg, ${brandColors.accent.aqua} 0%, ${brandColors.primary[500]} 80%)`,
  glassHighlight: `linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.65))`,
}

const toRgb = (color) => {
  if (!color) return null;
  if (color.startsWith('#')) {
    const hex = color.replace('#', '')
    const bigint = parseInt(hex, 16)
    if (hex.length === 3) {
      const r = (bigint >> 8) & 0xf
      const g = (bigint >> 4) & 0xf
      const b = bigint & 0xf
      return { r: r * 17, g: g * 17, b: b * 17 }
    }
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return { r, g, b }
  }

  const rgbaMatch = color.match(/rgba?\(([^)]+)\)/)
  if (rgbaMatch) {
    const [r, g, b] = rgbaMatch[1].split(',').map((value) => parseFloat(value.trim()))
    return { r, g, b }
  }

  const hexMatch = color.match(/#[0-9a-fA-F]{6}/)
  if (hexMatch) {
    return toRgb(hexMatch[0])
  }

  return null
}

const relativeLuminance = (color) => {
  const rgb = toRgb(color)
  if (!rgb) return 1
  const srgb = ['r', 'g', 'b'].map((channel) => {
    const value = rgb[channel] / 255
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
  })
  return 0.2126 * srgb[0] + 0.7152 * srgb[1] + 0.0722 * srgb[2]
}

export const getContrastRatio = (foreground, background) => {
  const lum1 = relativeLuminance(foreground)
  const lum2 = relativeLuminance(background)
  const brightest = Math.max(lum1, lum2)
  const darkest = Math.min(lum1, lum2)
  return (brightest + 0.05) / (darkest + 0.05)
}

const getSurfaceBaseColor = (surfaceKey) => {
  const token = surfaces[surfaceKey]
  if (!token) return null
  if (typeof token === 'string') return token
  if (token.base) return token.base
  if (token.gradient) {
    const match = token.gradient.match(/#[0-9a-fA-F]{6}/)
    return match ? match[0] : null
  }
  return null
}

const pickBestContrastForStops = (stops, candidates) => {
  if (!stops.length || !candidates.length) return candidates[0]

  let best = candidates[0]
  let bestScore = -Infinity

  candidates.forEach((candidate) => {
    const score = Math.min(...stops.map((stop) => getContrastRatio(candidate, stop)))
    if (score > bestScore) {
      bestScore = score
      best = candidate
    }
  })

  return best
}

const createGradientToken = (from, to) => {
  const stops = [from, to].filter(Boolean)
  return {
    from,
    to,
    gradient: `linear-gradient(135deg, ${from} 0%, ${to} 100%)`,
    textColor: pickBestContrastForStops(stops, [text.inverse, text.strong, text.default]),
    iconColor: pickBestContrastForStops(stops, [icons.inverse, icons.primary, icons.accent]),
  }
}

export const brandGradients = {
  hero: createGradientToken(brandColors.primary[500], brandColors.primary[700]),
  cta: createGradientToken(brandColors.secondary[400], brandColors.secondary[600]),
  accent: createGradientToken(brandColors.accent.aqua, brandColors.primary[500]),
  neutral: createGradientToken(brandColors.neutral[200], brandColors.neutral[400]),
  growth: createGradientToken('#10B981', '#047857'),
  passion: createGradientToken('#EC4899', '#BE123C'),
  innovation: createGradientToken('#8B5CF6', '#6D28D9'),
  energy: createGradientToken('#F59E0B', '#EA580C'),
  ocean: createGradientToken('#06B6D4', '#0284C7'),
  slate: createGradientToken('#64748B', '#1F2937'),
  sunset: createGradientToken('#FB923C', '#F43F5E'),
}

export const getBrandGradient = (key = 'hero') => brandGradients[key] || brandGradients.hero

export const getRecommendedTextOnSurface = (surfaceKey = 'default') => {
  const background = getSurfaceBaseColor(surfaceKey)
  if (!background) return text.default
  const candidates = [text.inverse, text.strong]
  let best = candidates[0]
  let bestRatio = 0
  candidates.forEach((candidate) => {
    const ratio = getContrastRatio(candidate, background)
    if (ratio > bestRatio) {
      bestRatio = ratio
      best = candidate
    }
  })
  return best
}

export const getRecommendedIconOnSurface = (surfaceKey = 'default') => {
  const background = getSurfaceBaseColor(surfaceKey)
  if (!background) return icons.primary
  const candidates = [icons.inverse, icons.primary, icons.accent]
  let best = candidates[0]
  let bestRatio = 0
  candidates.forEach((candidate) => {
    const ratio = getContrastRatio(candidate, background)
    if (ratio > bestRatio) {
      bestRatio = ratio
      best = candidate
    }
  })
  return best
}

export const applyBrandTokensToCSSVariables = (target = typeof document !== 'undefined' ? document.documentElement : null) => {
  if (!target) return
  const baseMappings = {
    '--surface-default': surfaces.default.gradient,
    '--surface-muted': surfaces.muted.base,
    '--surface-card': surfaces.card.base,
    '--surface-card-border': surfaces.card.border,
    '--surface-glass': surfaces.glass.base,
    '--surface-glass-border': surfaces.glass.border,
    '--text-strong': text.strong,
    '--text-muted': text.muted,
    '--shadow-brand-glow': shadows.brandGlow,
    '--shadow-brand-glow-soft': shadows.brandGlowSoft,
    '--gradient-hero-blue': gradients.heroBlue,
    '--gradient-cta-orange': gradients.ctaOrange,
    '--gradient-accent-aqua': gradients.accentAqua,
  }

  const gradientMappings = Object.entries(brandGradients).reduce((acc, [key, token]) => {
    const normalizedKey = key.replace(/[^a-z0-9-]/gi, '-').toLowerCase()
    acc[`--brand-gradient-${normalizedKey}`] = token.gradient
    acc[`--brand-gradient-${normalizedKey}-text`] = token.textColor
    acc[`--brand-gradient-${normalizedKey}-icon`] = token.iconColor
    return acc
  }, {})

  Object.entries({ ...baseMappings, ...gradientMappings }).forEach(([cssVar, value]) => {
    if (value) {
      target.style.setProperty(cssVar, value)
    }
  })
}

export default {
  colors: brandColors,
  surfaces,
  text,
  icons,
  shadows,
  gradients,
  brandGradients,
  helpers: {
    getContrastRatio,
    getRecommendedTextOnSurface,
    getRecommendedIconOnSurface,
    applyBrandTokensToCSSVariables,
    getBrandGradient,
  },
}
