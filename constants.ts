
import { Language, CropGuideData } from './types';

export const APP_NAME = "Chasabbad";

export const TRANSLATIONS = {
  en: {
    welcome: "Welcome to Chasabbad",
    subtitle: "Your smart farming companion",
    scanCrop: "Scan Crop",
    weather: "Weather",
    market: "Marketplace",
    advisory: "Advisory",
    calculators: "Calculators",
    home: "Home",
    detectDisease: "Detect Disease",
    uploadImage: "Take Photo or Upload",
    analyzing: "Analyzing Crop Health...",
    diagnosis: "Diagnosis Report",
    treatment: "Recommended Treatment",
    prevention: "Prevention",
    selectLanguage: "Select Language",
    marketPrice: "Market Prices",
    calculateFertilizer: "Fertilizer Calculator",
    landSize: "Land Size (Decimals)",
    cropType: "Crop Type",
    calculate: "Calculate",
    results: "Results",
    urea: "Urea",
    tsp: "TSP",
    mop: "MoP",
    water: "Water Needed",
    paddy: "Paddy",
    wheat: "Wheat",
    potato: "Potato",
    loading: "Loading...",
    error: "An error occurred",
    askAdvisor: "Ask Agricultural Advisor",
    send: "Send",
    advisorPlaceholder: "Ask about pests, irrigation, or seasons...",
    offlineMode: "Offline Mode Active",
    cropGuide: "Crop Guide",
    viewGuide: "View Guide",
    sowing: "Sowing Time",
    harvesting: "Harvesting",
    soil: "Soil Type",
    climate: "Climate",
    diseases: "Diseases & Pests",
    overview: "Overview",
    cultivation: "Cultivation",
    health: "Health",
    harvest: "Harvest",
    fertilizer: "Fertilizer",
    stages: "Growth Stages",
    irrigation: "Irrigation",
    yield: "Expected Yield",
  },
  bn: {
    welcome: "চাষাবাদে স্বাগতম",
    subtitle: "আপনার স্মার্ট কৃষি সহযোগী",
    scanCrop: "রোগ নির্ণয়",
    weather: "আবহাওয়া",
    market: "বাজার দর",
    advisory: "পরামর্শ",
    calculators: "ক্যালকুলেটর",
    home: "হোম",
    detectDisease: "রোগ শনাক্তকরণ",
    uploadImage: "ছবি তুলুন বা আপলোড করুন",
    analyzing: "ফসল বিশ্লেষণ করা হচ্ছে...",
    diagnosis: "রোগ নির্ণয় রিপোর্ট",
    treatment: "প্রস্তাবিত চিকিৎসা",
    prevention: "প্রতিরোধ",
    selectLanguage: "ভাষা নির্বাচন করুন",
    marketPrice: "বর্তমান বাজার দর",
    calculateFertilizer: "সার ক্যালকুলেটর",
    landSize: "জমির পরিমাণ (শতাংশ)",
    cropType: "ফসলের ধরন",
    calculate: "হিসাব করুন",
    results: "ফলাফল",
    urea: "ইউরিয়া",
    tsp: "টিএসপি",
    mop: "এমওপি",
    water: "প্রয়োজনীয় পানি",
    paddy: "ধান",
    wheat: "গম",
    potato: "আলু",
    loading: "লোড হচ্ছে...",
    error: "একটি ত্রুটি ঘটেছে",
    askAdvisor: "কৃষি উপদেষ্টাকে জিজ্ঞাসা করুন",
    send: "পাঠান",
    advisorPlaceholder: "পোকামাকড়, সেচ বা মৌসুম সম্পর্কে জিজ্ঞাসা করুন...",
    offlineMode: "অফলাইন মোড চালু আছে",
    cropGuide: "ফসল নির্দেশিকা",
    viewGuide: "নির্দেশিকা দেখুন",
    sowing: "বপন সময়",
    harvesting: "কাটার সময়",
    soil: "মাটির ধরন",
    climate: "জলবায়ু",
    diseases: "রোগ ও পোকামাকড়",
    overview: "সারসংক্ষেপ",
    cultivation: "চাষাবাদ",
    health: "সুরক্ষা",
    harvest: "ফসল সংগ্রহ",
    fertilizer: "সার প্রয়োগ",
    stages: "বৃদ্ধির পর্যায়",
    irrigation: "সেচ ব্যবস্থাপনা",
    yield: "সম্ভাব্য ফলন",
  }
};

