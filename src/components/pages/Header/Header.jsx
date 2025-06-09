import { useState } from "react";
import { Menu, ChevronDown, ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";
import Logo2 from "../../../assets/Logo2.png";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const location = useLocation();
  const pathname = location.pathname;

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Courses",
      path: "/course",
      subItems: [
        { name: "Data Science & AI", path: "/course/dataScience" },
        { name: "Marketing Analytics", path: "/course/marketingAnalytics" },
      ],
    },
    {
      name: "Blogs",
      path: "/blogs",
    },
  ];

  // Handle mouse enter with delay for better UX
  const handleMouseEnter = (itemName) => {
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
    setActiveDropdown(itemName);
  };

  // Handle mouse leave with slight delay to allow moving to dropdown
  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
    setHoverTimeout(timeout);
  };

  return (
    <div className="sticky top-0 z-50 bg-[#000409] shadow-sm">
      
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center">
              <img
                src={Logo2}
                alt="University Logo"
                className="h-30  w-auto"
              />
              
                {/* For UpperCase  */}
                <div className="text-xl font-bold uppercase w-[270px] text-white z-50">International Institute of Data Intelligence</div>
                
            
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive =
                pathname === item.path ||
                (item.subItems && item.subItems.some(subItem => pathname === subItem.path));
              
              return (
                <div
                  key={item.name}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(item.name)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center px-1 py-2 text-lg font-medium transition-colors duration-200 ${
                      isActive 
                        ? "text-[#b42638]"
                        : "text-white hover:text-[#b42638]"
                    }`}
                  >
                    {item.name}
                    {item.subItems && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${
                        activeDropdown === item.name ? "rotate-180" : ""
                      }`} />
                    )}
                  </Link>

                  {item.subItems && activeDropdown === item.name && (
                    <div 
                      className="absolute left-0 mt-0 w-56 origin-top-right rounded-b-lg bg-black shadow-lg ring-1 ring-gray-800 focus:outline-none"
                      onMouseEnter={() => handleMouseEnter(item.name)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="py-2">
                        {item.subItems.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={subItem.path}
                            className={`block px-4 py-2 text-lg ${
                              pathname === subItem.path
                                ? "bg-gray-900 text-[#b42638]"
                                : "text-white hover:bg-gray-900 hover:text-[#b42638]"
                            }`}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

            <Link to="/contact">
              <button className="ml-4 px-6 py-2 bg-[#b42638] text-white font-medium rounded hover:bg-[#8a1a2a] transition-all duration-300 shadow-md hover:shadow-lg">
                APPLY NOW
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#b42638] focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-black rounded-lg shadow-xl mt-2 py-4 px-4 space-y-2">
            {navItems.map((item) => {
              const isActive =
                pathname === item.path ||
                (item.subItems && item.subItems.some(subItem => pathname === subItem.path));
              
              return (
                <div key={item.name} className="border-b border-gray-800 last:border-0 pb-2 last:pb-0">
                  {item.subItems ? (
                    <>
                      <div 
                        className="flex justify-between items-center py-2"
                        onClick={() => setActiveDropdown(activeDropdown === item.name ? null : item.name)}
                      >
                        <Link
                          to={item.path}
                          className={`text-lg font-medium ${
                            isActive ? "text-[#b42638]" : "text-white"
                          }`}
                        >
                          {item.name}
                        </Link>
                        {activeDropdown === item.name ? (
                          <ChevronUp className="h-5 w-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-400" />
                        )}
                      </div>
                      
                      {activeDropdown === item.name && (
                        <div className="ml-4 mt-2 space-y-2">
                          {item.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.path}
                              className={`block py-2 px-3 rounded-md text-lg ${
                                pathname === subItem.path
                                  ? "bg-gray-900 text-[#b42638]"
                                  : "text-white hover:bg-gray-900"
                              }`}
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.path}
                      className={`block py-2 text-lg font-medium ${
                        isActive ? "text-[#b42638]" : "text-white hover:text-[#b42638]"
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              );
            })}

            <div className="pt-4">
              <Link to="/contact">
                <button className="w-full py-3 bg-[#b42638] text-white font-medium rounded hover:bg-[#8a1a2a] transition-all duration-300">
                  APPLY NOW
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navigation;