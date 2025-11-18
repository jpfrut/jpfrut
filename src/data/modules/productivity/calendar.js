export const calendar = {
  id: 'calendar',
  name: 'Calendar',
  icon: '📅',
  color: 'from-accent-red-500 to-accent-pink-600',
  category: 'productivity',
  priority: 4,
  description: 'Gestiona eventos, sincroniza con Google/Outlook y coordina reuniones',
  estimatedTime: '4 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'cal-001',
      title: 'Event Management',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Crear eventos', 'Invitaciones', 'Reminders', 'Recurring events', 'All-day events']
    },
    {
      id: 'cal-002',
      title: 'Outlook y Google Calendar Sync',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Outlook sync', 'Google Calendar', 'Two-way sync', 'Calendars', 'Troubleshooting']
    },
    {
      id: 'cal-003',
      title: 'Meeting Scheduling',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Schedule meetings', 'Find time', 'Attendees', 'Resources', 'Room booking']
    },
    {
      id: 'cal-004',
      title: 'Múltiples Calendarios y Vistas',
      duration: '45 min',
      xp: 75,
      difficulty: 'Básico',
      topics: ['Multiple calendars', 'Color coding', 'Views', 'Filters', 'Team calendars']
    }
  ]
}