export const MOCK_WEATHER_DATA = [
  { day: 'Sat', temp: 30, humidity: 75, rainChance: 20, condition: 'Sunny' },
  { day: 'Sun', temp: 29, humidity: 80, rainChance: 40, condition: 'Cloudy' },
  { day: 'Mon', temp: 28, humidity: 85, rainChance: 80, condition: 'Rain' },
  { day: 'Tue', temp: 27, humidity: 82, rainChance: 60, condition: 'Rain' },
  { day: 'Wed', temp: 29, humidity: 78, rainChance: 30, condition: 'Cloudy' },
  { day: 'Thu', temp: 31, humidity: 70, rainChance: 10, condition: 'Sunny' },
  { day: 'Fri', temp: 32, humidity: 65, rainChance: 0, condition: 'Sunny' },
];

export const MOCK_MARKET_DATA = [
  { id: '1', name: 'Rice (Miniket)', image: 'https://picsum.photos/200/200?random=1', price: 65, unit: 'kg' },
  { id: '2', name: 'Potato (Diamond)', image: 'https://picsum.photos/200/200?random=2', price: 25, unit: 'kg' },
  { id: '3', name: 'Onion (Local)', image: 'https://picsum.photos/200/200?random=3', price: 90, unit: 'kg' },
  { id: '4', name: 'Green Chili', image: 'https://picsum.photos/200/200?random=4', price: 120, unit: 'kg' },
  { id: '5', name: 'Eggplant', image: 'https://picsum.photos/200/200?random=5', price: 45, unit: 'kg' },
];

