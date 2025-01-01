import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function BenefitsHero() {
  const { language } = useLanguage();

  return (
    <div className="relative bg-[#003366] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather">
          {language === 'en' ? 'Benefits' : 'Avantages'}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl font-roboto-slab">
          {language === 'en' 
            ? 'Discover how our reporting solutions can transform your workplace.'
            : 'Découvrez comment nos solutions de signalement peuvent transformer votre lieu de travail.'}
        </p>
      </div>
    </div>
  );
}