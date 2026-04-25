import './About.css';

const About = () => {
  const teamMembers = [
    {
      name: "Mag. SANDRA SCHWAIGHOFER (Austria)",
      role: "Interational mind trainer & hypno coach",
      description:
        "International certified SP practitioner (by Ines Simpson)\n" +
        "Member of the SP Certified-plus Board\n" +
        "Creator of mindVision®\n" +
        "Co-founder of the mindVision hypnosis institute\n" +
        "(Germany-Swiss-Austria)\n" +
        "Creator of mindSync – supraliminal hypnosis\n" +
        "Founder of PTSD-trauma.help (international)",
      
      /*
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),*/
      icon: (
          <img
            src="src\assets\images\sandra.jpeg"
            alt="Sandra"
            className="team-icon-img"
          />
      ),
      achievements: ["Program Visionary", "Academic Excellence", "Innovation Leader"]
    },
    {
      name: "HANNES TIEDENS (Switzerland)",
      role: "Interational mind trainer & hypno therapist",
      description: 
      "Non-medical practitioner for psychotherapy\n" +
      "SP practitioner\n" +
      "Co-founder of mindVision®\n" +
      "Co-founder of the mindVision hypnosis institute\n" +
      "(Germany-Swiss-Austria)\n" +
      "Co-founder of mindSync – supraliminal hypnosis\n" +
      "Co-Founder of PTSD-trauma.help (international)\n\n",
        
      icon: (
          <img
            src="src\assets\images\hannes.jpg"
            alt="Hannes Tiedens"
            className="team-icon-img"
          />
      ),

      /*
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      ),*/
      achievements: ["Global Partnerships", "Strategic Development", "International Excellence"]
    }
  ];

  const testimonials = [
    {
      quote: "Every",
      author: "Ms. Sandra Schwaighofer",
      role: "Interational mind trainer & hypno coach"
    },
    {
      quote: "“Life feels right, when everything feels light.",
      author: "Hanner Tidens",
      role: "Interational mind trainer & hypno therapist"
    }
  ];

  return (
    <section className="about section">
      <div className="container">
        {/* Header */}
        <div className="about-header text-center">
          <h2 className="about-title">
            Meet Our <span className="gradient-text">Therapists</span>
          </h2>
          <p className="about-subtitle">
            ------some text here -------------
          </p>
        </div>

        {/* Team Grid */}
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="team-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="team-card-inner">
                <div className="team-image-container">
                  <div className="team-icon-img">
                    {member.icon}
                  </div>
                  <div className="team-badge">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                      <path d="M2 17l10 5 10-5"/>
                      <path d="M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                
                <div className="team-content">
                  <h3 className="team-name">{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <p className="team-description">{member.description}</p>
                  
                  <div className="team-achievements">
                    {member.achievements.map((achievement, idx) => (
                      <span key={idx} className="achievement-tag">
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="team-card-bg"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <div className="testimonials-header text-center">
            <h3 className="testimonials-title">
              Words from Our <span className="gradient-text">Experts</span>
            </h3>
            <p className="testimonials-subtitle">
              Hear directly from the visionaries who are shaping the future of hypnotic trauma release
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                    </svg>
                  </div>
                  <blockquote className="testimonial-quote">
                    {testimonial.quote}
                  </blockquote>
                  <div className="testimonial-author">
                    <h4 className="author-name">{testimonial.author}</h4>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
                <div className="testimonial-bg"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="about-stats">
          <div className="stats-container">
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3>4</h3>
              <p>Visionary Leaders</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <h3>80%+</h3>
              <p>Alumni Success Rate</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </div>
              <h3>2023</h3>
              <p>Program Inception</p>
            </div>
            <div className="stat-item">
              <div className="stat-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
                </svg>
              </div>
              <h3>15+</h3>
              <p>Partner Universities</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
