export default function Disinfectle() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bubbleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6890F0" />
          <stop offset="100%" stopColor="#98D8D8" />
        </linearGradient>
      </defs>
      
      {/* Body */}
      <circle cx="100" cy="100" r="80" fill="url(#bubbleGradient)" stroke="#333" strokeWidth="2" opacity="0.8" />
      
      {/* Bubbles */}
      <circle cx="70" cy="70" r="15" fill="white" opacity="0.7">
        <animate attributeName="cx" values="70;75;70;65;70" dur="8s" repeatCount="indefinite" />
        <animate attributeName="cy" values="70;65;70;75;70" dur="6s" repeatCount="indefinite" />
      </circle>
      <circle cx="120" cy="90" r="10" fill="white" opacity="0.7">
        <animate attributeName="cx" values="120;125;120;115;120" dur="7s" repeatCount="indefinite" />
        <animate attributeName="cy" values="90;85;90;95;90" dur="5s" repeatCount="indefinite" />
      </circle>
      <circle cx="90" cy="130" r="8" fill="white" opacity="0.7">
        <animate attributeName="cx" values="90;95;90;85;90" dur="9s" repeatCount="indefinite" />
        <animate attributeName="cy" values="130;125;130;135;130" dur="7s" repeatCount="indefinite" />
      </circle>
      
      {/* Eyes */}
      <circle cx="80" cy="90" r="10" fill="white" />
      <circle cx="120" cy="90" r="10" fill="white" />
      <circle cx="80" cy="90" r="5" fill="#333" />
      <circle cx="120" cy="90" r="5" fill="#333" />
      
      {/* Hands (soaking trays) */}
      <rect x="30" y="110" width="30" height="20" rx="5" fill="#6890F0" stroke="#333" strokeWidth="2" />
      <rect x="140" y="110" width="30" height="20" rx="5" fill="#6890F0" stroke="#333" strokeWidth="2" />
      
      {/* Sparkles */}
      <path d="M40 50 L45 55 L50 50 L45 45 Z" fill="white" opacity="0.8" />
      <path d="M160 70 L165 75 L170 70 L165 65 Z" fill="white" opacity="0.8" />
      <path d="M60 150 L65 155 L70 150 L65 145 Z" fill="white" opacity="0.8" />
    </svg>
  );
}
