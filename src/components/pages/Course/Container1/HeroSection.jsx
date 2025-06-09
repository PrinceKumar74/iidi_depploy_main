import React from 'react';
import { ArrowRight } from 'lucide-react';
import coursePageHeroGirl from '../../../../assets/course/coursePageHeroGirl.jpg';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative bg-gradient-to-r from-red-200 to-[#ffffff]/90  text-black overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/path/to/tech-pattern.svg')] bg-repeat"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold bg-[#b42638] rounded-full">
                Best Industrial Training Company
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="block">Your Career</span>
              <span className="text-[#b42638]">Launchpad in Delhi/NCR</span>
            </h1>
            
            <p className="text-lg md:text-xl text-black-300 mb-8 max-w-lg">
              Your one-stop solution for the first step towards an exciting tech career. 
              Join our industry-ready programs designed to fast-track your first job.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center px-8 py-4 bg-[#b42638] hover:bg-[#8a1a2a] text-white font-semibold rounded-lg transition-all duration-300 group" onClick={()=> navigate('/contact')}>
                Register Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-black hover:bg-white/10 text-black font-semibold rounded-lg transition-all duration-300">
                Explore Programs
              </button>
            </div>
          </div>
          
          {/* Image/illustration */}
          <div className="relative">
            <div className="relative aspect-square bg-gray-800 rounded-2xl overflow-hidden shadow-2xl">
              {/* Replace with your actual image */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#b42638]/20 to-gray-900/70"></div>
              <img 
                src={coursePageHeroGirl}
                alt="Students learning in industrial training" 
                className="w-full h-full object-cover opacity-90"
                // className="w-full h-full object-cover mix-blend-luminosity opacity-90"
              />
            </div>
            
            {/* Stats overlay */}
            <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
              <div className="text-3xl font-bold text-[#b42638]">95%</div>
              <div className="text-sm font-medium">Placement Rate</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating elements for visual interest */}
      <div className="absolute top-20 right-20 w-32 h-32 rounded-full bg-[#b42638]/20 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 rounded-full bg-white/5 blur-3xl"></div>
    </section>
  );
};

export default HeroSection;