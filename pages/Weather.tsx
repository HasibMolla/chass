import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { MOCK_WEATHER_DATA } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CloudRain, Sun, Cloud, Droplets } from 'lucide-react';

const Weather = () => {
  const { t } = useLanguage();

  const getWeatherIcon = (condition: string) => {
    switch (condition.toLowerCase()) {
      case 'rain': return <CloudRain className="text-blue-500" />;
      case 'sunny': return <Sun className="text-amber-500" />;
      default: return <Cloud className="text-gray-500" />;
    }
  };

  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold text-gray-800">{t('weather')} Forecast</h2>

      {/* Chart */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 h-64">
        <h3 className="text-sm font-semibold text-gray-500 mb-4">Temperature Trend (Next 7 Days)</h3>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={MOCK_WEATHER_DATA}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#d97706" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#d97706" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fontSize: 12}} />
            <YAxis hide domain={['dataMin - 5', 'dataMax + 5']} />
            <Tooltip 
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Area type="monotone" dataKey="temp" stroke="#d97706" fillOpacity={1} fill="url(#colorTemp)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* List */}
      <div className="space-y-3">
        {MOCK_WEATHER_DATA.map((day, idx) => (
          <div key={idx} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between">
            <div className="flex items-center space-x-4 w-1/3">
              <span className="font-bold text-gray-700">{day.day}</span>
              {getWeatherIcon(day.condition)}
            </div>
            
            <div className="flex items-center space-x-6 flex-1 justify-end">
              <div className="text-center">
                <p className="text-xs text-gray-500">Temp</p>
                <p className="font-bold">{day.temp}°</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-gray-500">Hum</p>
                <div className="flex items-center">
                   <Droplets size={12} className="text-blue-400 mr-1"/>
                   <span className="font-medium text-sm">{day.humidity}%</span>
                </div>
              </div>
              <div className="text-center w-12">
                <p className="text-xs text-gray-500">Rain</p>
                <p className="text-sm font-medium text-blue-600">{day.rainChance}%</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800">
        <strong>Tip:</strong> Spraying fertilizer is best done on Thursday morning due to low wind and no rain.
      </div>
    </div>
  );
};

export default Weather;