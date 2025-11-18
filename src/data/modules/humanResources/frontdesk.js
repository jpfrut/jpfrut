export const frontdesk = {
  id: 'frontdesk',
  name: 'Frontdesk',
  icon: '🏢',
  color: 'from-accent-aqua-500 to-accent-green-600',
  category: 'humanResources',
  priority: 10,
  description: 'Gestión de visitantes, badges y seguridad de recepción',
  estimatedTime: '2 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'front-001',
      title: 'Visitor Management',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Check-in', 'Registration', 'Host notification', 'Security', 'Logs']
    },
    {
      id: 'front-002',
      title: 'Badge Printing',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Visitor badges', 'Printing', 'Templates', 'QR codes', 'Access control']
    }
  ]
}
