
import React, { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ritika Sharma, Data Analyst – Bengaluru",
    rating: 5,
    text: "IIDI’s Data Science certification helped me shift from a traditional analyst role to a data-driven position in a tech firm. The projects and mentorship were extremely valuable.",
  },
  {
    id: 2,
    name: "Ankit Mehra, Software Developer – Canada",
    rating: 5,
    text: "The Web Development course was very well-structured and covered both front-end and back-end in depth. Thanks to IIDI, I landed a full-stack developer job right after completing the course.",
  },
  {
    id: 3,
    name: "Sanya Gupta, Financial Analyst – Singapore",
    rating: 4,
    text: "As a finance professional, I found the Financial Analytics program to be highly relevant. The Excel and Power BI modules helped me automate and optimize reporting tasks at work.",
  },
  {
    id: 4,
    name: "Karan Verma, HR Executive – Ottawa, Canada",
    rating: 5,
    text: "I was impressed with the level of industry exposure in the HR Analytics course. It gave me the confidence to lead data initiatives within my HR team.",
  },
  {
    id: 5,
    name: "Neha Joshi, Marketing Analyst – Hyderabad, India",
    rating: 5,
    text: "The placement support was truly helpful. From resume reviews to mock interviews, IIDI prepared me for every step of the hiring process.",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex flex-col">
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={18}
          className={
            i < rating ? "fill-[#b42638] text-[#b42638]" : "text-gray-300"
          }
        />
      ))}
    </div>
    <span className="text-sm text-gray-500 mt-1">
      {rating} out of 5 stars — based on client experience
    </span>
  </div>
);

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(1);

  // Auto-rotate every 2 seconds
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex(prev => (prev + 1) % testimonials.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [currentIndex, isHovered]);

  const goToPrev = () => {
    setDirection(-1);
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex(prev => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const getVisibleTestimonials = () => {
    const prevIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    const nextIndex = (currentIndex + 1) % testimonials.length;
    return [prevIndex, currentIndex, nextIndex];
  };

  // Animation variants
  const cardVariants = {
    prev: {
      x: "-50%",
      scale: 0.8,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 1,
      transition: { duration: 0.5 }
    },
    active: {
      x: "0%",
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      zIndex: 2,
      transition: { duration: 0.5 }
    },
    next: {
      x: "50%",
      scale: 0.8,
      opacity: 0.5,
      filter: "blur(4px)",
      zIndex: 1,
      transition: { duration: 0.5 }
    },
  };

  return (
    <section className="bg-[#ffffff] py-20 px-4 text-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">
          Testimonials-text
        </h2>

        <div 
          className="relative h-96"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/30 hover:bg-white/50 rounded-full p-2 transition-colors duration-300"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>

          {/* Testimonials container */}
          <div className="relative h-full w-full flex items-center justify-center">
            <AnimatePresence custom={direction} initial={false}>
              {getVisibleTestimonials().map((index, position) => {
                const testimonial = testimonials[index];
                return (
                  <motion.div
                    key={testimonial.id}
                    className="absolute w-full max-w-md bg-white text-black rounded-2xl shadow-lg p-6 cursor-pointer"
                    variants={cardVariants}
                    initial={position === 0 ? "prev" : position === 2 ? "next" : "active"}
                    animate={position === 1 ? "active" : position === 0 ? "prev" : "next"}
                    exit={direction > 0 ? "prev" : "next"}
                  >
                    <StarRating rating={testimonial.rating} />
                    <p className="mt-4 text-lg leading-relaxed text-gray-700">
                      "{testimonial.text}"
                    </p>
                    <p className="mt-6 font-semibold text-[#b42638]">
                      — {testimonial.name}
                    </p>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#b42638] scale-125" : "bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;