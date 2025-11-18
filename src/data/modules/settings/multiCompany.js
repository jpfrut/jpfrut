export const multiCompany = {
  id: 'multi-company',
  name: 'Multi-company',
  icon: '🏢',
  color: 'from-neutral-600 to-accent-aqua-600',
  category: 'Settings',
  priority: 2,
  description: 'Configura y gestiona múltiples empresas en una sola instancia de Odoo',
  estimatedTime: '4 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'multi-001',
      title: 'Company Setup',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Create companies', 'Company data', 'Logos', 'Currency', 'Fiscalidad']
    },
    {
      id: 'multi-002',
      title: 'Inter-company Transactions',
      duration: '70 min',
      xp: 120,
      difficulty: 'Avanzado',
      topics: ['Inter-company sales', 'Inter-company purchases', 'Invoicing', 'Automated rules', 'Pricing']
    },
    {
      id: 'multi-003',
      title: 'Consolidation',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Financial consolidation', 'Reporting across companies', 'Multi-currency', 'Analytics']
    },
    {
      id: 'multi-004',
      title: 'User Access por Empresa',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Company-specific access', 'Shared users', 'Data isolation', 'Switching companies', 'Permissions']
    }
  ]
}
