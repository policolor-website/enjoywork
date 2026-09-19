"use client";

export default function Slideshow({
  images,
  visible = 3,
  duration = 20,
}: {
  images: { src: string; alt: string }[];
  visible?: number;
  duration?: number;
}) {
  // Lista duplicată pentru loop perfect continuu (translateX 0 → -50%)
  const doubled = [...images, ...images];

  return (
    <div className="mt-6 overflow-hidden">
      <div
        className="flex animate-marquee hover:[animation-play-state:paused]"
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="shrink-0 px-1.5"
            style={{ width: `${100 / visible}%` }}
          >
            <div className="aspect-square rounded-lg overflow-hidden border border-gold/20">
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
