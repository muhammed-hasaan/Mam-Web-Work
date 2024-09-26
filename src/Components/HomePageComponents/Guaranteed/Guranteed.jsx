export default function Guranteed() {
  return (
    <section className="relative  py-16 px-8 md:px-20 lg:px-36">
      {/* Subtle Background Illustration */}

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header Section */}
        <div className="text-center md:text-left mb-12">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
            Guaranteed
          </h2>
          <span className="text-4xl bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
            Value Addition
          </span>
        </div>

        {/* Content Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Text Block */}
          <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-2 hover:rotate-1 transition-all duration-500">
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">1</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Servinz is the one-stop staffing solution for insurance agents,
              brokers, and carriers. Our well-rounded team of professionals
              specializes in executing insurance industry-specific operations,
              while driving new sales and prospects. With a focus on quality,
              talent retention, and 24/7 accessibility, Servinz ensures
              exceptional service delivery and empowers agents to excel in a
              competitive industry.
            </p>
          </div>

          {/* Right Text Block */}
          <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-2 hover:-rotate-1 transition-all duration-500">
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
              <span className="text-white text-2xl font-bold">2</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Servinz provides a flexible staffing approach that caters to your
              specific needs. Choose our instant staffing solutions with
              pre-trained professionals or opt for a customized approach where
              we delve into your company operations to tailor staff members to
              your software and working models. No matter which option you
              decide, Servinz is dedicated to delivering exceptional service and
              optimal performance.
            </p>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="mt-12 text-center">
          <button className="relative bg-blue-600 hover:bg-purple-600 text-white font-semibold py-4 px-8 rounded-full shadow-lg transform hover:translate-y-1 transition-all duration-300">
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-0 transition-opacity duration-500 hover:opacity-100"></span>
            <span className="relative z-10">Learn More</span>
          </button>
        </div>
      </div>
    </section>
  );
}
