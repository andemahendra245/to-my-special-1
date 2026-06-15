import { useState } from "react";

const COLORS = ["#FFD700", "#FF8C00", "#C99B8E", "#B85A6A", "#6B2937", "#E8C6BC", "#C9A24E"];

const Confetti = ({ count = 60 }) => {
  const [pieces] = useState(() =>
    Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 4 + Math.random() * 5,
      color: COLORS[i % COLORS.length],
      size: 0.6 + Math.random() * 1.1,
      rot: Math.random() * 360,
    }))
  );

  return (
    <div className="confetti-layer" aria-hidden="true" data-testid="confetti-layer">
      {pieces.map((p) => (
        <span
          key={p.id}
          className="confetti-piece"
          style={{
            left: `${p.left}%`,
            background: p.color,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `scale(${p.size}) rotate(${p.rot}deg)`,
          }}
        />
      ))}
    </div>
  );
};

export default Confetti;
