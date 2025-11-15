import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from './components/Navigation'
import Dashboard from './pages/Dashboard'
import ModulePage from './pages/ModulePage'
import ExercisePage from './pages/ExercisePage'

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
            <Route path="/module/:moduleId" element={<ModulePage />} />
            <Route path="/module/:moduleId/exercise/:exerciseId" element={<ExercisePage />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App
