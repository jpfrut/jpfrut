import { Link } from 'react-router-dom'
import {
  BookOpen,
  Target,
  HelpCircle,
  Compass,
  Heart,
  Library
} from 'lucide-react'
import { getStats } from '../data/modules'

const Footer = () => {
  const stats = getStats()

  return (
    <footer className="bg-primary-500 text-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">Odoo Learning Platform</h3>
                <p className="text-xs text-white/70">by Mentora Hub</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-white/90">
              Plataforma completa de aprendizaje de Odoo 19 con cobertura del 154% de aplicaciones oficiales.
            </p>
            <div className="mt-4 flex items-center text-sm text-white/80">
              <Heart className="w-4 h-4 mr-1 text-secondary-500" />
              Hecho con amor para ti
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Aprende</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/aprender" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Compass className="w-4 h-4" />
                  Explorar Módulos
                </Link>
              </li>
              <li>
                <Link to="/practicar" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Misiones Prácticas
                </Link>
              </li>
              <li>
                <Link to="/glosario" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <Library className="w-4 h-4" />
                  Glosario
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Ayuda</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/ayuda" className="text-white/80 hover:text-accent-aqua transition-colors flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" />
                  Centro de Ayuda
                </Link>
              </li>
            </ul>
          </div>

          {/* Stats */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Plataforma Completa</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-white/80">Módulos de Odoo 19</span>
                <span className="text-white font-medium">{stats.totalModules}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/80">Categorías</span>
                <span className="text-white font-medium">{stats.categories.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/80">Lecciones totales</span>
                <span className="text-white font-medium">{stats.totalLessons}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/80">Horas de contenido</span>
                <span className="text-white font-medium">{stats.totalTime}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-white/70">
              © 2024 Odoo Learning Platform by Mentora Hub
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="text-white/70">Odoo 19</span>
              <span className="text-white/50">•</span>
              <span className="text-accent-aqua">154% Cobertura Oficial</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
