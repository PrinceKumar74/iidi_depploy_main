import React from 'react';
import { FaGraduationCap, FaTasks, FaProjectDiagram, FaUserTie, FaBriefcase } from 'react-icons/fa';
import { MdOutlineInterests } from 'react-icons/md';

const LearningPath = () => {
  const steps = [
    {
      icon: <FaGraduationCap className="text-2xl text-white" />,
      title: "Expert-Led Training",
      description: "Gain in-depth knowledge through structured learning delivered by seasoned industry professionals."
    },
    {
      icon: <FaTasks className="text-2xl text-white" />,
      title: "Applied Assignments",
      description: "Reinforce your learning with hands-on, graded assignments that build real-world problem-solving skills."
    },
    {
      icon: <FaUserTie className="text-2xl text-white" />,
      title: "Industry Projects",
      description: "Work on real-life business scenarios and datasets to strengthen your portfolio and practical experience."
    },
    {
      icon: <FaBriefcase className="text-2xl text-white" />,
      title: "Career Support Services",
      description: "Receive personalized guidance for resume writing, LinkedIn optimization, and job referrals."
    },
    {
      icon: <FaProjectDiagram className="text-2xl text-white" />,
      title: "Job-Readiness Skills",
      description: "Sharpen your communication, teamwork, and technical presentation skills for the workplace."
    }
  ];

  return (
    <div className="bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#000409] mb-2">
            <span className="text-[#911414]">Learning</span> Path
          </h2>
          <div className="w-20 h-1 bg-[#911414] mx-auto mt-4"></div>
        </div>

        {/* Timeline section */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#000409] transform -translate-x-1/2"></div>

          <div className="space-y-8 md:space-y-0">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Icon (mobile) */}
                <div className="md:hidden flex items-start mb-4">
                  <div className="bg-[#911414] p-3 rounded-full">
                    {step.icon}
                  </div>
                </div>

                {/* Card (desktop) */}
                <div className={`hidden md:flex w-1/2 ${index % 2 === 0 ? 'justify-end pr-8' : 'justify-start pl-8'}`}>
                  <div className={`bg-[#000409] p-4 rounded-lg max-w-xs ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-white/80 mt-2">{step.description}</p>
                  </div>
                </div>

                {/* Center icon (desktop) */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 bg-[#911414] p-3 rounded-full border-4 border-white z-10">
                  {step.icon}
                </div>

                {/* Mobile card content */}
                <div className="md:hidden w-full bg-[#000409] p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-white/80 mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final Section */}
        <div className="mt-16 text-center bg-[#000409] rounded-xl p-8 max-w-2xl mx-auto border-l-4 border-[#911414]">
          <div className="flex justify-center mb-4">
            <MdOutlineInterests className="text-3xl text-[#911414]" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">Advanced Interview Preparation</h3>
          <p className="text-white/80">
            Ace your interviews with mock sessions, algorithm challenges, and technical whiteboarding practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LearningPath;
