import type { Capability } from "@/lib/capabilities";

export function CapabilityAnimation({ capability }: { capability: Capability }) {
  return (
    <div className={`capability-animation capability-animation--video capability-animation--${capability.animation}`}>
      <video
        className="capability-video"
        src="/media/capability-preview.mp4"
        aria-label={`${capability.title} preview video`}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
      />
    </div>
  );
}
