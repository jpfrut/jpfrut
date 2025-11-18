export const plm = {
  id: 'plm',
  name: 'Product Lifecycle Management',
  icon: '🔬',
  color: 'from-secondary-600 to-accent-purple-600',
  category: 'supplyChain',
  priority: 8,
  description: 'Gestión del ciclo de vida de productos, ECOs y control de versiones',
  estimatedTime: '4 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'plm-001',
      title: 'Engineering Change Orders (ECO)',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['ECO process', 'Change requests', 'Approvals', 'Implementation', 'Tracking']
    },
    {
      id: 'plm-002',
      title: 'Version Control',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Product versions', 'BoM versioning', 'Lifecycle stages', 'Obsolescence']
    },
    {
      id: 'plm-003',
      title: 'Product Development',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['NPD process', 'Prototyping', 'Testing', 'Documentation', 'Launch']
    },
    {
      id: 'plm-004',
      title: 'Collaboration y Documentation',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Technical docs', 'CAD integration', 'Team collaboration', 'History']
    }
  ]
}
