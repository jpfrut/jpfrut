export const planning = {
  id: 'planning',
  name: 'Planning',
  icon: '📅',
  color: 'from-accent-purple-500 to-neutral-600',
  category: 'Services',
  priority: 5,
  description: 'Planifica recursos, turnos y forecasting de capacidad',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'plan-001',
      title: 'Resource Planning',
      duration: '60 min',
      xp: 100,
      difficulty: 'Básico',
      topics: ['Planificación de recursos', 'Roles', 'Asignaciones', 'Availability', 'Conflicts']
    },
    {
      id: 'plan-002',
      title: 'Shift Scheduling',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Turnos', 'Templates', 'Recurring shifts', 'Open shifts', 'Swap requests']
    },
    {
      id: 'plan-003',
      title: 'Forecasting y Capacity Planning',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Forecasting', 'Demand planning', 'Capacity', 'Scenarios', 'What-if analysis']
    },
    {
      id: 'plan-004',
      title: 'Gantt Views y Timeline',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Vista Gantt', 'Timeline', 'Dependencies', 'Drag & drop', 'Milestones']
    },
    {
      id: 'plan-005',
      title: 'Integración con Projects y HR',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Project integration', 'HR sync', 'Time off', 'Skills', 'Utilization reports']
    }
  ]
}
