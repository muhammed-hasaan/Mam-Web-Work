import { FaEnvelope, FaUsers, FaChartLine, FaHandshake } from "react-icons/fa";

export default function JoinCommunity() {
  return (
    <div className="w-full bg-gradient-to-r from-white to-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-[90%] sm:w-[85%] mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-[50%] mb-8 lg:mb-0 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-black">
              Join Our Insurance Community
            </h2>
            <p className="mt-3 text-base sm:text-lg md:text-xl text-black max-w-full sm:max-w-md md:max-w-3xl mx-auto lg:mx-0">
              Connect, learn, and grow with fellow insurance professionals. Stay
              updated on industry trends and exclusive opportunities.
            </p>
            <form className="mt-8 sm:flex justify-center lg:justify-start">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="shadow-md w-full sm:w-auto px-5 py-3 placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-black focus:black-white rounded-md sm:max-w-xs"
                placeholder="Enter your email"
              />
              <div className="mt-3 sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-purple-600 shadow-md flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Send
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-[50%]">
            <img
              className="w-full h-64 sm:h-72 lg:h-64 object-cover rounded-lg shadow-xl"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              alt="Insurance Community"
            />
          </div>
        </div>

        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-black mb-6 text-center lg:text-left">
            Community Benefits
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: FaUsers, text: "Invitation to our Events" },
              { icon: FaEnvelope, text: "Monthly Newsletter" },
              { icon: FaChartLine, text: "Insurance Sector Reports" },
              { icon: FaHandshake, text: "Business Networking" },
            ].map((item, index) => (
              <li
                key={index}
                className="col-span-1 flex flex-col text-center bg-white rounded-lg shadow divide-y divide-gray-200 transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex-1 flex flex-col p-8">
                  <item.icon className="w-16 h-16 mx-auto text-[#225699]" />
                  <h3 className="mt-6 text-gray-900 text-sm font-medium">
                    {item.text}
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
