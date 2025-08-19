"use client";
import { useState, useRef } from "react";
import SendIcon from "@/icons/sendIcon";
import toast from "react-hot-toast";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleGenerateMessage = () => {
    const generatedMessage = name.trim()
      ? `Hi, I am ${name}. I would like to connect with you!`
      : "Hi there, I would like to connect with you!";

    setMessage(generatedMessage);
    textareaRef.current?.focus();
    // toast.success("Message generated!");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !message) {
      toast.error("Please fill all fields before submitting.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Try again.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Error sending email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-[#2D2D2D] font-medium text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Contact Me
        </p>
      </div>
      <form className="p-4 w-full lg:w-1/2" onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <div className="relative">
            <textarea
              ref={textareaRef}
              placeholder="Message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
              required
            />
            <button
              type="button"
              onClick={handleGenerateMessage}
              className="absolute bottom-2 right-2 bg-[#2D2D2D] text-white px-3 py-1 rounded hover:bg-blue-600 mb-2 cursor-pointer"
            >
              <p className="text-sm text-[#FFF]">Generate AI Message</p>
            </button>
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={loading}
            className="bg-[#00BFA6] flex items-center gap-2 text-white px-6 py-2 rounded hover:bg-[#009e86] transition-colors cursor-pointer disabled:opacity-50"
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                <p className="text-sm">Sending...</p>
              </div>
            ) : (
              <>
                <p className="text-sm">Send</p>
                <SendIcon />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
