/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FiPhoneCall, FiMail } from "react-icons/fi";
import { FaAddressBook, FaInstagram, FaTwitter, FaFacebook, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (!email) {
      setSubscriptionStatus('Please enter your email address');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setSubscriptionStatus('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);
    setSubscriptionStatus(null);

    try {
      if (!window.emailjs) {
        await emailjs.init("nnmv2CxNUoAISj0m4");
      }
      const response = await emailjs.send(
        "service_ylsl6kt",
        "template_7smeme2",
        {
          email: email,
        }
      );

      setSubscriptionStatus('success');
      setEmail("");
    } catch (error) {
      console.error('Failed to send subscription email:', error);
      setSubscriptionStatus('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Column 1: Certifications */}
          <div>
            <h3 className="text-lg font-bold mb-4">Certifications</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/course/dataScience"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Data Science
                </Link>
              </li>
              <li>
                <Link
                  to="/course/marketingAnalytics"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Marketing Analytics
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/course"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/terms"
                  className="text-gray-400 hover:text-white transition-colors duration-300"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
            <div className="flex items-center mb-2">
              <FiPhoneCall className="text-[#b42638] mr-2" />
              <span className="text-gray-400">+91 97619 54123</span>
            </div>
            <div className="flex items-center mb-4">
              <FiMail className="text-[#b42638] mr-2" />
              <span className="text-gray-400 break-all">info@internationalinstituteofdataintelligence.com</span>
            </div>

            {/* <div className="flex items-center mb-4">
              <FaAddressBook className="text-[#b42638] mr-2" size={40} />
              <span className="text-gray-400">

                Address- Vijay Laxmi Enclave, Opposite St. Mary’s Senior School, Gangapur Road, Rudrapur, Uttarakhand, 263153

              </span>
            </div> */}
            {/* <div className="flex items-center mb-4">
              <FaAddressBook className="text-[#b42638] mr-2" size={33} />
              <span className="text-gray-400">
                Australia : 1248 High St Rd, wantirna South vic 3152.
              </span>
            </div> */}
          </div>

          {/* Column 4: Stay Connected */}
          <div>
            <h3 className="text-lg font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-400 mb-4">
              Get latest updates to your mailbox directly!
            </p>

            {/* Subscription status messages */}
            {subscriptionStatus === 'success' && (
              <div className="mb-4 p-2 bg-green-800 text-white rounded-md">
                Thank you for subscribing!
              </div>
            )}
            {subscriptionStatus && subscriptionStatus !== 'success' && (
              <div className="mb-4 p-2 bg-red-800 text-white rounded-md">
                {subscriptionStatus}
              </div>
            )}

            <form onSubmit={handleSubscribe} className="flex space-x-2 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:border-[#b42638] text-white"
                required
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#b42638] text-white px-4 py-2 rounded-md hover:bg-[#8a1a2a] transition-colors duration-300 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
              >
                {isSubmitting ? 'Sending...' : 'Subscribe'}
              </button>
            </form>

            {/* Social media icons */}
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#E1306C] transition-colors duration-300"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#1DA1F2] transition-colors duration-300"
              >
                <FaTwitter className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#25D366] transition-colors duration-300"
              >
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#4267B2] transition-colors duration-300"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-400 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright */}
          <div className="mb-4 md:mb-0">
            <span className="text-gray-400">
              © 2025. All Rights Reserved
            </span>
          </div>

          {/* Links */}
          <div className="flex space-x-4">
            <Link
              to="/privacy"
              className="text-[#b42638] hover:text-white transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-[#b42638] hover:text-white transition-colors duration-300"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;