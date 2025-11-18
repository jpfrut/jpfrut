export const esgReporting = {
  id: 'esg-reporting',
  name: 'ESG Reporting',
  icon: '♻️',
  color: 'from-accent-green-500 to-accent-green-600',
  category: 'finance',
  priority: 6,
  description: 'Reportes ESG: métricas ambientales, sociales y de gobernanza',
  estimatedTime: '3 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'esg-001',
      title: 'Environmental Metrics',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Carbon footprint', 'Energy consumption', 'Water usage', 'Waste', 'Emissions tracking']
    },
    {
      id: 'esg-002',
      title: 'Social Governance',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Diversity metrics', 'Employee well-being', 'Community impact', 'Safety', 'Training']
    },
    {
      id: 'esg-003',
      title: 'Compliance Reporting',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['ESG frameworks', 'GRI', 'SASB', 'TCFD', 'Reporting standards', 'Disclosures']
    }
  ]
}
