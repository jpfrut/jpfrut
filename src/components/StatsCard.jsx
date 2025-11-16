import { motion } from 'framer-motion'
import Card from './ui/Card'

const StatsCard = ({ icon: Icon, label, value, color, trend, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 }}
    >
      <Card hover={false} className="relative overflow-hidden">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-500 mb-1">{label}</p>
            <p className="text-3xl font-bold text-neutral-800">{value}</p>
            {trend && (
              <p className="text-xs text-accent-green-600 mt-1 flex items-center gap-1">
                <span>↑</span> {trend}
              </p>
            )}
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className={`
              w-16 h-16 rounded-2xl bg-gradient-to-br ${color}
              flex items-center justify-center shadow-lg
            `}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
        </div>

        {/* Decorative circles */}
        <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-br from-neutral-100 to-transparent rounded-full opacity-50" />
        <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-gradient-to-br from-neutral-100 to-transparent rounded-full opacity-30" />
      </Card>
    </motion.div>
  )
}

export default StatsCard
