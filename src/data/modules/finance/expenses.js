export const expenses = {
  id: 'expenses',
  name: 'Gastos',
  icon: '🧾',
  color: 'from-accent-red-500 to-accent-pink-600',
  category: 'finance',
  priority: 2,
  description: 'Control de gastos de empleados: registro, aprobación y reembolso',
  estimatedTime: '2 horas',
  difficulty: 'Básico',
  lessons: [
    { id: 'exp-001', title: 'Configuración de Categorías de Gastos', duration: '20 min', xp: 40, difficulty: 'Básico', topics: ['Tipos de gastos', 'Políticas', 'Límites', 'Aprobaciones'] },
    { id: 'exp-002', title: 'Registrar y Enviar Gastos', duration: '25 min', xp: 50, difficulty: 'Básico', topics: ['Crear gastos', 'Adjuntar recibos', 'Reportes de gastos', 'Enviar aprobación'] },
    { id: 'exp-003', title: 'Aprobar y Reembolsar', duration: '30 min', xp: 60, difficulty: 'Intermedio', topics: ['Flujo de aprobación', 'Reembolsos', 'Refacturación', 'Análisis'] }
  ]
}
