export default function Towelyn() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="towelPattern" patternUnits="userSpaceOnUse" width="20" height="20">
          <rect width="20" height="20" fill="#F8F8F8" />
          <path d="M0 0 L20 20 M20 0 L0 20" stroke="#DDD" strokeWidth="1" />
        </pattern>
        <filter id="extinguisherGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Towel body */}
      <rect x="50" y="50" width="100" height="100" rx="10" fill="url(#towelPattern)" stroke="#333" strokeWidth="2" />

      {/* Fold lines */}
      <path d="M100 50 L100 150" stroke="#AAA" strokeWidth="1" strokeDasharray="5,3" />
      <path d="M50 100 L150 100" stroke="#AAA" strokeWidth="1" strokeDasharray="5,3" />

      {/* Fire extinguisher */}
      <rect x="120" y="70" width="20" height="40" rx="3" fill="#FF4136" stroke="#333" strokeWidth="1" filter="url(#extinguisherGlow)" />
      <rect x="125" y="75" width="10" height="30" fill="#FFF" stroke="#333" strokeWidth="0.5" />
      <circle cx="130" cy="75" r="3" fill="#333" />

      {/* Face */}
      <circle cx="80" cy="90" r="8" fill="#333" />
      <circle cx="80" cy="90" r="4" fill="#FFF" />
      <path d="M70 110 Q80 120 90 110" fill="none" stroke="#333" strokeWidth="2" />

      {/* Chemical stain effect */}
      <path d="M60 130 Q70 140 80 130 Q90 150 100 140 Q110 150 120 130 Q130 140 140 130" 
        stroke="#A040A0" strokeWidth="3" strokeLinecap="round" opacity="0.7">
        <animate attributeName="opacity" values="0.7;0.3;0.7" dur="4s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
