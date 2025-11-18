export const dashboards = {
  id: 'dashboards',
  name: 'Dashboards',
  icon: '📈',
  color: 'from-accent-purple-500 to-accent-pink-600',
  category: 'Productivity',
  priority: 8,
  description: 'Dashboards personalizados, KPIs y visualización de datos en tiempo real',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'dash-001',
      title: 'Custom Dashboards',
      duration: '60 min',
      xp: 100,
      difficulty: 'Básico',
      topics: ['Create dashboards', 'Widgets', 'Layout', 'Customization', 'Sharing']
    },
    {
      id: 'dash-002',
      title: 'KPI Tracking',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Define KPIs', 'Targets', 'Thresholds', 'Alerts', 'Performance tracking']
    },
    {
      id: 'dash-003',
      title: 'Real-time Data',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Live updates', 'Auto-refresh', 'Data sources', 'Filters', 'Drill-down']
    },
    {
      id: 'dash-004',
      title: 'Dashboard Sharing',
      duration: '45 min',
      xp: 75,
      difficulty: 'Básico',
      topics: ['Share dashboards', 'Access rights', 'Public views', 'Export', 'Print']
    }
  ]
}
