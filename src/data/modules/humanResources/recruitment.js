export const recruitment = {
  id: 'recruitment',
  name: 'Recruitment',
  icon: '🎯',
  color: 'from-accent-purple-500 to-accent-pink-600',
  category: 'Human Resources',
  priority: 5,
  description: 'Gestiona el proceso completo de reclutamiento desde job postings hasta onboarding',
  estimatedTime: '6 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'recruit-001',
      title: 'Job Postings',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Crear vacantes', 'Job descriptions', 'Publicación multi-canal', 'Website careers']
    },
    {
      id: 'recruit-002',
      title: 'Applicant Tracking System (ATS)',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Pipeline de candidatos', 'Stages', 'Filtros', 'Scoring', 'Notas colaborativas']
    },
    {
      id: 'recruit-003',
      title: 'Interview Scheduling',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Agendar entrevistas', 'Calendario', 'Invitaciones', 'Feedback forms', 'Evaluaciones']
    },
    {
      id: 'recruit-004',
      title: 'Offer Management',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['Templates de ofertas', 'Aprobaciones', 'Negociación', 'Firma digital', 'Aceptación']
    },
    {
      id: 'recruit-005',
      title: 'Onboarding Integration',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Proceso de onboarding', 'Documentación', 'Equipamiento', 'Training', 'First day']
    },
    {
      id: 'recruit-006',
      title: 'Recruitment Analytics',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['Time to hire', 'Cost per hire', 'Source effectiveness', 'Funnel metrics', 'Reportes']
    }
  ]
}
