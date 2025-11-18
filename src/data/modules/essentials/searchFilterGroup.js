export const searchFilterGroup = {
  id: 'search-filter-group',
  name: 'Search, Filter & Group',
  icon: '🔍',
  color: 'from-neutral-400 to-neutral-500',
  category: 'Odoo Essentials',
  priority: 1,
  description: 'Domina búsquedas avanzadas, filtros personalizados y agrupaciones en Odoo',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'search-001',
      title: 'Advanced Search',
      duration: '45 min',
      xp: 75,
      difficulty: 'Básico',
      topics: ['Search bar', 'Operators', 'Field search', 'Quick search', 'Wildcards']
    },
    {
      id: 'search-002',
      title: 'Custom Filters y Favorites',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Create filters', 'Domain syntax', 'Save favorites', 'Share filters', 'Default filters']
    },
    {
      id: 'search-003',
      title: 'Grouping y Advanced Views',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Group by', 'Multi-level grouping', 'List views', 'Kanban grouping', 'Pivot tables']
    }
  ]
}
