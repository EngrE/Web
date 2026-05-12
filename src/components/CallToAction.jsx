import { Link } from 'react-router-dom';
import './CallToAction.css';
import { Phone, ClipboardClock,LibraryBig } from 'lucide-react';
import React from "react"
import ReactCountryFlag from "react-country-flag"



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
                   <ReactCountryFlag
                countryCode="GB"
                svg
                style={{width: '2em', height: '2em',}}
                title="UK"
                />
                </div>
                {/* <span>English success stories</span> */}
                <span>Be inspired through the success stories of our English speaking clients.s</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">
                <ReactCountryFlag
                countryCode="ES"
                svg
                style={{width: '2em', height: '2em',}}
                title="Spain"
                />
                </div>
                {/* <span>Spanish success stories</span> */}
                <span>Be inspired through the success stories of our Spanish speaking clients.</span>
              </div>
              <div className="cta-feature">
                <div className="cta-feature-icon">
                 <ReactCountryFlag
                countryCode="DE"
                svg
                style={{width: '2em', height: '2em',}}
                title="Germany"
                />
                </div>
                {/* <span>German success stories</span> */}
                

                <span>Be inspired through the success stories of our German speaking clients.</span>
              </div>
            </div>
          </div>
          
          <div className="cta-actions">
            <div className="cta-buttons">
              <Link to="/apply" className="btn-primary cta-primary">
                Free pre-talk (20 min.)
                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </Link>
              <Link to="/about" className="btn-secondary cta-secondary">
                Book an online session
              </Link>
            </div>
            
            <div className="cta-stats">
              <div className="cta-stat">
                <h3>93%</h3>
                <p>Success Rate</p>
              </div>
              <div className="cta-stat">
                <h3>23</h3>
                <p>Countries Clients</p>
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
                <h4 className="timeline-step-title">Understanding PTSD & Trauma</h4>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <p>What is PTSD & trauma? Where does it come from? Who has is? symptoms? How can I recognize it?
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4 className="timeline-step-title">Managing PTSD & Trauma</h4>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content"> 
                <p>---------------------------------</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4 className="timeline-step-title">Dealing with a mental crisis situation</h4>
                <div className="timeline-dot"></div>
              </div>
              <div className="timeline-content">
                <p>-----------------</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-header">
                <h4 className="timeline-step-title">Overcoming PTSD & Trauma</h4>
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
