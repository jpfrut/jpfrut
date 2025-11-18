export const studioPlatform = {
  id: 'studio-platform',
  name: 'Studio Platform',
  icon: '🎨',
  color: 'from-accent-pink-500 to-accent-red-600',
  category: 'studio',
  priority: 1,
  description: 'Personalización low-code: crea campos, vistas, modelos y automatizaciones sin programar',
  estimatedTime: '8 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'studio-001',
      title: 'Introducción a Odoo Studio',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Overview de Studio', 'Activación', 'Interface', 'Edit mode', 'Capabilities']
    },
    {
      id: 'studio-002',
      title: 'Field Creation',
      duration: '70 min',
      xp: 120,
      difficulty: 'Intermedio',
      topics: ['Field types', 'Char', 'Integer', 'Float', 'Date', 'Selection', 'Many2one', 'Properties']
    },
    {
      id: 'studio-003',
      title: 'View Customization',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Form views', 'List views', 'Kanban', 'Calendar', 'Pivot', 'Graph', 'Layout']
    },
    {
      id: 'studio-004',
      title: 'Model Creation',
      duration: '75 min',
      xp: 130,
      difficulty: 'Avanzado',
      topics: ['Create models', 'Tables', 'Relationships', 'Inheritance', 'Fields', 'Menu items']
    },
    {
      id: 'studio-005',
      title: 'Automation Rules',
      duration: '70 min',
      xp: 120,
      difficulty: 'Avanzado',
      topics: ['Automated actions', 'Triggers', 'Server actions', 'Python code', 'Email templates']
    },
    {
      id: 'studio-006',
      title: 'Report Builder',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Custom reports', 'Templates', 'Dynamic content', 'Logos', 'Formatting']
    },
    {
      id: 'studio-007',
      title: 'Approval Rules',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Approval workflows', 'Multi-level', 'Conditions', 'Notifications', 'Delegation']
    },
    {
      id: 'studio-008',
      title: 'Studio Best Practices',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Design patterns', 'Performance', 'Maintainability', 'Upgrades', 'Documentation']
    }
  ]
}
