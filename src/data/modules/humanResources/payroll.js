export const payroll = {
  id: 'payroll',
  name: 'Payroll',
  icon: '💵',
  color: 'from-accent-green-500 to-accent-aqua-600',
  category: 'Human Resources',
  priority: 3,
  description: 'Gestiona nóminas, estructuras salariales y cálculos de impuestos de forma automatizada',
  estimatedTime: '7 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'payroll-001',
      title: 'Introducción a Nómina en Odoo',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Overview de Payroll', 'Conceptos básicos', 'Flujo de nómina', 'Configuración inicial']
    },
    {
      id: 'payroll-002',
      title: 'Estructuras Salariales',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Salary structures', 'Categorías', 'Reglas salariales', 'Percepciones y deducciones']
    },
    {
      id: 'payroll-003',
      title: 'Work Entries',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Captura de tiempo', 'Work entries', 'Horas extras', 'Ausencias', 'Validación']
    },
    {
      id: 'payroll-004',
      title: 'Cálculo de Nómina',
      duration: '70 min',
      xp: 120,
      difficulty: 'Avanzado',
      topics: ['Batch processing', 'Cálculos automáticos', 'Validaciones', 'Ajustes', 'Excepciones']
    },
    {
      id: 'payroll-005',
      title: 'Payslips y Recibos',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Generar payslips', 'Reportes', 'Distribución', 'Portal del empleado']
    },
    {
      id: 'payroll-006',
      title: 'Impuestos y Deducciones',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['ISR', 'IMSS', 'Retenciones', 'Cálculo de impuestos', 'Compliance']
    },
    {
      id: 'payroll-007',
      title: 'Nómina México (Localización)',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['CFDI Nómina', 'Timbrado', 'SAT', 'Reportes fiscales México', 'Dispersión bancaria']
    }
  ]
}
