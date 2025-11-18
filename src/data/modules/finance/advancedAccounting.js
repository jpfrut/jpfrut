export const advancedAccounting = {
  id: 'advanced-accounting',
  name: 'Advanced Accounting',
  icon: '💰',
  color: 'from-accent-green-600 to-accent-aqua-600',
  category: 'Finance',
  priority: 5,
  description: 'Contabilidad avanzada: multi-moneda, consolidación y compliance',
  estimatedTime: '6 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'adv-acc-001',
      title: 'Multi-moneda Avanzado',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Multi-currency', 'Exchange rates', 'Unrealized gains/losses', 'Revaluation', 'Reporting']
    },
    {
      id: 'adv-acc-002',
      title: 'Consolidación Contable',
      duration: '75 min',
      xp: 130,
      difficulty: 'Avanzado',
      topics: ['Consolidation', 'Inter-company eliminations', 'Group reporting', 'IFRS', 'GAAP']
    },
    {
      id: 'adv-acc-003',
      title: 'Cash Basis Taxes',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Cash basis', 'Accrual', 'Tax reporting', 'Mixed basis', 'Adjustments']
    },
    {
      id: 'adv-acc-004',
      title: 'Tax Withholding',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Withholding taxes', 'Vendor withholding', 'Certificates', 'Reporting', 'Compliance']
    },
    {
      id: 'adv-acc-005',
      title: 'AvaTax Integration',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['AvaTax', 'Automated tax calculation', 'US sales tax', 'Integration', 'Reporting']
    },
    {
      id: 'adv-acc-006',
      title: 'Fixed Assets Management',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Asset lifecycle', 'Depreciation methods', 'Disposal', 'Reports', 'Book values']
    }
  ]
}
