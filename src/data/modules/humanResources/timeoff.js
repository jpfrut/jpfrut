export const timeoff = {
  id: 'timeoff',
  name: 'Ausencias',
  icon: '🏖️',
  color: 'from-accent-aqua-500 to-accent-green-600',
  category: 'Human Resources',
  priority: 2,
  description: 'Gestión de vacaciones, permisos y ausencias',
  estimatedTime: '2 horas',
  difficulty: 'Básico',
  lessons: [
    { id: 'to-001', title: 'Tipos de Ausencias', duration: '25 min', xp: 45, topics: ['Configurar tipos', 'Políticas', 'Acumulación', 'Límites'] },
    { id: 'to-002', title: 'Solicitar y Aprobar', duration: '30 min', xp: 55, topics: ['Solicitudes', 'Aprobaciones', 'Calendario', 'Balance'] },
    { id: 'to-003', title: 'Reportes y Análisis', duration: '25 min', xp: 45, topics: ['Dashboard', 'Estadísticas', 'Planificación', 'Alertas'] }
  ]
}
