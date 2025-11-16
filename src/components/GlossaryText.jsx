import { useMemo } from 'react'
import GlossaryTooltip from './GlossaryTooltip'
import { glossaryTerms } from '../data/glossaryData'

// Map of common text phrases to their glossary term keys
const termMappings = {
  // Contabilidad
  'plan de cuentas': 'plan-de-cuentas',
  'cuenta contable': 'cuenta-contable',
  'cuentas contables': 'cuenta-contable',
  'diario contable': 'diario-contable',
  'diarios contables': 'diario-contable',
  'asiento contable': 'asiento-contable',
  'asientos contables': 'asiento-contable',
  'partida doble': 'asiento-contable',

  // Ventas/Compras
  'factura': 'factura',
  'facturas': 'factura',
  'cotización': 'cotizacion',
  'cotizaciones': 'cotizacion',
  'orden de compra': 'orden-compra',
  'órdenes de compra': 'orden-compra',

  // Inventario
  'producto': 'producto',
  'productos': 'producto',
  'ubicación': 'ubicacion',
  'ubicaciones': 'ubicacion',
  'movimiento de stock': 'movimiento-stock',
  'movimientos de stock': 'movimiento-stock',
  'movimiento de inventario': 'movimiento-stock',

  // CRM
  'lead': 'lead',
  'leads': 'lead',
  'oportunidad': 'oportunidad',
  'oportunidades': 'oportunidad',

  // Contactos
  'cliente': 'cliente',
  'clientes': 'cliente',
  'proveedor': 'proveedor',
  'proveedores': 'proveedor',

  // RRHH
  'empleado': 'empleado',
  'empleados': 'empleado',
  'departamento': 'departamento',
  'departamentos': 'departamento',
  'contrato': 'contrato',
  'contratos': 'contrato'
}

const GlossaryText = ({ text, enableGlossary = true }) => {
  const processedContent = useMemo(() => {
    if (!enableGlossary || !text) {
      return text
    }

    // Sort term keys by length (longest first) to match longer phrases first
    const sortedTerms = Object.keys(termMappings).sort((a, b) => b.length - a.length)

    // Create a regex pattern that matches any of the terms
    const pattern = new RegExp(
      `\\b(${sortedTerms.map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})\\b`,
      'gi'
    )

    // Split text by the pattern, keeping the matched terms
    const parts = []
    let lastIndex = 0
    let match
    const usedTerms = new Set() // Track which terms we've already highlighted

    // Reset the regex
    const regex = new RegExp(pattern.source, pattern.flags)

    while ((match = regex.exec(text)) !== null) {
      const matchedText = match[0]
      const termKey = termMappings[matchedText.toLowerCase()]

      // Only highlight the first occurrence of each term type
      if (termKey && !usedTerms.has(termKey)) {
        // Add text before the match
        if (match.index > lastIndex) {
          parts.push({
            type: 'text',
            content: text.substring(lastIndex, match.index)
          })
        }

        // Add the glossary term
        parts.push({
          type: 'glossary',
          content: matchedText,
          termKey: termKey
        })

        usedTerms.add(termKey)
        lastIndex = match.index + matchedText.length
      }
    }

    // Add remaining text
    if (lastIndex < text.length) {
      parts.push({
        type: 'text',
        content: text.substring(lastIndex)
      })
    }

    // If no terms were found, return original text
    if (parts.length === 0) {
      return text
    }

    return parts
  }, [text, enableGlossary])

  // If no processing needed or result is string, render as-is
  if (typeof processedContent === 'string') {
    return <span className="whitespace-pre-line">{processedContent}</span>
  }

  // Render processed content with glossary tooltips
  return (
    <span className="whitespace-pre-line">
      {processedContent.map((part, index) => {
        if (part.type === 'glossary') {
          return (
            <GlossaryTooltip key={index} termKey={part.termKey}>
              {part.content}
            </GlossaryTooltip>
          )
        }
        return <span key={index}>{part.content}</span>
      })}
    </span>
  )
}

export default GlossaryText
