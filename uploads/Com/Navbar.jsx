import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="logo text-white text-2xl font-bold">
          <a href="#">CarReserve</a>
        </div>
        <ul className="nav-links flex space-x-8">
          <li><Link to="#home" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="#cars" className="text-white hover:text-gray-300">Cars</Link></li>
          <li><Link to="#reservation" className="text-white hover:text-gray-300">Reservation</Link></li>
          <li><Link to="#about" className="text-white hover:text-gray-300">About Us</Link></li>
          <li><Link to="#contact" className="text-white hover:text-gray-300">Contact</Link></li>
        </ul>
        <div className="auth-buttons flex space-x-4">
          <Link to="/login" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">Login</Link>
          <Link to="/register" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
