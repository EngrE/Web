import './Features.css';

const Features = () => {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Unique therapeutic trauma programs",
      description: "Students engage in active discussions, problem-solving, and collaboration rather than passive listening, creating a dynamic learning environment."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: "Gentle & efficient hypnosis sessions",
      description: "Our active approach sharpens critical thinking skills, building adaptability and empowering students to become leaders in their academic journey."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: "Network building & finding friends",
      description: "Foster teamwork and communication skills through peer-to-peer learning and group problem-solving activities."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Activities: regular webinars & group meetings",
      description: "Transform from learners to leaders with our comprehensive approach that builds confidence and leadership capabilities."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Practical tips & tools for self-help",
      description: "Build adaptability and resilience through innovative learning models that prepare students for real-world challenges."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
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
