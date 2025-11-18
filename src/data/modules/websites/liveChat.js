export const liveChat = {
  id: 'live-chat',
  name: 'Live Chat',
  icon: '💬',
  color: 'from-accent-aqua-500 to-accent-pink-600',
  category: 'websites',
  priority: 3,
  description: 'Chat en vivo para website, chatbots y soporte en tiempo real',
  estimatedTime: '4 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'chat-001',
      title: 'Configuración de Live Chat',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Setup widget', 'Channels', 'Operators', 'Availability', 'Customization']
    },
    {
      id: 'chat-002',
      title: 'Chatbots y Automatización',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Chatbot scripts', 'Commands', 'Fallback', 'Handoff to humans', 'AI responses']
    },
    {
      id: 'chat-003',
      title: 'Ratings y Feedback',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Customer ratings', 'Feedback forms', 'Satisfaction', 'Quality control']
    },
    {
      id: 'chat-004',
      title: 'Reporting y Analytics',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Chat metrics', 'Response time', 'Resolution rate', 'Volume', 'Performance']
    }
  ]
}
