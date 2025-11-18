export const repairs = {
  id: 'repairs',
  name: 'Repairs',
  icon: '🛠️',
  color: 'from-secondary-600 to-accent-red-600',
  category: 'supplyChain',
  priority: 7,
  description: 'Gestiona órdenes de reparación, repuestos y garantías',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'repair-001',
      title: 'Repair Orders',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Create repair orders', 'Diagnosis', 'Quotation', 'Approval', 'Workflow']
    },
    {
      id: 'repair-002',
      title: 'Spare Parts Management',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Parts catalog', 'Stock', 'Operations', 'Consumption', 'Invoicing', 'Labor costs']
    },
    {
      id: 'repair-003',
      title: 'Warranty Tracking',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Warranty periods', 'Coverage', 'Claims', 'Vendor warranties', 'RMA', 'Tracking']
    }
  ]
}
