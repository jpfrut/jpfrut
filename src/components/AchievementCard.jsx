import { motion } from 'framer-motion'
import { Award, Lock } from 'lucide-react'
import Card from './ui/Card'
import Badge from './ui/Badge'

const AchievementCard = ({ achievement, unlocked = false, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <Card
        hover={unlocked}
        className={`
          ${unlocked ? 'border-2 border-secondary-400' : 'opacity-60'}
          relative
        `}
      >
        <div className="flex items-center gap-4">
          {/* Icon */}
          <motion.div
            whileHover={unlocked ? { scale: 1.1, rotate: [0, -10, 10, -10, 0] } : {}}
            className={`
              w-16 h-16 rounded-full flex items-center justify-center
              ${unlocked
                ? 'bg-gradient-to-br from-secondary-400 to-secondary-500 shadow-lg'
                : 'bg-neutral-200'
              }
            `}
          >
            {unlocked ? (
              <Award className="w-8 h-8 text-white" />
            ) : (
              <Lock className="w-8 h-8 text-neutral-400" />
            )}
          </motion.div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-start justify-between mb-1">
              <h4 className="font-bold text-neutral-800">{achievement.title}</h4>
              {unlocked && achievement.xp && (
                <Badge variant="warning" size="sm">
                  +{achievement.xp} XP
                </Badge>
              )}
            </div>
            <p className="text-sm text-neutral-600">{achievement.description}</p>
            {unlocked && achievement.earnedAt && (
              <p className="text-xs text-neutral-400 mt-1">
                Desbloqueado: {new Date(achievement.earnedAt).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>

        {/* Shine effect for unlocked badges */}
        {unlocked && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            animate={{
              x: ['-200%', '200%'],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: 'linear',
              repeatDelay: 5,
            }}
          />
        )}
      </Card>
    </motion.div>
  )
}

export default AchievementCard
