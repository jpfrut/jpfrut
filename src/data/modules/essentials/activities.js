export const activities = {
  id: 'activities',
  name: 'Activities',
  icon: '📌',
  color: 'from-accent-aqua-500 to-neutral-600',
  category: 'Odoo Essentials',
  priority: 3,
  description: 'Gestiona actividades, seguimientos y recordatorios en Odoo',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'activ-001',
      title: 'Activity Types',
      duration: '45 min',
      xp: 75,
      difficulty: 'Básico',
      topics: ['Activity types', 'Emails', 'Calls', 'Meetings', 'To-dos', 'Custom types']
    },
    {
      id: 'activ-002',
      title: 'Scheduling y Reminders',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Schedule activities', 'Deadlines', 'Reminders', 'Overdue', 'Notifications']
    },
    {
      id: 'activ-003',
      title: 'Follow-ups y Automation',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Follow-up activities', 'Chaining', 'Automated activities', 'Templates', 'Workflows']
    }
  ]
}
