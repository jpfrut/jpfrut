export const iot = {
  id: 'iot',
  name: 'IoT',
  icon: '🖥️',
  color: 'from-neutral-500 to-accent-purple-600',
  category: 'Settings',
  priority: 5,
  description: 'Internet of Things: conecta dispositivos, sensores y hardware',
  estimatedTime: '3 horas',
  difficulty: 'Avanzado',
  lessons: [
    {
      id: 'iot-001',
      title: 'Device Connectivity',
      duration: '60 min',
      xp: 100,
      difficulty: 'Avanzado',
      topics: ['IoT Box', 'Device setup', 'Network', 'Pairing', 'Configuration']
    },
    {
      id: 'iot-002',
      title: 'Hardware Integration',
      duration: '65 min',
      xp: 110,
      difficulty: 'Avanzado',
      topics: ['Printers', 'Scanners', 'Scales', 'Payment terminals', 'Sensors', 'Drivers']
    },
    {
      id: 'iot-003',
      title: 'Automation y Monitoring',
      duration: '55 min',
      xp: 90,
      difficulty: 'Avanzado',
      topics: ['Automated workflows', 'Triggers', 'Monitoring', 'Alerts', 'Maintenance']
    }
  ]
}
