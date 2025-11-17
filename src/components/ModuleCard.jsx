import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Star, CheckCircle } from 'lucide-react'
import Card from './ui/Card'
import Badge from './ui/Badge'
import ProgressBar from './ui/ProgressBar'
import useStore from '../store/useStore'
import brandTokens from '../theme/brandTokens'

const { colors } = brandTokens

const accentColorMap = {
  'primary-500': colors.primary[500],
  'primary-600': colors.primary[600],
  'secondary-500': colors.secondary[500],
  'secondary-600': colors.secondary[600],
  'neutral-500': colors.neutral[500],
  'neutral-600': colors.neutral[600],
  'accent-aqua-500': colors.accent.aqua,
  'accent-green-500': '#10b981',
  'accent-green-600': '#059669',
  'accent-purple-500': '#8b5cf6',
  'accent-purple-600': '#7c3aed',
  'accent-pink-500': '#ec4899',
  'accent-red-500': '#f43f5e',
}

const hexToRgba = (hex, alpha = 1) => {
  if (!hex?.startsWith('#')) return hex
  const value = hex.replace('#', '')
  const bigint = parseInt(value, 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const getAccentColor = (gradientClass) => {
  if (!gradientClass) return colors.primary[500]
  const fromClass = gradientClass.split(' ').find((cls) => cls.startsWith('from-'))
  if (!fromClass) return colors.primary[500]
  const key = fromClass.replace('from-', '')
  return accentColorMap[key] ?? colors.primary[500]
}

const ModuleCard = ({ module, index }) => {
  const navigate = useNavigate()
  const { moduleProgress } = useStore()

  const progress = moduleProgress[module.id] || { completedLessons: [], progress: 0 }
  const totalLessons = module.lessons.length
  const completedCount = progress.completedLessons.length
  const progressPercentage = (completedCount / totalLessons) * 100
  const isCompleted = completedCount === totalLessons
  const accentColor = getAccentColor(module.color)
  const accentSurface = hexToRgba(accentColor, 0.15)
  const accentBorder = hexToRgba(accentColor, 0.35)

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
      <Card onClick={() => navigate(`/modulo/${module.id}`)} className="relative overflow-hidden group">
        <span
          className="absolute inset-x-6 top-0 h-1 rounded-full"
          style={{ backgroundColor: accentColor }}
          aria-hidden="true"
        />

        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2 flex-wrap">
            {module.priority === 1 && (
              <Badge variant="warning" icon={<Star className="w-3 h-3" />}>
                Prioritario
              </Badge>
            )}
            {isCompleted && (
              <Badge variant="success" icon={<CheckCircle className="w-3 h-3" />}>
                Completado
              </Badge>
            )}
          </div>
          <Badge size="sm" variant="tint" tone="neutral">
            {module.category}
          </Badge>
        </div>

        <div className="flex items-start gap-4">
          <motion.div
            // Mentora Hub: Animaciones sutiles
            whileHover={{ scale: 1.02 }}
            // Mentora Hub: Border radius 8-12px
            className="w-20 h-20 rounded-lg border flex items-center justify-center text-4xl"
            style={{ backgroundColor: accentSurface, borderColor: accentBorder, color: accentColor }}
          >
            <span>{module.icon}</span>
          </motion.div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2 text-sm text-neutral-500">
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-600">
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                {module.lessons.length} lecciones
              </span>
              <span className="text-neutral-300">•</span>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-600">
                <Clock className="w-3 h-3" />
                {module.estimatedTime}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors">
              {module.name}
            </h3>
            <p className="text-sm text-neutral-600 line-clamp-2">{module.description}</p>
          </div>
        </div>

        <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
          {/* Mentora Hub: Border radius 8px, padding generoso */}
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 flex flex-col gap-1">
            <span className="text-xs text-neutral-500">Tiempo estimado</span>
            <span className="font-semibold text-neutral-800">{module.estimatedTime}</span>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 flex flex-col gap-1">
            <span className="text-xs text-neutral-500">Dificultad</span>
            <Badge
              size="sm"
              tone={difficultyColors[module.difficulty]}
              variant="tint"
              className="w-fit"
            >
              {module.difficulty}
            </Badge>
          </div>
          <div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3 flex flex-col gap-1">
            <span className="text-xs text-neutral-500">Lecciones</span>
            <span className="font-semibold text-neutral-800">
              {completedCount}/{totalLessons}
            </span>
          </div>
        </div>

        <div className="mt-5 pt-5 border-t border-dashed border-neutral-200">
          <div className="flex items-center justify-between text-sm mb-2">
            <div className="flex items-center gap-2 text-neutral-600">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: accentColor }} />
              <span className="font-semibold text-neutral-800">Avance</span>
            </div>
            <span className="font-bold text-neutral-700">{Math.round(progressPercentage)}%</span>
          </div>
          <ProgressBar
            progress={completedCount}
            total={totalLessons}
            showLabel={false}
            color={progressPercentage === 100 ? 'success' : 'primary'}
          />
        </div>
      </Card>
    </motion.div>
  )
}

export default ModuleCard
