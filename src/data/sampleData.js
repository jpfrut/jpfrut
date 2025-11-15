// Datos de ejemplo para una empresa de consultoría
// Estos datos simulan una empresa real y pueden usarse en ejercicios prácticos

export const consultingCompany = {
  // Información de la empresa
  company: {
    name: 'Mentora Consulting S.A.',
    taxId: 'B-12345678',
    address: 'Av. Innovación 123, Piso 5',
    city: 'Madrid',
    state: 'Madrid',
    zip: '28001',
    country: 'España',
    phone: '+34 912 345 678',
    email: 'contacto@mentoraconsulting.com',
    website: 'www.mentoraconsulting.com',
    fiscalYear: {
      start: '01/01',
      end: '31/12'
    },
    currency: 'EUR',
    employees: 25,
    founded: '2020'
  },

  // Servicios que ofrece la consultoría
  services: [
    {
      id: 'srv-001',
      name: 'Consultoría Estratégica',
      description: 'Análisis y planificación estratégica empresarial',
      price: 150, // EUR por hora
      category: 'Consultoría',
      taxRate: 21, // IVA España
    },
    {
      id: 'srv-002',
      name: 'Implementación Odoo',
      description: 'Instalación y configuración de Odoo ERP',
      price: 120,
      category: 'Implementación',
      taxRate: 21,
    },
    {
      id: 'srv-003',
      name: 'Soporte Técnico Mensual',
      description: 'Soporte técnico y mantenimiento (paquete mensual)',
      price: 800,
      category: 'Soporte',
      taxRate: 21,
    },
    {
      id: 'srv-004',
      name: 'Capacitación Presencial',
      description: 'Formación presencial para equipos (día completo)',
      price: 1200,
      category: 'Formación',
      taxRate: 21,
    },
    {
      id: 'srv-005',
      name: 'Desarrollo a Medida',
      description: 'Desarrollo de módulos personalizados',
      price: 100,
      category: 'Desarrollo',
      taxRate: 21,
    }
  ],

  // Clientes de la consultoría
  clients: [
    {
      id: 'cli-001',
      name: 'Industrias TechCorp S.L.',
      taxId: 'B-87654321',
      contactName: 'Ana García López',
      email: 'ana.garcia@techcorp.com',
      phone: '+34 913 456 789',
      address: 'Calle Tecnología 45',
      city: 'Barcelona',
      paymentTerms: '30 días',
      creditLimit: 50000,
      industry: 'Manufactura',
      since: '2021-03-15'
    },
    {
      id: 'cli-002',
      name: 'Comercial Distribuidora España S.A.',
      taxId: 'A-11223344',
      contactName: 'Carlos Rodríguez Martín',
      email: 'carlos@distribuidora.es',
      phone: '+34 915 678 901',
      address: 'Polígono Industrial Norte, Nave 12',
      city: 'Valencia',
      paymentTerms: '60 días',
      creditLimit: 75000,
      industry: 'Distribución',
      since: '2020-11-20'
    },
    {
      id: 'cli-003',
      name: 'Servicios Profesionales Beta',
      taxId: 'B-55667788',
      contactName: 'María Fernández Ruiz',
      email: 'm.fernandez@spbeta.com',
      phone: '+34 917 890 123',
      address: 'Gran Vía 88, 3º',
      city: 'Madrid',
      paymentTerms: '30 días',
      creditLimit: 30000,
      industry: 'Servicios',
      since: '2022-01-10'
    },
    {
      id: 'cli-004',
      name: 'Retail Solutions Group',
      taxId: 'B-99887766',
      contactName: 'Jorge Martínez Sánchez',
      email: 'jorge.m@retailsg.com',
      phone: '+34 914 567 890',
      address: 'Centro Comercial Plaza, Local 5',
      city: 'Sevilla',
      paymentTerms: '45 días',
      creditLimit: 40000,
      industry: 'Retail',
      since: '2021-07-22'
    },
    {
      id: 'cli-005',
      name: 'Startups Innovadoras S.L.',
      taxId: 'B-12398765',
      contactName: 'Laura Pérez González',
      email: 'laura@startupsinnovadoras.com',
      phone: '+34 918 901 234',
      address: 'Coworking Hub, Espacio 201',
      city: 'Madrid',
      paymentTerms: '15 días',
      creditLimit: 20000,
      industry: 'Tecnología',
      since: '2023-02-01'
    }
  ],

  // Proveedores de la consultoría
  suppliers: [
    {
      id: 'sup-001',
      name: 'Odoo S.A.',
      taxId: 'BE-0477472701',
      contactName: 'Support Team',
      email: 'billing@odoo.com',
      phone: '+32 2 290 34 90',
      address: 'Chaussée de Namur 40',
      city: 'Ramillies',
      country: 'Bélgica',
      paymentTerms: '30 días',
      category: 'Software',
      products: [
        { name: 'Licencia Odoo Enterprise (usuario/mes)', price: 24 },
        { name: 'Odoo Studio (usuario/mes)', price: 10 },
        { name: 'Hosting Odoo.sh (workers)', price: 150 }
      ]
    },
    {
      id: 'sup-002',
      name: 'Sistemas Informáticos Pro S.L.',
      taxId: 'B-22334455',
      contactName: 'Pedro López',
      email: 'ventas@sistemaspro.es',
      phone: '+34 911 234 567',
      address: 'Calle Hardware 12',
      city: 'Madrid',
      country: 'España',
      paymentTerms: '30 días',
      category: 'Hardware',
      products: [
        { name: 'Servidor Dell PowerEdge', price: 2500 },
        { name: 'Laptop HP ProBook', price: 800 },
        { name: 'Monitor Dell 27"', price: 350 }
      ]
    },
    {
      id: 'sup-003',
      name: 'Oficinas y Suministros SA',
      taxId: 'B-66778899',
      contactName: 'Isabel Ramírez',
      email: 'pedidos@oficinasys.com',
      phone: '+34 912 345 678',
      address: 'Polígono Empresarial Sur, C/12',
      city: 'Madrid',
      country: 'España',
      paymentTerms: '15 días',
      category: 'Suministros',
      products: [
        { name: 'Papel A4 (caja 5 resmas)', price: 25 },
        { name: 'Tóner impresora HP', price: 60 },
        { name: 'Material de oficina (paquete)', price: 150 }
      ]
    },
    {
      id: 'sup-004',
      name: 'Formación Continua S.L.',
      taxId: 'B-44556677',
      contactName: 'Ricardo Torres',
      email: 'info@formacioncontinua.es',
      phone: '+34 913 456 789',
      address: 'Av. Educación 56',
      city: 'Barcelona',
      country: 'España',
      paymentTerms: '30 días',
      category: 'Formación',
      products: [
        { name: 'Curso Python Avanzado', price: 600 },
        { name: 'Certificación Odoo', price: 1200 },
        { name: 'Workshop Desarrollo Web', price: 450 }
      ]
    },
    {
      id: 'sup-005',
      name: 'Cloud Hosting Services',
      taxId: 'B-88990011',
      contactName: 'Elena Sánchez',
      email: 'support@cloudhosting.es',
      phone: '+34 915 678 901',
      address: 'Data Center Plaza, Rack A-45',
      city: 'Madrid',
      country: 'España',
      paymentTerms: '30 días',
      category: 'Hosting',
      products: [
        { name: 'VPS Cloud (8GB RAM)', price: 45 },
        { name: 'Backup automático (500GB)', price: 20 },
        { name: 'Dominio .com (anual)', price: 15 }
      ]
    }
  ],

  // Empleados y consultores
  employees: [
    {
      id: 'emp-001',
      name: 'Juan Pérez Director',
      position: 'Director General',
      email: 'juan.perez@mentoraconsulting.com',
      phone: '+34 912 345 678',
      department: 'Dirección',
      hireDate: '2020-01-15',
      salary: 65000, // Anual
      vehicleAssigned: 'VEH-001'
    },
    {
      id: 'emp-002',
      name: 'María González Sánchez',
      position: 'Consultora Senior',
      email: 'maria.gonzalez@mentoraconsulting.com',
      phone: '+34 912 345 679',
      department: 'Consultoría',
      hireDate: '2020-03-01',
      salary: 48000,
      vehicleAssigned: null
    },
    {
      id: 'emp-003',
      name: 'Carlos Martínez López',
      position: 'Desarrollador Odoo Senior',
      email: 'carlos.martinez@mentoraconsulting.com',
      phone: '+34 912 345 680',
      department: 'Desarrollo',
      hireDate: '2020-06-15',
      salary: 45000,
      vehicleAssigned: 'VEH-002'
    },
    {
      id: 'emp-004',
      name: 'Ana Rodríguez Fernández',
      position: 'Consultora Funcional',
      email: 'ana.rodriguez@mentoraconsulting.com',
      phone: '+34 912 345 681',
      department: 'Consultoría',
      hireDate: '2021-02-01',
      salary: 42000,
      vehicleAssigned: null
    },
    {
      id: 'emp-005',
      name: 'Luis Torres Moreno',
      position: 'Desarrollador Odoo',
      email: 'luis.torres@mentoraconsulting.com',
      phone: '+34 912 345 682',
      department: 'Desarrollo',
      hireDate: '2021-09-01',
      salary: 38000,
      vehicleAssigned: null
    },
    {
      id: 'emp-006',
      name: 'Carmen Díaz Ruiz',
      position: 'Contadora',
      email: 'carmen.diaz@mentoraconsulting.com',
      phone: '+34 912 345 683',
      department: 'Administración',
      hireDate: '2020-02-15',
      salary: 36000,
      vehicleAssigned: null
    },
    {
      id: 'emp-007',
      name: 'David Sánchez Gil',
      position: 'Soporte Técnico',
      email: 'david.sanchez@mentoraconsulting.com',
      phone: '+34 912 345 684',
      department: 'Soporte',
      hireDate: '2022-01-10',
      salary: 32000,
      vehicleAssigned: null
    }
  ],

  // Vehículos de la flota
  vehicles: [
    {
      id: 'VEH-001',
      licensePlate: '1234-ABC',
      brand: 'Toyota',
      model: 'Prius',
      year: 2022,
      color: 'Gris',
      vin: 'JT2BK18E0X0123456',
      acquisitionDate: '2022-01-15',
      acquisitionValue: 28000,
      category: 'Vehículo ligero',
      fuelType: 'Híbrido',
      currentKm: 45000,
      assignedTo: 'emp-001',
      insurance: {
        company: 'Seguros Premium S.A.',
        policyNumber: 'POL-2022-001',
        expirationDate: '2025-01-15',
        annualCost: 1200
      }
    },
    {
      id: 'VEH-002',
      licensePlate: '5678-DEF',
      brand: 'Ford',
      model: 'Transit Custom',
      year: 2021,
      color: 'Blanco',
      vin: 'WF0XXXTTFXKK12345',
      acquisitionDate: '2021-06-01',
      acquisitionValue: 32000,
      category: 'Vehículo comercial',
      fuelType: 'Diesel',
      currentKm: 78000,
      assignedTo: 'emp-003',
      insurance: {
        company: 'Seguros Premium S.A.',
        policyNumber: 'POL-2021-002',
        expirationDate: '2025-06-01',
        annualCost: 1400
      }
    },
    {
      id: 'VEH-003',
      licensePlate: '9012-GHI',
      brand: 'Renault',
      model: 'Megane',
      year: 2023,
      color: 'Azul',
      vin: 'VF1RFB00X65123456',
      acquisitionDate: '2023-03-01',
      acquisitionValue: 24000,
      category: 'Vehículo ligero',
      fuelType: 'Gasolina',
      currentKm: 12000,
      assignedTo: null, // Pool car
      insurance: {
        company: 'Seguros Premium S.A.',
        policyNumber: 'POL-2023-001',
        expirationDate: '2026-03-01',
        annualCost: 1100
      }
    }
  ],

  // Mantenimientos y servicios de vehículos
  vehicleServices: [
    {
      id: 'SRV-V-001',
      vehicleId: 'VEH-001',
      type: 'Mantenimiento preventivo',
      date: '2024-11-15',
      km: 45000,
      description: 'Cambio de aceite y filtros',
      supplier: 'Toyota Service Madrid',
      cost: 250,
      nextServiceKm: 60000
    },
    {
      id: 'SRV-V-002',
      vehicleId: 'VEH-002',
      type: 'Reparación',
      date: '2024-10-20',
      km: 75000,
      description: 'Cambio de neumáticos (4 unidades)',
      supplier: 'Neumáticos Express',
      cost: 480,
      nextServiceKm: null
    },
    {
      id: 'SRV-V-003',
      vehicleId: 'VEH-003',
      type: 'Mantenimiento preventivo',
      date: '2024-09-10',
      km: 10000,
      description: 'Primera revisión',
      supplier: 'Renault Service Centro',
      cost: 180,
      nextServiceKm: 20000
    }
  ],

  // Cuentas bancarias
  bankAccounts: [
    {
      id: 'bank-001',
      bankName: 'Banco Santander',
      accountNumber: 'ES12 0049 1234 5678 9012 3456',
      accountType: 'Cuenta corriente principal',
      swift: 'BSCHESMMXXX',
      currency: 'EUR',
      currentBalance: 125000,
      openingDate: '2020-01-15'
    },
    {
      id: 'bank-002',
      bankName: 'BBVA',
      accountNumber: 'ES34 0182 9876 5432 1098 7654',
      accountType: 'Cuenta de nóminas',
      swift: 'BBVAESMMXXX',
      currency: 'EUR',
      currentBalance: 45000,
      openingDate: '2020-02-01'
    },
    {
      id: 'bank-003',
      bankName: 'La Caixa',
      accountNumber: 'ES56 2100 5555 6666 7777 8888',
      accountType: 'Cuenta de ahorro',
      swift: 'CAIXESBBXXX',
      currency: 'EUR',
      currentBalance: 80000,
      openingDate: '2020-03-15'
    }
  ],

  // Ejemplo de facturas de cliente
  sampleInvoices: [
    {
      id: 'INV-2025-001',
      clientId: 'cli-001',
      date: '2025-01-15',
      dueDate: '2025-02-14', // 30 días
      status: 'Pendiente',
      lines: [
        {
          serviceId: 'srv-001',
          description: 'Consultoría Estratégica',
          quantity: 40, // horas
          unitPrice: 150,
          taxRate: 21,
          subtotal: 6000,
          tax: 1260,
          total: 7260
        },
        {
          serviceId: 'srv-002',
          description: 'Implementación Odoo - Módulo Ventas',
          quantity: 80, // horas
          unitPrice: 120,
          taxRate: 21,
          subtotal: 9600,
          tax: 2016,
          total: 11616
        }
      ],
      subtotal: 15600,
      tax: 3276,
      total: 18876
    },
    {
      id: 'INV-2025-002',
      clientId: 'cli-002',
      date: '2025-01-20',
      dueDate: '2025-03-21', // 60 días
      status: 'Pendiente',
      lines: [
        {
          serviceId: 'srv-003',
          description: 'Soporte Técnico Mensual - Enero 2025',
          quantity: 1,
          unitPrice: 800,
          taxRate: 21,
          subtotal: 800,
          tax: 168,
          total: 968
        }
      ],
      subtotal: 800,
      tax: 168,
      total: 968
    }
  ],

  // Ejemplo de facturas de proveedor
  sampleSupplierInvoices: [
    {
      id: 'BILL-2025-001',
      supplierId: 'sup-001',
      date: '2025-01-05',
      dueDate: '2025-02-04',
      status: 'Pendiente',
      reference: 'ODOO-INV-2025-00123',
      lines: [
        {
          description: 'Licencias Odoo Enterprise - 25 usuarios x enero',
          quantity: 25,
          unitPrice: 24,
          taxRate: 21,
          subtotal: 600,
          tax: 126,
          total: 726
        },
        {
          description: 'Hosting Odoo.sh - 2 workers',
          quantity: 2,
          unitPrice: 150,
          taxRate: 21,
          subtotal: 300,
          tax: 63,
          total: 363
        }
      ],
      subtotal: 900,
      tax: 189,
      total: 1089
    },
    {
      id: 'BILL-2025-002',
      supplierId: 'sup-002',
      date: '2025-01-10',
      dueDate: '2025-02-09',
      status: 'Pagada',
      reference: 'SISPRO-2025-0045',
      paymentDate: '2025-01-25',
      lines: [
        {
          description: 'Laptop HP ProBook para nuevo empleado',
          quantity: 1,
          unitPrice: 800,
          taxRate: 21,
          subtotal: 800,
          tax: 168,
          total: 968
        },
        {
          description: 'Monitor Dell 27"',
          quantity: 2,
          unitPrice: 350,
          taxRate: 21,
          subtotal: 700,
          tax: 147,
          total: 847
        }
      ],
      subtotal: 1500,
      tax: 315,
      total: 1815
    }
  ]
}

