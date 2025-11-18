export const forum = {
  id: 'forum',
  name: 'Forum',
  icon: '💭',
  color: 'from-accent-pink-500 to-accent-purple-600',
  category: 'Websites',
  priority: 5,
  description: 'Comunidad online, foros de discusión y gamificación',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'forum-001',
      title: 'Community Online',
      duration: '55 min',
      xp: 90,
      difficulty: 'Básico',
      topics: ['Forum setup', 'Categories', 'Topics', 'Posts', 'Threads']
    },
    {
      id: 'forum-002',
      title: 'Moderation',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Moderator roles', 'Content approval', 'Reporting', 'Bans', 'Rules']
    },
    {
      id: 'forum-003',
      title: 'Gamificación',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Karma points', 'Badges', 'Ranks', 'Achievements', 'Leaderboards']
    },
    {
      id: 'forum-004',
      title: 'Engagement y Analytics',
      duration: '50 min',
      xp: 85,
      difficulty: 'Intermedio',
      topics: ['User activity', 'Popular topics', 'Search', 'Notifications', 'Metrics']
    }
  ]
}
