export default function Dermaplaneon() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#B8B8D0" />
          <stop offset="100%" stopColor="#D8D8D8" />
        </linearGradient>
        <filter id="shineFilter">
          <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur" />
          <feSpecularLighting in="blur" surfaceScale="5" specularConstant="1" specularExponent="20" lighting-color="#fff" result="specOut">
            <fePointLight x="50" y="50" z="200" />
          </feSpecularLighting>
          <feComposite in="SourceGraphic" in2="specOut" operator="arithmetic" k1="0" k2="1" k3="1" k4="0" result="litPaint" />
        </filter>
      </defs>

      {/* Razor body */}
      <ellipse cx="100" cy="100" rx="60" ry="40" fill="url(#steelGradient)" filter="url(#shineFilter)" stroke="#333" strokeWidth="2" />

      {/* Blade edge */}
      <path d="M40 100 L160 100" stroke="#FFF" strokeWidth="3" strokeLinecap="round" />

      {/* Certification badges */}
      <circle cx="70" cy="70" r="8" fill="#FFD700" stroke="#333" strokeWidth="1" />
      <circle cx="130" cy="70" r="8" fill="#FFD700" stroke="#333" strokeWidth="1" />
      <text x="70" y="73" textAnchor="middle" fontSize="8" fill="#333">6h</text>
      <text x="130" y="73" textAnchor="middle" fontSize="8" fill="#333">2h</text>

      {/* Face */}
      <circle cx="90" cy="120" r="5" fill="#333" />
      <circle cx="110" cy="120" r="5" fill="#333" />
      <path d="M90 135 Q100 145 110 135" fill="none" stroke="#333" strokeWidth="2" />
    </svg>
  );
}
