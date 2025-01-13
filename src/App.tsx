import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext.js';
import { AuthProvider } from './context/AuthContext.js';
import { useAuth } from './context/AuthContext.js';
import { Navbar } from './components/Navbar.js';
import { Hero } from './components/Hero.js';
import { AboutUs } from './pages/AboutUs.js';
import { Services } from './pages/Services.js';
import { Benefits } from './pages/Benefits.js';
import { GetStarted } from './pages/GetStarted.js';
import { Contact } from './pages/Contact.js';
import { FAQ } from './pages/FAQ.js';
import { Login } from './components/auth/Login.js';
import { Report } from './pages/Report.js';

// Protected Route wrapper component
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <LanguageProvider>
        <AuthProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
              <Route path="/benefits" element={<Benefits />} />
              <Route path="/login" element={<Login />} />
              <Route path="/report" element={<Report />} />
              <Route 
                path="/get-started" 
                element={
                  <ProtectedRoute>
                    <GetStarted />
                  </ProtectedRoute>
                } 
              />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
            </Routes>
          </div>
        </AuthProvider>
      </LanguageProvider>
    </Router>
  );
}

export default App;