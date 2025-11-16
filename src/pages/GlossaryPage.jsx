import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  BookOpen,
  ChevronRight,
  Lightbulb,
  AlertTriangle,
  Link2,
  Filter,
  Grid3X3,
  List
} from 'lucide-react'
import {
  glossaryTerms as glossaryData,
  searchGlossary,
  getGlossaryCategories,
  getTermsByCategory,
  getGlossaryTerm
} from '../data/glossaryData'
import Card from '../components/ui/Card'

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [expandedTerm, setExpandedTerm] = useState(null)
  const [viewMode, setViewMode] = useState('grid') // grid or list

  const categories = getGlossaryCategories()

  const filteredTerms = useMemo(() => {
    let terms = []

    if (searchTerm) {
      terms = searchGlossary(searchTerm)
    } else if (selectedCategory === 'all') {
      terms = Object.values(glossaryData)
    } else {
      terms = getTermsByCategory(selectedCategory)
    }

    return terms
  }, [searchTerm, selectedCategory])

  const categoryIcons = {
    'Contabilidad': '📊',
    'Inventario': '📦',
    'Ventas': '💰',
    'Compras': '🛒',
    'CRM': '🤝',
    'RRHH': '👥',
    'General': '⚙️'
  }

  return (
    <div className="max-w-6xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl mb-4">
          <BookOpen className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Glosario Interactivo de Odoo
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explora los términos clave de Odoo con ejemplos prácticos, mejores prácticas
          y relaciones entre conceptos. Haz clic en cualquier término para ver más detalles.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <Card className="p-4">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar términos... (ej: factura, inventario, cuenta)"
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setSelectedCategory('all')
              }}
              className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg ${
                viewMode === 'grid'
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg ${
                viewMode === 'list'
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {searchTerm && (
          <div className="mt-2 text-sm text-gray-600">
            {filteredTerms.length} término{filteredTerms.length !== 1 ? 's' : ''} encontrado{filteredTerms.length !== 1 ? 's' : ''}
          </div>
        )}
      </Card>

      {/* Category Filters */}
      {!searchTerm && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-white text-gray-700 hover:bg-gray-100 border'
            }`}
          >
            <span className="mr-2">📚</span>
            Todos ({Object.keys(glossaryData).length})
          </button>
          {categories.map((category) => {
            const count = getTermsByCategory(category).length
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border'
                }`}
              >
                <span className="mr-2">{categoryIcons[category] || '📋'}</span>
                {category} ({count})
              </button>
            )
          })}
        </div>
      )}

      {/* Terms Display */}
      {filteredTerms.length === 0 ? (
        <Card className="p-8 text-center">
          <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            No encontramos ese término
          </h3>
          <p className="text-gray-600">
            Intenta con otras palabras o explora las categorías
          </p>
        </Card>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTerms.map((term, index) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`h-full cursor-pointer transition-all hover:shadow-lg ${
                  expandedTerm === term.term ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setExpandedTerm(expandedTerm === term.term ? null : term.term)}
              >
                <div className="p-4">
                  {/* Term Header */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{term.icon}</span>
                      <div>
                        <h3 className="font-bold text-gray-900">{term.term}</h3>
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {term.category}
                        </span>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-400 transition-transform ${
                        expandedTerm === term.term ? 'rotate-90' : ''
                      }`}
                    />
                  </div>

                  {/* Short Definition */}
                  <p className="text-sm text-gray-700 mb-3">{term.shortDef}</p>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedTerm === term.term && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="space-y-3 border-t pt-3"
                      >
                        {/* Full Definition */}
                        <div className="text-xs text-gray-600 bg-gray-50 p-3 rounded">
                          {term.fullDef}
                        </div>

                        {/* Example */}
                        {term.example && (
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <Lightbulb className="w-3 h-3 text-yellow-500" />
                              <span className="text-xs font-semibold">{term.example.title}</span>
                            </div>
                            <div className="bg-slate-900 text-green-400 p-2 rounded text-xs font-mono whitespace-pre-line overflow-x-auto">
                              {term.example.content.trim()}
                            </div>
                          </div>
                        )}

                        {/* Best Practices Preview */}
                        {term.bestPractices && term.bestPractices.length > 0 && (
                          <div>
                            <div className="text-xs font-semibold text-green-700 mb-1">
                              ✓ Mejores Prácticas:
                            </div>
                            <ul className="text-xs text-gray-600 space-y-1">
                              {term.bestPractices.slice(0, 2).map((bp, i) => (
                                <li key={i} className="flex items-start gap-1">
                                  <span className="text-green-500">•</span>
                                  {bp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Relationships */}
                        {term.relationships && term.relationships.length > 0 && (
                          <div>
                            <div className="flex items-center gap-1 mb-1">
                              <Link2 className="w-3 h-3 text-blue-500" />
                              <span className="text-xs font-semibold">Relacionado con:</span>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {term.relationships.map((rel, i) => (
                                <span
                                  key={i}
                                  className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded"
                                >
                                  {getGlossaryTerm(rel.relatedTerm)?.term || rel.relatedTerm}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      ) : (
        /* List View */
        <div className="space-y-3">
          {filteredTerms.map((term, index) => (
            <motion.div
              key={term.term}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.03 }}
            >
              <Card
                className={`cursor-pointer transition-all hover:shadow-md ${
                  expandedTerm === term.term ? 'ring-2 ring-primary-500' : ''
                }`}
                onClick={() => setExpandedTerm(expandedTerm === term.term ? null : term.term)}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{term.icon}</span>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{term.term}</h3>
                        <p className="text-sm text-gray-600">{term.shortDef}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                        {term.category}
                      </span>
                      <ChevronRight
                        className={`w-6 h-6 text-gray-400 transition-transform ${
                          expandedTerm === term.term ? 'rotate-90' : ''
                        }`}
                      />
                    </div>
                  </div>

                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedTerm === term.term && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 pt-4 border-t space-y-4"
                      >
                        {/* Full Definition */}
                        <div>
                          <h4 className="font-semibold text-gray-800 mb-2">Explicación Completa</h4>
                          <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">
                            {term.fullDef}
                          </p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                          {/* Example */}
                          {term.example && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-5 h-5 text-yellow-500" />
                                <h4 className="font-semibold text-gray-800">
                                  {term.example.title}
                                </h4>
                              </div>
                              <div className="bg-slate-900 text-green-400 p-4 rounded-lg text-sm font-mono whitespace-pre-line overflow-x-auto">
                                {term.example.content.trim()}
                              </div>
                            </div>
                          )}

                          {/* Best Practices & Mistakes */}
                          <div className="space-y-4">
                            {term.bestPractices && term.bestPractices.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-green-700 mb-2 flex items-center gap-2">
                                  <span className="text-lg">✓</span>
                                  Mejores Prácticas
                                </h4>
                                <ul className="space-y-2">
                                  {term.bestPractices.map((bp, i) => (
                                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                                      <span className="text-green-500 mt-1">•</span>
                                      {bp}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {term.commonMistakes && term.commonMistakes.length > 0 && (
                              <div>
                                <h4 className="font-semibold text-orange-700 mb-2 flex items-center gap-2">
                                  <AlertTriangle className="w-5 h-5" />
                                  Errores Comunes
                                </h4>
                                <ul className="space-y-2">
                                  {term.commonMistakes.map((mistake, i) => (
                                    <li key={i} className="text-sm text-orange-800 bg-orange-50 p-2 rounded">
                                      {mistake}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>

                        {/* Relationships */}
                        {term.relationships && term.relationships.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                              <Link2 className="w-5 h-5" />
                              Relaciones con Otros Conceptos
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {term.relationships.map((rel, i) => (
                                <div key={i} className="bg-blue-50 p-3 rounded-lg">
                                  <div className="font-medium text-blue-800 mb-1">
                                    → {getGlossaryTerm(rel.relatedTerm)?.term || rel.relatedTerm}
                                  </div>
                                  <div className="text-sm text-blue-700">
                                    {rel.explanation}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Related Modules */}
                        {term.relatedModules && term.relatedModules.length > 0 && (
                          <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span className="font-medium">Módulos relacionados:</span>
                            {term.relatedModules.map((mod, i) => (
                              <span key={i} className="bg-gray-200 px-2 py-1 rounded">
                                {mod}
                              </span>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      )}

      {/* Quick Navigation */}
      <Card className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200">
        <div className="flex items-start gap-4">
          <BookOpen className="w-8 h-8 text-primary-600 flex-shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-primary-800 mb-2">
              Tips para usar el Glosario
            </h3>
            <ul className="text-primary-700 space-y-2 text-sm">
              <li>• <strong>En las lecciones:</strong> Verás términos subrayados con líneas punteadas. Pasa el mouse sobre ellos para ver definiciones rápidas.</li>
              <li>• <strong>Relaciones:</strong> Cada término muestra cómo se conecta con otros conceptos de Odoo.</li>
              <li>• <strong>Ejemplos prácticos:</strong> Los ejemplos muestran exactamente cómo se ve la información en Odoo.</li>
              <li>• <strong>Mejores prácticas:</strong> Consejos de la comunidad Odoo para evitar errores comunes.</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default GlossaryPage
