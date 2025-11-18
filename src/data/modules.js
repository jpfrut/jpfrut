/**
 * Módulos de Odoo - Archivo de compatibilidad
 *
 * NOTA: Este archivo mantiene la API antigua por compatibilidad.
 * La nueva estructura modular está en /modules/
 *
 * Nueva estructura:
 * - /modules/index.js - Exportador principal
 * - /modules/categories.js - Definición de categorías
 * - /modules/[categoria]/[modulo].js - Módulos individuales
 */

// Re-exportar todo desde la nueva estructura modular
export {
  odooModules,
  getModulesArray,
  getModuleById,
  getLessonById,
  getModulesByCategory,
  getCategories,
  getStats,
  categories,
  getCategoriesArray,
  getCategoryById,
  getCategoriesSorted
} from './modules/index.js'
