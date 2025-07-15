import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const PrivacyPolicy = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-2">Privacy Policy</h1>
      <p className="text-gray-600 mb-8 border-b pb-6">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

      <div className="bg-white rounded-lg shadow-md p-8">
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            At the International Institute of Data Intelligence (IIDI) (“Institute,” “we,” “our,” or “us”), we are
            dedicated to safeguarding your privacy and protecting the personal information you share with us. This
            Privacy Policy outlines how we collect, use, store, and disclose your information when you visit our
            website (internationalinstituteofdataintelligence.com) or engage with our programs, courses, or related
            services.
          </p>
          <p className="text-gray-700 leading-relaxed">
            By using our website or enrolling in our programs, you consent to the practices described in this policy.
            If you disagree with any part of this policy, please discontinue the use of our services.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Information We Collect</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We collect various types of information to ensure high-quality service delivery, security, and
            personalized academic experiences:
          </p>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Personal Identification Information</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Full name, email address, phone number, and mailing address </li>
              <li>Educational qualifications and professional background </li>
              <li>Organization name and role (for business partnerships or B2B services)</li>
              <li>Account login credentials (username and encrypted password)
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Payment & Financial Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Secure payment details via PCI-DSS-compliant gateways</li>
              <li>Billing address and receipts </li>
              <li>Tax or GST identification numbers (for invoicing and compliance)</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-2">Technical and Usage Data</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>IP address, browser version, device type, and operating system</li>
              <li>Log files, cookies, and user behavior analytics</li>
              <li>Interactions with our platform, including course progress and support requests</li>
            </ul>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. How We Use Your Information</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your data helps us provide, enhance, and secure our educational and consulting services:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Academic & Service Delivery </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Course enrollment and profile creation </li>
                <li>Access to course materials and certifications</li>
                <li> Learning support and progress tracking </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Operational Efficiency</h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>User authentication and security monitoring</li>
                <li>Continuous platform improvement </li>
                <li>Regulatory and legal compliance </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Communication & Engagement </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Service updates, academic newsletters, and promotional content (with opt-out)</li>
                <li>Event notifications, webinars, and career resources </li>
                <li>Feedback collection and surveys </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-medium text-gray-800 mb-2">Research & Analytics </h3>
              <ul className="list-disc pl-5 text-gray-700 space-y-1 text-sm">
                <li>Learning pattern analysis for curriculum enhancement</li>
                <li>Market and trend research for future offerings </li>
                <li>Usage analytics to optimize platform performance </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Data Sharing & Disclosure </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We share your information only when necessary and with trusted entities:
          </p>
          <div className="border border-gray-200 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Recipient</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900"> Third-party Service Providers</td>
                  <td className="px-6 py-4 text-sm text-gray-700">Hosting, payment processing, analytics, and customer
                    service</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Academic & Industry Partners
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">Joint programs and certifications (with your explicit
                    consent)
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Legal & Government Authorities </td>
                  <td className="px-6 py-4 text-sm text-gray-700">As required by law or to protect our legal rights</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">Business Transfers </td>
                  <td className="px-6 py-4 text-sm text-gray-700">In cases of mergers, acquisitions, or restructuring</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-700 mt-4 text-sm leading-relaxed">
            We never sell your data to third parties.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. International Data Transfers</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your data may be stored or processed in countries outside your region, including India and Australia,
            where IIDI operates. In cases where the data protection laws differ, we ensure adequate safeguards are
            in place, such as:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>EU Standard Contractual Clauses</li>
            <li>EU Standard Contractual Clauses</li>
            <li>Compliance with local privacy regulations (e.g., GDPR, IT Act of India)</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Data Security</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We prioritize your data security through technical and organizational measures including:

          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Data Encryption (TLS 1.2+ in transit, AES-256 at rest) </li>
            <li>Access Control using strong passwords and multi-factor authentication</li>
            <li> Security Audits and regular vulnerability assessments</li>
            <li>Privacy Training for staff and academic collaborators</li>
          </ul>
          <p className="text-gray-700 text-sm leading-relaxed">
            While we strive for complete security, no system is infallible. In the event of a data breach, we will notify
            affected individuals in line with legal requirements.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Your Privacy Rights</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            You may have the following rights, depending on your jurisdiction:

          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Access</h3>
              <p className="text-gray-700 text-sm">Obtain a copy of your data </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Correction</h3>
              <p className="text-gray-700 text-sm">Update inaccurate or outdated information </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Deletion</h3>
              <p className="text-gray-700 text-sm">Request data erasure in permitted cases </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Restriction</h3>
              <p className="text-gray-700 text-sm">Limit how your data is processed </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Objection</h3>
              <p className="text-gray-700 text-sm">Object to data use for direct marketing</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-medium text-gray-800 mb-2">Withdraw Consent</h3>
              <p className="text-gray-700 text-sm"> Revoke previously granted permissions</p>
            </div>
          </div>
          <p className="text-gray-700 mt-6 text-sm leading-relaxed">
            To exercise your rights, email us at info@iidataintelligence.com. We may require proof of identity
            before proceeding with your request.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">8.  Cookies & Tracking Technologies</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We use cookies and tracking tools for functionality and analytics purposes. These help us:
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>Keep you signed in securely</li>
            <li>Store user preferences </li>
            <li>Analyze traffic patterns</li>
            <li>Deliver personalized content and course recommendations</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            You can modify your browser settings to manage or block cookies. Note that disabling them may affect
            your user experience.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Updates to This Policy
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            We may periodically revise this policy to reflect changes in our practices or applicable laws. Significant
            updates will be posted prominently on our site or communicated directly.
          </p>
          <p className="text-gray-700 leading-relaxed">
            We encourage you to review this policy regularly to stay informed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Information
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            For inquiries, concerns, or to exercise your privacy rights, please contact our Data Protection Officer:
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">International Institute of Data Intelligence (IIDI)</h3>
              <p className="text-gray-700">Attn: Data Protection Officer
              </p>
            </div>
            {/* <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">Mailing Addresses</h3>
              <address className="text-gray-700 not-italic">
                India: Near Gaba Chowk, Kashipur Road, Rudrapur-263153, Distt. Udham Singh Nagar
                <br />
                <br />
                Australia : 1248 High St Rd, wantirna South vic 3152.<br />

              </address>
            </div> */}
            <div className="mb-4">
              <h3 className="font-medium text-gray-800 mb-1">Email: </h3>
              <p className="text-gray-700">info@internationalinstituteofdataintelligence.com</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800 mb-1">Phone: </h3>
              <p className="text-gray-700">+91 9761954123</p>
            </div>
          </div>

        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;