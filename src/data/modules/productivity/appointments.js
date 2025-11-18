export const appointments = {
  id: 'appointments',
  name: 'Appointments',
  icon: '📆',
  color: 'from-accent-green-500 to-primary-600',
  category: 'Productivity',
  priority: 5,
  description: 'Sistema de reserva de citas, disponibilidad y booking online',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'appt-001',
      title: 'Booking System Setup',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Tipos de citas', 'Duración', 'Availability', 'Slots', 'Business hours']
    },
    {
      id: 'appt-002',
      title: 'Availability Management',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Working hours', 'Time off', 'Resources', 'Multiple staff', 'Buffer time']
    },
    {
      id: 'appt-003',
      title: 'CRM Integration y Follow-up',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Lead creation', 'Contact sync', 'Follow-up', 'Reminders', 'Analytics']
    }
  ]
}
