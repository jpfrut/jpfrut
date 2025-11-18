export const propertyFields = {
  id: 'property-fields',
  name: 'Property Fields',
  icon: '🏷️',
  color: 'from-neutral-600 to-accent-green-600',
  category: 'essentials',
  priority: 9,
  description: 'Campos personalizados por registro, properties y metadatos',
  estimatedTime: '3 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'prop-001',
      title: 'Custom Fields',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Property fields', 'Per-record customization', 'Field types', 'Values']
    },
    {
      id: 'prop-002',
      title: 'Field Types',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Text', 'Number', 'Date', 'Selection', 'Tags', 'Many2one', 'Configuration']
    },
    {
      id: 'prop-003',
      title: 'Advanced Usage',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['Conditional properties', 'Filtering', 'Reporting', 'Search', 'Best practices']
    }
  ]
}
