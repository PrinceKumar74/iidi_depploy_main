import React from "react";

const StatisticsSection = () => {
  return (
    <div className="bg-[#ffffff] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid container */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Item 1 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-t-0 border-l-0 border-[#b42638] group">
            <div className="absolute inset-0 bg-[#ac0b19] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-black transition-all duration-300">
              2+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium text-black-500 uppercase tracking-wider group-hover:text-black transition-all duration-300">
              COUNTRIES
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-t-0 border-l-2 border-[#b42638] border-r-0 group">
            <div className="absolute inset-0 bg-[#ac0b19] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-black transition-all duration-300">
              15+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium text-black-500 uppercase tracking-wider group-hover:text-black transition-all duration-300">
              CAMPUSES
            </div>
          </div>

          {/* Repeat for other items */}
          {/* Item 3 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-t-2 border-b-2 lg:border-b-0  lg:border-t-0 lg:border-l-2 border-[#b42638] col-span-2 lg:col-span-1 group">
            <div className="absolute inset-0 bg-[#ac0b19] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-black transition-all duration-300">
              50+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium text-black-500 uppercase tracking-wider group-hover:text-black transition-all duration-300">
              GLOBAL CORPORATE PARTNERS
            </div>
          </div>

          {/* Add similar code for Items 4, 5, and 6 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-t-0 border-l-0 border-[#b42638] group">
            <div className="absolute inset-0 bg-[#ac0b19] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-black transition-all duration-300">
              10k+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium text-black-500 uppercase tracking-wider group-hover:text-black transition-all duration-300">
            TRAINING HOURS COMPLETED
            </div>
          </div>

          {/* Item 2 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-t-0 border-l-2 border-[#b42638] border-r-0 group">
            <div className="absolute inset-0 bg-[#ac0b19] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-black transition-all duration-300">
              10000+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium text-black-500 uppercase tracking-wider group-hover:text-black transition-all duration-300">
            TRAINED STUDENTS
            </div>
          </div>

          {/* Repeat for other items */}
          {/* Item 3 */}
          <div className="relative overflow-hidden p-6 sm:p-8 text-center border-t-2 lg:border-t-0 lg:border-l-2 border-[#b42638] col-span-2 lg:col-span-1 group">
            <div className="absolute inset-0 bg-[#ac0b19] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-[2000ms] ease-in-out"></div>
            <div className="relative z-10 text-3xl sm:text-4xl font-bold text-gray-900 mb-2 group-hover:text-black transition-all duration-300">
              70+
            </div>
            <div className="relative z-10 text-xs sm:text-sm font-medium text-black-500 uppercase tracking-wider group-hover:text-black transition-all duration-300">
            INDUSTRY TRAINERS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsSection;