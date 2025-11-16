import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar, Clock, ChevronDown, ChevronUp, AlertTriangle,
  HelpCircle, Book, Search, CheckCircle, Info
} from 'lucide-react'
import { Card, Button, Badge } from '../components/ui'
import { dailyTasks, commonQuestions, glossary, warningSignals } from '../data/quickGuides'

function QuickGuidesPage() {
  const [activeTab, setActiveTab] = useState('daily')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedQuestion, setExpandedQuestion] = useState(null)
  const [showGlossary, setShowGlossary] = useState(false)

  const tabs = [
    { id: 'daily', label: '📅 Tareas Diarias', icon: Calendar },
    { id: 'faq', label: '❓ Preguntas Frecuentes', icon: HelpCircle },
    { id: 'warnings', label: '⚠️ Señales de Alerta', icon: AlertTriangle },
    { id: 'glossary', label: '📖 Glosario', icon: Book }
  ]

  const filteredGlossary = Object.entries(glossary).filter(([term]) =>
    term.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const filteredQuestions = commonQuestions.filter(q =>
    q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    q.shortAnswer.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <div className="flex items-center justify-center mb-4">
          <Clock className="w-12 h-12 text-primary-600 mr-3" />
          <h1 className="text-4xl font-heading font-bold text-gray-800">Guía de Uso Diario</h1>
        </div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Un menú simple de las tareas más comunes que debes hacer para mantener tu negocio organizado.
          <strong> No te compliques, solo sigue estas rutinas.</strong>
        </p>
      </motion.div>

      {/* Mensaje motivacional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <Card className="bg-gradient-to-r from-accent-aqua to-accent-brillante text-white p-6">
          <div className="flex items-start">
            <Info className="w-8 h-8 mr-4 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-semibold mb-2">La clave del éxito: Rutinas simples</h3>
              <p className="text-white/90">
                No necesitas ser experto en computadoras. Solo necesitas revisar unas pocas cosas cada día.
                Como cepillarte los dientes: hazlo siempre y tu negocio estará saludable.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Tabs de navegación */}
      <div className="flex flex-wrap gap-2 justify-center">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'primary' : 'outline'}
            onClick={() => setActiveTab(tab.id)}
            className="flex items-center"
          >
            {tab.label}
          </Button>
        ))}
      </div>

      {/* Contenido por tab */}
      <AnimatePresence mode="wait">
        {/* Tareas Diarias */}
        {activeTab === 'daily' && (
          <motion.div
            key="daily"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {Object.entries(dailyTasks).map(([key, taskGroup]) => (
              <Card key={key} className="overflow-hidden">
                <div className="bg-primary-50 p-4 border-b border-primary-100">
                  <h3 className="text-xl font-semibold text-primary-800">
                    {taskGroup.title}
                  </h3>
                  <p className="text-primary-600">{taskGroup.description}</p>
                </div>
                <div className="divide-y divide-gray-100">
                  {taskGroup.tasks.map((task) => (
                    <div key={task.id} className="p-4 hover:bg-gray-50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-gray-800 text-lg">
                          {task.name}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" size="sm">
                            <Clock className="w-3 h-3 mr-1" />
                            {task.timeNeeded}
                          </Badge>
                          <Badge variant="primary" size="sm">
                            {task.frequency}
                          </Badge>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <p className="text-gray-700">
                            <strong>¿Por qué?</strong> {task.whyImportant}
                          </p>
                        </div>

                        <div className="bg-blue-50 p-3 rounded-lg">
                          <p className="text-sm font-medium text-blue-800 mb-1">
                            🛤️ Cómo llegar:
                          </p>
                          <p className="font-mono text-blue-900 text-sm">
                            {task.quickPath}
                          </p>
                        </div>

                        <div className="bg-yellow-50 p-3 rounded-lg">
                          <p className="text-yellow-800 text-sm">
                            {task.tip}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Preguntas Frecuentes */}
        {activeTab === 'faq' && (
          <motion.div
            key="faq"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {/* Buscador */}
            <Card className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Busca tu pregunta... (ej: 'cancelar factura')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </Card>

            {filteredQuestions.map((q) => (
              <Card key={q.id} className="overflow-hidden">
                <button
                  onClick={() => setExpandedQuestion(
                    expandedQuestion === q.id ? null : q.id
                  )}
                  className="w-full p-4 text-left flex items-start justify-between hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <HelpCircle className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0" />
                      <h4 className="font-semibold text-gray-800">
                        {q.question}
                      </h4>
                    </div>
                    <p className="text-gray-600 ml-7">
                      {q.shortAnswer}
                    </p>
                  </div>
                  {expandedQuestion === q.id ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 ml-2 flex-shrink-0" />
                  )}
                </button>

                <AnimatePresence>
                  {expandedQuestion === q.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-gray-100"
                    >
                      <div className="p-4 bg-gray-50">
                        <h5 className="font-medium text-gray-700 mb-2">
                          Explicación detallada:
                        </h5>
                        <p className="text-gray-600 mb-3">
                          {q.detailedAnswer}
                        </p>
                        <Badge
                          variant={
                            q.warningLevel === 'high'
                              ? 'danger'
                              : q.warningLevel === 'medium'
                              ? 'warning'
                              : 'info'
                          }
                          size="sm"
                        >
                          Tema: {q.relatedTopic}
                        </Badge>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            ))}

            {filteredQuestions.length === 0 && searchTerm && (
              <Card className="p-8 text-center">
                <HelpCircle className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  No encontramos preguntas que coincidan con "{searchTerm}".
                  Intenta con otras palabras.
                </p>
              </Card>
            )}
          </motion.div>
        )}

        {/* Señales de Alerta */}
        {activeTab === 'warnings' && (
          <motion.div
            key="warnings"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            <Card className="p-4 bg-orange-50 border-orange-200">
              <p className="text-orange-800">
                <strong>¿Qué es esto?</strong> Estas son señales de que algo en tu negocio
                necesita atención. No entres en pánico, pero sí actúa pronto.
              </p>
            </Card>

            {warningSignals.map((warning, index) => (
              <Card
                key={index}
                className={`p-4 border-l-4 ${
                  warning.urgency === 'alta'
                    ? 'border-l-red-500 bg-red-50'
                    : warning.urgency === 'media'
                    ? 'border-l-yellow-500 bg-yellow-50'
                    : 'border-l-green-500 bg-green-50'
                }`}
              >
                <h4 className="font-semibold text-gray-800 mb-2">
                  {warning.signal}
                </h4>
                <div className="space-y-2">
                  <p className="text-gray-700">
                    <strong>Qué significa:</strong> {warning.meaning}
                  </p>
                  <p className="text-gray-700">
                    <strong>Qué hacer:</strong> {warning.action}
                  </p>
                  <Badge
                    variant={
                      warning.urgency === 'alta'
                        ? 'danger'
                        : warning.urgency === 'media'
                        ? 'warning'
                        : 'success'
                    }
                    size="sm"
                  >
                    Urgencia: {warning.urgency}
                  </Badge>
                </div>
              </Card>
            ))}
          </motion.div>
        )}

        {/* Glosario */}
        {activeTab === 'glossary' && (
          <motion.div
            key="glossary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-4"
          >
            {/* Buscador */}
            <Card className="p-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Busca un término... (ej: 'IVA', 'Conciliación')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
            </Card>

            <Card className="divide-y divide-gray-100">
              {filteredGlossary.map(([term, definition]) => (
                <div key={term} className="p-4 hover:bg-gray-50 transition-colors">
                  <h4 className="font-semibold text-primary-700 text-lg mb-1">
                    {term}
                  </h4>
                  <p className="text-gray-600">{definition}</p>
                </div>
              ))}
            </Card>

            {filteredGlossary.length === 0 && searchTerm && (
              <Card className="p-8 text-center">
                <Book className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">
                  No encontramos el término "{searchTerm}".
                  Intenta con otra palabra.
                </p>
              </Card>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default QuickGuidesPage
