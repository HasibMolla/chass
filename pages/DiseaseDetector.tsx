import React, { useState, useRef } from 'react';
import { Camera, Upload, RefreshCw, AlertCircle, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { analyzeCropDisease } from '../services/geminiService';
import { DiagnosisResult } from '../types';

const DiseaseDetector = () => {
  const { t, language } = useLanguage();
  const [image, setImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DiagnosisResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
      setImage(URL.createObjectURL(selectedFile));
      setResult(null);
      setError(null);
    }
  };

  const handleAnalyze = async () => {
    if (!file) return;
    setLoading(true);
    setError(null);
    try {
      const diagnosis = await analyzeCropDisease(file, language);
      setResult(diagnosis);
    } catch (err) {
      setError(t('error'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pb-20 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">{t('detectDisease')}</h2>
      
      {/* Image Input Area */}
      <div className="bg-white p-6 rounded-xl shadow-sm border-2 border-dashed border-gray-300 flex flex-col items-center justify-center min-h-[200px] relative">
        {image ? (
          <div className="relative w-full">
            <img src={image} alt="Crop" className="w-full h-64 object-cover rounded-lg" />
            <button 
              onClick={() => { setImage(null); setFile(null); setResult(null); }}
              className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md text-red-500 hover:bg-red-50"
            >
              <RefreshCw size={20} />
            </button>
          </div>
        ) : (
          <div className="text-center space-y-4">
            <div className="bg-emerald-50 p-4 rounded-full inline-block text-primary">
              <Camera size={40} />
            </div>
            <div className="space-y-2">
              <button 
                onClick={() => fileInputRef.current?.click()}
                className="block w-full bg-primary text-white font-medium py-3 px-6 rounded-lg shadow-md active:scale-95 transition-transform"
              >
                {t('uploadImage')}
              </button>
              <p className="text-xs text-gray-500">Supports JPG, PNG</p>
            </div>
          </div>
        )}
        <input 
          type="file" 
          accept="image/*" 
          capture="environment"
          ref={fileInputRef} 
          onChange={handleFileChange} 
          className="hidden" 
        />
      </div>

      {/* Action Button */}
      {image && !result && (
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className={`w-full py-4 rounded-xl font-bold text-white shadow-lg flex items-center justify-center space-x-2 ${
            loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-secondary hover:bg-amber-700'
          }`}
        >
          {loading ? (
            <>
              <RefreshCw className="animate-spin h-5 w-5" />
              <span>{t('analyzing')}</span>
            </>
          ) : (
            <span>{t('detectDisease')}</span>
          )}
        </button>
      )}

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 p-4 rounded-lg flex items-center text-red-700 border border-red-200">
          <AlertCircle className="h-5 w-5 mr-2" />
          {error}
        </div>
      )}

      {/* Results Section */}
      {result && (
        <div className="bg-white rounded-xl shadow-lg overflow-hidden animate-fade-in">
          <div className={`p-4 ${result.confidence > 70 ? 'bg-red-50 border-b border-red-100' : 'bg-yellow-50 border-b border-yellow-100'}`}>
            <h3 className="text-xl font-bold text-gray-800 flex items-center">
              <AlertCircle className="mr-2 text-red-600" />
              {result.diseaseName}
            </h3>
            <div className="mt-1 flex items-center text-sm text-gray-600">
              <span className="font-medium mr-2">Confidence:</span>
              <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-secondary" 
                  style={{ width: `${result.confidence}%` }}
                ></div>
              </div>
              <span className="ml-2">{result.confidence}%</span>
            </div>
          </div>
          
          <div className="p-6 space-y-6">
            <div>
              <p className="text-gray-700 leading-relaxed">{result.description}</p>
            </div>

            <div>
              <h4 className="font-bold text-primary mb-2 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                {t('treatment')}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 bg-emerald-50 p-4 rounded-lg">
                {result.treatment.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-gray-800 mb-2">{t('prevention')}</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                {result.preventative.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiseaseDetector;