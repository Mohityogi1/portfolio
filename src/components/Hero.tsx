import React, { useEffect, useRef } from 'react';
import { ChevronDown, MapPin, GraduationCap } from 'lucide-react';
import { useTheme } from '../App';

const Hero: React.FC = () => {
  const { theme } = useTheme();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain effect
    const columns = Math.floor(canvas.width / 20);
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()';
    
    const draw = () => {
      ctx.fillStyle = theme === 'dark' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = theme === 'dark' ? '#00ffff' : '#0066ff';
      ctx.font = '15px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * 20, drops[i] * 20);

        if (drops[i] * 20 > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ opacity: 0.1 }}
      />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className={`inline-block p-4 rounded-full mb-8 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-cyan-500/20 to-blue-500/20' 
            : 'bg-gradient-to-r from-blue-500/20 to-purple-500/20'
        }`}>
          <div className={`w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold ${
            theme === 'dark' 
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500' 
              : 'bg-gradient-to-r from-blue-500 to-purple-500'
          } text-white`}>
            MY
          </div>
        </div>

        <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${
          theme === 'dark' 
            ? 'bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent' 
            : 'bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent'
        }`}>
          Mohit Yogi
        </h1>

        <p className={`text-xl md:text-2xl mb-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Full Stack Developer & AI/ML Enthusiast
        </p>

        <div className={`flex items-center justify-center space-x-6 mb-8 text-sm ${
          theme === 'dark' ? 'text-gray-400' : 'text-gray-500'
        }`}>
          <div className="flex items-center space-x-2">
            <MapPin size={16} />
            <span>Sikar, Rajasthan, India</span>
          </div>
          <div className="flex items-center space-x-2">
            <GraduationCap size={16} />
            <span>B.Tech CS (AI & ML) - 2nd Year</span>
          </div>
        </div>

        <p className={`text-lg mb-12 max-w-2xl mx-auto ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          Currently pursuing Computer Science with specialization in AI & ML at Shekhawati Group of Institute and Technology, Sikar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white'
              : 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 text-white'
          }`}>
            View My Work
          </button>
          <button className={`px-8 py-3 rounded-lg font-medium transition-all duration-300 border-2 ${
            theme === 'dark'
              ? 'border-cyan-500 text-cyan-400 hover:bg-cyan-500/10'
              : 'border-blue-500 text-blue-600 hover:bg-blue-500/10'
          }`}>
            Get In Touch
          </button>
        </div>
      </div>

      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce ${
        theme === 'dark' ? 'text-cyan-400' : 'text-blue-600'
      }`}>
        <ChevronDown size={24} />
      </div>
    </section>
  );
};

export default Hero;