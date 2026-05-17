import "./Features.css";

const Features = ({
  sectionId = "features",
  title,
  gradientTitle,
  subtitle,
  features = [],
  ctaText,
  buttonText,
}) => {
  return (
    <section id={sectionId} className="features section">
      <div className="container">
        <div className="features-header text-center">
          <h2 className="features-title">
            {title} <span className="gradient-text">{gradientTitle}</span>
          </h2>
          <p className="features-subtitle">
            (C-)PTSD & trauma recovery program with no need to talk. A gentle way back into life.
          </p>A unique approach to healing.
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">
                {feature.icon}
              </div>

              <h3 className="feature-title">
                {feature.title}
              </h3>

              <p className="feature-description">
                {feature.description}
              </p>

              <div className="feature-hover-effect"></div>
            </div>
          ))}
        </div>

        <div className="features-cta text-center">
          <p className="features-cta-text">
            PTSD & trauma: how to deal with it
          </p>
          <button className="btn-primary features-button">
            Understand yourself
            <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-primary features-button">
             Choose a new unique approach
            <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-primary features-button">
            Join our services
            <svg className="button-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;