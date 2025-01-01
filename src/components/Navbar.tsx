import React from 'react';
import { Link } from 'react-router-dom';
import { LanguageToggle } from './LanguageToggle';
import { Logo } from './Logo';
import { useLanguage } from '../context/LanguageContext';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: { en: 'Home', fr: 'Accueil' }, href: '/' },
  { label: { en: 'About Us', fr: 'À Propos' }, href: '/about' },
  { label: { en: 'Services', fr: 'Services' }, href: '/services' },
  { label: { en: 'Benefits', fr: 'Avantages' }, href: '/benefits' },
  { label: { en: 'Get Started', fr: 'Débuter' }, href: '/get-started' },
  { label: { en: 'Contact', fr: 'Contact' }, href: '/contact' },
  { label: { en: 'FAQ', fr: 'FAQ' }, href: '/faq' },
];

export function Navbar() {
  const { language } = useLanguage();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Logo />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#003366] transition-colors"
              >
                {item.label[language]}
              </Link>
            ))}
            <LanguageToggle />
          </div>

          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="px-4 py-2 text-sm font-medium text-white bg-[#003366] hover:bg-[#002244] rounded-md transition-colors"
            >
              {language === 'en' ? 'Client Login' : 'Connexion client'}
            </Link>
            <Link
              to="/report"
              className="px-4 py-2 text-sm font-medium text-white bg-[#3399FF] hover:bg-[#2277DD] rounded-md transition-colors"
            >
              {language === 'en' ? 'File a Report' : 'Remplir un rapport'}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}