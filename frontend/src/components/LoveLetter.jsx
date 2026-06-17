import { useEffect } from "react";

const LETTER = `My Dearest Rishii bngrmm,
​Thank you so much for coming into my life. To this day, I still find it hard to believe that I am completely yours and you are all mine. Being with you honestly feels like a beautiful dream come true, and I am so incredibly grateful to have you by my side.
​Ever since you walked into my world, June 18th has transformed into the most special day of the year for me. My only hope is that we get to celebrate this day together, because nothing matters more to me than seeing you happy and smiling all day long.
​Thank you so much for choosing me, and for being the most incredible person I have ever known. You are my past, my present, and my entire future. Happy Birthday, my love.`;

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
