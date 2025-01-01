import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function ServicesHero() {
  const { language } = useLanguage();

  return (
    <div className="relative bg-[#003366] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather">
          {language === 'en' ? 'Our Services' : 'Nos Services'}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl font-roboto-slab">
          {language === 'en' 
            ? 'Comprehensive reporting solutions tailored to your organization\'s needs.'
            : 'Des solutions de signalement complètes adaptées aux besoins de votre organisation.'}
        </p>
      </div>
    </div>
  );
}