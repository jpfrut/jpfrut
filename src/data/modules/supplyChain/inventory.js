export const inventory = {
  id: 'inventory',
  name: 'Inventario',
  icon: '📦',
  color: 'from-secondary-500 to-secondary-600',
  category: 'Supply Chain',
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
}
