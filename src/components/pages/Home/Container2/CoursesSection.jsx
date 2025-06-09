import React from 'react';
import { FaGraduationCap, FaClock, FaChartLine, FaLaptopCode, FaUserTie, FaCertificate } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const CoursesSection = () => {
  const navigate = useNavigate();

  const handleReadMore = (courseId) => {
    navigate(`/course/${courseId}`);
  };

  const handleApplyNow = () => {
    navigate('/contact')
  }

  const courses = [
    {
      id: "dataScience",
      title: "Data Science & AI Certification",
      description: "Master the fundamentals of data science, including Python programming, machine learning, and artificial intelligence",
      icon: <FaChartLine className="text-3xl bg-[#ffffff] " />,
      duration: "4-6 Months",
      highlights: ["Python Programming", "Machine Learning", "Data Visualization", "Artificial Intelligence Applications"],
      status: "active",
    },
    {
      id: "marketingAnalytics",
      title: "Marketing Analytics Certification",
      description: "Gain insights into consumer behavior and digital marketing performance through data analysis. This course equips you with the tools to measure, track, and optimize marketing campaigns. ",
      icon: <FaUserTie className="text-3xl bg-[#ffffff] " />,
      duration: "4-6 Months",
      highlights: ["Consumer Behavior Analytics", "Digital Marketing Metrics", "Google Analytics", "Campaign Performance Optimization"],
      status: "active",
    },
    {
      id: "financialAnalytics",
      title: "Financial Analytics Certification",
      description: "Learn to interpret financial data, build dynamic dashboards, and make informed business decisions using analytical tools. Ideal for finance professionals seeking to transition into data-driven roles.",
      icon: <FaGraduationCap className="text-3xl bg-[#ffffff] " />,
      duration: "4-6 Months",
      highlights: ["Financial Modelling", "Excel & Power BI ", "Forecasting Techniques", "Risk Analysis"],
      status: "coming_soon",
    },
    {
      id: "webDevelopment",
      title: "Web Development Certification",
      description: "Learn full-stack web development using the latest front-end and back-end technologies. Build responsive, dynamic websites and applications ready for deployment.",
      icon: <FaLaptopCode className="text-3xl bg-[#ffffff] " />,
      duration: "4-6 Months",
      highlights: [" HTML, CSS, JS", "Responsive Design", "Backend", "Deployment"],
      status: "coming_soon",
    },
    {
      id: "hrAnalytics",
      title: "HR Analytics Certification",
      description: "Transform HR decision-making through data analysis. Learn to use analytics for workforce planning, performance tracking, and employee engagement strategies. ",
      icon: <FaUserTie className="text-3xl bg-[#ffffff] " />,
      duration: "4-6 Months",
      highlights: ["Workforce Planning", "Predictive HR Metrics", "HR Dashboarding", "Talent Analytics"],
      status: "coming_soon",
    },
    {
      id: "meanMern",
      title: "Certification in MEAN & MERN Stack",
      description: "Specialize in full-stack JavaScript development using MEAN or MERN technologies. Build robust and scalable web applications from the ground up. ",
      icon: <FaCertificate className="text-3xl bg-[#ffffff] " />,
      duration: "4-6 Months",
      highlights: ["MongoDB ", "Express.js", "Angular/React", "Node.js"],
      status: "coming_soon",
    }
  ];

  return (
    <div className="bg-[#ffffff] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            Explore Our <span className="bg-[#ffffff] ">Certification Programs</span>
          </h2>
          <p className="text-lg text-black-300 max-w-3xl mx-auto">
            Industry-relevant courses designed to give you the competitive edge in today's data-driven world.
          </p>
          <div className="w-20 h-1 bg-[#ffffff]  mx-auto mt-6"></div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {courses.map((course) => (
  <div
    key={course.id}
    className={`relative bg-[#000409] rounded-xl overflow-hidden shadow-lg transition-all duration-300 border border-white/10 group ${
      course.status === 'coming_soon' ? 'pointer-events-none' : ''
    }`}
  >
    <div className={`p-6 transition duration-500 ease-in-out ${
      course.status === 'coming_soon' ? 'backdrop-blur-sm opacity-70' : ''
    }`}>
      <div className="flex items-start mb-4">
        <div className="bg-white/10 p-3 rounded-lg mr-4">
          {course.icon}
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">{course.title}</h3>
          <div className="flex items-center mt-1 text-white text-sm">
            <FaClock className="mr-1" />
            <span>{course.duration}</span>
          </div>
        </div>
      </div>

      <p className="text-white/80 mb-4">{course.description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-white mb-2">KEY TOPICS COVERED:</h4>
        <ul className="grid grid-cols-2 gap-2">
          {course.highlights.map((item, index) => (
            <li key={index} className="flex items-center text-white/80 text-sm">
              <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {course.status === 'active' && (
        <div className="flex space-x-3">
          <button
            className="flex-1 py-2 bg-[#911414] text-white font-medium rounded-lg hover:bg-white hover:text-[#911414] transition-colors duration-300 border border-[#911414]"
            onClick={() => handleReadMore(course.id)}
          >
            Learn More
          </button>
          <button
            className="flex-1 py-2 border border-white text-white font-medium rounded-lg hover:bg-white hover:text-[#000409] transition-colors duration-300"
            onClick={handleApplyNow}
          >
            Apply Now
          </button>
        </div>
      )}
    </div>

    {/* Overlay for Coming Soon */}
    {course.status === 'coming_soon' && (
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center">
        <span className="text-white text-2xl font-semibold tracking-wide">🚧 Coming Soon</span>
      </div>
    )}
  </div>
))}


        </div>


      </div>
    </div>
  );
};

export default CoursesSection; 