import React from 'react';
import heroImage from '../../../../assets/heroImage.png'; 
import { useNavigate } from 'react-router-dom';
const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <div className="relative bg-[#ffffff]  text-black min-h-[86vh] flex items-center">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#ffffff] rounded-full mix-blend-overlay"></div>
        <div className="absolute bottom-10 right-20 w-40 h-40 bg-[#ffffff]  rounded-full mix-blend-overlay"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Text content - left side */}
          <div className="lg:w-1/2 lg:pr-10 lg:text-left text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Empowering Tomorrow’s</span>
              <span className="text-[#780404]"> Innovators with IIDI 
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-black-300 max-w-2xl mb-8 lg:mx-0 mx-auto">
            Build your career with hands-on training and industry-recognized certification in Data Science, Analytics,
            and Business Intelligence. 
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">              
              <button className="px-8 py-3 bg-[#911414] text-bulky font-semibold rounded hover:bg-[#8a1a2a] transition-all duration-300 shadow-lg hover:shadow-xl z-40" onClick={() => navigate('/course')}>
                Get Started
              </button>
             
              <button className="px-8 py-3 border-2 border-red-900 text-red-900 font-semibold rounded hover:bg-white hover:text-black transition-all duration-300 z-40" onClick={()=> navigate('/about')}>
                Learn More
              </button>
            </div>
          </div>
          
          {/* Image - right side */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="relative w-full h-[50vh] lg:h-[60vh] rounded-lg overflow-hidden">
              <img
                src={heroImage}
                alt="Data Science Visualization"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Advanced Analytics</h3>
                <p className="text-gray-200">Transforming raw data into actionable intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;