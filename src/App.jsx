import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import ModulePage from './pages/ModulePage'
import ExercisePage from './pages/ExercisePage'
import MissionsPage from './pages/MissionsPage'
import HelpCenterPage from './pages/HelpCenterPage'
import ExplorePage from './pages/ExplorePage'
import GlossaryPage from './pages/GlossaryPage'
import AccessibilityPanel from './components/AccessibilityPanel'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navigation />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="container mx-auto px-4 py-8"
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/aprender" element={<ExplorePage />} />
            <Route path="/practicar" element={<MissionsPage />} />
            <Route path="/practicar/:missionId" element={<MissionsPage />} />
            <Route path="/ayuda" element={<HelpCenterPage />} />
            <Route path="/glosario" element={<GlossaryPage />} />
            <Route path="/modulo/:moduleId" element={<ModulePage />} />
            <Route path="/modulo/:moduleId/leccion/:exerciseId" element={<ExercisePage />} />
          </Routes>
        </motion.main>
        <Footer />
        <AccessibilityPanel />
      </div>
    </Router>
  )
}

export default App
