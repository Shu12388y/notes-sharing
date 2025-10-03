"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronDown, Sparkles, BookOpen, Download } from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div
            className={`text-center lg:text-left transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="mb-6">
              <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm font-medium mb-6 animate-pulse">
                <Sparkles className="w-4 h-4 mr-2" />
                Welcome to my digital space
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-gradient">
                  Ankit
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient animation-delay-500">
                  Doyla
                </span>
              </h1>

              <div className="relative">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl text-purple-200 mb-8 font-light">
                  Academic Head |
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent font-semibold">
                    {" "}
                    GATE CSIT
                  </span>
                </h2>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-400 rounded-full animate-ping opacity-20"></div>
              </div>
            </div>

            <p className="text-xl text-purple-100 mb-10 max-w-2xl leading-relaxed">
              Transforming dreams into reality through innovative teaching
              methodologies and comprehensive GATE preparation strategies.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                <Link prefetch href={"/subjects"}>
                  <span className="relative z-10 flex items-center justify-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Explore Notes
                  </span>
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

          {/* Right Content - Profile Photo */}
          <div
            className={`flex justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative group">
              {/* Animated Rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 animate-spin-slow opacity-20"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 animate-spin-reverse opacity-30"></div>

              {/* Profile Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl group-hover:scale-105 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-pink-400/20"></div>
                <img
                  src="./photo.jpeg"
                  alt="Ankit Doyla - Academic Head GATE CSIT"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating Achievement Badge */}
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-4 rounded-2xl shadow-2xl transform rotate-12 hover:rotate-0 transition-transform duration-300 animate-bounce-slow">
                <div className="text-center">
                  <div className="text-2xl font-bold">5000+</div>
                  <div className="text-xs font-medium">Students</div>
                </div>
              </div>

              {/* Floating Success Rate */}
              <div className="absolute -top-6 -left-6 bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-2xl shadow-2xl transform -rotate-12 hover:rotate-0 transition-transform duration-300 animate-bounce-slow animation-delay-1000">
                <div className="text-center">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs font-medium">Success</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
          onClick={scrollToNext}
        >
          <div className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300">
            <span className="text-sm font-medium mb-2">Scroll to explore</span>
            <ChevronDown className="w-6 h-6 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
