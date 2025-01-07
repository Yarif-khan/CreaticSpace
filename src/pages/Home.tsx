import React from 'react';
import { Monitor, Smartphone, TrendingUp, Users, ChevronRight, MessageSquare, Code } from 'lucide-react';

function ServiceCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-blue-600 mb-4">
        {React.cloneElement(icon, { className: "h-12 w-12" })}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Digital Presence
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              We craft innovative digital solutions that help businesses grow, engage, and succeed in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center">
                Get Free Consultation <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Digital Solutions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive digital services to help your business thrive in the digital age
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<TrendingUp />}
              title="Digital Marketing"
              description="Strategic marketing solutions to boost your online presence and drive growth"
            />
            <ServiceCard 
              icon={<Monitor />}
              title="Web Development"
              description="Custom websites that engage visitors and deliver results"
            />
            <ServiceCard 
              icon={<Smartphone />}
              title="App Development"
              description="Native and cross-platform mobile applications for modern businesses"
            />
            <ServiceCard 
              icon={<Code />}
              title="Custom Software"
              description="Tailored software solutions to streamline your business operations"
            />
            <ServiceCard 
              icon={<Users />}
              title="UI/UX Design"
              description="User-centered design that creates meaningful experiences"
            />
            <ServiceCard 
              icon={<MessageSquare />}
              title="Digital Consulting"
              description="Expert guidance to navigate your digital transformation"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Start Your Digital Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve its digital goals
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Schedule a Call
          </button>
        </div>
      </section>
    </>
  );
}