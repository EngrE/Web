import { useState } from "react";
import "./CompactStatsTemplate.css";

export default function CompactStatsTemplate({
  sections = [],
  backgroundImage,
  className = "",
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const activeSection = sections[activeIndex];

  return (
    <section
      className={`compact-stats-section ${className}`}
      style={
        backgroundImage
          ? { "--compact-stats-bg": `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="compact-stats-container">
        <div className="compact-stats-header">
          <h2>{activeSection?.title}</h2>

          <div className="compact-stats-tabs">
            {sections.map((section, index) => (
              <button
                key={section.title}
                className={index === activeIndex ? "active" : ""}
                onClick={() => setActiveIndex(index)}
                type="button"
              >
                {section.title}
              </button>
            ))}
          </div>
        </div>

        <div className="compact-stats-grid">
          {activeSection?.items.map((item, index) => {
            const percentValue = Number(String(item.value).replace("%", ""));

            return (
              <article className="compact-stat-card" key={index}>
                <div className="compact-stat-value">{item.value}</div>

                <div className="compact-stat-content">
                  <h3>{item.label}</h3>
                  <p>{item.description}</p>

                  {!Number.isNaN(percentValue) && (
                    <div className="compact-stat-bar">
                      <span style={{ width: `${percentValue}%` }} />
                    </div>
                  )}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}