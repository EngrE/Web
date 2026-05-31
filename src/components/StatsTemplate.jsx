import "./StatsTemplate.css";

export default function StatsTemplate({
  stats = [],
  backgroundImage,
  className = "",
}) {
  return (
    <section
      className={`stats-template-section ${className}`}
      style={
        backgroundImage
          ? { "--stats-bg-image": `url(${backgroundImage})` }
          : undefined
      }
    >
      <div className="stats-template-container">
        <div className="stats-template-grid">
          {stats.map((item, index) => (
            <article className="stats-template-card" key={index}>
              <h3 className="stats-template-number">{item.value}</h3>
              <p className="stats-template-label">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}