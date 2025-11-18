export const helpdesk = {
  id: 'helpdesk',
  name: 'Mesa de Ayuda',
  icon: '🎧',
  color: 'from-accent-red-500 to-accent-pink-600',
  category: 'services',
  priority: 2,
  description: 'Sistema de tickets de soporte al cliente',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    { id: 'help-001', title: 'Configurar Helpdesk', duration: '35 min', xp: 60, difficulty: 'Intermedio', topics: ['Equipos', 'Etapas', 'SLAs', 'Asignación'] },
    { id: 'help-002', title: 'Gestionar Tickets', duration: '40 min', xp: 70, difficulty: 'Intermedio', topics: ['Crear tickets', 'Prioridades', 'Resolución', 'Comunicación'] },
    { id: 'help-003', title: 'Help Center', duration: '30 min', xp: 55, difficulty: 'Básico', topics: ['Base conocimiento', 'FAQs', 'Self-service', 'Portal'] },
    { id: 'help-004', title: 'Métricas y Satisfacción', duration: '30 min', xp: 55, difficulty: 'Básico', topics: ['SLA cumplimiento', 'Ratings', 'Reportes', 'Mejora'] }
  ]
}
