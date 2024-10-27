const Hero = () => {
    return (
      <section className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-800">
          The Future of Manufacturing with <span className="text-green-700">Latest Technology</span>
        </h1>
        <p className="mt-4 text-gray-600">
          Expert tech to elevate your manufacturing. Let's take your business further.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="bg-green-700 text-white py-2 px-6 rounded-md hover:bg-green-800">Get Started</button>
          <button className="bg-gray-200 text-gray-700 py-2 px-6 rounded-md hover:bg-gray-300">Try Demo</button>
        </div>
        
        {/* Ratings */}
        <div className="mt-4 text-yellow-500 flex justify-center items-center">
          <span className="font-semibold text-lg">5.0</span>
          <span className="ml-2 text-gray-600">from 80+ reviews</span>
        </div>
        
        {/* Statistic Cards */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-3xl font-bold text-gray-800">100+</p>
            <p className="text-gray-600">Our Esteemed Clients and Partners</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-3xl font-bold text-gray-800">1951+</p>
            <p className="text-gray-600">Total Projects</p>
            <span className="text-green-500 text-sm">Increase of 126 this month</span>
          </div>
          <div className="p-6 bg-green-100 rounded-lg shadow-md">
            <p className="text-3xl font-bold text-gray-800">6+</p>
            <p className="text-gray-600">Years of Dedicated Service</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <p className="text-gray-800 font-semibold">Achieve Optimal Efficiency and Boost Productivity</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  