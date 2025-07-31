const Glowgiene = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* Fairy body */}
    <circle cx="100" cy="100" r="40" fill="#FF9FF3" stroke="#F368E0" strokeWidth="3" />
    
    {/* Face features */}
    <circle cx="90" cy="90" r="5" fill="#FFF" />
    <circle cx="110" cy="90" r="5" fill="#FFF" />
    <path d="M90 110 Q100 120 110 110" fill="none" stroke="#F368E0" strokeWidth="2" />
    
    {/* Glowing gloves (hands) */}
    <circle cx="70" cy="100" r="15" fill="#FF9FF3" stroke="#F368E0" strokeWidth="2">
      <animate attributeName="fill" values="#FF9FF3;#FECA57;#FF9FF3" dur="4s" repeatCount="indefinite" />
    </circle>
    <circle cx="130" cy="100" r="15" fill="#FF9FF3" stroke="#F368E0" strokeWidth="2">
      <animate attributeName="fill" values="#FF9FF3;#FECA57;#FF9FF3" dur="4s" repeatCount="indefinite" />
    </circle>
    
    {/* Translucent wings */}
    <path 
      d="M40 80 Q60 60 80 80 Q100 40 120 80 Q140 60 160 80" 
      fill="none" 
      stroke="#F368E0" 
      strokeWidth="2"
      strokeOpacity="0.7"
    />
    <path 
      d="M40 120 Q60 140 80 120 Q100 160 120 120 Q140 140 160 120" 
      fill="none" 
      stroke="#F368E0" 
      strokeWidth="2"
      strokeOpacity="0.7"
    />
    
    {/* Sparkles */}
    <circle cx="50" cy="60" r="3" fill="#FECA57" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="150" cy="140" r="3" fill="#FECA57" opacity="0.8">
      <animate attributeName="opacity" values="0.8;0.2;0.8" dur="3s" repeatCount="indefinite" />
    </circle>
  </svg>
);

export default Glowgiene;
