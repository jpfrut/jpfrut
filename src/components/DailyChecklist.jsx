import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  CheckSquare, Square, Calendar, Star, Trophy,
  RefreshCw, Clock
} from 'lucide-react'
import { Card, Badge, Button } from '../components/ui'
import useStore from '../store/useStore'

function DailyChecklist() {
  const { addXP, user } = useStore()
  const [checklist, setChecklist] = useState([])
  const [lastResetDate, setLastResetDate] = useState('')
  const [streak, setStreak] = useState(0)

  // Tareas diarias recomendadas
  const dailyTasks = [
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

  // Cargar estado guardado
  useEffect(() => {
    const savedChecklist = localStorage.getItem('dailyChecklist')
    const savedDate = localStorage.getItem('checklistDate')
    const savedStreak = localStorage.getItem('checklistStreak')

    const today = new Date().toDateString()

    if (savedDate !== today) {
      // Nuevo día, resetear checklist
      const newChecklist = dailyTasks.map(task => ({
        ...task,
        completed: false
      }))
      setChecklist(newChecklist)
      setLastResetDate(today)
      localStorage.setItem('dailyChecklist', JSON.stringify(newChecklist))
      localStorage.setItem('checklistDate', today)

      // Verificar si ayer completó todo para mantener racha
      if (savedChecklist && savedDate) {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        const yesterdayString = yesterday.toDateString()

        if (savedDate === yesterdayString) {
          const oldChecklist = JSON.parse(savedChecklist)
          const allCompleted = oldChecklist.every(task => task.completed)
          if (allCompleted) {
            const newStreak = (parseInt(savedStreak) || 0) + 1
            setStreak(newStreak)
            localStorage.setItem('checklistStreak', newStreak.toString())
          } else {
            setStreak(0)
            localStorage.setItem('checklistStreak', '0')
          }
        }
      }
    } else {
      // Mismo día, cargar estado guardado
      if (savedChecklist) {
        setChecklist(JSON.parse(savedChecklist))
      } else {
        const newChecklist = dailyTasks.map(task => ({
          ...task,
          completed: false
        }))
        setChecklist(newChecklist)
      }
      setLastResetDate(today)
      setStreak(parseInt(savedStreak) || 0)
    }
  }, [])

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
    <Card className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800 flex items-center">
          <CheckSquare className="w-5 h-5 mr-2 text-primary-600" />
          Mi Checklist del Día
        </h3>
        <div className="flex items-center space-x-2">
          {streak > 0 && (
            <Badge variant="warning" size="sm">
              <Trophy className="w-3 h-3 mr-1" />
              {streak} días seguidos
            </Badge>
          )}
          <Badge variant="primary" size="sm">
            {completedCount}/{totalTasks}
          </Badge>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-1">
          <span>Progreso de hoy</span>
          <span>{Math.round(completionPercentage)}%</span>
        </div>
        <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${completionPercentage}%` }}
            className={`h-full rounded-full ${
              completionPercentage === 100
                ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                : 'bg-gradient-to-r from-primary-500 to-secondary-500'
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
                  ? 'bg-green-50 border-green-200'
                  : 'bg-white border-gray-200 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              <div className="flex items-start">
                <div className="mr-3 mt-1">
                  {task.completed ? (
                    <CheckSquare className="w-5 h-5 text-green-500" />
                  ) : (
                    <Square className="w-5 h-5 text-gray-400" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`font-medium ${
                    task.completed ? 'text-green-700 line-through' : 'text-gray-800'
                  }`}>
                    {task.title}
                  </p>
                  <p className={`text-sm ${
                    task.completed ? 'text-green-600' : 'text-gray-500'
                  }`}>
                    {task.description}
                  </p>
                </div>
                <div className="text-right">
                  <p className={`text-xs font-medium ${
                    task.completed ? 'text-green-600' : 'text-primary-600'
                  }`}>
                    +{task.xp} XP
                  </p>
                  <p className="text-xs text-gray-400">{task.time}</p>
                </div>
              </div>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Resumen */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-yellow-50 p-3 rounded-lg text-center">
          <Star className="w-5 h-5 text-yellow-500 mx-auto mb-1" />
          <p className="text-lg font-bold text-yellow-700">{getTotalXP()}</p>
          <p className="text-xs text-yellow-600">XP ganados hoy</p>
        </div>
        <div className="bg-blue-50 p-3 rounded-lg text-center">
          <Clock className="w-5 h-5 text-blue-500 mx-auto mb-1" />
          <p className="text-lg font-bold text-blue-700">{getTotalTime()} min</p>
          <p className="text-xs text-blue-600">Tiempo restante</p>
        </div>
      </div>

      {/* Mensaje motivacional */}
      {completionPercentage === 100 ? (
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg text-center"
        >
          <Trophy className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
          <p className="font-semibold text-green-800">
            ¡Excelente! Completaste todo hoy
          </p>
          <p className="text-sm text-green-600">
            +50 XP bonus por completar todas las tareas
          </p>
        </motion.div>
      ) : completedCount === 0 ? (
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-blue-700 text-sm">
            💪 Comienza con una tarea pequeña. Cada paso cuenta.
          </p>
        </div>
      ) : (
        <div className="bg-orange-50 p-4 rounded-lg text-center">
          <p className="text-orange-700 text-sm">
            🎯 ¡Vas muy bien! Te faltan {totalTasks - completedCount} tareas para completar el día.
          </p>
        </div>
      )}
    </Card>
  )
}

export default DailyChecklist
