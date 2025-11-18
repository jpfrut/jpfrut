export const appraisals = {
  id: 'appraisals',
  name: 'Appraisals',
  icon: '⭐',
  color: 'from-accent-green-500 to-accent-purple-600',
  category: 'humanResources',
  priority: 6,
  description: 'Gestiona evaluaciones de desempeño, feedback 360° y desarrollo de carrera',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'appraisal-001',
      title: 'Performance Reviews',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Ciclos de evaluación', 'Templates', 'Criterios', 'Escala de calificación', 'Proceso']
    },
    {
      id: 'appraisal-002',
      title: '360-degree Feedback',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Feedback multi-fuente', 'Peers', 'Managers', 'Subordinados', 'Auto-evaluación']
    },
    {
      id: 'appraisal-003',
      title: 'Goal Tracking y OKRs',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Establecer goals', 'OKRs', 'KPIs', 'Seguimiento', 'Alineación estratégica']
    },
    {
      id: 'appraisal-004',
      title: 'Skills Management',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Matriz de competencias', 'Skills gap', 'Training needs', 'Certificaciones', 'Development plans']
    },
    {
      id: 'appraisal-005',
      title: 'Career Development',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Career paths', 'Succession planning', 'Promociones', 'Planes de desarrollo', 'Retención de talento']
    }
  ]
}
