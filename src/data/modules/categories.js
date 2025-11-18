/**
 * Categorías de módulos de Odoo 19.0
 * Alineadas con la estructura oficial de Odoo
 * Ref: https://www.odoo.com/documentation/19.0/applications.html
 */

export const categories = {
  // 1. FINANCE
  finance: {
    id: 'finance',
    name: 'Finance',
    nameEs: 'Finanzas',
    icon: '💰',
    color: 'from-accent-green-500 to-accent-green-600',
    description: 'Gestión financiera y contable completa',
    priority: 1
  },

  // 2. SALES
  sales: {
    id: 'sales',
    name: 'Sales',
    nameEs: 'Ventas',
    icon: '📊',
    color: 'from-primary-500 to-primary-600',
    description: 'CRM, ventas y generación de ingresos',
    priority: 2
  },

  // 3. WEBSITES
  websites: {
    id: 'websites',
    name: 'Websites',
    nameEs: 'Sitios Web',
    icon: '🌐',
    color: 'from-accent-pink-500 to-accent-pink-600',
    description: 'Presencia web y comercio electrónico',
    priority: 3
  },

  // 4. SUPPLY CHAIN
  supplyChain: {
    id: 'supplyChain',
    name: 'Supply Chain',
    nameEs: 'Cadena de Suministro',
    icon: '📦',
    color: 'from-secondary-500 to-secondary-600',
    description: 'Inventario, manufactura y logística',
    priority: 4
  },

  // 5. HUMAN RESOURCES
  humanResources: {
    id: 'humanResources',
    name: 'Human Resources',
    nameEs: 'Recursos Humanos',
    icon: '👥',
    color: 'from-accent-aqua-500 to-accent-green-600',
    description: 'Gestión de personal y talento',
    priority: 5
  },

  // 6. MARKETING
  marketing: {
    id: 'marketing',
    name: 'Marketing',
    nameEs: 'Marketing',
    icon: '📧',
    color: 'from-accent-red-500 to-accent-pink-600',
    description: 'Campañas y automatización de marketing',
    priority: 6
  },

  // 7. SERVICES
  services: {
    id: 'services',
    name: 'Services',
    nameEs: 'Servicios',
    icon: '🎧',
    color: 'from-neutral-500 to-neutral-600',
    description: 'Proyectos y servicios profesionales',
    priority: 7
  },

  // 8. PRODUCTIVITY
  productivity: {
    id: 'productivity',
    name: 'Productivity',
    nameEs: 'Productividad',
    icon: '💬',
    color: 'from-primary-500 to-primary-600',
    description: 'Herramientas de colaboración y productividad',
    priority: 8
  },

  // 9. ESSENTIALS
  essentials: {
    id: 'essentials',
    name: 'Odoo Essentials',
    nameEs: 'Fundamentos de Odoo',
    icon: '🔍',
    color: 'from-neutral-400 to-neutral-500',
    description: 'Características fundamentales de Odoo',
    priority: 9
  },

  // 10. STUDIO
  studio: {
    id: 'studio',
    name: 'Studio',
    nameEs: 'Studio',
    icon: '🎨',
    color: 'from-accent-pink-500 to-accent-red-600',
    description: 'Personalización low-code',
    priority: 10
  },

  // 11. SETTINGS
  settings: {
    id: 'settings',
    name: 'Settings',
    nameEs: 'Configuración',
    icon: '⚙️',
    color: 'from-neutral-500 to-neutral-600',
    description: 'Configuración general del sistema',
    priority: 11
  }
}

// Función para obtener todas las categorías como array
export const getCategoriesArray = () => Object.values(categories)

// Función para obtener una categoría por ID
export const getCategoryById = (id) => categories[id] || null

// Función para obtener categorías ordenadas por prioridad
export const getCategoriesSorted = () => {
  return getCategoriesArray().sort((a, b) => a.priority - b.priority)
}
