/**
 * Módulos de Odoo - Exportador Central
 * Nueva estructura modular organizada por categorías
 */

// Importar categorías
export { categories, getCategoriesArray, getCategoryById, getCategoriesSorted } from './categories.js'

// Importar módulos por categoría
import { accounting } from './finance/accounting.js'
import { expenses } from './finance/expenses.js'
import { paymentProviders } from './finance/paymentProviders.js'
import { fiscalLocalizations } from './finance/fiscalLocalizations.js'
import { advancedAccounting } from './finance/advancedAccounting.js'
import { esgReporting } from './finance/esgReporting.js'

import { salesCrm } from './sales/salesCrm.js'
import { pos } from './sales/pos.js'
import { ecommerce } from './sales/ecommerce.js'
import { subscriptions } from './sales/subscriptions.js'
import { advancedSales } from './sales/advancedSales.js'
import { rental } from './sales/rental.js'
import { ecommerceIntegrations } from './sales/ecommerceIntegrations.js'

import { inventory } from './supplyChain/inventory.js'
import { purchase } from './supplyChain/purchase.js'
import { manufacturing } from './supplyChain/manufacturing.js'
import { barcode } from './supplyChain/barcode.js'
import { quality } from './supplyChain/quality.js'
import { maintenance } from './supplyChain/maintenance.js'
import { repairs } from './supplyChain/repairs.js'
import { plm } from './supplyChain/plm.js'

import { employees } from './humanResources/employees.js'
import { timeoff } from './humanResources/timeoff.js'
import { payroll } from './humanResources/payroll.js'
import { attendances } from './humanResources/attendances.js'
import { recruitment } from './humanResources/recruitment.js'
import { appraisals } from './humanResources/appraisals.js'
import { fleet } from './humanResources/fleet.js'
import { lunch } from './humanResources/lunch.js'
import { referrals } from './humanResources/referrals.js'
import { frontdesk } from './humanResources/frontdesk.js'

import { project } from './services/project.js'
import { helpdesk } from './services/helpdesk.js'
import { timesheets } from './services/timesheets.js'
import { fieldService } from './services/fieldService.js'
import { planning } from './services/planning.js'

import { website } from './websites/website.js'
import { elearning } from './websites/elearning.js'
import { liveChat } from './websites/liveChat.js'
import { blog } from './websites/blog.js'
import { forum } from './websites/forum.js'

import { documents } from './productivity/documents.js'
import { knowledge } from './productivity/knowledge.js'
import { discuss } from './productivity/discuss.js'
import { calendar } from './productivity/calendar.js'
import { appointments } from './productivity/appointments.js'
import { sign } from './productivity/sign.js'
import { spreadsheet } from './productivity/spreadsheet.js'
import { dashboards } from './productivity/dashboards.js'
import { voip } from './productivity/voip.js'
import { whatsapp } from './productivity/whatsapp.js'
import { todo } from './productivity/todo.js'
import { aiTools } from './productivity/aiTools.js'

import { emailMarketing } from './marketing/emailMarketing.js'
import { marketingAutomation } from './marketing/marketingAutomation.js'
import { smsMarketing } from './marketing/smsMarketing.js'
import { events } from './marketing/events.js'
import { surveys } from './marketing/surveys.js'
import { socialMarketing } from './marketing/socialMarketing.js'

import { searchFilterGroup } from './essentials/searchFilterGroup.js'
import { reporting } from './essentials/reporting.js'
import { activities } from './essentials/activities.js'
import { stages } from './essentials/stages.js'
import { importExport } from './essentials/importExport.js'
import { richTextEditor } from './essentials/richTextEditor.js'
import { contacts } from './essentials/contacts.js'
import { keyboardShortcuts } from './essentials/keyboardShortcuts.js'
import { propertyFields } from './essentials/propertyFields.js'

import { userManagement } from './settings/userManagement.js'
import { multiCompany } from './settings/multiCompany.js'
import { integrations } from './settings/integrations.js'
import { emailConfiguration } from './settings/emailConfiguration.js'
import { iot } from './settings/iot.js'

import { studioPlatform } from './studio/studioPlatform.js'

// Objeto de módulos (compatible con la API anterior)
export const odooModules = {
  accounting,
  expenses,
  paymentProviders,
  fiscalLocalizations,
  advancedAccounting,
  esgReporting,
  sales: salesCrm, // Mantener compatibilidad con ID 'sales'
  pos,
  ecommerce,
  subscriptions,
  advancedSales,
  rental,
  ecommerceIntegrations,
  inventory,
  purchase,
  manufacturing,
  barcode,
  quality,
  maintenance,
  repairs,
  plm,
  employees,
  timeoff,
  payroll,
  attendances,
  recruitment,
  appraisals,
  fleet,
  lunch,
  referrals,
  frontdesk,
  project,
  helpdesk,
  timesheets,
  fieldService,
  planning,
  website,
  elearning,
  liveChat,
  blog,
  forum,
  documents,
  knowledge,
  discuss,
  calendar,
  appointments,
  sign,
  spreadsheet,
  dashboards,
  voip,
  whatsapp,
  todo,
  aiTools,
  emailMarketing,
  marketingAutomation,
  smsMarketing,
  events,
  surveys,
  socialMarketing,
  searchFilterGroup,
  reporting,
  activities,
  stages,
  importExport,
  richTextEditor,
  contacts,
  keyboardShortcuts,
  propertyFields,
  userManagement,
  multiCompany,
  integrations,
  emailConfiguration,
  iot,
  studioPlatform
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

export const financeModules = { accounting, expenses, paymentProviders, fiscalLocalizations, advancedAccounting, esgReporting }
export const salesModules = { salesCrm, pos, ecommerce, subscriptions, advancedSales, rental, ecommerceIntegrations }
export const supplyChainModules = { inventory, purchase, manufacturing, barcode, quality, maintenance, repairs, plm }
export const humanResourcesModules = { employees, timeoff, payroll, attendances, recruitment, appraisals, fleet, lunch, referrals, frontdesk }
export const servicesModules = { project, helpdesk, timesheets, fieldService, planning }
export const websitesModules = { website, elearning, liveChat, blog, forum }
export const marketingModules = { emailMarketing, marketingAutomation, smsMarketing, events, surveys, socialMarketing }
export const productivityModules = { documents, knowledge, discuss, calendar, appointments, sign, spreadsheet, dashboards, voip, whatsapp, todo, aiTools }
export const essentialsModules = { searchFilterGroup, reporting, activities, stages, importExport, richTextEditor, contacts, keyboardShortcuts, propertyFields }
export const studioModules = { studioPlatform }
export const settingsModules = { userManagement, multiCompany, integrations, emailConfiguration, iot }
