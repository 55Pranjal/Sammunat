import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./fallback/ImageWithFallback";

const projects = [
  {
    title: "Enterprise CRM Platform",
    category: "CRM/ERP Systems",
    tagline: "Streamlined customer management for global retail chain",
    image:
      "https://images.unsplash.com/photo-1762341120156-4a8303067873?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB0ZWNobm9sb2d5fGVufDF8fHx8MTc2NTk5NTQ2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Digital Marketing Dashboard",
    category: "Digital Marketing",
    tagline: "Real-time analytics platform for marketing teams",
    image:
      "https://images.unsplash.com/photo-1723987251277-18fc0a1effd0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjYwMzA4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "AI-Powered Automation Suite",
    category: "AI & Automation",
    tagline: "Intelligent workflow automation for enterprise",
    image:
      "https://images.unsplash.com/photo-1759752394755-1241472b589d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbnRlcnByaXNlJTIwc29mdHdhcmUlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY2MDMwODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Corporate Web Platform",
    category: "Web Development",
    tagline: "Modern web presence for tech startup",
    image:
      "https://images.unsplash.com/photo-1707301280389-32a15e3fedf2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwYnVzaW5lc3MlMjB0ZWFtfGVufDF8fHx8MTc2NTk3ODY2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function PortfolioSection() {
  return (
    <section
      className="py-24 px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30"
      id="portfolio"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-4">
            <span className="text-sm text-blue-700">Our Work</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600">
            Discover how we've helped businesses transform their digital
            presence and operations.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-gray-100">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-white/90 backdrop-blur-sm rounded-lg">
                  <span className="text-xs font-medium text-gray-700">
                    {project.category}
                  </span>
                </div>

                {/* View icon */}
                <div className="absolute bottom-4 right-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.tagline}</p>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-white text-gray-700 border border-gray-200 rounded-lg hover:border-blue-200 hover:shadow-lg transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
