import { Link } from 'react-router-dom';
import './CallToAction.css';
import { Phone, ClipboardClock,Scale } from 'lucide-react';



const CallToAction = () => {
  return (
    <section className="cta section">
      <div className="cta-background">
        <div className="cta-overlay"></div>
      </div>
      
      <div className="container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-title">
              Make an <span className="cta-gradient-text">appointment today!</span>
            </h2>
            <p className="cta-description">
              Our expert network provides unique high-level hypnosis services, efficient high-level interventions, 
              and offers comprehensive solutions for the gentle release of your trauma experiences.
            </p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-feature-icon">
                  <ClipboardClock/>
                </div>
                <span>Book an online session</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">
                 <Phone/>
                </div>
                <span>Free pre-talk (20 min.)</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">
                 <Scale/>
                </div>
                <span>Therapeutic code of ethics</span>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <div className="cta-buttons">
              <Link to="/apply" className="btn-primary cta-primary">
                Book Now
                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn-secondary cta-secondary">
                Learn More
              </Link>
            </div>
            
            <div className="cta-stats">
              <div className="cta-stat">
                <h3>100%</h3>
                <p>Inclusion Rate</p>
              </div>
              <div className="cta-stat">
                <h3>2026</h3>
                <p>Metaverse Launch</p>
              </div>
              <div className="cta-stat">
                <h3>International</h3>
                <p>Blueprint Program</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="cta-timeline">
          <h3 className="timeline-title">Your Journey Timeline</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-header">
                <h4 className="timeline-step-title">Application</h4>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <p>Submit your application and join our transformative program</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4 className="timeline-step-title">Pre-University Access</h4>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <p>Access recorded sessions on NUST LMS before arriving on campus</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4 className="timeline-step-title">Summer School</h4>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <p>Experience innovative learning models and collaborative education</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4 className="timeline-step-title">Leadership Ready</h4>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <p>Step into university as a leader, not just a learner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
