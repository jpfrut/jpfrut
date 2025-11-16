import { useMemo } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Lightbulb,
  TrendingUp,
  Target,
  BookOpen,
  ArrowRight,
  Zap
} from 'lucide-react'
import { getModulesArray } from '../data/modules'
import { practicalMissions } from '../data/practicalMissions'
import { hasLessonContent } from '../data/lessonContent'
import useStore from '../store/useStore'
import Card from './ui/Card'

const PersonalizedRecommendations = () => {
  const { user, completedExercises, moduleProgress } = useStore()
  const modules = getModulesArray()

  const recommendations = useMemo(() => {
    const recs = []

    // 1. If user is completely new (no progress)
    if (completedExercises.length === 0 && Object.keys(moduleProgress).length === 0) {
      recs.push({
        id: 'start-first-day',
        type: 'start',
        priority: 1,
        title: 'Comienza tu aventura',
        description: 'Nunca has explorado Odoo. ¡Hoy es el día perfecto para empezar!',
        action: 'Ir a Mi Primer Día',
        path: '/first-day',
        icon: Target,
        color: 'from-orange-400 to-red-500'
      })

      recs.push({
        id: 'first-mission',
        type: 'mission',
        priority: 2,
        title: 'Tu primera misión práctica',
        description: 'Registra tu primer cliente en solo 10 minutos',
        action: 'Iniciar Misión',
        path: '/missions',
        icon: Target,
        color: 'from-green-400 to-emerald-500'
      })
    }

    // 2. If user has started but not completed much
    if (completedExercises.length > 0 && completedExercises.length < 5) {
      // Find modules with content that user hasn't started
      const modulesWithContent = modules.filter(m =>
        m.lessons.some(l => hasLessonContent(l.id)) &&
        !moduleProgress[m.id]
      )

      if (modulesWithContent.length > 0) {
        const recommended = modulesWithContent[0]
        recs.push({
          id: `try-${recommended.id}`,
          type: 'module',
          priority: 1,
          title: `Prueba: ${recommended.name}`,
          description: `${recommended.description}. Tiene lecciones con contenido detallado.`,
          action: 'Explorar Módulo',
          path: `/module/${recommended.id}`,
          icon: BookOpen,
          color: 'from-blue-400 to-indigo-500'
        })
      }

      // Suggest continuing with missions
      const completedMissionCount = localStorage.getItem('completedMissions')
        ? JSON.parse(localStorage.getItem('completedMissions')).length
        : 0

      if (completedMissionCount < 3) {
        recs.push({
          id: 'more-missions',
          type: 'mission',
          priority: 2,
          title: 'Sigue practicando',
          description: 'Las misiones prácticas te ayudan a aprender haciendo',
          action: 'Ver Misiones',
          path: '/missions',
          icon: Target,
          color: 'from-secondary-400 to-secondary-600'
        })
      }
    }

    // 3. If user has started modules but hasn't finished any
    const startedModules = Object.entries(moduleProgress).filter(
      ([moduleId, progress]) => {
        const module = modules.find(m => m.id === moduleId)
        return module && progress.completedLessons.length < module.lessons.length
      }
    )

    if (startedModules.length > 0) {
      const [moduleId, progress] = startedModules[0]
      const module = modules.find(m => m.id === moduleId)
      const percentComplete = Math.round((progress.completedLessons.length / module.lessons.length) * 100)

      recs.push({
        id: `continue-${moduleId}`,
        type: 'continue',
        priority: 1,
        title: `Continúa con ${module.name}`,
        description: `Llevas ${percentComplete}% completado. ¡No te detengas ahora!`,
        action: 'Continuar',
        path: `/module/${moduleId}`,
        icon: TrendingUp,
        color: 'from-purple-400 to-pink-500'
      })
    }

    // 4. Recommend based on user level
    if (user.level >= 2 && user.level < 5) {
      // Intermediate user - suggest exploring more modules
      const unexploredPriorityModules = modules.filter(
        m => m.priority === 1 && !moduleProgress[m.id]
      )

      if (unexploredPriorityModules.length > 0) {
        recs.push({
          id: 'explore-priority',
          type: 'explore',
          priority: 3,
          title: 'Explora módulos prioritarios',
          description: `Hay ${unexploredPriorityModules.length} módulos importantes que aún no has visto`,
          action: 'Explorar',
          path: '/explore',
          icon: Lightbulb,
          color: 'from-yellow-400 to-orange-500'
        })
      }
    }

    // 5. If user has good streak, encourage them
    if (user.streak >= 3) {
      recs.push({
        id: 'keep-streak',
        type: 'motivation',
        priority: 4,
        title: `¡${user.streak} días seguidos!`,
        description: 'Tu dedicación es admirable. Mantén tu racha completando algo hoy.',
        action: 'Ver Checklist Diario',
        path: '/quick-guides',
        icon: Zap,
        color: 'from-amber-400 to-orange-500'
      })
    }

    // 6. Suggest emergency help if they haven't visited
    const visitedEmergency = localStorage.getItem('visitedEmergencyHelp')
    if (!visitedEmergency && completedExercises.length > 2) {
      recs.push({
        id: 'know-emergency',
        type: 'tip',
        priority: 5,
        title: 'Conoce la Ayuda de Emergencia',
        description: '¿Cometiste un error? Aquí te decimos cómo arreglarlo',
        action: 'Ver Ayuda',
        path: '/emergency-help',
        icon: Lightbulb,
        color: 'from-red-400 to-rose-500'
      })
    }

    // Sort by priority and return top 3
    return recs.sort((a, b) => a.priority - b.priority).slice(0, 3)
  }, [user, completedExercises, moduleProgress, modules])

  if (recommendations.length === 0) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-4"
    >
      <div className="flex items-center gap-2">
        <Lightbulb className="w-5 h-5 text-yellow-500" />
        <h3 className="text-lg font-semibold text-gray-800">
          Recomendado para Ti
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {recommendations.map((rec, index) => {
          const Icon = rec.icon
          return (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={rec.path}>
                <Card className="p-4 h-full hover:shadow-lg transition-all group cursor-pointer border-2 border-transparent hover:border-primary-300">
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${rec.color} flex items-center justify-center mb-3`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-1">{rec.title}</h4>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{rec.description}</p>
                  <div className="flex items-center text-primary-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                    {rec.action}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default PersonalizedRecommendations
