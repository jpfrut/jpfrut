export const quality = {
  id: 'quality',
  name: 'Quality',
  icon: '✅',
  color: 'from-accent-green-500 to-secondary-600',
  category: 'Supply Chain',
  priority: 5,
  description: 'Implementa controles de calidad, quality checks y gestión de no conformidades',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'quality-001',
      title: 'Quality Control Points',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Puntos de control', 'Configuración', 'Triggers', 'Frecuencia', 'Responsible teams']
    },
    {
      id: 'quality-002',
      title: 'Quality Checks',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Tipos de checks', 'Inspecciones', 'Mediciones', 'Pass/Fail criteria', 'Documentación']
    },
    {
      id: 'quality-003',
      title: 'Quality Alerts',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Crear alertas', 'Escalamiento', 'Asignación', 'Root cause analysis', 'Resolución']
    },
    {
      id: 'quality-004',
      title: 'Failure Tracking y CAPA',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['Failure modes', 'CAPA (Corrective/Preventive Actions)', 'Tracking', 'Analytics', 'Continuous improvement']
    }
  ]
}
