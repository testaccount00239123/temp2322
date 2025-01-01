import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Check } from 'lucide-react';

export function ServicesPricing() {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center font-merriweather text-[#003366]">
          {language === 'en' ? 'Pricing Plans' : 'Plans tarifaires'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-[#003366]">
              {language === 'en' ? 'Essential' : 'Essentiel'}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$499</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <ul className="space-y-4">
              {[
                language === 'en' ? '24/7 Hotline' : 'Ligne d\'assistance 24/7',
                language === 'en' ? 'Web Portal' : 'Portail Web',
                language === 'en' ? 'Basic Reporting' : 'Rapports de base'
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md border-2 border-[#3399FF]">
            <h3 className="text-xl font-bold mb-4 text-[#003366]">
              {language === 'en' ? 'Professional' : 'Professionnel'}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">$999</span>
              <span className="text-gray-600">/mo</span>
            </div>
            <ul className="space-y-4">
              {[
                language === 'en' ? '24/7 Hotline' : 'Ligne d\'assistance 24/7',
                language === 'en' ? 'Web Portal' : 'Portail Web',
                language === 'en' ? 'Advanced Reporting' : 'Rapports avancés',
                language === 'en' ? 'Case Management' : 'Gestion des cas',
                language === 'en' ? 'Training Programs' : 'Programmes de formation'
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4 text-[#003366]">
              {language === 'en' ? 'Enterprise' : 'Entreprise'}
            </h3>
            <div className="mb-6">
              <span className="text-4xl font-bold">Custom</span>
            </div>
            <ul className="space-y-4">
              {[
                language === 'en' ? 'All Professional Features' : 'Toutes les fonctionnalités Pro',
                language === 'en' ? 'Custom Integration' : 'Intégration personnalisée',
                language === 'en' ? 'Dedicated Support' : 'Support dédié',
                language === 'en' ? 'Custom Reporting' : 'Rapports personnalisés'
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="w-5 h-5 text-green-500 mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}