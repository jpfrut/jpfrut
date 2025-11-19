import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Search,
  Filter,
  Grid3X3,
  List,
  BookOpen,
  Clock,
  Star,
  ChevronDown,
  ChevronRight,
  Award
} from 'lucide-react'
import { getModulesArray, getCategories, getModulesByCategory, getStats } from '../data/modules'
import useStore from '../store/useStore'
import ModuleCard from '../components/ModuleCard'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

// Iconos por categoría (11 categorías completas)
const categoryIcons = {
  'Finance': '💰',
  'Sales': '📊',
  'Websites': '🌐',
  'Supply Chain': '📦',
  'Human Resources': '👥',
  'Services': '🛠️',
  'Marketing': '📢',
  'Productivity': '⚡',
  'Odoo Essentials': '📚',
  'Studio': '🎨',
  'Settings': '⚙️'
}

// Descripciones de categoría (11 categorías completas)
const categoryDescriptions = {
  'Finance': 'Contabilidad, gastos, pagos y gestión financiera',
  'Sales': 'CRM, ventas, punto de venta, suscripciones y alquiler',
  'Websites': 'Sitio web, blog, eLearning, live chat y foros',
  'Supply Chain': 'Inventario, compras, manufactura, calidad y mantenimiento',
  'Human Resources': 'Empleados, nómina, reclutamiento, evaluaciones y flota',
  'Services': 'Proyectos, helpdesk, hojas de tiempo, servicio de campo y planificación',
  'Marketing': 'Email marketing, automatización, SMS, eventos, encuestas y redes sociales',
  'Productivity': 'Documentos, conocimiento, discusiones, calendario, citas y WhatsApp',
  'Odoo Essentials': 'Búsqueda, reportes, actividades, etapas e importación/exportación',
  'Studio': 'Personalización avanzada y desarrollo sin código',
  'Settings': 'Gestión de usuarios, multi-empresa, integraciones e IoT'
}

