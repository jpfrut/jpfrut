import { build } from 'vite'
import fs from 'node:fs'
import path from 'node:path'

const distDir = path.resolve(process.cwd(), 'dist-markdown-build')

const getBuildCss = () => {
  const assetsDir = path.join(distDir, 'assets')
  const cssFiles = fs.existsSync(assetsDir)
    ? fs.readdirSync(assetsDir).filter((file) => file.endsWith('.css'))
    : []

  return cssFiles.map((file) => fs.readFileSync(path.join(assetsDir, file), 'utf8')).join('\n')
}

describe('production build', () => {
  afterAll(async () => {
    await fs.promises.rm(distDir, { recursive: true, force: true })
  })

  it('includes markdown renderer styles in the output CSS', async () => {
    await build({
      logLevel: 'silent',
      build: {
        outDir: distDir,
        emptyOutDir: true,
      },
    })

    const cssContent = getBuildCss()

    expect(cssContent).not.toEqual('')
    expect(cssContent).toMatch(/_markdown_/)
    expect(cssContent).toMatch(/scroll-margin-top:96px/)
  }, 30000)
})
