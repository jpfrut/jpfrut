export const emailConfiguration = {
  id: 'email-configuration',
  name: 'Email Configuration',
  icon: '📧',
  color: 'from-neutral-600 to-accent-aqua-600',
  category: 'Settings',
  priority: 4,
  description: 'Configuración de servidores de email, templates y automatización',
  estimatedTime: '3 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'email-conf-001',
      title: 'Email Servers',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['SMTP setup', 'IMAP', 'Gmail', 'Outlook', 'SPF', 'DKIM', 'DMARC']
    },
    {
      id: 'email-conf-002',
      title: 'Email Templates',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Template creation', 'Variables', 'QWeb', 'Placeholders', 'Styling']
    },
    {
      id: 'email-conf-003',
      title: 'Email Automation',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['Automated emails', 'Triggers', 'Scheduled emails', 'Campaigns', 'Tracking']
    }
  ]
}
