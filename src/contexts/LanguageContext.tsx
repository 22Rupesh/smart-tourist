import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = {
  code: string;
  name: string;
  nativeName: string;
};

const languages: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिंदी' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'Odia', nativeName: 'ଓଡ଼ିଆ' }
];

interface LanguageContextType {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  languages: Language[];
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Simple translation dictionary for demo
const translations: Record<string, Record<string, string>> = {
  en: {
    dashboard: 'Dashboard',
    profile: 'Profile',
    safety: 'Safety',
    alerts: 'Alerts',
    efir: 'e-FIR',
    places: 'Places',
    services: 'Services',
    tours: 'Tours',
    logout: 'Logout',
    welcome: 'Welcome',
    safetyScore: 'Safety Score',
    currentLocation: 'Current Location',
    emergencyContacts: 'Emergency Contacts',
    panicButton: 'PANIC BUTTON',
    nearbyServices: 'Nearby Services',
    recommendedPlaces: 'Recommended Places',
    activeAlerts: 'Active Alerts',
    recentIncidents: 'Recent Incidents'
  },
  hi: {
    dashboard: 'डैशबोर्ड',
    profile: 'प्रोफाइल',
    safety: 'सुरक्षा',
    alerts: 'अलर्ट',
    efir: 'ई-एफआईआर',
    places: 'स्थान',
    services: 'सेवाएं',
    tours: 'टूर',
    logout: 'लॉगआउट',
    welcome: 'स्वागत',
    safetyScore: 'सुरक्षा स्कोर',
    currentLocation: 'वर्तमान स्थान',
    emergencyContacts: 'आपातकालीन संपर्क',
    panicButton: 'पैनिक बटन',
    nearbyServices: 'नजदीकी सेवाएं',
    recommendedPlaces: 'अनुशंसित स्थान',
    activeAlerts: 'सक्रिय अलर्ट',
    recentIncidents: 'हाल की घटनाएं'
  }
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(languages[0]);

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
  };

  const t = (key: string): string => {
    return translations[currentLanguage.code]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}