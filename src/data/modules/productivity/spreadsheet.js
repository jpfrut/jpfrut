export const spreadsheet = {
  id: 'spreadsheet',
  name: 'Spreadsheet',
  icon: '📊',
  color: 'from-accent-green-500 to-primary-600',
  category: 'Productivity',
  priority: 7,
  description: 'Análisis de datos con spreadsheets, pivot tables y fórmulas',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'sheet-001',
      title: 'Data Analysis',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Spreadsheet basics', 'Data import', 'Formatting', 'Filters', 'Sorting']
    },
    {
      id: 'sheet-002',
      title: 'Pivot Tables',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Create pivot tables', 'Dimensions', 'Measures', 'Grouping', 'Analysis']
    },
    {
      id: 'sheet-003',
      title: 'Charts y Visualization',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Chart types', 'Bar', 'Line', 'Pie', 'Scatter', 'Customization']
    },
    {
      id: 'sheet-004',
      title: 'Formulas y Functions',
      duration: '50 min',
      xp: 85,
      difficulty: 'Avanzado',
      topics: ['Common formulas', 'SUM', 'IF', 'VLOOKUP', 'Custom functions', 'References']
    }
  ]
}
