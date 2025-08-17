import SendIcon from "@/icons/sendIcon";

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <p className="text-[#2D2D2D] font-medium text-lg sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
          Contact Me
        </p>
      </div>
      <div className="p-4 w-full lg:w-1/2">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
          />
        </div>
        <div className="mb-4">
          <div className="relative">
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-sm"
            />
            <button
              type="button"
              className="absolute bottom-2 right-2 bg-[#2D2D2D] text-white px-3 py-1 rounded hover:bg-blue-600 mb-2"
            >
              <p className="text-sm text-[#FFF]">Generate AI Message</p>
            </button>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-[#00BFA6] flex items-center gap-2 text-white px-6 py-2 rounded hover:bg-[#009e86] transition-colors"
          >
            <p className="text-sm">Send</p>
            <div>
              <SendIcon />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
