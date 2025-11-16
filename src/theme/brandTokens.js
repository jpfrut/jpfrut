const brandColors = {
  primary: {
    // Escala basada en AZUL REY #001D7A
    50: '#e6e9f5',
    100: '#ccd3eb',
    200: '#99a7d7',
    300: '#667bc3',
    400: '#334faf',
    500: '#001D7A',  // AZUL REY - Color principal de marca
    600: '#001662',
    700: '#001049',
    800: '#000a31',
    900: '#000519',
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
  functional: {
    success: {
      100: '#dcfce7',
      500: '#22c55e',
      600: '#16a34a',
      700: '#15803d',
    },
    warning: {
      100: '#fef9c3',
      500: '#facc15',
      600: '#d97706',
      700: '#92400e',
    },
    danger: {
      100: '#fee2e2',
      500: '#ef4444',
      600: '#dc2626',
      700: '#991b1b',
    },
    info: {
      100: '#e0f2fe',
      500: '#0ea5e9',
      600: '#0284c7',
      700: '#0369a1',
    },
  },
}

export const surfaces = {
  default: {
    base: brandColors.neutral[200],  // #EFEFEF - Gris Claro como fondo principal
    accent: brandColors.neutral[50],
  },
  muted: {
    base: brandColors.neutral[100],
  },
  card: {
    base: '#ffffff',
    hover: '#fafafa',
    border: brandColors.neutral[300],  // Borde gris sutil
    hoverBorder: brandColors.neutral[400],
    shadow: '0 1px 3px rgba(0, 0, 0, 0.08)',  // Sombra muy sutil
  },
  tintPrimary: {
    base: brandColors.primary[50],
    hover: brandColors.primary[100],
    border: brandColors.primary[200],
    hoverBorder: brandColors.primary[300],
    shadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
  },
  tintSecondary: {
    base: brandColors.secondary[50],
    hover: brandColors.secondary[100],
    border: brandColors.secondary[200],
    hoverBorder: brandColors.secondary[300],
    shadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
  },
  // Glass effects removed - using solid colors instead
  hero: {
    base: brandColors.primary[500],  // AZUL REY #001D7A
    highlight: brandColors.accent.brillante,  // AZUL BRILLANTE #0F7CDA
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
  // Sombras simplificadas - sin efectos pesados según la guía de Mentora Hub
  subtle: '0 1px 3px rgba(0, 0, 0, 0.08)',
  card: '0 2px 4px rgba(0, 0, 0, 0.06)',
  focus: '0 0 0 3px rgba(0, 29, 122, 0.25)',
  // Deprecados - mantener por compatibilidad pero usar shadows.subtle
  brandGlow: '0 1px 3px rgba(0, 0, 0, 0.08)',
  brandGlowSoft: '0 1px 2px rgba(0, 0, 0, 0.06)',
}

// NOTA: Mentora Hub usa colores PLANOS, no gradientes
// Este objeto se mantiene por compatibilidad pero siempre retorna colores sólidos
const createSolidColorToken = (color) => ({
  gradient: color,  // Mantener key por compatibilidad, pero usar color sólido
  flat: color,
})

export const gradients = {
  // Colores sólidos - NO gradientes según guía de Mentora Hub
  heroBlue: createSolidColorToken(brandColors.primary[500]),  // AZUL REY
  ctaOrange: createSolidColorToken(brandColors.secondary[500]),  // NARANJA
  accentAqua: createSolidColorToken(brandColors.accent.aqua),  // AZUL AQUA
  accentBrillante: createSolidColorToken(brandColors.accent.brillante),  // AZUL BRILLANTE
  success: createSolidColorToken(brandColors.functional.success[600]),
  warning: createSolidColorToken(brandColors.functional.warning[600]),
  danger: createSolidColorToken(brandColors.functional.danger[600]),
  info: createSolidColorToken(brandColors.functional.info[600]),
}

const toneFactory = (solidColor, options = {}) => {
  const surface = options.surface ?? 'rgba(255,255,255,0.35)'
  const border = options.border ?? 'transparent'
  return {
    gradient: solidColor,
    flat: solidColor,
    surface,
    onSolid: options.onSolid ?? text.inverse,
    onSurface: options.onSurface ?? text.strong,
    border,
    hover: {
      solid: options.hoverSolid ?? solidColor,
      surface: options.hoverSurface ?? surface,
      border: options.hoverBorder ?? border,
    },
    active: {
      solid: options.activeSolid ?? options.hoverSolid ?? solidColor,
      surface: options.activeSurface ?? surface,
      border: options.activeBorder ?? options.hoverBorder ?? border,
    },
  }
}

export const tones = {
  primary: toneFactory(brandColors.primary[500], {  // AZUL REY #001D7A
    surface: brandColors.primary[50],
    hoverSolid: brandColors.accent.brillante,  // Hover: AZUL BRILLANTE #0F7CDA
    activeSolid: brandColors.primary[600],
    hoverSurface: brandColors.primary[100],
    activeSurface: brandColors.primary[200],
    onSurface: brandColors.primary[600],
    border: brandColors.primary[300],
    hoverBorder: brandColors.primary[400],
    activeBorder: brandColors.primary[500],
  }),
  secondary: toneFactory(brandColors.secondary[500], {  // NARANJA #FF3F00
    surface: brandColors.secondary[50],
    hoverSolid: brandColors.secondary[600],  // Hover: naranja más oscuro
    activeSolid: brandColors.secondary[700],
    hoverSurface: brandColors.secondary[100],
    activeSurface: brandColors.secondary[200],
    onSurface: brandColors.secondary[700],
    border: brandColors.secondary[300],
    hoverBorder: brandColors.secondary[400],
    activeBorder: brandColors.secondary[500],
  }),
  accent: toneFactory(brandColors.accent.brillante, {  // AZUL BRILLANTE #0F7CDA para estados activos
    surface: brandColors.primary[50],
    hoverSolid: brandColors.accent.aqua,  // Hover: AZUL AQUA #00BBE6
    activeSolid: brandColors.primary[500],
    hoverSurface: brandColors.primary[100],
    activeSurface: brandColors.primary[200],
    onSurface: brandColors.primary[600],
    border: brandColors.primary[300],
    hoverBorder: brandColors.primary[400],
    activeBorder: brandColors.primary[500],
  }),
  success: toneFactory(brandColors.functional.success[600], {
    surface: brandColors.functional.success[100],
    hoverSolid: brandColors.functional.success[500],
    activeSolid: brandColors.functional.success[700],
    hoverSurface: brandColors.functional.success[100],
    activeSurface: brandColors.functional.success[100],
    onSurface: brandColors.functional.success[700],
    border: 'rgba(34, 197, 94, 0.4)',
    hoverBorder: 'rgba(34, 197, 94, 0.55)',
    activeBorder: 'rgba(21, 128, 61, 0.55)',
  }),
  warning: toneFactory(brandColors.functional.warning[500], {
    surface: brandColors.functional.warning[100],
    hoverSolid: brandColors.functional.warning[400],
    activeSolid: brandColors.functional.warning[600],
    hoverSurface: brandColors.functional.warning[100],
    activeSurface: brandColors.functional.warning[200],
    onSurface: brandColors.functional.warning[700],
    border: 'rgba(234, 179, 8, 0.45)',
    hoverBorder: 'rgba(234, 179, 8, 0.6)',
    activeBorder: 'rgba(217, 119, 6, 0.55)',
    onSolid: '#422006',
  }),
  danger: toneFactory(brandColors.functional.danger[600], {
    surface: brandColors.functional.danger[100],
    hoverSolid: brandColors.functional.danger[500],
    activeSolid: brandColors.functional.danger[700],
    hoverSurface: brandColors.functional.danger[100],
    activeSurface: brandColors.functional.danger[200],
    onSurface: brandColors.functional.danger[700],
    border: 'rgba(239, 68, 68, 0.45)',
    hoverBorder: 'rgba(239, 68, 68, 0.6)',
    activeBorder: 'rgba(153, 27, 27, 0.55)',
  }),
  info: toneFactory(brandColors.functional.info[600], {
    surface: brandColors.functional.info[100],
    hoverSolid: brandColors.functional.info[500],
    activeSolid: brandColors.functional.info[700],
    hoverSurface: brandColors.functional.info[100],
    activeSurface: brandColors.functional.info[200],
    onSurface: brandColors.functional.info[700],
    border: 'rgba(14, 165, 233, 0.35)',
    hoverBorder: 'rgba(14, 165, 233, 0.5)',
    activeBorder: 'rgba(2, 132, 199, 0.55)',
  }),
  neutral: toneFactory(brandColors.neutral[500], {
    surface: brandColors.neutral[100],
    hoverSolid: brandColors.neutral[400],
    activeSolid: brandColors.neutral[600],
    hoverSurface: brandColors.neutral[200],
    activeSurface: brandColors.neutral[300],
    onSurface: text.muted,
    border: 'rgba(148, 163, 184, 0.45)',
    hoverBorder: 'rgba(148, 163, 184, 0.6)',
    activeBorder: 'rgba(107, 114, 128, 0.65)',
    onSolid: text.strong,
  }),
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
  if (token.flat) return token.flat
  if (token.gradient) {
    const match = token.gradient.match(/#[0-9a-fA-F]{6}/)
    return match ? match[0] : null
  }
  return null
}

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
  const mappings = {
    '--surface-default': surfaces.default.base,
    '--surface-muted': surfaces.muted.base,
    '--surface-card': surfaces.card.base,
    '--surface-card-border': surfaces.card.border,
    '--text-strong': text.strong,
    '--text-muted': text.muted,
    '--shadow-subtle': shadows.subtle,
    '--shadow-card': shadows.card,
    // Colores sólidos de marca
    '--color-primary': brandColors.primary[500],  // AZUL REY
    '--color-secondary': brandColors.secondary[500],  // NARANJA
    '--color-brillante': brandColors.accent.brillante,  // AZUL BRILLANTE
    '--color-aqua': brandColors.accent.aqua,  // AZUL AQUA
    '--color-neutral': brandColors.neutral[200],  // GRIS CLARO
  }

  Object.entries(mappings).forEach(([cssVar, value]) => {
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
  tones,
  helpers: {
    getContrastRatio,
    getRecommendedTextOnSurface,
    getRecommendedIconOnSurface,
    applyBrandTokensToCSSVariables,
  },
}
