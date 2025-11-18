export const attendances = {
  id: 'attendances',
  name: 'Attendances',
  icon: '⏰',
  color: 'from-accent-aqua-500 to-primary-600',
  category: 'humanResources',
  priority: 4,
  description: 'Controla asistencias, check-in/check-out, horas extras y genera reportes precisos',
  estimatedTime: '4 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'attend-001',
      title: 'Configuración de Asistencias',
      duration: '45 min',
      xp: 75,
      difficulty: 'Básico',
      topics: ['Setup inicial', 'Políticas de asistencia', 'Horarios', 'Turnos', 'Configuración']
    },
    {
      id: 'attend-002',
      title: 'Check-in y Check-out',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Manual check-in', 'App móvil', 'GPS tracking', 'Validaciones', 'Correcciones']
    },
    {
      id: 'attend-003',
      title: 'Kiosk Mode',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Configurar kiosk', 'Tablets/terminales', 'Biométricos', 'Badges', 'Seguridad']
    },
    {
      id: 'attend-004',
      title: 'Overtime y Reportes',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Horas extras', 'Cálculo automático', 'Aprobaciones', 'Reportes', 'Analytics', 'Integración con Payroll']
    }
  ]
}
