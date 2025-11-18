export const project = {
  id: 'project',
  name: 'Proyectos',
  icon: '📁',
  color: 'from-neutral-500 to-neutral-600',
  category: 'Services',
  priority: 1,
  description: 'Gestión de proyectos y tareas',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    { id: 'proj-001', title: 'Crear Proyectos', duration: '35 min', xp: 60, topics: ['Configuración', 'Etapas', 'Equipo', 'Fechas'] },
    { id: 'proj-002', title: 'Gestión de Tareas', duration: '45 min', xp: 75, topics: ['Crear tareas', 'Asignación', 'Dependencias', 'Subtareas'] },
    { id: 'proj-003', title: 'Seguimiento y Control', duration: '40 min', xp: 70, topics: ['Kanban', 'Gantt', 'Tiempos', 'Burndown'] },
    { id: 'proj-004', title: 'Rentabilidad', duration: '30 min', xp: 55, topics: ['Costos', 'Ingresos', 'Márgenes', 'Reportes'] }
  ]
}
