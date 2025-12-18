import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white text-lg font-bold">S</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">Sammunat</span>
            </div>
          </div>

          {/* Menu Items */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">
              Portfolio
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* CTA Button */}
          <button className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20">
            Get a Quote
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
