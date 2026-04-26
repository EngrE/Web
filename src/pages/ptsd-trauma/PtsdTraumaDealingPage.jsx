import "./PtsdTrauma.css";
import { Heart, ShieldCheck, Brain, HandHeart } from "lucide-react";

function PtsdTraumaDealingPage() {
  return (
    <main className="ptsd-page">
      <section className="vision section">
        <div className="container">
          <div className="vision-content">
            <div className="vision-text">
              <div className="vision-header">
                <h2 className="vision-title">
                  Dealing with{" "}
                  <span className="gradient-text">PTSD &amp; Trauma</span>
                </h2>

                <p className="vision-subtitle">
                  Practical, compassionate support for taking the first steps
                  toward healing.
                </p>
              </div>

              <div className="vision-points">
                <div className="vision-point">
                  <div className="vision-point-icon">
                    <ShieldCheck />
                  </div>
                  <div className="vision-point-content">
                    <h3 className="vision-point-title">
                      Create a sense of safety
                    </h3>
                    <p className="vision-point-description">
                      Start with small grounding actions that help your body and
                      mind feel more present.
                    </p>
                  </div>
                </div>

                <div className="vision-point">
                  <div className="vision-point-icon">
                    <Brain />
                  </div>
                  <div className="vision-point-content">
                    <h3 className="vision-point-title">
                      Understand your reactions
                    </h3>
                    <p className="vision-point-description">
                      Trauma responses are not weakness. They are protective
                      patterns your system learned.
                    </p>
                  </div>
                </div>

                <div className="vision-point">
                  <div className="vision-point-icon">
                    <HandHeart />
                  </div>
                  <div className="vision-point-content">
                    <h3 className="vision-point-title">
                      Take one step at a time
                    </h3>
                    <p className="vision-point-description">
                      Healing does not need to be rushed. A steady, gentle
                      approach can be more sustainable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="vision-cta">
                <button className="btn-primary vision-button">
                  Start Your Healing Journey
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
            </div>

            <div className="vision-image">
              <h2 className="vision-title">
                Support for you:{" "}
                <span className="gradient-text">
                  what can help right now?
                </span>
              </h2>

              <div className="vision-carousel-container">
                <div className="carousel-slide">
                  <div
                    className="carousel-image"
                    style={{
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    }}
                  >
                    <div className="carousel-content">
                      <div className="carousel-icon">
                        <Heart />
                      </div>
                      <h3>Grounding support</h3>
                      <p>
                        Simple practices to reconnect with the present moment
                        when emotions feel intense.
                      </p>
                    </div>
                    <div className="carousel-overlay"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default PtsdTraumaDealingPage;