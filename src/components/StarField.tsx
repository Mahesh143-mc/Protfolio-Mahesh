import { useMemo } from "react";

interface Star {
  id: number;
  top: string;
  left: string;
  size: string;
  duration: string;
  delay: string;
}

export function StarField() {
  // Generate stars once with stable deterministic/memoized values
  const stars: Star[] = useMemo(() => {
    return Array.from({ length: 70 }, (_, i) => ({
      id: i,
      top: `${(i * 1.43 + 3) % 98}%`,
      left: `${(i * 3.7 + 7) % 98}%`,
      size: `${1 + (i % 3)}px`,
      duration: `${2 + (i % 4) * 0.8}s`,
      delay: `${(i % 5) * 0.4}s`,
    }));
  }, []);

  return (
    <div className="stars-container pointer-events-none" aria-hidden="true">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star will-change-transform"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
          }}
        />
      ))}
    </div>
  );
}
