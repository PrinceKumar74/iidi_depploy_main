import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import flagAustralia from '../../../assets/flagAustralia.png';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const ContactPage = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top on route change
  }, [pathname]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    course: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const courses = [
    "Certification in Data Science & AI",
    "Certification in Marketing Analytics",
  ];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone) => {
    const re = /^[0-9]{10}$/;
    return re.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
      valid = false;
    }

    if (!formData.email) {
      newErrors.email = 'Please enter your email';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      valid = false;
    }

    if (!formData.phone) {
      newErrors.phone = 'Please enter your phone number';
      valid = false;
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      valid = false;
    }

    if (!formData.course) {
      newErrors.course = 'Please select a course';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };


  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);
  setSubmitStatus(null);

  try {
    if (!window.emailjs) {
      await emailjs.init({publicKey:"nnmv2CxNUoAISj0m4"});
    }

    const response = await emailjs.send(
      "service_ylsl6kt",
      "template_isl73es",
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        course: formData.course,
        message: formData.message || 'No message provided',
        reply_to: formData.email
      }
    );

    console.log('Email sent successfully!', response);
    setSubmitStatus('success');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      course: '',
      message: ''
    });
  } catch (error) {
    console.error('Failed to send email:', error);
    setSubmitStatus('error');
    alert(`Error details: ${error.text || error.message}`);
  } finally {
    setIsSubmitting(false);
  }
};




  const isSubmitDisabled = !formData.name || !formData.email || !formData.phone || !formData.course || 
                          errors.name || errors.email || errors.phone || errors.course || isSubmitting;


                          
  return (
    <div 
      className="relative min-h-[86vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${flagAustralia})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Color overlay */}
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-2 text-white">
            <span className="text-[#b42638]">Contact</span> Us
          </h2>
          <p className="text-gray-300">Have questions? Get in touch with our team.</p>
        </div>

        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-800/90 text-white rounded-lg">
            Your message has been sent successfully!
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-800/90 text-white rounded-lg">
            Failed to send message. Please check your EmailJS configuration or try again later.
          </div>
        )}

        <form onSubmit={handleSubmit} className="bg-gray-900/90 backdrop-blur-sm rounded-xl shadow-2xl p-8 border border-gray-800">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#b42638]"
                placeholder="John Doe"
                required
              />
              {errors.name && <p className="mt-1 text-sm text-[#b42638]">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#b42638]"
                placeholder="john@example.com"
                required
              />
              {errors.email && <p className="mt-1 text-sm text-[#b42638]">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#b42638]"
                placeholder="9876543210"
                required
              />
              {errors.phone && <p className="mt-1 text-sm text-[#b42638]">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="course" className="block text-sm font-medium text-gray-300 mb-1">
                Course Interested In
              </label>
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#b42638] appearance-none"
                required
              >
                <option value="">Select a course</option>
                {courses.map((course, index) => (
                  <option key={index} value={course}>{course}</option>
                ))}
              </select>
              {errors.course && <p className="mt-1 text-sm text-[#b42638]">{errors.course}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-800/80 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#b42638]"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitDisabled}
                className={`w-full py-3 px-4 rounded-lg font-medium ${isSubmitDisabled ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#b42638] hover:bg-[#8a1a2a]'} text-white transition-colors duration-300`}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;