// Función para generar datos de ejemplo personalizados
export const generateSampleData = (type) => {
  const data = {
    client: () => consultingCompany.clients[Math.floor(Math.random() * consultingCompany.clients.length)],
    supplier: () => consultingCompany.suppliers[Math.floor(Math.random() * consultingCompany.suppliers.length)],
    service: () => consultingCompany.services[Math.floor(Math.random() * consultingCompany.services.length)],
    employee: () => consultingCompany.employees[Math.floor(Math.random() * consultingCompany.employees.length)],
    vehicle: () => consultingCompany.vehicles[Math.floor(Math.random() * consultingCompany.vehicles.length)],
  }

  return data[type] ? data[type]() : null
}

// Calcular totales para reportes
export const calculateTotals = () => {
  const pendingInvoices = consultingCompany.sampleInvoices
    .filter(inv => inv.status === 'Pendiente')
    .reduce((sum, inv) => sum + inv.total, 0)

  const pendingBills = consultingCompany.sampleSupplierInvoices
    .filter(bill => bill.status === 'Pendiente')
    .reduce((sum, bill) => sum + bill.total, 0)

  const totalBankBalance = consultingCompany.bankAccounts
    .reduce((sum, acc) => sum + acc.currentBalance, 0)

  return {
    accountsReceivable: pendingInvoices,
    accountsPayable: pendingBills,
    cashPosition: totalBankBalance,
    netWorkingCapital: totalBankBalance + pendingInvoices - pendingBills
  }
}

export default consultingCompany
