export const documents = {
  id: 'documents',
  name: 'Documents',
  icon: '📄',
  color: 'from-primary-500 to-accent-aqua-600',
  category: 'Productivity',
  priority: 1,
  description: 'Gestiona documentos, workflows automatizados y colaboración en equipo',
  estimatedTime: '5 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'doc-001',
      title: 'Document Management Básico',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Upload documents', 'Carpetas', 'Tags', 'Search', 'Versiones']
    },
    {
      id: 'doc-002',
      title: 'Workflows y Automatización',
      duration: '65 min',
      xp: 110,
      difficulty: 'Intermedio',
      topics: ['Document workflows', 'Actions', 'Auto-tagging', 'OCR', 'Smart buttons']
    },
    {
      id: 'doc-003',
      title: 'Tags, Folders y Organización',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Sistema de tags', 'Jerarquía', 'Workspaces', 'Permisos', 'Templates']
    },
    {
      id: 'doc-004',
      title: 'Sharing y Colaboración',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Share links', 'Access rights', 'External users', 'Comments', 'Approvals']
    },
    {
      id: 'doc-005',
      title: 'Integración con Módulos de Odoo',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Invoices', 'HR documents', 'Contracts', 'Projects', 'CRM attachments']
    }
  ]
}
