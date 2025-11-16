import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  ArrowRight,
  BookOpen
} from 'lucide-react'
import { faqCategories, faqData, getFaqsByCategory, searchFaqs, getRelatedFaqs } from '../data/faqData'
import Card from '../components/ui/Card'

const FAQPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedFaq, setExpandedFaq] = useState(null)

  const filteredFaqs = useMemo(() => {
    if (searchTerm) {
      return searchFaqs(searchTerm)
    }
    if (selectedCategory === 'all') {
      return faqData
    }
    return getFaqsByCategory(selectedCategory)
  }, [selectedCategory, searchTerm])

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  const getCategoryInfo = (categoryId) => {
    return faqCategories.find(c => c.id === categoryId)
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
          <HelpCircle className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Preguntas Frecuentes
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Respuestas claras a las dudas más comunes. Si no encuentras lo que buscas,
          explora nuestras misiones prácticas o la ayuda de emergencia.
        </p>
      </motion.div>

      {/* Search Bar */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Busca tu pregunta... (ej: factura, inventario, error)"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              setSelectedCategory('all')
            }}
            className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
        {searchTerm && (
          <div className="mt-2 text-sm text-gray-600">
            {filteredFaqs.length} resultado{filteredFaqs.length !== 1 ? 's' : ''} encontrado{filteredFaqs.length !== 1 ? 's' : ''}
          </div>
        )}
      </Card>

      {/* Categories */}
      {!searchTerm && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`p-3 rounded-lg text-center transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary-100 border-2 border-primary-500'
                : 'bg-white border-2 border-gray-200 hover:border-primary-300'
            }`}
          >
            <div className="text-2xl mb-1">📚</div>
            <div className="text-sm font-medium">Todas</div>
          </button>
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`p-3 rounded-lg text-center transition-all ${
                selectedCategory === cat.id
                  ? 'bg-primary-100 border-2 border-primary-500'
                  : 'bg-white border-2 border-gray-200 hover:border-primary-300'
              }`}
            >
              <div className="text-2xl mb-1">{cat.icon}</div>
              <div className="text-xs font-medium">{cat.name}</div>
            </button>
          ))}
        </div>
      )}

      {/* Category Description */}
      {selectedCategory !== 'all' && !searchTerm && (
        <Card className="p-4 bg-primary-50 border-primary-200">
          <div className="flex items-center gap-3">
            <span className="text-3xl">{getCategoryInfo(selectedCategory)?.icon}</span>
            <div>
              <h3 className="font-semibold text-primary-800">
                {getCategoryInfo(selectedCategory)?.name}
              </h3>
              <p className="text-sm text-primary-700">
                {getCategoryInfo(selectedCategory)?.description}
              </p>
            </div>
          </div>
        </Card>
      )}

      {/* FAQ List */}
      <div className="space-y-3">
        {filteredFaqs.length === 0 ? (
          <Card className="p-8 text-center">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              No encontramos esa pregunta
            </h3>
            <p className="text-gray-600 mb-4">
              Intenta con otras palabras o explora las categorías
            </p>
          </Card>
        ) : (
          <AnimatePresence>
            {filteredFaqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="overflow-hidden">
                  {/* Question */}
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full p-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl">{getCategoryInfo(faq.category)?.icon}</span>
                      <div>
                        <h3 className="font-semibold text-gray-800 pr-4">
                          {faq.question}
                        </h3>
                        {searchTerm && (
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                            {getCategoryInfo(faq.category)?.name}
                          </span>
                        )}
                      </div>
                    </div>
                    {expandedFaq === faq.id ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                    )}
                  </button>

                  {/* Answer */}
                  <AnimatePresence>
                    {expandedFaq === faq.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="p-4 pt-0 border-t bg-gray-50">
                          <div className="prose prose-sm max-w-none">
                            <div className="whitespace-pre-line text-gray-700 leading-relaxed">
                              {faq.answer.trim()}
                            </div>
                          </div>

                          {/* Related Questions */}
                          {faq.relatedQuestions && faq.relatedQuestions.length > 0 && (
                            <div className="mt-4 pt-4 border-t border-gray-200">
                              <h4 className="text-sm font-semibold text-gray-700 mb-2">
                                Preguntas relacionadas:
                              </h4>
                              <div className="space-y-1">
                                {getRelatedFaqs(faq.id).map((relatedFaq) => (
                                  <button
                                    key={relatedFaq.id}
                                    onClick={() => {
                                      setExpandedFaq(relatedFaq.id)
                                      // Scroll to the FAQ
                                      setTimeout(() => {
                                        document.getElementById(relatedFaq.id)?.scrollIntoView({
                                          behavior: 'smooth',
                                          block: 'center'
                                        })
                                      }, 100)
                                    }}
                                    className="flex items-center text-sm text-primary-600 hover:text-primary-800"
                                  >
                                    <ArrowRight className="w-3 h-3 mr-1" />
                                    {relatedFaq.question}
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>

      {/* Bottom CTA */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <div className="flex items-start gap-4">
          <BookOpen className="w-8 h-8 text-blue-600 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-blue-800 mb-2">
              ¿No encontraste lo que buscabas?
            </h3>
            <p className="text-blue-700 mb-3">
              Prueba nuestras misiones prácticas donde te guiamos paso a paso, o visita
              la Ayuda de Emergencia para problemas específicos.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="/missions" className="text-sm font-medium text-blue-600 hover:text-blue-800 underline">
                Ver Misiones Prácticas
              </a>
              <a href="/emergency-help" className="text-sm font-medium text-blue-600 hover:text-blue-800 underline">
                Ayuda de Emergencia
              </a>
              <a href="/quick-guides" className="text-sm font-medium text-blue-600 hover:text-blue-800 underline">
                Guías Rápidas
              </a>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default FAQPage
