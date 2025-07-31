export default function Peelizard() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="peelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#A040A0" />
          <stop offset="100%" stopColor="#C183C1" />
        </linearGradient>
      </defs>

      {/* Body */}
      <path d="M70 60 Q100 40 130 60 Q150 100 130 140 Q100 160 70 140 Q50 100 70 60 Z" 
        fill="url(#peelGradient)" stroke="#333" strokeWidth="2" />

      {/* Peeling layers */}
      <path d="M75 65 Q100 50 125 65 Q140 90 125 115 Q100 130 75 115 Q60 90 75 65 Z" 
        fill="#B068B0" opacity="0.8" />
      <path d="M80 70 Q100 60 120 70 Q130 85 120 100 Q100 110 80 100 Q70 85 80 70 Z" 
        fill="#D191D1" opacity="0.8" />

      {/* Eyes - change color when too deep */}
      <circle cx="90" cy="90" r="8" fill="#333">
        <animate attributeName="fill" values="#333;#FF0000;#333" dur="4s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="90" r="8" fill="#333">
        <animate attributeName="fill" values="#333;#FF0000;#333" dur="4s" repeatCount="indefinite" />
      </circle>

      {/* Depth indicator */}
      <rect x="80" y="130" width="40" height="10" rx="5" fill="#333" />
      <rect x="80" y="130" width="20" height="10" rx="5" fill="#FF0000">
        <animate attributeName="width" values="20;40;20" dur="4s" repeatCount="indefinite" />
      </rect>
    </svg>
  );
}
