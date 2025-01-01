import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function ContactForm() {
  const { language } = useLanguage();

  return (
    <div className="p-8 md:p-16">
      <h2 className="text-2xl font-bold mb-8 font-merriweather text-[#003366]">
        {language === 'en' ? 'Send us a message' : 'Envoyez-nous un message'}
      </h2>
      <form>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Name' : 'Nom'}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3399FF] focus:border-[#3399FF]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Email' : 'Email'}
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3399FF] focus:border-[#3399FF]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Subject' : 'Sujet'}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3399FF] focus:border-[#3399FF]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Message' : 'Message'}
            </label>
            <textarea
              rows={6}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3399FF] focus:border-[#3399FF]"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#003366] text-white py-3 px-6 rounded-md hover:bg-[#002244] transition-colors font-medium"
          >
            {language === 'en' ? 'Send Message' : 'Envoyer le message'}
          </button>
        </div>
      </form>
    </div>
  );
}