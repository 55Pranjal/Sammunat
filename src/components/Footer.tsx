import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Instagram, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-semibold text-white">Sammunat</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Building digital products and enterprise solutions for businesses worldwide. We transform ideas into powerful digital experiences.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-blue-400 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-blue-400 transition-colors">
                  Portfolio
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <a href="mailto:info@sammunat.com" className="hover:text-blue-400 transition-colors">
                  info@sammunat.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <a href="tel:+1234567890" className="hover:text-blue-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <span>
                  123 Business Avenue<br />
                  Tech District, CA 94025
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2024 Sammunat. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
