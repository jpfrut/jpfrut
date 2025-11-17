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
import { hasLessonContent } from '../data/lessonContent'
import useStore from '../store/useStore'
import Card from './ui/Card'

const PersonalizedRecommendations = () => {
  const { user, completedExercises, completedMissions, moduleProgress } = useStore()
  const modules = getModulesArray()

  const recommendations = useMemo(() => {
    const recs = []

    // 1. If user is completely new (no progress)
    if (completedExercises.length === 0 && Object.keys(moduleProgress).length === 0) {
      recs.push({
        id: 'start-learning',
        type: 'start',
        priority: 1,
        title: 'Comienza tu aprendizaje',
        description: 'Explora los módulos esenciales de Odoo',
        action: 'Explorar Módulos',
        path: '/aprender',
        icon: BookOpen,
        color: 'from-primary-400 to-primary-500'
      })

      recs.push({
        id: 'first-mission',
        type: 'mission',
        priority: 2,
        title: 'Tu primera misión práctica',
        description: 'Registra tu primer cliente en solo 10 minutos',
        action: 'Iniciar Misión',
        path: '/practicar',
        icon: Target,
        color: 'from-accent-green-400 to-accent-green-500'
      })
    }

    // 2. If user has started but not completed much
    if (completedExercises.length > 0 && completedExercises.length < 5) {
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
          description: `${recommended.description}`,
          action: 'Explorar Módulo',
          path: `/modulo/${recommended.id}`,
          icon: BookOpen,
          color: 'from-primary-400 to-primary-500'
        })
      }

      const completedMissionCount = completedMissions.length

      if (completedMissionCount < 3) {
        recs.push({
          id: 'more-missions',
          type: 'mission',
          priority: 2,
          title: 'Sigue practicando',
          description: 'Las misiones prácticas te ayudan a aprender haciendo',
          action: 'Ver Misiones',
          path: '/practicar',
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
        path: `/modulo/${moduleId}`,
        icon: TrendingUp,
        color: 'from-accent-purple-400 to-accent-pink-500'
      })
    }

    // 4. Recommend based on user level
    if (user.level >= 2 && user.level < 5) {
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
          path: '/aprender',
          icon: Lightbulb,
          color: 'from-secondary-400 to-secondary-500'
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
        description: 'Tu dedicación es admirable. Consulta el centro de ayuda.',
        action: 'Ver Ayuda',
        path: '/ayuda',
        icon: Zap,
        color: 'from-secondary-400 to-secondary-500'
      })
    }

    // 6. Suggest help center if they haven't visited
    const visitedHelp = localStorage.getItem('visitedHelpCenter')
    if (!visitedHelp && completedExercises.length > 2) {
      recs.push({
        id: 'know-help',
        type: 'tip',
        priority: 5,
        title: 'Conoce el Centro de Ayuda',
        description: 'FAQ, guías rápidas y soluciones a problemas comunes',
        action: 'Ver Ayuda',
        path: '/ayuda',
        icon: Lightbulb,
        color: 'from-accent-green-400 to-accent-green-500'
      })
    }

    return recs.sort((a, b) => a.priority - b.priority).slice(0, 3)
  }, [user, completedExercises, completedMissions, moduleProgress, modules])

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
        <Lightbulb className="w-5 h-5 text-secondary-500" />
        <h3 className="text-lg font-semibold text-neutral-800">
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
                  <h4 className="font-semibold text-neutral-800 mb-1">{rec.title}</h4>
                  <p className="text-sm text-neutral-600 mb-3 line-clamp-2">{rec.description}</p>
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
