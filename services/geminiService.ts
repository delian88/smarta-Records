import { GoogleGenAI } from "@google/genai";
import { GeminiModel } from "../types";

const apiKey = process.env.API_KEY || '';

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey });

export const generateLyrics = async (topic: string, mood: string): Promise<string> => {
  if (!apiKey) {
    return "API Key is missing. Please configure the environment.";
  }

  try {
    const prompt = `You are a professional songwriter for Smarta Records. Write a short, catchy 4-bar chorus or hook about "${topic}" with a "${mood}" mood. Keep it rhythmic and modern. Output ONLY the lyrics.`;
    
    const response = await ai.models.generateContent({
      model: GeminiModel.FLASH,
      contents: prompt,
    });

    return response.text || "Could not generate lyrics at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "An error occurred while connecting to the creative studio.";
  }
};
