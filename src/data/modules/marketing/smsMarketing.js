export const smsMarketing = {
  id: 'sms-marketing',
  name: 'SMS Marketing',
  icon: '📱',
  color: 'from-accent-red-500 to-accent-pink-600',
  category: 'Marketing',
  priority: 3,
  description: 'Campañas de SMS efectivas con Twilio para engagement directo con clientes',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'sms-001',
      title: 'Configuración de SMS y Twilio',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Integración Twilio', 'Configuración de cuenta', 'Números de teléfono', 'Créditos y costos', 'Configuración en Odoo']
    },
    {
      id: 'sms-002',
      title: 'Crear y Enviar Campañas SMS',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Diseño de mensajes SMS', 'Listas de destinatarios', 'Personalización', 'Envío programado', 'Mejores prácticas']
    },
    {
      id: 'sms-003',
      title: 'Analytics y Optimización SMS',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Métricas de entrega', 'Tasas de respuesta', 'ROI de SMS', 'A/B testing', 'Compliance y regulaciones']
    }
  ]
}
