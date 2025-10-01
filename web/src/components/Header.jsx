"use client";
import React, { useState, useEffect } from "react";
import { User, LogOut } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/auth-context";
import { loggOutUser } from "@/handlers/handlers";
const Header = () => {
  const { isLoggedIn, handleIslogin } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: "About", href: "#about" },
    { name: "Download Notes", href: "/subjects" },
    { name: "My Courses", href: "#courses" },
  ];

  async function handleLoggOut() {
    await loggOutUser();
    handleIslogin();
  }

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-purple-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with Animation */}
          <div className="flex-shrink-0 group">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer">
              Ankit Doyla
            </h1>
            <div className="h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="relative text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-all duration-300 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <div>
              <button
                className={`flex items-center space-x-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  isLoggedIn
                    ? "bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white shadow-lg"
                    : "bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white shadow-lg"
                }`}
              >
                {isLoggedIn ? (
                  <button onClick={handleLoggOut}>
                    <LogOut size={16} />
                  </button>
                ) : (
                  <Link href={"/signin"}>
                    <User size={16} />
                  </Link>
                )}
                <span>
                  {isLoggedIn ? "Logout" : <Link href={"/signin"}>Login</Link>}
                </span>
              </button>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-purple-600 transition-colors duration-300 p-2"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 top-3" : "top-1"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 top-3 ${
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                ></span>
                <span
                  className={`absolute block w-6 h-0.5 bg-current transform transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 top-3" : "top-5"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden transition-all duration-500 overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-2 pt-2 pb-6 space-y-2 bg-white/95 backdrop-blur-md rounded-2xl mt-2 shadow-xl border border-purple-100">
            {menuItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block text-gray-700 hover:text-purple-600 hover:bg-purple-50 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => {
                setIsMenuOpen(false);
              }}
              className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                isLoggedIn
                  ? "bg-gradient-to-r from-red-500 to-pink-500 text-white"
                  : "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
              }`}
            >
              {isLoggedIn ? <LogOut size={16} /> : <User size={16} />}
              <span>{isLoggedIn ? "Logout" : "Login"}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
