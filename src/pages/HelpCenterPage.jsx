import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Search, ChevronDown, ChevronUp, HelpCircle, BookOpen,
  Calendar, Clock, AlertTriangle, Heart, LifeBuoy, Shield,
  CheckCircle, Info
} from 'lucide-react'
import { Card, Button, Badge } from '../components/ui'
import MarkdownRenderer from '../components/common/MarkdownRenderer'
import { faqCategories, faqData, getFaqsByCategory, searchFaqs, getRelatedFaqs } from '../data/faqData'
import { dailyTasks, warningSignals } from '../data/quickGuides'

const HelpCenterPage = () => {
  const [activeTab, setActiveTab] = useState('faq')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedItem, setExpandedItem] = useState(null)

  const tabs = [
    { id: 'faq', label: 'Preguntas Frecuentes', icon: HelpCircle },
    { id: 'guides', label: 'Guías Rápidas', icon: Calendar },
    { id: 'emergency', label: 'Emergencias', icon: LifeBuoy }
  ]

  const emergencyProblems = [
    {
      id: 'wrong-invoice',
      emoji: '😱',
      title: 'Confirmé una factura con datos incorrectos',
      severity: 'medium',
      shortAnswer: 'Tranquilo, tiene solución. Crea una Nota de Crédito.',
      steps: [
        'NO ENTRES EN PÁNICO - Esto le pasa a todos',
        'Ve a la factura incorrecta en Facturación → Clientes → Facturas',
        'Haz clic en "Agregar nota de crédito"',
        'Confirma la nota de crédito',
        'Crea una nueva factura con los datos correctos'
      ]
    },
    {
      id: 'deleted-contact',
      emoji: '😰',
      title: 'Archivé o eliminé un contacto por error',
      severity: 'low',
      shortAnswer: 'Los contactos archivados se pueden recuperar fácilmente.',
      steps: [
        'Ve a Contactos desde el menú principal',
        'Activa el filtro "Archivados"',
        'Encuentra el contacto en la lista',
        'Abre el contacto → Menú Acción → "Desarchivar"'
      ]
    },
    {
      id: 'wrong-payment',
      emoji: '💸',
      title: 'Registré un pago con el monto equivocado',
      severity: 'medium',
      shortAnswer: 'Puedes revertir el pago y crear uno nuevo.',
      steps: [
        'Ve a Facturación → Clientes → Pagos',
        'Abre el pago incorrecto',
        'Haz clic en "Revertir" o "Cancelar"',
        'Crea el pago correcto desde la factura original'
      ]
    },
    {
      id: 'cant-find-invoice',
      emoji: '🔍',
      title: 'No encuentro una factura que creé',
      severity: 'low',
      shortAnswer: 'Usa los filtros para encontrarla.',
      steps: [
        'Ve a Facturación → Clientes → Facturas',
        'Quita todos los filtros activos (clic en X)',
        'Busca por número de factura o cliente',
        'Revisa los diferentes estados (Borrador, Pagada, etc.)'
      ]
    },
    {
      id: 'system-slow',
      emoji: '🐌',
      title: 'El sistema está muy lento',
      severity: 'low',
      shortAnswer: 'Puede ser tu internet o el navegador.',
      steps: [
        'Espera unos segundos a que cargue',
        'Refresca la página (F5)',
        'Cierra pestañas del navegador innecesarias',
        'Limpia el caché del navegador',
        'Reinicia el navegador completamente'
      ]
    }
  ]

  const filteredFaqs = useMemo(() => {
    if (searchTerm && activeTab === 'faq') {
      return searchFaqs(searchTerm)
    }
    if (selectedCategory === 'all') {
      return faqData
    }
    return getFaqsByCategory(selectedCategory)
  }, [selectedCategory, searchTerm, activeTab])

  const filteredEmergencies = emergencyProblems.filter(p =>
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.shortAnswer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getCategoryInfo = (categoryId) => {
    return faqCategories.find(c => c.id === categoryId)
  }

  return (
    <div className="max-w-5xl mx-auto space-y-6 pb-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-2xl mb-4">
          <BookOpen className="w-8 h-8 text-primary-600" />
        </div>
        <h1 className="text-3xl font-heading font-bold text-neutral-900 mb-2">
          Centro de Ayuda
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Todo lo que necesitas saber en un solo lugar. Resuelve dudas, aprende rutinas y soluciona problemas.
        </p>
      </motion.div>

      {/* Tabs de navegación */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'primary' : 'outline'}
            onClick={() => {
              setActiveTab(tab.id)
              setSearchTerm('')
              setExpandedItem(null)
            }}
            className="flex items-center gap-2"
          >
            <tab.icon className="w-4 h-4" />
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Buscador global */}
      <Card className="p-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
          <input
            type="text"
            placeholder={
              activeTab === 'faq'
                ? "Busca tu pregunta... (ej: factura, inventario)"
                : activeTab === 'emergency'
                ? "Describe tu problema... (ej: factura incorrecta)"
                : "Buscar en guías rápidas..."
            }
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value)
              if (activeTab === 'faq') setSelectedCategory('all')
            }}
            className="w-full pl-12 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          />
        </div>
      </Card>

      <AnimatePresence mode="wait">
        {/* TAB: FAQ */}
        {activeTab === 'faq' && (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {/* Categories */}
            {!searchTerm && (
              <div className="grid grid-cols-3 md:grid-cols-7 gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`p-3 rounded-lg text-center transition-all ${
                    selectedCategory === 'all'
                      ? 'bg-primary-100 border-2 border-primary-500'
                      : 'bg-white border-2 border-neutral-200 hover:border-primary-300'
                  }`}
                >
                  <div className="text-xl mb-1">📚</div>
                  <div className="text-xs font-medium">Todas</div>
                </button>
                {faqCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`p-3 rounded-lg text-center transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-primary-100 border-2 border-primary-500'
                        : 'bg-white border-2 border-neutral-200 hover:border-primary-300'
                    }`}
                  >
                    <div className="text-xl mb-1">{cat.icon}</div>
                    <div className="text-xs font-medium">{cat.name}</div>
                  </button>
                ))}
              </div>
            )}

            {/* FAQ List */}
            <div className="space-y-3">
              {filteredFaqs.length === 0 ? (
                <Card className="p-8 text-center">
                  <Search className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-neutral-700 mb-2">
                    No encontramos esa pregunta
                  </h3>
                </Card>
              ) : (
                filteredFaqs.slice(0, 10).map((faq) => (
                  <Card key={faq.id} className="overflow-hidden">
                    <button
                      onClick={() => setExpandedItem(expandedItem === faq.id ? null : faq.id)}
                      className="w-full p-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-xl">{getCategoryInfo(faq.category)?.icon}</span>
                        <h3 className="font-semibold text-neutral-800 pr-4">
                          {faq.question}
                        </h3>
                      </div>
                      {expandedItem === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-neutral-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-neutral-500" />
                      )}
                    </button>
                    <AnimatePresence>
                      {expandedItem === faq.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="p-4 pt-0 border-t bg-neutral-50">
                            <MarkdownRenderer
                              content={faq.answer.trim()}
                              className="text-neutral-700 leading-relaxed"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                ))
              )}
            </div>
          </motion.div>
        )}

        {/* TAB: GUÍAS RÁPIDAS */}
        {activeTab === 'guides' && (
          <motion.div
            key="guides"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            <Card className="p-4 bg-accent-aqua-50 border-accent-aqua-200">
              <div className="flex items-start">
                <Info className="w-6 h-6 text-accent-aqua-600 mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-accent-aqua-800 mb-1">
                    Rutinas simples = Negocio saludable
                  </h3>
                  <p className="text-sm text-accent-aqua-700">
                    No necesitas ser experto. Solo revisa unas pocas cosas cada día.
                  </p>
                </div>
              </div>
            </Card>

            {Object.entries(dailyTasks).map(([key, taskGroup]) => (
              <Card key={key} className="overflow-hidden">
                <div className="bg-primary-50 p-4 border-b border-primary-100">
                  <h3 className="text-lg font-semibold text-primary-800">
                    {taskGroup.title}
                  </h3>
                  <p className="text-sm text-primary-600">{taskGroup.description}</p>
                </div>
                <div className="divide-y divide-neutral-100">
                  {taskGroup.tasks.map((task) => (
                    <div key={task.id} className="p-4 hover:bg-neutral-50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-neutral-800">
                          {task.name}
                        </h4>
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" size="sm">
                            <Clock className="w-3 h-3 mr-1" />
                            {task.timeNeeded}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">
                        <strong>¿Por qué?</strong> {task.whyImportant}
                      </p>
                      <div className="bg-primary-50 p-2 rounded text-sm">
                        <span className="font-medium text-primary-800">Ruta: </span>
                        <span className="font-mono text-primary-900">{task.quickPath}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}

            {/* Señales de Alerta */}
            <Card className="overflow-hidden">
              <div className="bg-secondary-50 p-4 border-b border-secondary-200">
                <h3 className="text-lg font-semibold text-secondary-800 flex items-center">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Señales de Alerta
                </h3>
                <p className="text-sm text-secondary-600">
                  Si ves alguna de estas, actúa pronto
                </p>
              </div>
              <div className="p-4 space-y-3">
                {warningSignals.slice(0, 5).map((warning, index) => (
                  <div
                    key={index}
                    className={`p-3 rounded border-l-4 ${
                      warning.urgency === 'alta'
                        ? 'border-l-accent-red-500 bg-accent-red-50'
                        : warning.urgency === 'media'
                        ? 'border-l-secondary-500 bg-secondary-50'
                        : 'border-l-accent-green-500 bg-accent-green-50'
                    }`}
                  >
                    <h4 className="font-medium text-neutral-800 text-sm">{warning.signal}</h4>
                    <p className="text-xs text-neutral-600 mt-1">
                      <strong>Qué hacer:</strong> {warning.action}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>
        )}

        {/* TAB: EMERGENCIAS */}
        {activeTab === 'emergency' && (
          <motion.div
            key="emergency"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <Card className="p-4 bg-accent-green-50 border-accent-green-200">
              <div className="flex items-start">
                <Heart className="w-6 h-6 text-accent-green-600 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-accent-green-800 mb-1">
                    Respira. Todo tiene solución.
                  </h3>
                  <p className="text-sm text-accent-green-700">
                    En Odoo, casi todos los errores se pueden corregir. No has dañado nada permanentemente.
                  </p>
                </div>
              </div>
            </Card>

            <div className="space-y-3">
              {filteredEmergencies.map((problem) => (
                <Card key={problem.id} className="overflow-hidden">
                  <button
                    onClick={() => setExpandedItem(expandedItem === problem.id ? null : problem.id)}
                    className="w-full p-4 text-left hover:bg-neutral-50 transition-colors"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-2xl mr-3">{problem.emoji}</span>
                        <div>
                          <h3 className="font-semibold text-neutral-800">
                            {problem.title}
                          </h3>
                          <p className="text-sm text-neutral-600">{problem.shortAnswer}</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge
                          variant={
                            problem.severity === 'high' ? 'danger' : problem.severity === 'medium' ? 'warning' : 'success'
                          }
                          size="sm"
                          className="mr-2"
                        >
                          {problem.severity === 'high' ? 'Complejo' : problem.severity === 'medium' ? 'Moderado' : 'Fácil'}
                        </Badge>
                        {expandedItem === problem.id ? (
                          <ChevronUp className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedItem === problem.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-neutral-200 bg-neutral-50 p-4">
                          <h4 className="font-semibold text-neutral-800 mb-3">
                            Pasos para solucionarlo:
                          </h4>
                          <div className="space-y-2">
                            {problem.steps.map((step, index) => (
                              <div key={index} className="flex items-start">
                                <div className="w-6 h-6 rounded-full bg-primary-500 text-white flex items-center justify-center text-sm font-bold mr-3 flex-shrink-0">
                                  {index + 1}
                                </div>
                                <p className="text-neutral-700 text-sm pt-0.5">{step}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              ))}
            </div>

            <Card className="p-4">
              <h3 className="font-semibold text-neutral-800 mb-3 flex items-center">
                <Shield className="w-5 h-5 mr-2 text-primary-600" />
                Reglas de oro
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green-500 mr-2 mt-0.5" />
                  <p className="text-sm text-neutral-700">
                    <strong>Nunca borres directamente.</strong> Usa Nota de Crédito o Revertir.
                  </p>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-accent-green-500 mr-2 mt-0.5" />
                  <p className="text-sm text-neutral-700">
                    <strong>Revisa antes de confirmar.</strong> Prevenir es mejor que corregir.
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default HelpCenterPage
