import { promises as fs } from 'fs'
import path from 'path'
import url from 'url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const projectRoot = path.resolve(__dirname, '..')
const targetEntries = [path.join(projectRoot, 'src'), path.join(projectRoot, 'index.html')]
const allowedFamilies = new Set(['primary', 'secondary', 'accent', 'neutral', 'white', 'black'])
const prefixPattern = '(?:bg|text|border(?:-(?:[trbl]|[xy]))?|from|via|to)'
const colorPattern = new RegExp(`\\b(${prefixPattern})-([a-z-]+-[0-9]{2,3})(?:/\\d+)?\\b`, 'g')

async function collectFiles(entry) {
  const stats = await fs.stat(entry)
  if (stats.isDirectory()) {
    const files = await fs.readdir(entry)
    const nested = await Promise.all(files.map((file) => collectFiles(path.join(entry, file))))
    return nested.flat()
  }
  if (/\.(jsx?|tsx?)$/.test(entry) || entry.endsWith('.html')) {
    return [entry]
  }
  return []
}

function findViolations(content, file) {
  const issues = []
  let match
  while ((match = colorPattern.exec(content)) !== null) {
    const [, prefix, familyAndShade] = match
    const shadeParts = familyAndShade.split('-')
    const family = shadeParts[0]
    if (!allowedFamilies.has(family)) {
      issues.push({ file, prefix, token: `${prefix}-${familyAndShade}` })
    }
  }
  return issues
}

async function main() {
  const files = (await Promise.all(targetEntries.map((entry) => collectFiles(entry)))).flat()
  const problems = []

  for (const file of files) {
    const content = await fs.readFile(file, 'utf8')
    problems.push(...findViolations(content, path.relative(projectRoot, file)))
  }

  if (problems.length) {
    console.error('Se encontraron clases fuera de la paleta permitida:')
    for (const issue of problems) {
      console.error(`- ${issue.file}: ${issue.token}`)
    }
    process.exit(1)
  }

  console.log('✅ Todas las clases de color utilizan la paleta oficial.')
}

main().catch((error) => {
  console.error(error)
  process.exit(1)
})
