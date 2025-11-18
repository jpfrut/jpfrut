export const accounting = {
  id: 'accounting',
  name: 'Contabilidad',
  icon: '💰',
  color: 'from-accent-green-500 to-accent-green-600',
  category: 'Finance',
  priority: 1,
  description: 'Gestión contable completa: facturas, pagos, reportes financieros y conciliación bancaria',
  estimatedTime: '8 horas',
  difficulty: 'Intermedio',
  lessons: [
    { id: 'acc-001', title: 'Introducción a la Contabilidad en Odoo', duration: '30 min', xp: 50, topics: ['Configuración inicial', 'Plan de cuentas', 'Diarios', 'Períodos fiscales'] },
    { id: 'acc-002', title: 'Gestión de Facturas de Cliente', duration: '45 min', xp: 75, topics: ['Crear facturas', 'Notas de crédito', 'Pagos', 'Seguimiento'] },
    { id: 'acc-003', title: 'Gestión de Facturas de Proveedor', duration: '45 min', xp: 75, topics: ['Registrar facturas', 'Validación', 'Pagos', 'Control de gastos'] },
    { id: 'acc-004', title: 'Conciliación Bancaria', duration: '60 min', xp: 100, topics: ['Importar extractos', 'Conciliación automática', 'Manual', 'Diferencias'] },
    { id: 'acc-005', title: 'Reportes Financieros', duration: '45 min', xp: 75, topics: ['Balance', 'Estado de resultados', 'Flujo de caja', 'Personalizados'] },
    { id: 'acc-006', title: 'Impuestos y Declaraciones', duration: '60 min', xp: 100, topics: ['Configuración IVA', 'Retenciones', 'Reportes fiscales', 'Declaraciones'] },
    { id: 'acc-007', title: 'Alta Manual de Cuentas Bancarias en México', duration: '75 min', xp: 125, topics: ['Configuración sin tokens', 'Plan de cuentas para bancos', 'Diarios bancarios', 'Registro manual de movimientos', 'Dashboard y Balance General'] }
  ]
}
