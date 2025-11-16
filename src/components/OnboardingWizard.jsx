import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Heart, ChevronRight, ChevronLeft, Star, Target,
  Clock, BookOpen, Shield, Smile, CheckCircle, Users
} from 'lucide-react'
import { Button, Card, Badge } from '../components/ui'
import useStore from '../store/useStore'

function OnboardingWizard({ onComplete }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [userName, setUserName] = useState('')
  const [businessType, setBusinessType] = useState('')
  const [experienceLevel, setExperienceLevel] = useState('')
  const [mainGoal, setMainGoal] = useState('')
  const { user } = useStore()

  const steps = [
    {
      id: 'welcome',
      title: '¡Bienvenido a tu Nueva Aventura!',
      subtitle: 'Estamos aquí para ayudarte a dominar tu negocio',
      content: (
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center"
          >
            <Heart className="w-12 h-12 text-white" />
          </motion.div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-800">
              ¡Hola! Soy tu asistente personal
            </h3>
            <p className="text-neutral-600 text-lg max-w-md mx-auto">
              No importa si nunca has usado una computadora antes.
              Estoy aquí para guiarte <strong>paso a paso</strong> de forma simple y amigable.
            </p>
            <div className="bg-accent-green-50 p-4 rounded-lg max-w-md mx-auto">
              <p className="text-accent-green-700 text-sm">
                💡 <strong>Promesa:</strong> Si te pierdes o te confundes en algún momento,
                siempre podrás volver aquí y comenzar de nuevo. No hay errores que no se puedan arreglar.
              </p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 'name',
      title: '¿Cómo te llamas?',
      subtitle: 'Queremos conocerte mejor',
      content: (
        <div className="space-y-6 max-w-md mx-auto">
          <div className="text-center mb-8">
            <Users className="w-16 h-16 text-primary-500 mx-auto mb-4" />
            <p className="text-neutral-600">
              Tu nombre nos ayuda a personalizar tu experiencia
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-2">
              Mi nombre es:
            </label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Escribe tu nombre aquí..."
              className="w-full px-4 py-3 text-lg border-2 border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <div className="bg-primary-50 p-3 rounded-lg">
            <p className="text-primary-700 text-sm">
              📝 <strong>Consejo:</strong> Puedes usar tu nombre o un apodo.
              Lo importante es que te sientas cómodo.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 'business',
      title: '¿Qué tipo de negocio tienes?',
      subtitle: 'Así te recomendaremos el mejor camino',
      content: (
        <div className="space-y-4 max-w-lg mx-auto">
          <div className="text-center mb-6">
            <Target className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
            <p className="text-neutral-600">
              Selecciona la opción que mejor describa tu negocio
            </p>
          </div>
          <div className="grid gap-3">
            {[
              {
                id: 'services',
                label: 'Vendo servicios (consultoría, asesoría, etc.)',
                icon: '💼',
                description: 'Cobro por mi tiempo y conocimiento'
              },
              {
                id: 'products',
                label: 'Vendo productos físicos (tienda, comercio)',
                icon: '🏪',
                description: 'Tengo inventario de productos'
              },
              {
                id: 'transport',
                label: 'Transporte o logística',
                icon: '🚚',
                description: 'Uso vehículos para mi trabajo'
              },
              {
                id: 'mixed',
                label: 'Un poco de todo',
                icon: '🔄',
                description: 'Mi negocio es variado'
              },
              {
                id: 'unsure',
                label: 'No estoy seguro',
                icon: '🤔',
                description: 'Estoy empezando o explorando'
              }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setBusinessType(option.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  businessType === option.id
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-neutral-200 hover:border-primary-300'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{option.icon}</span>
                  <div>
                    <p className="font-medium text-neutral-800">{option.label}</p>
                    <p className="text-sm text-neutral-500">{option.description}</p>
                  </div>
                  {businessType === option.id && (
                    <CheckCircle className="w-5 h-5 text-primary-500 ml-auto" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'experience',
      title: '¿Cuánta experiencia tienes con computadoras?',
      subtitle: 'No te preocupes, cualquier respuesta está bien',
      content: (
        <div className="space-y-4 max-w-lg mx-auto">
          <div className="text-center mb-6">
            <Shield className="w-16 h-16 text-accent-green-500 mx-auto mb-4" />
            <p className="text-neutral-600">
              Sé honesto. Esto nos ayuda a adaptar las explicaciones a tu nivel.
            </p>
          </div>
          <div className="grid gap-3">
            {[
              {
                id: 'none',
                label: 'Casi nada - Me da un poco de miedo',
                emoji: '😰',
                message: '¡Perfecto! Esta plataforma es especialmente para ti.'
              },
              {
                id: 'basic',
                label: 'Lo básico - Uso WhatsApp y poco más',
                emoji: '😊',
                message: 'Excelente, ya tienes una base. Te irá muy bien.'
              },
              {
                id: 'intermediate',
                label: 'Regular - Uso Excel y navego internet',
                emoji: '😄',
                message: 'Genial, tienes buenas habilidades.'
              },
              {
                id: 'advanced',
                label: 'Bastante - Me siento cómodo con tecnología',
                emoji: '🚀',
                message: 'Perfecto, aprenderás muy rápido.'
              }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setExperienceLevel(option.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  experienceLevel === option.id
                    ? 'border-accent-green-500 bg-accent-green-50'
                    : 'border-neutral-200 hover:border-accent-green-300'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{option.emoji}</span>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-800">{option.label}</p>
                    {experienceLevel === option.id && (
                      <p className="text-sm text-accent-green-600 mt-1">{option.message}</p>
                    )}
                  </div>
                  {experienceLevel === option.id && (
                    <CheckCircle className="w-5 h-5 text-accent-green-500 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'goal',
      title: '¿Qué te gustaría lograr primero?',
      subtitle: 'Tu primera meta en Odoo',
      content: (
        <div className="space-y-4 max-w-lg mx-auto">
          <div className="text-center mb-6">
            <Star className="w-16 h-16 text-secondary-500 mx-auto mb-4" />
            <p className="text-neutral-600">
              Selecciona lo que más te urge aprender
            </p>
          </div>
          <div className="grid gap-3">
            {[
              {
                id: 'invoicing',
                label: 'Crear facturas para cobrar a mis clientes',
                icon: '💰',
                time: '15 minutos para aprender'
              },
              {
                id: 'organize',
                label: 'Organizar mis contactos y clientes',
                icon: '👥',
                time: '10 minutos para aprender'
              },
              {
                id: 'money',
                label: 'Saber cuánto dinero tengo y me deben',
                icon: '📊',
                time: '5 minutos para aprender'
              },
              {
                id: 'expenses',
                label: 'Registrar mis gastos correctamente',
                icon: '📋',
                time: '10 minutos para aprender'
              },
              {
                id: 'explore',
                label: 'Solo quiero explorar sin presión',
                icon: '🔍',
                time: 'A tu propio ritmo'
              }
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setMainGoal(option.id)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                  mainGoal === option.id
                    ? 'border-secondary-500 bg-secondary-50'
                    : 'border-neutral-200 hover:border-secondary-300'
                }`}
              >
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{option.icon}</span>
                  <div className="flex-1">
                    <p className="font-medium text-neutral-800">{option.label}</p>
                    <p className="text-sm text-neutral-500">{option.time}</p>
                  </div>
                  {mainGoal === option.id && (
                    <CheckCircle className="w-5 h-5 text-secondary-500 ml-2" />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )
    },
    {
      id: 'ready',
      title: '¡Todo Listo!',
      subtitle: 'Estás preparado para comenzar',
      content: (
        <div className="text-center space-y-6 max-w-lg mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: [0, 10, -10, 0] }}
            transition={{ type: 'spring', delay: 0.2 }}
            className="w-24 h-24 mx-auto bg-gradient-to-br from-accent-green-500 to-accent-green-500 rounded-full flex items-center justify-center"
          >
            <Smile className="w-12 h-12 text-white" />
          </motion.div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-neutral-800">
              ¡Bienvenido, {userName || user.name}!
            </h3>
            <p className="text-neutral-600 text-lg">
              Has dado el primer paso más importante: <strong>decidir aprender</strong>.
            </p>
          </div>

          <Card className="p-4 bg-primary-50 border-primary-200 text-left">
            <h4 className="font-semibold text-primary-800 mb-2">Tu plan personalizado:</h4>
            <ul className="space-y-2 text-primary-700 text-sm">
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-accent-green-500" />
                Misiones adaptadas a tu nivel de experiencia
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-accent-green-500" />
                Explicaciones en lenguaje simple sin tecnicismos
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-accent-green-500" />
                Practica sin miedo - aquí es seguro equivocarse
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-accent-green-500" />
                Avanza a tu propio ritmo, sin presión
              </li>
            </ul>
          </Card>

          <div className="bg-secondary-50 p-4 rounded-lg">
            <p className="text-secondary-800 text-sm">
              ⭐ <strong>Recuerda:</strong> Cada experto fue alguna vez un principiante.
              Tú puedes lograrlo.
            </p>
          </div>
        </div>
      )
    }
  ]

  const canProceed = () => {
    switch (steps[currentStep].id) {
      case 'name':
        return userName.trim().length > 0
      case 'business':
        return businessType !== ''
      case 'experience':
        return experienceLevel !== ''
      case 'goal':
        return mainGoal !== ''
      default:
        return true
    }
  }

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      // Guardar preferencias y completar
      onComplete({
        userName: userName || user.name,
        businessType,
        experienceLevel,
        mainGoal
      })
    }
  }

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-4">
      <div className="w-full max-w-3xl">
        {/* Progress bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-neutral-500">
              Paso {currentStep + 1} de {steps.length}
            </span>
            <span className="text-sm text-primary-600 font-medium">
              {Math.round(((currentStep + 1) / steps.length) * 100)}% completado
            </span>
          </div>
          <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            />
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            className="mb-8"
          >
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-neutral-800 mb-2">
                {steps[currentStep].title}
              </h2>
              <p className="text-neutral-500 text-lg">
                {steps[currentStep].subtitle}
              </p>
            </div>
            {steps[currentStep].content}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={currentStep === 0}
            className={currentStep === 0 ? 'invisible' : ''}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Anterior
          </Button>

          <Button
            onClick={handleNext}
            disabled={!canProceed()}
            className="min-w-[150px]"
          >
            {currentStep === steps.length - 1 ? (
              <>
                ¡Comenzar!
                <Star className="w-5 h-5 ml-2" />
              </>
            ) : (
              <>
                Siguiente
                <ChevronRight className="w-5 h-5 ml-2" />
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OnboardingWizard
