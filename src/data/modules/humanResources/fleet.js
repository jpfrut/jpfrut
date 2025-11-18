export const fleet = {
  id: 'fleet',
  name: 'Fleet',
  icon: '🚗',
  color: 'from-accent-aqua-500 to-accent-purple-600',
  category: 'humanResources',
  priority: 7,
  description: 'Gestiona vehículos de la empresa, mantenimiento, combustible y costos',
  estimatedTime: '4 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'fleet-001',
      title: 'Vehicle Management',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Vehicle catalog', 'Models', 'Drivers', 'Assignments', 'Categories', 'Tags']
    },
    {
      id: 'fleet-002',
      title: 'Maintenance Tracking',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Service schedules', 'Preventive maintenance', 'Repairs', 'Service providers', 'Reminders']
    },
    {
      id: 'fleet-003',
      title: 'Fuel Logs y Costos',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Fuel tracking', 'Odometer', 'Fuel efficiency', 'Cost tracking', 'Expenses']
    },
    {
      id: 'fleet-004',
      title: 'Cost Analysis y Reportes',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Fleet analytics', 'TCO', 'Depreciation', 'Contracts', 'Insurance', 'Reportes']
    }
  ]
}
