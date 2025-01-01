import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function BenefitsTestimonials() {
  const { language } = useLanguage();

  const testimonials = [
    {
      quote: {
        en: "Implementing Integrisecur's reporting system has transformed our workplace culture. Our employees feel more secure and valued.",
        fr: "La mise en place du système de signalement d'Integrisecur a transformé notre culture d'entreprise. Nos employés se sentent plus en sécurité et valorisés."
      },
      author: {
        en: "HR Director, Fortune 500 Company",
        fr: "Directeur RH, Entreprise Fortune 500"
      }
    },
    {
      quote: {
        en: "The 24/7 support and comprehensive case management have made handling workplace issues much more efficient.",
        fr: "Le support 24/7 et la gestion complète des cas ont rendu le traitement des problèmes en milieu de travail beaucoup plus efficace."
      },
      author: {
        en: "Chief Compliance Officer, Healthcare Provider",
        fr: "Responsable de la conformité, Prestataire de soins de santé"
      }
    },
    {
      quote: {
        en: "Outstanding service that has helped us maintain the highest standards of workplace ethics and safety.",
        fr: "Un service exceptionnel qui nous a aidés à maintenir les plus hauts standards d'éthique et de sécurité au travail."
      },
      author: {
        en: "CEO, Manufacturing Company",
        fr: "PDG, Entreprise manufacturière"
      }
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center font-merriweather text-[#003366]">
          {language === 'en' ? 'What Our Clients Say' : 'Ce que disent nos clients'}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <blockquote className="mb-4 text-gray-600 italic">
                "{testimonial.quote[language]}"
              </blockquote>
              <p className="text-sm font-semibold text-[#003366]">
                {testimonial.author[language]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}