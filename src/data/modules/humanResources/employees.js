export const employees = {
  id: 'employees',
  name: 'Empleados',
  icon: '👥',
  color: 'from-primary-500 to-primary-600',
  category: 'humanResources',
  priority: 1,
  description: 'Gestión de información y ciclo de vida del empleado',
  estimatedTime: '3 horas',
  difficulty: 'Básico',
  lessons: [
    { id: 'emp-001', title: 'Crear Empleados', duration: '30 min', xp: 55, difficulty: 'Básico', topics: ['Ficha empleado', 'Información personal', 'Contratos', 'Documentos'] },
    { id: 'emp-002', title: 'Departamentos y Estructura', duration: '25 min', xp: 45, difficulty: 'Básico', topics: ['Departamentos', 'Jerarquía', 'Reportes', 'Organigramas'] },
    { id: 'emp-003', title: 'Onboarding y Offboarding', duration: '35 min', xp: 60, difficulty: 'Intermedio', topics: ['Planes', 'Tareas', 'Documentos', 'Equipamiento'] }
  ]
}
