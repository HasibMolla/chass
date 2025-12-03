
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getCrops } from '../services/cropService';
import { CropGuideData } from '../types';
import { ArrowRight, Sprout, Loader2 } from 'lucide-react';

const CropGuide = () => {
  const { t, language } = useLanguage();
  const [crops, setCrops] = useState<CropGuideData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCrops = async () => {
      setLoading(true);
      try {
        const data = await getCrops(language);
        setCrops(data);
      } catch (e) {
        console.error("Failed to load crops");
      } finally {
        setLoading(false);
      }
    };
    fetchCrops();
  }, [language]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="animate-spin text-primary h-8 w-8" />
      </div>
    );
  }

  return (
    <div className="space-y-6 pb-20">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-800">{t('cropGuide')}</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {crops.map((crop) => (
          <Link 
            key={crop.id} 
            to={`/guide/${crop.id}`}
            className="group bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all flex flex-col"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={crop.image} 
                alt={crop.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-emerald-800 shadow-sm">
                {crop.season}
              </div>
            </div>
            
            <div className="p-5 flex-1 flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-bold text-gray-800 group-hover:text-primary transition-colors">{crop.name}</h3>
                  <p className="text-sm text-gray-500 italic">{crop.scientificName}</p>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm line-clamp-2 mb-4 flex-1">
                {crop.description}
              </p>

              <div className="flex items-center text-primary text-sm font-semibold mt-auto">
                {t('viewGuide')} <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>

      {crops.length === 0 && (
        <div className="text-center py-10 bg-gray-50 rounded-xl border border-dashed border-gray-300">
          <Sprout className="h-10 w-10 text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">No guides available for this language yet.</p>
        </div>
      )}
    </div>
  );
};

export default CropGuide;
