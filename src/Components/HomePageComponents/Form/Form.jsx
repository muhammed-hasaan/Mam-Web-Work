import {
  FaUserTie,
  FaHeadset,
  FaStamp,
  FaCalendarAlt,
  FaCalculator,
} from "react-icons/fa";

export default function Form() {
  const roles = [
    {
      title: "Sales Support Associates",
      icon: FaUserTie,
      description: "Assist with sales inquiries and customer support",
    },
    {
      title: "Employee Concierge",
      icon: FaHeadset,
      description: "Provide personalized assistance to employees",
    },
    {
      title: "Renewal Masters",
      icon: FaStamp,
      description: "Manage and process renewal applications",
    },
    {
      title: "Open Enrollment Managers",
      icon: FaCalendarAlt,
      description: "Oversee open enrollment periods and processes",
    },
    {
      title: "Accounting Associates",
      icon: FaCalculator,
      description: "Handle financial tasks and bookkeeping",
    },
  ];

  return (
    <div className="flex flex-col text-center px-4">
      <div className="bg-gradient-to-tr from-blue-50 to-gray-50 pt-5">
        <h1 className="text-2xl md:text-3xl ">
          Servinz for a <b>Stress-Free</b> <br /> Insurance Business:
          Streamlined
        </h1>
      </div>

      <div className=" md:mt-0 flex flex-col md:flex-row text-left items-center justify-center  bg-gradient-to-br from-blue-50 to-gray-50 pt-6 pb-16 md:p-5">
        <div className="w-full md:w-1/2 lg:w-[39%] p-6 md:p-8 rounded-lg shadow-lg mb-8 md:mb-0 md:mr-8 bg-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Request a{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-transparent bg-clip-text">
              Call
            </span>
          </h2>
          <form className="space-y-4 pt-1">
            <div>
              <label htmlFor="name" className="block mb-1 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full  px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 font-medium">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your phone number"
                autoComplete="tel"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 px-4 rounded-md transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full md:w-1/2 lg:w-[42.3%]">
          <div className="mt-8 space-y-4">
            {roles.map((role) => (
              <div
                key={role.title}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow"
              >
                <role.icon className="text-3xl text-[#225699]" />
                <div>
                  <h3 className="font-semibold">{role.title}</h3>
                  <p className="text-sm text-gray-600">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
