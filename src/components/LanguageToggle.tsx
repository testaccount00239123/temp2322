import React from 'react';
import { useLanguage } from '../context/LanguageContext.js';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
      className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#003366] transition-colors"
    >
      {language === 'en' ? 'FR' : 'EN'}
    </button>
  );
}