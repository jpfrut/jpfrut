export const fieldService = {
  id: 'field-service',
  name: 'Field Service',
  icon: '🚚',
  color: 'from-neutral-600 to-primary-600',
  category: 'services',
  priority: 4,
  description: 'Gestiona servicios de campo, scheduling, rutas y worksheets móviles',
  estimatedTime: '6 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'field-001',
      title: 'Field Tasks y Configuración',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Field service overview', 'Crear tasks', 'Asignación', 'SLAs', 'Prioridades']
    },
    {
      id: 'field-002',
      title: 'Scheduling y Dispatching',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Calendar view', 'Dispatcher', 'Asignación automática', 'Skills matching', 'Availability']
    },
    {
      id: 'field-003',
      title: 'Itinerary Planning y Rutas',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Route optimization', 'Maps', 'Travel time', 'Multi-stop', 'GPS tracking']
    },
    {
      id: 'field-004',
      title: 'Worksheets Móviles',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['App móvil', 'Worksheets', 'Signatures', 'Photos', 'Offline mode']
    },
    {
      id: 'field-005',
      title: 'Product Management en Field Service',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Inventory en campo', 'Product usage', 'Stock trucks', 'Replenishment', 'Spare parts']
    },
    {
      id: 'field-006',
      title: 'Analytics y Performance de Field Service',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['KPIs', 'First-time fix rate', 'Response time', 'Utilization', 'Customer satisfaction']
    }
  ]
}
