import "dotenv/config";
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    const prompt = `User said: "${message}"\nPlease respond in a helpful and concise way.`;
    const result = await model.generateContent(prompt);
    const text = result.response.text(); // <-- get actual reply text

    res.json({ text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to get response" });
  }
};
