import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Phone, Users, Settings, Check } from 'lucide-react';

export function GetStartedSteps() {
  const { language } = useLanguage();

  const steps = [
    {
      icon: Phone,
      title: { 
        en: 'Schedule a Consultation',
        fr: 'Planifier une consultation'
      },
      description: {
        en: 'Connect with our experts to discuss your needs.',
        fr: 'Échangez avec nos experts pour discuter de vos besoins.'
      }
    },
    {
      icon: Settings,
      title: {
        en: 'Customized Setup',
        fr: 'Configuration personnalisée'
      },
      description: {
        en: 'We\'ll configure the system to match your requirements.',
        fr: 'Nous configurerons le système selon vos exigences.'
      }
    },
    {
      icon: Users,
      title: {
        en: 'Team Training',
        fr: 'Formation d\'équipe'
      },
      description: {
        en: 'We\'ll train your team on using the system effectively.',
        fr: 'Nous formerons votre équipe à utiliser efficacement le système.'
      }
    },
    {
      icon: Check,
      title: {
        en: 'Go Live',
        fr: 'Mise en service'
      },
      description: {
        en: 'Launch your reporting system with our full support.',
        fr: 'Lancez votre système de signalement avec notre support complet.'
      }
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center font-merriweather text-[#003366]">
          {language === 'en' ? 'How It Works' : 'Comment ça marche'}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative">
                <step.icon className="w-16 h-16 mx-auto mb-4 text-[#3399FF]" />
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-[#3399FF]" />
                )}
              </div>
              <h3 className="text-xl font-bold mb-2 font-roboto-slab text-[#003366]">
                {step.title[language]}
              </h3>
              <p className="text-gray-600">
                {step.description[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}