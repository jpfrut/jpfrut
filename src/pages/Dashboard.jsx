import { motion } from 'framer-motion'
import {
  BookOpen,
  CheckCircle,
  Target,
  TrendingUp,
  Award,
  Zap,
  Sparkles,
  Trophy
} from 'lucide-react'
import { getModulesArray, getStats } from '../data/modules'
import useStore from '../store/useStore'
import ModuleCard from '../components/ModuleCard'
import StatsCard from '../components/StatsCard'
import AchievementCard from '../components/AchievementCard'
import Button from '../components/ui/Button'

const Dashboard = () => {
  const { user, completedExercises, moduleProgress } = useStore()
  const modules = getModulesArray()
  const stats = getStats()

  // Calcular estadísticas del usuario
  const totalCompleted = completedExercises.length
  const modulesStarted = Object.keys(moduleProgress).length
  const totalXPEarned = user.totalXp

  // Logros disponibles
  const achievements = [
    {
      id: 'first-lesson',
      title: 'Primer Paso',
      description: 'Completa tu primera lección',
      xp: 100,
      unlocked: totalCompleted >= 1
    },
    {
      id: 'five-lessons',
      title: 'En Camino',
      description: 'Completa 5 lecciones',
      xp: 250,
      unlocked: totalCompleted >= 5
    },
    {
      id: 'first-module',
      title: 'Maestro del Módulo',
      description: 'Completa tu primer módulo completo',
      xp: 500,
      unlocked: Object.values(moduleProgress).some(
        p => p.completedLessons.length === modules.find(m => m.id === Object.keys(moduleProgress).find(k => moduleProgress[k] === p))?.lessons.length
      )
    },
    {
      id: 'level-5',
      title: 'Ascenso Rápido',
      description: 'Alcanza el nivel 5',
      xp: 300,
      unlocked: user.level >= 5
    },
    {
      id: 'streak-7',
      title: 'Dedicación Total',
      description: 'Mantén una racha de 7 días',
      xp: 400,
      unlocked: user.streak >= 7
    },
    {
      id: 'all-modules',
      title: 'Experto en Odoo',
      description: 'Completa todos los módulos',
      xp: 2000,
      unlocked: Object.keys(moduleProgress).length === modules.length &&
        Object.values(moduleProgress).every(
          (p, i) => p.completedLessons.length === modules[i]?.lessons.length
        )
    }
  ]

  const unlockedAchievements = achievements.filter(a => a.unlocked)

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-600 p-8 md:p-12 text-white shadow-2xl"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              ¡Hola, {user.name}! 👋
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-primary-100 mb-6">
            Bienvenido a tu plataforma de aprendizaje de Odoo 19
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="secondary"
              size="lg"
              icon={<Sparkles className="w-5 h-5" />}
            >
              Continuar Aprendiendo
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              icon={<Trophy className="w-5 h-5" />}
            >
              Ver Logros
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary-400/20 rounded-full blur-3xl" />

        {/* Floating icons */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute top-10 right-20 hidden md:block"
        >
          <BookOpen className="w-16 h-16 text-white/20" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
          className="absolute bottom-10 right-40 hidden md:block"
        >
          <Target className="w-20 h-20 text-white/20" />
        </motion.div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          icon={BookOpen}
          label="Módulos Disponibles"
          value={stats.totalModules}
          color="from-blue-500 to-indigo-600"
          index={0}
        />
        <StatsCard
          icon={CheckCircle}
          label="Lecciones Completadas"
          value={totalCompleted}
          color="from-green-500 to-emerald-600"
          trend={totalCompleted > 0 ? `${totalCompleted} de ${stats.totalLessons}` : undefined}
          index={1}
        />
        <StatsCard
          icon={Zap}
          label="XP Total"
          value={totalXPEarned}
          color="from-yellow-500 to-orange-600"
          index={2}
        />
        <StatsCard
          icon={Award}
          label="Logros Desbloqueados"
          value={`${unlockedAchievements.length}/${achievements.length}`}
          color="from-purple-500 to-pink-600"
          index={3}
        />
      </div>

      {/* Achievements Section */}
      {unlockedAchievements.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-slate-800">
              Logros Recientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.slice(0, 4).map((achievement, index) => (
              <AchievementCard
                key={achievement.id}
                achievement={achievement}
                unlocked={achievement.unlocked}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Modules Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-bold text-slate-800">
              Módulos de Aprendizaje
            </h2>
          </div>
          <div className="text-sm text-slate-500">
            {stats.totalLessons} lecciones • {stats.totalTime} de contenido
          </div>
        </div>

        {/* Priority Modules */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            Módulos Prioritarios
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules
              .filter(m => m.priority === 1)
              .map((module, index) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  index={index}
                />
              ))}
          </div>
        </div>

        {/* Secondary Modules */}
        <div>
          <h3 className="text-lg font-semibold text-slate-700 mb-4">
            Módulos Adicionales
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules
              .filter(m => m.priority !== 1)
              .map((module, index) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  index={index}
                />
              ))}
          </div>
        </div>
      </motion.div>

      {/* Motivational Quote */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200"
      >
        <div className="flex items-start gap-4">
          <div className="text-4xl">💡</div>
          <div>
            <p className="text-lg font-semibold text-slate-800 mb-2">
              "El conocimiento es poder, pero la práctica es maestría"
            </p>
            <p className="text-sm text-slate-600">
              Cada lección que completas te acerca más a dominar Odoo. ¡Sigue así!
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Dashboard
