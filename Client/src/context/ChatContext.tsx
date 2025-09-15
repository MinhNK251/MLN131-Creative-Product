import { createContext, useContext, useState } from "react";
import { sendMessageApi } from "@/api/messages";

export interface ChatMessage {
  sender: "user" | "ai";
  text: string;
  createdAt: string;
}

interface ChatContextType {
  sendMessage: (text: string) => Promise<string>; // return AI message text
  messages: ChatMessage[];
  setMessages: React.Dispatch<React.SetStateAction<ChatMessage[]>>;
}

const ChatContext = createContext<ChatContextType | null>(null);

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);

  const sendMessage = async (text: string) => {
    const res = await sendMessageApi({ message: text });
    return res.message;
  };

  return (
    <ChatContext.Provider value={{ sendMessage, messages, setMessages }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used inside ChatProvider");
  return ctx;
};
