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

  // Social media links - update these with your actual profiles
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: "linkedin",
      url: "https://www.linkedin.com/in/hari-prasaanth-suresh-babu/",
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Let's connect professionally",
    },
    {
      name: "GitHub",
      icon: "github",
      url: "https://github.com/HariPrasaanth",
      color: "bg-gray-800 hover:bg-gray-900",
      description: "Check out my projects",
    },
    {
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/hari_prasaanth/#",
      color:
        "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600",
      description: "Follow my journey",
    },
  ];

  const handleGenerateMessage = () => {
    const generatedMessage = name.trim()
      ? `Hi, I am ${name}. I would like to connect with you!`
      : "Hi there, I would like to connect with you!";

    setMessage(generatedMessage);
    textareaRef.current?.focus();
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

  const getSocialIcon = (iconType: string) => {
    const iconClass = "w-6 h-6 fill-current";

    switch (iconType) {
      case "linkedin":
        return (
          <svg className={iconClass} viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        );
      case "github":
        return (
          <svg className={iconClass} viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        );
      case "instagram":
        return (
          <svg className={iconClass} viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-[#2D2D2D] font-medium text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Contact Me
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-12 lg:items-center lg:justify-center">
        {/* Contact Form */}
        <div className="w-full lg:w-1/2">
          <form className="p-4" onSubmit={handleSubmit}>
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

        {/* Social Media Section */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-4 h-full">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                Let&apos;s Connect!
              </h3>
              <p className="text-gray-600 text-sm">
                Find me on these platforms and let&apos;s stay in touch
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-102">
                    <div
                      className={`${social.color} p-3 rounded-full text-white transition-all duration-300 group-hover:scale-110`}
                    >
                      {getSocialIcon(social.icon)}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 group-hover:text-gray-900">
                        {social.name}
                      </h4>
                      <p className="text-sm text-gray-600 group-hover:text-gray-700">
                        {social.description}
                      </p>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <svg
                        className="w-5 h-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
