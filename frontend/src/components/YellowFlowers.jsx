// Background decorations: realistic yellow rose & sunflower photographs
// arranged around the page edges as soft, glowing circular accents.

const FLOWERS = [
  // Sunflower close-up — Aaron Burden's famous shot
  "https://images.unsplash.com/photo-1533523611631-15e4ef69be08?w=600&q=80&auto=format&fit=crop",
  // Sunflower close-up #2
  "https://images.unsplash.com/photo-1666545449593-b337668aa081?w=600&q=80&auto=format&fit=crop",
  // Yellow sunflower close-up #3
  "https://images.unsplash.com/photo-1606820152786-272f760f1d0e?w=600&q=80&auto=format&fit=crop",
  // Yellow rose close-up
  "https://images.unsplash.com/photo-1723962768162-52d38d21f94b?w=600&q=80&auto=format&fit=crop",
  // Yellow rose close-up #2
  "https://images.unsplash.com/photo-1711649883870-7cb75e2e8c3e?w=600&q=80&auto=format&fit=crop",
  // Vibrant yellow roses in full bloom
  "https://images.unsplash.com/photo-1769609300795-52dc154dec3e?w=600&q=80&auto=format&fit=crop",
];

const placements = [
  // left column
  { side: "left",  top: "1%",   offset: "1%",  size: 200, rot: -16, idx: 0 },
  { side: "left",  top: "20%",  offset: "9%",  size: 130, rot: 18,  idx: 2 },
  { side: "left",  top: "40%",  offset: "0%",  size: 220, rot: -8,  idx: 1 },
  { side: "left",  top: "58%",  offset: "10%", size: 140, rot: 22,  idx: 4 },
  { side: "left",  top: "76%",  offset: "2%",  size: 190, rot: -22, idx: 5 },
  { side: "left",  top: "92%",  offset: "11%", size: 130, rot: 14,  idx: 3 },
  // right column
  { side: "right", top: "2%",   offset: "2%",  size: 180, rot: 16,  idx: 1 },
  { side: "right", top: "22%",  offset: "10%", size: 130, rot: -26, idx: 0 },
  { side: "right", top: "42%",  offset: "1%",  size: 220, rot: 9,   idx: 4 },
  { side: "right", top: "60%",  offset: "11%", size: 135, rot: -16, idx: 3 },
  { side: "right", top: "78%",  offset: "2%",  size: 200, rot: 20,  idx: 5 },
  { side: "right", top: "94%",  offset: "10%", size: 130, rot: -10, idx: 2 },
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
          "--rot": `${p.rot}deg`,
          transform: `translate(-50%, -50%) rotate(${p.rot}deg)`,
          animationDelay: `${i * 0.12}s`,
          width: `${p.size}px`,
          height: `${p.size}px`,
        }}
      >
        <img
          src={FLOWERS[p.idx]}
          alt=""
          loading="lazy"
          className="flower-photo"
          draggable={false}
        />
      </div>
    ))}
  </div>
);

export default YellowFlowers;
