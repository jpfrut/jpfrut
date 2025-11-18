export const smsMarketing = {
  id: 'sms-marketing',
  name: 'SMS Marketing',
  icon: '📱',
  color: 'from-accent-pink-500 to-accent-red-600',
  category: 'marketing',
  priority: 3,
  description: 'Crea campañas de SMS efectivas, llega a tus clientes por mensaje de texto',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'sms-001',
      title: 'Configuración de SMS y Twilio',
      duration: '40 min',
      xp: 70,
      difficulty: 'Básico',
      topics: ['Introducción a SMS Marketing', 'Configurar Twilio', 'Proveedores SMS', 'Configuración inicial']
    },
    {
      id: 'sms-002',
      title: 'Creación de Campañas SMS',
      duration: '45 min',
      xp: 75,
      difficulty: 'Intermedio',
      topics: ['Crear campañas', 'Personalización de mensajes', 'Timing óptimo', 'Mejores prácticas']
    },
    {
      id: 'sms-003',
      title: 'Analytics y Métricas de SMS',
      duration: '35 min',
      xp: 60,
      difficulty: 'Intermedio',
      topics: ['Tasas de entrega', 'Respuestas', 'ROI', 'Reportes', 'Optimización']
    }
  ]
}
