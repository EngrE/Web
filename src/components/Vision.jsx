import { useState, useEffect } from 'react';
import './Vision.css';
import { Heart, HeartHandshake,LockOpen,ToolCase, BookOpenCheck } from 'lucide-react';


const Vision = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const visionPoints = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
          <circle cx="9" cy="7" r="4"/>
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      title: "Deep and thorough changes",
      description: " On all levels of consicous and non consious mind. On a physical, mental, emotional, spiritual, epigenetic and cellular level."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Learn more",
      description: "New ways in dealing with trauma & PTSD through supraliminal hypnosis - how does it work?"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
        </svg>
      ),
      title: "PTSD & trauma recovery",
      description: "Find your optimal personally tailored program!"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      title: "Our services",
      description: "From single sessions, group sessions, community activities to webinars and your personal toolbox. Check it out!"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
        </svg>
      ),
      title: "Our Activities",
      description: "Learn more about our intensive therapy & training camp, our self hypnosis training, practical tools and community activities."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
          <path d="M8 12l2 2 4-4"/>
        </svg>
      ),
      title: "Highly qualified expert team",
      description: "Our team consists of leading hypno therapists and mind trainers with extensive additional training."
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      title: "What you get",
      description: "A unique technique, with a highly empathic and experienced team, enabling profound and lasting transformations where this did not seem possible anymore."
    }
  ];

  const educationalImages = [
    {
      id: 1,  
      title: "Gentle release & recovery from trauma symptoms",
      description: "Finding your way back to life as gently, fast, and efficiently as possible. No re-traumatization, stress-free – from anywhere in the world.",
      icon: (
        <Heart/>
      ),
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: " Emotional & mental resilience",
      description: "Building up peacefulness, inner balance & joy instead of mood swings and inner chaos.",
      icon: (
          <HeartHandshake/>
      ),
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      id: 3,   
 title: "Gentle release & recovery from trauma symptoms",
      description: "Finding your way back to life as gentle, fast, and efficient as possible. No re-traumatization, stress-free – from anywhere in the world.",
      icon: (
        <LockOpen/>
      ),
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 4,
      title: "New tools & strategies for home",  
      description: "Build your skills and use your coping strategies at home",
      icon: (
        <ToolCase/>
      ),
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      id: 5,
      title: "Practical infos for you & your loved ones",
      description: "Do’s and Don’ts dealing with PTSD & trauma in your everyday life",
      icon: (
        <BookOpenCheck/>
      ),
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    /*{
      id: 6,
      title: "Future Learning",
      description: "AI-Powered Education",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
          <polyline points="3.27,6.96 12,12.01 20.73,6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      ),
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    }*/
  ];

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % educationalImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, educationalImages.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % educationalImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + educationalImages.length) % educationalImages.length);
  };

  return (
    <section id="vision" className="vision section">
      <div className="container">
        <div className="vision-content">
          <div className="vision-text">
            <div className="vision-header">
              <h2 className="vision-title">
                Our <span className="gradient-text">Vision</span>
              </h2>
              <p className="vision-subtitle">
                
                Our mission: Easy and accessible global help for human beings dealing with trauma & PTSD is our first priority.
              </p>
            </div>

            <div className="vision-points">
              {visionPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="vision-point"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="vision-point-icon">
                    {point.icon}
                  </div>
                  <div className="vision-point-content">
                    <h3 className="vision-point-title">{point.title}</h3>
                    <p className="vision-point-description">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="vision-cta">
              <button className="btn-primary vision-button">
                Be Part of Our Vision
                <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="vision-image">

               <h2 className="vision-title">
                As affected one: <span className="gradient-text"> are you looking for this?</span>
              </h2>
            <div className="vision-carousel-container">
              <div 
                className="vision-carousel"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div 
                  className="carousel-track"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {educationalImages.map((image, index) => (
                    <div key={image.id} className="carousel-slide">
                      <div 
                        className="carousel-image"
                        style={{ background: image.gradient }}
                      >
                        <div className="carousel-content">
                          <div className="carousel-icon">
                            {image.icon}
                          </div>
                          <h3>{image.title}</h3>
                          <p>{image.description}</p>
                        </div>
                        <div className="carousel-overlay"></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Navigation Arrows */}
                <button 
                  className="carousel-nav carousel-prev"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </button>
                <button 
                  className="carousel-nav carousel-next"
                  onClick={nextSlide}
                  aria-label="Next slide"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </button>
              </div>
              
              {/* Dots Indicator */}
              <div className="carousel-dots">
                {educationalImages.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
