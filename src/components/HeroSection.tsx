import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-8 overflow-hidden" id="home">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full">
              <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
              <span className="text-sm text-blue-700">Digital Solutions Partner</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Building Digital Products & Enterprise Solutions
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We provide CRM, ERP, Web Development, and Digital Services for businesses worldwide.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <button className="px-6 py-3.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-600/20 flex items-center gap-2">
                Explore Services
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="px-6 py-3.5 bg-white text-gray-700 border border-gray-200 rounded-lg hover:border-gray-300 transition-all hover:shadow-lg flex items-center gap-2">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 fill-current" />
                </div>
                Contact Us
              </button>
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-gray-900">200+</div>
                <div className="text-sm text-gray-600">Projects Delivered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-gray-900">98%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Abstract Shapes */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-[500px]">
              {/* Geometric shapes */}
              <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500 to-blue-700 rounded-3xl rotate-6 shadow-2xl shadow-blue-600/30"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl -rotate-6 shadow-2xl"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-52 h-52 bg-white rounded-2xl shadow-xl border border-gray-100"></div>
              
              {/* Floating elements */}
              <div className="absolute top-10 left-10 w-16 h-16 bg-blue-100 rounded-xl shadow-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              </div>
              <div className="absolute bottom-10 right-10 w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
