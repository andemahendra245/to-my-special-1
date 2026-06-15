import { useEffect, useState } from "react";

// Transparent-background sunflower cutouts (true 3D feel - no frame around them)
const SUNFLOWER_PNGS = [
  "https://pngimg.com/uploads/sunflower/small/sunflower_PNG103755.png",
  "https://pngimg.com/uploads/sunflower/small/sunflower_PNG103754.png",
  "https://pngimg.com/uploads/sunflower/small/sunflower_PNG103746.png",
  "https://pngimg.com/uploads/sunflower/small/sunflower_PNG13409.png",
  "https://pngimg.com/uploads/sunflower/small/sunflower_PNG13391.png",
  "https://pngimg.com/uploads/sunflower/small/sunflower_PNG103784.png",
];

// Realistic flower photographs (soft-masked into petals)
const PHOTO_FLOWERS = [
  // Sunflowers
  "https://images.unsplash.com/photo-1533523611631-15e4ef69be08?w=320&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1666545449593-b337668aa081?w=320&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1606820152786-272f760f1d0e?w=320&q=80&auto=format&fit=crop",
  // Yellow roses
  "https://images.unsplash.com/photo-1723962768162-52d38d21f94b?w=320&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1711649883870-7cb75e2e8c3e?w=320&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1769609300795-52dc154dec3e?w=320&q=80&auto=format&fit=crop",
  // White roses
  "https://images.unsplash.com/photo-1551771562-5f6b587637cb?w=320&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1610247672619-df289f408ff2?w=320&q=80&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1486639107311-064febaff1c5?w=320&q=80&auto=format&fit=crop",
];

// Build burst with mixed transparent + photo flowers and 3D transforms
const buildBurst = (count) => {
  const items = [];
  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const distance = 10 + Math.pow(Math.random(), 0.55) * 60;
    // z-depth simulates closer/farther flowers
    const dz = (Math.random() - 0.5) * 220;
    const size = 60 + Math.random() * 110 + (dz / 220) * 30;
    const delay = Math.random() * 0.6;
    const rotZ = (Math.random() - 0.5) * 220;
    const rotX = (Math.random() - 0.5) * 36; // 3D tilt forward/back
    const rotY = (Math.random() - 0.5) * 36; // 3D tilt left/right
    // All transparent PNGs — cleanest 3D cutout look across the burst
    const useTransparent = true;
    const src = useTransparent
      ? SUNFLOWER_PNGS[Math.floor(Math.random() * SUNFLOWER_PNGS.length)]
      : PHOTO_FLOWERS[Math.floor(Math.random() * PHOTO_FLOWERS.length)];
    items.push({
      id: i,
      dx: Math.cos(angle) * distance,
      dy: Math.sin(angle) * distance,
      dz,
      size,
      delay,
      rotZ,
      rotX,
      rotY,
      src,
      transparent: useTransparent,
    });
  }
  return items;
};

const ALL_SRC = [...SUNFLOWER_PNGS, ...PHOTO_FLOWERS];

const Splash = ({ phase, onStart, onFinish }) => {
  const [fadingHeart, setFadingHeart] = useState(false);
  const [flowers] = useState(() => buildBurst(75));

  // Preload all flower images during the heart screen
  useEffect(() => {
    ALL_SRC.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    if (phase === "splash") {
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
    <div className="splash-stage" data-testid="splash-stage">
      <div className="burst-flash" aria-hidden="true" />
      <div className="burst-container" data-testid="flower-burst">
        {flowers.map((f) => (
          <div
            key={f.id}
            className="burst-flower"
            style={{
              "--dx": `${f.dx}vmax`,
              "--dy": `${f.dy}vmax`,
              "--dz": `${f.dz}px`,
              "--rotZ": `${f.rotZ}deg`,
              "--rotX": `${f.rotX}deg`,
              "--rotY": `${f.rotY}deg`,
              animationDelay: `${f.delay}s`,
              width: `${f.size}px`,
              height: `${f.size}px`,
            }}
          >
            <img
              src={f.src}
              alt=""
              loading="eager"
              draggable={false}
              className={`burst-flower-img ${f.transparent ? "is-transparent" : "is-photo"}`}
            />
          </div>
        ))}
      </div>
      <div className="brand">
        <p className="brand-name">Happy Birthday, Rishii</p>
        <p className="brand-sub">A Memory Book · June 18</p>
      </div>
    </div>
  );
};

export default Splash;
