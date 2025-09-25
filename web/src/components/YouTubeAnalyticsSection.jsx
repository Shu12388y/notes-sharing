'use client'
import React, { useEffect, useRef, useState } from 'react';
import { Play, Clock, Eye, TrendingUp, BarChart3, Users, Award, Zap, Target } from 'lucide-react';

const YouTubeAnalyticsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    views: 0,
    duration: 0,
    impressions: 0,
    successRate: 0
  });
  const sectionRef = useRef(null);

  const targetValues = {
    views: 771702,
    duration: 11.45,
    impressions: 12867115,
    successRate: 99
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateNumbers();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateNumbers = () => {
    const duration = 3000; // 3 seconds for more dramatic effect
    const steps = 100;
    const stepDuration = duration / steps;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues({
        views: Math.floor(targetValues.views * easeOutCubic),
        duration: targetValues.duration * easeOutCubic,
        impressions: Math.floor(targetValues.impressions * easeOutCubic),
        successRate: Math.floor(targetValues.successRate * easeOutCubic)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues(targetValues);
      }
    }, stepDuration);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toLocaleString();
  };

  const formatDuration = (minutes) => {
    const mins = Math.floor(minutes);
    const secs = Math.floor((minutes - mins) * 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const CircularProgress = ({ percentage, size = 120, strokeWidth = 8, color = "from-blue-500 to-purple-600" }) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const strokeDasharray = `${circumference} ${circumference}`;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative" style={{ width: size, height: size }}>
        <svg
          className="transform -rotate-90"
          width={size}
          height={size}
        >
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke="url(#gradient)"
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={isVisible ? strokeDashoffset : circumference}
            strokeLinecap="round"
            className="transition-all duration-3000 ease-out"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" className="text-blue-500" stopColor="currentColor" />
              <stop offset="100%" className="text-purple-600" stopColor="currentColor" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{percentage}%</div>
            <div className="text-sm text-gray-600">Success</div>
          </div>
        </div>
      </div>
    );
  };

  const analyticsData = [
    {
      icon: Play,
      label: 'Total Views',
      value: animatedValues.views,
      displayValue: formatNumber(animatedValues.views),
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      percentage: '+28.5%',
      description: 'Organic reach across all videos'
    },
    {
      icon: Clock,
      label: 'Avg View Duration',
      value: animatedValues.duration,
      displayValue: formatDuration(animatedValues.duration),
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      percentage: '+15.3%',
      description: 'High engagement retention'
    },
    {
      icon: Eye,
      label: 'Total Impressions',
      value: animatedValues.impressions,
      displayValue: formatNumber(animatedValues.impressions),
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      percentage: '+35.7%',
      description: 'YouTube algorithm reach'
    }
  ];

  const achievementStats = [
    { icon: Award, label: 'Course Completion', value: '99%', color: 'text-yellow-600', bg: 'bg-yellow-50' },
    { icon: Users, label: 'Student Satisfaction', value: '98%', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: Target, label: 'GATE Success Rate', value: '95%', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Zap, label: 'Engagement Rate', value: '92%', color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Enhanced Background Decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-20 transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 rounded-full text-blue-700 text-sm font-medium mb-6 shadow-lg">
            <BarChart3 className="w-5 h-5 mr-2" />
            Portfolio Analytics Dashboard
          </div>
          <h2 className="text-6xl font-bold text-gray-900 mb-4">
            YouTube Analytics
          </h2>
          <h3 className="text-3xl font-semibold text-gray-700 mb-8">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              Computer Networks
            </span> – Playlist Performance
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
            Comprehensive analytics showcasing exceptional performance metrics and student success rates in Computer Networks education.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 mx-auto rounded-full"></div>
        </div>

        {/* Success Rate Highlight */}
        <div className={`text-center mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50 relative overflow-hidden max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 opacity-70"></div>
            <div className="relative z-10">
              <div className="flex justify-center mb-8">
                <CircularProgress percentage={animatedValues.successRate} size={160} strokeWidth={12} />
              </div>
              <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Exceptional Success Rate
              </h3>
              <p className="text-xl text-gray-700 leading-relaxed">
                Our Computer Networks course maintains an outstanding <strong>99% success rate</strong> with students consistently achieving their learning objectives and career goals.
              </p>
            </div>
          </div>
        </div>

        {/* Enhanced Analytics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {analyticsData.map((item, index) => {
            const IconComponent = item.icon;
            const progressPercentage = Math.min((item.value / Math.max(...analyticsData.map(d => d.value))) * 100, 100);
            
            return (
              <div
                key={item.label}
                className={`group bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-white/50 relative overflow-hidden ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ animationDelay: `${index * 300}ms` }}
              >
                {/* Enhanced Background Gradient */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${item.color} opacity-10 rounded-full -translate-y-20 translate-x-20 group-hover:scale-150 group-hover:opacity-20 transition-all duration-700`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Enhanced Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 ${item.bgColor} rounded-3xl mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <IconComponent className={`w-10 h-10 ${item.iconColor}`} />
                  </div>

                  {/* Enhanced Value Display */}
                  <div className="mb-6">
                    <div className={`text-5xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      {item.displayValue}
                    </div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-700 font-semibold text-lg">{item.label}</span>
                      <span className="text-green-600 text-sm font-bold bg-green-100 px-3 py-1 rounded-full shadow-sm">
                        {item.percentage}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>

                  {/* Enhanced Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-4 overflow-hidden">
                    <div 
                      className={`h-3 bg-gradient-to-r ${item.color} rounded-full transition-all duration-3000 ease-out shadow-sm`}
                      style={{ 
                        width: isVisible ? `${progressPercentage}%` : '0%' 
                      }}
                    ></div>
                  </div>

                  {/* Sparkle Effect */}
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Performance</span>
                    <span className="font-semibold">Excellent</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Achievement Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 transform transition-all duration-1000 delay-800 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          {achievementStats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={stat.label}
                className={`${stat.bg} rounded-2xl p-6 text-center hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Enhanced Performance Summary */}
        <div className={`transform transition-all duration-1000 delay-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 rounded-3xl p-1 shadow-2xl">
            <div className="bg-white rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-green-50 opacity-50"></div>
              
              <div className="relative z-10 text-center">
                <div className="flex items-center justify-center mb-8">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-3xl shadow-lg">
                    <TrendingUp className="w-12 h-12 text-white" />
                  </div>
                </div>
                
                <h3 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-6">
                  Outstanding Performance Metrics
                </h3>
                
                <p className="text-xl text-gray-700 max-w-5xl mx-auto leading-relaxed mb-10">
                  The Computer Networks playlist has achieved <strong>exceptional engagement</strong> with over <strong className="text-blue-600">771K views</strong> and 
                  an impressive average watch time of <strong className="text-green-600">11:45 minutes</strong>. With <strong className="text-purple-600">12.8M impressions</strong> 
                  and a <strong className="text-yellow-600">99% success rate</strong>, this content represents the gold standard in educational excellence.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg">
                    <Users className="w-10 h-10 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">97%</div>
                    <div className="text-gray-700 font-semibold">Audience Retention</div>
                    <div className="text-sm text-gray-600 mt-1">Above industry average</div>
                  </div>
                  <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-2xl shadow-lg">
                    <Award className="w-10 h-10 text-green-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-green-600 mb-2">4.9/5</div>
                    <div className="text-gray-700 font-semibold">Student Rating</div>
                    <div className="text-sm text-gray-600 mt-1">Consistently excellent</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-6 rounded-2xl shadow-lg">
                    <TrendingUp className="w-10 h-10 text-purple-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-purple-600 mb-2">42%</div>
                    <div className="text-gray-700 font-semibold">Monthly Growth</div>
                    <div className="text-sm text-gray-600 mt-1">Exponential increase</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeAnalyticsSection;