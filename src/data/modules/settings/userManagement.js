export const userManagement = {
  id: 'user-management',
  name: 'User Management',
  icon: '👤',
  color: 'from-neutral-500 to-neutral-600',
  category: 'Settings',
  priority: 1,
  description: 'Gestiona usuarios, roles, permisos y autenticación en Odoo',
  estimatedTime: '5 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'user-001',
      title: 'User Roles y Permisos',
      duration: '60 min',
      xp: 100,
      difficulty: 'Básico',
      topics: ['Users', 'Groups', 'Access rights', 'Roles', 'Permissions']
    },
    {
      id: 'user-002',
      title: 'Access Rights y Security',
      duration: '70 min',
      xp: 120,
      difficulty: 'Intermedio',
      topics: ['Record rules', 'Field-level security', 'Menu access', 'Multi-company', 'Security groups']
    },
    {
      id: 'user-003',
      title: 'Authentication (OAuth, LDAP)',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['OAuth2', 'LDAP', 'Active Directory', 'SSO', '2FA', 'External auth']
    },
    {
      id: 'user-004',
      title: 'Portal Users',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Portal access', 'Customer portal', 'Vendor portal', 'Limited access', 'Sharing']
    },
    {
      id: 'user-005',
      title: 'User Management Best Practices',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['User lifecycle', 'Onboarding', 'Offboarding', 'Audit logs', 'Compliance', 'Security policies']
    }
  ]
}
