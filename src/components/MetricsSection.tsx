import React from 'react';
import { Building2, FolderCheck, Globe2, Award } from 'lucide-react';

const metrics = [
  {
    icon: Building2,
    value: '150+',
    label: 'Companies Served',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: FolderCheck,
    value: '500+',
    label: 'Projects Completed',
    color: 'from-blue-600 to-blue-700',
  },
  {
    icon: Globe2,
    value: '25+',
    label: 'Countries Operated In',
    color: 'from-gray-700 to-gray-800',
  },
  {
    icon: Award,
    value: '10+',
    label: 'Years of Expertise',
    color: 'from-gray-800 to-gray-900',
  },
];

export function MetricsSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div
                key={index}
                className="relative p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                {/* Icon with gradient */}
                <div className={`w-12 h-12 bg-gradient-to-br ${metric.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>

                {/* Metric value */}
                <div className="text-4xl font-bold text-gray-900 mb-1">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="text-sm text-gray-600">
                  {metric.label}
                </div>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-50 to-transparent rounded-bl-3xl opacity-50"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
