export const rental = {
  id: 'rental',
  name: 'Rental',
  icon: '🏠',
  color: 'from-primary-500 to-accent-purple-600',
  category: 'sales',
  priority: 6,
  description: 'Gestiona alquileres de productos, depósitos y devoluciones',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'rental-001',
      title: 'Gestión de Alquileres',
      duration: '60 min',
      xp: 100,
      difficulty: 'Básico',
      topics: ['Rental products', 'Pricing', 'Duration', 'Availability', 'Reservations']
    },
    {
      id: 'rental-002',
      title: 'Depósitos y Garantías',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Security deposits', 'Damage fees', 'Refunds', 'Payment holds']
    },
    {
      id: 'rental-003',
      title: 'Devoluciones y Pickup',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Return process', 'Pickup', 'Inspection', 'Late fees', 'Extensions']
    },
    {
      id: 'rental-004',
      title: 'Analytics de Rental',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Utilization rates', 'Revenue', 'Demand forecasting', 'Reporting']
    }
  ]
}
