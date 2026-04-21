import { useEffect, useState } from 'react';
import './Hero.css';
import heroImage from '../assets/images/pexels-pixabay-349758-scaled.jpg';
import { Heart, Smile, Brain, Network } from 'lucide-react';

const Hero = () => {
  const slides = [
    {

      icon: <Heart />,
      title: 'gentle & rapid',
      text: '------',
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      icon: <Brain />,
      title: 'training & education',
      text: 'Gentle support for trauma recovery',
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: <Network />,
      title: 'community & network',
      text: 'Safe techniques with no re-traumatization',
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(autoSlide);
  }, [slides.length]);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-overlay">
          <img
            src={heroImage}
            alt="Hero"
            className="hero-img"
          />
        </div>
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
              PTSD & trauma recovery program with no need to talk. A gentle way back into life. Online sessions & global network. New ways in hypnosis – no re-traumatization.
              Experience our unique therapeutic approach & community. Get the best out of it!
            </p>
            <div className="hero-buttons">
              <button className="btn-primary hero-cta">
                Start Your Journey
                <svg className="cta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
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
              <div className="image-content" >
                <div className="university-icon">{slides[currentSlide].icon}</div>
                <h3>{slides[currentSlide].title}</h3>
                <p>{slides[currentSlide].text}</p>
              </div>

              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>

    <div className="floating-elements">
      <div className="floating-element element-1"><Heart /></div>
      <div className="floating-element element-3"><Smile /></div>
      <div className="floating-element element-2"><Heart /></div>
      <div className="floating-element element-4"><Smile /></div>
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