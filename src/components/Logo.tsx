import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export function Logo() {
  const { language } = useLanguage();
  
  return (
    <div className="flex items-center">
      <span className="text-2xl font-bold text-[#003366]">Integrisecur</span>
      <span className="text-sm text-gray-500 ml-2">
        {language === 'en' ? 'Secure Reporting' : 'Signalement Sécurisé'}
      </span>
    </div>
  );
}