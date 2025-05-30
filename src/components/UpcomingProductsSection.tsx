"use client";
import { motion } from "framer-motion";
import { Shield, Globe, TestTube, Lock, Zap, Database, Bitcoin, Coins, Network, Star, ArrowRight, CheckCircle } from "lucide-react";

const UpcomingProductsSection = () => {
  const blockchains = [
    { name: "Bitcoin", icon: Bitcoin, color: "from-orange-400 to-yellow-500" },
    { name: "Ethereum", icon: Database, color: "from-blue-400 to-purple-500" },
    { name: "Solana", icon: Zap, color: "from-purple-400 to-pink-500" },
    { name: "Polygon", icon: Network, color: "from-purple-500 to-blue-500" },
    { name: "Binance", icon: Coins, color: "from-yellow-400 to-orange-500" },
    { name: "Injective", icon: Globe, color: "from-cyan-400 to-blue-500" }
  ];

  const nodeTypes = [
    {
      title: "Private Nodes",
      subtitle: "Enterprise Security",
      description: "Deploy dedicated nodes with enterprise-grade security for private transactions and permissioned blockchain environments.",
      icon: Shield,
      gradient: "from-emerald-500 to-green-600",
      bgGradient: "from-emerald-900/30 to-green-800/20",
      borderGradient: "from-emerald-400/60 to-green-500/60",
      features: ["End-to-End Encryption", "Private Network Access", "Enterprise SLA", "Dedicated Resources"]
    },
    {
      title: "Mainnet Nodes",
      subtitle: "Production Ready",
      description: "Full production nodes for real-time transaction validation, blockchain data access, and decentralized application hosting.",
      icon: Globe,
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-900/30 to-cyan-800/20",
      borderGradient: "from-blue-400/60 to-cyan-500/60",
      features: ["99.9% Uptime", "Global Load Balancing", "Real-time Sync", "Auto-scaling"]
    },
    {
      title: "Testnet Nodes",
      subtitle: "Development Environment",
      description: "Access test networks for safe development and testing of dApps, smart contracts, and blockchain integrations.",
      icon: TestTube,
      gradient: "from-purple-500 to-pink-600",
      bgGradient: "from-purple-900/30 to-pink-800/20",
      borderGradient: "from-purple-400/60 to-pink-500/60",
      features: ["Risk-free Testing", "Rapid Deployment", "Debug Tools", "API Sandbox"]
    }
  ];

  return (
    <div 
      className="w-full px-4 md:px-8 lg:px-16 py-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000 0%, #000305 25%, #000814 50%, #000305 75%, #000000 100%)"
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 z-0">
        {/* Primary Gradient Orbs */}
        <div 
          className="absolute top-1/4 left-1/4 w-[800px] h-[800px] rounded-full blur-3xl opacity-25"
          style={{
            background: "radial-gradient(circle, rgba(0,240,255,0.3) 0%, rgba(139,0,255,0.15) 40%, rgba(0,0,0,0) 70%)"
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(255,0,200,0.25) 0%, rgba(139,0,255,0.12) 40%, rgba(0,0,0,0) 70%)"
          }}
        />
        
        {/* Additional Atmospheric Effects */}
        <div 
          className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-2xl opacity-10"
          style={{
            background: "radial-gradient(circle, rgba(0,255,150,0.2) 0%, rgba(0,0,0,0) 70%)"
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-2xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(255,100,0,0.2) 0%, rgba(0,0,0,0) 70%)"
          }}
        />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Main Card with Enhanced Styling */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative p-[3px] rounded-3xl"
          style={{
            background: 'linear-gradient(135deg, #00f0ff 0%, #8b00ff 25%, #ff00c8 50%, #00f0ff 75%, #8b00ff 100%)',
            backgroundSize: '300% 300%',
            animation: 'gradientShift 6s ease infinite'
          }}
        >
          <style >{`
            @keyframes gradientShift {
              0%, 100% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
            }
          `}</style>
            
          <div 
            className="relative rounded-3xl p-8 md:p-12"
            style={{
              background: 'linear-gradient(135deg, #000000 0%, #000814 30%, #001122 60%, #000814 100%)',
              boxShadow: '0 0 60px rgba(0, 240, 255, 0.2), inset 0 0 40px rgba(139, 0, 255, 0.15)'
            }}
          >
            {/* Header Section */}
            <div className="text-center mb-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 mb-6 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-full border border-cyan-500/20 backdrop-blur-sm"
              >
                <Star className="w-5 h-5 text-cyan-400" />
                <span className="text-cyan-300 font-semibold">Next Generation Infrastructure</span>
                <Star className="w-5 h-5 text-purple-400" />
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent leading-tight"
                style={{
                  background: "linear-gradient(90deg, #00f0ff 0%, #8b00ff 50%, #ff00c8 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Upcoming Products
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-gray-300 text-lg md:text-xl max-w-5xl mx-auto leading-relaxed mb-8"
              >
                We are launching <strong className="text-cyan-400 font-semibold">private, testnet, and mainnet nodes</strong> for leading blockchains including <strong className="text-purple-400 font-semibold">Bitcoin, Ethereum, Solana, Polygon, Binance Smart Chain, and Injective</strong>. Experience secure, scalable, and high-performance blockchain infrastructure built for the future.
              </motion.p>
              
              {/* Blockchain Icons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
                className="flex justify-center items-center gap-4 mb-8 flex-wrap"
              >
                {blockchains.map((blockchain, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${blockchain.color} flex items-center justify-center shadow-xl border border-white/10 backdrop-blur-sm`}
                    title={blockchain.name}
                  >
                    <blockchain.icon className="w-7 h-7 text-white drop-shadow-lg" />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Enhanced Node Types Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {nodeTypes.map((nodeType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotateX: 10 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  whileHover={{ y: -8, rotateX: 5, rotateY: 5 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group perspective-1000"
                >
                  {/* Outer Gradient Border */}
                  <div 
                    className="absolute inset-0 rounded-2xl p-[2px] opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${nodeType.borderGradient.replace('from-', '').replace('to-', ', ').replace('/60', '')})`
                    }}
                  >
                    <div 
                      className="w-full h-full rounded-2xl"
                      style={{
                        background: 'linear-gradient(135deg, #000000 0%, #000814 50%, #001122 100%)'
                      }}
                    />
                  </div>
                  
                  {/* Main Card Content */}
                  <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-black/90 via-gray-900/80 to-blue-950/60 backdrop-blur-sm border border-gray-800/30 group-hover:border-gray-700/50 transition-all duration-500 h-full flex flex-col`}>
                    
                    {/* Centered Icon */}
                    <div className="flex justify-center mb-5">
                      <motion.div 
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-16 h-16 rounded-xl bg-gradient-to-br ${nodeType.gradient} flex items-center justify-center shadow-2xl border border-white/20 backdrop-blur-sm relative overflow-hidden`}
                      >
                        <nodeType.icon className="w-8 h-8 text-white drop-shadow-lg relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </motion.div>
                    </div>
                    
                    {/* Title and Subtitle */}
                    <div className="text-center mb-5">
                      <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                        {nodeType.title}
                      </h3>
                      <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-gray-800/50 to-gray-700/50 rounded-full border border-gray-600/30">
                        <span className="text-xs text-gray-300 font-medium">{nodeType.subtitle}</span>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm leading-relaxed mb-5 text-center group-hover:text-gray-200 transition-colors duration-300">
                      {nodeType.description}
                    </p>

                    {/* Enhanced Features List with Gradient Background */}
                    <div className="relative p-4 rounded-xl bg-gradient-to-br from-gray-900/40 via-gray-800/30 to-gray-900/20 border border-gray-700/30 backdrop-blur-sm">
                      <div className="space-y-2">
                        {nodeType.features.map((feature, featureIndex) => (
                          <motion.div 
                            key={featureIndex}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: (index * 0.2) + (featureIndex * 0.1) }}
                            viewport={{ once: true }}
                            className="flex items-center text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300 py-1"
                          >
                            <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="font-medium text-xs">{feature}</span>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Subtle gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>

                    {/* Subtle Hover Effects */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-cyan-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/40 backdrop-blur-md hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-500/60 transition-all duration-300 group cursor-pointer">
                <Zap className="w-5 h-5 text-cyan-400 group-hover:animate-pulse" />
                <span className="text-cyan-300 font-semibold text-lg">Coming Soon</span>
                <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
              <p className="text-gray-400 text-sm mt-4">Stay tuned for revolutionary blockchain infrastructure</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingProductsSection;