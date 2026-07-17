type WaveDividerProps = {
  className?: string;
  flip?: boolean;
};

// A duplicated wave path inside a 200%-wide track, animated with a
// translateX(-50%) loop so it reads as continuous, gentle water.
export default function WaveDivider({ className = "", flip = false }: WaveDividerProps) {
  return (
    <div
      className={`relative w-full overflow-hidden leading-none ${className}`}
      aria-hidden="true"
    >
      <div className={`flex w-[200%] animate-wave ${flip ? "scale-y-[-1]" : ""}`}>
        <svg viewBox="0 0 1200 120" className="w-1/2 h-16 md:h-24 shrink-0" preserveAspectRatio="none">
          <path
            d="M0,60 C150,110 350,10 600,55 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
        <svg viewBox="0 0 1200 120" className="w-1/2 h-16 md:h-24 shrink-0" preserveAspectRatio="none">
          <path
            d="M0,60 C150,110 350,10 600,55 C850,100 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
}
