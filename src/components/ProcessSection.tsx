import React from 'react';
import { Search, Lightbulb, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discover',
    description: 'We analyze your business needs, challenges, and goals to create a tailored strategy.',
    number: '01',
  },
  {
    icon: Lightbulb,
    title: 'Plan',
    description: 'Our team designs comprehensive solutions with detailed roadmaps and timelines.',
    number: '02',
  },
  {
    icon: Rocket,
    title: 'Deliver',
    description: 'We execute with precision, ensuring quality results and continuous support.',
    number: '03',
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-4">
            <span className="text-sm text-gray-700">Our Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600">
            A proven methodology that delivers results, from concept to completion.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection lines - desktop only */}
          <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-blue-300 to-blue-200 -z-10"></div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Card */}
                <div className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300">
                  {/* Number badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="font-bold">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-20 h-20 bg-white border-2 border-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 mt-4 shadow-sm">
                    <Icon className="w-10 h-10 text-blue-600" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
