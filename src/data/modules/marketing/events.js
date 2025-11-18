export const events = {
  id: 'events',
  name: 'Eventos',
  icon: '🎉',
  color: 'from-accent-red-500 to-accent-pink-600',
  category: 'Marketing',
  priority: 4,
  description: 'Gestión completa de eventos: creación, venta de tickets, registro y analytics',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'event-001',
      title: 'Crear y Configurar Eventos',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Tipos de eventos', 'Configuración básica', 'Fechas y ubicaciones', 'Capacidad y límites', 'Publicación']
    },
    {
      id: 'event-002',
      title: 'Venta de Tickets y Registro',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Tipos de tickets', 'Pricing y descuentos', 'Proceso de registro', 'Confirmaciones', 'Pagos online']
    },
    {
      id: 'event-003',
      title: 'Gestión de Asistentes',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Check-in de asistentes', 'Badge printing', 'Comunicación pre-evento', 'Gestión de listas', 'No-shows']
    },
    {
      id: 'event-004',
      title: 'Event App y Experiencia del Asistente',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Mobile app de eventos', 'Agenda y tracks', 'Networking features', 'Q&A y encuestas', 'Gamificación']
    },
    {
      id: 'event-005',
      title: 'Analytics y Post-Evento',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['Métricas de ventas', 'Attendance tracking', 'Revenue reporting', 'Follow-up campaigns', 'ROI de eventos']
    }
  ]
}
