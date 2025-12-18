import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export function CTABanner() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Icon badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6">
          <Sparkles className="w-4 h-4 text-white" />
          <span className="text-sm text-white">Ready to Transform?</span>
        </div>

        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Start Your Digital Transformation Today
        </h2>

        {/* Description */}
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
          Join hundreds of businesses that have elevated their operations with our cutting-edge solutions.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-50 transition-all hover:shadow-2xl hover:scale-105 flex items-center gap-2 font-semibold">
            Get Started
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all flex items-center gap-2 font-semibold">
            Schedule a Call
          </button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 pt-8 border-t border-white/20">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">24/7</div>
            <div className="text-sm text-blue-200">Support Available</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">100%</div>
            <div className="text-sm text-blue-200">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">Free</div>
            <div className="text-sm text-blue-200">Initial Consultation</div>
          </div>
        </div>
      </div>
    </section>
  );
}
