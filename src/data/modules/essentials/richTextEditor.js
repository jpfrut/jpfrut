export const richTextEditor = {
  id: 'rich-text-editor',
  name: 'Rich-text Editor',
  icon: '✏️',
  color: 'from-neutral-500 to-accent-pink-600',
  category: 'essentials',
  priority: 6,
  description: 'Editor de texto enriquecido, formato y contenido multimedia',
  estimatedTime: '2 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'editor-001',
      title: 'Formatting Options',
      duration: '45 min',
      xp: 75,
      difficulty: 'Básico',
      topics: ['Text formatting', 'Bold', 'Italic', 'Lists', 'Links', 'Tables', 'Colors']
    },
    {
      id: 'editor-002',
      title: 'Media y Advanced Features',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Images', 'Videos', 'Embed', 'Code blocks', 'Templates', 'Snippets']
    }
  ]
}
