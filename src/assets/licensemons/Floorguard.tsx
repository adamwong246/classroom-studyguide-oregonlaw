export default function Floorguard() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="floorPattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#E0C068" />
          <path d="M0 0 L20 20 M20 0 L0 20" stroke="#D2B48C" strokeWidth="1" />
        </pattern>
        <filter id="repelFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Body */}
      <rect x="50" y="50" width="100" height="100" rx="10" fill="url(#floorPattern)" stroke="#333" strokeWidth="2" />

      {/* Liquid repelling effect */}
      <path d="M60 60 L80 80 M140 60 L120 80 M60 140 L80 120 M140 140 L120 120" 
        stroke="#FFF" strokeWidth="2" strokeLinecap="round" filter="url(#repelFilter)" opacity="0.8" />

      {/* Face */}
      <circle cx="90" cy="90" r="8" fill="#333" />
      <circle cx="110" cy="90" r="8" fill="#333" />
      <path d="M90 110 Q100 120 110 110" fill="none" stroke="#333" strokeWidth="2" />

      {/* Clean floor indicator */}
      <rect x="80" y="130" width="40" height="10" rx="5" fill="#333" />
      <rect x="80" y="130" width="40" height="10" rx="5" fill="#2ECC71" />
    </svg>
  );
}
