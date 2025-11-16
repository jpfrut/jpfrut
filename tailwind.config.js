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
          500: '#0F7CDA',  // AZUL BRILLANTE (tono medio)
          600: '#001D7A',  // AZUL REY (color principal)
          700: '#001662',
          800: '#001049',
          900: '#000a31',
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
          aqua: '#00BBE6',      // AZUL AQUA
          brillante: '#0F7CDA', // AZUL BRILLANTE
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
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
