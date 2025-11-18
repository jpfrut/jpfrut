export const integrations = {
  id: 'integrations',
  name: 'Integrations',
  icon: '🔗',
  color: 'from-neutral-500 to-primary-600',
  category: 'Settings',
  priority: 3,
  description: 'Integra Odoo con aplicaciones de terceros, APIs y webhooks',
  estimatedTime: '4 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'integ-001',
      title: 'Third-party Apps',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['App marketplace', 'Install apps', 'Configuration', 'Dependencies', 'Updates']
    },
    {
      id: 'integ-002',
      title: 'API Management',
      duration: '70 min',
      xp: 120,
      difficulty: 'Avanzado',
      topics: ['External API', 'XML-RPC', 'JSON-RPC', 'REST endpoints', 'Authentication', 'Rate limits']
    },
    {
      id: 'integ-003',
      title: 'Webhooks',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Configure webhooks', 'Event triggers', 'Payload', 'Security', 'Monitoring']
    },
    {
      id: 'integ-004',
      title: 'Common Integrations',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Shopify', 'WooCommerce', 'Amazon', 'Payment providers', 'Shipping carriers', 'CRM tools']
    }
  ]
}
