import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  Sun,
  Coffee,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Heart,
  Lightbulb,
  Shield,
  Star,
  Sparkles,
  Home,
  BookOpen,
  Target,
  Award
} from 'lucide-react'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'

const firstDaySteps = [
  {
    id: 1,
    title: 'Bienvenido a Tu Primer Día',
    icon: Sun,
    color: 'from-yellow-400 to-orange-500',
    content: {
      greeting: '¡Hola! Hoy es tu primer día usando Odoo.',
      message: 'No te preocupes si nunca has usado un sistema como este. Vamos a ir paso a paso, muy despacio, y te explicaré todo como si fuéramos amigos tomando un café.',
      encouragement: 'Miles de personas como tú han aprendido Odoo. Si ellos pudieron, tú también puedes.',
      whatYouWillLearn: [
        'Qué es Odoo y cómo puede ayudarte',
        'Cómo navegar por el sistema sin perderte',
        'Tu primera tarea práctica (muy fácil)',
        'Dónde pedir ayuda si te atoras'
      ]
    }
  },
  {
    id: 2,
    title: '¿Qué es Odoo y Por Qué lo Necesitas?',
    icon: Lightbulb,
    color: 'from-blue-400 to-indigo-500',
    content: {
      simple: 'Piensa en Odoo como tu asistente personal de negocios.',
      analogy: 'Es como tener una carpeta mágica que guarda TODO de tu negocio: clientes, facturas, productos, empleados... y nunca pierde nada.',
      problems: {
        title: 'Sin Odoo (problemas comunes):',
        list: [
          '❌ Olvidas llamar a un cliente importante',
          '❌ No recuerdas cuánto te deben',
          '❌ Pierdes papelitos con información',
          '❌ No sabes cuántos productos te quedan',
          '❌ Gastas horas buscando facturas viejas'
        ]
      },
      solutions: {
        title: 'Con Odoo (todo organizado):',
        list: [
          '✅ Te recuerda qué hacer cada día',
          '✅ Muestra quién te debe y cuánto',
          '✅ Todo guardado y fácil de encontrar',
          '✅ Sabes exactamente tu inventario',
          '✅ Encuentras cualquier documento en segundos'
        ]
      }
    }
  },
  {
    id: 3,
    title: 'No Tengas Miedo a Equivocarte',
    icon: Shield,
    color: 'from-green-400 to-emerald-500',
    content: {
      mainMessage: '¡Puedes equivocarte sin problema!',
      reassurance: 'Odoo está diseñado para que puedas corregir casi cualquier error. No vas a "romper" nada.',
      safeActions: [
        {
          action: 'Crear algo por error',
          solution: 'Puedes borrarlo o archivarlo'
        },
        {
          action: 'Escribir mal un dato',
          solution: 'Puedes editarlo después'
        },
        {
          action: 'No entender algo',
          solution: 'Hay ayuda y tutoriales en cada pantalla'
        },
        {
          action: 'Confirmar algo sin querer',
          solution: 'Casi siempre se puede cancelar o corregir'
        }
      ],
      goldenRule: 'La única forma de aprender es practicando. ¡Equivocarse es parte del proceso!'
    }
  },
  {
    id: 4,
    title: 'Conoce la Pantalla Principal',
    icon: Home,
    color: 'from-purple-400 to-pink-500',
    content: {
      overview: 'La pantalla principal es simple. Hay 3 partes importantes:',
      parts: [
        {
          name: 'Menú Superior',
          description: 'Arriba de todo. Aquí ves tus notificaciones, tu perfil, y puedes buscar cosas.',
          tip: 'Si te pierdes, haz clic en el logo de Odoo para volver al inicio.'
        },
        {
          name: 'Menú de Aplicaciones',
          description: 'Un cuadro con iconos (como tu teléfono). Cada icono es una "app" diferente: Ventas, Inventario, Contactos, etc.',
          tip: 'Haz clic en cualquier icono para abrir esa sección.'
        },
        {
          name: 'Área de Trabajo',
          description: 'El espacio grande del centro. Aquí aparece lo que estés haciendo.',
          tip: 'Siempre hay botones de ayuda y filtros para encontrar lo que buscas.'
        }
      ],
      analogy: 'Es como usar tu teléfono: tienes apps, y al tocar una, se abre.'
    }
  },
  {
    id: 5,
    title: 'Tu Primera Tarea: Crear un Contacto',
    icon: Target,
    color: 'from-orange-400 to-red-500',
    content: {
      intro: 'Vamos a hacer algo súper simple: guardar un contacto. Puede ser un cliente real o inventado.',
      whyImportant: 'Tener contactos registrados te permite luego enviarles facturas, darles seguimiento, y no perder su información.',
      steps: [
        {
          step: 1,
          action: 'Abre la app de "Contactos"',
          detail: 'Busca el icono de personas o libro de contactos en el menú de apps.'
        },
        {
          step: 2,
          action: 'Haz clic en "Crear"',
          detail: 'Es un botón azul, generalmente arriba a la izquierda.'
        },
        {
          step: 3,
          action: 'Escribe el nombre',
          detail: 'Ejemplo: "María González" o "Panadería La Estrella"'
        },
        {
          step: 4,
          action: 'Agrega teléfono y email',
          detail: 'Si los tienes, agrégalos. Si no, déjalos vacíos por ahora.'
        },
        {
          step: 5,
          action: 'Haz clic en "Guardar"',
          detail: '¡Listo! Tu primer contacto está guardado.'
        }
      ],
      celebration: '🎉 ¡Felicidades! Acabas de crear tu primer registro en Odoo.'
    }
  },
  {
    id: 6,
    title: '¿Qué Hacer Cuando Te Atoras?',
    icon: Heart,
    color: 'from-pink-400 to-rose-500',
    content: {
      mainMessage: 'Es normal atascarse. Todos lo hacemos. Aquí te digo qué hacer:',
      options: [
        {
          option: 'Botón de Ayuda',
          how: 'En muchas pantallas hay un "?" o "Ayuda". Haz clic ahí.',
          when: 'Cuando no entiendes un campo o botón específico.'
        },
        {
          option: 'Esta Plataforma de Aprendizaje',
          how: 'Vuelve aquí y busca en las misiones prácticas o guías.',
          when: 'Cuando quieres aprender algo paso a paso.'
        },
        {
          option: 'Prueba y Error',
          how: 'Intenta diferentes opciones. No vas a romper nada.',
          when: 'Cuando quieres explorar y entender por ti mismo.'
        },
        {
          option: 'Pregunta a Alguien',
          how: 'Si tienes un compañero o proveedor de Odoo, pregúntale.',
          when: 'Cuando necesitas ayuda urgente o personalizada.'
        }
      ],
      reminder: 'No hay preguntas tontas. La única forma de no aprender es no preguntar.'
    }
  },
  {
    id: 7,
    title: 'Tu Plan para los Próximos Días',
    icon: Star,
    color: 'from-indigo-400 to-purple-500',
    content: {
      intro: 'Ahora que completaste tu primer día, aquí está tu plan para seguir aprendiendo:',
      plan: [
        {
          day: 'Hoy',
          tasks: ['✅ Crear 1 contacto más (ya sabes cómo)'],
          time: '5 minutos'
        },
        {
          day: 'Mañana',
          tasks: ['Completar la misión "Mi Primera Factura"'],
          time: '15 minutos'
        },
        {
          day: 'Esta semana',
          tasks: [
            'Explorar 2-3 módulos que te interesen',
            'Completar 3 misiones prácticas',
            'Leer el glosario de términos'
          ],
          time: '1 hora total'
        },
        {
          day: 'Este mes',
          tasks: [
            'Sentirte cómodo navegando Odoo',
            'Crear facturas sin mirar tutoriales',
            'Registrar clientes y productos reales'
          ],
          time: 'Práctica diaria de 10-15 min'
        }
      ],
      motivation: 'Cada pequeño paso cuenta. En un mes estarás usando Odoo con confianza.'
    }
  }
]

