import { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import { useChatContext } from "@/context/ChatContext";
import ReactMarkdown from "react-markdown";

const ChatContainer = () => {
  const { sendMessage, messages } = useChatContext();
  const [input, setInput] = useState("");
  const messagesContainerRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    const content = input.trim();
    if (!content) return;

    setInput("");
    setIsLoading(true);

    try {
      await sendMessage(content);
    } catch (err: any) {
      toast.error(err.message || "Failed to send");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="h-[550px] relative bg-gray-900 rounded-2xl pt-6">
      {/* Chat area */}
      <div ref={messagesContainerRef}
        className="flex flex-col h-[calc(100%-80px)] overflow-y-scroll p-3 pb-6"
        onWheel={(e) => e.stopPropagation()}
        >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-end gap-2 mb-4 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            {msg.sender === "ai" && (
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lenin-Silhoutte_.svg" // replace with your AI icon path
                alt="AI"
                className="w-6 h-6 rounded-full self-end"
              />
            )}
            <div
              className={`p-2 max-w-[350px] md:text-sm font-light rounded-lg break-words text-white ${
                msg.sender === "user"
                  ? "bg-violet-500/30 rounded-br-none"
                  : "lg:max-w-[550px] bg-gray-700 rounded-bl-none"
              }`}
            >
              <ReactMarkdown>{msg.text}</ReactMarkdown>
            </div>
            {msg.sender === "user" && (
              <img
                src="/assets/image/user-avatar.png"
                alt="User"
                className="w-6 h-6 rounded-full self-end"
              />
            )}
            
          </div>
        ))}
        {isLoading && (
          <div className="flex items-end gap-2 mb-4 justify-start">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Lenin-Silhoutte_.svg"
              alt="AI"
              className="w-6 h-6 rounded-full self-end"
            />
            <div className="p-2 max-w-[250px] md:text-sm font-light rounded-lg break-words text-white bg-gray-700 rounded-bl-none">
              Đang suy nghĩ...
            </div>
          </div>
        )}
      </div>

      {/* Input area */}
      <form
        onSubmit={handleSendMessage}
        className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-3"
      >
        <div className="flex-1 flex items-center bg-gray-100/12 px-3 rounded-full">
          <input
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e)=> e.key === "Enter" ? handleSendMessage(e) : null}
            value={input}
            type="text"
            placeholder="Send a message"
            className="flex-1 text-sm p-3 border-none rounded-lg outline-none text-black placeholder-gray-400"
            disabled={isLoading}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          <img src="/assets/image/send_button.svg" alt="avatar" className="w-7 cursor-pointer" />
        </button>
      </form>
    </div>
  );
};

export default ChatContainer;
