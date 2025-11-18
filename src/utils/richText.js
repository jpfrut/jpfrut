const TABLE_DIVIDER = /^(\s*)\|?\s*-{2,}/

const isTableLine = (line = '') => {
  const trimmed = line.trim()
  if (!trimmed) return false
  if (/^[-*]/.test(trimmed) || trimmed.startsWith('>')) return false
  const pipeCount = (trimmed.match(/\|/g) || []).length
  return pipeCount >= 2
}

const formatTableLine = (line) => {
  const cells = line
    .split('|')
    .map(cell => cell.trim())
    .filter(cell => cell.length > 0)
  if (!cells.length) return null
  return `| ${cells.join(' | ')} |`
}

const normalizeTables = (text) => {
  const lines = text.split('\n')
  const normalized = []

  for (let i = 0; i < lines.length; i++) {
    if (!isTableLine(lines[i])) {
      normalized.push(lines[i])
      continue
    }

    const block = []
    while (i < lines.length && isTableLine(lines[i])) {
      block.push(lines[i])
      i++
    }
    i--

    if (block.length < 2) {
      normalized.push(...block)
      continue
    }

    const trimmedBlock = block.map(line => line.trim()).filter(Boolean)
    if (trimmedBlock.length < 2) {
      normalized.push(...block)
      continue
    }

    if (TABLE_DIVIDER.test(trimmedBlock[1])) {
      normalized.push(...trimmedBlock)
      continue
    }

    const header = formatTableLine(trimmedBlock[0])
    if (!header) {
      normalized.push(...trimmedBlock)
      continue
    }

    const columns = header.split('|').length - 2
    const separator = `| ${Array(columns).fill('---').join(' | ')} |`
    const rows = trimmedBlock.slice(1).map(formatTableLine).filter(Boolean)
    normalized.push(header, separator, ...rows)
  }

  return normalized.join('\n')
}

const stripIndent = (text) => {
  const normalized = text.replace(/\r/g, '')
  const lines = normalized.split('\n')
  let minIndent = null

  for (const line of lines) {
    if (!line.trim()) continue
    const indent = line.match(/^(\s+)/)
    const size = indent ? indent[1].length : 0
    if (minIndent === null || size < minIndent) {
      minIndent = size
    }
  }

  if (!minIndent) {
    return normalized.trim()
  }

  const stripped = lines.map(line => {
    if (!line.trim()) return ''
    return line.slice(minIndent)
  })

  return stripped.join('\n').trim()
}

export const normalizeRichText = (text = '') => {
  if (!text) return ''
  const stripped = stripIndent(text)
  return normalizeTables(stripped)
}

export { stripIndent }
