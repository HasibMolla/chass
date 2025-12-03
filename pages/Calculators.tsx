import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { CalculatorResult } from '../types';
import { Sprout } from 'lucide-react';

const Calculators = () => {
  const { t, language } = useLanguage();
  const [landSize, setLandSize] = useState<number | ''>('');
  const [crop, setCrop] = useState('paddy');
  const [result, setResult] = useState<CalculatorResult | null>(null);

  const calculate = () => {
    if (!landSize) return;
    
    // Simplified logic: Standard recommendation per decimal in kg (Mock logic)
    // 1 Decimal = 40.46 sq meters
    const size = Number(landSize);
    
    let rates = { urea: 0, tsp: 0, mop: 0, water: 0 };
    
    if (crop === 'paddy') {
      rates = { urea: 0.9, tsp: 0.5, mop: 0.3, water: 200 };
    } else if (crop === 'wheat') {
      rates = { urea: 0.8, tsp: 0.6, mop: 0.4, water: 150 };
    } else if (crop === 'potato') {
      rates = { urea: 1.2, tsp: 0.8, mop: 0.8, water: 100 };
    }

    setResult({
      urea: parseFloat((size * rates.urea).toFixed(2)),
      tsp: parseFloat((size * rates.tsp).toFixed(2)),
      mop: parseFloat((size * rates.mop).toFixed(2)),
      water: parseFloat((size * rates.water).toFixed(2)),
    });
  };

  return (
    <div className="space-y-6 pb-20">
      <h2 className="text-2xl font-bold text-gray-800">{t('calculateFertilizer')}</h2>

      <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('landSize')}</label>
          <input
            type="number"
            value={landSize}
            onChange={(e) => setLandSize(Number(e.target.value))}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
            placeholder="e.g. 50"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">{t('cropType')}</label>
          <div className="grid grid-cols-3 gap-2">
            {['paddy', 'wheat', 'potato'].map((c) => (
              <button
                key={c}
                onClick={() => setCrop(c)}
                className={`py-2 px-3 rounded-lg border text-sm font-medium transition-colors ${
                  crop === c 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100'
                }`}
              >
                {t(c as any)}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={calculate}
          className="w-full bg-secondary hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors mt-4"
        >
          {t('calculate')}
        </button>
      </div>

      {result && (
        <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-100 animate-fade-in">
          <h3 className="font-bold text-lg mb-4 text-emerald-900 flex items-center">
            <Sprout className="mr-2" /> {t('results')}
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <ResultItem label={t('urea')} value={`${result.urea} kg`} color="bg-blue-100 text-blue-800" />
            <ResultItem label={t('tsp')} value={`${result.tsp} kg`} color="bg-gray-200 text-gray-800" />
            <ResultItem label={t('mop')} value={`${result.mop} kg`} color="bg-red-100 text-red-800" />
            <ResultItem label={t('water')} value={`${result.water} L`} color="bg-cyan-100 text-cyan-800" />
          </div>
        </div>
      )}
    </div>
  );
};

const ResultItem = ({ label, value, color }: { label: string, value: string, color: string }) => (
  <div className={`p-3 rounded-lg ${color} text-center`}>
    <p className="text-xs uppercase tracking-wider opacity-70 mb-1">{label}</p>
    <p className="text-xl font-bold">{value}</p>
  </div>
);

export default Calculators;