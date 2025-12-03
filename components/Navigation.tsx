import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, ScanLine, CloudSun, ShoppingCart, Calculator, Sprout } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navigation = () => {
  const { pathname } = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { path: '/', label: t('home'), icon: Home },
    { path: '/disease', label: t('scanCrop'), icon: ScanLine },
    { path: '/weather', label: t('weather'), icon: CloudSun },
    { path: '/calculators', label: t('calculators'), icon: Calculator },
    { path: '/advisory', label: t('advisory'), icon: Sprout },
    { path: '/market', label: t('market'), icon: ShoppingCart },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:sticky md:top-0 md:border-t-0 md:border-b shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between md:justify-start md:space-x-8">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            const Icon = item.icon;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center py-3 px-2 md:flex-row md:py-4 transition-colors ${
                  isActive 
                    ? 'text-primary font-bold' 
                    : 'text-gray-500 hover:text-primary'
                }`}
              >
                <Icon size={24} className={isActive ? 'stroke-2' : 'stroke-1.5'} />
                <span className="text-[10px] md:text-sm mt-1 md:mt-0 md:ml-2 font-medium">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;