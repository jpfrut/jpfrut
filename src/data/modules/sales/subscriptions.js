export const subscriptions = {
  id: 'subscriptions',
  name: 'Subscriptions',
  icon: '🔄',
  color: 'from-primary-500 to-accent-aqua-500',
  category: 'sales',
  priority: 4,
  description: 'Gestiona modelos de suscripción, renovaciones automáticas y tracking de MRR/ARR',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'subs-001',
      title: 'Modelos de Suscripción',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Tipos de suscripciones', 'Configuración de productos', 'Periodicidad', 'Pricing models']
    },
    {
      id: 'subs-002',
      title: 'Renovaciones Automáticas',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Auto-renewal', 'Billing cycles', 'Prorating', 'Trial periods', 'Configuración de pagos']
    },
    {
      id: 'subs-003',
      title: 'Upselling y Cross-selling',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Upgrades', 'Add-ons', 'Bundles', 'Estrategias de crecimiento']
    },
    {
      id: 'subs-004',
      title: 'MRR/ARR Tracking',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['Monthly Recurring Revenue', 'Annual Recurring Revenue', 'Churn', 'Métricas SaaS', 'Reportes']
    },
    {
      id: 'subs-005',
      title: 'Gestión de Cancelaciones',
      duration: '45 min',
      xp: 75,
      difficulty: 'Intermedio',
      topics: ['Churn prevention', 'Retention strategies', 'Downgrade options', 'Feedback loops']
    }
  ]
}
