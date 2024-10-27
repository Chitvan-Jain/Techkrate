import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold">Prodmast</h3>
          <p className="mt-4">
            Our solutions make production faster and cheaper. Contact us for more information.
          </p>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold">Company</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Customers</a></li>
            <li><a href="#" className="hover:text-white">Newsroom</a></li>
            <li><a href="#" className="hover:text-white">Events</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold">Industries</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Precision Metalforming</a></li>
            <li><a href="#" className="hover:text-white">Industrial Manufacturing</a></li>
            <li><a href="#" className="hover:text-white">High Tech & Electronics</a></li>
            <li><a href="#" className="hover:text-white">Aerospace</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-lg font-bold">Products</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="hover:text-white">Manufacturing Execution System</a></li>
            <li><a href="#" className="hover:text-white">Enterprise Resource Planning</a></li>
            <li><a href="#" className="hover:text-white">Quality Management System</a></li>
            <li><a href="#" className="hover:text-white">Supply Chain Planning</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-12 text-center text-gray-500">
        <p>© 2024 Prodmast. All rights reserved</p>
        <div className="mt-4 space-x-6">
          <a href="#" className="hover:text-white">Terms & Conditions</a>
          <a href="#" className="hover:text-white">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
