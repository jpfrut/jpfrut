export const events = {
  id: 'events',
  name: 'Events',
  icon: '🎉',
  color: 'from-accent-purple-500 to-accent-pink-600',
  category: 'Marketing',
  priority: 4,
  description: 'Organiza eventos, vende tickets y gestiona asistentes de forma profesional',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'event-001',
      title: 'Crear y Configurar Eventos',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Tipos de eventos', 'Configuración básica', 'Fechas y ubicación', 'Capacidad']
    },
    {
      id: 'event-002',
      title: 'Venta de Tickets',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Tipos de tickets', 'Pricing', 'Early bird', 'Descuentos', 'Pasarelas de pago']
    },
    {
      id: 'event-003',
      title: 'Gestión de Registro y Asistentes',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Formularios de registro', 'Check-in', 'Badges', 'Comunicación con asistentes']
    },
    {
      id: 'event-004',
      title: 'App de Eventos y Experiencia del Asistente',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['App móvil', 'Agenda', 'Networking', 'Encuestas', 'Gamificación']
    },
    {
      id: 'event-005',
      title: 'Reportes y Analytics de Eventos',
      duration: '45 min',
      xp: 75,
      difficulty: 'Avanzado',
      topics: ['Métricas de venta', 'Asistencia', 'Revenue', 'ROI', 'Post-evento']
    }
  ]
}
