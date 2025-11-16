import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  Home,
  BookOpen,
  Trophy,
  Award,
  Flame,
  Star,
  Menu,
  X,
  Target,
  Clock,
  Compass,
  HelpCircle,
  Library
} from 'lucide-react'
import { useState } from 'react'
import useStore from '../store/useStore'
import Badge from './ui/Badge'

const Navigation = () => {
  const location = useLocation()
  const { user } = useStore()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const xpForNextLevel = Math.max(user.level, 1) * 100
  const xpPercentage = Math.min(100, (user.xp / xpForNextLevel) * 100)

  const navItems = [
    { path: '/', icon: Home, label: 'Inicio' },
    { path: '/explore', icon: Compass, label: 'Explorar' },
    { path: '/glossary', icon: Library, label: 'Glosario' },
    { path: '/missions', icon: Target, label: 'Misiones' },
    { path: '/quick-guides', icon: Clock, label: 'Guías' },
    { path: '/faq', icon: HelpCircle, label: 'FAQ' },
  ]

  return (
    // Mentora Hub: Fondo AZUL REY sólido (#001D7A), texto blanco
    <nav className="bg-primary-500 sticky top-0 z-30 shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-secondary-500 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-white" />
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-heading font-bold text-white">
                Odoo Learning Platform
              </h1>
              <p className="text-xs text-white/80">by Mentora Hub</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className="relative"
                >
                  <div
                    className={`
                      flex items-center gap-2 px-4 py-2 rounded-lg
                      transition-colors duration-200
                      ${isActive
                        ? 'bg-accent-brillante text-white'  // Estado activo: AZUL BRILLANTE
                        : 'text-white/90 hover:bg-white/10'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </div>
                  {isActive && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-3 left-2 right-2 h-1 bg-secondary-500 rounded-full"
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* User Stats */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Streak */}
            <div
              className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg"
            >
              <Flame className="w-5 h-5 text-secondary-500" />
              <div>
                <p className="text-xs text-white/80 font-medium">Racha</p>
                <p className="text-sm font-bold text-white">
                  {user.streak} días
                </p>
              </div>
            </div>

            {/* XP & Level */}
            <div
              className="flex items-center gap-3 px-4 py-2 bg-white rounded-lg"
            >
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary-500 rounded-full flex items-center justify-center">
                  <span className="text-xs font-bold text-white">
                    {user.level}
                  </span>
                </div>
              </div>
              <div className="min-w-[100px]">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-medium text-neutral-600">
                    Nivel {user.level}
                  </span>
                  <span className="text-xs font-bold text-primary-500">
                    {user.xp}/{xpForNextLevel} XP
                  </span>
                </div>
                <div className="h-2 bg-neutral-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${xpPercentage}%` }}
                    className="h-full bg-accent-brillante rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* Badges count */}
            {user.badges.length > 0 && (
              <div
                className="flex items-center gap-2 px-3 py-2 bg-white/10 rounded-lg"
              >
                <Award className="w-5 h-5 text-accent-aqua" />
                <span className="text-sm font-bold text-white">
                  {user.badges.length}
                </span>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/20"
          >
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`
                      flex items-center gap-3 px-4 py-3 rounded-lg
                      ${isActive
                        ? 'bg-accent-brillante text-white'
                        : 'text-white/90 hover:bg-white/10'
                      }
                    `}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Mobile Stats */}
            <div className="mt-4 pt-4 border-t border-white/20 space-y-3">
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-white/80">Nivel</span>
                <Badge tone="primary" variant="solid">{user.level}</Badge>
              </div>
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-white/80">XP</span>
                <Badge tone="secondary" variant="solid">
                  {user.xp}/{xpForNextLevel}
                </Badge>
              </div>
              <div className="flex items-center justify-between px-4">
                <span className="text-sm text-white/80">Racha</span>
                <Badge tone="warning" variant="solid" icon={<Flame className="w-3 h-3" />}>
                  {user.streak} días
                </Badge>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
