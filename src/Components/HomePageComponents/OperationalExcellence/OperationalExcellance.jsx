export default function OperationalExcellance() {
  const features = [
    { id: 1, text: "Bypass Training Time" },
    { id: 2, text: "Sidestep Poaching" },
    { id: 3, text: "Zero Recruitment Cost" },
    { id: 4, text: "No More Staff Meetings", bg: "bg-yellow-100" },
  ];
  return (
    <section className=" bg-gradient-to-br from-blue-50 to-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Column: Illustration */}
          <div className="md:w-1/2 w-full flex justify-center md:justify-start">
            <img
              src="/public/Assets/img.svg" // Replace with the correct path to your image
              alt="High Five Illustration"
              className="w-full h-auto"
            />
          </div>

          {/* Right Column: Text and Features */}
          <div className="md:w-1/2 w-full">
            {/* Heading */}
            <h2 className="text-4xl font-semibold text-gray-900 leading-tight mb-6">
              What else, if not Operational Excellence?
            </h2>
            <h3 className="text-3xl font-extrabold text-gray-900 mb-8">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                Hassle Free
              </span>
              , Massive Cost Savings
            </h3>

            {/* Feature Boxes Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature) => (
                <div
                  key={feature.id}
                  className={`p-6 rounded-lg shadow-md bg-white ${
                    feature.bg ? feature.bg : "bg-white "
                  } text-center`}
                >
                  <p className="text-lg font-medium text-gray-700">
                    {feature.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
