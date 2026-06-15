import { useEffect } from "react";

const LETTER = `My Dearest Rishii,

From sitting in the same classroom as kids to holding your love in my heart today, my feelings for you have only grown deeper with time.

Distance might keep us apart physically, but it only makes the moments we do share — like the unforgettable times we met — feel entirely magical.

Thank you for choosing me on March 12th, and for being the most incredible person in my life.

You are my past, my present, and my favorite future.`;

const LoveLetter = ({ open, onClose }) => {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose?.();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      className="letter-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      data-testid="letter-overlay"
    >
      <div className="letter-paper" onClick={(e) => e.stopPropagation()}>
        <button
          className="letter-close"
          onClick={onClose}
          aria-label="Close letter"
          data-testid="letter-close-btn"
        >
          ✕
        </button>
        <p className="letter-text" data-testid="letter-text">
          {LETTER}
        </p>
        <p className="letter-signature">Yours always,<br/>Mahendra</p>
      </div>
    </div>
  );
};

export default LoveLetter;
