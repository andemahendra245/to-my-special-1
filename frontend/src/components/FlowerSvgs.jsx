// Decorative SVG flowers — sunflower, yellow rose, white rose
// Used for the splash burst (lightweight & animatable)

export const Sunflower = ({ size = 80, idSuffix = "" }) => {
  const id1 = `sf-petal-${idSuffix}`;
  const id2 = `sf-center-${idSuffix}`;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <defs>
        <radialGradient id={id1} cx="50%" cy="80%" r="80%">
          <stop offset="0%" stopColor="#FFF099" />
          <stop offset="55%" stopColor="#FFD400" />
          <stop offset="100%" stopColor="#D86A00" />
        </radialGradient>
        <radialGradient id={id2} cx="40%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#7a4a18" />
          <stop offset="100%" stopColor="#1f0e05" />
        </radialGradient>
      </defs>
      {/* outer petals */}
      {Array.from({ length: 14 }).map((_, i) => (
        <ellipse
          key={`o-${i}`}
          cx="50"
          cy="18"
          rx="6"
          ry="22"
          fill={`url(#${id1})`}
          stroke="#a85a00"
          strokeWidth="0.3"
          transform={`rotate(${(i * 360) / 14} 50 50)`}
        />
      ))}
      {/* inner petals offset */}
      {Array.from({ length: 14 }).map((_, i) => (
        <ellipse
          key={`i-${i}`}
          cx="50"
          cy="26"
          rx="5"
          ry="14"
          fill={`url(#${id1})`}
          opacity="0.85"
          transform={`rotate(${(i * 360) / 14 + 360 / 28} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="14" fill={`url(#${id2})`} />
      <circle cx="50" cy="50" r="11" fill="#2a1407" opacity="0.7" />
      {[
        [46, 47], [50, 45], [54, 47], [47, 51], [53, 51], [50, 54], [48, 49], [52, 49],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="0.8" fill="#0d0500" />
      ))}
    </svg>
  );
};

export const YellowRose = ({ size = 80, idSuffix = "" }) => {
  const id = `yr-${idSuffix}`;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#FFF6BF" />
          <stop offset="45%" stopColor="#FFD23A" />
          <stop offset="100%" stopColor="#B8780C" />
        </radialGradient>
      </defs>
      {/* Outer petals (8) */}
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={`o-${i}`}
          cx="50"
          cy="24"
          rx="14"
          ry="20"
          fill={`url(#${id})`}
          stroke="#8a5a09"
          strokeWidth="0.3"
          opacity="0.92"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      {/* Middle petals (6) */}
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse
          key={`m-${i}`}
          cx="50"
          cy="34"
          rx="10"
          ry="13"
          fill={`url(#${id})`}
          opacity="0.95"
          transform={`rotate(${i * 60 + 30} 50 50)`}
        />
      ))}
      {/* Inner petals (5) */}
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={`i-${i}`}
          cx="50"
          cy="43"
          rx="6.5"
          ry="9"
          fill="#FFE066"
          opacity="0.95"
          transform={`rotate(${i * 72 + 15} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="3.5" fill="#8a5a09" />
    </svg>
  );
};

export const WhiteRose = ({ size = 80, idSuffix = "" }) => {
  const id = `wr-${idSuffix}`;
  return (
    <svg viewBox="0 0 100 100" width={size} height={size}>
      <defs>
        <radialGradient id={id} cx="50%" cy="50%" r="65%">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="55%" stopColor="#FBF1DC" />
          <stop offset="100%" stopColor="#B9A988" />
        </radialGradient>
      </defs>
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse
          key={`o-${i}`}
          cx="50"
          cy="24"
          rx="14"
          ry="20"
          fill={`url(#${id})`}
          stroke="#B9A988"
          strokeWidth="0.3"
          opacity="0.95"
          transform={`rotate(${i * 45} 50 50)`}
        />
      ))}
      {Array.from({ length: 6 }).map((_, i) => (
        <ellipse
          key={`m-${i}`}
          cx="50"
          cy="34"
          rx="10"
          ry="13"
          fill={`url(#${id})`}
          opacity="0.95"
          transform={`rotate(${i * 60 + 30} 50 50)`}
        />
      ))}
      {Array.from({ length: 5 }).map((_, i) => (
        <ellipse
          key={`i-${i}`}
          cx="50"
          cy="43"
          rx="6.5"
          ry="9"
          fill="#FFFDF6"
          opacity="0.96"
          transform={`rotate(${i * 72 + 15} 50 50)`}
        />
      ))}
      <circle cx="50" cy="50" r="3.5" fill="#C0AE8A" />
    </svg>
  );
};

export const FLOWER_TYPES = ["sunflower", "yrose", "wrose"];

export const FlowerByType = ({ type, size, idSuffix }) => {
  if (type === "sunflower") return <Sunflower size={size} idSuffix={idSuffix} />;
  if (type === "yrose") return <YellowRose size={size} idSuffix={idSuffix} />;
  return <WhiteRose size={size} idSuffix={idSuffix} />;
};
