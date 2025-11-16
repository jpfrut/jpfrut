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

const variantStyles = {
  neutral: {
    card: 'surface-card border border-card text-primary-900',
    iconAction: 'text-primary-600',
    iconCta: 'text-secondary-500',
    badge: 'tint-neutral-soft',
    text: 'text-primary-900'
  }
}

const ProgressSummary = ({ variant = 'neutral' }) => {
  const theme = variantStyles[variant] || variantStyles.neutral
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
    <Card className={`p-6 ${theme.card}`}>
      <h3 className="text-lg font-semibold text-primary-900 mb-4 flex items-center gap-2">
        <TrendingUp className={`w-5 h-5 ${theme.iconAction}`} />
        Tu Progreso
      </h3>

      <div className="space-y-6">
        {/* Level and Title */}
        <div className="text-center p-4 surface-neutral rounded-xl border border-card">
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-20 h-20 rounded-full surface-hero flex items-center justify-center mx-auto mb-3 shadow-lg"
            >
              <Star className={`w-10 h-10 ${theme.iconCta}`} />
            </motion.div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full px-3 py-1 shadow-md">
              <span className="font-bold text-primary-900">Nivel {user.level}</span>
            </div>
          </div>
          <h4 className="text-xl font-bold text-primary-900">{getLevelTitle(user.level)}</h4>
          <p className="text-sm text-primary-700">{user.totalXp} XP Total</p>
        </div>

        {/* XP to next milestone */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-primary-700">Próxima meta: {nextMilestone} XP</span>
            <span className="font-medium text-primary-900">{nextMilestone - user.totalXp} XP restantes</span>
          </div>
          <div className="h-3 tint-neutral-soft rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(milestoneProgress, 100)}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="h-full surface-cta rounded-full"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-3 tint-primary-soft rounded-lg">
            <BookOpen className={`w-6 h-6 mx-auto mb-1 ${theme.iconAction}`} />
            <div className="text-2xl font-bold text-primary-900">{totalLessonsCompleted}</div>
            <div className="text-xs text-primary-700">Lecciones</div>
          </div>
          <div className="text-center p-3 tint-success-soft rounded-lg">
            <CheckCircle2 className={`w-6 h-6 mx-auto mb-1 ${theme.iconAction}`} />
            <div className="text-2xl font-bold text-primary-900">{modulesCompleted}</div>
            <div className="text-xs text-primary-700">Módulos Completos</div>
          </div>
          <div className="text-center p-3 tint-neutral-soft rounded-lg">
            <Target className={`w-6 h-6 mx-auto mb-1 ${theme.iconAction}`} />
            <div className="text-2xl font-bold text-primary-900">{totalModulesStarted}</div>
            <div className="text-xs text-primary-700">En Progreso</div>
          </div>
          <div className="text-center p-3 tint-warning-soft rounded-lg">
            <Award className={`w-6 h-6 mx-auto mb-1 ${theme.iconCta}`} />
            <div className="text-2xl font-bold text-primary-900">{user.badges.length}</div>
            <div className="text-xs text-primary-700">Insignias</div>
          </div>
        </div>

        {/* Overall Progress */}
        <div>
          <div className="flex justify-between text-sm mb-1">
            <span className="text-primary-700">Progreso General</span>
            <span className="font-medium text-primary-900">{overallProgress}%</span>
          </div>
          <div className="h-4 tint-neutral-soft rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${overallProgress}%` }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full surface-hero rounded-full"
            />
          </div>
          <p className="text-xs text-primary-700 mt-1">
            {totalLessonsCompleted} de {totalLessonsAvailable} lecciones completadas
          </p>
        </div>

        {/* Encouragement Message */}
        <div className="p-3 tint-neutral-soft rounded-lg text-center">
          {overallProgress === 0 && (
            <p className="text-sm text-primary-900">
              ¡Tu aventura apenas comienza! Cada pequeño paso cuenta.
            </p>
          )}
          {overallProgress > 0 && overallProgress < 10 && (
            <p className="text-sm text-primary-900">
              ¡Excelente inicio! Sigue así y pronto dominarás Odoo.
            </p>
          )}
          {overallProgress >= 10 && overallProgress < 25 && (
            <p className="text-sm text-primary-900">
              ¡Vas muy bien! Ya tienes una base sólida de conocimientos.
            </p>
          )}
          {overallProgress >= 25 && overallProgress < 50 && (
            <p className="text-sm text-primary-900">
              ¡Impresionante! Ya eres un usuario competente de Odoo.
            </p>
          )}
          {overallProgress >= 50 && (
            <p className="text-sm text-primary-900">
              ¡Increíble! Eres prácticamente un experto en Odoo.
            </p>
          )}
        </div>
      </div>
    </Card>
  )
}

export default ProgressSummary
