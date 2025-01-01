import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { ChevronDown, ChevronUp } from 'lucide-react';

export function FAQList() {
  const { language } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: {
        en: 'What types of incidents can be reported?',
        fr: 'Quels types d\'incidents peuvent être signalés ?'
      },
      answer: {
        en: 'Our system handles a wide range of workplace incidents including harassment, discrimination, safety concerns, ethical violations, and compliance issues. All reports are treated with strict confidentiality.',
        fr: 'Notre système traite un large éventail d\'incidents sur le lieu de travail, notamment le harcèlement, la discrimination, les problèmes de sécurité, les violations éthiques et les problèmes de conformité. Tous les rapports sont traités en toute confidentialité.'
      }
    },
    {
      question: {
        en: 'How is anonymity maintained?',
        fr: 'Comment l\'anonymat est-il maintenu ?'
      },
      answer: {
        en: 'Our system uses advanced encryption and security measures to protect reporter identities. Users can choose to remain anonymous, and no identifying information is required to submit a report.',
        fr: 'Notre système utilise des mesures de cryptage et de sécurité avancées pour protéger l\'identité des déclarants. Les utilisateurs peuvent choisir de rester anonymes, et aucune information d\'identification n\'est requise pour soumettre un rapport.'
      }
    },
    {
      question: {
        en: 'What happens after a report is submitted?',
        fr: 'Que se passe-t-il après la soumission d\'un rapport ?'
      },
      answer: {
        en: 'Each report is assigned a unique case number and reviewed by our expert team. Reports are securely forwarded to designated organization representatives, and reporters can track the status of their case using their case number.',
        fr: 'Chaque rapport reçoit un numéro de dossier unique et est examiné par notre équipe d\'experts. Les rapports sont transmis de manière sécurisée aux représentants désignés de l\'organisation, et les déclarants peuvent suivre l\'état de leur dossier à l\'aide de leur numéro de dossier.'
      }
    },
    {
      question: {
        en: 'How quickly are reports processed?',
        fr: 'Quelle est la rapidité de traitement des rapports ?'
      },
      answer: {
        en: 'Reports are processed immediately upon submission. Our 24/7 monitoring ensures that urgent cases receive immediate attention, and all reports are reviewed within one business day.',
        fr: 'Les rapports sont traités immédiatement après leur soumission. Notre surveillance 24/7 garantit que les cas urgents reçoivent une attention immédiate, et tous les rapports sont examinés dans un délai d\'un jour ouvrable.'
      }
    },
    {
      question: {
        en: 'What training and support do you provide?',
        fr: 'Quelle formation et quel support fournissez-vous ?'
      },
      answer: {
        en: 'We provide comprehensive training for administrators and employees, including system usage, best practices, and compliance requirements. Our support team is available 24/7 for technical assistance and guidance.',
        fr: 'Nous fournissons une formation complète aux administrateurs et aux employés, comprenant l\'utilisation du système, les meilleures pratiques et les exigences de conformité. Notre équipe de support est disponible 24/7 pour l\'assistance technique et les conseils.'
      }
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-[#003366]">
                  {faq.question[language]}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600">{faq.answer[language]}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}