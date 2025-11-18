export const importExport = {
  id: 'import-export',
  name: 'Import/Export',
  icon: '📥',
  color: 'from-neutral-500 to-accent-green-600',
  category: 'essentials',
  priority: 5,
  description: 'Importa y exporta datos masivamente, templates y migraciones',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'import-001',
      title: 'Data Migration Basics',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Import wizard', 'CSV format', 'Excel', 'Field mapping', 'Validation']
    },
    {
      id: 'import-002',
      title: 'CSV y Excel Formats',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['File formats', 'Headers', 'Data types', 'Relationships', 'Many2one', 'Many2many']
    },
    {
      id: 'import-003',
      title: 'Import Templates',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Download templates', 'Custom templates', 'External IDs', 'Update records', 'Batch imports']
    },
    {
      id: 'import-004',
      title: 'Advanced Import y Error Handling',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Error resolution', 'Partial imports', 'Dry run', 'Validation rules', 'Best practices']
    }
  ]
}
