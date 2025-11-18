export const maintenance = {
  id: 'maintenance',
  name: 'Maintenance',
  icon: '🔧',
  color: 'from-secondary-500 to-accent-purple-600',
  category: 'Supply Chain',
  priority: 6,
  description: 'Gestiona mantenimiento de equipos, preventivo y correctivo',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'maint-001',
      title: 'Equipment Management',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Equipment catalog', 'Categories', 'Locations', 'Teams', 'Technicians', 'Vendors']
    },
    {
      id: 'maint-002',
      title: 'Preventive Maintenance',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Scheduled maintenance', 'Recurring plans', 'Checklists', 'Calendars', 'Automation']
    },
    {
      id: 'maint-003',
      title: 'Maintenance Requests',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Create requests', 'Work orders', 'Assignment', 'Prioritization', 'Workflow', 'Approvals']
    },
    {
      id: 'maint-004',
      title: 'Analytics y Performance',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['MTBF', 'MTTR', 'Downtime', 'Cost tracking', 'KPIs', 'Reports', 'Dashboards']
    }
  ]
}
