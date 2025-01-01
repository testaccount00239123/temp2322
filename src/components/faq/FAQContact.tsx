import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail } from 'lucide-react';

export function FAQContact() {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-merriweather text-[#003366]">
            {language === 'en' ? 'Still have questions?' : 'Encore des questions ?'}
          </h2>
          <p className="text-gray-600">
            {language === 'en'
              ? 'Our team is here to help. Contact us for more information.'
              : 'Notre équipe est là pour vous aider. Contactez-nous pour plus d\'informations.'}
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <Phone className="w-12 h-12 mx-auto mb-4 text-[#3399FF]" />
            <h3 className="text-xl font-bold mb-2 text-[#003366]">
              {language === 'en' ? 'Call Us' : 'Appelez-nous'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'en'
                ? 'Available 24/7 for urgent matters'
                : 'Disponible 24/7 pour les urgences'}
            </p>
            <a
              href="tel:+18005550123"
              className="text-[#3399FF] font-medium hover:text-[#2277DD]"
            >
              +1 (800) 555-0123
            </a>
          </div>
          <div className="text-center p-8 bg-white rounded-lg shadow-md">
            <Mail className="w-12 h-12 mx-auto mb-4 text-[#3399FF]" />
            <h3 className="text-xl font-bold mb-2 text-[#003366]">
              {language === 'en' ? 'Email Us' : 'Envoyez-nous un email'}
            </h3>
            <p className="text-gray-600 mb-4">
              {language === 'en'
                ? 'We\'ll respond within 24 hours'
                : 'Nous répondrons sous 24 heures'}
            </p>
            <a
              href="mailto:support@integrisecur.com"
              className="text-[#3399FF] font-medium hover:text-[#2277DD]"
            >
              support@integrisecur.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}