import { motion } from 'framer-motion'
import { tones } from '../../theme/brandTokens'

const allowedColors = ['primary', 'secondary', 'accent', 'success', 'warning', 'danger']

const ProgressBar = ({
  progress = 0,
  total = 100,
  showLabel = true,
  size = 'md',
  color = 'primary',
  animated = true,
  className = '',
}) => {
  const percentage = Math.min(100, Math.max(0, (progress / total) * 100))

  const sizes = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  }

  const toneKey = allowedColors.includes(color) ? color : 'primary'
  const toneToken = tones[toneKey] ?? tones.primary

  return (
    <div className={`w-full ${className}`}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-slate-700">
            Progreso
          </span>
          <span className="text-sm font-bold" style={{ color: toneToken.onSurface }}>
            {Math.round(percentage)}%
          </span>
        </div>
      )}
      <div className={`w-full bg-slate-200 rounded-full overflow-hidden ${sizes[size]}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={animated ? { duration: 0.5, ease: 'easeOut' } : { duration: 0 }}
          className="h-full rounded-full relative"
          style={{ background: toneToken.gradient }}
        >
          {animated && percentage > 0 && (
            <motion.div
              className="absolute inset-0 bg-white/30"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
                ease: 'linear',
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default ProgressBar
