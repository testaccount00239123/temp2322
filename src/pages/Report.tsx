import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext.js';
import { Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Report() {
  const { language } = useLanguage();
  const [isAnonymous, setIsAnonymous] = useState(false);

  const reportTypes = {
    harassment: { en: 'Harassment', fr: 'Harcèlement' },
    discrimination: { en: 'Discrimination', fr: 'Discrimination' },
    safety: { en: 'Safety Concerns', fr: 'Problèmes de sécurité' },
    ethics: { en: 'Ethics Violation', fr: 'Violation éthique' },
    compliance: { en: 'Compliance Issue', fr: 'Problème de conformité' },
    other: { en: 'Other', fr: 'Autre' }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#003366] text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-merriweather min-h-[3em]">
            {language === 'en' ? 'File a Report' : 'Soumettre un signalement'}
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl font-roboto-slab min-h-[3em]">
            {language === 'en' 
              ? 'Submit your report securely and confidentially.'
              : 'Soumettez votre signalement de manière sécurisée et confidentielle.'}
          </p>
        </div>
      </div>

      {/* Report Form */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white p-8 rounded-lg shadow-md h-[400px] flex flex-col">
          <h3 className="text-xl font-bold mb-4 text-[#003366] flex-shrink-0">
            {language === 'en' ? 'Essential' : 'Essentiel'}
          </h3>
          <div className="mb-6 flex-shrink-0">
            <span className="text-4xl font-bold">$499</span>
            <span className="text-gray-600">/mo</span>
          </div>
          <ul className="space-y-4 flex-grow">
            {/* ... */}
          </ul>
        </div>
      </div>
    </div>
  );
} 