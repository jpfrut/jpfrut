import colors from 'tailwindcss/colors'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Neuzeit Grotesk"',
          '"Neuzeit Grotesk Bold"',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
        heading: [
          '"Avenir Next"',
          '"Avenir Next LT Pro"',
          '"Avenir Next LT Pro Bold"',
          'Inter',
          'system-ui',
          'sans-serif'
        ],
      },
      colors: {
        // Colores oficiales de Mentora Hub
        primary: {
          // Escala basada en AZUL REY #001D7A
          50: '#e6e9f5',
          100: '#ccd3eb',
          200: '#99a7d7',
          300: '#667bc3',
          400: '#334faf',
          500: '#001D7A',  // AZUL REY (color principal)
          600: '#001662',
          700: '#001049',
          800: '#000a31',
          900: '#000519',
        },
        secondary: {
          // Escala basada en NARANJA #FF3F00
          50: '#fff3ed',
          100: '#ffe7db',
          200: '#ffcfb7',
          300: '#ffb793',
          400: '#ff9f6f',
          500: '#FF3F00',  // NARANJA (color principal)
          600: '#cc3200',
          700: '#992600',
          800: '#661900',
          900: '#330d00',
        },
        accent: {
          // Colores adicionales de Mentora Hub
          brillante: '#0F7CDA', // AZUL BRILLANTE
          aqua: {
            ...colors.cyan,
            DEFAULT: '#00BBE6',
          },
          green: {
            ...colors.emerald,
          },
          purple: {
            ...colors.violet,
          },
          pink: {
            ...colors.pink,
          },
          red: {
            ...colors.rose,
          },
          indigo: {
            ...colors.indigo,
          }
        },
        neutral: {
          // Grises basados en GRIS CLARO #EFEFEF
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#EFEFEF',  // GRIS CLARO (color principal)
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      // Mentora Hub: Border radius entre 6-12px
      borderRadius: {
        'brand-sm': '6px',
        'brand': '8px',
        'brand-md': '10px',
        'brand-lg': '12px',
      },
      // Mentora Hub: Interlineado generoso
      lineHeight: {
        'relaxed': '1.625',
        'loose': '1.75',
        'brand': '1.7',
      },
      // Mentora Hub: Padding generoso
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.neutral.800'),
            maxWidth: '100%',
            lineHeight: theme('lineHeight.relaxed'),
            a: {
              color: theme('colors.primary.600'),
              fontWeight: '600',
              textDecorationColor: theme('colors.primary.300'),
              textDecorationThickness: '2px',
              textUnderlineOffset: '6px',
              '&:hover': {
                color: theme('colors.primary.500'),
                textDecorationColor: theme('colors.primary.400'),
              },
            },
            h1: {
              color: theme('colors.primary.700'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '700',
              fontSize: '2.5rem',
              lineHeight: '1.2',
            },
            h2: {
              color: theme('colors.primary.700'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '700',
              fontSize: '2.25rem',
              lineHeight: '1.25',
            },
            h3: {
              color: theme('colors.primary.700'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '700',
              fontSize: '1.5rem',
              lineHeight: '1.3',
            },
            h4: {
              color: theme('colors.primary.700'),
              fontFamily: theme('fontFamily.heading'),
              fontWeight: '700',
              fontSize: '1.25rem',
              lineHeight: '1.4',
            },
            strong: {
              color: theme('colors.primary.700'),
            },
            blockquote: {
              color: theme('colors.neutral.900'),
              fontWeight: '600',
              backgroundColor: theme('colors.primary.50'),
              borderLeftColor: theme('colors.primary.600'),
              borderLeftWidth: '4px',
              borderRadius: theme('borderRadius.brand'),
              padding: '1rem 1.25rem',
            },
            'ol > li::marker': {
              color: theme('colors.primary.600'),
              fontWeight: '600',
            },
            'ul > li::marker': {
              color: theme('colors.primary.600'),
            },
            code: {
              color: theme('colors.primary.700'),
              backgroundColor: theme('colors.neutral.100'),
              fontWeight: '600',
              padding: '0.125rem 0.375rem',
              borderRadius: theme('borderRadius.brand'),
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            pre: {
              color: theme('colors.neutral.50'),
              backgroundColor: theme('colors.neutral.900'),
              borderRadius: theme('borderRadius.brand-lg'),
              padding: '1rem',
              overflowX: 'auto',
            },
          },
        },
      }),
    },
  },
  plugins: [typography],
}
