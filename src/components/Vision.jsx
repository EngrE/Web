import { useState, useEffect } from "react";
import "./Vision.css";

const VisionTemplate = ({
  title,
  highlightedTitle,
  subtitle,
  points = [],
  slides = [],
  buttonText,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (!slides.length) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="vision section">
      <div className="container">
        <div className="vision-content">
          <div className="vision-text">
            <div className="vision-header">
              <h2 className="vision-title">
                {title} <span className="gradient-text">{highlightedTitle}</span>
              </h2>

              <p className="vision-subtitle">{subtitle}</p>
            </div>

            <div className="vision-points">
              {points.map((point, index) => (
                <div className="vision-point" key={index}>
                  <div className="vision-point-icon">{point.icon}</div>

                  <div className="vision-point-content">
                    <h3 className="vision-point-title">{point.title}</h3>
                    <p className="vision-point-description">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {buttonText && (
              <div className="vision-cta">
                <button className="btn-primary vision-button">
                  {buttonText}
                </button>
              </div>
            )}
          </div>

          <div className="vision-image">
            <div className="vision-carousel-container">
              <div className="vision-carousel">
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {slides.map((slide) => (
                    <div className="carousel-slide" key={slide.id}>
                      <div
                        className="carousel-image"
                        style={{ background: slide.gradient }}
                      >
                        <div className="carousel-content">
                          <div className="carousel-icon">{slide.icon}</div>
                          <h3>{slide.title}</h3>
                          <p>{slide.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
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

export default VisionTemplate;