import { useState, useEffect } from "react";
import "./Vision.css";
import {
  Heart,
  HeartHandshake,
  LockOpen,
  ToolCase,
  BookOpenCheck,
} from "lucide-react";

const defaultVisionPoints = [
  {
    title: "title",
    description:
      "desc",
  },
  {
    title: "title",
    description:
      "desc",  },
  {
    title: "PTSD & trauma recovery",
    description: "Find your optimal personally tailored program!",
  },
  {
    title: "Our services",
    description:
      "From single sessions, group sessions, community activities, webinars, and your personal toolbox.",
  },
];

const defaultSlides = [
  {
    id: 1,
    title: "slide1",
    description:
      "desc",
    icon: <Heart />,
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
  },
  {
    id: 2,
    title: "2",
    description:
      "desc",
    icon: <HeartHandshake />,
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
  },
  {
    id: 3,
    title: "3",
    description:
      "desc",
    icon: <LockOpen />,
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
  },
  {
    id: 4,
    title: "New tools & strategies for home",
    description: "Build your skills and use your coping strategies at home.",
    icon: <ToolCase />,
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
  },
  {
    id: 5,
    title: "Practical info for you & your loved ones",
    description:
      "Do’s and don’ts for dealing with PTSD and trauma in everyday life.",
    icon: <BookOpenCheck />,
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
  },
];

const DefaultIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const VisionTemplate = ({
  sectionId = "vision",
  titlePrefix = "Our",
  titleHighlight = "Vision",
  subtitle = "Easy and accessible global help for people dealing with trauma and PTSD is our first priority.",
  visionPoints = defaultVisionPoints,
  carouselTitlePrefix = "As affected one:",
  carouselTitleHighlight = "are you looking for this?",
  slides = defaultSlides,
  ctaText = "Be Part of Our Vision",
  autoPlay = true,
  autoPlaySpeed = 4000,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(autoPlay);

  useEffect(() => {
    if (!isAutoPlaying || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, autoPlaySpeed);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length, autoPlaySpeed]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id={sectionId} className="vision section">
      <div className="container">
        <div className="vision-content">
          <div className="vision-text">
            <div className="vision-header">
                {(titlePrefix || titleHighlight) && (
                <h2 className="vision-title">
                    {titlePrefix && titlePrefix}{" "}
                    {titleHighlight && (
                    <span className="gradient-text">{titleHighlight}</span>
                    )}
                </h2>
                )}

              <p className="vision-subtitle">{subtitle}</p>
            </div>

            <div className="vision-points">
              {visionPoints.map((point, index) => (
                <div
                  key={index}
                  className="vision-point"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="vision-point-icon">
                    {point.icon || <DefaultIcon />}
                  </div>

                  <div className="vision-point-content">
                    <h3 className="vision-point-title">{point.title}</h3>
                    <p className="vision-point-description">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {ctaText && (
              <div className="vision-cta">
                <button className="btn-primary vision-button">
                  {ctaText}
                  <svg
                    className="button-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}
          </div>

          <div className="vision-image">
            <h2 className="vision-title">
              {carouselTitlePrefix}{" "}
              <span className="gradient-text">
                {carouselTitleHighlight}
              </span>
            </h2>

            <div className="vision-carousel-container">
              <div
                className="vision-carousel"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(autoPlay)}
              >
                <div
                  className="carousel-track"
                  style={{
                    transform: `translateX(-${currentSlide * 100}%)`,
                  }}
                >
                  {slides.map((slide) => (
                    <div key={slide.id} className="carousel-slide">
                      <div
                        className="carousel-image"
                        style={{ background: slide.gradient }}
                      >
                        <div className="carousel-content">
                          <div className="carousel-icon">{slide.icon}</div>
                          <h3>{slide.title}</h3>
                          <p>{slide.description}</p>
                        </div>

                        <div className="carousel-overlay" />
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  className="carousel-nav carousel-prev"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button
                  className="carousel-nav carousel-next"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  type="button"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>

              <div className="carousel-dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`carousel-dot ${
                      index === currentSlide ? "active" : ""
                    }`}
                    onClick={() => goToSlide(index)}
                    aria-label={`Go to slide ${index + 1}`}
                    type="button"
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