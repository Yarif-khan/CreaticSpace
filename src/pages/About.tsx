import React from 'react';
import { Award, Users, Target, Rocket } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">About CreaticSpace</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            We're a team of digital innovators passionate about transforming businesses through technology
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance efficiency, and create meaningful connections with their audience. We believe in combining creativity with technology to deliver exceptional results.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the leading digital transformation partner for businesses worldwide, known for our innovative solutions, exceptional service, and measurable impact on our clients' success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">200+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Award className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Excellence</h3>
              <p className="text-gray-600">Striving for the highest quality in everything we do</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Users className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Collaboration</h3>
              <p className="text-gray-600">Working together to achieve exceptional results</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Target className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-gray-600">Embracing new ideas and technologies</p>
            </div>
            <div className="text-center">
              <div className="text-blue-600 mb-4 flex justify-center">
                <Rocket className="h-12 w-12" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Growth</h3>
              <p className="text-gray-600">Continuously learning and improving</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}