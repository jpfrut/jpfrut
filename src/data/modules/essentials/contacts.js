export const contacts = {
  id: 'contacts',
  name: 'Contacts',
  icon: '👤',
  color: 'from-neutral-400 to-accent-aqua-600',
  category: 'essentials',
  priority: 7,
  description: 'Gestión de contactos, deduplicación y merge',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'contacts-001',
      title: 'Contact Management',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Contacts', 'Companies', 'Individuals', 'Tags', 'Categories', 'Addresses']
    },
    {
      id: 'contacts-002',
      title: 'Deduplication',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Find duplicates', 'Fuzzy matching', 'Review', 'Auto-detect', 'Rules']
    },
    {
      id: 'contacts-003',
      title: 'Merge Contacts',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Merge process', 'Data preservation', 'History', 'Relationships', 'Best practices']
    }
  ]
}
