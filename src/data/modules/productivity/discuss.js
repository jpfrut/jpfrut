export const discuss = {
  id: 'discuss',
  name: 'Discuss',
  icon: '💬',
  color: 'from-accent-aqua-500 to-accent-green-600',
  category: 'productivity',
  priority: 3,
  description: 'Chat interno, canales de equipo, mensajería directa y videollamadas',
  estimatedTime: '4 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'disc-001',
      title: 'Internal Chat y Channels',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Chat interno', 'Channels', 'Direct messages', 'Mentions', 'Notifications']
    },
    {
      id: 'disc-002',
      title: 'Channels Públicos y Privados',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Public channels', 'Private channels', 'Invitations', 'Moderation', 'Archiving']
    },
    {
      id: 'disc-003',
      title: 'Direct Messaging y Grupos',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['DMs', 'Group chats', 'Presence', 'Read receipts', 'File sharing']
    },
    {
      id: 'disc-004',
      title: 'Video Calls y Screen Sharing',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Video calls', 'Screen sharing', 'Group calls', 'Recording', 'Integration']
    }
  ]
}
