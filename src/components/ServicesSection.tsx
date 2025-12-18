import React from 'react';
import { Code2, Database, TrendingUp, Video, Boxes, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Code2,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies for optimal performance and user experience.',
  },
  {
    icon: Database,
    title: 'CRM/ERP Systems',
    description: 'Streamline your business operations with tailored CRM and ERP solutions that scale with your growth.',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to boost your online presence and drive measurable results.',
  },
  {
    icon: Video,
    title: 'Video Editing & Content Creation',
    description: 'Professional video production and content creation services that engage and convert your audience.',
  },
  {
    icon: Boxes,
    title: 'Enterprise Software Solutions',
    description: 'Robust enterprise applications designed to handle complex workflows and large-scale operations.',
  },
  {
    icon: Sparkles,
    title: 'AI & Automation',
    description: 'Leverage artificial intelligence and automation to optimize processes and gain competitive advantage.',
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white" id="services">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-lg text-gray-600">
            We offer end-to-end technology services to transform your business and drive digital innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-200 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-blue-600" strokeWidth={2} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="text-sm font-medium">Learn more</span>
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
