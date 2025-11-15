# 🚀 Odoo Learning Platform - Mentora Hub

Una plataforma de aprendizaje interactiva y gamificada para dominar Odoo 19, diseñada para hacer el aprendizaje divertido, efectivo y motivador.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Odoo](https://img.shields.io/badge/Odoo-19-purple.svg)
![React](https://img.shields.io/badge/React-18.3-61dafb.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

## ✨ Características Principales

### 🎮 Gamificación Completa
- **Sistema de XP y Niveles**: Gana experiencia completando lecciones
- **Logros y Badges**: Desbloquea insignias por tus logros
- **Racha de Aprendizaje**: Mantén tu motivación con rachas diarias
- **Progreso Visual**: Barras de progreso animadas para cada módulo

### 📚 Contenido Educativo Estructurado
- **9 Módulos Principales**: Contabilidad, Ventas, Flota, CRM, Inventario, Compras, RR.HH., Proyectos, y más
- **60+ Lecciones**: Contenido detallado con ejemplos prácticos
- **Ejercicios Interactivos**: Aprende practicando con simulaciones
- **Quizzes**: Verifica tu comprensión con evaluaciones

### 🎨 Interfaz Moderna y Atractiva
- **Diseño Responsive**: Funciona perfectamente en móviles, tablets y desktop
- **Animaciones Fluidas**: Transiciones suaves con Framer Motion
- **Dark Mode Ready**: Preparado para modo oscuro
- **Colores de Mentora Hub**: Paleta de colores personalizada y atractiva

### 📊 Módulos Prioritarios

#### 💰 Contabilidad
- Configuración inicial y plan de cuentas
- Gestión de facturas de clientes y proveedores
- Conciliación bancaria
- Reportes financieros
- Impuestos y declaraciones

#### 📊 Ventas
- Configuración del módulo
- Cotizaciones y pedidos
- Pipeline de ventas
- Facturación
- Análisis y reportes

#### 🚗 Flota
- Gestión de vehículos
- Asignación a conductores
- Mantenimiento y servicios
- Control de costos
- Contratos y seguros

## 🛠️ Tecnologías Utilizadas

- **React 18.3** - Framework de UI
- **Vite** - Build tool ultrarrápido
- **React Router 6** - Navegación
- **Framer Motion** - Animaciones fluidas
- **Tailwind CSS** - Estilos utility-first
- **Zustand** - Gestión de estado global
- **Lucide React** - Iconos modernos

## 📦 Instalación

### Requisitos Previos
- Node.js 16+ y npm/yarn
- Git

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/jpfrut/odoo-learning-platform.git
   cd odoo-learning-platform
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:3000
   ```

## 🎯 Cómo Usar la Plataforma

### Para Estudiantes

1. **Dashboard Principal**
   - Ve tu progreso general
   - Revisa tus estadísticas (XP, nivel, racha)
   - Explora los módulos disponibles

2. **Módulos de Aprendizaje**
   - Selecciona un módulo prioritario (Contabilidad, Ventas, Flota)
   - Ve el desglose de lecciones
   - Revisa tu progreso en cada módulo

3. **Lecciones Interactivas**
   - Lee el contenido educativo detallado
   - Estudia los ejemplos prácticos
   - Toma nota de los consejos importantes
   - Completa el quiz al final

4. **Sistema de Progreso**
   - Completa lecciones para ganar XP
   - Sube de nivel
   - Desbloquea logros
   - Mantén tu racha diaria

### Para Administradores/Desarrolladores

#### Agregar Nuevo Módulo

1. Editar `src/data/modules.js`:
```javascript
export const odooModules = {
  // ... módulos existentes
  nuevo_modulo: {
    id: 'nuevo_modulo',
    name: 'Nombre del Módulo',
    icon: '🎯',
    color: 'from-blue-500 to-indigo-600',
    priority: 2,
    description: 'Descripción del módulo',
    estimatedTime: '4 horas',
    difficulty: 'Intermedio',
    lessons: [
      {
        id: 'nuevo-001',
        title: 'Primera Lección',
        duration: '30 min',
        xp: 50,
        topics: ['Tema 1', 'Tema 2']
      }
    ]
  }
}
```

#### Agregar Contenido de Lección

2. Editar `src/data/lessonContent.js`:
```javascript
export const lessonContent = {
  'nuevo-001': {
    title: 'Primera Lección',
    introduction: 'Texto introductorio...',
    sections: [
      {
        title: 'Sección 1',
        content: 'Contenido detallado...',
        example: 'Ejemplo práctico...',
        tips: ['Consejo 1', 'Consejo 2']
      }
    ],
    quiz: {
      questions: [
        {
          id: 'q1',
          question: '¿Pregunta?',
          options: ['Opción 1', 'Opción 2', 'Opción 3'],
          correct: 0,
          explanation: 'Explicación de la respuesta correcta'
        }
      ]
    }
  }
}
```

## 📁 Estructura del Proyecto

```
odoo-learning-platform/
├── src/
│   ├── components/           # Componentes reutilizables
│   │   ├── ui/              # Componentes UI base
│   │   │   ├── Button.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── ProgressBar.jsx
│   │   │   └── Modal.jsx
│   │   ├── Navigation.jsx
│   │   ├── ModuleCard.jsx
│   │   ├── StatsCard.jsx
│   │   └── AchievementCard.jsx
│   ├── pages/               # Páginas principales
│   │   ├── Dashboard.jsx
│   │   ├── ModulePage.jsx
│   │   └── ExercisePage.jsx
│   ├── data/                # Datos estáticos
│   │   ├── modules.js       # Definición de módulos
│   │   └── lessonContent.js # Contenido educativo
│   ├── store/               # Estado global
│   │   └── useStore.js
│   ├── App.jsx              # Componente principal
│   ├── main.jsx             # Punto de entrada
│   └── index.css            # Estilos globales
├── public/                  # Archivos estáticos
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Personalización de Colores

Para aplicar los colores de Mentora Hub, edita `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        // ... agregar escala completa
        900: '#0c4a6e',
      },
      secondary: {
        // ... colores secundarios
      }
    }
  }
}
```

## 🚀 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Construye para producción
- `npm run preview` - Previsualiza build de producción

## 📈 Roadmap

### Versión 1.1 (Próximamente)
- [ ] Contenido completo para todos los módulos
- [ ] Sistema de certificados al completar módulos
- [ ] Modo oscuro
- [ ] Exportar progreso en PDF

### Versión 1.2
- [ ] Simulador de Odoo integrado
- [ ] Videos tutoriales
- [ ] Comunidad y foros
- [ ] Desafíos semanales

### Versión 2.0
- [ ] Backend con API REST
- [ ] Autenticación de usuarios
- [ ] Progreso sincronizado en la nube
- [ ] Múltiples idiomas

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Mentora Hub** - *Desarrollo inicial* - [MentoraHub](https://github.com/mentorahub)

## 🙏 Agradecimientos

- Comunidad de Odoo por la documentación
- Iconos por Lucide Icons
- Animaciones por Framer Motion
- Estilos por Tailwind CSS

## 📞 Soporte

¿Necesitas ayuda? Contáctanos:

- Email: support@mentorahub.com
- Website: https://mentorahub.com
- GitHub Issues: https://github.com/jpfrut/odoo-learning-platform/issues

---

⭐ Si este proyecto te ha sido útil, considera darle una estrella en GitHub!

**¡Feliz Aprendizaje! 🎓**
