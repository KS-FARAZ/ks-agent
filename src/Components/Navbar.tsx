"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import logo from "../../public/Images/logo.png";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Features", href: "#how-to" },
    { name: "Pricing", href: "#pricing" },
    { name: "Download", href: "#contact" },
    // { name: "FAQ", href: "#faq" },
  ];

  const handleNavClick = (e, href, name) => {
    e.preventDefault();
    setActiveLink(name);
    setIsMobileMenuOpen(false);

    const targetElement = document.querySelector(href);
    if (targetElement) {
      const headerOffset = 100;
      const elementPosition = targetElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map((link) => ({
        name: link.name,
        element: document.querySelector(link.href),
      }));

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && section.element.offsetTop <= scrollPosition) {
          setActiveLink(section.name);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className=" z-50 sticky  mx-auto rounded-2xl bg-white/60 backdrop-blur-md border border-purple-200 shadow-lg">
      <div className="px-4 sm:px-6 lg:px-8 py-3">
        <nav className="flex items-center justify-between">
          <div
            className={`relative text-base font-medium transition-colors duration-200 pb-2 cursor-pointer
                  ${
                    true
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-600"
                  }
                `}
          >
            <Image
              src={logo}
              alt="Main QR Code"
              width={140}
              height={140}
              className="object-contain cursor-pointer"
              onClick={(e) => handleNavClick(e, "#home", "Home")}
            />
          </div>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-end space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className={`relative text-base font-medium transition-colors duration-200 pb-2 cursor-pointer
                  ${
                    activeLink === link.name
                      ? "text-purple-600"
                      : "text-gray-500 hover:text-purple-600"
                  }
                `}
              >
                {link.name}
                {activeLink === link.name && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600 transition-all duration-300"></span>
                )}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-500 hover:text-purple-600 transition-colors p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex items-center">
            <button className="flex items-center bg-[linear-gradient(180deg,#BB9DF3_0%,#8351E0_100%)] text-white rounded-full shadow-md px-6 py-3 space-x-3 hover:shadow-lg transition-shadow">
              <span className="text-white-800 font-semibold text-base">
                Start Now
              </span>
            </button>
          </div>
        </nav>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 bg-white/90 backdrop-blur-md border border-purple-200 rounded-2xl shadow-lg overflow-hidden">
          <div className="px-4 py-2 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href, link.name)}
                className={`block px-4 py-3 text-base font-medium transition-colors duration-200 rounded-lg cursor-pointer
                  ${
                    activeLink === link.name
                      ? "text-purple-600 bg-purple-50"
                      : "text-gray-500 hover:text-purple-600 hover:bg-purple-50"
                  }
                `}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
