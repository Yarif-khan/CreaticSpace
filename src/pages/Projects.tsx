import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform Redesign",
    client: "Fashion Retailer",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&q=80&w=2070",
    description: "Complete redesign and development of an e-commerce platform, resulting in 150% increase in online sales.",
    tags: ["E-commerce", "UI/UX", "Web Development"]
  },
  {
    title: "Mobile Banking App",
    client: "Financial Institution",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1470",
    description: "Developed a secure and user-friendly mobile banking application with advanced features.",
    tags: ["Mobile App", "FinTech", "Security"]
  },
  {
    title: "Digital Marketing Campaign",
    client: "Lifestyle Brand",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1515",
    description: "Comprehensive digital marketing campaign that increased brand awareness by 200%.",
    tags: ["Digital Marketing", "Social Media", "Branding"]
  },
  {
    title: "Enterprise CRM Solution",
    client: "Healthcare Provider",
    image: "https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=1470",
    description: "Custom CRM system development for streamlined patient management and care.",
    tags: ["CRM", "Healthcare", "Software Development"]
  }
];

export default function Projects() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Projects</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Explore our portfolio of successful digital transformations and innovative solutions
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-blue-600 mb-4">{project.client}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-blue-600 hover:text-blue-800 font-semibold flex items-center">
                    View Case Study <ExternalLink className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Let's discuss how we can help transform your business with our digital expertise
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors">
            Get in Touch
          </button>
        </div>
      </section>
    </div>
  );
}