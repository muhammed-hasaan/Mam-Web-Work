export default function Insurance() {
  const people = [
    {
      name: "Zain Jeewanjee",
      role: "CEO & Co-Founder",
      imgUrl: "/public/Assets/SirZainImg.png",
    },
    {
      name: "Naeem Zamindar",
      role: "Co-Founder",
      imgUrl: "/public/Assets/SirNaeemImg.png",
    },
    {
      name: "Zainab Rehman",
      role: "Co-Founder",
      imgUrl: "/public/Assets/MamZainubImg.png",
    },
  ];

  return (
    <section className="py-16 ">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-12 w-[95%] xl:w-[85%]">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-xl lg:text-4xl font-extrabold mb-6 lg:mb-10 leading-tight text-gray-900 tracking-tight">
            <span className="block">
              For the{" "}
              <span className="relative">
                People
                <span className="absolute inset-x-0 -bottom-1 h-2 bg-blue-500 opacity-80"></span>
              </span>
            </span>
            <span className="block">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                in Insurance
              </span>
            </span>
          </h2>

          <ul className="space-y-4 md:space-y-6">
            {[
              "Insurance Agents",
              "Insurance Brokers",
              "Managing General Agencies",
              "Insurance Carriers",
            ].map((item, index) => (
              <li
                key={index}
                className="bg-white p-4 lg:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-transparent hover:border-blue-500 cursor-pointer"
              >
                <span className="text-lg lg:text-xl text-gray-800">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h2 className="text-xl lg:text-4xl font-extrabold mb-6 lg:mb-10 leading-tight text-gray-900 tracking-tight">
            <span className="block">
              By the{" "}
              <span className="relative">
                People
                <span className="absolute inset-x-0 -bottom-1 h-2 bg-blue-500 opacity-80"></span>
              </span>
            </span>
            <span className="block">
              <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
                in Insurance
              </span>
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            {people.map((person, index) => (
              <div
                key={index}
                className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center transform hover:-translate-y-2 "
              >
                <img
                  src={person.imgUrl}
                  alt={person.name}
                  className="w-24 h-24 md:w-28 md:h-28 mx-auto rounded-full mb-3 md:mb-4 border-4 border-gray-100 hover:border-blue-500 transition-all"
                />
                <h3 className="text-lg font-semibold text-gray-800">
                  {person.name}
                </h3>
                <p className="text-gray-500">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
