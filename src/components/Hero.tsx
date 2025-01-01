import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, AlertTriangle, Lock } from 'lucide-react';

export function Hero() {
  const { language } = useLanguage();

  return (
    <div className="relative bg-[#003366] text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#003366] to-[#3399FF] opacity-90" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {language === 'en' 
              ? 'Secure Reporting for a Safer Workplace' 
              : 'Signalement Sécurisé pour un Milieu de Travail Plus Sûr'}
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto">
            {language === 'en'
              ? 'Empower your organization with confidential reporting tools and expert support.'
              : 'Donnez à votre organisation les outils de signalement confidentiels et le soutien expert.'}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/get-started"
              className="px-8 py-4 bg-white text-[#003366] hover:bg-gray-100 rounded-md font-bold transition-colors"
            >
              {language === 'en' ? 'Get Started' : 'Débuter'}
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white/10 rounded-md font-bold transition-colors"
            >
              {language === 'en' ? 'Contact Us' : 'Contactez-nous'}
            </a>
          </div>
        </div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Shield className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? 'Secure & Anonymous' : 'Sécurisé & Anonyme'}
            </h3>
            <p>
              {language === 'en'
                ? 'Protected reporting system with optional anonymity.'
                : 'Système de signalement protégé avec anonymat optionnel.'}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? '24/7 Support' : 'Support 24/7'}
            </h3>
            <p>
              {language === 'en'
                ? 'Round-the-clock hotline and expert assistance.'
                : 'Ligne d\'assistance et expertise disponibles 24/7.'}
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <Lock className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">
              {language === 'en' ? 'Data Protection' : 'Protection des Données'}
            </h3>
            <p>
              {language === 'en'
                ? 'Enterprise-grade security for your sensitive information.'
                : 'Sécurité de niveau entreprise pour vos informations sensibles.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}