const ExplorePage = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState('grid')
  const [expandedCategories, setExpandedCategories] = useState(new Set(getCategories()))
  const [showFilters, setShowFilters] = useState(false)
  const [difficultyFilter, setDifficultyFilter] = useState('all')

  const { moduleProgress } = useStore()
  const modules = getModulesArray()
  const categories = getCategories()
  const stats = getStats()

  // Filtrar módulos
  const filteredModules = useMemo(() => {
    return modules.filter(module => {
      const matchesSearch = searchTerm === '' ||
        module.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        module.description.toLowerCase().includes(searchTerm.toLowerCase())

      const matchesCategory = selectedCategory === 'all' || module.category === selectedCategory

      const matchesDifficulty = difficultyFilter === 'all' || module.difficulty === difficultyFilter

      return matchesSearch && matchesCategory && matchesDifficulty
    })
  }, [modules, searchTerm, selectedCategory, difficultyFilter])

  // Agrupar por categoría
  const modulesByCategory = useMemo(() => {
    const grouped = {}
    categories.forEach(cat => {
      const catModules = filteredModules.filter(m => m.category === cat)
      if (catModules.length > 0) {
        grouped[cat] = catModules
      }
    })
    return grouped
  }, [filteredModules, categories])

  const toggleCategory = (category) => {
    const newExpanded = new Set(expandedCategories)
    if (newExpanded.has(category)) {
      newExpanded.delete(category)
    } else {
      newExpanded.add(category)
    }
    setExpandedCategories(newExpanded)
  }

  const getModuleProgress = (moduleId) => {
    const progress = moduleProgress[moduleId]
    if (!progress) return 0
    const module = modules.find(m => m.id === moduleId)
    if (!module) return 0
    return Math.round((progress.completedLessons.length / module.lessons.length) * 100)
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-6 text-white"
      >
        <h1 className="text-3xl font-heading font-bold mb-2">
          Explora Todos los Módulos de Odoo 19
        </h1>
        <p className="text-primary-100 mb-4">
          {stats.totalModules} módulos • {stats.totalLessons} lecciones • {stats.totalTime} de aprendizaje
        </p>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar módulos... (ej: factura, inventario, empleados)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl bg-white text-neutral-800 placeholder-neutral-500 focus:ring-2 focus:ring-secondary-400 outline-none"
          />
        </div>
      </motion.div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-primary-600">{stats.totalModules}</div>
          <div className="text-sm text-neutral-600">Módulos</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-secondary-600">{stats.totalLessons}</div>
          <div className="text-sm text-neutral-600">Lecciones</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent-green-600">{categories.length}</div>
          <div className="text-sm text-neutral-600">Categorías</div>
        </Card>
        <Card className="p-4 text-center">
          <div className="text-2xl font-bold text-accent-purple-600">{Object.keys(moduleProgress).length}</div>
          <div className="text-sm text-neutral-600">En Progreso</div>
        </Card>
      </div>

      {/* Filters */}
      <Card className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant={showFilters ? 'primary' : 'ghost'}
              size="sm"
              icon={<Filter className="w-4 h-4" />}
              onClick={() => setShowFilters(!showFilters)}
            >
              Filtros
            </Button>
            <span className="text-sm text-neutral-500">
              {filteredModules.length} de {modules.length} módulos
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === 'grid' ? 'primary' : 'ghost'}
              size="sm"
              icon={<Grid3X3 className="w-4 h-4" />}
              onClick={() => setViewMode('grid')}
            />
            <Button
              variant={viewMode === 'list' ? 'primary' : 'ghost'}
              size="sm"
              icon={<List className="w-4 h-4" />}
              onClick={() => setViewMode('list')}
            />
          </div>
        </div>

        {/* Filter Options */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 pt-4 border-t grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Category Filter */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Categoría
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Todas las categorías</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>
                        {categoryIcons[cat]} {cat}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Difficulty Filter */}
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Dificultad
                  </label>
                  <select
                    value={difficultyFilter}
                    onChange={(e) => setDifficultyFilter(e.target.value)}
                    className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-primary-500"
                  >
                    <option value="all">Todas</option>
                    <option value="Básico">Básico</option>
                    <option value="Intermedio">Intermedio</option>
                    <option value="Avanzado">Avanzado</option>
                  </select>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>

      {/* Category Quick Navigation */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant={selectedCategory === 'all' ? 'primary' : 'ghost'}
          size="sm"
          onClick={() => setSelectedCategory('all')}
        >
          Todas
        </Button>
        {categories.map(cat => (
          <Button
            key={cat}
            variant={selectedCategory === cat ? 'primary' : 'ghost'}
            size="sm"
            onClick={() => setSelectedCategory(cat)}
          >
            {categoryIcons[cat]} {cat}
          </Button>
        ))}
      </div>

      {/* Modules by Category */}
      {selectedCategory === 'all' ? (
        // Show all categories expanded
        <div className="space-y-6">
          {Object.entries(modulesByCategory).map(([category, catModules]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              {/* Category Header */}
              <button
                onClick={() => toggleCategory(category)}
                className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-neutral-50 to-neutral-100 hover:from-neutral-100 hover:to-neutral-150 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{categoryIcons[category]}</span>
                  <div className="text-left">
                    <h3 className="text-lg font-bold text-neutral-800">{category}</h3>
                    <p className="text-sm text-neutral-600">{categoryDescriptions[category]}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm text-neutral-500">
                    {catModules.length} módulo{catModules.length !== 1 ? 's' : ''}
                  </span>
                  {expandedCategories.has(category) ? (
                    <ChevronDown className="w-5 h-5 text-neutral-400" />
                  ) : (
                    <ChevronRight className="w-5 h-5 text-neutral-400" />
                  )}
                </div>
              </button>

              {/* Category Modules */}
              <AnimatePresence>
                {expandedCategories.has(category) && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="overflow-hidden"
                  >
                    <div className={`p-4 ${
                      viewMode === 'grid'
                        ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                        : 'space-y-3'
                    }`}>
                      {catModules.map((module, index) => (
                        viewMode === 'grid' ? (
                          <ModuleCard key={module.id} module={module} index={index} />
                        ) : (
                          <Link
                            key={module.id}
                            to={`/module/${module.id}`}
                            className="block"
                          >
                            <Card className="p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                  <span className="text-2xl">{module.icon}</span>
                                  <div>
                                    <h4 className="font-semibold text-neutral-800">{module.name}</h4>
                                    <p className="text-sm text-neutral-600 line-clamp-1">{module.description}</p>
                                  </div>
                                </div>
                                <div className="flex items-center gap-4 text-sm text-neutral-500">
                                  <div className="flex items-center gap-1">
                                    <BookOpen className="w-4 h-4" />
                                    {module.lessons.length}
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <Clock className="w-4 h-4" />
                                    {module.estimatedTime}
                                  </div>
                                  <div className={`px-2 py-1 rounded text-xs font-medium ${
                                    module.difficulty === 'Básico' ? 'bg-accent-green-100 text-accent-green-700' :
                                    module.difficulty === 'Intermedio' ? 'bg-secondary-100 text-secondary-700' :
                                    'bg-accent-red-100 text-accent-red-700'
                                  }`}>
                                    {module.difficulty}
                                  </div>
                                  {getModuleProgress(module.id) > 0 && (
                                    <div className="w-16 bg-neutral-200 rounded-full h-2">
                                      <div
                                        className="bg-primary-500 rounded-full h-2"
                                        style={{ width: `${getModuleProgress(module.id)}%` }}
                                      />
                                    </div>
                                  )}
                                </div>
                              </div>
                            </Card>
                          </Link>
                        )
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      ) : (
        // Show filtered modules
        <div className={`${
          viewMode === 'grid'
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
            : 'space-y-4'
        }`}>
          {filteredModules.length === 0 ? (
            <Card className="col-span-full p-8 text-center">
              <Search className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-neutral-700 mb-2">
                No se encontraron módulos
              </h3>
              <p className="text-neutral-600">
                Intenta con otros términos de búsqueda o cambia los filtros
              </p>
            </Card>
          ) : (
            filteredModules.map((module, index) => (
              viewMode === 'grid' ? (
                <ModuleCard key={module.id} module={module} index={index} />
              ) : (
                <Link
                  key={module.id}
                  to={`/module/${module.id}`}
                  className="block"
                >
                  <Card className="p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{module.icon}</span>
                        <div>
                          <h4 className="font-semibold text-neutral-800">{module.name}</h4>
                          <p className="text-sm text-neutral-600 line-clamp-1">{module.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-neutral-500">
                        <span className="text-xs bg-neutral-100 px-2 py-1 rounded">{module.category}</span>
                        <div className="flex items-center gap-1">
                          <BookOpen className="w-4 h-4" />
                          {module.lessons.length}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {module.estimatedTime}
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              )
            ))
          )}
        </div>
      )}

      {/* Helpful Tips */}
      <Card className="p-6 bg-gradient-to-r from-primary-50 to-primary-50 border-primary-200">
        <h3 className="text-lg font-semibold text-primary-800 mb-3">
          💡 ¿No sabes por dónde empezar?
        </h3>
        <div className="space-y-2 text-primary-700">
          <p>• <strong>Si vendes productos:</strong> Empieza con Ventas y Facturación</p>
          <p>• <strong>Si tienes empleados:</strong> Mira los módulos de Recursos Humanos</p>
          <p>• <strong>Si fabricas productos:</strong> Revisa Inventario y Fabricación</p>
          <p>• <strong>Si necesitas un sitio web:</strong> Explora los módulos de Sitios Web</p>
          <p>• <strong>Si quieres vender en línea:</strong> Combina eCommerce con Inventario</p>
        </div>
      </Card>
    </div>
  )
}

export default ExplorePage
