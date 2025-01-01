import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ServicesHero } from '../components/services/ServicesHero';
import { ServicesList } from '../components/services/ServicesList';
import { ServicesPricing } from '../components/services/ServicesPricing';

export function Services() {
  return (
    <div className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      <ServicesPricing />
    </div>
  );
}