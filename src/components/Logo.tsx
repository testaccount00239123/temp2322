import React from 'react';
import logoSymbol from '../assets/images/logo-symbol.png';
import logoFull from '../assets/images/logo-full.png';

export function Logo() {
  return (
    <div className="flex items-center">
      <img 
        src={logoSymbol} 
        alt="Integrisecur Logo" 
        className="h-10 w-10"
      />
      <img 
        src={logoFull} 
        alt="Integrisecur" 
        className="h-8 ml-3 hidden md:block"
      />
    </div>
  );
}