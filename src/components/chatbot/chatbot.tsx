import { useEffect, useState } from "react";
import styles from "./Chatbot.module.css";
import Image from "next/image";
import botImage from "../../../public/images/bot.png";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleToggleChatbot = () => {
    setIsOpen((prevState) => !prevState);
    // Hide tooltip when chatbot is opened
    if (!isOpen) {
      setShowTooltip(false);
    }
  };

  // Show tooltip after 3 seconds instead of opening chatbot
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen) {
        setShowTooltip(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  // Hide tooltip after 5 seconds if chatbot hasn't been opened
  useEffect(() => {
    if (showTooltip) {
      const hideTimer = setTimeout(() => {
        setShowTooltip(false);
      }, 5000);

      return () => clearTimeout(hideTimer);
    }
  }, [showTooltip]);

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessages = [...messages, { text: userInput, sender: "user" }];
    setMessages(newMessages);
    setUserInput("");
    setLoading(true);

    try {
      // 🔥 Call your backend API
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: userInput }),
      });

      const data = await res.json();
      const botReply = data.answer || "Sorry, I couldn't generate an answer.";

      setMessages((prevMessages) => [
        ...prevMessages,
        { text: botReply, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching chatbot response:", error);
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "⚠️ Something went wrong. Please try again.", sender: "bot" },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.chatbotContainer}>
      {/* Floating Profile Icon with Tooltip */}
      <div className={styles.iconWrapper}>
        <div
          onClick={handleToggleChatbot}
          className={`${styles.floatingIcon} ${isOpen ? styles.iconOpen : ""}`}
        >
          {/* <img
            src="/images/bot.png"
            alt="AI Assistant"
            className={styles.chatProfileIcon}
          /> */}
          <Image
            src={botImage}
            alt="AI Assistant"
            className={styles.chatProfileIcon}
          />
        </div>

        {/* Tooltip */}
        {showTooltip && !isOpen && (
          <div className={styles.tooltip}>
            <div className={styles.tooltipContent}>Hi! How can I help you?</div>
            <div className={styles.tooltipArrow}></div>
          </div>
        )}
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>Hari&apos;s AI Assistant</span>
            <button
              onClick={handleToggleChatbot}
              className={styles.closeButton}
              aria-label="Close chat"
            >
              ×
            </button>
          </div>
          <div className={styles.messagesContainer}>
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`${styles.message} ${
                  msg.sender === "user" ? styles.userMessage : styles.botMessage
                }`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className={`${styles.message} ${styles.botMessage}`}>
                <div className={styles.typingIndicator}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.chatInputContainer}>
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className={styles.chatInput}
              placeholder="Type a message..."
              onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              autoFocus
            />
            <button
              onClick={handleSendMessage}
              className={styles.sendButton}
              disabled={!userInput.trim() || loading}
            >
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
