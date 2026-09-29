/**
 * Tunisian geometric ground: an eight-point star (khatam) lattice, the motif
 * of zellige and Qallaline tile floors, drawn as thin lines. Decorative only.
 */
export function Pattern({ id, className = "" }: { id: string; className?: string }) {
  const s = 88; // tile size
  const c = s / 2;
  const r = s * 0.3;
  // two overlapping squares = eight-point star
  const sq = (rot: number) =>
    [0, 1, 2, 3]
      .map((k) => {
        const a = ((rot + 45 + k * 90) * Math.PI) / 180;
        return `${(c + r * Math.SQRT2 * Math.cos(a)).toFixed(2)},${(c + r * Math.SQRT2 * Math.sin(a)).toFixed(2)}`;
      })
      .join(" ");
  return (
    <svg className={`pattern ${className}`} aria-hidden="true" focusable="false">
      <defs>
        <pattern id={id} width={s} height={s} patternUnits="userSpaceOnUse">
          <polygon points={sq(0)} />
          <polygon points={sq(45)} />
          <circle cx={c} cy={c} r={r * 0.42} />
          {/* lattice ties between neighbouring stars */}
          <path d={`M0 ${c}H${c - r * 1.3}M${c + r * 1.3} ${c}H${s}M${c} 0V${c - r * 1.3}M${c} ${c + r * 1.3}V${s}`} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
