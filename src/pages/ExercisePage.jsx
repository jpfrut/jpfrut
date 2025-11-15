import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  XCircle,
  Lightbulb,
  BookOpen,
  Trophy,
  Star,
  Sparkles,
  Target
} from 'lucide-react'
import { getModuleById, getLessonById } from '../data/modules'
import { getLessonContent, hasLessonContent } from '../data/lessonContent'
import useStore from '../store/useStore'
import { Button, Card, Badge, Modal } from '../components/ui'

const ExercisePage = () => {
  const { moduleId, exerciseId } = useParams()
  const navigate = useNavigate()
  const { completeExercise, completedExercises } = useStore()

  const module = getModuleById(moduleId)
  const lesson = getLessonById(moduleId, exerciseId)
  const content = getLessonContent(exerciseId)

  const [currentSection, setCurrentSection] = useState(0)
  const [showQuiz, setShowQuiz] = useState(false)
  const [quizAnswers, setQuizAnswers] = useState({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  const [practicalAnswers, setPracticalAnswers] = useState({})
  const [practicalSubmitted, setPracticalSubmitted] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)

  const isCompleted = completedExercises.includes(`${moduleId}-${exerciseId}`)

  if (!module || !lesson) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Lección no encontrada
          </h2>
          <Button onClick={() => navigate('/')}>Volver al Dashboard</Button>
        </div>
      </div>
    )
  }

  // Si no hay contenido detallado, mostrar mensaje
  if (!hasLessonContent(exerciseId)) {
    return (
      <div className="space-y-6 pb-12">
        <Button
          variant="ghost"
          icon={<ArrowLeft className="w-5 h-5" />}
          onClick={() => navigate(`/module/${moduleId}`)}
        >
          Volver al Módulo
        </Button>

        <Card className="text-center py-12">
          <div className="text-6xl mb-4">🚧</div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Contenido en Desarrollo
          </h2>
          <p className="text-slate-600 mb-6">
            El contenido detallado para esta lección estará disponible próximamente.
          </p>
          <div className="space-y-2 mb-6 max-w-md mx-auto">
            <h3 className="font-semibold text-slate-700">Temas que cubrirá:</h3>
            {lesson.topics.map((topic, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-slate-600">
                <div className="w-2 h-2 rounded-full bg-primary-400" />
                {topic}
              </div>
            ))}
          </div>
          <Button
            variant="primary"
            onClick={() => {
              completeExercise(moduleId, exerciseId, lesson.xp)
              setShowCelebration(true)
              setTimeout(() => {
                navigate(`/module/${moduleId}`)
              }, 3000)
            }}
          >
            Marcar como Completada
          </Button>
        </Card>
      </div>
    )
  }

  const handleQuizSubmit = () => {
    setQuizSubmitted(true)
    const allCorrect = content.quiz.questions.every(
      (q) => quizAnswers[q.id] === q.correct
    )

    if (allCorrect && !isCompleted) {
      setTimeout(() => {
        completeExercise(moduleId, exerciseId, lesson.xp)
        setShowCelebration(true)
      }, 1500)
    }
  }

  const handlePracticalSubmit = () => {
    setPracticalSubmitted(true)
  }

  const getQuizScore = () => {
    if (!quizSubmitted) return 0
    const correct = content.quiz.questions.filter(
      (q) => quizAnswers[q.id] === q.correct
    ).length
    return Math.round((correct / content.quiz.questions.length) * 100)
  }

  return (
    <div className="space-y-6 pb-12">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          icon={<ArrowLeft className="w-5 h-5" />}
          onClick={() => navigate(`/module/${moduleId}`)}
        >
          Volver al Módulo
        </Button>
        <div className="flex items-center gap-2">
          <Badge variant="primary" icon={<Star className="w-4 h-4" />}>
            {lesson.xp} XP
          </Badge>
          {isCompleted && (
            <Badge variant="success" icon={<CheckCircle className="w-4 h-4" />}>
              Completada
            </Badge>
          )}
        </div>
      </div>

      {/* Lesson Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`rounded-3xl bg-gradient-to-br ${module.color} p-8 text-white shadow-2xl`}
      >
        <div className="flex items-start gap-4 mb-4">
          <div className="text-5xl">{module.icon}</div>
          <div className="flex-1">
            <p className="text-sm text-white/80 mb-1">{module.name}</p>
            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {content.title}
            </h1>
            <div className="flex flex-wrap gap-2">
              <Badge
                className="bg-white/20 text-white backdrop-blur-sm border border-white/30"
                icon={<BookOpen className="w-3 h-3" />}
              >
                {lesson.duration}
              </Badge>
              <Badge
                className="bg-white/20 text-white backdrop-blur-sm border border-white/30"
                icon={<Target className="w-3 h-3" />}
              >
                {content.sections.length} secciones
              </Badge>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Introduction */}
      <Card>
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-slate-800 mb-3">Introducción</h2>
            <p className="text-slate-600 leading-relaxed whitespace-pre-line">
              {content.introduction}
            </p>
          </div>
        </div>
      </Card>

      {/* Sections */}
      {content.sections.map((section, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <Card>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-800 mb-3">
                    {section.title}
                  </h3>
                  <div className="prose prose-slate max-w-none">
                    <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                      {section.content}
                    </p>
                  </div>
                </div>
              </div>

              {/* Example */}
              {section.example && (
                <div className="ml-14 p-4 bg-slate-50 rounded-xl border-l-4 border-primary-500">
                  <div className="flex items-center gap-2 mb-2">
                    <Lightbulb className="w-5 h-5 text-primary-600" />
                    <span className="font-semibold text-slate-800">Ejemplo Práctico</span>
                  </div>
                  <pre className="text-sm text-slate-700 whitespace-pre-wrap font-mono bg-white p-4 rounded-lg overflow-x-auto">
                    {section.example}
                  </pre>
                </div>
              )}

              {/* Tips */}
              {section.tips && section.tips.length > 0 && (
                <div className="ml-14 p-4 bg-amber-50 rounded-xl border-l-4 border-amber-500">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-5 h-5 text-amber-600" />
                    <span className="font-semibold text-slate-800">Consejos Importantes</span>
                  </div>
                  <ul className="space-y-2">
                    {section.tips.map((tip, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <span className="text-amber-500 mt-0.5">💡</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </Card>
        </motion.div>
      ))}

      {/* Quiz Section */}
      {content.quiz && (
        <Card>
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800">Quiz de Conocimientos</h3>
                  <p className="text-sm text-slate-600">Demuestra lo que has aprendido</p>
                </div>
              </div>
              {quizSubmitted && (
                <Badge
                  variant={getQuizScore() === 100 ? 'success' : 'warning'}
                  size="lg"
                >
                  {getQuizScore()}%
                </Badge>
              )}
            </div>

            <div className="space-y-4">
              {content.quiz.questions.map((question, qIndex) => (
                <div
                  key={question.id}
                  className={`p-4 rounded-xl border-2 ${
                    quizSubmitted
                      ? quizAnswers[question.id] === question.correct
                        ? 'border-green-500 bg-green-50'
                        : 'border-red-500 bg-red-50'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <p className="font-semibold text-slate-800 mb-3">
                    {qIndex + 1}. {question.question}
                  </p>

                  <div className="space-y-2">
                    {question.options.map((option, oIndex) => (
                      <label
                        key={oIndex}
                        className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-all ${
                          quizAnswers[question.id] === oIndex
                            ? 'bg-primary-100 border-2 border-primary-500'
                            : 'bg-slate-50 hover:bg-slate-100 border-2 border-transparent'
                        } ${quizSubmitted ? 'cursor-not-allowed' : ''}`}
                      >
                        <input
                          type="radio"
                          name={question.id}
                          value={oIndex}
                          checked={quizAnswers[question.id] === oIndex}
                          onChange={() =>
                            !quizSubmitted &&
                            setQuizAnswers({ ...quizAnswers, [question.id]: oIndex })
                          }
                          disabled={quizSubmitted}
                          className="w-4 h-4"
                        />
                        <span className="text-slate-700">{option}</span>
                        {quizSubmitted && oIndex === question.correct && (
                          <CheckCircle className="w-5 h-5 text-green-600 ml-auto" />
                        )}
                        {quizSubmitted &&
                          quizAnswers[question.id] === oIndex &&
                          oIndex !== question.correct && (
                            <XCircle className="w-5 h-5 text-red-600 ml-auto" />
                          )}
                      </label>
                    ))}
                  </div>

                  {quizSubmitted && (
                    <div className="mt-3 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                      <p className="text-sm text-slate-700">
                        <strong>Explicación:</strong> {question.explanation}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {!quizSubmitted ? (
              <Button
                variant="primary"
                size="lg"
                onClick={handleQuizSubmit}
                disabled={
                  Object.keys(quizAnswers).length !== content.quiz.questions.length
                }
                className="w-full"
              >
                Enviar Respuestas
              </Button>
            ) : getQuizScore() === 100 ? (
              <div className="text-center p-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl text-white">
                <div className="text-5xl mb-3">🎉</div>
                <h3 className="text-2xl font-bold mb-2">¡Perfecto!</h3>
                <p>Has respondido todas las preguntas correctamente</p>
              </div>
            ) : (
              <div className="text-center p-6 bg-gradient-to-r from-orange-500 to-yellow-600 rounded-xl text-white">
                <div className="text-5xl mb-3">📚</div>
                <h3 className="text-2xl font-bold mb-2">¡Buen intento!</h3>
                <p>Repasa el contenido y vuelve a intentarlo</p>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setQuizAnswers({})
                    setQuizSubmitted(false)
                  }}
                  className="mt-4"
                >
                  Reintentar Quiz
                </Button>
              </div>
            )}
          </Card>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between pt-6">
        <Button
          variant="outline"
          icon={<ArrowLeft className="w-5 h-5" />}
          onClick={() => navigate(`/module/${moduleId}`)}
        >
          Volver al Módulo
        </Button>

        {quizSubmitted && getQuizScore() === 100 && !isCompleted && (
          <Button
            variant="success"
            size="lg"
            icon={<CheckCircle className="w-5 h-5" />}
            onClick={() => {
              completeExercise(moduleId, exerciseId, lesson.xp)
              setShowCelebration(true)
            }}
          >
            Completar Lección (+{lesson.xp} XP)
          </Button>
        )}
      </div>

      {/* Celebration Modal */}
      <Modal
        isOpen={showCelebration}
        onClose={() => {
          setShowCelebration(false)
          navigate(`/module/${moduleId}`)
        }}
        title="¡Felicitaciones!"
        size="md"
      >
        <div className="text-center py-8">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: 3,
            }}
            className="text-8xl mb-6"
          >
            🏆
          </motion.div>
          <h2 className="text-3xl font-bold text-slate-800 mb-4">
            ¡Lección Completada!
          </h2>
          <p className="text-xl text-slate-600 mb-6">
            Has ganado <strong className="text-primary-600">{lesson.xp} XP</strong>
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" onClick={() => navigate(`/module/${moduleId}`)}>
              Volver al Módulo
            </Button>
            <Button variant="primary" onClick={() => navigate('/')}>
              Ir al Dashboard
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ExercisePage
