export const surveys = {
  id: 'surveys',
  name: 'Surveys',
  icon: '📋',
  color: 'from-accent-aqua-500 to-primary-600',
  category: 'Marketing',
  priority: 5,
  description: 'Crea encuestas profesionales, recopila feedback y analiza resultados',
  estimatedTime: '4 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'survey-001',
      title: 'Crear Encuestas Efectivas',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Tipos de encuestas', 'Diseño de preguntas', 'Lógica de flujo', 'Mejores prácticas']
    },
    {
      id: 'survey-002',
      title: 'Tipos de Preguntas y Scoring',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Multiple choice', 'Escalas', 'Texto libre', 'Matriz', 'Scoring', 'Certificaciones']
    },
    {
      id: 'survey-003',
      title: 'Sesiones en Vivo y Certificaciones',
      duration: '45 min',
      xp: 75,
      difficulty: 'Intermedio',
      topics: ['Live sessions', 'Time limits', 'Intentos', 'Certificados', 'Gamificación']
    },
    {
      id: 'survey-004',
      title: 'Análisis de Resultados',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Reportes', 'Estadísticas', 'Visualización', 'Export', 'Insights']
    }
  ]
}
