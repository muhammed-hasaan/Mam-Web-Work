export default function Cards() {
  const cards = [
    {
      title: "Our 40% Reduced  Overheads insurnce",
      content:
        "Connecting with nature rejuvenates the soul and brings inner peace. Take time to appreciate the beauty around you.",
    },
    {
      title: "On Touchpoint to Manage Entire Staff",
      content:
        "A positive mindset can transform challenges into opportunities. Cultivate optimism in your daily life.",
    },
    {
      title: "Specialized Insurance Professionals",
      content:
        "Never stop learning, for knowledge is the key to growth and success. Embrace new experiences and perspectives.",
    },
    {
      title: "100% Offloaded Staffing Burden",
      content:
        "Never stop learning, for knowledge is the key to growth and success. Embrace new experiences and perspectives.",
    },
  ];

  return (
    <div className=" w-[84%] container mx-auto px-4 py-8">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className=" flex flex-col justify-between h-[123px] bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="p-6">
              {/* <FaQuoteLeft className="text-3xl text-indigo-500 mb-4" /> */}
              <h3 className="text-center text-lg font-semibold text-gray-800 mb-3">
                {card.title}
              </h3>
              {/* <p className="text-gray-600">{card.content}</p> */}
            </div>
            {/* Gradient at the bottom */}
            <div className="bg-gradient-to-r bg-gradient-to-r from-blue-500 to-purple-600 h-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
