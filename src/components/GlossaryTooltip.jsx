import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  BookOpen,
  Lightbulb,
  AlertCircle,
  Link2,
  ChevronDown,
  ChevronUp,
  X
} from 'lucide-react'
import { getGlossaryTerm } from '../data/glossaryData'
import MarkdownText from './MarkdownText'

const GlossaryTooltip = ({ termKey, children, inline = true }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const [showFullView, setShowFullView] = useState(false)
  const triggerRef = useRef(null)
  const timeoutRef = useRef(null)

  const term = getGlossaryTerm(termKey)

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      const viewportWidth = window.innerWidth
      const viewportHeight = window.innerHeight

      let top = rect.bottom + 8
      let left = rect.left

      if (left + 420 > viewportWidth) {
        left = viewportWidth - 440
      }
      if (left < 10) {
        left = 10
      }

      if (top + 350 > viewportHeight) {
        top = rect.top - 360
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
          relative cursor-help inline-flex items-center gap-1
          ${inline
            ? 'border-b border-dashed border-primary-400 text-primary-600 hover:text-primary-700 hover:border-primary-500 transition-colors duration-200'
            : 'block'
          }
        `}
      >
        {children}
        {inline && (
          <BookOpen className="inline-block w-3.5 h-3.5 opacity-70" />
        )}
      </TriggerWrapper>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            onMouseEnter={handleTooltipMouseEnter}
            onMouseLeave={handleTooltipMouseLeave}
            style={{
              position: 'fixed',
              top: position.top,
              left: position.left,
              zIndex: 50
            }}
            className={`
              bg-white rounded-lg shadow-xl border border-neutral-200
              ${showFullView ? 'w-[440px]' : 'w-[400px]'}
              max-h-[75vh] overflow-hidden
            `}
          >
            {/* Header */}
            <div className="bg-primary-600 px-5 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl bg-white/10 p-2 rounded-md">{term.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white text-lg leading-tight">
                      {term.term}
                    </h3>
                    <span className="text-xs text-primary-100 font-medium">
                      {term.category}
                    </span>
                  </div>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsOpen(false)
                    setShowFullView(false)
                  }}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="overflow-y-auto max-h-[55vh]">
              {/* Short Definition */}
              <div className="px-5 py-4 border-b border-neutral-100">
                <MarkdownText
                  enableGlossary={true}
                  className="text-neutral-800 font-medium leading-relaxed"
                >
                  {term.shortDef}
                </MarkdownText>
              </div>

              {/* Full Definition (expandable) */}
              {showFullView && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="px-5 py-3 bg-neutral-50 border-b border-neutral-100"
                >
                  <MarkdownText
                    enableGlossary={true}
                    className="text-sm text-neutral-700 leading-relaxed"
                  >
                    {term.fullDef}
                  </MarkdownText>
                </motion.div>
              )}

              {/* Example */}
              {term.example && (
                <div className="px-5 py-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-6 h-6 bg-secondary-500 rounded flex items-center justify-center">
                      <Lightbulb className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-neutral-800">
                      {term.example.title}
                    </span>
                  </div>
                  <div className="bg-neutral-800 p-4 rounded-md overflow-x-auto">
                    <MarkdownText
                      enableGlossary={true}
                      className="text-xs text-accent-aqua font-mono whitespace-pre-line leading-relaxed"
                    >
                      {term.example.content}
                    </MarkdownText>
                  </div>
                </div>
              )}

              {/* Best Practices */}
              {showFullView && term.bestPractices && term.bestPractices.length > 0 && (
                <div className="px-5 py-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 bg-success rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                    <span className="text-sm font-semibold text-neutral-800">
                      Mejores Prácticas
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {term.bestPractices.slice(0, 3).map((practice, idx) => (
                      <li key={idx} className="text-xs text-neutral-700 flex items-start gap-2 leading-relaxed">
                        <span className="text-success mt-0.5 font-bold">•</span>
                        <div className="flex-1">
                          <MarkdownText enableGlossary={true} className="text-xs text-neutral-700 leading-relaxed">
                            {practice}
                          </MarkdownText>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Common Mistakes */}
              {showFullView && term.commonMistakes && term.commonMistakes.length > 0 && (
                <div className="px-5 py-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 bg-warning rounded flex items-center justify-center">
                      <AlertCircle className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-neutral-800">
                      Evita estos errores
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {term.commonMistakes.slice(0, 2).map((mistake, idx) => (
                      <li key={idx} className="text-xs text-neutral-700 bg-warning/10 p-2.5 rounded leading-relaxed">
                        <MarkdownText enableGlossary={true} className="text-xs text-neutral-700 leading-relaxed">
                          {mistake}
                        </MarkdownText>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Relationships */}
              {term.relationships && term.relationships.length > 0 && (
                <div className="px-5 py-4 border-b border-neutral-100">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-5 h-5 bg-accent-aqua rounded flex items-center justify-center">
                      <Link2 className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-sm font-semibold text-neutral-800">
                      Conceptos Relacionados
                    </span>
                  </div>
                  <div className="space-y-2">
                    {term.relationships.slice(0, showFullView ? 3 : 2).map((rel, idx) => (
                      <div key={idx} className="text-xs bg-accent-aqua/10 p-3 rounded">
                        <div className="font-semibold text-primary-600 mb-1">
                          → {getGlossaryTerm(rel.relatedTerm)?.term || rel.relatedTerm}
                        </div>
                        <MarkdownText enableGlossary={true} className="text-neutral-600 leading-relaxed text-xs">
                          {rel.explanation}
                        </MarkdownText>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Related Modules */}
              {term.relatedModules && term.relatedModules.length > 0 && (
                <div className="px-5 py-3 bg-neutral-50">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs text-neutral-500 font-medium">Módulos:</span>
                    {term.relatedModules.map((mod, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-neutral-200 text-neutral-700 px-2 py-1 rounded font-medium"
                      >
                        {mod}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="bg-neutral-50 px-5 py-3 border-t border-neutral-200">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setShowFullView(!showFullView)
                }}
                className="text-xs text-primary-600 hover:text-primary-700 font-medium flex items-center gap-1 transition-colors"
              >
                {showFullView ? (
                  <>
                    <ChevronUp className="w-3.5 h-3.5" />
                    Mostrar menos
                  </>
                ) : (
                  <>
                    <ChevronDown className="w-3.5 h-3.5" />
                    Ver información completa
                  </>
                )}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default GlossaryTooltip
