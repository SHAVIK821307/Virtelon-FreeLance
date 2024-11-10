import React, { useState } from 'react';
import heropng from "../assets/hero.png"


const Home = () => {
  

  return (
    <>
      
    
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-[-12]"
          style={{
            backgroundImage: `url(${heropng})`,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backgroundBlendMode: "overlay",
          }}
        />
      <div className="relative min-h-screen flex items-center">
        <div className="relative container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
            <span className="block">GET THE BEST</span>
            <span className="block">for your projects</span>
          </h1>
          <div className="max-w-3xl mx-auto space-y-6">
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              AT VIRTELON, WE ARE YOUR ONE-STOP SOLUTION FOR ALL TECHNOLOGICAL SERVICES
              REQUIRED FOR YOUR UPCOMING PROJECTS.
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              OUR COMPREHENSIVE SUITE OF SERVICES IS DESIGNED TO CATER TO EVERY ASPECT OF YOUR TECHNOLOGY NEEDS
              ENSURING YOUR PROJECTS SUCCEED FROM INCEPTION TO COMPLETION.
            </p>
            <button className="bg-[#40E0D0] hover:bg-[#3BC9BA] text-black font-semibold px-6 py-3 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105">
              DIVE IN
            </button>
          </div>
        </div>
      </div>
      </>
  );
};

export default Home;