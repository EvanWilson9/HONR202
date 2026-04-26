import "./AdventurePage.css";

export default function AdventurePage({
  title,
  children,
  choices = [],
  onNavigate,
  onBack,
  onRestart,
  isEnding = false,
}) {
  return (
    <div className="adventure-page">
      <div className="adventure-nav-top">
        {onBack && (
          <button className="nav-btn back-btn" onClick={onBack}>
            ← Back
          </button>
        )}
        <button className="nav-btn restart-btn" onClick={onRestart}>
          ↺ Restart
        </button>
      </div>

      <div className="adventure-content">
        <h1 className="adventure-title">{title}</h1>

        <div className="adventure-body">{children}</div>

        {!isEnding && choices.length > 0 && (
          <div className="adventure-choices">
            <p className="choices-label">What do you say?</p>
            <div className="choices-list">
              {choices.map((choice, i) => (
                <button
                  key={i}
                  className="choice-btn"
                  onClick={() => onNavigate(choice.target)}
                >
                  {choice.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {isEnding && (
          <div className="ending-actions">
            <p className="ending-label">— The End —</p>
            <button className="nav-btn restart-btn" onClick={onRestart}>
              Begin Again
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
