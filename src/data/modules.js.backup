// Estructura de datos SIMPLIFICADA para módulos esenciales de Odoo
// Enfoque en los 12 módulos más importantes para usuarios principiantes
// Categorías reorganizadas: Finanzas | Ventas | Operaciones | Administración

export const odooModules = {
  // ========================
  // FINANZAS (2 módulos)
  // ========================
  accounting: {
    id: 'accounting',
    name: 'Contabilidad',
    icon: '💰',
    color: 'from-accent-green-500 to-accent-green-600',
    category: 'Finanzas',
    priority: 1,
    description: 'Gestión contable completa: facturas, pagos, reportes financieros y conciliación bancaria',
    estimatedTime: '8 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'acc-001', title: 'Introducción a la Contabilidad en Odoo', duration: '30 min', xp: 50, topics: ['Configuración inicial', 'Plan de cuentas', 'Diarios', 'Períodos fiscales'] },
      { id: 'acc-002', title: 'Gestión de Facturas de Cliente', duration: '45 min', xp: 75, topics: ['Crear facturas', 'Notas de crédito', 'Pagos', 'Seguimiento'] },
      { id: 'acc-003', title: 'Gestión de Facturas de Proveedor', duration: '45 min', xp: 75, topics: ['Registrar facturas', 'Validación', 'Pagos', 'Control de gastos'] },
      { id: 'acc-004', title: 'Conciliación Bancaria', duration: '60 min', xp: 100, topics: ['Importar extractos', 'Conciliación automática', 'Manual', 'Diferencias'] },
      { id: 'acc-005', title: 'Reportes Financieros', duration: '45 min', xp: 75, topics: ['Balance', 'Estado de resultados', 'Flujo de caja', 'Personalizados'] },
      { id: 'acc-006', title: 'Impuestos y Declaraciones', duration: '60 min', xp: 100, topics: ['Configuración IVA', 'Retenciones', 'Reportes fiscales', 'Declaraciones'] },
      { id: 'acc-007', title: 'Alta Manual de Cuentas Bancarias en México', duration: '75 min', xp: 125, topics: ['Configuración sin tokens', 'Plan de cuentas para bancos', 'Diarios bancarios', 'Registro manual de movimientos', 'Dashboard y Balance General'] }
    ]
  },

  expenses: {
    id: 'expenses',
    name: 'Gastos',
    icon: '🧾',
    color: 'from-accent-red-500 to-accent-pink-600',
    category: 'Finanzas',
    priority: 2,
    description: 'Control de gastos de empleados: registro, aprobación y reembolso',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'exp-001', title: 'Configuración de Categorías de Gastos', duration: '20 min', xp: 40, topics: ['Tipos de gastos', 'Políticas', 'Límites', 'Aprobaciones'] },
      { id: 'exp-002', title: 'Registrar y Enviar Gastos', duration: '25 min', xp: 50, topics: ['Crear gastos', 'Adjuntar recibos', 'Reportes de gastos', 'Enviar aprobación'] },
      { id: 'exp-003', title: 'Aprobar y Reembolsar', duration: '30 min', xp: 60, topics: ['Flujo de aprobación', 'Reembolsos', 'Refacturación', 'Análisis'] }
    ]
  },

  // ========================
  // VENTAS (3 módulos)
  // ========================
  sales: {
    id: 'sales',
    name: 'Ventas y CRM',
    icon: '📊',
    color: 'from-primary-500 to-primary-600',
    category: 'Ventas',
    priority: 1,
    description: 'Gestión completa del ciclo de ventas: leads, cotizaciones, pedidos, facturación y análisis',
    estimatedTime: '8 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'sales-001', title: 'Configuración Inicial de Ventas', duration: '30 min', xp: 50, topics: ['Productos', 'Listas de precios', 'Equipos de venta', 'Plantillas'] },
      { id: 'sales-002', title: 'Gestión de Cotizaciones', duration: '45 min', xp: 75, topics: ['Crear cotizaciones', 'Productos opcionales', 'Plantillas', 'Envío'] },
      { id: 'sales-003', title: 'Pedidos de Venta', duration: '45 min', xp: 75, topics: ['Confirmar pedidos', 'Entrega', 'Facturación', 'Seguimiento'] },
      { id: 'sales-004', title: 'Facturación desde Ventas', duration: '40 min', xp: 70, topics: ['Métodos de facturación', 'Anticipos', 'Hitos', 'Gastos'] },
      { id: 'sales-005', title: 'CRM: Pipeline de Ventas', duration: '45 min', xp: 75, topics: ['Etapas', 'Equipos de venta', 'Reglas de asignación', 'Probabilidades'] },
      { id: 'sales-006', title: 'CRM: Gestión de Leads', duration: '40 min', xp: 70, topics: ['Capturar leads', 'Formularios web', 'Calificación', 'Conversión'] },
      { id: 'sales-007', title: 'CRM: Oportunidades y Seguimiento', duration: '45 min', xp: 75, topics: ['Convertir leads', 'Actividades', 'Cotizaciones', 'Cierre'] },
      { id: 'sales-008', title: 'Reportes y Análisis de Ventas', duration: '35 min', xp: 60, topics: ['Dashboard', 'Métricas', 'Pronósticos', 'KPIs'] }
    ]
  },

  pos: {
    id: 'pos',
    name: 'Punto de Venta',
    icon: '🏪',
    color: 'from-secondary-500 to-secondary-600',
    category: 'Ventas',
    priority: 2,
    description: 'Sistema de punto de venta para tiendas físicas y restaurantes',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'pos-001', title: 'Configuración del POS', duration: '40 min', xp: 70, topics: ['Hardware', 'Sesiones', 'Métodos de pago', 'Impresoras'] },
      { id: 'pos-002', title: 'Operaciones de Venta', duration: '45 min', xp: 75, topics: ['Ventas básicas', 'Descuentos', 'Devoluciones', 'Clientes'] },
      { id: 'pos-003', title: 'Funciones de Restaurante', duration: '40 min', xp: 70, topics: ['Mesas', 'Órdenes', 'Cocina', 'División de cuentas'] },
      { id: 'pos-004', title: 'Cierre y Reportes', duration: '35 min', xp: 60, topics: ['Cierre de caja', 'Reportes', 'Análisis', 'Inventario'] }
    ]
  },

  ecommerce: {
    id: 'ecommerce',
    name: 'Tienda Online',
    icon: '🛍️',
    color: 'from-accent-pink-500 to-accent-red-600',
    category: 'Ventas',
    priority: 3,
    description: 'Tienda online completa integrada con Odoo',
    estimatedTime: '7 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'ecom-001', title: 'Configurar Tienda', duration: '45 min', xp: 75, topics: ['Catálogo', 'Categorías', 'Atributos', 'Precios'] },
      { id: 'ecom-002', title: 'Proceso de Compra', duration: '40 min', xp: 70, topics: ['Carrito', 'Checkout', 'Pagos', 'Envío'] },
      { id: 'ecom-003', title: 'Gestión de Pedidos', duration: '40 min', xp: 70, topics: ['Procesamiento', 'Estados', 'Devoluciones', 'Comunicación'] },
      { id: 'ecom-004', title: 'Marketing y Conversión', duration: '35 min', xp: 60, topics: ['Cross-selling', 'Promociones', 'Reviews', 'Abandonos'] }
    ]
  },

  // ========================
  // OPERACIONES (2 módulos)
  // ========================
  inventory: {
    id: 'inventory',
    name: 'Inventario',
    icon: '📦',
    color: 'from-secondary-500 to-secondary-600',
    category: 'Operaciones',
    priority: 1,
    description: 'Control de stock, almacenes y movimientos de inventario',
    estimatedTime: '6 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'inv-001', title: 'Configuración de Productos', duration: '40 min', xp: 70, topics: ['Tipos de producto', 'Unidades', 'Categorías', 'Variantes'] },
      { id: 'inv-002', title: 'Gestión de Almacenes', duration: '45 min', xp: 75, topics: ['Ubicaciones', 'Rutas', 'Reglas de reabastecimiento', 'Multi-almacén'] },
      { id: 'inv-003', title: 'Trazabilidad', duration: '40 min', xp: 70, topics: ['Números de serie', 'Lotes', 'Fechas de vencimiento', 'Tracking'] },
      { id: 'inv-004', title: 'Operaciones de Inventario', duration: '45 min', xp: 75, topics: ['Recepciones', 'Entregas', 'Transferencias internas', 'Ajustes'] },
      { id: 'inv-005', title: 'Valoración de Inventario', duration: '35 min', xp: 60, topics: ['Métodos de costeo', 'Costos adicionales', 'Reportes', 'Análisis'] }
    ]
  },

  purchase: {
    id: 'purchase',
    name: 'Compras',
    icon: '🛒',
    color: 'from-primary-500 to-primary-600',
    category: 'Operaciones',
    priority: 2,
    description: 'Gestión de compras: proveedores, órdenes y control de costos',
    estimatedTime: '4 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'pur-001', title: 'Configuración de Proveedores', duration: '35 min', xp: 60, topics: ['Ficha proveedor', 'Precios', 'Condiciones', 'Evaluación'] },
      { id: 'pur-002', title: 'Solicitudes de Cotización', duration: '40 min', xp: 70, topics: ['Crear RFQ', 'Comparar ofertas', 'Licitaciones', 'Aprobaciones'] },
      { id: 'pur-003', title: 'Órdenes de Compra', duration: '40 min', xp: 70, topics: ['Confirmar órdenes', 'Recepciones', 'Facturas', 'Control'] },
      { id: 'pur-004', title: 'Análisis de Compras', duration: '30 min', xp: 55, topics: ['Reportes', 'Tendencias', 'Costos', 'KPIs'] }
    ]
  },

  // ========================
  // ADMINISTRACIÓN (5 módulos)
  // ========================
  employees: {
    id: 'employees',
    name: 'Empleados',
    icon: '👥',
    color: 'from-primary-500 to-primary-600',
    category: 'Administración',
    priority: 1,
    description: 'Gestión de información y ciclo de vida del empleado',
    estimatedTime: '3 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'emp-001', title: 'Crear Empleados', duration: '30 min', xp: 55, topics: ['Ficha empleado', 'Información personal', 'Contratos', 'Documentos'] },
      { id: 'emp-002', title: 'Departamentos y Estructura', duration: '25 min', xp: 45, topics: ['Departamentos', 'Jerarquía', 'Reportes', 'Organigramas'] },
      { id: 'emp-003', title: 'Onboarding y Offboarding', duration: '35 min', xp: 60, topics: ['Planes', 'Tareas', 'Documentos', 'Equipamiento'] }
    ]
  },

  timeoff: {
    id: 'timeoff',
    name: 'Ausencias',
    icon: '🏖️',
    color: 'from-accent-aqua-500 to-accent-green-600',
    category: 'Administración',
    priority: 2,
    description: 'Gestión de vacaciones, permisos y ausencias',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'to-001', title: 'Tipos de Ausencias', duration: '25 min', xp: 45, topics: ['Configurar tipos', 'Políticas', 'Acumulación', 'Límites'] },
      { id: 'to-002', title: 'Solicitar y Aprobar', duration: '30 min', xp: 55, topics: ['Solicitudes', 'Aprobaciones', 'Calendario', 'Balance'] },
      { id: 'to-003', title: 'Reportes y Análisis', duration: '25 min', xp: 45, topics: ['Dashboard', 'Estadísticas', 'Planificación', 'Alertas'] }
    ]
  },

  project: {
    id: 'project',
    name: 'Proyectos',
    icon: '📁',
    color: 'from-neutral-500 to-neutral-600',
    category: 'Administración',
    priority: 3,
    description: 'Gestión de proyectos y tareas',
    estimatedTime: '5 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'proj-001', title: 'Crear Proyectos', duration: '35 min', xp: 60, topics: ['Configuración', 'Etapas', 'Equipo', 'Fechas'] },
      { id: 'proj-002', title: 'Gestión de Tareas', duration: '45 min', xp: 75, topics: ['Crear tareas', 'Asignación', 'Dependencias', 'Subtareas'] },
      { id: 'proj-003', title: 'Seguimiento y Control', duration: '40 min', xp: 70, topics: ['Kanban', 'Gantt', 'Tiempos', 'Burndown'] },
      { id: 'proj-004', title: 'Rentabilidad', duration: '30 min', xp: 55, topics: ['Costos', 'Ingresos', 'Márgenes', 'Reportes'] }
    ]
  },

  website: {
    id: 'website',
    name: 'Sitio Web',
    icon: '🌐',
    color: 'from-accent-pink-500 to-accent-pink-600',
    category: 'Administración',
    priority: 4,
    description: 'Creación y gestión de sitios web empresariales',
    estimatedTime: '6 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'web-001', title: 'Diseño Web Básico', duration: '45 min', xp: 75, topics: ['Bloques', 'Temas', 'Páginas', 'Menús'] },
      { id: 'web-002', title: 'Contenido y SEO', duration: '40 min', xp: 70, topics: ['Páginas', 'Blog', 'SEO', 'Meta tags'] },
      { id: 'web-003', title: 'Formularios y Conversiones', duration: '35 min', xp: 60, topics: ['Formularios', 'CTAs', 'Landing pages', 'Analytics'] },
      { id: 'web-004', title: 'Configuración Avanzada', duration: '40 min', xp: 70, topics: ['Dominios', 'Multi-sitio', 'Traducciones', 'CDN'] }
    ]
  },

  helpdesk: {
    id: 'helpdesk',
    name: 'Mesa de Ayuda',
    icon: '🎧',
    color: 'from-accent-red-500 to-accent-pink-600',
    category: 'Administración',
    priority: 5,
    description: 'Sistema de tickets de soporte al cliente',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'help-001', title: 'Configurar Helpdesk', duration: '35 min', xp: 60, topics: ['Equipos', 'Etapas', 'SLAs', 'Asignación'] },
      { id: 'help-002', title: 'Gestionar Tickets', duration: '40 min', xp: 70, topics: ['Crear tickets', 'Prioridades', 'Resolución', 'Comunicación'] },
      { id: 'help-003', title: 'Help Center', duration: '30 min', xp: 55, topics: ['Base conocimiento', 'FAQs', 'Self-service', 'Portal'] },
      { id: 'help-004', title: 'Métricas y Satisfacción', duration: '30 min', xp: 55, topics: ['SLA cumplimiento', 'Ratings', 'Reportes', 'Mejora'] }
    ]
  }
}

// Función auxiliar para obtener todos los módulos como array
export const getModulesArray = () => Object.values(odooModules)

// Función para obtener un módulo por ID
export const getModuleById = (id) => {
  return odooModules[id] || null
}

// Función para obtener una lección por ID
export const getLessonById = (moduleId, lessonId) => {
  const module = odooModules[moduleId]
  if (!module) return null
  return module.lessons.find(lesson => lesson.id === lessonId) || null
}

// Función para obtener módulos por categoría
export const getModulesByCategory = (category) => {
  return Object.values(odooModules).filter(m => m.category === category)
}

// Función para obtener todas las categorías
export const getCategories = () => {
  const categories = new Set(Object.values(odooModules).map(m => m.category))
  return Array.from(categories)
}

// Función para obtener estadísticas generales
export const getStats = () => {
  const modules = getModulesArray()
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const totalTime = modules.reduce((acc, m) => {
    const hours = parseInt(m.estimatedTime) || 0
    return acc + hours
  }, 0)

  return {
    totalModules: modules.length,
    totalLessons,
    totalTime: `${totalTime} horas`,
    categories: getCategories()
  }
}
