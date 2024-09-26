import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative h-[580px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          filter: "brightness(50%)",
          backgroundAttachment: "fixed",
        }}
      ></div>

      {/* Content */}
      <div
        className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center space-y-6"
        style={{ animation: "fadeInUp 1s ease-out forwards" }}
      >
        <h1 className="text-4xl sm:text-6xl md:text-5xl font-bold mb-4 tracking-tight drop-shadow-lg">
          Welcome to Our Digital Hub
        </h1>

        <p className="text-xl sm:text-2xl md:text-lg font-light mb-8">
          Empowering your digital journey with cutting-edge solutions
        </p>

        <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-10 rounded-full transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl shadow-lg flex items-center justify-center">
          Explore More
          <FaArrowRight className="ml-2" />
        </button>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-8 left-0 right-0 text-center text-white"
        style={{ animation: "scrollDown 1s infinite alternate" }}
      >
        <p className="text-sm opacity-70">Scroll Down</p>
        <svg
          className="w-8 h-8 mx-auto mt-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>

      {/* Inline keyframes */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scrollDown {
            from {
              transform: translateY(0);
            }
            to {
              transform: translateY(5px);
            }
          }
        `}
      </style>
    </section>
  );
}
