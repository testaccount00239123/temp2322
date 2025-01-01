import React from 'react';
import { ContactHero } from '../components/contact/ContactHero';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';

export function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <ContactHero />
      <div className="grid md:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}