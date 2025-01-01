import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function AboutHero() {
  const { language } = useLanguage();

  return (
    <div className="relative bg-[#003366] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather">
          {language === 'en' ? 'About Integrisecur' : 'À propos d\'Integrisecur'}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl font-roboto-slab">
          {language === 'en' 
            ? 'Empowering organizations to build safer, more ethical workplaces through confidential reporting solutions.'
            : 'Permettre aux organisations de créer des lieux de travail plus sûrs et plus éthiques grâce à des solutions de signalement confidentielles.'}
        </p>
      </div>
    </div>
  );
}