const FirstDayPage = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [completedSteps, setCompletedSteps] = useState(new Set())

  const step = firstDaySteps[currentStep]

  const markComplete = () => {
    const newCompleted = new Set(completedSteps)
    newCompleted.add(currentStep)
    setCompletedSteps(newCompleted)
    localStorage.setItem('firstDayProgress', JSON.stringify(Array.from(newCompleted)))
  }

  const goNext = () => {
    if (currentStep < firstDaySteps.length - 1) {
      markComplete()
      setCurrentStep(currentStep + 1)
    }
  }

  const goPrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const renderStepContent = () => {
    const StepIcon = step.icon

    return (
      <motion.div
        key={step.id}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        className="space-y-6"
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${step.color} rounded-2xl p-8 text-white`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-white/20 rounded-xl">
              <StepIcon className="w-8 h-8" />
            </div>
            <div>
              <div className="text-sm opacity-80">Paso {step.id} de {firstDaySteps.length}</div>
              <h2 className="text-2xl font-bold">{step.title}</h2>
            </div>
          </div>
        </div>

        {/* Content based on step */}
        {step.id === 1 && (
          <Card className="p-6 space-y-4">
            <p className="text-xl text-gray-800 font-medium">{step.content.greeting}</p>
            <p className="text-gray-700 leading-relaxed">{step.content.message}</p>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-green-800 font-medium">{step.content.encouragement}</p>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Hoy aprenderás:</h4>
              <ul className="space-y-2">
                {step.content.whatYouWillLearn.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        )}

        {step.id === 2 && (
          <Card className="p-6 space-y-4">
            <p className="text-xl text-gray-800 font-medium">{step.content.simple}</p>
            <p className="text-gray-700 bg-blue-50 p-4 rounded-lg">{step.content.analogy}</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">{step.content.problems.title}</h4>
                <ul className="space-y-1">
                  {step.content.problems.list.map((item, i) => (
                    <li key={i} className="text-red-700 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">{step.content.solutions.title}</h4>
                <ul className="space-y-1">
                  {step.content.solutions.list.map((item, i) => (
                    <li key={i} className="text-green-700 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Card>
        )}

        {step.id === 3 && (
          <Card className="p-6 space-y-4">
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-green-800">{step.content.mainMessage}</h3>
            </div>
            <p className="text-gray-700">{step.content.reassurance}</p>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">¿Qué pasa si...?</h4>
              {step.content.safeActions.map((item, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-3 rounded-lg">
                  <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-gray-800">{item.action}</p>
                    <p className="text-sm text-gray-600">Solución: {item.solution}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <p className="text-yellow-800 font-medium">{step.content.goldenRule}</p>
            </div>
          </Card>
        )}

        {step.id === 4 && (
          <Card className="p-6 space-y-4">
            <p className="text-gray-700">{step.content.overview}</p>
            <div className="space-y-4">
              {step.content.parts.map((part, i) => (
                <div key={i} className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-1">{i + 1}. {part.name}</h4>
                  <p className="text-purple-700 mb-2">{part.description}</p>
                  <div className="text-sm bg-purple-100 p-2 rounded">
                    <span className="font-medium">Tip:</span> {part.tip}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 italic">{step.content.analogy}</p>
          </Card>
        )}

        {step.id === 5 && (
          <Card className="p-6 space-y-4">
            <p className="text-gray-700">{step.content.intro}</p>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-orange-800 font-medium">{step.content.whyImportant}</p>
            </div>
            <div className="space-y-3">
              <h4 className="font-semibold text-gray-800">Pasos (muy fáciles):</h4>
              {step.content.steps.map((s) => (
                <div key={s.step} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {s.step}
                  </div>
                  <div>
                    <p className="font-medium text-gray-800">{s.action}</p>
                    <p className="text-sm text-gray-600">{s.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-green-100 p-4 rounded-lg text-center">
              <p className="text-green-800 text-lg font-medium">{step.content.celebration}</p>
            </div>
          </Card>
        )}

        {step.id === 6 && (
          <Card className="p-6 space-y-4">
            <p className="text-gray-800 font-medium">{step.content.mainMessage}</p>
            <div className="space-y-3">
              {step.content.options.map((opt, i) => (
                <div key={i} className="bg-pink-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-pink-800 mb-1">{i + 1}. {opt.option}</h4>
                  <p className="text-pink-700 text-sm mb-1">Cómo: {opt.how}</p>
                  <p className="text-pink-600 text-sm">Cuándo: {opt.when}</p>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
              <Heart className="w-6 h-6 text-pink-500 mb-2" />
              <p className="text-yellow-800 font-medium">{step.content.reminder}</p>
            </div>
          </Card>
        )}

        {step.id === 7 && (
          <Card className="p-6 space-y-4">
            <p className="text-gray-700">{step.content.intro}</p>
            <div className="space-y-4">
              {step.content.plan.map((p, i) => (
                <div key={i} className="bg-indigo-50 p-4 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-semibold text-indigo-800">{p.day}</h4>
                    <span className="text-sm text-indigo-600 bg-indigo-100 px-2 py-1 rounded">
                      {p.time}
                    </span>
                  </div>
                  <ul className="space-y-1">
                    {p.tasks.map((task, j) => (
                      <li key={j} className="text-indigo-700 text-sm flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-indigo-500" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-4 rounded-lg text-white text-center">
              <Star className="w-8 h-8 mx-auto mb-2" />
              <p className="font-medium">{step.content.motivation}</p>
            </div>
          </Card>
        )}
      </motion.div>
    )
  }

  const isLastStep = currentStep === firstDaySteps.length - 1

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-12">
      {/* Progress Bar */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-gray-800">Tu Progreso del Primer Día</h3>
          <span className="text-sm text-gray-600">
            {completedSteps.size} de {firstDaySteps.length} completados
          </span>
        </div>
        <div className="flex gap-1">
          {firstDaySteps.map((s, i) => (
            <div
              key={s.id}
              className={`h-2 flex-1 rounded-full transition-colors ${
                completedSteps.has(i)
                  ? 'bg-green-500'
                  : i === currentStep
                  ? 'bg-primary-500'
                  : 'bg-gray-200'
              }`}
            />
          ))}
        </div>
      </Card>

      {/* Step Navigation Dots */}
      <div className="flex justify-center gap-2">
        {firstDaySteps.map((s, i) => (
          <button
            key={s.id}
            onClick={() => setCurrentStep(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentStep
                ? 'bg-primary-500 scale-125'
                : completedSteps.has(i)
                ? 'bg-green-500'
                : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      {/* Current Step Content */}
      <AnimatePresence mode="wait">
        {renderStepContent()}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={goPrev}
          disabled={currentStep === 0}
          icon={<ArrowLeft className="w-4 h-4" />}
        >
          Anterior
        </Button>

        {isLastStep ? (
          <Link to="/">
            <Button
              variant="primary"
              size="lg"
              icon={<Award className="w-5 h-5" />}
              onClick={markComplete}
            >
              Completar Mi Primer Día
            </Button>
          </Link>
        ) : (
          <Button
            variant="primary"
            onClick={goNext}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Siguiente
          </Button>
        )}
      </div>

      {/* Quick Links */}
      <Card className="p-4 bg-gray-50">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link to="/missions">
            <Button variant="ghost" size="sm" icon={<Target className="w-4 h-4" />}>
              Ver Misiones
            </Button>
          </Link>
          <Link to="/quick-guides">
            <Button variant="ghost" size="sm" icon={<BookOpen className="w-4 h-4" />}>
              Guías Rápidas
            </Button>
          </Link>
          <Link to="/emergency-help">
            <Button variant="ghost" size="sm" icon={<Heart className="w-4 h-4" />}>
              Ayuda de Emergencia
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  )
}

export default FirstDayPage
