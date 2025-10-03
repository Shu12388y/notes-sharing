"use client";
import React, { useEffect, useRef, useState } from "react";
import { Award, Users, BookOpen, TrendingUp, Target, Zap } from "lucide-react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Award,
      value: "10+",
      label: "Years Experience",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Users,
      value: "5000+",
      label: "Students Taught",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: BookOpen,
      value: "50+",
      label: "Courses Created",
      color: "from-green-500 to-teal-500",
    },
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      color: "from-orange-500 to-red-500",
    },
  ];

  const features = [
    {
      icon: Target,
      title: "Focused Approach",
      description:
        "Targeted preparation strategies designed specifically for GATE success",
    },
    {
      icon: Zap,
      title: "Interactive Learning",
      description:
        "Modern teaching methods with hands-on practice and real-time feedback",
    },
    {
      icon: Users,
      title: "Community Support",
      description: "Join a thriving community of learners and achievers",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            About Me
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Empowering{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Dreams
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full -translate-y-16 translate-x-16"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  About Me
                </h3>

                <p>
                  I&apos;m Ankit Doyla, an educator and academic leader passionate
                  about guiding students to success in competitive exams. With
                  GATE AIR-159 and NET-JRF AIR-119, I bring expertise in
                  Computer Networks (CN), Theory of Computation (TOC), Compiler
                  Design (CD), and Operating Systems (OS). Over the past decade,
                  I&apos;ve taught and mentored lakhs of aspirants through roles at
                  ACE, BYJU&apos;S, PrepLadder, PW, and now as Acad Head CSIT & DSAI
                  at Unacademy GATE & ESE. My mission is simple—empower students
                  with clarity, confidence, and the right strategy to achieve
                  their dreams.
                </p>
              </div>
            </div>
          </div>

          {/* Features */}
          <div
            className={`transform transition-all duration-1000 delay-400 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-xl">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={`transform transition-all duration-1000 delay-600 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white rounded-3xl p-8 shadow-2xl border border-purple-100 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-50 to-pink-50 opacity-50"></div>

            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
                Achievement Highlights
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={stat.label}
                      className="text-center group hover:scale-110 transition-transform duration-300"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl mb-4 group-hover:rotate-12 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-600 font-medium">
                        {stat.label}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
