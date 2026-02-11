
import { GoogleGenAI } from "@google/genai";

// Standardized GeminiService following @google/genai guidelines
export class GeminiService {
  private static instance: GeminiService;

  private constructor() {}

  public static getInstance(): GeminiService {
    if (!GeminiService.instance) {
      GeminiService.instance = new GeminiService();
    }
    return GeminiService.instance;
  }

  // Create a new GoogleGenAI instance right before making an API call for maximum reliability
  private getClient() {
    return new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  public async getSecurityAnalysis(target: string, findings: string[]): Promise<string> {
    const ai = this.getClient();

    try {
      const response = await ai.models.generateContent({
        // Complex reasoning task like penetration testing analysis requires Gemini 3 Pro
        model: 'gemini-3-pro-preview',
        contents: `You are a RedVapt AI Penetration Testing Agent. Analyze these findings for target ${target}: ${findings.join(', ')}. Provide a concise security summary and prioritized next steps for exploitation testing.`,
        config: {
          systemInstruction: "You are an advanced offensive security AI. Keep your answers technical, ethical, and structured for professional penetration testers.",
          temperature: 0.7,
        }
      });
      return response.text || "No analysis available.";
    } catch (error) {
      console.error("Gemini API Error:", error);
      return "An error occurred during AI analysis.";
    }
  }

  public async chat(message: string): Promise<string> {
    const ai = this.getClient();

    try {
      const response = await ai.models.generateContent({
        // General text tasks with advanced reasoning for security guidance
        model: 'gemini-3-pro-preview',
        contents: message,
        config: {
          systemInstruction: "You are the RedVapt AI assistant. You help users navigate the platform, explain vulnerability findings, and provide remediation advice based on industry standards like OWASP. Use a professional, secure-coding oriented tone.",
          temperature: 0.8,
        }
      });
      return response.text || "I'm sorry, I couldn't process that request.";
    } catch (error) {
      console.error("Chat Error:", error);
      return "Error communicating with AI agent.";
    }
  }
}
