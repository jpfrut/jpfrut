export const whatsapp = {
  id: 'whatsapp',
  name: 'WhatsApp',
  icon: '💚',
  color: 'from-accent-green-500 to-accent-green-600',
  category: 'Productivity',
  priority: 10,
  description: 'Integración con WhatsApp Business, mensajes template y automatización',
  estimatedTime: '3 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'wa-001',
      title: 'WhatsApp Business Setup',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['WhatsApp Business API', 'Configuration', 'Phone numbers', 'Verification']
    },
    {
      id: 'wa-002',
      title: 'Template Messages',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Message templates', 'Approval', 'Variables', 'Media', 'Best practices']
    },
    {
      id: 'wa-003',
      title: 'Automation y CRM',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Automated messages', 'Chatbots', 'CRM integration', 'Lead capture', 'Analytics']
    }
  ]
}
