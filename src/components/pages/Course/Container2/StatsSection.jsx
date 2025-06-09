import React from "react";
import SchoolIcon from '@mui/icons-material/School';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import PeopleIcon from '@mui/icons-material/People';

const StatsSection = () => {
  const statsData = [
    {
      id: "students",
      title: "3020+",
      subtitle: "Students",
      icon: <SchoolIcon />,
    },
    {
      id: "instructors",
      title: "Top",
      subtitle: "Instructors",
      icon: <ManageAccountsIcon    />,
    },
    {
      id: "certifications",
      title: "Online",
      subtitle: "Certifications",
      icon: <WorkspacePremiumIcon    />,
    },
    {
      id: "partners",
      title: "150+",
      subtitle: "Placement Partners",
      icon: <PeopleIcon    />,
    },
  ];

  return (
    <div className="bg-black text-white py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {statsData.map((stat) => (
          <div
            key={stat.id}
            className="flex items-center justify-center p-4 rounded-lg shadow-md bg-white"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-[#b42638] mr-4">
              {stat.icon}
            </div>
            <div>
              <h3 className="text-2xl font-bold text-black">{stat.title}</h3>
              <p className="text-lg text-black">{stat.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;