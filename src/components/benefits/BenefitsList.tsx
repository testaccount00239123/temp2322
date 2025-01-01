import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { TrendingUp, Shield, Users, Scale, Award, Clock } from 'lucide-react';

export function BenefitsList() {
  const { language } = useLanguage();

  const benefits = [
    {
      icon: TrendingUp,
      title: { en: 'Increased Productivity', fr: 'Productivité accrue' },
      description: {
        en: 'Foster a more efficient and focused work environment.',
        fr: 'Favoriser un environnement de travail plus efficace et concentré.'
      }
    },
    {
      icon: Shield,
      title: { en: 'Risk Mitigation', fr: 'Atténuation des risques' },
      description: {
        en: 'Early detection and prevention of workplace issues.',
        fr: 'Détection précoce et prévention des problèmes en milieu de travail.'
      }
    },
    {
      icon: Users,
      title: { en: 'Employee Trust', fr: 'Confiance des employés' },
      description: {
        en: 'Build a culture of trust and transparency.',
        fr: 'Construire une culture de confiance et de transparence.'
      }
    },
    {
      icon: Scale,
      title: { en: 'Legal Compliance', fr: 'Conformité légale' },
      description: {
        en: 'Meet regulatory requirements and industry standards.',
        fr: 'Respecter les exigences réglementaires et les normes de l\'industrie.'
      }
    },
    {
      icon: Award,
      title: { en: 'Brand Protection', fr: 'Protection de la marque' },
      description: {
        en: 'Safeguard your organization\'s reputation.',
        fr: 'Protéger la réputation de votre organisation.'
      }
    },
    {
      icon: Clock,
      title: { en: 'Time Savings', fr: 'Gain de temps' },
      description: {
        en: 'Streamlined processes for faster issue resolution.',
        fr: 'Processus rationalisés pour une résolution plus rapide des problèmes.'
      }
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
              <benefit.icon className="w-12 h-12 text-[#3399FF] mb-4" />
              <h3 className="text-xl font-bold mb-2 font-roboto-slab text-[#003366]">
                {benefit.title[language]}
              </h3>
              <p className="text-gray-600">
                {benefit.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}