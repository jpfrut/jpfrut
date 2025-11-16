import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set, get) => ({
      // Estado del usuario
      user: {
        name: 'Estudiante',
        level: 1,
        xp: 0,
        totalXp: 0,
        streak: 0,
        badges: [],
      },

      // Progreso por módulo
      moduleProgress: {},

      // Ejercicios completados
      completedExercises: [],

      // Misiones completadas (incluye soporte para datos heredados)
      completedMissions: (() => {
        if (typeof window !== 'undefined') {
          const legacyMissions = localStorage.getItem('completedMissions')
          if (legacyMissions) {
            try {
              return JSON.parse(legacyMissions)
            } catch (error) {
              console.error('Error parsing legacy completed missions', error)
            }
          }
        }
        return []
      })(),

      // Agregar XP
      addXP: (amount) => {
        const { user } = get()
        const newTotalXP = user.totalXp + amount

        let newLevel = user.level
        let remainingXP = user.xp + amount

        while (remainingXP >= newLevel * 100) {
          remainingXP -= newLevel * 100
          newLevel += 1
        }

        set({
          user: {
            ...user,
            xp: remainingXP,
            totalXp: newTotalXP,
            level: newLevel,
          }
        })
      },

      // Completar ejercicio
      completeExercise: (moduleId, exerciseId, xpEarned) => {
        const { completedExercises, addXP, updateModuleProgress } = get()
        const exerciseKey = `${moduleId}-${exerciseId}`

        if (!completedExercises.includes(exerciseKey)) {
          set({
            completedExercises: [...completedExercises, exerciseKey]
          })
          addXP(xpEarned)
          updateModuleProgress(moduleId, exerciseId)
        }
      },

      completeMission: (missionId) => {
        const { completedMissions } = get()
        if (completedMissions.includes(missionId)) return

        const updatedMissions = [...completedMissions, missionId]
        set({ completedMissions: updatedMissions })

        if (typeof window !== 'undefined') {
          try {
            localStorage.setItem('completedMissions', JSON.stringify(updatedMissions))
          } catch (error) {
            console.error('Error saving completed missions', error)
          }
        }
      },

      // Actualizar progreso del módulo
      updateModuleProgress: (moduleId, exerciseId) => {
        const { moduleProgress } = get()
        const currentProgress = moduleProgress[moduleId] || {
          completedLessons: [],
          progress: 0,
        }

        if (!currentProgress.completedLessons.includes(exerciseId)) {
          const updatedLessons = [...currentProgress.completedLessons, exerciseId]

          set({
            moduleProgress: {
              ...moduleProgress,
              [moduleId]: {
                completedLessons: updatedLessons,
                progress: updatedLessons.length,
              }
            }
          })
        }
      },

      // Agregar badge
      addBadge: (badge) => {
        const { user } = get()
        if (!user.badges.find(b => b.id === badge.id)) {
          set({
            user: {
              ...user,
              badges: [...user.badges, { ...badge, earnedAt: new Date().toISOString() }]
            }
          })
        }
      },

      // Incrementar racha
      incrementStreak: () => {
        const { user } = get()
        set({
          user: {
            ...user,
            streak: user.streak + 1
          }
        })
      },

      // Resetear racha
      resetStreak: () => {
        const { user } = get()
        if (user.streak === 0) return

        set({
          user: {
            ...user,
            streak: 0
          }
        })
      },

      // Resetear todo
      reset: () => {
        set({
          user: {
            name: 'Estudiante',
            level: 1,
            xp: 0,
            totalXp: 0,
            streak: 0,
            badges: [],
          },
          moduleProgress: {},
          completedExercises: [],
          completedMissions: [],
        })

        if (typeof window !== 'undefined') {
          localStorage.removeItem('completedMissions')
        }
      },
    }),
    {
      name: 'odoo-learning-storage',
    }
  )
)

export default useStore
