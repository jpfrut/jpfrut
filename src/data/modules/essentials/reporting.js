export const reporting = {
  id: 'reporting',
  name: 'Reporting',
  icon: '📊',
  color: 'from-neutral-500 to-primary-600',
  category: 'Odoo Essentials',
  priority: 2,
  description: 'Crea reportes personalizados, dashboards y visualizaciones de datos',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'report-001',
      title: 'Report Builder Básico',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Report types', 'PDF reports', 'Excel exports', 'Templates', 'Print']
    },
    {
      id: 'report-002',
      title: 'Custom Reports',
      duration: '70 min',
      xp: 120,
      difficulty: 'Intermedio',
      topics: ['QWeb templates', 'Dynamic data', 'Computed fields', 'Formatting', 'Logos']
    },
    {
      id: 'report-003',
      title: 'Data Visualization',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Charts', 'Graphs', 'Pivot tables', 'Cohort analysis', 'Dashboard widgets']
    },
    {
      id: 'report-004',
      title: 'Export Options',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Excel export', 'CSV', 'PDF', 'Scheduled exports', 'Automated reports']
    },
    {
      id: 'report-005',
      title: 'Dashboards Personalizados',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Custom dashboards', 'KPI tiles', 'Real-time data', 'Drill-down', 'Sharing']
    }
  ]
}
