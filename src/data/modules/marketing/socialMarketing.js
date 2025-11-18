export const socialMarketing = {
  id: 'social-marketing',
  name: 'Social Marketing',
  icon: '📱',
  color: 'from-accent-red-500 to-accent-purple-600',
  category: 'Marketing',
  priority: 6,
  description: 'Gestiona redes sociales, programa posts y analiza engagement desde Odoo',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'social-001',
      title: 'Configurar Cuentas Sociales',
      duration: '45 min',
      xp: 75,
      difficulty: 'Básico',
      topics: ['Conectar Facebook', 'Conectar Instagram', 'Twitter/X', 'LinkedIn', 'Permisos']
    },
    {
      id: 'social-002',
      title: 'Programación de Posts',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Crear posts', 'Calendario editorial', 'Programación', 'Contenido multimedia']
    },
    {
      id: 'social-003',
      title: 'Campañas Multi-plataforma',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Estrategia cross-platform', 'Adaptación de contenido', 'Hashtags', 'Engagement']
    },
    {
      id: 'social-004',
      title: 'Analytics Social',
      duration: '50 min',
      xp: 85,
      difficulty: 'Avanzado',
      topics: ['Métricas de engagement', 'Reach', 'Conversiones', 'ROI social', 'Reportes']
    }
  ]
}
