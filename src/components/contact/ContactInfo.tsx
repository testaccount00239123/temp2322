import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function ContactInfo() {
  const { language } = useLanguage();

  return (
    <div className="bg-gray-50 p-8 md:p-16">
      <h2 className="text-2xl font-bold mb-8 font-merriweather text-[#003366]">
        {language === 'en' ? 'Contact Information' : 'Informations de contact'}
      </h2>
      <div className="space-y-8">
        <div className="flex items-start space-x-4">
          <Phone className="w-6 h-6 text-[#3399FF] mt-1" />
          <div>
            <h3 className="font-bold text-[#003366] mb-1">
              {language === 'en' ? 'Phone' : 'Téléphone'}
            </h3>
            <p className="text-gray-600">+1 (800) 555-0123</p>
            <p className="text-sm text-gray-500 mt-1">
              {language === 'en' ? '24/7 Hotline available' : 'Ligne d\'assistance disponible 24/7'}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Mail className="w-6 h-6 text-[#3399FF] mt-1" />
          <div>
            <h3 className="font-bold text-[#003366] mb-1">
              {language === 'en' ? 'Email' : 'Email'}
            </h3>
            <p className="text-gray-600">contact@integrisecur.com</p>
            <p className="text-sm text-gray-500 mt-1">
              {language === 'en' ? 'Response within 24 hours' : 'Réponse sous 24 heures'}
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <MapPin className="w-6 h-6 text-[#3399FF] mt-1" />
          <div>
            <h3 className="font-bold text-[#003366] mb-1">
              {language === 'en' ? 'Office Location' : 'Adresse du bureau'}
            </h3>
            <p className="text-gray-600">
              123 Business Avenue<br />
              Suite 500<br />
              New York, NY 10001
            </p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <Clock className="w-6 h-6 text-[#3399FF] mt-1" />
          <div>
            <h3 className="font-bold text-[#003366] mb-1">
              {language === 'en' ? 'Business Hours' : 'Heures d\'ouverture'}
            </h3>
            <p className="text-gray-600">
              {language === 'en' ? 'Monday - Friday' : 'Lundi - Vendredi'}<br />
              9:00 AM - 6:00 PM EST
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}