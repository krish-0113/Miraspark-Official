import React from 'react';
import { ArrowRight, Sparkles, Zap, Globe, Star, Heart, Rocket, Play, ChevronDown } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden bg-black">
      {/* Black and Blue Gradient Background */}
      <div className="absolute inset-0">
        {/* Primary black to blue gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 via-blue-950 to-black"></div>
        
        {/* Secondary blue accent gradients */}
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            background: 'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.2) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(29, 78, 216, 0.15) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
        
        {/* Black overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      </div>

      {/* Floating Elements with Refined Animations */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary floating icons */}
        <div className="absolute top-20 left-10 text-blue-400/80 animate-pulse">
          <div className="relative">
            <Sparkles size={35} className="animate-spin" style={{ animationDuration: '8s' }} />
            <div className="absolute inset-0 bg-blue-400/20 blur-xl rounded-full animate-ping"></div>
          </div>
        </div>

        <div className="absolute top-40 right-20 text-blue-300/80">
          <div className="relative animate-bounce" style={{ animationDuration: '3s' }}>
            <Zap size={40} />
            <div className="absolute inset-0 bg-blue-400/20 blur-lg rounded-full"></div>
          </div>
        </div>

        <div className="absolute bottom-40 left-20 text-cyan-400/80">
          <div className="relative">
            <Globe size={38} className="animate-spin" style={{ animationDuration: '10s' }} />
            <div className="absolute inset-0 bg-cyan-400/20 blur-lg rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Secondary floating elements */}
        <div className="absolute top-60 left-1/4 text-blue-300/70 animate-pulse">
          <Star size={25} />
        </div>

        <div className="absolute bottom-60 right-1/3 text-blue-400/70">
          <Heart size={28} className="animate-pulse" />
        </div>

        <div className="absolute top-32 right-1/4 text-cyan-300/70">
          <Rocket size={32} className="animate-bounce" style={{ animationDuration: '4s' }} />
        </div>

        {/* Ambient blue light orbs */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-4 h-4 rounded-full blur-sm animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['rgba(59, 130, 246, 0.3)', 'rgba(29, 78, 216, 0.25)', 'rgba(96, 165, 250, 0.2)', 'rgba(6, 182, 212, 0.3)'][i % 4],
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 animate-fadeInUp">
            <span className="inline-flex items-center px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full text-sm font-semibold text-blue-300 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 hover:bg-white/10">
              <Sparkles className="w-4 h-4 mr-2" />
              Digital Innovation Starts Here
              <div className="ml-2 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
            </span>
          </div>

          {/* Main Heading */}
          <div className="mb-8 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 leading-tight">
              Transform Your
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent animate-gradient-x">
                Digital Future
              </span>
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-12 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
              We create <span className="text-blue-400 font-semibold">stunning digital experiences</span> that drive
              growth, engage users, and transform businesses through{" "}
              <span className="text-purple-400 font-semibold">cutting-edge technology</span> solutions.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
            <button className="group relative bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 flex items-center gap-3">
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity -z-10"></div>
            </button>

            <button className="group relative bg-white/5 backdrop-blur-xl text-white px-8 py-4 rounded-2xl font-semibold text-lg border border-white/10 hover:border-blue-400/30 transition-all duration-300 hover:scale-105 hover:bg-white/10 flex items-center gap-3">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Stats Cards - Enhanced with Animations and Dark Gradient Background */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            {[
              { number: "500+", label: "Projects Completed", icon: "🚀", color: "blue" },
              { number: "50+", label: "Happy Clients", icon: "😊", color: "cyan" },
              { number: "5+", label: "Years Experience", icon: "⭐", color: "blue" },
              { number: "24/7", label: "Support Available", icon: "🛡️", color: "cyan" },
            ].map((stat, index) => (
              <div
                key={index}
                className="group relative animate-slideInUp overflow-hidden"
                style={{ animationDelay: `${1 + index * 0.15}s` }}
              >
                {/* Animated gradient border */}
                <div 
                  className="absolute inset-0 rounded-2xl p-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
                    backgroundSize: '300% 300%',
                    animation: 'gradient-border 3s ease infinite'
                  }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-blue-950/50 rounded-2xl"></div>
                </div>
                
                {/* Dark gradient background with blue accents */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-blue-950/50 rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/30 via-transparent to-black/20 rounded-2xl"></div>
                
                {/* Static border for non-hover state */}
                <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-transparent transition-all duration-500"></div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-400/0 to-cyan-400/0 group-hover:from-blue-500/10 group-hover:via-blue-400/5 group-hover:to-cyan-400/10 transition-all duration-500"></div>
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-400 rounded-full animate-float-particle"
                      style={{
                        left: `${20 + i * 30}%`,
                        top: `${30 + i * 20}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: `${2 + i * 0.5}s`
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10 p-6 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-105 group-hover:translate-y-1">
                  <div className="text-center">
                    {/* Icon with enhanced animation */}
                    <div className="text-4xl mb-4 transform transition-all duration-500 group-hover:scale-125 group-hover:rotate-12 animate-bounce-slow">
                      {stat.icon}
                    </div>
                    
                    {/* Number with gradient and scale animation */}
                    <div className={`text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r ${stat.color === 'blue' ? 'from-blue-400 via-blue-300 to-cyan-300' : 'from-cyan-400 via-cyan-300 to-blue-300'} bg-clip-text text-transparent transform transition-all duration-500 group-hover:scale-110`}>
                      <span className="animate-counter">{stat.number}</span>
                    </div>
                    
                    {/* Label with subtle glow */}
                    <div className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                  
                  {/* Subtle inner shadow for depth */}
                  <div className="absolute inset-0 rounded-2xl shadow-inner shadow-black/20"></div>
                </div>
                
                {/* Hover glow effect */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 ${stat.color === 'blue' ? 'bg-blue-500' : 'bg-cyan-500'} blur-xl -z-10`}></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 pb-20 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
        <div className="relative group">
          {/* Subtle blue outer glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-cyan-600/15 to-blue-600/20 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
          
          <div className="relative bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 group-hover:border-blue-400/30 transition-all duration-300">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300 bg-clip-text text-transparent">
                Ready to Start Your Digital Journey?
              </h3>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
                Let's build something extraordinary together. Transform your vision into reality with cutting-edge innovation.
              </p>
              <button className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                <span>Let's Talk</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl blur-lg opacity-0 hover:opacity-30 transition-opacity -z-10"></div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-white/60" />
      </div>

      <style >{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(50px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }

        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) translateX(10px);
            opacity: 1;
          }
        }

        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes counter {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes gradient-border {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }

        .animate-float-particle {
          animation: float-particle infinite ease-in-out;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }

        .animate-counter {
          animation: counter 0.6s ease-out;
        }
      `}</style>
    </section>
  )
}

export default Hero