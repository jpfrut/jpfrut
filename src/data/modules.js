// Estructura de datos COMPLETA para TODOS los módulos de Odoo 19
// Basado en la documentación oficial: https://www.odoo.com/documentation/19.0/applications.html

export const odooModules = {
  // ========================
  // FINANZAS
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
      { id: 'acc-006', title: 'Impuestos y Declaraciones', duration: '60 min', xp: 100, topics: ['Configuración IVA', 'Retenciones', 'Reportes fiscales', 'Declaraciones'] }
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
  // VENTAS
  // ========================
  sales: {
    id: 'sales',
    name: 'Ventas',
    icon: '📊',
    color: 'from-primary-500 to-primary-600',
    category: 'Ventas',
    priority: 1,
    description: 'Gestión completa del ciclo de ventas: cotizaciones, pedidos, facturación y análisis',
    estimatedTime: '6 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'sales-001', title: 'Configuración Inicial de Ventas', duration: '30 min', xp: 50, topics: ['Productos', 'Listas de precios', 'Equipos de venta', 'Plantillas'] },
      { id: 'sales-002', title: 'Gestión de Cotizaciones', duration: '45 min', xp: 75, topics: ['Crear cotizaciones', 'Productos opcionales', 'Plantillas', 'Envío'] },
      { id: 'sales-003', title: 'Pedidos de Venta', duration: '45 min', xp: 75, topics: ['Confirmar pedidos', 'Entrega', 'Facturación', 'Seguimiento'] },
      { id: 'sales-004', title: 'Facturación desde Ventas', duration: '40 min', xp: 70, topics: ['Métodos de facturación', 'Anticipos', 'Hitos', 'Gastos'] },
      { id: 'sales-005', title: 'CRM y Seguimiento', duration: '45 min', xp: 75, topics: ['Pipeline', 'Oportunidades', 'Actividades', 'Reportes'] },
      { id: 'sales-006', title: 'Reportes y Análisis de Ventas', duration: '35 min', xp: 60, topics: ['Dashboard', 'Métricas', 'Pronósticos', 'Comisiones'] }
    ]
  },

  crm: {
    id: 'crm',
    name: 'CRM',
    icon: '🎯',
    color: 'from-accent-purple-500 to-accent-purple-600',
    category: 'Ventas',
    priority: 2,
    description: 'Gestión de relaciones con clientes: leads, oportunidades y pipeline de ventas',
    estimatedTime: '5 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'crm-001', title: 'Configuración del Pipeline', duration: '30 min', xp: 50, topics: ['Etapas', 'Equipos de venta', 'Reglas de asignación', 'Probabilidades'] },
      { id: 'crm-002', title: 'Gestión de Leads', duration: '40 min', xp: 70, topics: ['Capturar leads', 'Formularios web', 'Lead mining', 'Calificación'] },
      { id: 'crm-003', title: 'Oportunidades y Seguimiento', duration: '45 min', xp: 75, topics: ['Convertir leads', 'Actividades', 'Cotizaciones', 'Cierre'] },
      { id: 'crm-004', title: 'Análisis y Pronósticos', duration: '35 min', xp: 60, topics: ['Pipeline analysis', 'Revenue esperado', 'Scoring predictivo', 'KPIs'] }
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

  subscriptions: {
    id: 'subscriptions',
    name: 'Suscripciones',
    icon: '🔄',
    color: 'from-accent-green-500 to-accent-aqua-600',
    category: 'Ventas',
    priority: 3,
    description: 'Gestión de ingresos recurrentes y suscripciones',
    estimatedTime: '3 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'sub-001', title: 'Crear Planes de Suscripción', duration: '35 min', xp: 60, topics: ['Productos recurrentes', 'Precios', 'Períodos', 'Plantillas'] },
      { id: 'sub-002', title: 'Gestionar Suscripciones', duration: '40 min', xp: 70, topics: ['Renovaciones', 'Upselling', 'Cancelaciones', 'Pagos automáticos'] },
      { id: 'sub-003', title: 'Análisis de Suscripciones', duration: '30 min', xp: 55, topics: ['MRR', 'Churn rate', 'Revenue', 'KPIs'] }
    ]
  },

  rental: {
    id: 'rental',
    name: 'Alquileres',
    icon: '🏠',
    color: 'from-accent-green-500 to-accent-green-600',
    category: 'Ventas',
    priority: 3,
    description: 'Gestión de alquiler de productos y equipos',
    estimatedTime: '2 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'rent-001', title: 'Configurar Productos de Alquiler', duration: '30 min', xp: 55, topics: ['Productos', 'Tarifas', 'Disponibilidad', 'Depósitos'] },
      { id: 'rent-002', title: 'Procesar Alquileres', duration: '35 min', xp: 60, topics: ['Reservas', 'Entregas', 'Devoluciones', 'Facturación'] }
    ]
  },

  // ========================
  // INVENTARIO Y CADENA DE SUMINISTRO
  // ========================
  inventory: {
    id: 'inventory',
    name: 'Inventario',
    icon: '📦',
    color: 'from-secondary-500 to-secondary-600',
    category: 'Cadena de Suministro',
    priority: 2,
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
    category: 'Cadena de Suministro',
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

  manufacturing: {
    id: 'manufacturing',
    name: 'Fabricación',
    icon: '🏭',
    color: 'from-neutral-600 to-neutral-700',
    category: 'Cadena de Suministro',
    priority: 2,
    description: 'Planificación y control de producción manufacturera',
    estimatedTime: '8 horas',
    difficulty: 'Avanzado',
    lessons: [
      { id: 'mfg-001', title: 'Configuración Básica', duration: '45 min', xp: 75, topics: ['Productos', 'Lista de materiales', 'Centros de trabajo', 'Rutas'] },
      { id: 'mfg-002', title: 'Órdenes de Producción', duration: '50 min', xp: 85, topics: ['Crear órdenes', 'Planificación', 'Consumo', 'Finalización'] },
      { id: 'mfg-003', title: 'Shop Floor', duration: '40 min', xp: 70, topics: ['Control de piso', 'Tiempo real', 'Tabletas', 'Eficiencia'] },
      { id: 'mfg-004', title: 'Subcontratación', duration: '35 min', xp: 60, topics: ['Proveedores', 'Órdenes', 'Control', 'Costos'] },
      { id: 'mfg-005', title: 'Reportes de Producción', duration: '40 min', xp: 70, topics: ['OEE', 'Costos', 'Tiempos', 'Análisis'] }
    ]
  },

  quality: {
    id: 'quality',
    name: 'Control de Calidad',
    icon: '✅',
    color: 'from-accent-green-600 to-accent-green-700',
    category: 'Cadena de Suministro',
    priority: 3,
    description: 'Sistema de gestión de calidad y controles',
    estimatedTime: '3 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'qual-001', title: 'Puntos de Control', duration: '35 min', xp: 60, topics: ['Configuración', 'Tipos', 'Frecuencia', 'Responsables'] },
      { id: 'qual-002', title: 'Checks de Calidad', duration: '40 min', xp: 70, topics: ['Ejecutar checks', 'Instrucciones', 'Mediciones', 'Resultados'] },
      { id: 'qual-003', title: 'Alertas y Acciones', duration: '30 min', xp: 55, topics: ['Alertas', 'No conformidades', 'Acciones correctivas', 'Seguimiento'] }
    ]
  },

  maintenance: {
    id: 'maintenance',
    name: 'Mantenimiento',
    icon: '🔧',
    color: 'from-secondary-600 to-secondary-700',
    category: 'Cadena de Suministro',
    priority: 3,
    description: 'Gestión de mantenimiento preventivo y correctivo',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'maint-001', title: 'Equipos y Configuración', duration: '30 min', xp: 55, topics: ['Agregar equipos', 'Categorías', 'Ubicaciones', 'Responsables'] },
      { id: 'maint-002', title: 'Solicitudes de Mantenimiento', duration: '35 min', xp: 60, topics: ['Crear solicitudes', 'Prioridades', 'Calendario', 'Seguimiento'] }
    ]
  },

  // ========================
  // RECURSOS HUMANOS
  // ========================
  employees: {
    id: 'employees',
    name: 'Empleados',
    icon: '👥',
    color: 'from-primary-500 to-primary-600',
    category: 'Recursos Humanos',
    priority: 2,
    description: 'Gestión de información y ciclo de vida del empleado',
    estimatedTime: '3 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'emp-001', title: 'Crear Empleados', duration: '30 min', xp: 55, topics: ['Ficha empleado', 'Información personal', 'Contratos', 'Documentos'] },
      { id: 'emp-002', title: 'Departamentos y Estructura', duration: '25 min', xp: 45, topics: ['Departamentos', 'Jerarquía', 'Reportes', 'Organigramas'] },
      { id: 'emp-003', title: 'Onboarding y Offboarding', duration: '35 min', xp: 60, topics: ['Planes', 'Tareas', 'Documentos', 'Equipamiento'] }
    ]
  },

  recruitment: {
    id: 'recruitment',
    name: 'Reclutamiento',
    icon: '🎓',
    color: 'from-accent-pink-500 to-accent-pink-600',
    category: 'Recursos Humanos',
    priority: 3,
    description: 'Gestión de procesos de selección y contratación',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'rec-001', title: 'Puestos de Trabajo', duration: '30 min', xp: 55, topics: ['Crear puestos', 'Descripción', 'Requisitos', 'Publicación'] },
      { id: 'rec-002', title: 'Gestión de Candidatos', duration: '40 min', xp: 70, topics: ['Aplicaciones', 'Pipeline', 'Entrevistas', 'Evaluación'] },
      { id: 'rec-003', title: 'Ofertas y Contratación', duration: '35 min', xp: 60, topics: ['Crear ofertas', 'Negociación', 'Contratación', 'Onboarding'] }
    ]
  },

  timeoff: {
    id: 'timeoff',
    name: 'Ausencias',
    icon: '🏖️',
    color: 'from-accent-aqua-500 to-accent-green-600',
    category: 'Recursos Humanos',
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

  payroll: {
    id: 'payroll',
    name: 'Nómina',
    icon: '💵',
    color: 'from-accent-green-600 to-accent-green-700',
    category: 'Recursos Humanos',
    priority: 2,
    description: 'Procesamiento de nómina y gestión salarial',
    estimatedTime: '6 horas',
    difficulty: 'Avanzado',
    lessons: [
      { id: 'pay-001', title: 'Estructuras Salariales', duration: '45 min', xp: 75, topics: ['Reglas', 'Componentes', 'Deducciones', 'Beneficios'] },
      { id: 'pay-002', title: 'Contratos y Horarios', duration: '40 min', xp: 70, topics: ['Tipos de contrato', 'Horarios', 'Horas extra', 'Turnos'] },
      { id: 'pay-003', title: 'Procesar Nómina', duration: '50 min', xp: 85, topics: ['Generar nóminas', 'Validación', 'Pagos', 'Lotes'] },
      { id: 'pay-004', title: 'Reportes de Nómina', duration: '35 min', xp: 60, topics: ['Resúmenes', 'Impuestos', 'Análisis', 'Cumplimiento'] }
    ]
  },

  attendances: {
    id: 'attendances',
    name: 'Asistencias',
    icon: '⏰',
    color: 'from-accent-purple-500 to-accent-purple-600',
    category: 'Recursos Humanos',
    priority: 3,
    description: 'Control de asistencia y horas trabajadas',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'att-001', title: 'Check In/Out', duration: '25 min', xp: 45, topics: ['Registro', 'Kioscos', 'Hardware', 'Validación'] },
      { id: 'att-002', title: 'Reportes de Asistencia', duration: '30 min', xp: 55, topics: ['Horas trabajadas', 'Overtime', 'Análisis', 'Exportación'] }
    ]
  },

  appraisals: {
    id: 'appraisals',
    name: 'Evaluaciones',
    icon: '⭐',
    color: 'from-secondary-500 to-secondary-600',
    category: 'Recursos Humanos',
    priority: 3,
    description: 'Evaluaciones de desempeño y objetivos',
    estimatedTime: '3 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'apr-001', title: 'Configurar Evaluaciones', duration: '35 min', xp: 60, topics: ['Plantillas', 'Criterios', 'Escalas', 'Ciclos'] },
      { id: 'apr-002', title: 'Realizar Evaluaciones', duration: '40 min', xp: 70, topics: ['360 feedback', 'Auto-evaluación', 'Objetivos', 'Planes'] },
      { id: 'apr-003', title: 'Análisis y Desarrollo', duration: '30 min', xp: 55, topics: ['Resultados', 'Evolución', 'Skills', 'Carreras'] }
    ]
  },

  fleet: {
    id: 'fleet',
    name: 'Flota',
    icon: '🚗',
    color: 'from-accent-aqua-500 to-primary-600',
    category: 'Recursos Humanos',
    priority: 1,
    description: 'Gestión completa de vehículos: mantenimiento, costos y asignaciones',
    estimatedTime: '5 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'fleet-001', title: 'Configuración de Flota', duration: '30 min', xp: 50, topics: ['Modelos', 'Fabricantes', 'Categorías', 'Servicios'] },
      { id: 'fleet-002', title: 'Gestión de Vehículos', duration: '40 min', xp: 70, topics: ['Agregar vehículos', 'Detalles', 'Seguros', 'Documentos'] },
      { id: 'fleet-003', title: 'Asignación de Vehículos', duration: '35 min', xp: 60, topics: ['Asignar conductores', 'Historial', 'Responsabilidades', 'Políticas'] },
      { id: 'fleet-004', title: 'Mantenimiento y Servicios', duration: '45 min', xp: 75, topics: ['Programar servicios', 'Registro', 'Proveedores', 'Alertas'] },
      { id: 'fleet-005', title: 'Control de Costos', duration: '40 min', xp: 70, topics: ['Combustible', 'Reparaciones', 'Seguros', 'TCO'] },
      { id: 'fleet-006', title: 'Contratos y Reportes', duration: '35 min', xp: 60, topics: ['Contratos', 'Leasing', 'Reportes', 'Análisis'] }
    ]
  },

  // ========================
  // SITIOS WEB
  // ========================
  website: {
    id: 'website',
    name: 'Sitio Web',
    icon: '🌐',
    color: 'from-accent-pink-500 to-accent-pink-600',
    category: 'Sitios Web',
    priority: 2,
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

  ecommerce: {
    id: 'ecommerce',
    name: 'eCommerce',
    icon: '🛍️',
    color: 'from-accent-pink-500 to-accent-red-600',
    category: 'Sitios Web',
    priority: 2,
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

  elearning: {
    id: 'elearning',
    name: 'eLearning',
    icon: '🎓',
    color: 'from-primary-500 to-accent-purple-600',
    category: 'Sitios Web',
    priority: 3,
    description: 'Plataforma de cursos y capacitación online',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'elearn-001', title: 'Crear Cursos', duration: '40 min', xp: 70, topics: ['Estructura', 'Contenido', 'Videos', 'Quizzes'] },
      { id: 'elearn-002', title: 'Gestionar Estudiantes', duration: '35 min', xp: 60, topics: ['Inscripciones', 'Progreso', 'Certificados', 'Reportes'] }
    ]
  },

  livechat: {
    id: 'livechat',
    name: 'Chat en Vivo',
    icon: '💬',
    color: 'from-accent-green-500 to-accent-green-600',
    category: 'Sitios Web',
    priority: 3,
    description: 'Atención al cliente en tiempo real',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'chat-001', title: 'Configurar Chat', duration: '30 min', xp: 55, topics: ['Canales', 'Operadores', 'Reglas', 'Chatbots'] },
      { id: 'chat-002', title: 'Atención y Reportes', duration: '35 min', xp: 60, topics: ['Conversaciones', 'Ratings', 'Comandos', 'Análisis'] }
    ]
  },

  // ========================
  // MARKETING
  // ========================
  email_marketing: {
    id: 'email_marketing',
    name: 'Email Marketing',
    icon: '📧',
    color: 'from-accent-pink-500 to-accent-pink-600',
    category: 'Marketing',
    priority: 2,
    description: 'Campañas de email masivo y automatización',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'email-001', title: 'Listas de Contactos', duration: '30 min', xp: 55, topics: ['Crear listas', 'Segmentación', 'Importación', 'Limpieza'] },
      { id: 'email-002', title: 'Crear Campañas', duration: '45 min', xp: 75, topics: ['Diseño', 'Templates', 'A/B Testing', 'Personalización'] },
      { id: 'email-003', title: 'Envío y Análisis', duration: '35 min', xp: 60, topics: ['Programación', 'Métricas', 'Blacklist', 'Optimización'] }
    ]
  },

  marketing_automation: {
    id: 'marketing_automation',
    name: 'Automatización Marketing',
    icon: '🤖',
    color: 'from-accent-purple-500 to-primary-600',
    category: 'Marketing',
    priority: 3,
    description: 'Automatización de campañas y nurturing',
    estimatedTime: '5 horas',
    difficulty: 'Avanzado',
    lessons: [
      { id: 'auto-001', title: 'Workflows de Marketing', duration: '50 min', xp: 85, topics: ['Triggers', 'Acciones', 'Condiciones', 'Timing'] },
      { id: 'auto-002', title: 'Segmentación Avanzada', duration: '40 min', xp: 70, topics: ['Filtros', 'Comportamiento', 'Scoring', 'Personalización'] },
      { id: 'auto-003', title: 'Medición y Optimización', duration: '35 min', xp: 60, topics: ['KPIs', 'Conversiones', 'ROI', 'Testing'] }
    ]
  },

  sms_marketing: {
    id: 'sms_marketing',
    name: 'SMS Marketing',
    icon: '📱',
    color: 'from-primary-500 to-accent-aqua-600',
    category: 'Marketing',
    priority: 3,
    description: 'Campañas de marketing por SMS',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'sms-001', title: 'Configurar SMS', duration: '25 min', xp: 45, topics: ['Proveedores', 'Créditos', 'Números', 'Cumplimiento'] },
      { id: 'sms-002', title: 'Enviar Campañas', duration: '30 min', xp: 55, topics: ['Mensajes', 'Listas', 'Programación', 'Análisis'] }
    ]
  },

  events: {
    id: 'events',
    name: 'Eventos',
    icon: '🎪',
    color: 'from-secondary-500 to-accent-red-600',
    category: 'Marketing',
    priority: 2,
    description: 'Organización y gestión de eventos',
    estimatedTime: '5 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'evt-001', title: 'Crear Eventos', duration: '40 min', xp: 70, topics: ['Configuración', 'Fechas', 'Ubicación', 'Capacidad'] },
      { id: 'evt-002', title: 'Tickets y Registros', duration: '45 min', xp: 75, topics: ['Tipos de ticket', 'Precios', 'Registro online', 'Check-in'] },
      { id: 'evt-003', title: 'Contenido y Agenda', duration: '35 min', xp: 60, topics: ['Tracks', 'Ponentes', 'Horarios', 'Materiales'] },
      { id: 'evt-004', title: 'Análisis Post-evento', duration: '30 min', xp: 55, topics: ['Asistencia', 'Revenue', 'Feedback', 'ROI'] }
    ]
  },

  surveys: {
    id: 'surveys',
    name: 'Encuestas',
    icon: '📋',
    color: 'from-accent-green-500 to-accent-green-600',
    category: 'Marketing',
    priority: 3,
    description: 'Creación y análisis de encuestas',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'surv-001', title: 'Crear Encuestas', duration: '30 min', xp: 55, topics: ['Preguntas', 'Lógica', 'Diseño', 'Puntuación'] },
      { id: 'surv-002', title: 'Distribución y Análisis', duration: '35 min', xp: 60, topics: ['Envío', 'Respuestas', 'Resultados', 'Reportes'] }
    ]
  },

  social_marketing: {
    id: 'social_marketing',
    name: 'Social Marketing',
    icon: '📣',
    color: 'from-accent-pink-500 to-accent-purple-600',
    category: 'Marketing',
    priority: 3,
    description: 'Gestión de redes sociales',
    estimatedTime: '3 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'social-001', title: 'Conectar Redes', duration: '30 min', xp: 55, topics: ['Facebook', 'Twitter', 'LinkedIn', 'Instagram'] },
      { id: 'social-002', title: 'Publicaciones y Campañas', duration: '35 min', xp: 60, topics: ['Crear posts', 'Programar', 'Engagement', 'Análisis'] }
    ]
  },

  // ========================
  // SERVICIOS
  // ========================
  project: {
    id: 'project',
    name: 'Proyectos',
    icon: '📁',
    color: 'from-neutral-500 to-neutral-600',
    category: 'Servicios',
    priority: 2,
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

  timesheets: {
    id: 'timesheets',
    name: 'Partes de Horas',
    icon: '⏱️',
    color: 'from-primary-600 to-primary-700',
    category: 'Servicios',
    priority: 3,
    description: 'Registro de horas trabajadas en proyectos',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'ts-001', title: 'Registrar Tiempo', duration: '25 min', xp: 45, topics: ['Crear entradas', 'Proyectos', 'Tareas', 'Timer'] },
      { id: 'ts-002', title: 'Facturación y Reportes', duration: '30 min', xp: 55, topics: ['Tarifas', 'Facturación', 'Análisis', 'Productividad'] }
    ]
  },

  helpdesk: {
    id: 'helpdesk',
    name: 'Mesa de Ayuda',
    icon: '🎧',
    color: 'from-accent-red-500 to-accent-pink-600',
    category: 'Servicios',
    priority: 2,
    description: 'Sistema de tickets de soporte',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'help-001', title: 'Configurar Helpdesk', duration: '35 min', xp: 60, topics: ['Equipos', 'Etapas', 'SLAs', 'Asignación'] },
      { id: 'help-002', title: 'Gestionar Tickets', duration: '40 min', xp: 70, topics: ['Crear tickets', 'Prioridades', 'Resolución', 'Comunicación'] },
      { id: 'help-003', title: 'Help Center', duration: '30 min', xp: 55, topics: ['Base conocimiento', 'FAQs', 'Self-service', 'Portal'] },
      { id: 'help-004', title: 'Métricas y Satisfacción', duration: '30 min', xp: 55, topics: ['SLA cumplimiento', 'Ratings', 'Reportes', 'Mejora'] }
    ]
  },

  field_service: {
    id: 'field_service',
    name: 'Servicio de Campo',
    icon: '🔨',
    color: 'from-secondary-500 to-secondary-600',
    category: 'Servicios',
    priority: 3,
    description: 'Gestión de servicios en sitio del cliente',
    estimatedTime: '3 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'fs-001', title: 'Tareas de Campo', duration: '35 min', xp: 60, topics: ['Crear tareas', 'Asignación', 'Ubicación', 'Materiales'] },
      { id: 'fs-002', title: 'Planificación y Ejecución', duration: '40 min', xp: 70, topics: ['Rutas', 'Calendario', 'Worksheets', 'Firma'] }
    ]
  },

  planning: {
    id: 'planning',
    name: 'Planificación',
    icon: '📅',
    color: 'from-accent-purple-500 to-accent-purple-600',
    category: 'Servicios',
    priority: 3,
    description: 'Planificación de recursos y turnos',
    estimatedTime: '3 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'plan-001', title: 'Configurar Roles', duration: '30 min', xp: 55, topics: ['Roles', 'Habilidades', 'Disponibilidad', 'Restricciones'] },
      { id: 'plan-002', title: 'Crear Planificaciones', duration: '40 min', xp: 70, topics: ['Turnos', 'Asignación', 'Conflictos', 'Publicación'] }
    ]
  },

  // ========================
  // PRODUCTIVIDAD
  // ========================
  documents: {
    id: 'documents',
    name: 'Documentos',
    icon: '📄',
    color: 'from-primary-500 to-primary-600',
    category: 'Productividad',
    priority: 3,
    description: 'Gestión documental centralizada',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'doc-001', title: 'Organizar Documentos', duration: '30 min', xp: 55, topics: ['Workspaces', 'Carpetas', 'Tags', 'Permisos'] },
      { id: 'doc-002', title: 'Workflows y Automatización', duration: '35 min', xp: 60, topics: ['Reglas', 'Aprobaciones', 'Acciones', 'Integración'] }
    ]
  },

  sign: {
    id: 'sign',
    name: 'Firma Digital',
    icon: '✍️',
    color: 'from-accent-green-600 to-accent-green-700',
    category: 'Productividad',
    priority: 3,
    description: 'Firma electrónica de documentos',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'sign-001', title: 'Crear Plantillas', duration: '30 min', xp: 55, topics: ['Campos', 'Roles', 'Flujo', 'Diseño'] },
      { id: 'sign-002', title: 'Enviar y Firmar', duration: '30 min', xp: 55, topics: ['Envío', 'Firmas', 'Seguimiento', 'Archivo'] }
    ]
  },

  spreadsheet: {
    id: 'spreadsheet',
    name: 'Hojas de Cálculo',
    icon: '📊',
    color: 'from-accent-green-500 to-accent-green-600',
    category: 'Productividad',
    priority: 3,
    description: 'Hojas de cálculo integradas con Odoo',
    estimatedTime: '3 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'sheet-001', title: 'Crear Spreadsheets', duration: '35 min', xp: 60, topics: ['Datos Odoo', 'Fórmulas', 'Pivots', 'Filtros'] },
      { id: 'sheet-002', title: 'Visualización', duration: '30 min', xp: 55, topics: ['Gráficos', 'Formato', 'Reportes', 'Compartir'] }
    ]
  },

  knowledge: {
    id: 'knowledge',
    name: 'Base de Conocimiento',
    icon: '📚',
    color: 'from-primary-500 to-primary-600',
    category: 'Productividad',
    priority: 3,
    description: 'Wiki empresarial y documentación',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'know-001', title: 'Crear Artículos', duration: '30 min', xp: 55, topics: ['Estructura', 'Contenido', 'Media', 'Links'] },
      { id: 'know-002', title: 'Organización y Permisos', duration: '25 min', xp: 45, topics: ['Categorías', 'Acceso', 'Búsqueda', 'Favoritos'] }
    ]
  },

  discuss: {
    id: 'discuss',
    name: 'Comunicación Interna',
    icon: '💬',
    color: 'from-accent-purple-500 to-accent-pink-600',
    category: 'Productividad',
    priority: 2,
    description: 'Chat y comunicación del equipo',
    estimatedTime: '2 horas',
    difficulty: 'Básico',
    lessons: [
      { id: 'disc-001', title: 'Canales y Mensajes', duration: '25 min', xp: 45, topics: ['Canales', 'Grupos', 'Mensajes directos', 'Menciones'] },
      { id: 'disc-002', title: 'Chatter y Actividades', duration: '30 min', xp: 55, topics: ['Chatter', 'Actividades', 'Seguimiento', 'Notificaciones'] }
    ]
  },

  voip: {
    id: 'voip',
    name: 'VoIP',
    icon: '📞',
    color: 'from-accent-green-600 to-accent-green-700',
    category: 'Productividad',
    priority: 3,
    description: 'Sistema de telefonía integrado',
    estimatedTime: '3 horas',
    difficulty: 'Avanzado',
    lessons: [
      { id: 'voip-001', title: 'Configurar VoIP', duration: '40 min', xp: 70, topics: ['Proveedores', 'Usuarios', 'Extensiones', 'Colas'] },
      { id: 'voip-002', title: 'Llamadas y Funciones', duration: '35 min', xp: 60, topics: ['Hacer llamadas', 'Historial', 'Grabación', 'Reportes'] }
    ]
  },

  whatsapp: {
    id: 'whatsapp',
    name: 'WhatsApp',
    icon: '📲',
    color: 'from-accent-green-500 to-accent-green-600',
    category: 'Productividad',
    priority: 3,
    description: 'Integración con WhatsApp Business',
    estimatedTime: '2 horas',
    difficulty: 'Intermedio',
    lessons: [
      { id: 'wa-001', title: 'Configurar WhatsApp', duration: '30 min', xp: 55, topics: ['API', 'Templates', 'Números', 'Permisos'] },
      { id: 'wa-002', title: 'Enviar Mensajes', duration: '35 min', xp: 60, topics: ['Conversaciones', 'Templates', 'Automatización', 'Reportes'] }
    ]
  },

  // ========================
  // STUDIO Y PERSONALIZACIÓN
  // ========================
  studio: {
    id: 'studio',
    name: 'Studio',
    icon: '🎨',
    color: 'from-accent-purple-600 to-accent-purple-700',
    category: 'Personalización',
    priority: 3,
    description: 'Personalización sin código de Odoo',
    estimatedTime: '8 horas',
    difficulty: 'Avanzado',
    lessons: [
      { id: 'stud-001', title: 'Personalizar Vistas', duration: '50 min', xp: 85, topics: ['Campos', 'Widgets', 'Layouts', 'Visibilidad'] },
      { id: 'stud-002', title: 'Automatizaciones', duration: '45 min', xp: 75, topics: ['Reglas', 'Triggers', 'Acciones', 'Webhooks'] },
      { id: 'stud-003', title: 'Reportes PDF', duration: '40 min', xp: 70, topics: ['Plantillas', 'Datos', 'Formato', 'Impresión'] },
      { id: 'stud-004', title: 'Apps Personalizadas', duration: '50 min', xp: 85, topics: ['Modelos', 'Menús', 'Seguridad', 'Publicación'] }
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
