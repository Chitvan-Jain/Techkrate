// Pricing.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Pricing = () => {
  return (
    <section className="bg-gray-900 text-gray-100 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Tailored Plans for Your Manufacturing Scale</h2>
        <p className="text-lg text-gray-400 mt-2">Flexible pricing for any business size.</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Starter Plan */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Starter</h3>
          <p className="text-gray-400 mb-4">
            This package offers the basic features you need to get started.
          </p>
          <p className="text-4xl font-bold text-gray-100 mb-2">$39 <span className="text-lg font-normal">/ month</span></p>
          <button className="w-full mt-4 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-gray-900 transition">
            Get Started
          </button>

          <div className="border-t border-gray-700 mt-8 pt-4">
            <h4 className="text-lg font-semibold mb-3">Features</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> Production up to 10,000 units per month
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> 24/7 technical support
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> Access the production dashboard
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> Initial setup guide
              </li>
            </ul>
          </div>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
          <p className="text-gray-400 mb-4">
            This package provides full access to all premium features.
          </p>
          <p className="text-4xl font-bold text-gray-100 mb-2">$99 <span className="text-lg font-normal">/ month</span></p>
          <button className="w-full mt-4 py-2 border border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-gray-900 transition">
            Get Started
          </button>

          <div className="border-t border-gray-700 mt-8 pt-4">
            <h4 className="text-lg font-semibold mb-3">Features</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> Unlimited production units
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> Dedicated account manager
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> Tailored manufacturing solutions
              </li>
              <li className="flex items-center">
                <FaCheckCircle className="text-green-500 mr-2" /> Predictive production optimization
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Professional Plan */}
      <div className="max-w-2xl mx-auto bg-teal-900 p-6 rounded-lg mt-8 shadow-lg text-center">
        <h3 className="text-xl font-semibold text-gray-100">Professional</h3>
        <p className="text-gray-400 mt-2 mb-4">
          Designed for greater flexibility, this solution offers advanced tools for custom tailoring to your needs.
        </p>
        <button className="mt-4 py-2 px-6 bg-green-500 text-gray-900 font-semibold rounded-full hover:bg-green-400 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Pricing;
