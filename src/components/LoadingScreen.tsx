import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1400;

    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      // ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));
      if (t < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        setDone(true);
        setTimeout(() => setHidden(true), 500);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (hidden) return null;

  return (
    <div
      aria-hidden
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background transition-opacity duration-500 ${
        done ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Scanline accent */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="scan-line absolute inset-x-0 h-24" />
      </div>

      <div className="relative w-[min(420px,80vw)] px-6">
        <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          ./Booting_Portfolio
        </div>
        <div className="mb-3 font-display text-4xl uppercase leading-none sm:text-5xl">
          Shubhankar
          <br />
          Debnath
        </div>
        <div className="mb-6 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          Compiling shaders · loading assets
        </div>

        <div className="relative h-px w-full overflow-hidden bg-border">
          <div
            className="absolute inset-y-0 left-0 bg-primary shadow-[0_0_10px_hsl(var(--primary))]"
            style={{ width: `${progress}%`, transition: "width 60ms linear" }}
          />
        </div>
        <div className="mt-3 flex justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>SYS_INIT</span>
          <span className="text-primary">{progress.toString().padStart(3, "0")}%</span>
        </div>
      </div>
    </div>
  );
}
