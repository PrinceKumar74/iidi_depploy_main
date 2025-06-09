// import React, { useEffect, useState } from 'react';
// import allCourses from './courseData'
// import { useParams } from 'react-router-dom';

// const CourseDetailPage = () => {
//     const { courseSlug } = useParams();
//     const [course, setCourse] = useState(null);
//     const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate loading data
//     setTimeout(() => {
//       setCourse(allCourses[courseSlug]);
//       setLoading(false);
//     }, 500);
//   }, [courseSlug]);

//   if (loading) {
//     return <div className="text-center py-20">Loading...</div>;
//   }

//   if (!course) {
//     return <div className="text-center py-20">Course not found</div>;
//   }
//   return (
//     <div className="bg-white">
//     {/* Hero Section */}
//     <div className="relative bg-gray-900 py-20">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center">
//           <h1 className="text-4xl font-bold text-white">{course.title}</h1>
//           <p className="mt-4 text-xl text-gray-300 max-w-3xl mx-auto">
//             {course.description}
//           </p>
//         </div>
//       </div>
//     </div>

//     {/* Course Content */}
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
//         {/* Main Content */}
//         <div className="lg:col-span-2">
//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Course Overview</h2>
//             <div className="prose max-w-none">
//               <p>{course.longDescription || course.description}</p>
//               {/* Add more detailed content here */}
//             </div>
//           </div>

//           <div className="mb-12">
//             <h2 className="text-2xl font-bold text-gray-900 mb-6">Curriculum</h2>
//             <div className="space-y-4">
//               {course.curriculum.map((module, index) => (
//                 <div key={index} className="p-4 bg-gray-50 rounded-lg">
//                   <h3 className="font-medium text-gray-900">Module {index + 1}: {module}</h3>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Sidebar */}
//         <div className="lg:col-span-1">
//           <div className="bg-gray-50 p-6 rounded-xl sticky top-8">
//             <h3 className="text-lg font-bold text-gray-900 mb-4">Course Details</h3>
//             <div className="space-y-4">
//               <div>
//                 <p className="text-sm text-gray-500">Duration</p>
//                 <p className="font-medium">{course.duration || '12 Weeks'}</p>
//               </div>
//               <div>
//                 <p className="text-sm text-gray-500">Price</p>
//                 <p className="font-medium">
//                   <span className="line-through text-gray-400 mr-2">{course.originalPrice}</span>
//                   <span className="text-[#b42638]">{course.discountedPrice}</span>
//                 </p>
//               </div>
//               <button className="w-full py-3 bg-[#b42638] text-white font-medium rounded-lg hover:bg-[#8a1a2a] transition-colors duration-300">
//                 Enroll Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }

// export default CourseDetailPage










import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import {
  Check,
  Clock,
  Book,
  Globe,
  Award,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import allCourses from "./courseData";
import { Link } from "react-router-dom";
import dummy from "../../../assets/course/dummy.jpg";

const CourseDetailPage = () => {
  const { courseSlug } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      setCourse(allCourses[courseSlug]);
      setLoading(false);
  }, [courseSlug]);

  
  const { pathname } = useLocation();

  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (!course) {
    return <div className="text-center py-20">Course not found</div>;
  }


  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-200 to-[#00004]/90 py-20 text-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">{course.title}</h1>
            <p className="mt-4 text-xl text-black-300 max-w-3xl mx-auto">
              {course.description1}
            </p>
          </div>
        </div>
      </div>

      {/* Course Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Course Overview
              </h2>
              <div className="prose max-w-none">
                <p>{course.longDescription || course.description}</p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Curriculum
              </h2>
              <div className="space-y-4">
                {course.curriculum?.map((module, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-lg border-l-4 border-[#b42638]"
                  >
                    <h3 className="font-medium text-gray-900">
                      Module {index + 1}: {module}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg sticky top-8 overflow-hidden">
              {/* Course Image */}
              <div className="h-48 bg-gray-100 overflow-hidden">
                {course.image ? (
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-[#b42638]/20 to-gray-900/10 flex items-center justify-center">
                    <img
                      src={dummy}
                      alt={course.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6">
                  Course Details
                </h3>

                {/* Course Features */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-[#b42638] mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Duration</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.duration || "3 weeks"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Book className="h-5 w-5 text-[#b42638] mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Lessons</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.lessons || "8"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Globe className="h-5 w-5 text-[#b42638] mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Language</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.language || "English / Hindi"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-[#b42638] mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Certificate</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.certificate !== undefined
                        ? course.certificate
                          ? "Yes"
                          : "No"
                        : "Yes"}
                    </p>
                  </div>

                  <hr className="border-gray-200" />

                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Briefcase className="h-5 w-5 text-[#b42638] mr-3 flex-shrink-0" />
                      <p className="text-sm text-gray-500">Job Assistance</p>
                    </div>
                    <p className="font-medium text-gray-900">
                      {course.jobAssistance !== undefined
                        ? course.jobAssistance
                          ? "Yes"
                          : "No"
                        : "Yes"}
                    </p>
                  </div>
                </div>

                {/* Additional Features */}
                {course.features && (
                  <div className="mb-6 pt-6 border-t border-gray-200">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">
                      What's included:
                    </h4>
                    <ul className="space-y-2">
                      {course.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-[#b42638] mr-2" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Enroll Now Button at Bottom */}
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-6 py-3 bg-[#b42638] hover:bg-[#8a1a2a] text-white font-medium rounded-lg transition-colors duration-300 mt-6"
                >
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
