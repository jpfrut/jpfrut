import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Target, Clock, Star, ChevronRight, ChevronDown, ChevronUp,
  AlertCircle, Lightbulb, CheckCircle, Award, ArrowLeft,
  Heart, Shield, BookOpen
} from 'lucide-react'
import { Card, Button, Badge, ProgressBar } from '../components/ui'
import { practicalMissions, missionCategories, learningPaths } from '../data/practicalMissions'
import useStore from '../store/useStore'

function MissionsPage() {
  const { missionId } = useParams()
  const navigate = useNavigate()
  const [selectedMission, setSelectedMission] = useState(
    missionId ? practicalMissions.find(m => m.id === missionId) : null
  )
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState([])
  const [showCelebration, setShowCelebration] = useState(false)
  const [expandedCategory, setExpandedCategory] = useState('ventas')

  const { addXP, addBadge, completeMission, completedMissions } = useStore()

  const handleSelectMission = (mission) => {
    setSelectedMission(mission)
    setCurrentStep(0)
    setCompletedSteps([])
    setShowCelebration(false)
  }

  const handleCompleteStep = (stepId) => {
    if (!completedSteps.includes(stepId)) {
      setCompletedSteps([...completedSteps, stepId])
    }

    if (currentStep < selectedMission.steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Misión completada
      completeMission(selectedMission.id)
      addXP(selectedMission.xpReward)
      addBadge(selectedMission.badge)
      setShowCelebration(true)
    }
  }

  const getMissionsByCategory = (categoryId) => {
    return practicalMissions.filter(m => m.category === categoryId)
  }

  const isMissionCompleted = (missionId) => {
    return completedMissions.includes(missionId)
  }

  // Vista de lista de misiones
  if (!selectedMission) {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <div className="flex items-center justify-center mb-4">
            <Target className="w-12 h-12 text-secondary-500 mr-3" />
            <h1 className="text-4xl font-heading font-bold text-neutral-800">Misiones Prácticas</h1>
          </div>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Aprende haciendo tareas reales de tu negocio. Cada misión te enseña paso a paso
            con explicaciones claras de <strong>por qué es importante</strong> cada acción.
          </p>
        </motion.div>

        {/* Mensaje de bienvenida para principiantes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="bg-gradient-to-r from-primary-600 to-accent-brillante text-white p-6">
            <div className="flex items-start">
              <Heart className="w-8 h-8 mr-4 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">¡No tengas miedo! Aquí estás seguro</h3>
                <p className="text-white/90">
                  Estas misiones son tutoriales de práctica. No vas a dañar nada en tu Odoo real.
                  Lee con calma, toma tu tiempo, y si te equivocas, simplemente vuelve a intentar.
                  <strong> Todos empezamos sin saber.</strong>
                </p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Selector de tipo de negocio */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6">
            <h3 className="text-lg font-semibold mb-4 flex items-center">
              <BookOpen className="w-5 h-5 mr-2 text-primary-600" />
              ¿Qué tipo de negocio tienes? Te recomendamos por dónde empezar:
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {Object.entries(learningPaths).map(([key, path]) => (
                <div
                  key={key}
                  className="p-4 border-2 border-neutral-200 rounded-lg hover:border-primary-500 transition-colors cursor-pointer"
                >
                  <h4 className="font-semibold text-neutral-800 mb-2">{path.name}</h4>
                  <p className="text-sm text-neutral-600 mb-3">{path.description}</p>
                  <p className="text-xs text-primary-600 font-medium">
                    {path.suggestedMissions.length} misiones recomendadas
                  </p>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Lista de misiones por categoría */}
        <div className="space-y-6">
          <h2 className="text-2xl font-heading font-bold text-neutral-800">Todas las Misiones</h2>

          {Object.entries(missionCategories).map(([categoryId, category]) => {
            const missions = getMissionsByCategory(categoryId)
            if (missions.length === 0) return null

            return (
              <motion.div
                key={categoryId}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Card className="overflow-hidden">
                  {/* Header de categoría */}
                  <button
                    onClick={() => setExpandedCategory(
                      expandedCategory === categoryId ? null : categoryId
                    )}
                    className={`w-full p-4 flex items-center justify-between ${category.color} transition-colors`}
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{category.icon}</span>
                      <div className="text-left">
                        <h3 className="font-semibold text-lg">{category.name}</h3>
                        <p className="text-sm opacity-80">{category.description}</p>
                      </div>
                    </div>
                    {expandedCategory === categoryId ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </button>

                  {/* Lista de misiones */}
                  <AnimatePresence>
                    {expandedCategory === categoryId && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="divide-y divide-neutral-100"
                      >
                        {missions.map((mission) => (
                          <div
                            key={mission.id}
                            className="p-4 hover:bg-neutral-50 transition-colors"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex-1">
                                <div className="flex items-center mb-2">
                                  <h4 className="font-semibold text-neutral-800 mr-3">
                                    {mission.title}
                                  </h4>
                                  {isMissionCompleted(mission.id) && (
                                    <Badge variant="success" size="sm">
                                      <CheckCircle className="w-3 h-3 mr-1" />
                                      Completada
                                    </Badge>
                                  )}
                                </div>
                                <p className="text-sm text-neutral-600 mb-3">
                                  {mission.subtitle}
                                </p>
                                <div className="flex items-center space-x-4 text-xs text-neutral-500">
                                  <span className="flex items-center">
                                    <Clock className="w-3 h-3 mr-1" />
                                    {mission.estimatedTime}
                                  </span>
                                  <span className="flex items-center">
                                    <Shield className="w-3 h-3 mr-1" />
                                    {mission.difficulty}
                                  </span>
                                  <span className="flex items-center">
                                    <Star className="w-3 h-3 mr-1 text-secondary-500" />
                                    {mission.xpReward} XP
                                  </span>
                                </div>
                              </div>
                              <Button
                                onClick={() => handleSelectMission(mission)}
                                className="ml-4"
                              >
                                Comenzar
                                <ChevronRight className="w-4 h-4 ml-1" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    )
  }

  // Vista de misión individual
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header de la misión */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <Button
          variant="ghost"
          onClick={() => setSelectedMission(null)}
          className="mb-4"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Volver a misiones
        </Button>

        <Card className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-3xl font-heading font-bold text-neutral-800 mb-2">
                {selectedMission.title}
              </h1>
              <p className="text-neutral-600">{selectedMission.subtitle}</p>
            </div>
            <Badge variant="primary" size="lg">
              <Star className="w-4 h-4 mr-1" />
              {selectedMission.xpReward} XP
            </Badge>
          </div>

          <ProgressBar
            progress={completedSteps.length}
            total={selectedMission.steps.length}
            showLabel={false}
            className="mb-4"
          />
          <p className="text-sm text-neutral-500">
            Paso {currentStep + 1} de {selectedMission.steps.length}
          </p>
        </Card>
      </motion.div>

      {/* Por qué es importante */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Card className="p-6 bg-secondary-50 border-secondary-200">
          <h3 className="text-lg font-semibold text-secondary-800 mb-3 flex items-center">
            <Lightbulb className="w-5 h-5 mr-2" />
            {selectedMission.businessImportance.title}
          </h3>
          <p className="text-secondary-900 mb-4">
            {selectedMission.businessImportance.explanation}
          </p>
          <div className="bg-secondary-100 p-4 rounded-lg">
            <p className="text-sm font-medium text-secondary-800 mb-1">
              📌 Ejemplo de la vida real:
            </p>
            <p className="text-secondary-900">
              {selectedMission.businessImportance.realLifeExample}
            </p>
          </div>
        </Card>
      </motion.div>

      {/* Paso actual */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
        >
          <Card className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mr-4">
                {selectedMission.steps[currentStep].id}
              </div>
              <h3 className="text-xl font-semibold text-neutral-800">
                {selectedMission.steps[currentStep].title}
              </h3>
            </div>

            <div className="space-y-4">
              {/* Instrucción principal */}
              <div className="bg-primary-50 p-4 rounded-lg">
                <p className="text-primary-900 font-medium text-lg">
                  {selectedMission.steps[currentStep].instruction}
                </p>
              </div>

              {/* Por qué esto importa */}
              <div className="flex items-start">
                <CheckCircle className="w-5 h-5 text-accent-green-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-neutral-700 mb-1">¿Por qué hacer esto?</p>
                  <p className="text-neutral-600">
                    {selectedMission.steps[currentStep].whyThisMatters}
                  </p>
                </div>
              </div>

              {/* Error común */}
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-secondary-500 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <p className="font-medium text-secondary-700 mb-1">Error común a evitar:</p>
                  <p className="text-neutral-600">
                    {selectedMission.steps[currentStep].commonMistake}
                  </p>
                </div>
              </div>

              {/* Ayuda visual */}
              <div className="bg-neutral-100 p-4 rounded-lg">
                <p className="font-mono text-sm text-neutral-700">
                  {selectedMission.steps[currentStep].visualHelp}
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-between">
              <Button
                variant="outline"
                onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
                disabled={currentStep === 0}
              >
                Paso anterior
              </Button>
              <Button
                onClick={() => handleCompleteStep(selectedMission.steps[currentStep].id)}
              >
                {currentStep === selectedMission.steps.length - 1
                  ? '¡Completar misión!'
                  : 'Entendido, siguiente paso'}
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </motion.div>
      </AnimatePresence>

      {/* Lista de todos los pasos */}
      <Card className="p-4">
        <h4 className="font-semibold text-neutral-700 mb-3">Todos los pasos:</h4>
        <div className="space-y-2">
          {selectedMission.steps.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center p-2 rounded ${
                index === currentStep
                  ? 'bg-primary-50 border border-primary-200'
                  : completedSteps.includes(step.id)
                  ? 'bg-accent-green-50'
                  : 'bg-neutral-50'
              }`}
            >
              {completedSteps.includes(step.id) ? (
                <CheckCircle className="w-5 h-5 text-accent-green-500 mr-3" />
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-neutral-300 mr-3 flex items-center justify-center text-xs">
                  {step.id}
                </div>
              )}
              <span className={`text-sm ${
                index === currentStep ? 'font-medium text-primary-700' : 'text-neutral-600'
              }`}>
                {step.title}
              </span>
            </div>
          ))}
        </div>
      </Card>

      {/* Celebración al completar */}
      <AnimatePresence>
        {showCelebration && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          >
            <Card className="p-8 max-w-md text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', delay: 0.2 }}
              >
                <Award className="w-20 h-20 text-secondary-500 mx-auto mb-4" />
              </motion.div>
              <h2 className="text-2xl font-heading font-bold text-neutral-800 mb-2">
                {selectedMission.celebration.title}
              </h2>
              <p className="text-neutral-600 mb-4">
                {selectedMission.celebration.message}
              </p>
              <div className="bg-accent-green-50 p-3 rounded-lg mb-4">
                <p className="text-accent-green-700 font-medium">
                  +{selectedMission.xpReward} XP ganados
                </p>
                <p className="text-accent-green-600 text-sm">
                  Nueva insignia: {selectedMission.badge}
                </p>
              </div>
              <p className="text-sm text-neutral-500 mb-6">
                {selectedMission.celebration.nextSuggestion}
              </p>
              <Button onClick={() => setSelectedMission(null)} className="w-full">
                Volver a misiones
              </Button>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MissionsPage
