const Sharpshock = () => {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="100%" stopColor="#FFA500" />
        </linearGradient>
        <linearGradient id="quillGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" />
          <stop offset="50%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#FFD700" />
        </linearGradient>
        <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Biohazard container body */}
      <rect x="50" y="50" width="100" height="100" rx="10" ry="10" fill="url(#bodyGradient)" stroke="#000" strokeWidth="2" />
      
      {/* Warning symbol */}
      <circle cx="100" cy="100" r="30" fill="none" stroke="#000" strokeWidth="3" />
      <path d="M100,70 L100,130 M70,100 L130,100" stroke="#000" strokeWidth="3" />
      <path d="M85,85 L115,115 M85,115 L115,85" stroke="#000" strokeWidth="3" filter="url(#glow)" />
      
      {/* Spiky quills */}
      <polygon points="50,50 70,30 90,50" fill="url(#quillGradient)" stroke="#000" strokeWidth="1" />
      <polygon points="110,50 130,30 150,50" fill="url(#quillGradient)" stroke="#000" strokeWidth="1" />
      <polygon points="50,150 70,170 90,150" fill="url(#quillGradient)" stroke="#000" strokeWidth="1" />
      <polygon points="110,150 130,170 150,150" fill="url(#quillGradient)" stroke="#000" strokeWidth="1" />
      
      {/* Static electricity effects */}
      <path d="M40,100 Q50,90 60,100 Q70,110 80,100" stroke="#FFF" strokeWidth="2" strokeDasharray="5,3" opacity="0.7" />
      <path d="M140,100 Q150,90 160,100 Q170,110 180,100" stroke="#FFF" strokeWidth="2" strokeDasharray="5,3" opacity="0.7" />
    </svg>
  );
};

export default Sharpshock;
