import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  BookOpen,
  CheckCircle,
  Target,
  TrendingUp,
  Award,
  Zap,
  Star,
  ArrowRight,
  Compass
} from 'lucide-react'
import { getModulesArray, getStats, getCategories } from '../data/modules'
import useStore from '../store/useStore'
import ModuleCard from '../components/ModuleCard'
import StatsCard from '../components/StatsCard'
import AchievementCard from '../components/AchievementCard'
import PersonalizedRecommendations from '../components/PersonalizedRecommendations'
import ProgressSummary from '../components/ProgressSummary'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'

const Dashboard = () => {
  const { user, completedExercises, moduleProgress } = useStore()
  const modules = getModulesArray()
  const moduleMap = useMemo(
    () => Object.fromEntries(modules.map(module => [module.id, module])),
    [modules]
  )
  const stats = getStats()
  const categories = getCategories()

  const totalCompleted = completedExercises.length
  const totalXPEarned = user.totalXp

  const hasCompletedFirstModule = useMemo(() => {
    return Object.entries(moduleProgress).some(([moduleId, progress]) => {
      const module = moduleMap[moduleId]
      if (!module) return false
      return progress.completedLessons.length === module.lessons.length
    })
  }, [moduleProgress, moduleMap])

  const hasCompletedAllModules = useMemo(() => {
    const progressEntries = Object.entries(moduleProgress)
    if (progressEntries.length !== modules.length) return false

    return progressEntries.every(([moduleId, progress]) => {
      const module = moduleMap[moduleId]
      return module && progress.completedLessons.length === module.lessons.length
    })
  }, [moduleProgress, moduleMap, modules])

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
      unlocked: hasCompletedFirstModule
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
      unlocked: hasCompletedAllModules
    }
  ]

  const unlockedAchievements = achievements.filter(a => a.unlocked)

  return (
    <div className="space-y-8 pb-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-lg bg-primary-500 p-8 md:p-12 text-white"
      >
        <div className="relative z-10">
          <motion.div
            initial={{ scale: 0.95 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              ¡Hola, {user.name}!
            </h1>
          </motion.div>
          <p className="text-xl md:text-2xl text-white/90 mb-6">
            Tu plataforma simplificada de aprendizaje de Odoo
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/aprender">
              <Button
                tone="secondary"
                size="lg"
                icon={<Compass className="w-5 h-5" />}
              >
                Explorar Módulos
              </Button>
            </Link>
            <Link to="/practicar">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 border-white/30 text-white hover:bg-white/20"
                icon={<Target className="w-5 h-5" />}
              >
                Practicar Ahora
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Quick Access - Flujo Lineal */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {/* Aprender */}
        <Link to="/aprender">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary-500 group h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary-100 rounded-xl">
                <BookOpen className="w-8 h-8 text-primary-600" />
              </div>
              <span className="text-sm font-bold text-primary-600">1</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-2">
              Aprender
            </h3>
            <p className="text-neutral-600">
              Explora los {stats.totalModules} módulos esenciales organizados en {categories.length} categorías
            </p>
          </Card>
        </Link>

        {/* Practicar */}
        <Link to="/practicar">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-secondary-500 group h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-secondary-100 rounded-xl">
                <Target className="w-8 h-8 text-secondary-500" />
              </div>
              <span className="text-sm font-bold text-secondary-500">2</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-2">
              Practicar
            </h3>
            <p className="text-neutral-600">
              Misiones paso a paso con tareas reales para aplicar lo aprendido
            </p>
          </Card>
        </Link>

        {/* Consultar */}
        <Link to="/ayuda">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-accent-green-500 group h-full">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-accent-green-100 rounded-xl">
                <BookOpen className="w-8 h-8 text-accent-green-600" />
              </div>
              <span className="text-sm font-bold text-accent-green-600">3</span>
            </div>
            <h3 className="text-xl font-bold text-neutral-800 mb-2">
              Consultar
            </h3>
            <p className="text-neutral-600">
              FAQ, guías rápidas y soluciones a problemas comunes
            </p>
          </Card>
        </Link>
      </motion.div>

      {/* Personalized Recommendations */}
      <PersonalizedRecommendations />

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatsCard
          icon={BookOpen}
          label="Módulos"
          value={stats.totalModules}
          color="from-primary-500 to-primary-600"
          index={0}
        />
        <StatsCard
          icon={CheckCircle}
          label="Completadas"
          value={totalCompleted}
          color="from-accent-green-500 to-accent-green-600"
          index={1}
        />
        <StatsCard
          icon={Zap}
          label="XP Total"
          value={totalXPEarned}
          color="from-secondary-500 to-secondary-600"
          index={2}
        />
        <StatsCard
          icon={Award}
          label="Logros"
          value={`${unlockedAchievements.length}/${achievements.length}`}
          color="from-accent-purple-500 to-accent-pink-600"
          index={3}
        />
      </div>

      {/* Progress Summary */}
      <ProgressSummary />

      {/* Achievements Section - Only show if unlocked */}
      {unlockedAchievements.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-secondary-600" />
            <h2 className="text-2xl font-heading font-bold text-neutral-800">
              Logros Recientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.slice(0, 3).map((achievement, index) => (
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

      {/* Featured Modules */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-6 h-6 text-primary-600" />
            <h2 className="text-2xl font-heading font-bold text-neutral-800">
              Módulos Recomendados
            </h2>
          </div>
          <Link to="/aprender">
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Ver Todos
            </Button>
          </Link>
        </div>

        {/* Categories Overview */}
        <div className="mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {categories.map((cat) => {
              // Mapa de emojis por categoría (11 categorías completas)
              const categoryEmojis = {
                'Finance': '💰',
                'Sales': '📊',
                'Websites': '🌐',
                'Supply Chain': '📦',
                'Human Resources': '👥',
                'Services': '🛠️',
                'Marketing': '📢',
                'Productivity': '⚡',
                'Odoo Essentials': '📚',
                'Studio': '🎨',
                'Settings': '⚙️'
              }

              return (
                <Link key={cat} to={`/aprender?category=${encodeURIComponent(cat)}`}>
                  <Card className="p-4 text-center hover:shadow-md transition-all group cursor-pointer">
                    <div className="text-2xl mb-2">
                      {categoryEmojis[cat] || '📁'}
                    </div>
                    <div className="text-sm font-medium text-neutral-700 group-hover:text-primary-600 transition-colors">
                      {cat}
                    </div>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Priority Modules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {modules
            .filter(m => m.priority === 1)
            .slice(0, 3)
            .map((module, index) => (
              <ModuleCard
                key={module.id}
                module={module}
                index={index}
              />
            ))}
        </div>

        {/* CTA */}
        <Link to="/aprender" className="block mt-6">
          <Card className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200 hover:shadow-lg transition-all group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary-800 mb-2">
                  Explora los {stats.totalModules} Módulos Esenciales
                </h3>
                <p className="text-primary-700">
                  {stats.totalLessons} lecciones • {stats.totalTime} de contenido
                </p>
              </div>
              <ArrowRight className="w-8 h-8 text-primary-600 group-hover:translate-x-2 transition-transform" />
            </div>
          </Card>
        </Link>
      </motion.div>
    </div>
  )
}

export default Dashboard
