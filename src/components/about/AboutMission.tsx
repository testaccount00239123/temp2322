import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Shield, Heart, Users } from 'lucide-react';

export function AboutMission() {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center font-merriweather text-[#003366]">
          {language === 'en' ? 'Our Mission' : 'Notre Mission'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <Shield className="w-12 h-12 mx-auto mb-4 text-[#3399FF]" />
            <h3 className="text-xl font-bold mb-4 font-roboto-slab">
              {language === 'en' ? 'Protection' : 'Protection'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Safeguarding employees and organizations through secure reporting channels.'
                : 'Protéger les employés et les organisations grâce à des canaux de signalement sécurisés.'}
            </p>
          </div>
          <div className="text-center">
            <Heart className="w-12 h-12 mx-auto mb-4 text-[#3399FF]" />
            <h3 className="text-xl font-bold mb-4 font-roboto-slab">
              {language === 'en' ? 'Ethics' : 'Éthique'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Promoting ethical workplace cultures through transparency and accountability.'
                : 'Promouvoir une culture éthique au travail par la transparence et la responsabilité.'}
            </p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-[#3399FF]" />
            <h3 className="text-xl font-bold mb-4 font-roboto-slab">
              {language === 'en' ? 'Support' : 'Soutien'}
            </h3>
            <p className="text-gray-600">
              {language === 'en'
                ? 'Providing 24/7 expert support for all stakeholders.'
                : 'Fournir un soutien expert 24/7 à toutes les parties prenantes.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}