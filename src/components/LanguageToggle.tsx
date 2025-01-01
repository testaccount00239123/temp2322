import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#003366] transition-colors"
      aria-label={language === 'fr' ? 'Passer à l\'anglais' : 'Passer au français'}
    >
      <Globe size={20} />
      <span>{language === 'fr' ? 'EN' : 'FR'}</span>
    </button>
  );
}