export const CROP_GUIDES: Record<Language, CropGuideData[]> = {
  en: [
    {
      id: '1',
      name: 'Paddy (Rice)',
      scientificName: 'Oryza sativa',
      image: 'https://images.unsplash.com/photo-1536617621216-3e4e9f9024c0?w=800&q=80',
      season: 'Boro, Aus, Aman',
      description: 'Rice is the staple food of Bangladesh. Proper management of water and fertilizer is key to high yield.',
      sowingTime: 'Nov-Dec (Boro), Mar-Apr (Aus)',
      harvestingTime: 'Apr-May (Boro), Jul-Aug (Aus)',
      soil: 'Clay or clay-loam soil capable of holding water.',
      climate: 'Warm and humid, 20°C - 35°C',
      waterRequirements: 'High water requirement (1000-1500mm), standing water preferred.',
      yield: '6-7 tons per hectare (High Yield Variety)',
      lifecycle: [
        { stage: 'Seedling', duration: '30-45 Days', activities: ['Seed treatment with fungicides', 'Prepare wet seedbed'] },
        { stage: 'Vegetative', duration: '45-60 Days', activities: ['Transplanting', 'Weeding', 'Tillering'] },
        { stage: 'Reproductive', duration: '30 Days', activities: ['Panicle initiation', 'Flowering', 'Maintain water level'] },
        { stage: 'Ripening', duration: '30 Days', activities: ['Grain filling', 'Drain water 15 days before harvest'] }
      ],
      fertilizerSchedule: [
        { stage: 'Land Preparation', items: [{ name: 'TSP', quantity: '22 kg/bigha' }, { name: 'MoP', quantity: '12 kg/bigha' }, { name: 'Gypsum', quantity: '10 kg/bigha' }] },
        { stage: '15 Days After Transplant', items: [{ name: 'Urea', quantity: '10 kg/bigha' }] },
        { stage: '30 Days After Transplant', items: [{ name: 'Urea', quantity: '10 kg/bigha' }] },
        { stage: '45 Days After Transplant', items: [{ name: 'Urea', quantity: '10 kg/bigha' }, { name: 'MoP', quantity: '5 kg/bigha' }] }
      ],
      pestsAndDiseases: [
        { name: 'Stem Borer', symptoms: 'Dead hearts in vegetative stage, white heads in reproductive stage.', solution: 'Use light traps or apply Cartap/Carbofuran granular.' },
        { name: 'Brown Planthopper', symptoms: 'Plants turn yellow and dry up (Hopper burn).', solution: 'Drain water for 3-4 days. Spray Imidacloprid.' },
        { name: 'Rice Blast', symptoms: 'Spindle-shaped spots on leaves.', solution: 'Apply Tricyclazole or Tebuconazole.' }
      ]
    },
    {
      id: '2',
      name: 'Potato',
      scientificName: 'Solanum tuberosum',
      image: 'https://images.unsplash.com/photo-1518977676651-b53c82a6fcc5?w=800&q=80',
      season: 'Rabi (Winter)',
      description: 'Potato is a major cash crop. It requires cool weather and loose soil for tuber formation.',
      sowingTime: 'October - November',
      harvestingTime: 'February - March',
      soil: 'Sandy loam rich in organic matter, pH 5.0-6.5',
      climate: 'Cool temperature (15°C - 25°C)',
      waterRequirements: 'Moderate, requires 3-4 light irrigations. Avoid waterlogging.',
      yield: '25-30 tons per hectare',
      lifecycle: [
        { stage: 'Sprouting', duration: '15-20 Days', activities: ['Use healthy tubers', 'Pre-sprouting in shade'] },
        { stage: 'Vegetative Growth', duration: '30-40 Days', activities: ['Earthing up', 'Weeding'] },
        { stage: 'Tuber Initiation', duration: '15-20 Days', activities: ['Critical for water', 'Start preventive fungicide'] },
        { stage: 'Tuber Bulking', duration: '30-40 Days', activities: ['Max growth', 'Apply final fertilizer'] }
      ],
      fertilizerSchedule: [
        { stage: 'Basal Dose', items: [{ name: 'Cowdung', quantity: '1 ton/bigha' }, { name: 'TSP', quantity: '30 kg/bigha' }, { name: 'MoP', quantity: '20 kg/bigha' }] },
        { stage: 'Earthing Up (30-35 Days)', items: [{ name: 'Urea', quantity: '25 kg/bigha' }] }
      ],
      pestsAndDiseases: [
        { name: 'Late Blight', symptoms: 'Water-soaked spots on leaves that turn black. Rapid spread.', solution: 'Spray Mancozeb or Metalaxyl immediately.' },
        { name: 'Cutworm', symptoms: 'Cuts stems of young plants at ground level.', solution: 'Apply Chlorpyrifos around the plant base.' }
      ]
    }
  ],
  bn: [
    {
      id: '1',
      name: 'ধান',
      scientificName: 'Oryza sativa',
      image: 'https://images.unsplash.com/photo-1536617621216-3e4e9f9024c0?w=800&q=80',
      season: 'বোরো, আউশ, আমন',
      description: 'ধান বাংলাদেশের প্রধান খাদ্যশস্য। উচ্চ ফলন পেতে পানি ও সারের সঠিক ব্যবস্থাপনা জরুরি।',
      sowingTime: 'নভেম্বর-ডিসেম্বর (বোরো)',
      harvestingTime: 'এপ্রিল-মে (বোরো)',
      soil: 'এঁটেল বা পলি-দোআঁশ মাটি যা পানি ধরে রাখতে পারে।',
      climate: 'উষ্ণ ও আর্দ্র, ২০°সে - ৩৫°সে',
      waterRequirements: 'প্রচুর পানি প্রয়োজন (১০০০-১৫০০ মিমি), জমিতে পানি ধরে রাখা ভালো।',
      yield: 'হেক্টর প্রতি ৬-৭ টন (উফশী)',
      lifecycle: [
        { stage: 'চারা পর্যায়', duration: '৩০-৪৫ দিন', activities: ['বীজ শোধন', 'আদর্শ বীজতলা তৈরি'] },
        { stage: 'কুশি পর্যায়', duration: '৪৫-৬০ দিন', activities: ['চারা রোপন', 'আগাছা দমন', 'কুশি আসা'] },
        { stage: 'প্রজনন পর্যায়', duration: '৩০ দিন', activities: ['কাইচ থোড় আসা', 'ফুল ফোটা', 'জমিতে পানি রাখা'] },
        { stage: 'পাকা পর্যায়', duration: '৩০ দিন', activities: ['দানা পুষ্ট হওয়া', 'কাটার ১৫ দিন আগে পানি বের করা'] }
      ],
      fertilizerSchedule: [
        { stage: 'জমি তৈরি (শেষ চাষ)', items: [{ name: 'টিএসপি', quantity: '২২ কেজি/বিঘা' }, { name: 'এমওপি', quantity: '১২ কেজি/বিঘা' }, { name: 'জিপসাম', quantity: '১০ কেজি/বিঘা' }] },
        { stage: 'রোপনের ১৫ দিন পর', items: [{ name: 'ইউরিয়া', quantity: '১০ কেজি/বিঘা' }] },
        { stage: 'রোপনের ৩০ দিন পর', items: [{ name: 'ইউরিয়া', quantity: '১০ কেজি/বিঘা' }] },
        { stage: 'রোপনের ৪৫ দিন পর', items: [{ name: 'ইউরিয়া', quantity: '১০ কেজি/বিঘা' }, { name: 'এমওপি', quantity: '৫ কেজি/বিঘা' }] }
      ],
      pestsAndDiseases: [
        { name: 'মাজরা পোকা', symptoms: 'মাঝখানের কচি পাতা শুকিয়ে যায় (ডেড হার্ট), শীষ সাদা হয়ে যায়।', solution: 'আলোক ফাঁদ ব্যবহার করুন অথবা কার্বোফুরান দানা প্রয়োগ করুন।' },
        { name: 'বাদামী গাছফড়িং', symptoms: 'গাছ হলুদ হয়ে পুড়ে যাওয়ার মতো শুকিয়ে যায় (হপার বার্ন)।', solution: 'জমির পানি ৩-৪ দিন সরিয়ে রাখুন। ইমিডাক্লোপ্রিড স্প্রে করুন।' },
        { name: 'ব্লাস্ট রোগ', symptoms: 'পাতায় মাকু আকৃতির দাগ দেখা যায়।', solution: 'ট্রাইসাইক্লাজল বা টেবুকোনাজল স্প্রে করুন।' }
      ]
    },
    {
      id: '2',
      name: 'আলু',
      scientificName: 'Solanum tuberosum',
      image: 'https://images.unsplash.com/photo-1518977676651-b53c82a6fcc5?w=800&q=80',
      season: 'রবি (শীতকাল)',
      description: 'আলু একটি প্রধান অর্থকরী ফসল। ফলন বৃদ্ধির জন্য ঠান্ডা আবহাওয়া ও ঝুরঝুরে মাটি প্রয়োজন।',
      sowingTime: 'অক্টোবর - নভেম্বর',
      harvestingTime: 'ফেব্রুয়ারি - মার্চ',
      soil: 'জৈব পদার্থ সমৃদ্ধ বেলে দোআঁশ মাটি।',
      climate: 'ঠান্ডা আবহাওয়া (১৫°সে - ২৫°সে)',
      waterRequirements: 'মাঝারি, ৩-৪ টি হালকা সেচ প্রয়োজন। জলাবদ্ধতা ক্ষতিকর।',
      yield: 'হেক্টর প্রতি ২৫-৩০ টন',
      lifecycle: [
        { stage: 'অঙ্কুরোদগম', duration: '১৫-২০ দিন', activities: ['সুস্থ বীজ ব্যবহার', 'ছায়ায় অঙ্কুর গজানো'] },
        { stage: 'বৃদ্ধি পর্যায়', duration: '৩০-৪০ দিন', activities: ['মাটি তুলে দেওয়া', 'আগাছা পরিষ্কার'] },
        { stage: 'টিউবার গঠন', duration: '১৫-২০ দিন', activities: ['সেচের জন্য গুরুত্বপূর্ণ সময়', 'ছত্রাকনাশক স্প্রে'] },
        { stage: 'টিউবার পুষ্ট হওয়া', duration: '৩০-৪০ দিন', activities: ['সর্বোচ্চ বৃদ্ধি', 'শেষ সার প্রয়োগ'] }
      ],
      fertilizerSchedule: [
        { stage: 'মুল সার (জমি তৈরি)', items: [{ name: 'গোবর', quantity: '১ টন/বিঘা' }, { name: 'টিএসপি', quantity: '৩০ কেজি/বিঘা' }, { name: 'এমওপি', quantity: '২০ কেজি/বিঘা' }] },
        { stage: 'মাটি তোলা (৩০-৩৫ দিন)', items: [{ name: 'ইউরিয়া', quantity: '২৫ কেজি/বিঘা' }] }
      ],
      pestsAndDiseases: [
        { name: 'লেট ব্লাইট (মড়ক)', symptoms: 'পাতায় পানি ভেজা দাগ যা দ্রুত কালো হয়ে যায়।', solution: 'ম্যানকোজেব বা মেটালেক্সিল সাথে সাথে স্প্রে করুন।' },
        { name: 'কাটুই পোকা', symptoms: 'রাতে কচি গাছের গোড়া কেটে দেয়।', solution: 'ক্লোরপাইরিফস গাছের গোড়ায় স্প্রে করুন।' }
      ]
    }
  ]
};
