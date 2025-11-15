import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Clock,
  Star,
  CheckCircle,
  PlayCircle,
  Lock,
  TrendingUp,
  Award,
  BookOpen
} from 'lucide-react'
import { getModuleById } from '../data/modules'
import useStore from '../store/useStore'
import { Button, Card, Badge, ProgressBar } from '../components/ui'

const ModulePage = () => {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const { moduleProgress, completedExercises } = useStore()

  const module = getModuleById(moduleId)

  if (!module) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Módulo no encontrado
          </h2>
          <Button onClick={() => navigate('/')}>
            Volver al Dashboard
          </Button>
        </div>
      </div>
    )
  }

  const progress = moduleProgress[module.id] || {
    completedLessons: [],
    progress: 0
  }
  const completedCount = progress.completedLessons.length
  const totalLessons = module.lessons.length
  const progressPercentage = (completedCount / totalLessons) * 100

  const isLessonCompleted = (lessonId) => {
    return completedExercises.includes(`${moduleId}-${lessonId}`)
  }

  const difficultyColors = {
    'Básico': 'success',
    'Intermedio': 'warning',
    'Avanzado': 'danger',
  }

  return (
    <div className="space-y-8 pb-12">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <Button
          variant="ghost"
          icon={<ArrowLeft className="w-5 h-5" />}
          onClick={() => navigate('/')}
        >
          Volver al Dashboard
        </Button>
      </motion.div>

      {/* Module Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${module.color} p-8 md:p-12 text-white shadow-2xl`}
      >
        <div className="relative z-10">
          <div className="flex items-start gap-6 mb-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 10 }}
              className="text-8xl w-24 h-24 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-3xl shadow-lg"
            >
              {module.icon}
            </motion.div>
            <div className="flex-1">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                {module.name}
              </h1>
              <p className="text-xl text-white/90 mb-6">
                {module.description}
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="default"
                  className="bg-white/20 text-white backdrop-blur-sm border border-white/30"
                  icon={<Clock className="w-4 h-4" />}
                >
                  {module.estimatedTime}
                </Badge>
                <Badge
                  variant={difficultyColors[module.difficulty]}
                  className="bg-white/20 text-white backdrop-blur-sm border border-white/30"
                  icon={<TrendingUp className="w-4 h-4" />}
                >
                  {module.difficulty}
                </Badge>
                <Badge
                  variant="default"
                  className="bg-white/20 text-white backdrop-blur-sm border border-white/30"
                  icon={<BookOpen className="w-4 h-4" />}
                >
                  {totalLessons} lecciones
                </Badge>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold">Tu Progreso</h3>
              <span className="text-2xl font-bold">
                {completedCount}/{totalLessons}
              </span>
            </div>
            <ProgressBar
              progress={completedCount}
              total={totalLessons}
              showLabel={false}
              color="secondary"
              className="mb-4"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <p className="text-sm text-white/80">Completadas</p>
                <p className="text-2xl font-bold">{completedCount}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Clock className="w-6 h-6" />
                </div>
                <p className="text-sm text-white/80">Restantes</p>
                <p className="text-2xl font-bold">{totalLessons - completedCount}</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Star className="w-6 h-6" />
                </div>
                <p className="text-sm text-white/80">XP Total</p>
                <p className="text-2xl font-bold">
                  {module.lessons.reduce((sum, l) => sum + l.xp, 0)}
                </p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Award className="w-6 h-6" />
                </div>
                <p className="text-sm text-white/80">Progreso</p>
                <p className="text-2xl font-bold">{Math.round(progressPercentage)}%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl" />
      </motion.div>

      {/* Lessons List */}
      <div>
        <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
          <BookOpen className="w-7 h-7 text-primary-600" />
          Lecciones del Módulo
        </h2>

        <div className="grid gap-4">
          {module.lessons.map((lesson, index) => {
            const isCompleted = isLessonCompleted(lesson.id)
            const isLocked = index > 0 && !isLessonCompleted(module.lessons[index - 1].id)

            return (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  onClick={() => {
                    if (!isLocked) {
                      navigate(`/module/${moduleId}/exercise/${lesson.id}`)
                    }
                  }}
                  hover={!isLocked}
                  className={`
                    ${isLocked ? 'opacity-50 cursor-not-allowed' : ''}
                    ${isCompleted ? 'border-2 border-green-400 bg-green-50/50' : ''}
                    relative overflow-hidden
                  `}
                >
                  <div className="flex items-center gap-6">
                    {/* Number/Status Icon */}
                    <div className="flex-shrink-0">
                      <motion.div
                        whileHover={!isLocked ? { scale: 1.1 } : {}}
                        className={`
                          w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold
                          ${isCompleted
                            ? 'bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg'
                            : isLocked
                            ? 'bg-slate-200 text-slate-400'
                            : `bg-gradient-to-br ${module.color} text-white shadow-lg`
                          }
                        `}
                      >
                        {isCompleted ? (
                          <CheckCircle className="w-8 h-8" />
                        ) : isLocked ? (
                          <Lock className="w-8 h-8" />
                        ) : (
                          index + 1
                        )}
                      </motion.div>
                    </div>

                    {/* Lesson Info */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-slate-800">
                          {lesson.title}
                        </h3>
                        {isCompleted && (
                          <Badge variant="success" icon={<Star className="w-3 h-3" />}>
                            +{lesson.xp} XP
                          </Badge>
                        )}
                      </div>

                      <div className="flex flex-wrap gap-2 mb-3">
                        <Badge
                          variant="default"
                          size="sm"
                          icon={<Clock className="w-3 h-3" />}
                        >
                          {lesson.duration}
                        </Badge>
                        {!isCompleted && !isLocked && (
                          <Badge variant="primary" size="sm">
                            +{lesson.xp} XP
                          </Badge>
                        )}
                      </div>

                      {/* Topics */}
                      <div className="space-y-1">
                        {lesson.topics.slice(0, 3).map((topic, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-sm text-slate-600"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                            {topic}
                          </div>
                        ))}
                        {lesson.topics.length > 3 && (
                          <p className="text-sm text-slate-400 ml-3.5">
                            +{lesson.topics.length - 3} temas más
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Action Button */}
                    {!isLocked && (
                      <div className="flex-shrink-0">
                        <Button
                          variant={isCompleted ? 'outline' : 'primary'}
                          icon={
                            isCompleted ? (
                              <CheckCircle className="w-5 h-5" />
                            ) : (
                              <PlayCircle className="w-5 h-5" />
                            )
                          }
                        >
                          {isCompleted ? 'Repasar' : 'Comenzar'}
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Completed overlay effect */}
                  {isCompleted && (
                    <motion.div
                      className="absolute top-0 right-0 w-32 h-32 bg-green-400/20 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    />
                  )}
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Completion Celebration */}
      {progressPercentage === 100 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-8 rounded-3xl bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center shadow-2xl"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="text-6xl mb-4"
          >
            🎉
          </motion.div>
          <h2 className="text-3xl font-bold mb-2">
            ¡Felicitaciones!
          </h2>
          <p className="text-xl text-white/90">
            Has completado el módulo de {module.name}
          </p>
        </motion.div>
      )}
    </div>
  )
}

export default ModulePage
