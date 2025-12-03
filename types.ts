
export type Language = 'en' | 'bn';

export interface WeatherData {
  day: string;
  temp: number;
  humidity: number;
  rainChance: number;
  condition: string;
}

export interface Crop {
  id: string;
  name: string;
  image: string;
  price: number;
  unit: string;
}

export interface DiagnosisResult {
  diseaseName: string;
  confidence: number;
  description: string;
  treatment: string[];
  preventative: string[];
}

export interface CalculatorResult {
  urea: number;
  tsp: number;
  mop: number;
  water: number;
}

// Detailed Crop Guide Interfaces
export interface CropStage {
  stage: string;
  duration: string;
  activities: string[];
}

export interface FertilizerDose {
  stage: string;
  items: { name: string; quantity: string }[];
}

export interface PestManagement {
  name: string;
  symptoms: string;
  solution: string;
}

export interface CropGuideData {
  id: string;
  name: string;
  scientificName: string;
  image: string;
  season: string;
  description: string;
  sowingTime: string;
  harvestingTime: string;
  soil: string;
  climate: string;
  yield: string;
  waterRequirements: string;
  lifecycle: CropStage[];
  fertilizerSchedule: FertilizerDose[];
  pestsAndDiseases: PestManagement[];
}
