import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Rocket } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-white" />
            <span className="text-2xl font-bold text-white">CreaticSpace</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link to="/services" className="text-white hover:text-blue-200">Services</Link>
            <Link to="/projects" className="text-white hover:text-blue-200">Projects</Link>
            <Link to="/about" className="text-white hover:text-blue-200">About</Link>
          </div>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-50 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      <Outlet />

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Rocket className="h-6 w-6" />
                <span className="text-xl font-bold">CreaticSpace</span>
              </div>
              <p className="text-gray-400">
                Transforming businesses through innovative digital solutions
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Digital Marketing</li>
                <li>Web Development</li>
                <li>App Development</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>About Us</li>
                <li>Our Work</li>
                <li>Careers</li>
                <li>Contact</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2 text-gray-400">
                <li>hello@creaticspace.com</li>
                <li>+1 (555) 123-4567</li>
                <li>123 Digital Avenue</li>
                <li>San Francisco, CA 94105</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 CreaticSpace. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}