import { Link } from 'react-router-dom';
import './CallToAction.css';

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
              Ready to Transform Your <span className="cta-gradient-text">Academic Journey?</span>
            </h2>
            <p className="cta-description">
              Join thousands of students who are already experiencing the future of education. 
              Don't just be a learner—become a leader. Your transformative journey starts here.
            </p>
            
            <div className="cta-features">
              <div className="cta-feature">
                <div className="cta-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 12l2 2 4-4"/>
                    <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
                  </svg>
                </div>
                <span>100% Inclusive Program</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                  </svg>
                </div>
                <span>AI-Powered Learning</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span>Future-Ready Education</span>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <div className="cta-buttons">
              <Link to="/apply" className="btn-primary cta-primary">
                Apply Now
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
                <h3>National</h3>
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
