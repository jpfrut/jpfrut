import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  CheckSquare, Square, Star, Trophy,
  Clock
} from 'lucide-react'
import { Card, Badge } from '../components/ui'
import useStore from '../store/useStore'

const variantStyles = {
  neutral: {
    card: 'surface-card border border-card text-primary-900',
    iconAction: 'text-primary-600',
    iconCta: 'text-secondary-500',
    subtle: 'tint-neutral-soft text-primary-900'
  }
}

const LAST_COMPLETED_KEY = 'checklistLastCompletedDate'

const DAILY_TASKS = [
  {
    id: 'check-pending',
    title: 'Revisar facturas pendientes',
    description: 'Ver si hay pagos por cobrar',
    xp: 10,
    time: '2 min',
    category: 'money'
  },
  {
    id: 'check-balance',
    title: 'Ver saldo bancario',
    description: 'Saber cuánto dinero tienes disponible',
    xp: 10,
    time: '1 min',
    category: 'money'
  },
  {
    id: 'check-messages',
    title: 'Revisar notificaciones',
    description: 'Ver recordatorios y mensajes importantes',
    xp: 10,
    time: '2 min',
    category: 'organization'
  },
  {
    id: 'log-expense',
    title: 'Registrar gastos del día',
    description: 'Guardar facturas y recibos de hoy',
    xp: 15,
    time: '5 min',
    category: 'accounting'
  },
  {
    id: 'update-tasks',
    title: 'Actualizar tareas pendientes',
    description: 'Marcar lo que completaste hoy',
    xp: 10,
    time: '3 min',
    category: 'organization'
  }
]

