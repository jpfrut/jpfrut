import { motion } from 'framer-motion'
import {
  Award,
  Target,
  BookOpen,
  TrendingUp,
  CheckCircle2,
  Star
} from 'lucide-react'
import { getModulesArray } from '../data/modules'
import useStore from '../store/useStore'
import Card from './ui/Card'

const ProgressSummary = () => {
  const { user, completedExercises, moduleProgress } = useStore()
  const modules = getModulesArray()

  // Calculate statistics
  const totalModulesStarted = Object.keys(moduleProgress).length
  const totalLessonsCompleted = completedExercises.length
  const totalLessonsAvailable = modules.reduce((acc, m) => acc + m.lessons.length, 0)

  // Calculate completion percentage
  const overallProgress = Math.round((totalLessonsCompleted / totalLessonsAvailable) * 100)

  // Calculate modules completed
  const modulesCompleted = Object.entries(moduleProgress).filter(([moduleId, progress]) => {
    const module = modules.find(m => m.id === moduleId)
    return module && progress.completedLessons.length === module.lessons.length
  }).length

  // XP milestones
  const xpMilestones = [100, 500, 1000, 2500, 5000]
  const nextMilestone = xpMilestones.find(m => m > user.totalXp) || 10000
  const prevMilestone = xpMilestones.reverse().find(m => m <= user.totalXp) || 0
  const milestoneProgress = ((user.totalXp - prevMilestone) / (nextMilestone - prevMilestone)) * 100

  // Level-based titles
  const getLevelTitle = (level) => {
    if (level < 3) return 'Principiante'
    if (level < 5) return 'Aprendiz'
    if (level < 10) return 'Practicante'
    if (level < 15) return 'Competente'
    if (level < 20) return 'Experto'
    return 'Maestro de Odoo'
  }

  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold text-neutral-800 mb-4 flex items-center gap-2">
        <TrendingUp className="w-5 h-5 text-primary-600" />
        Tu Progreso
      </h3>

      <div className="space-y-6">
        {/* Level and Title */}
        <div className="text-center p-4 bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl">
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center mx-auto mb-3 shadow-lg"
            >
              <Star className="w-10 h-10 text-white" />
            </motion.div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-3 py-1 shadow-md">
              <span className="font-bold text-primary-600">Nivel {user.level}</span>
            </div>
          </div>
          <h4 className="text-xl font-bold text-neutral-800">{getLevelTitle(user.level)}</h4>
          <p className="text-sm text-neutral-600">{user.totalXp} XP Total</p>
        </div>

        {/* XP to next milestone */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-neutral-600">Próxima meta: {nextMilestone} XP</span>
            <span className="font-medium text-primary-600">{nextMilestone - user.totalXp} XP restantes</span>
          </div>
          <div className="h-3 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(milestoneProgress, 100)}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-secondary-400 to-secondary-500 rounded-full"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 bg-primary-50 rounded-lg">
            <BookOpen className="w-6 h-6 text-primary-600 mx-auto mb-1" />
            <div className="text-2xl font-bold text-primary-800">{totalLessonsCompleted}</div>
            <div className="text-xs text-primary-600">Lecciones</div>
          </div>
          <div className="text-center p-3 bg-accent-green-50 rounded-lg">
            <CheckCircle2 className="w-6 h-6 text-accent-green-600 mx-auto mb-1" />
            <div className="text-2xl font-bold text-accent-green-800">{modulesCompleted}</div>
            <div className="text-xs text-accent-green-600">Módulos Completos</div>
          </div>
          <div className="text-center p-3 bg-accent-purple-50 rounded-lg">
            <Target className="w-6 h-6 text-accent-purple-600 mx-auto mb-1" />
            <div className="text-2xl font-bold text-accent-purple-800">{totalModulesStarted}</div>
            <div className="text-xs text-accent-purple-600">En Progreso</div>
          </div>
          <div className="text-center p-3 bg-secondary-50 rounded-lg">
            <Award className="w-6 h-6 text-secondary-600 mx-auto mb-1" />
            <div className="text-2xl font-bold text-secondary-800">{user.badges.length}</div>
            <div className="text-xs text-secondary-600">Insignias</div>
          </div>
        </div>

        {/* Overall Progress */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-neutral-600">Progreso General</span>
            <span className="font-medium text-neutral-800">{overallProgress}%</span>
          </div>
          <div className="h-4 bg-neutral-200 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-accent-green-400 to-accent-green-500 rounded-full"
            />
          </div>
          <p className="text-xs text-neutral-500 mt-1">
            {totalLessonsCompleted} de {totalLessonsAvailable} lecciones completadas
          </p>
        </div>

        {/* Encouragement Message */}
        <div className="p-3 bg-gradient-to-r from-primary-50 to-accent-purple-50 rounded-lg text-center">
          {overallProgress === 0 && (
            <p className="text-sm text-primary-700">
              ¡Tu aventura apenas comienza! Cada pequeño paso cuenta.
            </p>
          )}
          {overallProgress > 0 && overallProgress < 10 && (
            <p className="text-sm text-primary-700">
              ¡Excelente inicio! Sigue así y pronto dominarás Odoo.
            </p>
          )}
          {overallProgress >= 10 && overallProgress < 25 && (
            <p className="text-sm text-primary-700">
              ¡Vas muy bien! Ya tienes una base sólida de conocimientos.
            </p>
          )}
          {overallProgress >= 25 && overallProgress < 50 && (
            <p className="text-sm text-primary-700">
              ¡Impresionante! Ya eres un usuario competente de Odoo.
            </p>
          )}
          {overallProgress >= 50 && (
            <p className="text-sm text-primary-700">
              ¡Increíble! Eres prácticamente un experto en Odoo.
            </p>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProgressSummary
