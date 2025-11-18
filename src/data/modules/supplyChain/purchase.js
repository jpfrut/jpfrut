export const purchase = {
  id: 'purchase',
  name: 'Compras',
  icon: '🛒',
  color: 'from-primary-500 to-primary-600',
  category: 'supplyChain',
  priority: 2,
  description: 'Gestión de compras: proveedores, órdenes y control de costos',
  estimatedTime: '4 horas',
  difficulty: 'Básico',
  lessons: [
    { id: 'pur-001', title: 'Configuración de Proveedores', duration: '35 min', xp: 60, difficulty: 'Intermedio', topics: ['Ficha proveedor', 'Precios', 'Condiciones', 'Evaluación'] },
    { id: 'pur-002', title: 'Solicitudes de Cotización', duration: '40 min', xp: 70, difficulty: 'Intermedio', topics: ['Crear RFQ', 'Comparar ofertas', 'Licitaciones', 'Aprobaciones'] },
    { id: 'pur-003', title: 'Órdenes de Compra', duration: '40 min', xp: 70, difficulty: 'Intermedio', topics: ['Confirmar órdenes', 'Recepciones', 'Facturas', 'Control'] },
    { id: 'pur-004', title: 'Análisis de Compras', duration: '30 min', xp: 55, difficulty: 'Básico', topics: ['Reportes', 'Tendencias', 'Costos', 'KPIs'] }
  ]
}