function DailyChecklist({ variant = 'neutral' }) {
  const theme = variantStyles[variant] || variantStyles.neutral
  const { addXP, user, incrementStreak, resetStreak } = useStore()
  const [checklist, setChecklist] = useState([])

  // Cargar estado guardado
  useEffect(() => {
    const savedChecklist = localStorage.getItem('dailyChecklist')
    const savedDate = localStorage.getItem('checklistDate')
    const lastCompletedDate = localStorage.getItem(LAST_COMPLETED_KEY)

    const today = new Date().toDateString()

    if (savedDate !== today) {
      // Nuevo día, resetear checklist
      const newChecklist = DAILY_TASKS.map(task => ({
        ...task,
        completed: false
      }))
      setChecklist(newChecklist)
      localStorage.setItem('dailyChecklist', JSON.stringify(newChecklist))
      localStorage.setItem('checklistDate', today)

      const yesterday = new Date()
      yesterday.setDate(yesterday.getDate() - 1)
      const yesterdayString = yesterday.toDateString()

      if (lastCompletedDate === yesterdayString) {
        incrementStreak()
      } else {
        resetStreak()
      }
    } else if (savedChecklist) {
      // Mismo día, cargar estado guardado
      setChecklist(JSON.parse(savedChecklist))
    } else {
      const newChecklist = DAILY_TASKS.map(task => ({
        ...task,
        completed: false
      }))
      setChecklist(newChecklist)
    }
  }, [incrementStreak, resetStreak])

  const toggleTask = (taskId) => {
    const updatedChecklist = checklist.map(task => {
      if (task.id === taskId && !task.completed) {
        addXP(task.xp)
        return { ...task, completed: true }
      }
      return task
    })

    setChecklist(updatedChecklist)
    localStorage.setItem('dailyChecklist', JSON.stringify(updatedChecklist))

    // Verificar si completó todo
    const allCompleted = updatedChecklist.every(task => task.completed)
    if (allCompleted) {
      localStorage.setItem(LAST_COMPLETED_KEY, new Date().toDateString())
      addXP(50) // Bonus por completar todo
    }
  }

  const completedCount = checklist.filter(task => task.completed).length
  const totalTasks = checklist.length
  const completionPercentage = totalTasks > 0 ? (completedCount / totalTasks) * 100 : 0

  const getTotalXP = () => {
    return checklist.reduce((total, task) => {
      return total + (task.completed ? task.xp : 0)
    }, 0)
  }

  const getTotalTime = () => {
    return checklist.reduce((total, task) => {
      const minutes = parseInt(task.time)
      return total + (task.completed ? 0 : minutes)
    }, 0)
  }

  return (
    <Card className={`p-6 ${theme.card}`}>
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-primary-900 flex items-center">
          <CheckSquare className={`w-5 h-5 mr-2 ${theme.iconAction}`} />
          Mi Checklist del Día
        </h3>
        <div className="flex items-center space-x-2">
          {user.streak > 0 && (
            <Badge variant="warning" size="sm">
              <Trophy className="w-3 h-3 mr-1" />
              {user.streak} días seguidos
            </Badge>
          )}
          <Badge variant="primary" size="sm">
            {completedCount}/{totalTasks}
          </Badge>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-primary-700 mb-1">
          <span>Progreso de hoy</span>
          <span>{Math.round(completionPercentage)}%</span>
        </div>
        <div className="h-3 tint-neutral-soft rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            className={`h-full rounded-full ${
              completionPercentage === 100
                ? 'surface-cta'
                : 'surface-hero'
            }`}
          />
        </div>
      </div>

      {/* Lista de tareas */}
      <div className="space-y-3 mb-4">
        {checklist.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <button
              onClick={() => toggleTask(task.id)}
              disabled={task.completed}
              className={`w-full text-left p-3 rounded-lg border transition-all ${
                task.completed
                  ? 'tint-success-soft border-transparent'
                  : `surface-card border-card hover:tint-primary-soft`
              }`}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  {task.completed ? (
                    <CheckSquare className={`w-5 h-5 ${theme.iconCta}`} />
                  ) : (
                    <Square className="w-5 h-5 text-primary-200" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${
                    task.completed ? 'text-primary-700 line-through' : 'text-primary-900'
                  }`}>
                    {task.title}
                  </p>
                  <p className="text-sm text-primary-700">
                    {task.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-medium ${theme.iconAction}`}>
                    +{task.xp} XP
                  </p>
                  <p className="text-xs text-primary-500">{task.time}</p>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="tint-warning-soft p-3 rounded-lg text-center">
          <Star className={`w-5 h-5 mx-auto mb-1 ${theme.iconCta}`} />
          <p className="text-lg font-bold text-primary-900">{getTotalXP()}</p>
          <p className="text-xs text-primary-700">XP ganados hoy</p>
        </div>
        <div className="tint-primary-soft p-3 rounded-lg text-center">
          <Clock className={`w-5 h-5 mx-auto mb-1 ${theme.iconAction}`} />
          <p className="text-lg font-bold text-primary-900">{getTotalTime()} min</p>
          <p className="text-xs text-primary-700">Tiempo restante</p>
        </div>
      </div>

      {/* Mensaje motivacional */}
      {completionPercentage === 100 ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="tint-success-soft p-4 rounded-lg text-center"
        >
          <Trophy className={`w-8 h-8 mx-auto mb-2 ${theme.iconCta}`} />
          <p className="font-semibold text-primary-900">
            ¡Excelente! Completaste todo hoy
          </p>
          <p className="text-sm text-primary-900">
            +50 XP bonus por completar todas las tareas
          </p>
        </motion.div>
      ) : completedCount === 0 ? (
        <div className="tint-primary-soft p-4 rounded-lg text-center">
          <p className="text-primary-900 text-sm">
            💪 Comienza con una tarea pequeña. Cada paso cuenta.
          </p>
        </div>
      ) : (
        <div className="tint-warning-soft p-4 rounded-lg text-center">
          <p className="text-primary-900 text-sm">
            🎯 ¡Vas muy bien! Te faltan {totalTasks - completedCount} tareas para completar el día.
          </p>
        </div>
      )}
    </Card>
  )
}

export default DailyChecklist
