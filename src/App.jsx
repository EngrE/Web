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
import PtsdTraumaDealingPage from "./pages/ptsd-trauma/PtsdTraumaDealingPage";
import PtsdTraumaOvercomingPage from "./pages/ptsd-trauma/PtsdTraumaOvercomingPage";
import PtsdTraumaUnderstandingPage from "./pages/ptsd-trauma/PtsdTraumaUnderstandingPage";
import PtsdTraumaManagingPage from "./pages/ptsd-trauma/PtsdTraumaManagingPage";
import PtsdTraumaNotReadyPage from "./pages/ptsd-trauma/PtsdTraumaNotReadyPage";


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
          <Route path="/ptsd-trauma/dealing" element={<PtsdTraumaDealingPage />}/>
          <Route path="/ptsd-trauma/overcoming" element={<PtsdTraumaOvercomingPage />}/>
          <Route path="/ptsd-trauma/understanding" element={<PtsdTraumaUnderstandingPage />}/>
          <Route path="/ptsd-trauma/managing" element={<PtsdTraumaManagingPage />}/>
          <Route path="/ptsd-trauma/notready" element={<PtsdTraumaNotReadyPage />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
