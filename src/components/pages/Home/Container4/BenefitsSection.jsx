import React from 'react';
import { FiBookOpen, FiBriefcase, FiUsers, FiFile } from 'react-icons/fi';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FiBookOpen className="text-[#911414] text-4xl" />,
      title: "Extensive Hands-On Assignments with 24/7 Support",
      description: "Strengthen your understanding with practical tasks and real-time expert guidance.",
    },
    {
      icon: <FiFile className="text-[#911414] text-4xl" />,
      title: "Real-World Industry Projects",
      description: "Work on actual scenarios and data sets to build job-ready skills.",
    },
    {
      icon: <FiBriefcase className="text-[#911414] text-4xl" />,
      title: "Strong Industry Connections",
      description: "Tap into a network of hiring partners and career opportunities.",
    },
    {
      icon: <FiUsers className="text-[#911414] text-4xl" />,
      title: "Job Readiness Program",
      description: "Resume reviews, mock interviews, and career coaching to get you hired.",
    },
  ];

  return (
    <div className="bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-[#000409] border-t-4 border-[#911414] rounded-xl p-6 flex flex-col items-center text-center 
                         hover:scale-105 transform transition-transform duration-300 hover:shadow-lg hover:shadow-[#911414]/30"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-white text-lg font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/90 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;
