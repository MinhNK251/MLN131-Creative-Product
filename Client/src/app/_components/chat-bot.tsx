"use client";

import { useEffect } from "react";

export default function ChatBotIntegration() {
  useEffect(() => {
    // Tạo script để nhúng Dialogflow Messenger
    const script = document.createElement("script");
    script.src =
      "https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1";
    script.async = true;
    document.body.appendChild(script);

    // Thêm phần tử df-messenger vào DOM
    const dfMessenger = document.createElement("df-messenger");
    dfMessenger.setAttribute("intent", "Default Welcome Intent VN");
    dfMessenger.setAttribute("chat-title", "Hạt giống của sự văn minh 123");
    dfMessenger.setAttribute(
      "agent-id",
      "875137db-07d8-4043-88cf-7ee429e1bd00"
    );
    dfMessenger.setAttribute("language-code", "vi");
    document.body.appendChild(dfMessenger);

    // Cleanup: Xóa script và element khi component bị unmount

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(dfMessenger);
    };
  }, []);

  return null; // Không cần render gì thêm
}
