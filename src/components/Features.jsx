import './Features.css';
import { Heart, CircleCheck,Smile,MonitorSmartphone, PencilRuler ,Brain } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: (
              <Heart />
      )
      ,
      title: "Unique therapeutic trauma programs",
      description: "Nocat package.json or hardly any stressful client’s abreactions.Clients’ safety is the first priority with hihgly trained & experienced team. See improvement already in 3-5 sessions."
    },
    {
      icon: (
                <CircleCheck />
      ),
      title: "Gentle & efficient hypnosis sessions",
      description: "Our active approach sharpens critical thinking skills, building adaptability and empowering students to become leaders in their academic journey."
    },
    {
      icon: (
         <Smile/>
      ),
      title: "Network building & finding friends",
      description: "Foster teamwork and communication skills through peer-to-peer learning and group problem-solving activities."
    },
    {
      icon: (

         <MonitorSmartphone />
      ),
      title: "Activities: regular webinars & group meetings",
      description: "Transform from learners to leaders with our comprehensive approach that builds confidence and leadership capabilities."
    },
    {
      icon: (
       <PencilRuler/>
      ),
      title: "Practical tips & tools for self-help",
      description: "Build adaptability and resilience through innovative learning models that prepare students for real-world challenges."
    },
    {
      icon: (
      <Brain/>
      ),
      title: "Training in self hypnosis & coping strategies",
      description: "Experience a complete transformation in your learning approach, making education engaging, effective, and empowering."
    }
  ];

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header text-center">
          <h2 className="features-title">
            What we offer at  <span className="gradient-text">PTSD-tauma.help</span>
          </h2>
          <p className="features-subtitle">
            Discover the innovative learning models that set NUST Summer School apart from traditional education
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>

        <div className="features-cta text-center">
          <p className="features-cta-text">
            Ready to experience transformative education?
          </p>
          <button className="btn-primary features-button">
            Join Our Program
            <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;
