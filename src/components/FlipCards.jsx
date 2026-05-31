import { useState } from "react";
import "./FlipCards.css"

export default function FlipCircleSection({
  sectionTitle,
  sectionText,
  cards = [],
}) {
  const [flippedCards, setFlippedCards] = useState([]);

  const handleFlip = (id) => {
    setFlippedCards((prev) =>
      prev.includes(id)
        ? prev.filter((cardId) => cardId !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="flip-circle-section">
      {(sectionTitle || sectionText) && (
        <div className="flip-circle-section-header">
          {sectionTitle && <h2>{sectionTitle}</h2>}
          {sectionText && <p>{sectionText}</p>}
        </div>
      )}

      <div className="flip-circle-grid">
        {cards.map((card) => {
          const Icon = card.icon;
          const isFlipped = flippedCards.includes(card.id);

          return (
            <button
              key={card.id}
              type="button"
              className={`flip-circle-card ${card.color || ""} ${
                isFlipped ? "is-flipped" : ""
              }`}
              onClick={() => handleFlip(card.id)}
              aria-pressed={isFlipped}
            >
              <div className="flip-circle-inner">
                <div className="flip-circle-face flip-circle-front">
                  {Icon && (
                    <div className={`flip-circle-icon ${card.color || ""}`}>
                      <Icon />
                    </div>
                  )}

                  <h3>{card.title}</h3>
                  <p>{card.text}</p>

                  <span className="flip-circle-read-more">
                    {card.frontButtonText || "Click to read more"}
                  </span>
                </div>

                <div className="flip-circle-face flip-circle-back">
                  <h3>{card.backTitle}</h3>
                  <p>{card.backText}</p>

                  <span className="flip-circle-read-more">
                    {card.backButtonText || "Click to go back"}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}