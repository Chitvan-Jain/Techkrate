import React from 'react';
import test123 from '../assets/images/test123.jpg';
const Integration = () => {
  return (
    <div>
      {/* First Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left md:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900">
              Empowering Top Companies with Seamless Integrations
            </h2>
            <p className="mt-4 text-gray-600">
              Experience seamless connections with our innovative solutions, designed to effortlessly integrate with your existing systems, enhance productivity, and drive your business towards greater success.
            </p>
            <button className="mt-8 px-6 py-3 bg-green-200 text-green-800 rounded-full font-semibold hover:bg-green-300">
              Work With Us
            </button>
          </div>
          <div className="mt-12 md:mt-0 md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-green-100 rounded-xl p-4">
                <img src={test123}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-teal-900 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-white">
            From Idea to Production in Days
          </h2>
          <p className="mt-4 text-gray-300">
            Accelerate your production with our technology. Reduce downtime and optimize costs. Get a special offer now!
          </p>
          <button className="mt-8 px-6 py-3 bg-green-200 text-green-800 rounded-full font-semibold hover:bg-green-300">
            Work With Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Integration;
