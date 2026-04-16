import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">ptsd-trauma.help</span>
            </h1>
            <p className="hero-subtitle">
              unique trauma release. efficient. gentle. safe.
            </p>
            <p className="hero-description">
               (C-)PTSD & trauma recovery program with no need to talk. A gentle way back into life. Online sessions & global network. New ways in hypnosis – no re-traumatization.
Experience our unique therapeutic approach & community. Get the best out of it! 
            </p>
            <div className="hero-buttons">
              <button className="btn-primary hero-cta">
                Start Your Journey
                <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn-secondary hero-secondary">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="hero-image-container">
              <div className="hero-image-placeholder">
                <div className="image-content">
                  <div className="university-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                  <h3>Summer School Program</h3>
                  <p>Innovative Learning Experience</p>
                </div>
              </div>
              <div className="floating-elements">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Students Transformed</p>
            </div>
            <div className="stat-item">
              <h3>2026</h3>
              <p>Metaverse Launch</p>
            </div>
            <div className="stat-item">
              <h3>AI-Powered</h3>
              <p>Learning Tools</p>
            </div>
            <div className="stat-item">
              <h3>International</h3>
              <p>Blueprint Program</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
