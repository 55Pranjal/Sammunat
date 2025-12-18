import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechVision Inc.',
    quote: 'Sammunat transformed our entire digital infrastructure. Their CRM solution increased our productivity by 40% and the team was incredibly professional throughout the process.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'CTO',
    company: 'Global Enterprises',
    quote: 'Working with Sammunat was a game-changer for our company. They delivered an enterprise solution that exceeded our expectations and provided excellent ongoing support.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'Digital Dynamics',
    quote: 'The digital marketing strategies and automation tools developed by Sammunat have significantly improved our ROI. Highly recommended for any business looking to scale.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 border border-gray-200 rounded-full mb-4">
            <span className="text-sm text-gray-700">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600">
            Don't just take our word for it - hear from the businesses we've helped succeed.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-blue-200 hover:shadow-xl transition-all duration-300"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center opacity-50">
                <Quote className="w-6 h-6 text-blue-600" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                {/* Avatar placeholder */}
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-semibold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
