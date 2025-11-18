export const timesheets = {
  id: 'timesheets',
  name: 'Timesheets',
  icon: '⏱️',
  color: 'from-neutral-500 to-accent-aqua-600',
  category: 'Services',
  priority: 3,
  description: 'Gestiona hojas de tiempo, facturación por tiempo y análisis de productividad',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'time-001',
      title: 'Time Tracking Básico',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Captura de tiempo', 'Timer', 'Manual entry', 'Proyectos', 'Tareas']
    },
    {
      id: 'time-002',
      title: 'Billing Rates y Facturación',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Tasas de facturación', 'Por empleado', 'Por proyecto', 'Invoicing', 'Time & materials']
    },
    {
      id: 'time-003',
      title: 'Project Costing',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Costos de proyecto', 'Budget vs actual', 'Profitability', 'Forecasting']
    },
    {
      id: 'time-004',
      title: 'Productivity Analysis',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Análisis de productividad', 'Reportes', 'Utilization rates', 'Dashboards']
    },
    {
      id: 'time-005',
      title: 'Integración con Payroll y Projects',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Integración payroll', 'Project management', 'Approvals', 'Workflows']
    }
  ]
}
