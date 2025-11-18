export const advancedSales = {
  id: 'advanced-sales',
  name: 'Advanced Sales Features',
  icon: '🎯',
  color: 'from-primary-600 to-accent-purple-600',
  category: 'Sales',
  priority: 5,
  description: 'Domina características avanzadas de ventas: variantes, pricelists, devoluciones y gift cards',
  estimatedTime: '4 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'adv-sales-001',
      title: 'Product Variants Avanzado',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Configurator', 'Atributos', 'Valores', 'Matriz de variantes', 'Pricing por variante']
    },
    {
      id: 'adv-sales-002',
      title: 'Pricelists Complejos',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['Reglas de precio', 'Descuentos por volumen', 'Pricing dinámico', 'Multi-moneda']
    },
    {
      id: 'adv-sales-003',
      title: 'Returns & Refunds',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Proceso de devoluciones', 'Reverse logistics', 'Reembolsos', 'Credit notes', 'Políticas']
    },
    {
      id: 'adv-sales-004',
      title: 'Gift Cards y eWallets',
      duration: '45 min',
      xp: 75,
      difficulty: 'Intermedio',
      topics: ['Gift cards', 'eWallets', 'Loyalty programs', 'Puntos', 'Cupones']
    }
  ]
}
