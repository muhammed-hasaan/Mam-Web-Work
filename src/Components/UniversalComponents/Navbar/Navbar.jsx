import { FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import './Navbar.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = ["Home", "About", "Services", "Contact"];

  return (
    <nav
      className={` bg-white p-2 fixed left-0 top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            {/* Navbar Logo */}
            <img
              src="../public/Assets/ServinzLogo.png"
              width="200px"
              height="200px"
              alt=""
            />
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <ScrollLink
                  key={item}
                  to={item.toLowerCase()}
                  smooth={true}
                  duration={500}
                  className="text-lg text-gray-700 hover:bg-blue-500 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                  activeClass="bg-blue-500 text-white"
                  spy={true}
                  offset={-70}
                >
                  {item}
                </ScrollLink>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button
              className="text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white  font-bold py-2 px-4 rounded-full transition-colors duration-300"
              aria-label="Get an Instant Quote"
            >
              Get an Instant Quote
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <FaTimes className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBars className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item.toLowerCase()}
                smooth={true}
                duration={500}
                className="text-gray-700 bg-gray-100 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-300"
                activeClass="bg-blue-500 text-white"
                spy={true}
                offset={-70}
                onClick={toggleMenu}
              >
                {item}
              </ScrollLink>
            ))}
            <button
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 mt-4"
              aria-label="Get an Instant Quote"
            >
              Get an Instant Quote
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
