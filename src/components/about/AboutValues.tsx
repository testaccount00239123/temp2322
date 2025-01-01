import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function AboutValues() {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center font-merriweather text-[#003366]">
          {language === 'en' ? 'Our Values' : 'Nos Valeurs'}
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 font-roboto-slab text-[#003366]">
              {language === 'en' ? 'Integrity' : 'Intégrité'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'We maintain the highest standards of integrity in all our operations, ensuring trust and confidentiality.'
                : 'Nous maintenons les plus hauts standards d\'intégrité dans toutes nos opérations, assurant confiance et confidentialité.'}
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 font-roboto-slab text-[#003366]">
              {language === 'en' ? 'Innovation' : 'Innovation'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'We continuously innovate our solutions to meet evolving workplace safety needs.'
                : 'Nous innovons continuellement nos solutions pour répondre aux besoins évolutifs de sécurité au travail.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}