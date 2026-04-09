import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import JourneyPage from './pages/JourneyPage'
import TestimonialsPage from './pages/TestimonialsPage'
import ApplyPage from './pages/ApplyPage'
import AuthPage from './pages/AuthPage'
import './App.css'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/apply" element={<ApplyPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
