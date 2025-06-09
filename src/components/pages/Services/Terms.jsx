import React from "react";
import { ArrowRight } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const TermsAndConditions = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-gray-900 to-[#b42638]/90 py-20 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl max-w-3xl mx-auto">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="prose prose-lg max-w-none">
          <div className="bg-[#b42638]/10 p-6 rounded-lg border-l-4 border-[#b42638] mb-8">
            <p className="text-gray-700">
              Please read these terms carefully before using our services. By accessing or using our platform, you agree to be bound by these terms.
            </p>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            1. Acceptance of Terms
          </h2>
          <p className="text-gray-700 mb-6">
            By accessing or using any services provided by the International Institute of Data Intelligence (IIDI)
            (“Institute,” “we,” “us,” or “our”), you agree to be bound by these Terms and Conditions (“Terms”). If
            you do not agree with any part of these Terms, you may not access or use our services.

          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            2. Services Provided
          </h2>
          <p className="text-gray-700 mb-4">
            IIDI provides educational and professional development services including, but not limited to:
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700"> Certification programs in data science, analytics, web development, and related fields</span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Online and offline training sessions
              </span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Career counseling, webinars, and consulting services </span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Access to study materials, assessments, and digital content </span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Platform and community access for students and partners </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            3. User Responsibilities
          </h2>
          <p className="text-gray-700 mb-4">
            When using our services, you agree to:
          </p>
          <ol className="mb-6 space-y-3 list-decimal list-inside">
            <li className="text-gray-700 pl-2">Provide accurate, current, and complete registration and personal information</li>
            <li className="text-gray-700 pl-2">Use the services only for lawful purposes</li>
            <li className="text-gray-700 pl-2">Refrain from misusing, disrupting, or interfering with the platform or other users </li>
            <li className="text-gray-700 pl-2">Abide by all applicable local, national, and international laws and regulations</li>
            <li className="text-gray-700 pl-2">Respect academic integrity and avoid plagiarism or fraud in any form </li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            4. Intellectual Property
          </h2>
          <p className="text-gray-700 mb-6">
            All content, including but not limited to logos, course materials, documents, images, trademarks, and
            other intellectual property, is owned by or licensed to IIDI. No part of the service may be copied,
            reproduced, distributed, or used without our prior written consent.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-700 mb-6">
            To the maximum extent permitted by law, Pribhaytech shall not be liable for any indirect, incidental, special, consequential or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly.
          </p>
          <ul className="mb-6 space-y-2">
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700"> Loss of data </span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Loss of business or revenue
              </span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Service interruptions or technical issues  </span>
            </li>
            <li className="flex items-start">
              <svg className="h-5 w-5 text-[#b42638] mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="text-gray-700">Any outcomes based on reliance on educational content </span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            6. Privacy Policy
          </h2>
          <p className="text-gray-700 mb-6">
            Your use of our services is also governed by our Privacy Policy, which outlines how we collect, use, and
            protect your personal data. We encourage you to read the Privacy Policy carefully to understand your
            rights and our responsibilities.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            7. Changes to Terms
          </h2>
          <p className="text-gray-700 mb-6">
            We reserve the right to update or modify these Terms at any time. All changes will be posted on this
            page with a revised “Last Updated” date. Continued use of our services after changes have been posted
            constitutes your acceptance of the revised Terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4 pb-2 border-b border-gray-200">
            8. Contact Information
          </h2>
          <p className="text-gray-700 mb-6">
            If you have any questions, concerns, or requests regarding these Terms and Conditions, please contact:
            <br />
            <h2>
              International Institute of Data Intelligence (IIDI)
              Attn: Legal & Compliance Departmen
            </h2>
            <br />
            <a href="mailto:info@iidataintelligence.com" className="text-[#b42638] hover:underline">
              India: Near Gaba Chowk, Kashipur Road, Rudrapur-263153, Distt. Udham Singh Nagar
              Australia: 1248 High St Rd, Wantirna South VIC 3152
              Email: info@iidataintelligence.com
              Phone: +91 7251947000
            </a>
          </p>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mt-12">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Final Acknowledgment
            </h3>
            <p className="text-gray-700">
              By using any service provided by the International Institute of Data Intelligence, you acknowledge that
              you have read, understood, and agreed to be legally bound by these Terms and Conditions. </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;