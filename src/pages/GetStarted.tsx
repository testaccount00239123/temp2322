import React from 'react';
import { GetStartedHero } from '../components/get-started/GetStartedHero';
import { GetStartedSteps } from '../components/get-started/GetStartedSteps';
import { GetStartedForm } from '../components/get-started/GetStartedForm';

export function GetStarted() {
  return (
    <div className="min-h-screen bg-white">
      <GetStartedHero />
      <GetStartedSteps />
      <GetStartedForm />
    </div>
  );
}