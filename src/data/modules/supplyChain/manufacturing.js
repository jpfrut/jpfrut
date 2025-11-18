export const manufacturing = {
  id: 'manufacturing',
  name: 'Manufacturing',
  icon: '🏭',
  color: 'from-secondary-500 to-accent-red-600',
  category: 'supplyChain',
  priority: 3,
  description: 'Gestiona procesos de manufactura, BoMs, órdenes de producción y control de calidad',
  estimatedTime: '8 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'mfg-001',
      title: 'Introducción a Manufacturing en Odoo',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Overview de Manufacturing', 'Flujos de producción', 'Conceptos clave', 'Configuración inicial']
    },
    {
      id: 'mfg-002',
      title: 'Bills of Materials (BoM)',
      duration: '70 min',
      xp: 120,
      difficulty: 'Intermedio',
      topics: ['Crear BoMs', 'BoM multi-nivel', 'Componentes', 'Operaciones', 'Routings']
    },
    {
      id: 'mfg-003',
      title: 'Órdenes de Manufactura',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Crear MOs', 'Planificación', 'Scheduling', 'Material requirements', 'Backorders']
    },
    {
      id: 'mfg-004',
      title: 'Work Centers y Routings',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Work centers', 'Capacidad', 'Ruteo de operaciones', 'Tiempos de ciclo', 'Efficiency']
    },
    {
      id: 'mfg-005',
      title: 'Product Variants y Kits',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Configurator', 'BoM para variantes', 'Kits', 'Phantom BoMs', 'Flexibility']
    },
    {
      id: 'mfg-006',
      title: 'Quality Control en Manufacturing',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Quality checks', 'Control points', 'Inspecciones', 'Quality alerts', 'Non-conformance']
    },
    {
      id: 'mfg-007',
      title: 'Subcontracting',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Subcontratación', 'Envío a subcontratistas', 'Tracking', 'Costos', 'Recepción']
    },
    {
      id: 'mfg-008',
      title: 'Shop Floor Operations',
      duration: '70 min',
      xp: 120,
      difficulty: 'Avanzado',
      topics: ['Work order tablet view', 'Producción en tiempo real', 'Material tracking', 'Reportes', 'Performance']
    }
  ]
}
