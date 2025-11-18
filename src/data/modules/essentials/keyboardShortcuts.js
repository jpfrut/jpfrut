export const keyboardShortcuts = {
  id: 'keyboard-shortcuts',
  name: 'Keyboard Shortcuts',
  icon: '⌨️',
  color: 'from-neutral-500 to-accent-purple-600',
  category: 'essentials',
  priority: 8,
  description: 'Atajos de teclado para productividad y navegación rápida',
  estimatedTime: '2 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'keys-001',
      title: 'Productivity Shortcuts',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Common shortcuts', 'Save', 'Create', 'Edit', 'Delete', 'Search', 'Navigation']
    },
    {
      id: 'keys-002',
      title: 'Advanced Navigation',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Command palette', 'Quick access', 'Switching apps', 'Forms', 'Lists', 'Custom shortcuts']
    }
  ]
}
