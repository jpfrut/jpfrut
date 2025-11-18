import { existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __filename = fileURLToPath(import.meta.url)
const projectRoot = join(dirname(__filename), '..')

const requiredDeps = ['react-markdown']
const missingDeps = requiredDeps.filter(dep => !existsSync(join(projectRoot, 'node_modules', dep)))

if (missingDeps.length > 0) {
  console.error('\n[Preflight] Dependencias faltantes:')
  missingDeps.forEach(dep => console.error(` - ${dep}`))
  console.error('\nEjecuta "npm install" antes de continuar con "npm run dev" para restaurarlas.')
  process.exit(1)
}
