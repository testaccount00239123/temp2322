import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AboutHero } from '../components/about/AboutHero';
import { AboutMission } from '../components/about/AboutMission';
import { AboutValues } from '../components/about/AboutValues';
import { AboutTeam } from '../components/about/AboutTeam';

export function AboutUs() {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <AboutHero />
      <AboutMission />
      <AboutValues />
      <AboutTeam />
    </div>
  );
}