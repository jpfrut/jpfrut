export const stages = {
  id: 'stages',
  name: 'Stages',
  icon: '📋',
  color: 'from-neutral-400 to-accent-purple-600',
  category: 'Odoo Essentials',
  priority: 4,
  description: 'Entiende y personaliza stages, workflows y vistas Kanban',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'stage-001',
      title: 'Workflow Stages',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Stage concept', 'Pipeline stages', 'Status fields', 'Kanban view', 'Drag & drop']
    },
    {
      id: 'stage-002',
      title: 'Kanban Views',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Kanban boards', 'Customize columns', 'Folding', 'Quick create', 'Filtering']
    },
    {
      id: 'stage-003',
      title: 'State Management',
      duration: '45 min',
      xp: 75,
      difficulty: 'Intermedio',
      topics: ['State transitions', 'Business logic', 'Automation', 'Approval flows', 'Custom stages']
    }
  ]
}
