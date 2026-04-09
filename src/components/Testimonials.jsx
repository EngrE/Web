import { Link } from 'react-router-dom';
import './Testimonials.css';

const Testimonials = () => {
  const studentTestimonials = [
    {
      name: "Sarah Ahmed",
      role: "Computer Science Student",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      quote: "The Summer School completely transformed my approach to learning. The flipped classroom model made me realize that education is about active engagement, not passive listening. I entered university with confidence and leadership skills I never knew I had.",
      rating: 5,
      program: "2024 Cohort"
    },
    {
      name: "Ahmed Hassan",
      role: "Engineering Student",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      quote: "Dr. Fiaz's sessions on 'Living a Meaningful Life' changed everything for me. I went from just wanting good grades to wanting to make a real difference in the world. The program doesn't just prepare you for university—it prepares you for life.",
      rating: 5,
      program: "2025 Cohort"
    },
    {
      name: "Fatima Khan",
      role: "Business Student",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      quote: "The trauma-release sessions were life-changing. I had so much anxiety about starting university, but the program helped me process those fears and build resilience. Now I'm not just surviving university—I'm thriving.",
      rating: 5,
      program: "2024 Cohort"
    },
    {
      name: "Omar Ali",
      role: "Medicine Student",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      quote: "The collaborative learning environment was incredible. I made lifelong friends and learned that the best education happens when you're working together, not competing. The program taught me that leadership is about lifting others up.",
      rating: 5,
      program: "2023 Cohort"
    },
    {
      name: "Ayesha Malik",
      role: "Psychology Student",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      quote: "The international partnership with MIND Austria brought such diverse perspectives to our learning. It opened my eyes to global approaches to education and made me realize the potential we have to create positive change worldwide.",
      rating: 5,
      program: "2024 Cohort"
    },
    {
      name: "Hassan Raza",
      role: "Data Science Student",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      quote: "The AI-assisted learning tools were amazing. They helped identify my strengths and areas for improvement, making my learning journey so much more personalized and effective. I felt like the program was designed specifically for me.",
      rating: 5,
      program: "2025 Cohort"
    }
  ];

  const stats = [
    { number: "80%+", label: "Academic Excellence", description: "Alumni outperform peers" },
    { number: "95%", label: "Satisfaction Rate", description: "Students recommend the program" },
    { number: "3+", label: "Years of Excellence", description: "Proven track record" },
    { number: "500+", label: "Students Transformed", description: "Lives changed since 2023" }
  ];

  return (
    <section className="testimonials section">
      <div className="container">
        {/* Header */}
        <div className="testimonials-header text-center">
          <h2 className="testimonials-title">
            Voices of <span className="gradient-text">Transformation</span>
          </h2>
          <p className="testimonials-subtitle">
            Hear from students whose lives have been transformed by the NUST Summer School experience
          </p>
        </div>

        {/* Stats */}
        <div className="testimonials-stats">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="stat-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-description">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid">
          {studentTestimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="testimonial-card"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="testimonial-content">
                <div className="testimonial-header">
                  <div className="student-image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="student-info">
                    <h4 className="student-name">{testimonial.name}</h4>
                    <p className="student-role">{testimonial.role}</p>
                    <span className="program-badge">{testimonial.program}</span>
                  </div>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                </div>
                
                <blockquote className="testimonial-quote">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="testimonial-footer">
                  <div className="quote-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/>
                      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="testimonial-bg"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="testimonials-cta text-center">
          <h3 className="cta-title">
            Ready to Join Our <span className="testimonials-gradient-text">Success Stories?</span>
          </h3>
          <p className="cta-description">
            Be part of the next generation of leaders who are transforming education and making a difference in the world.
          </p>
          <div className="cta-buttons">
            <Link to="/auth" className="btn-primary cta-button">
              Apply Now
              <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
