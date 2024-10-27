import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-green-700">
        <Link to="/">Prodmast</Link>
      </h1>
      
      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700">
        <li><Link to="/" className="hover:text-green-600">Home</Link></li>
        <li><Link to="/about" className="hover:text-green-600">About</Link></li>
        <li><Link to="/services" className="hover:text-green-600">Services</Link></li>
        <li><Link to="/contact" className="hover:text-green-600">Contact</Link></li>
      </ul>

      {/* Sign Up Button */}
      <Link to="/signup" className="bg-green-700 text-white py-2 px-4 rounded-md hover:bg-green-800">
        Sign Up
      </Link>
    </nav>
  );
};

export default Navbar;
