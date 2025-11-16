import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Settings, Type, Sun, Moon, Eye, Volume2,
  RotateCcw, X, Minus, Plus
} from 'lucide-react'
import { Button, Card } from '../components/ui'

function AccessibilityPanel() {
  const [isOpen, setIsOpen] = useState(false)
  const [fontSize, setFontSize] = useState('normal') // small, normal, large, xlarge
  const [contrast, setContrast] = useState('normal') // normal, high
  const [reducedMotion, setReducedMotion] = useState(false)

  // Cargar preferencias guardadas
  useEffect(() => {
    const savedFontSize = localStorage.getItem('a11y-fontSize') || 'normal'
    const savedContrast = localStorage.getItem('a11y-contrast') || 'normal'
    const savedMotion = localStorage.getItem('a11y-reducedMotion') === 'true'

    setFontSize(savedFontSize)
    setContrast(savedContrast)
    setReducedMotion(savedMotion)

    applyFontSize(savedFontSize)
    applyContrast(savedContrast)
    applyReducedMotion(savedMotion)
  }, [])

  const applyFontSize = (size) => {
    const root = document.documentElement
    const sizes = {
      small: '14px',
      normal: '16px',
      large: '18px',
      xlarge: '20px'
    }
    root.style.fontSize = sizes[size]
    localStorage.setItem('a11y-fontSize', size)
  }

  const applyContrast = (mode) => {
    const root = document.documentElement
    if (mode === 'high') {
      root.classList.add('high-contrast')
    } else {
      root.classList.remove('high-contrast')
    }
    localStorage.setItem('a11y-contrast', mode)
  }

  const applyReducedMotion = (reduced) => {
    const root = document.documentElement
    if (reduced) {
      root.style.setProperty('--animation-duration', '0s')
    } else {
      root.style.removeProperty('--animation-duration')
    }
    localStorage.setItem('a11y-reducedMotion', reduced.toString())
  }

  const handleFontSizeChange = (newSize) => {
    setFontSize(newSize)
    applyFontSize(newSize)
  }

  const handleContrastChange = (newContrast) => {
    setContrast(newContrast)
    applyContrast(newContrast)
  }

  const handleReducedMotionChange = (reduced) => {
    setReducedMotion(reduced)
    applyReducedMotion(reduced)
  }

  const resetAll = () => {
    handleFontSizeChange('normal')
    handleContrastChange('normal')
    handleReducedMotionChange(false)
  }

  const fontSizeLabels = {
    small: 'Pequeño',
    normal: 'Normal',
    large: 'Grande',
    xlarge: 'Muy Grande'
  }

  return (
    <>
      {/* Botón flotante */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-primary-600 text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-700 transition-colors"
        aria-label="Opciones de accesibilidad"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Panel de accesibilidad */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md"
            >
              <Card className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-neutral-800 flex items-center">
                    <Eye className="w-6 h-6 mr-2 text-primary-600" />
                    Opciones de Accesibilidad
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-neutral-100 rounded-lg"
                  >
                    <X className="w-5 h-5 text-neutral-500" />
                  </button>
                </div>

                <div className="space-y-6">
                  {/* Tamaño de texto */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      <Type className="w-4 h-4 inline mr-2" />
                      Tamaño del Texto
                    </label>
                    <p className="text-xs text-neutral-500 mb-3">
                      Ajusta el tamaño de las letras para leer mejor
                    </p>
                    <div className="grid grid-cols-4 gap-2">
                      {['small', 'normal', 'large', 'xlarge'].map((size) => (
                        <button
                          key={size}
                          onClick={() => handleFontSizeChange(size)}
                          className={`p-2 rounded-lg border-2 transition-colors text-center ${
                            fontSize === size
                              ? 'border-primary-500 bg-primary-50 text-primary-700'
                              : 'border-neutral-200 hover:border-primary-300'
                          }`}
                        >
                          <span className={`block font-medium ${
                            size === 'small' ? 'text-xs' :
                            size === 'normal' ? 'text-sm' :
                            size === 'large' ? 'text-base' :
                            'text-lg'
                          }`}>
                            Aa
                          </span>
                          <span className="text-xs">{fontSizeLabels[size]}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Contraste */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      <Sun className="w-4 h-4 inline mr-2" />
                      Contraste de Colores
                    </label>
                    <p className="text-xs text-neutral-500 mb-3">
                      Aumenta el contraste si tienes dificultad para ver
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => handleContrastChange('normal')}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          contrast === 'normal'
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <Sun className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-sm font-medium">Normal</span>
                      </button>
                      <button
                        onClick={() => handleContrastChange('high')}
                        className={`p-3 rounded-lg border-2 transition-colors ${
                          contrast === 'high'
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-neutral-200 hover:border-primary-300'
                        }`}
                      >
                        <Moon className="w-5 h-5 mx-auto mb-1" />
                        <span className="text-sm font-medium">Alto Contraste</span>
                      </button>
                    </div>
                  </div>

                  {/* Animaciones */}
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-3">
                      <Volume2 className="w-4 h-4 inline mr-2" />
                      Animaciones
                    </label>
                    <p className="text-xs text-neutral-500 mb-3">
                      Desactiva las animaciones si te marean o distraen
                    </p>
                    <button
                      onClick={() => handleReducedMotionChange(!reducedMotion)}
                      className={`w-full p-3 rounded-lg border-2 transition-colors flex items-center justify-between ${
                        reducedMotion
                          ? 'border-secondary-500 bg-secondary-50'
                          : 'border-neutral-200 hover:border-secondary-300'
                      }`}
                    >
                      <span className="font-medium">
                        {reducedMotion ? 'Animaciones desactivadas' : 'Animaciones activadas'}
                      </span>
                      <div className={`w-12 h-6 rounded-full transition-colors ${
                        reducedMotion ? 'bg-secondary-500' : 'bg-neutral-300'
                      }`}>
                        <div className={`w-6 h-6 bg-white rounded-full shadow transition-transform ${
                          reducedMotion ? 'translate-x-6' : 'translate-x-0'
                        }`} />
                      </div>
                    </button>
                  </div>

                  {/* Reset */}
                  <div className="pt-4 border-t border-neutral-200">
                    <Button
                      variant="outline"
                      onClick={resetAll}
                      className="w-full"
                      icon={<RotateCcw className="w-4 h-4" />}
                    >
                      Restaurar valores por defecto
                    </Button>
                  </div>

                  {/* Nota */}
                  <div className="bg-primary-50 p-3 rounded-lg">
                    <p className="text-xs text-primary-700">
                      💡 Tus preferencias se guardarán automáticamente y se aplicarán
                      cada vez que vuelvas.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default AccessibilityPanel
