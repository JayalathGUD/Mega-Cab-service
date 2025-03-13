import React from 'react';

const Hero = () => {
  return (
    <section 
      className="relative bg-blue-500 text-white w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: 'url(/car_1.jpg)' }}
    >
      <div className="hero-content text-center bg-black bg-opacity-50 p-6 rounded-lg">
        <h1 className="text-4xl font-bold mb-4">Find Your Perfect Car</h1>
        <p className="text-lg mb-6">Book a car for your next adventure. Affordable, reliable, and ready to go.</p>
        <a href="#reservation" className="bg-yellow-500 text-blue-500 py-3 px-6 rounded-lg text-xl font-semibold hover:bg-yellow-400 transition duration-300">Book Now</a>
      </div>
    </section>
  );
};

export default Hero;
