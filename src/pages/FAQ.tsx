import React from 'react';
import { FAQHero } from '../components/faq/FAQHero';
import { FAQList } from '../components/faq/FAQList';
import { FAQContact } from '../components/faq/FAQContact';

export function FAQ() {
  return (
    <div className="min-h-screen bg-white">
      <FAQHero />
      <FAQList />
      <FAQContact />
    </div>
  );
}