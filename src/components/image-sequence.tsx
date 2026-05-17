import { useEffect, useState, useRef } from "react";

export function ImageSequence({ 
  frameCount, 
  basePath, 
  prefix = "ezgif-frame-", 
  suffix = ".jpg", 
  fps = 30,
  className = ""
}: { 
  frameCount: number;
  basePath: string;
  prefix?: string;
  suffix?: string;
  fps?: number;
  className?: string;
}) {
  const [frameIndex, setFrameIndex] = useState(1);
  const requestRef = useRef<number>();
  const lastTimeRef = useRef<number>(0);
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
  }, [frameCount, interval]);

  const frameNum = frameIndex.toString().padStart(3, '0');
  const src = `${basePath}/${prefix}${frameNum}${suffix}`;

  return (
    <img 
      src={src} 
      alt="Animation sequence" 
      className={className} 
    />
  );
}
