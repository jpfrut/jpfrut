export const salesCrm = {
  id: 'sales',
  name: 'Ventas y CRM',
  icon: '📊',
  color: 'from-primary-500 to-primary-600',
  category: 'sales',
  priority: 1,
  description: 'Gestión completa del ciclo de ventas: leads, cotizaciones, pedidos, facturación y análisis',
  estimatedTime: '8 horas',
  difficulty: 'Básico',
  lessons: [
    { id: 'sales-001', title: 'Configuración Inicial de Ventas', duration: '30 min', xp: 50, difficulty: 'Básico', topics: ['Productos', 'Listas de precios', 'Equipos de venta', 'Plantillas'] },
    { id: 'sales-002', title: 'Gestión de Cotizaciones', duration: '45 min', xp: 75, difficulty: 'Intermedio', topics: ['Crear cotizaciones', 'Productos opcionales', 'Plantillas', 'Envío'] },
    { id: 'sales-003', title: 'Pedidos de Venta', duration: '45 min', xp: 75, difficulty: 'Intermedio', topics: ['Confirmar pedidos', 'Entrega', 'Facturación', 'Seguimiento'] },
    { id: 'sales-004', title: 'Facturación desde Ventas', duration: '40 min', xp: 70, difficulty: 'Intermedio', topics: ['Métodos de facturación', 'Anticipos', 'Hitos', 'Gastos'] },
    { id: 'sales-005', title: 'CRM: Pipeline de Ventas', duration: '45 min', xp: 75, difficulty: 'Intermedio', topics: ['Etapas', 'Equipos de venta', 'Reglas de asignación', 'Probabilidades'] },
    { id: 'sales-006', title: 'CRM: Gestión de Leads', duration: '40 min', xp: 70, difficulty: 'Intermedio', topics: ['Capturar leads', 'Formularios web', 'Calificación', 'Conversión'] },
    { id: 'sales-007', title: 'CRM: Oportunidades y Seguimiento', duration: '45 min', xp: 75, difficulty: 'Intermedio', topics: ['Convertir leads', 'Actividades', 'Cotizaciones', 'Cierre'] },
    { id: 'sales-008', title: 'Reportes y Análisis de Ventas', duration: '35 min', xp: 60, difficulty: 'Intermedio', topics: ['Dashboard', 'Métricas', 'Pronósticos', 'KPIs'] }
  ]
}
