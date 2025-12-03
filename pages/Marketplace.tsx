import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MOCK_MARKET_DATA } from '../constants';
import { TrendingUp, TrendingDown } from 'lucide-react';

const Marketplace = () => {
  const { t, language } = useLanguage();

  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold text-gray-800">{t('marketPrice')}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {MOCK_MARKET_DATA.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex">
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover" />
            <div className="p-4 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm">Regional Market Avg.</p>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <span className="text-2xl font-bold text-primary">৳{item.price}</span>
                  <span className="text-gray-500 text-sm">/{item.unit}</span>
                </div>
                <div className={`flex items-center text-sm font-medium ${parseInt(item.id) % 2 === 0 ? 'text-green-600' : 'text-red-500'}`}>
                  {parseInt(item.id) % 2 === 0 ? <TrendingUp size={16} className="mr-1" /> : <TrendingDown size={16} className="mr-1" />}
                  {parseInt(item.id) % 2 === 0 ? '+2%' : '-1.5%'}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;