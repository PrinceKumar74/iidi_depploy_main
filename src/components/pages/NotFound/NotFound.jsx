import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "404 - Not Found | Quantum Nexus";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-6 font-sans overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyan-500/30 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Glowing center orb */}
      <div className="absolute w-64 h-64 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl">
        <div className="text-9xl font-bold mb-4 text-transparent bg-clip-text bg-white">
          404
        </div>
        
        <h1 className="text-4xl font-bold mb-6 tracking-tight">
          <span className="text-[#b42638]">Quantum</span> Disruption Detected
        </h1>
        
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          The subspace link you're trying to access has collapsed into a digital singularity. 
          Our quantum engineers are working to restore the connection.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-[#b42638] hover:bg-[#8a1a2a] rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/20"
          >
            ← Return to Home
          </button>
          
          
        </div>

        {/* Techy status indicator */}
        <div className="mt-12 p-4 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 max-w-md mx-auto">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-mono text-cyan-400">SYSTEM DIAGNOSTIC</span>
            <span className="text-xs font-mono text-red-400 animate-pulse">ERROR 0x7E3F2A</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2.5 rounded-full animate-pulse" 
              style={{ width: '37%' }}
            />
          </div>
          <div className="mt-2 text-xs font-mono text-gray-400 flex justify-between">
            <span>QUANTUM RECOVERY</span>
            <span>37%</span>
          </div>
        </div>
      </div>

      {/* Animated floating tech elements */}
      <div className="absolute bottom-10 left-10 animate-float">
        <div className="w-8 h-8 rounded-full bg-cyan-400/30 blur-sm" />
      </div>
      <div className="absolute top-20 right-16 animate-float delay-1000">
        <div className="w-6 h-6 rotate-45 bg-blue-400/20" />
      </div>
    </div>
  );
};

export default NotFoundPage;