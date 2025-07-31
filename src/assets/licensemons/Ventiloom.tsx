export default function Ventiloom() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="fanGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A890F0" />
          <stop offset="100%" stopColor="#C6C6F0" />
        </linearGradient>
        <filter id="turbineBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
        </filter>
      </defs>

      {/* Body */}
      <circle cx="100" cy="100" r="50" fill="#A890F0" stroke="#333" strokeWidth="2" />

      {/* Turbine wings */}
      <g transform="rotate(0, 100, 100)">
        <path d="M100 30 L120 70 L100 100 L80 70 Z" fill="url(#fanGradient)" filter="url(#turbineBlur)" />
        <animateTransform 
          attributeName="transform" 
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="8s"
          repeatCount="indefinite"
        />
      </g>

      {/* Air flow lines */}
      <path d="M30 100 Q50 80 70 100" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" opacity="0.7" />
      <path d="M130 100 Q150 120 170 100" stroke="#FFFFFF" strokeWidth="2" strokeDasharray="5,3" opacity="0.7" />

      {/* Face */}
      <circle cx="90" cy="90" r="5" fill="#333" />
      <circle cx="110" cy="90" r="5" fill="#333" />
      <path d="M90 110 Q100 120 110 110" fill="none" stroke="#333" strokeWidth="2" />

      {/* Hum lines */}
      <path d="M50 150 Q70 140 90 150" stroke="#333" strokeWidth="1.5" />
      <path d="M110 150 Q130 140 150 150" stroke="#333" strokeWidth="1.5" />
    </svg>
  );
}
