import Hero from '../components/Hero'
import Features from '../components/Features'
import Vision from '../components/Vision'
import CallToAction from '../components/CallToAction'

const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features />
      <Vision />
      <CallToAction />
    </div>
  )
}

export default HomePage
