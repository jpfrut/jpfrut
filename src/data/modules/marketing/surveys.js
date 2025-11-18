export const surveys = {
  id: 'surveys',
  name: 'Encuestas',
  icon: '📋',
  color: 'from-accent-red-500 to-accent-pink-600',
  category: 'Marketing',
  priority: 5,
  description: 'Crea y analiza encuestas profesionales para feedback de clientes y research',
  estimatedTime: '4 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'survey-001',
      title: 'Crear Encuestas Efectivas',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Diseño de encuestas', 'Estructura y flujo', 'Preguntas claras', 'Tipos de surveys', 'Templates']
    },
    {
      id: 'survey-002',
      title: 'Tipos de Preguntas y Scoring',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Preguntas múltiple opción', 'Escalas y matrices', 'Preguntas abiertas', 'Lógica condicional', 'Sistema de scoring']
    },
    {
      id: 'survey-003',
      title: 'Distribución y Sesiones en Vivo',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Compartir encuestas', 'Email invitations', 'Links públicos', 'Sesiones live', 'Respuestas en tiempo real']
    },
    {
      id: 'survey-004',
      title: 'Análisis de Resultados',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Dashboard de resultados', 'Estadísticas', 'Visualizaciones', 'Exportar datos', 'Insights y acciones']
    }
  ]
}
