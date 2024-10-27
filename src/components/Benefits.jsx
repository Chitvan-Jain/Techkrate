// Benefits.jsx
import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

const Benefits = () => {
  return (
    <section className="bg-white py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Project Card */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-md relative">
          <h3 className="text-gray-700 font-semibold mb-4">Total Projects</h3>
          <p className="text-3xl font-bold text-gray-800">1475 <span className="text-green-500 text-lg">↑ 34%</span></p>

          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Finished</span>
              <span className="text-gray-600">10%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">In Progress</span>
              <span className="text-gray-600">13%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Rejected</span>
              <span className="text-gray-600">8%</span>
            </div>
          </div>

          {/* Embedded smaller card */}
          <div className="absolute bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg flex flex-col items-start">
            <span className="text-green-500 font-semibold text-sm">Total Projects</span>
            <p className="text-2xl font-bold text-gray-800">1951+</p>
            <p className="text-sm text-gray-500">Increased by 126 this month</p>
          </div>
        </div>

        {/* Right Section - Benefits List */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            Key Benefits of Our System for Your Business Efficiency
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our systems boost productivity, cut costs, and drive business growth.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Boosting Quality with Tech</h3>
                <p className="text-gray-600">
                  With advanced technology, we help you achieve top product quality. Discover how we can enhance your standards.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Optimization Production Process</h3>
                <p className="text-gray-600">
                  Boost factory efficiency and productivity with our innovative solutions. See how the latest technology can maximize your output.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <FaCheckCircle className="text-green-500 mt-1 mr-3" />
              <div>
                <h3 className="text-xl font-semibold text-gray-800">AI-Driven Production</h3>
                <p className="text-gray-600">
                  Leverage the power of AI to transform your manufacturing processes, achieving faster and more effective results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
