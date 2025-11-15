// Estructura de datos para los módulos de Odoo 19
export const odooModules = {
  // MÓDULOS PRINCIPALES (Alta prioridad)
  accounting: {
    id: 'accounting',
    name: 'Contabilidad',
    icon: '💰',
    color: 'from-emerald-500 to-teal-600',
    priority: 1,
    description: 'Gestión contable completa: facturas, pagos, reportes financieros y conciliación bancaria',
    estimatedTime: '8 horas',
    difficulty: 'Intermedio',
    lessons: [
      {
        id: 'acc-001',
        title: 'Introducción a la Contabilidad en Odoo',
        duration: '30 min',
        xp: 50,
        topics: [
          'Configuración inicial del módulo',
          'Plan de cuentas contables',
          'Diarios contables',
          'Períodos fiscales'
        ]
      },
      {
        id: 'acc-002',
        title: 'Gestión de Facturas de Cliente',
        duration: '45 min',
        xp: 75,
        topics: [
          'Crear facturas de venta',
          'Facturas rectificativas (notas de crédito)',
          'Pagos parciales y totales',
          'Seguimiento de cobros'
        ]
      },
      {
        id: 'acc-003',
        title: 'Gestión de Facturas de Proveedor',
        duration: '45 min',
        xp: 75,
        topics: [
          'Registrar facturas de compra',
          'Validación y aprobación',
          'Gestión de pagos a proveedores',
          'Control de gastos'
        ]
      },
      {
        id: 'acc-004',
        title: 'Conciliación Bancaria',
        duration: '60 min',
        xp: 100,
        topics: [
          'Importar extractos bancarios',
          'Conciliación automática',
          'Conciliación manual',
          'Resolución de diferencias'
        ]
      },
      {
        id: 'acc-005',
        title: 'Reportes Financieros',
        duration: '45 min',
        xp: 75,
        topics: [
          'Balance general',
          'Estado de resultados',
          'Flujo de caja',
          'Reportes personalizados'
        ]
      },
      {
        id: 'acc-006',
        title: 'Impuestos y Declaraciones',
        duration: '60 min',
        xp: 100,
        topics: [
          'Configuración de impuestos',
          'IVA y retenciones',
          'Reportes fiscales',
          'Declaraciones periódicas'
        ]
      }
    ]
  },

  sales: {
    id: 'sales',
    name: 'Ventas',
    icon: '📊',
    color: 'from-blue-500 to-indigo-600',
    priority: 1,
    description: 'Gestión completa del ciclo de ventas: cotizaciones, pedidos, facturación y análisis',
    estimatedTime: '6 horas',
    difficulty: 'Básico',
    lessons: [
      {
        id: 'sales-001',
        title: 'Configuración del Módulo de Ventas',
        duration: '30 min',
        xp: 50,
        topics: [
          'Configuración general',
          'Equipos de ventas',
          'Productos y servicios',
          'Listas de precios'
        ]
      },
      {
        id: 'sales-002',
        title: 'Gestión de Cotizaciones',
        duration: '45 min',
        xp: 75,
        topics: [
          'Crear cotizaciones',
          'Plantillas de cotización',
          'Productos opcionales',
          'Envío por email'
        ]
      },
      {
        id: 'sales-003',
        title: 'Pedidos de Venta',
        duration: '45 min',
        xp: 75,
        topics: [
          'Convertir cotización en pedido',
          'Gestión de pedidos',
          'Entregas parciales',
          'Estado de pedidos'
        ]
      },
      {
        id: 'sales-004',
        title: 'Facturación desde Ventas',
        duration: '30 min',
        xp: 50,
        topics: [
          'Políticas de facturación',
          'Facturación automática',
          'Facturación por hitos',
          'Integración con Contabilidad'
        ]
      },
      {
        id: 'sales-005',
        title: 'CRM y Seguimiento',
        duration: '45 min',
        xp: 75,
        topics: [
          'Pipeline de ventas',
          'Actividades y tareas',
          'Seguimiento de oportunidades',
          'Análisis de conversión'
        ]
      },
      {
        id: 'sales-006',
        title: 'Reportes y Análisis de Ventas',
        duration: '30 min',
        xp: 50,
        topics: [
          'Dashboard de ventas',
          'Análisis por vendedor',
          'Productos más vendidos',
          'Previsión de ventas'
        ]
      }
    ]
  },

  fleet: {
    id: 'fleet',
    name: 'Flota',
    icon: '🚗',
    color: 'from-orange-500 to-red-600',
    priority: 1,
    description: 'Administración completa de vehículos: mantenimiento, costos, asignaciones y contratos',
    estimatedTime: '4 horas',
    difficulty: 'Básico',
    lessons: [
      {
        id: 'fleet-001',
        title: 'Configuración del Módulo de Flota',
        duration: '30 min',
        xp: 50,
        topics: [
          'Configuración inicial',
          'Categorías de vehículos',
          'Marcas y modelos',
          'Parámetros generales'
        ]
      },
      {
        id: 'fleet-002',
        title: 'Gestión de Vehículos',
        duration: '45 min',
        xp: 75,
        topics: [
          'Registro de vehículos',
          'Información técnica',
          'Documentación',
          'Estado y ubicación'
        ]
      },
      {
        id: 'fleet-003',
        title: 'Asignación de Vehículos',
        duration: '30 min',
        xp: 50,
        topics: [
          'Asignar vehículos a conductores',
          'Historial de asignaciones',
          'Gestión de llaves',
          'Notificaciones'
        ]
      },
      {
        id: 'fleet-004',
        title: 'Mantenimiento y Servicios',
        duration: '60 min',
        xp: 100,
        topics: [
          'Plan de mantenimiento',
          'Órdenes de servicio',
          'Proveedores de servicio',
          'Historial de reparaciones'
        ]
      },
      {
        id: 'fleet-005',
        title: 'Control de Costos',
        duration: '45 min',
        xp: 75,
        topics: [
          'Registro de combustible',
          'Costos de mantenimiento',
          'Seguros y licencias',
          'Análisis de costos por vehículo'
        ]
      },
      {
        id: 'fleet-006',
        title: 'Contratos y Reportes',
        duration: '30 min',
        xp: 50,
        topics: [
          'Contratos de arrendamiento',
          'Vencimientos y alertas',
          'Reportes de flota',
          'KPIs de rendimiento'
        ]
      }
    ]
  },

  // MÓDULOS SECUNDARIOS
  website: {
    id: 'website',
    name: 'Sitio Web',
    icon: '🌐',
    color: 'from-purple-500 to-pink-600',
    priority: 2,
    description: 'Constructor de sitios web y e-commerce integrado con Odoo',
    estimatedTime: '5 horas',
    difficulty: 'Intermedio',
    lessons: [
      {
        id: 'web-001',
        title: 'Introducción al Website Builder',
        duration: '45 min',
        xp: 75,
        topics: [
          'Editor drag & drop',
          'Temas y plantillas',
          'Páginas y menús',
          'SEO básico'
        ]
      },
      {
        id: 'web-002',
        title: 'E-commerce',
        duration: '60 min',
        xp: 100,
        topics: [
          'Catálogo de productos',
          'Carrito de compras',
          'Pasarelas de pago',
          'Proceso de checkout'
        ]
      },
      {
        id: 'web-003',
        title: 'Blogs y Contenido',
        duration: '30 min',
        xp: 50,
        topics: [
          'Crear y gestionar blogs',
          'SEO de contenido',
          'Categorías y tags',
          'Comentarios'
        ]
      },
      {
        id: 'web-004',
        title: 'Formularios y Landing Pages',
        duration: '45 min',
        xp: 75,
        topics: [
          'Crear formularios',
          'Landing pages',
          'Captura de leads',
          'Integración con CRM'
        ]
      }
    ]
  },

  email_marketing: {
    id: 'email_marketing',
    name: 'Email Marketing',
    icon: '📧',
    color: 'from-cyan-500 to-blue-600',
    priority: 2,
    description: 'Campañas de email marketing, automatización y análisis de resultados',
    estimatedTime: '3 horas',
    difficulty: 'Básico',
    lessons: [
      {
        id: 'email-001',
        title: 'Configuración de Email Marketing',
        duration: '30 min',
        xp: 50,
        topics: [
          'Configuración SMTP',
          'Listas de contactos',
          'Segmentación',
          'Plantillas de email'
        ]
      },
      {
        id: 'email-002',
        title: 'Crear Campañas',
        duration: '45 min',
        xp: 75,
        topics: [
          'Diseñador de emails',
          'Personalización',
          'Tests A/B',
          'Programación de envíos'
        ]
      },
      {
        id: 'email-003',
        title: 'Automatización',
        duration: '60 min',
        xp: 100,
        topics: [
          'Workflows automáticos',
          'Triggers y condiciones',
          'Email de bienvenida',
          'Carritos abandonados'
        ]
      },
      {
        id: 'email-004',
        title: 'Análisis y Métricas',
        duration: '30 min',
        xp: 50,
        topics: [
          'Tasas de apertura',
          'Clics y conversiones',
          'Bounces y unsubscribes',
          'ROI de campañas'
        ]
      }
    ]
  },

  crm: {
    id: 'crm',
    name: 'CRM (Seguimientos)',
    icon: '👥',
    color: 'from-green-500 to-emerald-600',
    priority: 2,
    description: 'Gestión de relaciones con clientes, oportunidades y pipeline de ventas',
    estimatedTime: '4 horas',
    difficulty: 'Básico',
    lessons: [
      {
        id: 'crm-001',
        title: 'Configuración del CRM',
        duration: '30 min',
        xp: 50,
        topics: [
          'Equipos de ventas',
          'Etapas del pipeline',
          'Campos personalizados',
          'Reglas de asignación'
        ]
      },
      {
        id: 'crm-002',
        title: 'Gestión de Leads',
        duration: '45 min',
        xp: 75,
        topics: [
          'Captura de leads',
          'Calificación',
          'Conversión a oportunidad',
          'Lead scoring'
        ]
      },
      {
        id: 'crm-003',
        title: 'Pipeline de Oportunidades',
        duration: '45 min',
        xp: 75,
        topics: [
          'Crear oportunidades',
          'Mover entre etapas',
          'Actividades y seguimiento',
          'Probabilidad de cierre'
        ]
      },
      {
        id: 'crm-004',
        title: 'Reportes y Previsiones',
        duration: '30 min',
        xp: 50,
        topics: [
          'Dashboard de CRM',
          'Análisis de pipeline',
          'Previsión de ingresos',
          'Rendimiento del equipo'
        ]
      }
    ]
  },

  inventory: {
    id: 'inventory',
    name: 'Inventario',
    icon: '📦',
    color: 'from-amber-500 to-orange-600',
    priority: 2,
    description: 'Gestión de inventario, almacenes, recepciones y entregas',
    estimatedTime: '5 horas',
    difficulty: 'Intermedio',
    lessons: [
      {
        id: 'inv-001',
        title: 'Configuración de Inventario',
        duration: '45 min',
        xp: 75,
        topics: [
          'Almacenes y ubicaciones',
          'Rutas de inventario',
          'Reglas de reabastecimiento',
          'Valorización de stock'
        ]
      },
      {
        id: 'inv-002',
        title: 'Gestión de Productos',
        duration: '45 min',
        xp: 75,
        topics: [
          'Crear productos',
          'Variantes',
          'Unidades de medida',
          'Códigos de barras'
        ]
      },
      {
        id: 'inv-003',
        title: 'Recepciones y Entregas',
        duration: '60 min',
        xp: 100,
        topics: [
          'Órdenes de recepción',
          'Órdenes de entrega',
          'Transferencias internas',
          'Devoluciones'
        ]
      },
      {
        id: 'inv-004',
        title: 'Inventarios y Ajustes',
        duration: '30 min',
        xp: 50,
        topics: [
          'Conteos de inventario',
          'Ajustes de stock',
          'Trazabilidad (lotes y series)',
          'Reportes de inventario'
        ]
      }
    ]
  },

  purchase: {
    id: 'purchase',
    name: 'Compras',
    icon: '🛒',
    color: 'from-violet-500 to-purple-600',
    priority: 2,
    description: 'Gestión de compras, proveedores, solicitudes de cotización y órdenes',
    estimatedTime: '4 horas',
    difficulty: 'Básico',
    lessons: [
      {
        id: 'pur-001',
        title: 'Configuración de Compras',
        duration: '30 min',
        xp: 50,
        topics: [
          'Configuración general',
          'Acuerdos de compra',
          'Reglas de reordenamiento',
          'Proveedores'
        ]
      },
      {
        id: 'pur-002',
        title: 'Solicitudes de Cotización',
        duration: '45 min',
        xp: 75,
        topics: [
          'Crear RFQs',
          'Comparar ofertas',
          'Seleccionar proveedor',
          'Confirmación'
        ]
      },
      {
        id: 'pur-003',
        title: 'Órdenes de Compra',
        duration: '45 min',
        xp: 75,
        topics: [
          'Gestionar órdenes',
          'Recepciones parciales',
          'Control de calidad',
          'Facturación de compras'
        ]
      },
      {
        id: 'pur-004',
        title: 'Análisis de Compras',
        duration: '30 min',
        xp: 50,
        topics: [
          'Reportes de compras',
          'Análisis por proveedor',
          'Control de presupuesto',
          'KPIs de compras'
        ]
      }
    ]
  },

  hr: {
    id: 'hr',
    name: 'Recursos Humanos',
    icon: '👔',
    color: 'from-rose-500 to-pink-600',
    priority: 3,
    description: 'Gestión de empleados, ausencias, evaluaciones y nómina',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      {
        id: 'hr-001',
        title: 'Gestión de Empleados',
        duration: '45 min',
        xp: 75,
        topics: [
          'Registro de empleados',
          'Estructura organizacional',
          'Contratos',
          'Documentos'
        ]
      },
      {
        id: 'hr-002',
        title: 'Ausencias y Vacaciones',
        duration: '45 min',
        xp: 75,
        topics: [
          'Tipos de ausencias',
          'Solicitudes',
          'Aprobaciones',
          'Reportes de ausencias'
        ]
      },
      {
        id: 'hr-003',
        title: 'Evaluaciones de Desempeño',
        duration: '45 min',
        xp: 75,
        topics: [
          'Crear evaluaciones',
          'Objetivos y KPIs',
          'Feedback 360',
          'Planes de desarrollo'
        ]
      },
      {
        id: 'hr-004',
        title: 'Nómina Básica',
        duration: '60 min',
        xp: 100,
        topics: [
          'Configuración de nómina',
          'Conceptos salariales',
          'Procesamiento',
          'Reportes de nómina'
        ]
      }
    ]
  },

  project: {
    id: 'project',
    name: 'Proyectos',
    icon: '📋',
    color: 'from-indigo-500 to-blue-600',
    priority: 3,
    description: 'Gestión de proyectos, tareas, tiempo y planificación',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      {
        id: 'proj-001',
        title: 'Configuración de Proyectos',
        duration: '30 min',
        xp: 50,
        topics: [
          'Crear proyectos',
          'Etapas de tareas',
          'Equipos de proyecto',
          'Plantillas'
        ]
      },
      {
        id: 'proj-002',
        title: 'Gestión de Tareas',
        duration: '45 min',
        xp: 75,
        topics: [
          'Crear y asignar tareas',
          'Vista Kanban',
          'Vista Gantt',
          'Dependencias'
        ]
      },
      {
        id: 'proj-003',
        title: 'Registro de Tiempo',
        duration: '45 min',
        xp: 75,
        topics: [
          'Timesheet',
          'Timer integrado',
          'Facturación por tiempo',
          'Análisis de productividad'
        ]
      },
      {
        id: 'proj-004',
        title: 'Reportes de Proyecto',
        duration: '30 min',
        xp: 50,
        topics: [
          'Rentabilidad de proyectos',
          'Tiempo vs. planificado',
          'Burndown charts',
          'Análisis de recursos'
        ]
      }
    ]
  }
}

// Función auxiliar para obtener todos los módulos como array
export const getModulesArray = () => {
  return Object.values(odooModules).sort((a, b) => a.priority - b.priority)
}

// Función para obtener módulo por ID
export const getModuleById = (id) => {
  return odooModules[id]
}

// Función para obtener lección por ID
export const getLessonById = (moduleId, lessonId) => {
  const module = odooModules[moduleId]
  return module?.lessons.find(lesson => lesson.id === lessonId)
}

// Estadísticas generales
export const getStats = () => {
  const modules = getModulesArray()
  const totalLessons = modules.reduce((acc, mod) => acc + mod.lessons.length, 0)
  const totalXP = modules.reduce((acc, mod) =>
    acc + mod.lessons.reduce((sum, lesson) => sum + lesson.xp, 0), 0
  )
  const totalTime = modules.reduce((acc, mod) => {
    const hours = parseInt(mod.estimatedTime)
    return acc + hours
  }, 0)

  return {
    totalModules: modules.length,
    totalLessons,
    totalXP,
    totalTime: `${totalTime} horas`
  }
}
