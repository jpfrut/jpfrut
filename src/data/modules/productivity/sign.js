export const sign = {
  id: 'sign',
  name: 'Sign',
  icon: '✍️',
  color: 'from-primary-600 to-accent-green-600',
  category: 'productivity',
  priority: 6,
  description: 'Firma digital de documentos, workflows de aprobación y templates',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'sign-001',
      title: 'Document Signing',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Upload documents', 'Signers', 'Fields', 'Send for signature', 'Tracking']
    },
    {
      id: 'sign-002',
      title: 'Approval Workflows',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Sequential signing', 'Parallel', 'Conditional', 'Reminders', 'Deadlines']
    },
    {
      id: 'sign-003',
      title: 'Templates y Automation',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Signature templates', 'Pre-filled fields', 'Automated sending', 'Integration']
    }
  ]
}
