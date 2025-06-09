import dataScience from "../../../assets/course/dataScience.jpg"
import financialAnalytics from "../../../assets/course/financialAnalytics.jpg"
import marketingAnalytics from "../../../assets/course/marketingAnalytics.jpg"
import meanMern from "../../../assets/course/meanMern.jpg"
import webDev from "../../../assets/course/webDev.jpg"
import hrAnalytics from "../../../assets/course/hrAnalytics.jpg"

const allCourses = {
  "dataScience": {
    title: "Certification in Data Science & AI",
    description1:
        "Master machine learning algorithms and data analysis techniques to build intelligent systems. Gain hands-on experience with Python, TensorFlow, and real-world datasets.",
    description:
      "Master machine learning algorithms and data analysis techniques to build intelligent systems. Gain hands-on experience with Python, TensorFlow, and real-world datasets. This course will equip you with the skills to analyze structured and unstructured data, design predictive models, and deploy AI-driven solutions. Through practical projects, you'll learn to tackle real-world challenges using data science methodologies. By the end of the course, you will have a portfolio of projects showcasing your expertise in data science and artificial intelligence.",
    image: dataScience,
    curriculum: [
      "Introduction to Python for Data Science",
      "Data Analysis with Pandas and NumPy",
      "Data Visualization with Matplotlib and Seaborn",
      "Statistical Analysis Fundamentals",
      "Machine Learning Fundamentals",
      "Supervised Learning Algorithms",
      "Unsupervised Learning Techniques",
      "Deep Learning with TensorFlow",
      "Neural Network Architectures",
      "Natural Language Processing (NLP)",
      "Time Series Analysis",
      "Big Data Tools and Technologies",
      "Cloud Computing for Data Science",
      "Real-World Projects and Case Studies",
      "Deploying Machine Learning Models"
    ],
    duration: "6 months",
    lessons: 15,
    tag: "Data Science, AI, Machine Learning"
  },
  "financialAnalytics": {
    title: "Certification in Financial Analytics",
    description1:
        "Learn to analyze financial data and make data-driven investment decisions. Explore risk assessment, portfolio optimization, and financial modeling techniques.",
    description:
      "Learn to analyze financial data and make data-driven investment decisions. Explore risk assessment, portfolio optimization, and financial modeling techniques. This course will help you understand how to leverage data analytics tools to interpret financial trends, assess market risks, and optimize investment portfolios. You'll gain hands-on experience with real-world financial datasets and case studies, preparing you for a career in financial analytics or investment banking.",
    image: financialAnalytics,
    curriculum: [
      "Financial Data Analysis Fundamentals",
      "Risk Assessment Models",
      "Portfolio Optimization Strategies",
      "Financial Modeling Techniques",
      "Time Value of Money Concepts",
      "Capital Budgeting and Investment Decisions",
      "Derivatives and Hedging Strategies",
      "Behavioral Finance Insights",
      "Algorithmic Trading Basics",
      "Financial Statement Analysis",
      "Corporate Valuation Methods",
      "Credit Risk Management",
      "Macroeconomic Analysis for Investments",
      "Case Studies in Investment Decisions",
      "Building Financial Dashboards"
    ],
    duration: "6 months",
    lessons: 15,
    tag: "Finance, Analytics, Investment"
  },
  "marketingAnalytics": {
    title: "Certification in Marketing Analytics",
    description1:
        "Learn to analyze financial data and make data-driven investment decisions. Explore risk assessment, portfolio optimization, and financial modeling techniques.",
    description:
      "Transform marketing strategies with data-driven insights and customer behavior analysis. Master tools like Google Analytics, social media metrics interpretation, and campaign performance optimization. This course will teach you how to analyze consumer trends, measure marketing ROI, and create data-backed strategies to improve brand engagement. With hands-on projects, you'll learn to leverage analytics platforms and develop actionable insights to drive business growth.",
    image: marketingAnalytics,
    curriculum: [
      "Introduction to Marketing Analytics",
      "Customer Behavior Analysis",
      "Google Analytics Mastery",
      "Social Media Metrics Interpretation",
      "Email Marketing Analytics",
      "SEO and SEM Performance Tracking",
      "Content Marketing Metrics",
      "A/B Testing for Campaigns",
      "Marketing Attribution Models",
      "Customer Lifetime Value (CLV) Analysis",
      "Conversion Rate Optimization",
      "Marketing Automation Tools",
      "Data-Driven Storytelling",
      "Campaign Performance Optimization",
      "Building Marketing Dashboards"
    ],
    duration: "6 months",
    lessons: 15,
    tag: "Marketing, Analytics, Digital Marketing"
  },
  "hrAnalytics": {
    title: "Certification in HR Analytics",
    description1:
        "Learn to analyze financial data and make data-driven investment decisions. Explore risk assessment, portfolio optimization, and financial modeling techniques.",
    description:
      "Use data to optimize HR processes and improve organizational performance. Learn to measure employee engagement, retention, and workforce productivity metrics. This course will help you harness the power of HR analytics to make informed decisions about talent acquisition, employee development, and organizational culture. Through practical exercises, you'll gain experience using HR analytics tools and interpreting workforce data to drive strategic HR initiatives.",
    image: hrAnalytics,
    curriculum: [
      "HR Data Analysis Fundamentals",
      "Employee Engagement Metrics",
      "Retention Strategies Using Data",
      "Workforce Productivity Optimization",
      "Talent Acquisition Analytics",
      "Diversity and Inclusion Metrics",
      "Learning and Development Analytics",
      "Performance Management Systems",
      "Employee Turnover Analysis",
      "HR Analytics Tools and Platforms",
      "Predictive Analytics for HR",
      "Workforce Planning Techniques",
      "Organizational Culture Measurement",
      "HR Dashboard Creation",
      "Case Studies in HR Analytics"
    ],
    duration: "6 months",
    lessons: 15,
    tag: "HR, Analytics, Workforce"
  },
  "webDevelopment": {
    title: "Certification in Web Development",
    description1:
        "Learn to analyze financial data and make data-driven investment decisions. Explore risk assessment, portfolio optimization, and financial modeling techniques.",
    description:
      "Build modern, responsive websites and web applications with cutting-edge technologies. Cover full-stack development including HTML/CSS, JavaScript, and popular frameworks. This course will guide you through building dynamic user interfaces, creating robust backends, and deploying scalable web applications. By the end of the course, you'll have the skills to design and develop professional-grade websites and applications, ready to launch your career in web development.",
    image: webDev,
    curriculum: [
      "HTML/CSS Fundamentals",
      "JavaScript Essentials",
      "Responsive Web Design",
      "Version Control with Git and GitHub",
      "Frontend Frameworks (React, Angular)",
      "Backend Development (Node.js, Express)",
      "Database Management with MongoDB",
      "RESTful API Design",
      "Authentication and Authorization",
      "Testing and Debugging Techniques",
      "Web Performance Optimization",
      "Deployment with AWS and Heroku",
      "Progressive Web Apps (PWAs)",
      "Full-Stack Project Development",
      "Building Scalable Applications"
    ],
    duration: "6 months",
    lessons: 15,
    tag: "Web Development, Full Stack, JavaScript"
  },
  "meanMern": {
    title: "Certification in MEAN & MERN Stack",
    description1:
        "Learn to analyze financial data and make data-driven investment decisions. Explore risk assessment, portfolio optimization, and financial modeling techniques.",
    description:
      "Build modern, responsive websites and web applications with cutting-edge technologies. Cover full-stack development including HTML/CSS, JavaScript, and popular frameworks. This course focuses on mastering the MEAN (MongoDB, Express.js, Angular, Node.js) and MERN (MongoDB, Express.js, React, Node.js) stacks. You'll learn to build scalable, high-performance web applications and deploy them to production environments. By the end of the course, you'll have hands-on experience developing full-stack applications from scratch.",
    image: meanMern,
    curriculum: [
      "Introduction to MEAN/MERN Stack",
      "MongoDB Database Management",
      "Express.js Backend Development",
      "Angular Frontend Development",
      "React Frontend Development",
      "Building RESTful APIs",
      "Authentication and Security Practices",
      "State Management with Redux",
      "Component-Based Architecture",
      "Testing and Debugging Applications",
      "Optimizing Application Performance",
      "Deployment Strategies",
      "Cloud Integration with AWS",
      "Full-Stack Application Deployment",
      "Capstone Project Development"
    ],
    duration: "6 months",
    lessons: 15,
    tag: "MEAN, MERN, Full Stack"
  }
};

export default allCourses;