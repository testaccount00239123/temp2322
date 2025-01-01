import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './pages/AboutUs';
import { Services } from './pages/Services';
import { Benefits } from './pages/Benefits';
import { GetStarted } from './pages/GetStarted';
import { Contact } from './pages/Contact';
import { FAQ } from './pages/FAQ';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/benefits" element={<Benefits />} />
            <Route path="/get-started" element={<GetStarted />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;