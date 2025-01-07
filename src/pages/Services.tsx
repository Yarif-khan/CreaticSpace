import React from 'react';
import { Monitor, Smartphone, TrendingUp, Users, MessageSquare, Code, ChevronRight } from 'lucide-react';

const services = [
  {
    icon: <TrendingUp />,
    title: "Digital Marketing",
    description: "Drive growth with data-driven marketing strategies",
    features: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Content Marketing",
      "Email Marketing",
      "PPC Advertising"
    ]
  },
  {
    icon: <Monitor />,
    title: "Web Development",
    description: "Custom websites that convert visitors into customers",
    features: [
      "Responsive Web Design",
      "E-commerce Solutions",
      "Content Management Systems",
      "Web Applications",
      "Performance Optimization"
    ]
  },
  {
    icon: <Smartphone />,
    title: "App Development",
    description: "Native and cross-platform mobile solutions",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Apps",
      "App Maintenance",
      "UI/UX Design"
    ]
  },
  {
    icon: <Code />,
    title: "Custom Software",
    description: "Tailored solutions for your business needs",
    features: [
      "Enterprise Software",
      "Cloud Solutions",
      "API Integration",
      "Legacy System Updates",
      "Automation Tools"
    ]
  },
  {
    icon: <Users />,
    title: "UI/UX Design",
    description: "Create exceptional user experiences",
    features: [
      "User Research",
      "Wireframing",
      "Prototyping",
      "Visual Design",
      "Usability Testing"
    ]
  },
  {
    icon: <MessageSquare />,
    title: "Digital Consulting",
    description: "Strategic guidance for digital transformation",
    features: [
      "Digital Strategy",
      "Technology Assessment",
      "Process Optimization",
      "Digital Transformation",
      "Innovation Consulting"
    ]
  }
];

export default function Services() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Services</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the digital age
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  {React.cloneElement(service.icon, { className: "h-12 w-12" })}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <ChevronRight className="h-5 w-5 text-blue-600 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">Understanding your needs and objectives</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">Developing a tailored solution</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="text-xl font-semibold mb-2">Implementation</h3>
              <p className="text-gray-600">Executing the plan with precision</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">4</div>
              <h3 className="text-xl font-semibold mb-2">Results</h3>
              <p className="text-gray-600">Measuring and optimizing success</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your digital goals
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Schedule a Consultation
          </button>
        </div>
      </section>
    </div>
  );
}