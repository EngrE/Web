import { useEffect, useState } from "react";
import "./ModalCards.css";

function ModalCards({
  heading,
  subtitle,
  cards = [],
  showReadMore = false,
  className = "",
}) {
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    if (!selectedCard) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setSelectedCard(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [selectedCard]);

  return (
    <>
      <section className={`modal-cards-section section ${className}`}>
        <div className="container">
          {(heading || subtitle) && (
            <div className="modal-section-header">
            {heading && <h2 className="modal-section-title">{heading}</h2>}
            {subtitle && <p className="modal-section-subtitle">{subtitle}</p>}
            </div>
          )}

          <div className="modal-circle-grid">
            {cards.map((card, index) => (
              <article
                key={index}
                className={`modal-circle-card ${card.colorType}`}
                onClick={() => setSelectedCard(card)}
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setSelectedCard(card);
                  }
                }}
              >
                <div className={`modal-circle-icon ${card.colorType}`}>
                  {card.icon}
                </div>

                <h3>{card.title}</h3>

                {card.excerpt && <p>{card.excerpt}</p>}

                {showReadMore && (
                  <span className="modal-read-more">
                    read more
                  </span>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedCard && (
        <div
          className="modal-modal-overlay"
          onClick={() => setSelectedCard(null)}
        >
          <div
            className="modal-modal"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-modal-close"
              onClick={() => setSelectedCard(null)}
            >
              ×
            </button>

            <div className="modal-modal-header">
              <div className={`modal-modal-icon ${selectedCard.colorType}`}>
                {selectedCard.icon}
              </div>

              <h3>{selectedCard.title}</h3>
            </div>

            <div className="modal-modal-content">
              {selectedCard.fullContent}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ModalCards;