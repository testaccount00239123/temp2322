import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function GetStartedHero() {
  const { language } = useLanguage();

  return (
    <div className="relative bg-[#003366] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather">
          {language === 'en' ? 'Get Started' : 'Commencer'}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl font-roboto-slab">
          {language === 'en' 
            ? 'Begin your journey to a safer, more ethical workplace today.'
            : 'Commencez votre voyage vers un lieu de travail plus sûr et plus éthique aujourd\'hui.'}
        </p>
      </div>
    </div>
  );
}