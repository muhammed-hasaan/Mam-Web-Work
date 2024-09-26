import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-2xl font-bold">Servinz.</h3>
            <p className="text-sm">Protecting what matters most to you.</p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="hover:text-blue-300 transition-colors duration-300"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:underline focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Terms and Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h4 className="text-lg font-semibold">Contact Information</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MdPhone className="mr-2" /> <span>+1 (123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <MdEmail className="mr-2" /> <span>info@insuranceco.com</span>
              </li>
              <li className="flex items-center">
                <MdLocationOn className="mr-2" />{" "}
                <span>123 Insurance St, City, State 12345</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 animate-fade-in">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-sm">
              Stay updated with our latest news and offers.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 text-gray-700 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                required
              />
              <button
                type="submit"
                className="w-full px-3 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-400 text-sm text-center animate-fade-in">
          <p>&copy; 2023 Insurance Co. All rights reserved.</p>
          <p className="mt-2">
            Disclaimer: This website is for informational purposes only. Please
            consult with a licensed insurance agent for specific advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
