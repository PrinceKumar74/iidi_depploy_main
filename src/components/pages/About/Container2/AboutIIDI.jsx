// import container2Pic1 from "../../../../assets/about/container2Pic1.jpg";
// import container2Pic2 from "../../../../assets/about/container2Pic2.jpg";
// import container2Pic3 from "../../../../assets/about/container2Pic3.jpg";

// const AboutIIDI = () => {
//   return (
//     <section className="bg-white py-16 px-4">
//       <div className="max-w-6xl mx-auto">
//         {/* Main Heading */}
//         <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
//           INTERNATIONAL INSTITUTE OF DATA INTELLIGENCE (IIDI)
//         </h1>

//         {/* Introductory Paragraph */}
//         <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
//           At the International Institute of Data Intelligence (IIDI), we don’t
//           just teach data—we transform careers. We believe data is the most
//           powerful tool of the digital age, and we’re here to help you master
//           it. Our mission is simple: to empower students, professionals, and
//           organizations through hands-on, industryrelevant education that
//           creates real-world impact.
//           <br></br>
//           With a global footprint, expert mentors, and strong ties to leading
//           companies, IIDI offers a launchpad for future-ready careers in data
//           science, AI, analytics, and full-stack development. Join a learning
//           community that values innovation, mentorship, and job readiness—where
//           your growth is our priority.
//         </p>

//         {/* Why IIDI Section */}
//         <div className="mb-16">
//           <h2 className="text-3xl font-semibold mb-8 text-gray-900">
//             <span className="border-b-3 border-[#b42638] pb-2">
//               Why Choose Us?
//             </span>
//           </h2>
//           <p className="text-lg text-gray-700 mb-12">
//             Cutting-edge Certification Programs From Data Science and Financial
//             Analytics to Full Stack Development and HR Analytics, our programs
//             are tailored to industry demands and constantly updated with the
//             latest tools and technologies.
//           </p>

//           {/* Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {/* Card 1 */}
//             <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//               <img
//                 src={container2Pic1}
//                 alt="Schools and colleges"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-[#b42638]">
//                   Real-World Projects & Assignments
//                 </h3>
//                 <p className="text-gray-700">
//                   Learners work on 18+ real-life industry projects and 25+
//                   graded assignments to ensure hands-on experience that directly
//                   translates to on-the-job success.
//                 </p>
//               </div>
//             </div>

//             {/* Card 2 */}
//             <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//               <img
//                 src={container2Pic2}
//                 alt="Facts and figures"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-[#b42638]">
//                   Placement & Job Readiness Support
//                 </h3>
//                 <p className="text-gray-700">
//                   Our dedicated placement cell and Job Readiness Program provide
//                   resume-building, mock interviews, soft skills training, and
//                   access to 5000+ hiring partners.
//                 </p>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
//               <img
//                 src={container2Pic3}
//                 alt="Locations and facilities"
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-6">
//                 <h3 className="text-xl font-bold mb-3 text-[#b42638]">
//                   Global Reach, Local Impact
//                 </h3>
//                 <p className="text-gray-700">
//                   Whether you're in India or abroad, our flexible learning
//                   paths, global curriculum, and hybrid learning model bring
//                   world-class education to your doorstep.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutIIDI;














import React from 'react';
import container2Pic1 from "../../../../assets/about/container2Pic1.jpg";
import container2Pic2 from "../../../../assets/about/container2Pic2.jpg";
import container2Pic3 from "../../../../assets/about/container2Pic3.jpg";
import container2Pic4 from "../../../../assets/about/container2Pic4.jpg"; // Add these images as needed
import container2Pic5 from "../../../../assets/about/container2Pic5.jpg";
import container2Pic6 from "../../../../assets/about/container2Pic6.jpg";

const AboutIIDI = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-900">
          INTERNATIONAL INSTITUTE OF DATA INTELLIGENCE (IIDI)
        </h1>

        {/* Introductory Paragraph */}
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto mb-16">
          The International Institute of Data Intelligence is not only about learning
          numbers and statistics--we transform careers. We think that data is the most
          powerful tool of the digital age, and we are here to help you master it. This
          is what we do: offer hands-on education that matters to industry professionals
          like yourselves but can also benefit ordinary members of society in practical
          terms.
          <br />
          Become part of a community that champions innovation, offers personal guidance,
          and fosters real career advancement — because at IIDI, your success is our top
          priority.
        </p>

        {/* Why IIDI Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold mb-8 text-gray-900">
            <span className="border-b-3 border-[#b42638] pb-2">
              Why Choose Us?
            </span>
          </h2>

          {/* Cards Grid - 3 per row on desktop, 1 per row on mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic1}
                alt="Industry-Aligned Curriculum"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                  Industry-Aligned Curriculum
                </h3>
                <p className="text-gray-700">
                  Our courses are crafted by experts and updated regularly to align with current industry trends,
                  ensuring you gain skills that are in high demand by employers worldwide.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic2}
                alt="Hands-On Learning"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                  Hands-On, Project-Based Learning
                </h3>
                <p className="text-gray-700">
                  We believe in learning by doing. Our students work on real-world projects, which means you can
                  immediately apply what you’ve learned to solve actual industry challenges.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic3}
                alt="Expert-Led Instruction"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                  Expert-Led Instruction
                </h3>
                <p className="text-gray-700">
                  Gain insights from seasoned professionals with years of experience in the field. Our mentors
                  guide you through every step, providing personalized support and real-world knowledge.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic4}
                alt="Career Support & Placement Assistance"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                  Career Support & Placement Assistance
                </h3>
                <p className="text-gray-700">
                  We understand that your career success is our success. From one-on-one resume consultations to
                  job interview preparation and placement assistance, we help you transition smoothly into your new role.
                </p>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic5}
                alt="Flexible Learning Options"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                  Flexible Learning Options
                </h3>
                <p className="text-gray-700">
                  Life is busy. Our flexible, online, and hybrid learning models ensure that you can continue your
                  education without putting other commitments on hold. Learn at your own pace, from anywhere.
                </p>
              </div>
            </div>

            {/* Card 6 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <img
                src={container2Pic6}
                alt="Globally Recognized Certification"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-[#b42638]">
                  Globally Recognized Certification
                </h3>
                <p className="text-gray-700">
                  Our certificates are more than just pieces of paper—they are recognized by top companies worldwide,
                  ensuring that you stand out in the competitive job market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIIDI;