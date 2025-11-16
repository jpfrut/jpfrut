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
  Sparkles,
  Trophy,
  Clock,
  Heart,
  HelpCircle,
  ArrowRight,
  Star,
  Sun,
  Library
} from 'lucide-react'
import { getModulesArray, getStats, getCategories } from '../data/modules'
import useStore from '../store/useStore'
import ModuleCard from '../components/ModuleCard'
import StatsCard from '../components/StatsCard'
import AchievementCard from '../components/AchievementCard'
import DailyChecklist from '../components/DailyChecklist'
import TipOfTheDay from '../components/TipOfTheDay'
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

  // Calcular estadísticas del usuario
  const totalCompleted = completedExercises.length
  const modulesStarted = Object.keys(moduleProgress).length
  const totalXPEarned = user.totalXp

  // Logros disponibles
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
            <Link to="/missions">
              <Button
                variant="secondary"
                size="lg"
                icon={<Target className="w-5 h-5" />}
              >
                Empezar Misión
              </Button>
            </Link>
            <Link to="/quick-guides">
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
                icon={<Clock className="w-5 h-5" />}
              >
                Guía del Día
              </Button>
            </Link>
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

      {/* First Day Banner - For Complete Beginners */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.25 }}
      >
        <Link to="/first-day">
          <Card className="p-6 bg-gradient-to-r from-yellow-50 via-orange-50 to-pink-50 border-2 border-orange-200 hover:border-orange-400 transition-all hover:shadow-lg group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl text-white">
                  <Sun className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-orange-800 mb-1">
                    ¿Primera vez en Odoo? Empieza aquí
                  </h3>
                  <p className="text-orange-700">
                    Guía paso a paso para tu primer día. Sin tecnicismos, con mucha paciencia.
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-orange-500 group-hover:translate-x-2 transition-transform" />
            </div>
          </Card>
        </Link>
      </motion.div>

      {/* Glossary Banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.28 }}
      >
        <Link to="/glossary">
          <Card className="p-6 bg-primary-50 border-2 border-primary-100 hover:border-primary-300 transition-all hover:shadow-lg group cursor-pointer">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-600 rounded-xl text-white">
                  <Library className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-primary-800 mb-1">
                    Glosario Interactivo de Odoo
                  </h3>
                  <p className="text-primary-700">
                    Explora términos clave con ejemplos, mejores prácticas y relaciones entre conceptos.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs bg-secondary-500 text-white px-2 py-1 rounded-full font-medium">
                  Nuevo
                </span>
                <ArrowRight className="w-6 h-6 text-primary-500 group-hover:translate-x-2 transition-transform" />
              </div>
            </div>
          </Card>
        </Link>
      </motion.div>

      {/* Quick Access for Beginners */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* Missions Card */}
        <Link to="/missions">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-secondary-500 group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-secondary-100 rounded-xl">
                <Target className="w-8 h-8 text-secondary-500" />
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-secondary-500 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Misiones Prácticas
            </h3>
            <p className="text-gray-600 mb-4">
              Aprende haciendo tareas reales. Cada misión te guía paso a paso con explicaciones claras de <strong>por qué</strong> cada acción es importante para tu negocio.
            </p>
            <div className="flex items-center text-sm text-secondary-600">
              <Heart className="w-4 h-4 mr-2" />
              Perfecto para principiantes sin experiencia
            </div>
          </Card>
        </Link>

        {/* Daily Guide Card */}
        <Link to="/quick-guides">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary-500 group">
            <div className="flex items-start justify-between mb-4">
              <div className="p-3 bg-primary-100 rounded-xl">
                <Clock className="w-8 h-8 text-primary-600" />
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-primary-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">
              Guía de Uso Diario
            </h3>
            <p className="text-gray-600 mb-4">
              Rutinas simples que debes hacer cada día, semana y mes. Incluye preguntas frecuentes, glosario y señales de alerta.
            </p>
            <div className="flex items-center text-sm text-primary-600">
              <HelpCircle className="w-4 h-4 mr-2" />
              Respuestas rápidas a dudas comunes
            </div>
          </Card>
        </Link>
      </motion.div>

      {/* Tip of the Day */}
      <TipOfTheDay />

      {/* Personalized Recommendations */}
      <PersonalizedRecommendations />

      {/* Encouragement for New Users */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <Card className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 border-green-200">
          <div className="flex items-start">
            <Heart className="w-8 h-8 text-green-600 mr-4 flex-shrink-0" />
            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-2">
                ¿Nuevo en Odoo? ¡No te preocupes!
              </h3>
              <p className="text-green-700 mb-3">
                Esta plataforma está diseñada especialmente para personas como tú. No necesitas saber de computadoras ni tener experiencia previa.
              </p>
              <p className="text-sm text-green-600 font-medium">
                Comienza con la misión "Registro de Mi Primer Cliente" - solo toma 10 minutos.
              </p>
            </div>
          </div>
        </Card>

        <Link to="/success-stories">
          <Card className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200 hover:shadow-lg transition-all h-full">
            <div className="flex items-start justify-between mb-3">
              <Heart className="w-8 h-8 text-purple-600" />
              <ArrowRight className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-semibold text-purple-800 mb-2">
              Historias de Éxito
            </h3>
            <p className="text-purple-700 mb-2">
              Conoce a personas como tú que vencieron el miedo y ahora dominan Odoo.
            </p>
            <p className="text-sm text-purple-600 font-medium">
              ¡Tú también puedes lograrlo!
            </p>
          </Card>
        </Link>
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

      {/* Daily Checklist Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-6"
      >
        <DailyChecklist />
        <ProgressSummary />
      </motion.div>

      {/* Achievements Section */}
      {unlockedAchievements.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
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
          <Link to="/explore">
            <Button
              variant="outline"
              size="sm"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Ver los {stats.totalModules} Módulos
            </Button>
          </Link>
        </div>

        {/* Category Overview */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-yellow-500" />
            {categories.length} Categorías Disponibles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { name: 'Finanzas', icon: '💰', color: 'from-emerald-500 to-teal-600' },
              { name: 'Ventas', icon: '🛒', color: 'from-blue-500 to-indigo-600' },
              { name: 'Cadena de Suministro', icon: '📦', color: 'from-orange-500 to-amber-600' },
              { name: 'Recursos Humanos', icon: '👥', color: 'from-purple-500 to-pink-600' },
              { name: 'Sitios Web', icon: '🌐', color: 'from-cyan-500 to-blue-600' },
              { name: 'Marketing', icon: '📣', color: 'from-pink-500 to-rose-600' },
              { name: 'Servicios', icon: '🛠️', color: 'from-gray-500 to-slate-600' },
              { name: 'Productividad', icon: '📊', color: 'from-indigo-500 to-purple-600' },
              { name: 'Personalización', icon: '⚙️', color: 'from-yellow-500 to-orange-600' }
            ].map((cat) => (
              <Link key={cat.name} to={`/explore?category=${encodeURIComponent(cat.name)}`}>
                <Card className="p-3 text-center hover:shadow-md transition-all group cursor-pointer">
                  <div className="text-2xl mb-1">{cat.icon}</div>
                  <div className="text-xs font-medium text-gray-700 group-hover:text-primary-600 transition-colors">
                    {cat.name}
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Priority Modules - Show only top 6 */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-slate-700 mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-500" />
            Módulos Recomendados para Empezar
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {modules
              .filter(m => m.priority === 1)
              .slice(0, 6)
              .map((module, index) => (
                <ModuleCard
                  key={module.id}
                  module={module}
                  index={index}
                />
              ))}
          </div>
        </div>

        {/* Call to Action */}
        <Link to="/explore">
          <Card className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 border-primary-200 hover:shadow-lg transition-all group cursor-pointer">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-primary-800 mb-2">
                  Explora los {stats.totalModules} Módulos de Odoo 19
                </h3>
                <p className="text-primary-700">
                  {stats.totalLessons} lecciones • {stats.totalTime} de contenido • {categories.length} categorías
                </p>
              </div>
              <ArrowRight className="w-8 h-8 text-primary-600 group-hover:translate-x-2 transition-transform" />
            </div>
          </Card>
        </Link>
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
