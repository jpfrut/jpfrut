export const pos = {
  id: 'pos',
  name: 'Punto de Venta',
  icon: '🏪',
  color: 'from-secondary-500 to-secondary-600',
  category: 'Sales',
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
}
