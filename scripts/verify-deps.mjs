import { readFileSync } from 'node:fs'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const require = createRequire(import.meta.url)
const __filename = fileURLToPath(import.meta.url)
const projectRoot = join(dirname(__filename), '..')

const packageJsonPath = join(projectRoot, 'package.json')
const packageJson = JSON.parse(readFileSync(packageJsonPath, 'utf-8'))
const dependencies = Object.keys({
  ...(packageJson.dependencies ?? {}),
  ...(packageJson.devDependencies ?? {}),
})

const missingDeps = []

for (const dep of dependencies) {
  try {
    require.resolve(dep)
  } catch {
    try {
      require.resolve(join(dep, 'package.json'))
    } catch {
      missingDeps.push(dep)
    }
  }
}

if (missingDeps.length > 0) {
  const message = [
    '[Preflight] Dependencias faltantes:',
    ` - ${missingDeps.join(', ')}`,
    'Ejecuta "npm install" antes de continuar con "npm run dev" para restaurarlas.',
  ].join('\n')

  console.error(`\n${message}\n`)
  process.exit(1)
}
