import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';

export function Logo() {
  const { language } = useLanguage();
  
  return (
    <div className="flex items-center space-x-2">
      <span className="text-xl font-bold text-[#003366]">Integrisecur</span>
      <span className="hidden sm:block text-sm text-gray-500">
        {language === 'en' ? 'Secure Reporting' : 'Signalement Sécurisé'}
      </span>
    </div>
  );
}