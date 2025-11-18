export const barcode = {
  id: 'barcode',
  name: 'Barcode',
  icon: '📱',
  color: 'from-accent-aqua-500 to-secondary-600',
  category: 'Supply Chain',
  priority: 4,
  description: 'Implementa operaciones con código de barras para inventario, picking y shipping',
  estimatedTime: '4 horas',
  difficulty: 'Intermedio',
  lessons: [
    {
      id: 'barcode-001',
      title: 'Scanner Setup y Configuración',
      duration: '50 min',
      xp: 85,
      difficulty: 'Básico',
      topics: ['Tipos de scanners', 'Configuración', 'App móvil', 'Bluetooth scanners', 'Testing']
    },
    {
      id: 'barcode-002',
      title: 'Barcode Operations',
      duration: '60 min',
      xp: 100,
      difficulty: 'Intermedio',
      topics: ['Receiving', 'Internal transfers', 'Picking', 'Delivery', 'Inventory adjustments']
    },
    {
      id: 'barcode-003',
      title: 'Lot y Serial Number Tracking',
      duration: '55 min',
      xp: 90,
      difficulty: 'Intermedio',
      topics: ['Lotes', 'Números de serie', 'Traceability', 'Expiration dates', 'Quality tracking']
    },
    {
      id: 'barcode-004',
      title: 'GS1 Nomenclature',
      duration: '45 min',
      xp: 75,
      difficulty: 'Avanzado',
      topics: ['GS1 standards', 'GTIN', 'UPC', 'EAN', 'Interpretación avanzada', 'Packaging hierarchy']
    }
  ]
}
