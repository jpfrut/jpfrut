/**
 * Módulos de Odoo - Exportador Central
 * Nueva estructura modular organizada por categorías
 */

// Importar categorías
export { categories, getCategoriesArray, getCategoryById, getCategoriesSorted } from './categories.js'

// Importar módulos por categoría
import { accounting } from './finance/accounting.js'
import { expenses } from './finance/expenses.js'

import { salesCrm } from './sales/salesCrm.js'
import { pos } from './sales/pos.js'
import { ecommerce } from './sales/ecommerce.js'

import { inventory } from './supplyChain/inventory.js'
import { purchase } from './supplyChain/purchase.js'

import { employees } from './humanResources/employees.js'
import { timeoff } from './humanResources/timeoff.js'

import { project } from './services/project.js'
import { helpdesk } from './services/helpdesk.js'

import { website } from './websites/website.js'

import { emailMarketing } from './marketing/emailMarketing.js'
import { marketingAutomation } from './marketing/marketingAutomation.js'

// Objeto de módulos (compatible con la API anterior)
export const odooModules = {
  accounting,
  expenses,
  sales: salesCrm, // Mantener compatibilidad con ID 'sales'
  pos,
  ecommerce,
  inventory,
  purchase,
  employees,
  timeoff,
  project,
  website,
  helpdesk,
  emailMarketing,
  marketingAutomation
}

// ============================================
// Funciones auxiliares (compatibilidad con API anterior)
// ============================================

/**
 * Obtener todos los módulos como array
 */
export const getModulesArray = () => Object.values(odooModules)

/**
 * Obtener un módulo por ID
 */
export const getModuleById = (id) => {
  return odooModules[id] || null
}

/**
 * Obtener una lección por ID de módulo y lección
 */
export const getLessonById = (moduleId, lessonId) => {
  const module = odooModules[moduleId]
  if (!module) return null
  return module.lessons.find(lesson => lesson.id === lessonId) || null
}

/**
 * Obtener módulos por categoría
 * @param {string} category - Nombre de la categoría (ej: 'Finance', 'Sales', 'Finanzas', 'Ventas')
 */
export const getModulesByCategory = (category) => {
  return Object.values(odooModules).filter(m => {
    // Soportar tanto nombres en inglés como en español
    return m.category === category ||
           m.category.toLowerCase() === category.toLowerCase() ||
           getCategorySpanishName(m.category) === category
  })
}

/**
 * Obtener todas las categorías únicas de los módulos actuales
 * @deprecated Usar getCategoriesArray() de categories.js
 */
export const getCategories = () => {
  const categories = new Set(Object.values(odooModules).map(m => m.category))
  return Array.from(categories)
}

/**
 * Obtener estadísticas generales de módulos y lecciones
 */
export const getStats = () => {
  const modules = getModulesArray()
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0)
  const totalTime = modules.reduce((acc, m) => {
    const hours = parseInt(m.estimatedTime) || 0
    return acc + hours
  }, 0)

  return {
    totalModules: modules.length,
    totalLessons,
    totalTime: `${totalTime} horas`,
    categories: getCategories()
  }
}

/**
 * Helper para obtener nombre en español de categoría
 */
const getCategorySpanishName = (categoryEn) => {
  const mapping = {
    'Finance': 'Finanzas',
    'Sales': 'Ventas',
    'Websites': 'Sitios Web',
    'Supply Chain': 'Operaciones', // Mapping antiguo
    'Human Resources': 'Administración', // Mapping parcial antiguo
    'Services': 'Administración', // Mapping parcial antiguo
    'Marketing': 'Marketing',
    'Productivity': 'Productividad',
    'Odoo Essentials': 'Fundamentos',
    'Studio': 'Studio',
    'Settings': 'Configuración'
  }
  return mapping[categoryEn] || categoryEn
}

// ============================================
// Exports organizados por categoría
// ============================================

export const financeModules = { accounting, expenses }
export const salesModules = { salesCrm, pos, ecommerce }
export const supplyChainModules = { inventory, purchase }
export const humanResourcesModules = { employees, timeoff }
export const servicesModules = { project, helpdesk }
export const websitesModules = { website }

// Futuros módulos (preparación para expansión)
export const marketingModules = { emailMarketing, marketingAutomation }
export const productivityModules = {}
export const essentialsModules = {}
export const studioModules = {}
export const settingsModules = {}
