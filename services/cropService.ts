
import { CROP_GUIDES } from '../constants';
import { Language, CropGuideData } from '../types';

// This service simulates an API call. In a real app, this would fetch from a backend or local SQLite database.

export const getCrops = async (language: Language): Promise<CropGuideData[]> => {
  // Simulate network delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(CROP_GUIDES[language] || []);
    }, 300);
  });
};

export const getCropById = async (id: string, language: Language): Promise<CropGuideData | undefined> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const crops = CROP_GUIDES[language] || [];
      const crop = crops.find(c => c.id === id);
      resolve(crop);
    }, 200);
  });
};
