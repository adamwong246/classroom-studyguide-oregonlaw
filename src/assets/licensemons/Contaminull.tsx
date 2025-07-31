export default function Contaminull() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="ghostFilter" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="1" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ghost body */}
      <path d="M80 50 Q100 30 120 50 Q140 80 120 120 Q100 150 80 120 Q60 80 80 50 Z" 
        fill="#705898" fillOpacity="0.7" stroke="#333" strokeWidth="1.5" filter="url(#ghostFilter)" />

      {/* Cleaning tools */}
      <path d="M60 80 L80 70 M60 100 L80 90" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
      <path d="M140 80 L120 70 M140 100 L120 90" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />

      {/* Face - becomes more visible when clean */}
      <circle cx="90" cy="80" r="5" fill="#FFF" fillOpacity="0.7">
        <animate attributeName="fillOpacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
      <circle cx="110" cy="80" r="5" fill="#FFF" fillOpacity="0.7">
        <animate attributeName="fillOpacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
      </circle>
      <path d="M90 100 Q100 110 110 100" fill="none" stroke="#FFF" strokeWidth="2" strokeOpacity="0.7">
        <animate attributeName="strokeOpacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
      </path>

      {/* Clean sparkles */}
      <path d="M70 50 L75 55 L80 50 L75 45 Z" fill="#FFF" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="1s" />
      </path>
      <path d="M130 60 L135 65 L140 60 L135 55 Z" fill="#FFF" opacity="0">
        <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="2s" />
      </path>
    </svg>
  );
}
