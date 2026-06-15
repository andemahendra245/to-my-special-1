import { useEffect, useState } from "react";

const PETAL_COUNT = 16;

const FallingPetals = ({ count = 22 }) => {
  const [petals] = useState(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 6 + Math.random() * 8,
      drift: (Math.random() - 0.5) * 200,
      size: 0.6 + Math.random() * 0.9,
    }))
  );
  return (
    <div className="falling-petals" aria-hidden="true">
      {petals.map((p) => (
        <span
          key={p.id}
          className="falling-petal"
          style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `scale(${p.size})`,
            "--drift": `${p.drift}px`,
          }}
        />
      ))}
    </div>
  );
};

const Sunflower = () => (
  <div className="sunflower" aria-hidden="true">
    {Array.from({ length: PETAL_COUNT }).map((_, i) => {
      const rot = (360 / PETAL_COUNT) * i;
      return (
        <span
          key={i}
          className="petal"
          style={{
            "--rot": `${rot}deg`,
            animationDelay: `${0.6 + i * 0.05}s`,
          }}
        />
      );
    })}
    <div className="sunflower-center" />
  </div>
);

const Splash = ({ phase, onStart, onFinish }) => {
  const [fadingHeart, setFadingHeart] = useState(false);

  useEffect(() => {
    if (phase === "splash") {
      // Total splash duration ≈ 6.2s, then transition to book
      const t = setTimeout(() => onFinish?.(), 6200);
      return () => clearTimeout(t);
    }
  }, [phase, onFinish]);

  const handleHeart = () => {
    setFadingHeart(true);
    setTimeout(() => onStart?.(), 700);
  };

  if (phase === "heart") {
    return (
      <div
        className={`heart-stage ${fadingHeart ? "fade-out" : ""}`}
        data-testid="heart-stage"
      >
        <button
          className="heart-btn"
          onClick={handleHeart}
          aria-label="Open birthday surprise"
          data-testid="heart-button"
        >
          <svg viewBox="0 0 100 100" className="heart-pulse">
            <defs>
              <radialGradient id="heartG" cx="35%" cy="30%" r="80%">
                <stop offset="0%" stopColor="#ff9caa" />
                <stop offset="55%" stopColor="#e36b80" />
                <stop offset="100%" stopColor="#b04760" />
              </radialGradient>
            </defs>
            <path
              fill="url(#heartG)"
              d="M50 86 C20 64 8 46 8 30 C8 17 18 8 30 8 C39 8 46 13 50 21 C54 13 61 8 70 8 C82 8 92 17 92 30 C92 46 80 64 50 86 Z"
            />
          </svg>
        </button>
        <div className="heart-caption" data-testid="heart-caption">
          A little surprise for
        </div>
        <div className="heart-caption-name">Rishii</div>
      </div>
    );
  }

  return (
    <div
      className={`splash-stage ${phase === "splash" ? "" : ""}`}
      data-testid="splash-stage"
    >
      <FallingPetals count={26} />
      <Sunflower />
      <div className="brand">
        <p className="brand-name">Happy Birthday, Rishii</p>
        <p className="brand-sub">A Memory Book · June 18</p>
      </div>
    </div>
  );
};

export default Splash;
