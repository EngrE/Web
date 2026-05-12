import Hero from '../components/Hero'
import Features from '../components/Features'
import HealingJourney from '../components/HealingJourney'
import CallToAction from '../components/CallToAction'
import '../components/Features.css'
import { Heart, CircleCheck,Smile,MonitorSmartphone, PencilRuler ,Brain } from 'lucide-react'



const HomePage = () => {
  return (
    <div className="home-page">
      <Hero />
      <Features
          title="What we offer at"
          gradientTitle="PTSD-trauma.help"
          subtitle="Discover gentle, trauma-informed support options designed for PTSD recovery, self-help, and connection."
          ctaText="Ready to take the first step toward support?"
          buttonText="Book a Free Pre-Talk"
          features={[
              {
                icon: <Heart />,
                title: "Unique therapeutic trauma programs",
                description:
                  "Gentle trauma support designed to reduce stress, protect client safety, and avoid unnecessary retraumatization.",
              },
              {
                icon: <CircleCheck />,
                title: "Gentle & efficient hypnosis sessions",
                description:
                  "Supportive sessions focused on helping clients feel calmer, safer, and more empowered in their healing process.",
              },
              {
                icon: <Smile />,
                title: "Network building & finding friends",
                description:
                  "Connection-focused support that helps people feel less alone while building a stronger healing network.",
              },
              {
                icon: <MonitorSmartphone />,
                title: "Activities: regular webinars & group meetings",
                description:
                  "Helpful online activities, webinars, and group sessions for people seeking guidance and shared understanding.",
              },
              {
                icon: <PencilRuler />,
                title: "Practical tips & tools for self-help",
                description:
                  "Simple coping tools and practical strategies that can support daily emotional regulation and self-care.",
              },
              {
                icon: <Brain />,
                title: "Training in self hypnosis & coping strategies",
                description:
                  "Guided techniques that help people build coping skills, calm the nervous system, and support long-term resilience.",
              },
            ]}
          />
      <HealingJourney />
      <CallToAction />
    </div>
  )
}

export default HomePage