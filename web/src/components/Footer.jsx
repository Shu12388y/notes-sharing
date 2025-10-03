import React from "react";
import {
  Linkedin,
  MessageCircle,
  Send,
  Instagram,
  Mail,
  Phone,
  MapPin,
  Heart,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/ankit-doyla-45178916b/",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-500",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      url: "https://whatsapp.com/channel/0029Vagk1RMBlHphNYcT882w",
      color: "hover:text-green-400",
      bgColor: "hover:bg-green-500",
    },
    {
      name: "Telegram",
      icon: Send,
      url: "https://t.me/+4-L-Ay8sBlQ5YTM1",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://www.instagram.com/ankitdoyla/",
      color: "hover:text-pink-400",
      bgColor: "hover:bg-pink-500",
    },
  ];

  const quickLinks = [
    { name: "About Me", href: "#about" },
    { name: "My Courses", href: "#courses" },
    { name: "Download Notes", href: "#notes" },
    { name: "Success Stories", href: "#testimonials" },
  ];

  

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-purple-900/20 to-pink-900/20"></div>
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Follow Me Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Follow Me
            </span>
          </h2>
          <p className="text-purple-200 text-lg mb-8">
            Stay connected for the latest updates and educational content
          </p>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative flex flex-col items-center transition-all duration-300 transform hover:scale-110 ${social.color}`}
                  aria-label={social.name}
                >
                  <div
                    className={`relative bg-white/10 backdrop-blur-md p-4 rounded-2xl mb-3 group-hover:bg-white/20 transition-all duration-300 border border-white/20 ${social.bgColor} group-hover:border-white/40`}
                  >
                    <IconComponent
                      size={28}
                      className="transition-transform duration-300 group-hover:scale-110"
                    />

                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"></div>
                  </div>
                  <span className="text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ankit Doyla
            </h3>
            <p className="text-purple-200 mb-6 leading-relaxed">
              Dedicated to transforming dreams into reality through innovative
              teaching methodologies and comprehensive GATE preparation
              strategies. Join thousands of successful students on their journey
              to excellence.
            </p>

            {/* Newsletter Signup */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-purple-200 hover:text-white transition-colors duration-300 hover:translate-x-2 transform"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-purple-200 flex items-center justify-center md:justify-start">
                &copy; 2025 Ankit Doyla. Made with
                <Heart className="w-4 h-4 mx-1 text-red-400 animate-pulse" />
                for students
              </p>
              <p className="text-purple-300 text-sm mt-1">
                Empowering students to achieve excellence in GATE and beyond.
              </p>
            </div>

            <div className="flex space-x-6 text-sm text-purple-200">
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
