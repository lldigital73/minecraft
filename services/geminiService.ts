
import { GoogleGenAI, Type } from "@google/genai";
// Fix: Import LoreEntry from types to ensure consistency across the application
import { LoreEntry } from "../types";
import { GEMINI_API_KEY } from "../config";

export interface NewsUpdate {
  tag: string;
  title: string;
  description: string;
  time: string;
}

export class GeminiService {
  private getClient() {
    if (!GEMINI_API_KEY) {
      console.warn("GEMINI_API_KEY is not set. Returning fallback copy.");
      return null;
    }

    return new GoogleGenAI({ apiKey: GEMINI_API_KEY });
  }

  // Fix: Existing method for generating server news using gemini-3-flash-preview
  async generateServerNews(): Promise<NewsUpdate[]> {
    try {
      const client = this.getClient();
      if (!client) {
        throw new Error("Missing GEMINI_API_KEY");
      }

      const response = await client.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Vytvor 3 krátke aktuality pre Minecraft server 'Vanixidia'. Jedna o evente, jedna o ekonomike a jedna o novom dungeone. Odpovedaj v slovenčine.",
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.ARRAY,
            items: {
              type: Type.OBJECT,
              properties: {
                tag: { type: Type.STRING, description: "Napr. EVENT, NOVINKA, EKONOMIKA" },
                title: { type: Type.STRING },
                description: { type: Type.STRING },
                time: { type: Type.STRING, description: "Napr. 'Pred 2 hodinami' alebo 'Práve teraz'" }
              },
              required: ["tag", "title", "description", "time"]
            }
          }
        }
      });
      
      const text = response.text || "[]";
      return JSON.parse(text);
    } catch (error) {
      console.error("Failed to generate news:", error);
      return [
        { tag: "EVENT", title: "Turnaj v PvP", description: "Príď dnes o 20:00 do arény a vyhraj epické odmeny!", time: "Dnes" },
        { tag: "NOVINKA", title: "Nové dungeony", description: "V divočine sa objavili staroveké ruiny plné nebezpečenstva.", time: "Včera" }
      ];
    }
  }

  // Fix: Added generateLore method to resolve missing property error in LoreSection.tsx
  async generateLore(): Promise<LoreEntry> {
    try {
      const client = this.getClient();
      if (!client) {
        throw new Error("Missing GEMINI_API_KEY");
      }

      const response = await client.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: "Vytvor krátke, tajomné proroctvo alebo kúsok lore pre Minecraft server 'Vanixidia'. Malo by to znieť starobyle a mysticky. Odpovedaj v slovenčine.",
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Názov proroctva" },
              content: { type: Type.STRING, description: "Samotný text lore" }
            },
            required: ["title", "content"]
          }
        }
      });
      
      const text = response.text || "{}";
      return JSON.parse(text);
    } catch (error) {
      console.error("Failed to generate lore:", error);
      return {
        title: "Temné prebudenie",
        content: "Keď mesiac sčervenie a vlci stíchnu, hlboko v útrobách Vanixidie sa prebudí niečo, čo malo zostať navždy zabudnuté..."
      };
    }
  }
}

export const geminiService = new GeminiService();
