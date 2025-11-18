export const paymentProviders = {
  id: 'payment-providers',
  name: 'Payment Providers',
  icon: '💳',
  color: 'from-accent-green-500 to-accent-aqua-600',
  category: 'Finance',
  priority: 3,
  description: 'Configura pasarelas de pago, integra Stripe, PayPal y otros proveedores',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'payment-001',
      title: 'Configurar Pasarelas de Pago',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Overview de payment providers', 'Tipos de pasarelas', 'Fees', 'Configuración básica', 'Testing mode']
    },
    {
      id: 'payment-002',
      title: 'Stripe Integration',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Configurar Stripe', 'API keys', 'Payment methods', 'Webhooks', '3D Secure', 'Subscriptions']
    },
    {
      id: 'payment-003',
      title: 'PayPal y Otros Providers',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['PayPal setup', 'Adyen', 'Authorize.net', 'Mercado Pago', 'Localización']
    },
    {
      id: 'payment-004',
      title: 'SEPA Direct Debit y Wire Transfer',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['SEPA configuration', 'Mandates', 'Wire transfers', 'Bank reconciliation', 'Europa']
    }
  ]
}
