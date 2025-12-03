import { GoogleGenAI, Type, Schema } from "@google/genai";
import { Language } from "../types";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

const fileToGenerativePart = async (file: File): Promise<{ inlineData: { data: string; mimeType: string } }> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const base64Data = base64String.split(',')[1];
      resolve({
        inlineData: {
          data: base64Data,
          mimeType: file.type,
        },
      });
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const analyzeCropDisease = async (imageFile: File, language: Language) => {
  if (!apiKey) throw new Error("API Key missing");

  const imagePart = await fileToGenerativePart(imageFile);

  const prompt = language === 'bn' 
    ? "একজন কৃষি বিশেষজ্ঞ হিসেবে এই ফসলের ছবিটি বিশ্লেষণ করুন। কোনো রোগ বা পোকা শনাক্ত করুন। রোগের নাম, কারণ, প্রতিকার এবং প্রতিরোধের উপায় বিস্তারিত বাংলায় লিখুন। আউটপুট অবশ্যই JSON ফরম্যাটে দিন।"
    : "Analyze this crop image as an agricultural expert. Identify any disease or pests. Provide disease name, confidence level, description, treatment steps, and preventative measures. Return ONLY JSON.";

  // Define schema for structured output
  const responseSchema: Schema = {
    type: Type.OBJECT,
    properties: {
      diseaseName: { type: Type.STRING },
      confidence: { type: Type.NUMBER, description: "Confidence score 0-100" },
      description: { type: Type.STRING },
      treatment: { type: Type.ARRAY, items: { type: Type.STRING } },
      preventative: { type: Type.ARRAY, items: { type: Type.STRING } },
    },
    required: ["diseaseName", "confidence", "description", "treatment", "preventative"],
  };

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: {
        role: 'user',
        parts: [imagePart, { text: prompt }]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: responseSchema,
      }
    });

    const jsonText = response.text;
    if (!jsonText) throw new Error("No response text");
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Error analyzing crop:", error);
    throw error;
  }
};

export const getFarmingAdvice = async (query: string, language: Language) => {
  if (!apiKey) throw new Error("API Key missing");

  const systemPrompt = language === 'bn'
    ? "আপনি বাংলাদেশের কৃষকদের জন্য একজন অভিজ্ঞ কৃষি উপদেষ্টা 'চাষাবাদ'। সহজ বাংলায় উত্তর দিন। সারের পরিমাণ, সেচ এবং আবহাওয়া সম্পর্কিত প্রশ্নের উত্তর দিন।"
    : "You are 'Chasabbad', an expert agricultural advisor for Bangladeshi farmers. Provide concise, practical advice in English focusing on local crops (Paddy, Jute, Potato).";

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: [
        { role: 'user', parts: [{ text: query }] }
      ],
      config: {
        systemInstruction: systemPrompt,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error getting advice:", error);
    throw error;
  }
};
