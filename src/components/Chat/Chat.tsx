import React, { useState } from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

interface Message {
  text: string;
  isSentByMe: boolean;
  timestamp: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");

  const handleSendMessage = async () => {
    if (input.trim()) {
      const newMessage: Message = {
        text: input,
        isSentByMe: true,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInput("");

      // Send the message to the backend or API
      const response = await fetch("/api/send-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await response.json();

      // Assuming the API returns a message from the AI
      const aiMessage: Message = {
        text: data.message,
        isSentByMe: false,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div style={{ flex: 1, overflowY: "auto", padding: "10px" }}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: msg.isSentByMe ? "flex-end" : "flex-start",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  backgroundColor: msg.isSentByMe ? "#07c" : "#eee",
                  color: msg.isSentByMe ? "#fff" : "#333",
                  padding: "10px 15px",
                  borderRadius: "15px",
                  maxWidth: "70%",
                  position: "relative",
                }}
              >
                {msg.text}
                <div
                  style={{
                    fontSize: "0.8em",
                    color: msg.isSentByMe ? "#ddd" : "#666",
                    marginTop: "5px",
                    textAlign: "right",
                  }}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            padding: "10px",
            borderTop: "1px solid #ddd",
            backgroundColor: "#fff",
          }}
        >
          <input
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => (e.key === "Enter" ? handleSendMessage() : null)}
          />
          <button
            style={{
              marginLeft: "10px",
              padding: "10px 20px",
              borderRadius: "5px",
              background: "#07c",
              color: "#fff",
              border: "none",
            }}
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
      <Footer />
    </DashboardLayout>
  );
};

export default Chat;
