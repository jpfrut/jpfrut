export const voip = {
  id: 'voip',
  name: 'VoIP',
  icon: '☎️',
  color: 'from-accent-aqua-500 to-primary-600',
  category: 'productivity',
  priority: 9,
  description: 'Integración telefónica VoIP, llamadas y logging',
  estimatedTime: '3 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'voip-001',
      title: 'Phone Integration',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['VoIP setup', 'OnSIP', 'Axivox', 'SIP configuration', 'Extensions']
    },
    {
      id: 'voip-002',
      title: 'Call Logging',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Call history', 'Recording', 'Notes', 'CRM integration', 'Analytics']
    },
    {
      id: 'voip-003',
      title: 'Advanced Features',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['Call forwarding', 'IVR', 'Queues', 'Conference calls', 'Voicemail']
    }
  ]
}
