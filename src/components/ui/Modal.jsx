import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Button from './Button'

const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  footer,
}) => {
  const sizes = {
    sm: 'max-w-md',
    md: 'max-w-2xl',
    lg: 'max-w-4xl',
    xl: 'max-w-6xl',
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - Mentora Hub: Sin blur, overlay simple */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              // Mentora Hub: Border radius 10-12px, sombra sutil
              className={`bg-white rounded-brand-lg border border-neutral-300 shadow-lg w-full ${sizes[size]} max-h-[90vh] overflow-hidden`}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-neutral-200">
                <h2 className="text-2xl font-heading font-bold text-primary-700">{title}</h2>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-neutral-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-neutral-500" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(90vh-180px)]">
                {children}
              </div>

              {/* Footer */}
              {footer && (
                <div className="flex items-center justify-end gap-3 p-6 border-t border-neutral-200 bg-neutral-50">
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default Modal
