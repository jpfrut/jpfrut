import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  AlertTriangle,
  Link2,
  ArrowRight,
  X
} from 'lucide-react'
import { getGlossaryTerm } from '../data/glossaryData'

const GlossaryTooltip = ({ termKey, children, inline = true }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [showFullView, setShowFullView] = useState(false)
  const triggerRef = useRef(null)
  const tooltipRef = useRef(null)
  const timeoutRef = useRef(null)

  const term = getGlossaryTerm(termKey)

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let top = rect.bottom + 8
      let left = rect.left

      // Adjust if tooltip would go off screen
      if (left + 400 > viewportWidth) {
        left = viewportWidth - 420
      }
      if (left < 10) {
        left = 10
      }

      // If tooltip would go below viewport, show above
      if (top + 300 > viewportHeight) {
        top = rect.top - 310
      }

      setPosition({ top, left })
    }
  }, [isOpen])

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setIsOpen(true)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!showFullView) {
        setIsOpen(false)
      }
    }, 300)
  }

  const handleTooltipMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }

  const handleTooltipMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false)
      setShowFullView(false)
    }, 300)
  }

  if (!term) {
    return <span>{children}</span>
  }

  const TriggerWrapper = inline ? 'span' : 'div'

  return (
    <>
      <TriggerWrapper
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => setShowFullView(!showFullView)}
        className={`
          relative cursor-help
          ${inline
            ? 'border-b-2 border-dotted border-primary-400 text-primary-700 hover:text-primary-800 hover:border-primary-600 transition-colors'
            : 'block'
          }
        `}
      >
        {children}
        {inline && (
          <BookOpen className="inline-block w-3 h-3 ml-1 opacity-60" />
        )}
      </TriggerWrapper>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            style={{
              position: 'fixed',
              top: position.top,
              left: position.left,
              zIndex: 50
            }}
            className={`
              bg-white rounded-xl shadow-2xl border border-gray-200
              ${showFullView ? 'w-[450px]' : 'w-[380px]'}
              max-h-[80vh] overflow-hidden
            `}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary-50 to-secondary-50 p-4 border-b">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{term.icon}</span>
                  <div>
                    <h3 className="font-bold text-gray-900">{term.term}</h3>
                    <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded">
                      {term.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setIsOpen(false)
                    setShowFullView(false)
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[60vh]">
              {/* Short Definition */}
              <div className="p-4">
                <p className="text-gray-700 font-medium">{term.shortDef}</p>
              </div>

              {/* Full Definition (expandable) */}
              {showFullView && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-4 pb-4"
                >
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {term.fullDef}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Example */}
              {term.example && (
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {term.example.title}
                    </span>
                  </div>
                  <div className="bg-slate-900 text-green-400 p-3 rounded-lg text-xs font-mono whitespace-pre-line overflow-x-auto">
                    {term.example.content.trim()}
                  </div>
                </div>
              )}

              {/* Best Practices */}
              {showFullView && term.bestPractices && term.bestPractices.length > 0 && (
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-green-500 font-bold">✓</span>
                    <span className="text-sm font-semibold text-gray-700">
                      Mejores Prácticas
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {term.bestPractices.slice(0, 3).map((practice, idx) => (
                      <li key={idx} className="text-xs text-gray-600 flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">•</span>
                        {practice}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Common Mistakes */}
              {showFullView && term.commonMistakes && term.commonMistakes.length > 0 && (
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      Errores Comunes
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {term.commonMistakes.slice(0, 2).map((mistake, idx) => (
                      <li key={idx} className="text-xs text-orange-700 bg-orange-50 p-2 rounded">
                        {mistake}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Relationships */}
              {term.relationships && term.relationships.length > 0 && (
                <div className="px-4 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Link2 className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      Relaciones
                    </span>
                  </div>
                  <div className="space-y-2">
                    {term.relationships.slice(0, showFullView ? 3 : 2).map((rel, idx) => (
                      <div key={idx} className="text-xs bg-blue-50 p-2 rounded">
                        <div className="font-semibold text-blue-700 mb-1">
                          → {getGlossaryTerm(rel.relatedTerm)?.term || rel.relatedTerm}
                        </div>
                        <div className="text-blue-600">
                          {rel.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Modules */}
              {term.relatedModules && term.relatedModules.length > 0 && (
                <div className="px-4 pb-4">
                  <div className="text-xs text-gray-500">
                    Módulos relacionados:{' '}
                    {term.relatedModules.map((mod, idx) => (
                      <span key={idx}>
                        <span className="bg-gray-100 px-1.5 py-0.5 rounded">
                          {mod}
                        </span>
                        {idx < term.relatedModules.length - 1 && ' '}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-gray-50 p-3 border-t">
              <button
                onClick={() => setShowFullView(!showFullView)}
                className="text-xs text-primary-600 hover:text-primary-800 flex items-center gap-1"
              >
                <ArrowRight className="w-3 h-3" />
                {showFullView ? 'Ver menos' : 'Ver más detalles'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GlossaryTooltip
