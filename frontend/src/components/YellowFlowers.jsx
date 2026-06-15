// Decorative yellow flowers scattered on left/right edges of the page
const Flower = ({ size = 90, hue = "#FFD700", accent = "#FF8C00", core = "#5b3d0f" }) => (
  <svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true">
    <defs>
      <radialGradient id={`pg-${hue.slice(1)}`} cx="50%" cy="40%" r="60%">
        <stop offset="0%" stopColor={hue} />
        <stop offset="70%" stopColor={hue} />
        <stop offset="100%" stopColor={accent} />
      </radialGradient>
    </defs>
    {Array.from({ length: 10 }).map((_, i) => (
      <ellipse
        key={i}
        cx="50"
        cy="22"
        rx="9"
        ry="22"
        fill={`url(#pg-${hue.slice(1)})`}
        stroke={accent}
        strokeWidth="0.6"
        opacity="0.92"
        transform={`rotate(${i * 36} 50 50)`}
      />
    ))}
    <circle cx="50" cy="50" r="11" fill={core} />
    <circle cx="50" cy="50" r="7" fill="#3a2407" />
  </svg>
);

const placements = [
  // left side
  { side: "left",  top: "3%",   offset: "2%",  size: 110, rot: -18 },
  { side: "left",  top: "20%",  offset: "8%",  size: 70,  rot: 22 },
  { side: "left",  top: "38%",  offset: "1%",  size: 130, rot: -10 },
  { side: "left",  top: "55%",  offset: "10%", size: 75,  rot: 30 },
  { side: "left",  top: "72%",  offset: "3%",  size: 95,  rot: -25 },
  { side: "left",  top: "88%",  offset: "11%", size: 80,  rot: 15 },
  // right side
  { side: "right", top: "4%",   offset: "3%",  size: 100, rot: 15 },
  { side: "right", top: "22%",  offset: "10%", size: 78,  rot: -28 },
  { side: "right", top: "40%",  offset: "1%",  size: 125, rot: 10 },
  { side: "right", top: "58%",  offset: "9%",  size: 72,  rot: -18 },
  { side: "right", top: "74%",  offset: "2%",  size: 105, rot: 22 },
  { side: "right", top: "89%",  offset: "10%", size: 82,  rot: -14 },
];

const YellowFlowers = () => (
  <div
    className="flower-deco-layer"
    aria-hidden="true"
    data-testid="flower-decorations"
  >
    {placements.map((p, i) => (
      <div
        key={i}
        className="flower-deco"
        style={{
          top: p.top,
          [p.side]: p.offset,
          transform: `rotate(${p.rot}deg)`,
          animationDelay: `${i * 0.12}s, 0s`,
        }}
      >
        <Flower size={p.size} />
      </div>
    ))}
  </div>
);

export default YellowFlowers;
