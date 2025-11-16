import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search,
  BookOpen,
  ChevronRight,
  Lightbulb,
  AlertCircle,
  Link2,
  Grid3X3,
  List,
  X
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
  const [viewMode, setViewMode] = useState('grid')

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

  const categoryColors = {
    'Contabilidad': { bg: 'bg-primary-50', text: 'text-primary-700', border: 'border-primary-200' },
    'Inventario': { bg: 'bg-secondary-50', text: 'text-secondary-700', border: 'border-secondary-200' },
    'Ventas': { bg: 'bg-accent-aqua/10', text: 'text-primary-600', border: 'border-accent-aqua/30' },
    'Compras': { bg: 'bg-warning/10', text: 'text-warning', border: 'border-warning/30' },
    'CRM': { bg: 'bg-success/10', text: 'text-success', border: 'border-success/30' },
    'RRHH': { bg: 'bg-error/10', text: 'text-error', border: 'border-error/30' },
    'General': { bg: 'bg-neutral-100', text: 'text-neutral-700', border: 'border-neutral-200' }
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl mb-6">
          <BookOpen className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-neutral-900 mb-3">
          Glosario de Odoo
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Explora los conceptos clave de Odoo con definiciones claras, ejemplos prácticos
          y las mejores prácticas de la industria.
        </p>
      </motion.div>

      {/* Search and Filters */}
      <Card className="p-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Buscar términos..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value)
                setSelectedCategory('all')
              }}
              className="w-full pl-12 pr-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white text-neutral-800 placeholder-neutral-400"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-neutral-100 p-1 rounded-lg">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2.5 rounded-md transition-colors ${
                viewMode === 'grid'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2.5 rounded-md transition-colors ${
                viewMode === 'list'
                  ? 'bg-white text-primary-600 shadow-sm'
                  : 'text-neutral-500 hover:text-neutral-700'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        {searchTerm && (
          <div className="mt-3 text-sm text-neutral-600">
            {filteredTerms.length} resultado{filteredTerms.length !== 1 ? 's' : ''}
          </div>
        )}
      </Card>

      {/* Category Filters */}
      {!searchTerm && (
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-primary-600 text-white shadow-md'
                : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
            }`}
          >
            Todos ({Object.keys(glossaryData).length})
          </button>
          {categories.map((category) => {
            const count = getTermsByCategory(category).length
            const colors = categoryColors[category] || categoryColors['General']
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2.5 rounded-lg font-medium transition-all ${
                  selectedCategory === category
                    ? 'bg-primary-600 text-white shadow-md'
                    : `bg-white ${colors.text} hover:${colors.bg} border ${colors.border}`
                }`}
              >
                {category} ({count})
              </button>
            )
          })}
        </div>
      )}

      {/* Terms Display */}
      {filteredTerms.length === 0 ? (
        <Card className="p-12 text-center">
          <Search className="w-12 h-12 text-neutral-300 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-neutral-700 mb-2">
            Sin resultados
          </h3>
          <p className="text-neutral-500">
            No encontramos términos con "{searchTerm}". Intenta con otras palabras.
          </p>
        </Card>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredTerms.map((term, index) => {
            const colors = categoryColors[term.category] || categoryColors['General']
            return (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Card
                  className={`h-full cursor-pointer transition-all hover:shadow-lg border-2 ${
                    expandedTerm === term.term
                      ? 'border-primary-500 shadow-lg'
                      : 'border-transparent hover:border-neutral-200'
                  }`}
                  onClick={() => setExpandedTerm(expandedTerm === term.term ? null : term.term)}
                >
                  <div className="p-5">
                    {/* Term Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl">{term.icon}</span>
                        <div>
                          <h3 className="font-bold text-neutral-900 text-lg leading-tight">
                            {term.term}
                          </h3>
                          <span className={`text-xs font-medium px-2 py-0.5 rounded ${colors.bg} ${colors.text}`}>
                            {term.category}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-neutral-400 transition-transform flex-shrink-0 ${
                          expandedTerm === term.term ? 'rotate-90' : ''
                        }`}
                      />
                    </div>

                    {/* Short Definition */}
                    <p className="text-sm text-neutral-700 leading-relaxed">{term.shortDef}</p>

                    {/* Expanded Content */}
                    <AnimatePresence>
                      {expandedTerm === term.term && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="space-y-4 mt-4 pt-4 border-t border-neutral-100"
                        >
                          {/* Full Definition */}
                          <div className="text-xs text-neutral-600 bg-neutral-50 p-3 rounded-lg leading-relaxed">
                            {term.fullDef}
                          </div>

                          {/* Example */}
                          {term.example && (
                            <div>
                              <div className="flex items-center gap-2 mb-2">
                                <Lightbulb className="w-4 h-4 text-secondary-500" />
                                <span className="text-xs font-semibold text-neutral-800">
                                  {term.example.title}
                                </span>
                              </div>
                              <div className="bg-neutral-800 text-accent-aqua p-3 rounded-md text-xs font-mono whitespace-pre-line overflow-x-auto">
                                {term.example.content.trim()}
                              </div>
                            </div>
                          )}

                          {/* Best Practices Preview */}
                          {term.bestPractices && term.bestPractices.length > 0 && (
                            <div>
                              <div className="text-xs font-semibold text-success mb-2 flex items-center gap-1">
                                <span>✓</span> Mejores Prácticas
                              </div>
                              <ul className="text-xs text-neutral-700 space-y-1.5">
                                {term.bestPractices.slice(0, 2).map((bp, i) => (
                                  <li key={i} className="flex items-start gap-2 leading-relaxed">
                                    <span className="text-success mt-0.5">•</span>
                                    {bp}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Relationships */}
                          {term.relationships && term.relationships.length > 0 && (
                            <div>
                              <div className="flex items-center gap-1.5 mb-2">
                                <Link2 className="w-3.5 h-3.5 text-accent-aqua" />
                                <span className="text-xs font-semibold text-neutral-800">
                                  Relacionado con:
                                </span>
                              </div>
                              <div className="flex flex-wrap gap-1.5">
                                {term.relationships.map((rel, i) => (
                                  <span
                                    key={i}
                                    className="text-xs bg-accent-aqua/10 text-primary-600 px-2 py-1 rounded font-medium"
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
            )
          })}
        </div>
      ) : (
        /* List View */
        <div className="space-y-4">
          {filteredTerms.map((term, index) => {
            const colors = categoryColors[term.category] || categoryColors['General']
            return (
              <motion.div
                key={term.term}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.03 }}
              >
                <Card
                  className={`cursor-pointer transition-all hover:shadow-md border-2 ${
                    expandedTerm === term.term
                      ? 'border-primary-500 shadow-md'
                      : 'border-transparent hover:border-neutral-200'
                  }`}
                  onClick={() => setExpandedTerm(expandedTerm === term.term ? null : term.term)}
                >
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-5">
                        <span className="text-4xl">{term.icon}</span>
                        <div>
                          <h3 className="font-bold text-neutral-900 text-xl mb-1">{term.term}</h3>
                          <p className="text-sm text-neutral-600">{term.shortDef}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className={`text-sm font-medium px-3 py-1.5 rounded-lg ${colors.bg} ${colors.text}`}>
                          {term.category}
                        </span>
                        <ChevronRight
                          className={`w-6 h-6 text-neutral-400 transition-transform ${
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
                          className="mt-6 pt-6 border-t border-neutral-100 space-y-6"
                        >
                          {/* Full Definition */}
                          <div>
                            <h4 className="font-semibold text-neutral-800 mb-3">Definición Completa</h4>
                            <p className="text-neutral-600 bg-neutral-50 p-4 rounded-lg leading-relaxed">
                              {term.fullDef}
                            </p>
                          </div>

                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Example */}
                            {term.example && (
                              <div>
                                <div className="flex items-center gap-2 mb-3">
                                  <Lightbulb className="w-5 h-5 text-secondary-500" />
                                  <h4 className="font-semibold text-neutral-800">
                                    {term.example.title}
                                  </h4>
                                </div>
                                <div className="bg-neutral-800 text-accent-aqua p-4 rounded-lg text-sm font-mono whitespace-pre-line overflow-x-auto">
                                  {term.example.content.trim()}
                                </div>
                              </div>
                            )}

                            {/* Best Practices & Mistakes */}
                            <div className="space-y-5">
                              {term.bestPractices && term.bestPractices.length > 0 && (
                                <div>
                                  <h4 className="font-semibold text-success mb-3 flex items-center gap-2">
                                    <span className="text-lg">✓</span>
                                    Mejores Prácticas
                                  </h4>
                                  <ul className="space-y-2">
                                    {term.bestPractices.map((bp, i) => (
                                      <li key={i} className="text-sm text-neutral-700 flex items-start gap-2 leading-relaxed">
                                        <span className="text-success mt-1">•</span>
                                        {bp}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              )}

                              {term.commonMistakes && term.commonMistakes.length > 0 && (
                                <div>
                                  <h4 className="font-semibold text-warning mb-3 flex items-center gap-2">
                                    <AlertCircle className="w-5 h-5" />
                                    Errores Comunes
                                  </h4>
                                  <ul className="space-y-2">
                                    {term.commonMistakes.map((mistake, i) => (
                                      <li key={i} className="text-sm text-neutral-700 bg-warning/10 p-3 rounded-lg leading-relaxed">
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
                              <h4 className="font-semibold text-primary-600 mb-4 flex items-center gap-2">
                                <Link2 className="w-5 h-5" />
                                Conceptos Relacionados
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {term.relationships.map((rel, i) => (
                                  <div key={i} className="bg-accent-aqua/10 p-4 rounded-lg">
                                    <div className="font-medium text-primary-600 mb-2">
                                      → {getGlossaryTerm(rel.relatedTerm)?.term || rel.relatedTerm}
                                    </div>
                                    <div className="text-sm text-neutral-600 leading-relaxed">
                                      {rel.explanation}
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Related Modules */}
                          {term.relatedModules && term.relatedModules.length > 0 && (
                            <div className="flex items-center gap-3 text-sm text-neutral-600">
                              <span className="font-medium">Módulos relacionados:</span>
                              {term.relatedModules.map((mod, i) => (
                                <span key={i} className="bg-neutral-200 text-neutral-700 px-3 py-1.5 rounded-lg font-medium">
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
            )
          })}
        </div>
      )}

      {/* Tips Card */}
      <Card className="p-6 bg-primary-50 border border-primary-100">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-primary-800 mb-3">
              Cómo usar el Glosario
            </h3>
            <ul className="text-primary-700 space-y-2 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span><strong>En las lecciones:</strong> Los términos subrayados con línea punteada muestran definiciones al pasar el cursor.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span><strong>Relaciones:</strong> Descubre cómo los conceptos de Odoo se conectan entre sí.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span><strong>Ejemplos:</strong> Visualiza exactamente cómo se estructura la información en el sistema.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary-500 mt-1">•</span>
                <span><strong>Mejores prácticas:</strong> Aprende de la experiencia de la comunidad Odoo.</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default GlossaryPage
