import React from 'react';

const Waxit = () => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    {/* Background */}
    <rect width="200" height="200" fill="#FFE4C4" />
    
    {/* Main body - shifting between solid/liquid */}
    <path 
      d="M100,120 C120,80 140,100 160,120 C180,140 160,160 120,160 C80,160 60,140 80,120 Z" 
      fill="url(#waxGradient)"
      stroke="#FF4500"
      strokeWidth="2"
    />
    
    {/* Melting wax sculptures */}
    <path 
      d="M40,180 C50,160 60,170 70,180 Z" 
      fill="#FF8C00"
      opacity="0.7"
    />
    <path 
      d="M160,180 C170,160 180,170 190,180 Z" 
      fill="#FF8C00"
      opacity="0.7"
    />
    
    {/* Eyes */}
    <circle cx="90" cy="110" r="5" fill="#000" />
    <circle cx="110" cy="110" r="5" fill="#000" />
    
    {/* Gradient for molten effect */}
    <defs>
      <linearGradient id="waxGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FF4500" />
        <stop offset="50%" stopColor="#FF8C00" />
        <stop offset="100%" stopColor="#FFA500" />
      </linearGradient>
    </defs>
  </svg>
);

export default Waxit;
