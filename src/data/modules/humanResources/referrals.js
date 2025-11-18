export const referrals = {
  id: 'referrals',
  name: 'Referrals',
  icon: '🤝',
  color: 'from-accent-purple-500 to-accent-pink-600',
  category: 'humanResources',
  priority: 9,
  description: 'Programa de referencias de empleados, puntos y recompensas',
  estimatedTime: '2 horas',
  difficulty: 'Básico',
  lessons: [
    {
      id: 'ref-001',
      title: 'Employee Referral Program',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Referral setup', 'Job sharing', 'Tracking', 'Candidates', 'Workflow']
    },
    {
      id: 'ref-002',
      title: 'Points y Rewards',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Points system', 'Rewards catalog', 'Bonuses', 'Gamification', 'Leaderboards']
    }
  ]
}
