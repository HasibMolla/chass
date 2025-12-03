import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { APP_NAME } from '../constants';
import { Leaf } from 'lucide-react';

const Header = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <header className="bg-primary text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Leaf className="h-6 w-6" />
          <h1 className="text-xl font-bold tracking-tight">{APP_NAME}</h1>
        </div>
        <button
          onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
          className="bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full text-sm font-semibold transition-colors border border-white/40"
        >
          {language === 'en' ? 'বাংলা' : 'English'}
        </button>
      </div>
    </header>
  );
};

export default Header;