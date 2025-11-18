export const ecommerceIntegrations = {
  id: 'ecommerce-integrations',
  name: 'Ecommerce Integrations',
  icon: '🔌',
  color: 'from-primary-600 to-accent-pink-600',
  category: 'sales',
  priority: 7,
  description: 'Integra con Amazon, Shopee, Mercado Libre y otros marketplaces',
  estimatedTime: '4 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'ecom-int-001',
      title: 'Amazon Connector',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Amazon MWS', 'Product sync', 'Order import', 'FBA', 'Inventory sync']
    },
    {
      id: 'ecom-int-002',
      title: 'Shopee Integration',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Shopee API', 'Listings', 'Orders', 'Shipping', 'Returns']
    },
    {
      id: 'ecom-int-003',
      title: 'Mercado Libre',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['MercadoLibre API', 'Publications', 'Questions', 'Logistics', 'Payments']
    },
    {
      id: 'ecom-int-004',
      title: 'Marketplace Best Practices',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Multi-channel', 'Inventory management', 'Pricing strategies', 'Fulfillment']
    }
  ]
}
