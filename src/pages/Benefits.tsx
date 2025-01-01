import React from 'react';
import { BenefitsHero } from '../components/benefits/BenefitsHero';
import { BenefitsList } from '../components/benefits/BenefitsList';
import { BenefitsTestimonials } from '../components/benefits/BenefitsTestimonials';

export function Benefits() {
  return (
    <div className="min-h-screen bg-white">
      <BenefitsHero />
      <BenefitsList />
      <BenefitsTestimonials />
    </div>
  );
}