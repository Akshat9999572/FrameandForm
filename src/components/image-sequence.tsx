import { useEffect, useState, useRef } from "react";

export function ImageSequence({ 
  frameCount, 
  basePath, 
  prefix = "ezgif-frame-", 
  suffix = ".jpg", 
  fps = 30,
  className = "",
  scrollControlled = false
}: { 
  frameCount: number;
  basePath: string;
  prefix?: string;
  suffix?: string;
  fps?: number;
  className?: string;
  scrollControlled?: boolean;
}) {
  const [frameIndex, setFrameIndex] = useState(1);
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const interval = 1000 / fps;

  useEffect(() => {
    // Preload all images to prevent flickering
    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      const num = i.toString().padStart(3, '0');
      img.src = `${basePath}/${prefix}${num}${suffix}`;
    }
  }, [frameCount, basePath, prefix, suffix]);

  useEffect(() => {
    if (scrollControlled) {
      const handleScroll = () => {
        if (!containerRef.current) return;
        
        // Calculate scroll progress over the entire document
        const scrollPosition = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        
        let progress = 0;
        if (totalHeight > 0) {
          progress = Math.max(0, Math.min(1, scrollPosition / totalHeight));
        }

        const frame = Math.floor(progress * (frameCount - 1)) + 1;
        // Add a small smooth easing or direct setting
        setFrameIndex(frame);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // initialize

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    } else {
      const animate = (time: number) => {
        if (lastTimeRef.current === 0) {
          lastTimeRef.current = time;
        }
        const deltaTime = time - lastTimeRef.current;

        if (deltaTime > interval) {
          setFrameIndex((prev) => (prev >= frameCount ? 1 : prev + 1));
          lastTimeRef.current = time;
        }
        requestRef.current = requestAnimationFrame(animate);
      };

      requestRef.current = requestAnimationFrame(animate);
      return () => {
        if (requestRef.current) cancelAnimationFrame(requestRef.current);
      };
    }
  }, [frameCount, interval, scrollControlled]);

  const frameNum = frameIndex.toString().padStart(3, '0');
  const src = `${basePath}/${prefix}${frameNum}${suffix}`;

  return (
    <div ref={containerRef} className={className}>
      <img 
        src={src} 
        alt="Animation sequence" 
        className="w-full h-full object-cover" 
      />
    </div>
  );
}
