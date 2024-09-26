import { FaQuoteLeft } from "react-icons/fa";
import { useEffect, useRef } from "react";

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "I've been with this insurance company for years, and their service is unparalleled. They've always been there when I needed them most.",
      author: "John Doe",
      position: "Loyal Customer",
    },
    {
      id: 2,
      text: "The peace of mind I get from their comprehensive coverage is priceless. Highly recommend their services!",
      author: "Jane Smith",
      position: "Business Owner",
    },
    {
      id: 3,
      text: "Their quick response during my emergency situation was impressive. They truly care about their clients.",
      author: "Mike Johnson",
      position: "Family Man",
    },
    {
      id: 4,
      text: "Their customer service is excellent and very responsive to inquiries and claims.",
      author: "Emily Wilson",
      position: "Entrepreneur",
    },
    {
      id: 5,
      text: "Affordable insurance plans with great coverage for businesses.",
      author: "Oliver Harris",
      position: "Startup Founder",
    },
  ];

  const containerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    let scrollAmount = 0;
    const scrollStep = 300; // Adjust this value for the scroll step
    const scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollStep;
        if (scrollAmount >= scrollContainer.scrollWidth) {
          scrollAmount = 0; // Reset scroll
        }
        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    }, 2000); // Scroll every 2 seconds

    return () => clearInterval(scrollInterval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="bg-gradient-to-br from-blue-50 to-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4 w-full md:w-[100%]">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">
          What Our{" "}
          <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Clients
          </span>
          <span className="ml-2">Say</span>
        </h2>
        <div
          className="overflow-hidden w-full"
          ref={containerRef}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          <div className="flex space-x-6 md:space-x-8 w-max">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md flex-shrink-0 w-72 md:w-80"
              >
                <FaQuoteLeft className="text-3xl md:text-4xl text-blue-500 mb-4" />
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <div className="flex items-center">
                  <img
                    src={`https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80`}
                    alt={testimonial.author}
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full mr-3"
                  />
                  <div>
                    <h4 className="text-base md:text-lg font-semibold">
                      {testimonial.author}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
