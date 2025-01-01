import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function ContactHero() {
  const { language } = useLanguage();

  return (
    <div className="relative bg-[#003366] text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather">
          {language === 'en' ? 'Contact Us' : 'Contactez-nous'}
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl font-roboto-slab">
          {language === 'en' 
            ? 'Get in touch with our team for any questions or support needs.'
            : 'Contactez notre équipe pour toute question ou besoin d\'assistance.'}
        </p>
      </div>
    </div>
  );
}