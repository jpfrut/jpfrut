export const ecommerce = {
  id: 'ecommerce',
  name: 'Tienda Online',
  icon: '🛍️',
  color: 'from-accent-pink-500 to-accent-red-600',
  category: 'Sales',
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
}
