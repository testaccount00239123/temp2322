import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Globe, FileText, Users, Headphones, Shield } from 'lucide-react';

export function ServicesList() {
  const { language } = useLanguage();

  const services = [
    {
      icon: Phone,
      title: { en: '24/7 Hotline', fr: 'Ligne d\'assistance 24/7' },
      description: {
        en: 'Multi-lingual support available around the clock.',
        fr: 'Support multilingue disponible en tout temps.'
      }
    },
    {
      icon: Globe,
      title: { en: 'Web Portal', fr: 'Portail Web' },
      description: {
        en: 'Secure online reporting platform.',
        fr: 'Plateforme de signalement en ligne sécurisée.'
      }
    },
    {
      icon: FileText,
      title: { en: 'Case Management', fr: 'Gestion des cas' },
      description: {
        en: 'Comprehensive case tracking and resolution.',
        fr: 'Suivi et résolution complète des cas.'
      }
    },
    {
      icon: Users,
      title: { en: 'Training Programs', fr: 'Programmes de formation' },
      description: {
        en: 'Employee awareness and compliance training.',
        fr: 'Formation sur la sensibilisation et la conformité.'
      }
    },
    {
      icon: Headphones,
      title: { en: 'Expert Support', fr: 'Support expert' },
      description: {
        en: 'Guidance from experienced professionals.',
        fr: 'Conseils de professionnels expérimentés.'
      }
    },
    {
      icon: Shield,
      title: { en: 'Data Protection', fr: 'Protection des données' },
      description: {
        en: 'Enterprise-grade security measures.',
        fr: 'Mesures de sécurité de niveau entreprise.'
      }
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <service.icon className="w-12 h-12 text-[#3399FF] mb-4" />
              <h3 className="text-xl font-bold mb-2 font-roboto-slab text-[#003366]">
                {service.title[language]}
              </h3>
              <p className="text-gray-600">
                {service.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}