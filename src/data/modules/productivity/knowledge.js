export const knowledge = {
  id: 'knowledge',
  name: 'Knowledge',
  icon: '📚',
  color: 'from-accent-purple-500 to-primary-600',
  category: 'Productivity',
  priority: 2,
  description: 'Crea una base de conocimiento colaborativa, wiki y documentación interna',
  estimatedTime: '5 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'know-001',
      title: 'Knowledge Base Setup',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Crear articles', 'Categories', 'Estructura', 'Rich editor', 'Formatting']
    },
    {
      id: 'know-002',
      title: 'Wiki y Documentación',
      duration: '60 min',
      xp: 100,
      difficulty: 'Básico',
      topics: ['Internal wiki', 'Documentation', 'Standard procedures', 'FAQs', 'Search']
    },
    {
      id: 'know-003',
      title: 'Colaboración y Versioning',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Collaborative editing', 'Version history', 'Comments', 'Suggestions', 'Approvals']
    },
    {
      id: 'know-004',
      title: 'Templates y Reutilización',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Article templates', 'Snippets', 'Macros', 'Content blocks', 'Best practices']
    },
    {
      id: 'know-005',
      title: 'Permisos y Access Control',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Access rights', 'Internal vs external', 'Groups', 'Visibility', 'Security']
    }
  ]
}
