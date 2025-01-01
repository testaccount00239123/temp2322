import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function AboutTeam() {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center font-merriweather text-[#003366]">
          {language === 'en' ? 'Our Team' : 'Notre Équipe'}
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto">
          {language === 'en'
            ? 'Our team of dedicated professionals brings decades of combined experience in workplace safety, ethics, and compliance. Available 24/7, we\'re committed to supporting your organization\'s integrity.'
            : 'Notre équipe de professionnels dévoués apporte des décennies d\'expérience combinée en matière de sécurité au travail, d\'éthique et de conformité. Disponibles 24/7, nous nous engageons à soutenir l\'intégrité de votre organisation.'}
        </p>
      </div>
    </div>
  );
}