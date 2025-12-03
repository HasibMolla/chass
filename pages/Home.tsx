import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { AlertTriangle, Droplets, Sun, Wind, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t, language } = useLanguage();

  const formattedDate = new Date().toLocaleDateString(language === 'en' ? 'en-US' : 'bn-BD', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="space-y-6 pb-20">
      {/* Welcome Section */}
      <section className="bg-gradient-to-r from-primary to-emerald-800 text-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold mb-2">{t('welcome')}</h2>
        <p className="opacity-90">{t('subtitle')}</p>
        <div className="mt-4 text-sm font-medium bg-white/20 inline-block px-3 py-1 rounded-lg">
          {formattedDate}
        </div>
      </section>

      {/* Weather Summary Card */}
      <section className="bg-white p-6 rounded-xl shadow-sm border border-emerald-100">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-bold text-gray-800">{t('weather')} (Dhaka)</h3>
          <Link to="/weather" className="text-primary text-sm font-medium hover:underline">View Details</Link>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Sun className="h-12 w-12 text-secondary" />
            <div>
              <p className="text-3xl font-bold text-gray-900">32°C</p>
              <p className="text-gray-500">Sunny</p>
            </div>
          </div>
          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex items-center"><Droplets className="h-4 w-4 mr-2 text-blue-500" /> 65% Humidity</div>
            <div className="flex items-center"><Wind className="h-4 w-4 mr-2 text-gray-500" /> 12 km/h Wind</div>
          </div>
        </div>
      </section>

      {/* Alerts */}
      <section className="bg-amber-50 p-4 rounded-xl border border-amber-200">
        <div className="flex items-start space-x-3">
          <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-amber-800">Pest Alert: Brown Planthopper</h4>
            <p className="text-sm text-amber-700 mt-1">
              {language === 'en' 
                ? "High risk of infestation in Paddy fields due to current humidity. Monitor fields daily." 
                : "বর্তমান আর্দ্রতার কারণে ধান ক্ষেতে বাদামী গাছফড়িং আক্রমণের উচ্চ ঝুঁকি। প্রতিদিন ক্ষেত পর্যবেক্ষণ করুন।"}
            </p>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Link to="/disease" className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center space-y-2 hover:border-primary transition-all">
          <div className="bg-red-100 p-3 rounded-full text-red-600">
            <AlertTriangle className="h-6 w-6" />
          </div>
          <span className="font-semibold text-gray-700">{t('detectDisease')}</span>
        </Link>
        
        <Link to="/calculators" className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center space-y-2 hover:border-primary transition-all">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600">
            <Droplets className="h-6 w-6" />
          </div>
          <span className="font-semibold text-gray-700">{t('calculators')}</span>
        </Link>

        <Link to="/guide" className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center space-y-2 hover:border-primary transition-all col-span-2 md:col-span-1">
          <div className="bg-green-100 p-3 rounded-full text-green-600">
            <BookOpen className="h-6 w-6" />
          </div>
          <span className="font-semibold text-gray-700">{t('cropGuide')}</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;