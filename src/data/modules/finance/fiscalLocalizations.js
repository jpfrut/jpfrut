export const fiscalLocalizations = {
  id: 'fiscal-localizations',
  name: 'Fiscal Localizations - México',
  icon: '🌍',
  color: 'from-accent-green-500 to-accent-red-600',
  category: 'Finance',
  priority: 4,
  description: 'Facturación electrónica CFDI, SAT y cumplimiento fiscal para México',
  estimatedTime: '5 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'fiscal-mx-001',
      title: 'Localización Fiscal México',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Overview localización MX', 'Requisitos SAT', 'Configuración inicial', 'Chart of accounts México']
    },
    {
      id: 'fiscal-mx-002',
      title: 'CFDI y Facturación Electrónica',
      duration: '70 min',
      xp: 120,
      difficulty: 'Avanzado',
      topics: ['CFDI 4.0', 'Timbrado', 'PAC', 'Certificados digitales', 'XML generation', 'Complementos']
    },
    {
      id: 'fiscal-mx-003',
      title: 'SAT Configuration',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Catálogos SAT', 'Uso CFDI', 'Formas de pago', 'Métodos de pago', 'Régimen fiscal']
    },
    {
      id: 'fiscal-mx-004',
      title: 'Impuestos México',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['IVA', 'ISR', 'Retenciones', 'IEPS', 'Cálculos automáticos', 'Reportes fiscales']
    },
    {
      id: 'fiscal-mx-005',
      title: 'Reportes Fiscales México',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['DIOT', 'Balanza de comprobación', 'Anexo 24', 'Contabilidad electrónica', 'XML exports']
    }
  ]
}
