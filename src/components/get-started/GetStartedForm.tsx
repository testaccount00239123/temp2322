import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export function GetStartedForm() {
  const { language } = useLanguage();

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8 text-center font-merriweather text-[#003366]">
          {language === 'en' ? 'Request Information' : 'Demander des informations'}
        </h2>
        <form className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'First Name' : 'Prénom'}
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3399FF] focus:border-[#3399FF]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {language === 'en' ? 'Last Name' : 'Nom'}
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
                {language === 'en' ? 'Phone' : 'Téléphone'}
              </label>
              <input
                type="tel"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3399FF] focus:border-[#3399FF]"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Company' : 'Entreprise'}
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3399FF] focus:border-[#3399FF]"
            />
          </div>
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {language === 'en' ? 'Message' : 'Message'}
            </label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#3399FF] focus:border-[#3399FF]"
            />
          </div>
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-[#003366] text-white py-3 px-6 rounded-md hover:bg-[#002244] transition-colors font-medium"
            >
              {language === 'en' ? 'Submit Request' : 'Envoyer la demande'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}