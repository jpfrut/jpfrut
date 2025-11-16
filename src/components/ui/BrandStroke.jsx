import { motion } from 'framer-motion'

/**
 * BrandStroke - Elemento gráfico distintivo de Mentora Hub
 * Un trazo curvo naranja que añade personalidad y dinamismo visual
 *
 * @param {object} props
 * @param {'curve-up' | 'curve-down' | 'diagonal' | 'wave'} [props.variant] - Tipo de curva
 * @param {'sm' | 'md' | 'lg'} [props.size] - Tamaño del trazo
 * @param {boolean} [props.animated] - Si debe animar el dibujo del trazo
 * @param {string} [props.className] - Clases adicionales
 * @param {string} [props.color] - Color del trazo (default: Naranja #FF3F00)
 */
const BrandStroke = ({
  variant = 'curve-up',
  size = 'md',
  animated = false,
  className = '',
  color = '#FF3F00',  // NARANJA - Color secundario de Mentora Hub
}) => {
  const sizes = {
    sm: { width: 120, height: 40, strokeWidth: 4 },
    md: { width: 200, height: 60, strokeWidth: 6 },
    lg: { width: 300, height: 80, strokeWidth: 8 },
  }

  const { width, height, strokeWidth } = sizes[size] || sizes.md

  // Diferentes paths para cada variante
  const paths = {
    'curve-up': `M 10,${height - 10} Q ${width / 2},10 ${width - 10},${height - 10}`,
    'curve-down': `M 10,10 Q ${width / 2},${height - 10} ${width - 10},10`,
    'diagonal': `M 10,${height - 10} Q ${width / 3},${height / 2} ${width - 10},10`,
    'wave': `M 10,${height / 2} Q ${width / 4},10 ${width / 2},${height / 2} T ${width - 10},${height / 2}`,
  }

  const pathD = paths[variant] || paths['curve-up']

  // Calcular longitud aproximada del path para animación
  const pathLength = width * 1.5

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {animated ? (
        <motion.path
          d={pathD}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{
            pathLength: { duration: 1, ease: 'easeInOut' },
            opacity: { duration: 0.3 },
          }}
          style={{
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          }}
        />
      ) : (
        <path
          d={pathD}
          stroke={color}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  )
}

export default BrandStroke
