// Services.jsx
import React from "react";
import { FaTools, FaCogs, FaBox, FaShieldAlt, FaChartLine, FaLightbulb } from "react-icons/fa";

const services = [
  {
    title: "Production and Assembly",
    description: "Details on production processes, assembly, capacity, and product types.",
    icon: <FaCogs />,
  },
  {
    title: "Custom Manufacturing",
    description: "Custom product creation with design and customization options.",
    icon: <FaBox />,
  },
  {
    title: "Quality Control",
    description: "Procedures and systems in place to ensure high product quality.",
    icon: <FaTools />,
  },
  {
    title: "Technology and Innovation",
    description: "Details on the latest manufacturing technologies and ongoing innovations.",
    icon: <FaLightbulb />,
  },
  {
    title: "Packaging and Logistics",
    description: "Packaging and logistics for shipping to customers and distributors.",
    icon: <FaBox />,
  },
  {
    title: "Consulting Market Research",
    description: "Services to help companies understand market needs and provide strategic advice.",
    icon: <FaChartLine />,
  },
];

const Services = () => {
  return (
    <section className="bg-teal-900 text-gray-100 py-16 px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-semibold">Efficient and Integrated Manufacturing Services</h2>
        <p className="text-lg text-gray-300 mt-2">Simplify operations with our efficient, quality-focused services.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-teal-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-start">
            <div className="text-3xl text-gray-200 mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
            <div className="mt-auto pt-4">
              <span className="text-gray-400 text-sm">→</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
