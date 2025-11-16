import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Star, TrendingUp, Lock, CheckCircle } from 'lucide-react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import ProgressBar from './ui/ProgressBar'
import useStore from '../store/useStore'

const ModuleCard = ({ module, index }) => {
  const navigate = useNavigate()
  const { moduleProgress } = useStore()

  const progress = moduleProgress[module.id] || { completedLessons: [], progress: 0 }
  const totalLessons = module.lessons.length
  const completedCount = progress.completedLessons.length
  const progressPercentage = (completedCount / totalLessons) * 100
  const isCompleted = completedCount === totalLessons

  const difficultyColors = {
    'Básico': 'success',
    'Intermedio': 'warning',
    'Avanzado': 'danger',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card
        onClick={() => navigate(`/module/${module.id}`)}
        className="relative overflow-hidden group"
        gradient={true}
      >
        {/* Priority Badge */}
        {module.priority === 1 && (
          <div className="absolute top-4 right-4 z-10">
            <Badge variant="warning" icon={<Star className="w-3 h-3" />}>
              Prioritario
            </Badge>
          </div>
        )}

        {/* Completion Badge */}
        {isCompleted && (
          <div className="absolute top-4 left-4 z-10">
            <Badge variant="success" icon={<CheckCircle className="w-3 h-3" />}>
              Completado
            </Badge>
          </div>
        )}

        {/* Icon/Emoji Header */}
        <div className="flex items-start gap-4 mb-4">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`
              text-6xl w-20 h-20 flex items-center justify-center
              rounded-2xl bg-gradient-to-br ${module.color}
              shadow-lg transform transition-transform
            `}
          >
            <span className="text-4xl">{module.icon}</span>
          </motion.div>

          <div className="flex-1">
            <h3 className="text-2xl font-bold text-neutral-800 mb-2 group-hover:text-primary-600 transition-colors">
              {module.name}
            </h3>
            <p className="text-sm text-neutral-600 line-clamp-2">
              {module.description}
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg">
            <Clock className="w-4 h-4 text-neutral-500" />
            <div>
              <p className="text-xs text-neutral-500">Tiempo</p>
              <p className="text-sm font-bold text-neutral-700">
                {module.estimatedTime}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg">
            <TrendingUp className="w-4 h-4 text-neutral-500" />
            <div>
              <p className="text-xs text-neutral-500">Dificultad</p>
              <Badge
                size="sm"
                variant={difficultyColors[module.difficulty]}
                className="mt-0.5"
              >
                {module.difficulty}
              </Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 bg-neutral-50 rounded-lg">
            <Star className="w-4 h-4 text-neutral-500" />
            <div>
              <p className="text-xs text-neutral-500">Lecciones</p>
              <p className="text-sm font-bold text-neutral-700">
                {completedCount}/{totalLessons}
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <ProgressBar
            progress={completedCount}
            total={totalLessons}
            showLabel={true}
            color={progressPercentage === 100 ? 'success' : 'primary'}
          />
        </div>

        {/* Hover Effect - Shimmer */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 group-hover:animate-shimmer" />
        </div>
      </Card>
    </motion.div>
  )
}

export default ModuleCard
