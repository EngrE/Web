import './Journey.css';

const Journey = () => {
  const journeySteps = [
    {
      year: "2023",
      title: "The Beginning",
      subtitle: "STEM & Soft Skills Boot Camp",
      description: "NUST Summer School was launched as a pioneering STEM and soft-skills boot camp under the visionary leadership of Dr. Usman Hassan. This marked the beginning of a transformative educational journey.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=400&fit=crop",
      features: ["STEM Focus", "Soft Skills Training", "Foundation Building"],
      color: "var(--primary-blue)"
    },
    {
      year: "2024",
      title: "Expansion & Innovation",
      subtitle: "Trauma-Release & Personal Development",
      description: "The program expanded significantly with strategic support from MIND Austria, introducing trauma-release sessions and intensive personal development. Flipped classrooms and collaborative learning became core features.",
      image: "https://images.unsplash.com/photo-1523240798034-6a2160d2f4a4?w=500&h=400&fit=crop",
      features: ["MIND Austria Partnership", "Trauma-Release Sessions", "Flipped Classrooms"],
      color: "var(--secondary-blue)"
    },
    {
      year: "2025",
      title: "Philosophical Depth",
      subtitle: "Purpose-Driven Education",
      description: "Dr. Fiaz Hussain Shah joined the program, bringing philosophical and leadership dimensions. Sessions on 'Living a Meaningful Life' inspired students to align their education with purpose, ethics, and humanity.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=400&fit=crop",
      features: ["Philosophical Guidance", "Purpose Alignment", "Ethical Leadership"],
      color: "var(--accent-blue)"
    },
    {
      year: "2026",
      title: "Future Vision",
      subtitle: "Metaverse Campus Launch",
      description: "The program is set to launch a revolutionary metaverse campus, potentially in collaboration with Siemens, to host interactive learning environments and create immersive educational experiences.",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=500&h=400&fit=crop",
      features: ["Metaverse Campus", "Siemens Collaboration", "Immersive Learning"],
      color: "var(--primary-blue)"
    }
  ];

  const outcomes = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4"/>
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
        </svg>
      ),
      title: "80%+ Academic Excellence",
      description: "Over 80% of Summer School alumni outperform peers academically, often securing GPAs well above class average."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: "Seamless Transition",
      description: "Students transition into university life with great ease, diminishing anxiety often associated with this process."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Purpose-Driven Leaders",
      description: "Students re-evaluate their life goals and set the tone for their future career paths with meaningful purpose."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Strong Community Bonds",
      description: "Summer School provides a shared experience, facilitating bonding among students and creating lasting connections."
    }
  ];

  return (
    <section className="journey section">
      <div className="container">
        {/* Header */}
        <div className="journey-header text-center">
          <h2 className="journey-title">
            Our <span className="gradient-text">Evolution</span>
          </h2>
          <p className="journey-subtitle">
            From a simple boot camp to a transformative educational revolution - witness the journey of NUST Summer School
          </p>
        </div>

        {/* Timeline */}
        <div className="timeline-container">
          <div className="timeline-line"></div>
          
          {journeySteps.map((step, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="timeline-content">
                <div className="timeline-year" style={{ backgroundColor: step.color }}>
                  {step.year}
                </div>
                
                <div className={`timeline-card ${index % 2 === 0 ? 'card-white' : 'card-blue'}`}>
                  <div className="timeline-image">
                    <img src={step.image} alt={step.title} />
                    <div className="image-overlay" style={{ backgroundColor: step.color }}></div>
                  </div>
                  
                  <div className="timeline-text">
                    <h3 className="timeline-title">{step.title}</h3>
                    <h4 className="timeline-subtitle">{step.subtitle}</h4>
                    <p className="timeline-description">{step.description}</p>
                    
                    <div className="timeline-features">
                      {step.features.map((feature, idx) => (
                        <span key={idx} className="feature-tag" style={{ backgroundColor: step.color }}>
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="timeline-card-bg" style={{ background: `linear-gradient(135deg, ${step.color}20, ${step.color}10)` }}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Outcomes Section */}
        <div className="outcomes-section">
          <div className="outcomes-header text-center">
            <h3 className="outcomes-title">
              Proven <span className="gradient-text">Outcomes</span>
            </h3>
            <p className="outcomes-subtitle">
              The measurable impact of our transformative educational approach
            </p>
          </div>

          <div className="outcomes-grid">
            {outcomes.map((outcome, index) => (
              <div 
                key={index} 
                className="outcome-card"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="outcome-icon">
                  {outcome.icon}
                </div>
                <h4 className="outcome-title">{outcome.title}</h4>
                <p className="outcome-description">{outcome.description}</p>
                <div className="outcome-bg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="future-vision">
          <div className="vision-content">
            <div className="vision-text">
              <h3 className="vision-title">
                Where Knowledge Meets <span className="gradient-text">Humanity</span>
              </h3>
              <p className="vision-description">
                NUST Summer School is not just about excelling in university—it's about becoming purposeful leaders who can truly change the world. By placing humanity before professionalism, we shape minds, strengthen character, and inspire young people to live meaningful lives.
              </p>
              <div className="vision-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    </svg>
                  </div>
                  <span>Academic Excellence</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                    </svg>
                  </div>
                  <span>Ethical Leadership</span>
                </div>
                <div className="highlight-item">
                  <div className="highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                      <circle cx="9" cy="7" r="4"/>
                    </svg>
                  </div>
                  <span>Compassionate Hearts</span>
                </div>
              </div>
            </div>
            
            <div className="vision-image">
              <div className="vision-image-container">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop" alt="Future Vision" />
                <div className="vision-overlay">
                  <div className="vision-badge">
                    <span>2026</span>
                    <small>Metaverse Campus</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
