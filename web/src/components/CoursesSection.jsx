'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Play, Clock, Users, Star, ArrowRight } from 'lucide-react';

const CoursesSection = () => {
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

  const courses = [
      {
      id: 2,
      title: "Computer Networks",
      description: "Deep dive into DSA concepts with practical implementations, problem-solving techniques, and competitive programming strategies.",
      videoId: "dQw4w9WgXcQ",
      rating: 5,
      thumbnail: "https://i.ytimg.com/vi/3SbtNuK5YZ8/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpzydybK4gg2BSsw3SVWsUf0wE7Q",
      link:"https://www.youtube.com/playlist?list=PLOG_8OlGMp73hMyn-WX1M2Q4ON98DmaRq"
    },
    {
      id: 1,
      title: "Theory of Computation",
      description: "Comprehensive preparation course covering all GATE CSE topics with detailed explanations, practice problems, and mock tests designed for success.",
      videoId: "dQw4w9WgXcQ",
      rating: 5,
      thumbnail: "https://i.ytimg.com/vi/jViPmwfhFnk/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBdpR_CViW_K8DCFld2eik0IesOVw",
      link:"https://www.youtube.com/playlist?list=PLOG_8OlGMp71Bw-PCIVpP5kS2iJtvxZBz"
    }
  ];

  return (
    <section id="courses" ref={sectionRef} className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white/80 text-sm font-medium mb-4">
            <Play className="w-4 h-4 mr-2" />
            My Courses
          </div>
          <h2 className="text-5xl font-bold text-white mb-6">
            Transform Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Discover comprehensive courses designed to help you excel in GATE and build a strong foundation in computer science.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full mt-6"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`group bg-white/10 backdrop-blur-md rounded-3xl overflow-hidden hover:bg-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/20 shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Video Thumbnail */}
              <div className="relative overflow-hidden">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-md rounded-full p-6 group-hover:scale-110 transition-all duration-300 cursor-pointer hover:bg-white/30">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>

                 
                </div>
              </div>

              {/* Course Content */}
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-white/80 text-sm">({course.rating})</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-400 transition-colors duration-300">
                  {course.title}
                </h3>
                
                <p className="text-white/80 mb-6 leading-relaxed">{course.description}</p>
                
            

                {/* Features */}
               

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a href={course.link} target='_blank'>
                  <button className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-3 px-6 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                    <span>Watch Now</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transform transition-all duration-1000 delay-400 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">              
              Join Lakhs of successful students who have achieved their GATE dreams with our comprehensive courses.
            </p>
            <a href='https://unacademy.com/goal/gate-csit-dsai-placements/NVLIA/subscribe?plan_type=plus&referral_code=ADRULE' target='_blank' className="bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
              View All Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;