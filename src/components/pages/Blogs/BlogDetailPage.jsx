import React, { useEffect, useState } from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";
import emailjs from '@emailjs/browser';
import articles from "./BlogData";

const ArticlePage = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const { blogSlug: articleID } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  // EmailJS subscription states
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscriptionStatus, setSubscriptionStatus] = useState(null);

  useEffect(() => {
    const foundArticle = articles.find((article) => article.id === articleID);
    setArticle(foundArticle);
    setLoading(false);
  }, [articleID]);

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
          date: new Date().toLocaleDateString(),
          time: new Date().toLocaleTimeString(),
          page: article ? article.title : 'Article Page'
        }
      );

      console.log('Subscription email sent successfully!', response);
      setSubscriptionStatus('success');
      setEmail("");
    } catch (error) {
      console.error('Failed to send subscription email:', error);
      setSubscriptionStatus('Failed to subscribe. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-center py-20">
          <div className="h-8 w-64 bg-gray-200 rounded mx-auto mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Article Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The article you're looking for doesn't exist or may have been moved.
          </p>
          <Link
            to="/blog"
            className="inline-flex items-center px-4 py-2 bg-[#b42638] text-white rounded-lg hover:bg-[#8a1a2a] transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-red-200 to-[#ffffff]/90 py-20 text-black">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block bg-[#b42638] text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
              {article.category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              {article.title}
            </h1>
            <div className="flex flex-wrap justify-center items-center mt-6 gap-4 md:gap-6">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">Pribhaytech Team</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">{article.date}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">{article.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: article.content }}
            ></div>

            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {article.tags?.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/blog/tag/${tag.toLowerCase()}`}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-full text-sm transition-colors"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="h-16 w-16 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
                    <User className="h-8 w-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    IIDI Team
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    Industry Experts | {article.category} Specialist
                  </p>
                  <p className="text-gray-700">
                    Our team of professionals brings years of experience in
                    technology and business. We're passionate about sharing
                    insights that help businesses grow in the digital age.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="space-y-6 sticky top-6">
              {/* Newsletter Signup */}
              <div className="bg-[#b42638]/10 border border-[#b42638]/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Stay Updated
                </h3>
                <p className="text-gray-700 mb-4">
                  Get the latest articles and news delivered to your inbox.
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

                <form onSubmit={handleSubscribe} className="space-y-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#b42638] focus:border-[#b42638] text-black"
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full flex items-center justify-center px-4 py-2 bg-[#b42638] hover:bg-[#8a1a2a] text-white font-medium rounded-lg transition-colors duration-300 ${
                      isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                  >
                    {isSubmitting ? 'Sending...' : 'Subscribe'} <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </form>
                <p className="text-xs text-gray-500 mt-3">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;
