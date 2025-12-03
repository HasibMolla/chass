
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { getCropById } from '../services/cropService';
import { CropGuideData } from '../types';
import { 
  ArrowLeft, Calendar, Droplets, Thermometer, Sprout, 
  Layers, Bug, ClipboardList, TrendingUp, Loader2 
} from 'lucide-react';

type Tab = 'overview' | 'cultivation' | 'health' | 'harvest';

const CropDetail = () => {
  const { id } = useParams();
  const { t, language } = useLanguage();
  const [crop, setCrop] = useState<CropGuideData | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<Tab>('overview');

  useEffect(() => {
    const fetchCrop = async () => {
      if (id) {
        setLoading(true);
        const data = await getCropById(id, language);
        setCrop(data || null);
        setLoading(false);
      }
    };
    fetchCrop();
  }, [id, language]);

  if (loading) return <div className="flex justify-center items-center h-screen"><Loader2 className="animate-spin text-primary h-8 w-8" /></div>;
  if (!crop) return <div className="p-8 text-center">Crop not found</div>;

  const tabs: { id: Tab; label: string; icon: any }[] = [
    { id: 'overview', label: t('overview'), icon: ClipboardList },
    { id: 'cultivation', label: t('cultivation'), icon: Layers },
    { id: 'health', label: t('health'), icon: Bug },
    { id: 'harvest', label: t('harvest'), icon: Sprout },
  ];

  return (
    <div className="pb-24 animate-fade-in">
      {/* Header & Hero */}
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg mb-6">
        <img src={crop.image} alt={crop.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-6 text-white w-full">
          <Link to="/guide" className="inline-flex items-center text-white/80 hover:text-white mb-3 text-sm font-medium backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full">
            <ArrowLeft size={16} className="mr-1" /> Back to Guide
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-1">{crop.name}</h1>
          <p className="text-lg opacity-90 italic font-light">{crop.scientificName}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-2 overflow-x-auto pb-2 mb-4 scrollbar-hide">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                activeTab === tab.id 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              <Icon size={16} className="mr-2" />
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-8 min-h-[400px]">
        
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed border-l-4 border-secondary pl-4 py-1 bg-amber-50/50 rounded-r-lg">
              {crop.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard icon={Calendar} title={t('sowing')} value={crop.sowingTime} color="blue" />
              <InfoCard icon={Sprout} title={t('harvesting')} value={crop.harvestingTime} color="green" />
              <InfoCard icon={Layers} title={t('soil')} value={crop.soil} color="amber" />
              <InfoCard icon={Thermometer} title={t('climate')} value={crop.climate} color="red" />
              <InfoCard icon={Droplets} title={t('irrigation')} value={crop.waterRequirements} color="cyan" />
              <InfoCard icon={TrendingUp} title={t('yield')} value={crop.yield} color="purple" />
            </div>
          </div>
        )}

        {/* Cultivation Tab (Lifecycle + Fertilizer) */}
        {activeTab === 'cultivation' && (
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Sprout className="mr-2 text-primary" /> {t('stages')}
              </h3>
              <div className="relative border-l-2 border-emerald-200 ml-3 space-y-6">
                {crop.lifecycle.map((stage, idx) => (
                  <div key={idx} className="ml-6 relative">
                    <span className="absolute -left-[31px] top-0 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-white">
                      <span className="h-2 w-2 rounded-full bg-primary"></span>
                    </span>
                    <h4 className="text-lg font-bold text-gray-800">{stage.stage}</h4>
                    <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-1 rounded mb-2 inline-block">
                      {stage.duration}
                    </span>
                    <ul className="list-disc list-outside ml-4 text-gray-600 mt-1 space-y-1 text-sm">
                      {stage.activities.map((act, i) => <li key={i}>{act}</li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Layers className="mr-2 text-secondary" /> {t('fertilizer')}
              </h3>
              <div className="overflow-hidden rounded-xl border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosage (per bigha)</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {crop.fertilizerSchedule.map((schedule, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="px-4 py-3 text-sm font-medium text-gray-900">{schedule.stage}</td>
                        <td className="px-4 py-3 text-sm text-gray-600">
                          {schedule.items.map((item, i) => (
                            <span key={i} className="block">
                              <span className="font-bold">{item.name}:</span> {item.quantity}
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>
        )}

        {/* Health Tab (Pests & Diseases) */}
        {activeTab === 'health' && (
          <div className="space-y-6">
             <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Bug className="mr-2 text-red-500" /> {t('diseases')}
              </h3>
            {crop.pestsAndDiseases.map((pest, idx) => (
              <div key={idx} className="bg-red-50 rounded-xl p-5 border border-red-100">
                <h4 className="text-lg font-bold text-red-800 mb-2">{pest.name}</h4>
                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-bold uppercase text-red-400 block mb-1">Symptoms</span>
                    <p className="text-sm text-gray-700">{pest.symptoms}</p>
                  </div>
                  <div className="bg-white/60 p-3 rounded-lg border border-red-100/50">
                    <span className="text-xs font-bold uppercase text-green-600 block mb-1">Management</span>
                    <p className="text-sm text-gray-800 font-medium">{pest.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Harvest Tab */}
        {activeTab === 'harvest' && (
           <div className="space-y-6">
             <div className="bg-green-50 p-6 rounded-xl border border-green-100 text-center">
                <Sprout size={48} className="text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-green-900 mb-2">{t('harvesting')}</h3>
                <p className="text-green-800 mb-4">{crop.harvestingTime}</p>
                <div className="bg-white p-4 rounded-lg inline-block shadow-sm">
                   <p className="text-sm text-gray-500 uppercase font-bold mb-1">{t('yield')}</p>
                   <p className="text-2xl font-bold text-primary">{crop.yield}</p>
                </div>
             </div>
             <div className="prose prose-sm max-w-none text-gray-600">
               <h4 className="font-bold text-gray-800">Post-Harvest Tips</h4>
               <ul className="list-disc pl-5 space-y-1">
                 <li>Dry grains to 12-14% moisture content for storage.</li>
                 <li>Store in air-tight containers or plastic drums.</li>
                 <li>Clean machinery before and after use.</li>
               </ul>
             </div>
           </div>
        )}

      </div>
    </div>
  );
};

const InfoCard = ({ icon: Icon, title, value, color }: { icon: any, title: string, value: string, color: string }) => {
  const colorClasses: {[key: string]: string} = {
    blue: 'bg-blue-50 text-blue-600',
    green: 'bg-green-50 text-green-600',
    amber: 'bg-amber-50 text-amber-600',
    red: 'bg-red-50 text-red-600',
    cyan: 'bg-cyan-50 text-cyan-600',
    purple: 'bg-purple-50 text-purple-600',
  };

  return (
    <div className="flex items-start p-4 bg-gray-50 rounded-xl border border-gray-100">
      <div className={`p-2 rounded-lg mr-3 ${colorClasses[color]}`}>
        <Icon size={20} />
      </div>
      <div>
        <p className="text-xs font-bold text-gray-500 uppercase">{title}</p>
        <p className="text-sm font-medium text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default CropDetail;
