import { Check, Database, Zap, Shield, Lock, Cloud, Star } from "lucide-react";
import { motion } from "framer-motion";

const ChallengesSolutions = () => {
  const solutions = [
    {
      icon: Database,
      title: "Data Persistence & Reliability",
      description: "Traditional IPFS nodes risk data loss due to garbage collection. We solve this with automated pinning and multi-node redundancy.",
      gradient: "from-blue-500 to-purple-500",
      darkBgColor: "from-black/60 to-slate-900/80"
    },
    {
      icon: Zap,
      title: "Slow Content Retrieval & Latency",
      description: "IPFS retrieval can be slow due to node availability. Our smart caching and dedicated gateways improve speed dramatically.",
      gradient: "from-purple-500 to-pink-500",
      darkBgColor: "from-slate-900/70 to-black/60"
    },
    {
      icon: Shield,
      title: "Security & Data Integrity",
      description: "Public IPFS nodes have security risks. We offer private networks with encryption and verifiable storage proofs.",
      gradient: "from-green-500 to-cyan-500",
      darkBgColor: "from-black/50 to-blue-900/70"
    },
    {
      icon: Cloud,
      title: "High Infrastructure Costs",
      description: "Running IPFS nodes can be expensive. Our scalable, cost-efficient model optimizes storage affordably.",
      gradient: "from-cyan-500 to-blue-500",
      darkBgColor: "from-blue-900/60 to-black/70"
    },
    {
      icon: Lock,
      title: "Difficult Setup & Management",
      description: "Managing an IPFS node is complex. We provide a plug-and-play system with intuitive dashboard integration.",
      gradient: "from-orange-500 to-red-500",
      darkBgColor: "from-black/60 to-slate-900/80"
    }
  ];

  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Main Container Background - Dramatic black-to-dark-blue gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-blue-950"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-green-400/30 rounded-full animate-ping"></div>
      </div>

      {/* Network visualization background with enhanced opacity */}
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10"></div>
      </div>
      
      <div className="relative z-10 px-4 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 max-w-none w-full">
        <div className="text-center mb-12 md:mb-16">
          {/* Innovative Solutions Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-black/80 to-blue-900/80 rounded-full text-sm font-medium text-blue-300 border-2 border-blue-500/40 backdrop-blur-md mb-6 shadow-2xl"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4" />
            Innovative Solutions
            <Star className="w-4 h-4" />
          </motion.div>
          
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300 mb-6 md:mb-8 leading-tight">
            Challenges & Our Solutions
          </h2>
          
          <p className="text-base md:text-lg lg:text-xl text-gray-300 max-w-5xl mx-auto leading-relaxed px-4">
            In the decentralized storage landscape, IPFS provides a robust solution, but it comes with certain challenges. At Miraspark, we have identified key issues and developed innovative solutions to enhance the efficiency, security, and accessibility of our Decentralized IPFS Node.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full px-4 md:px-0">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl transform transition-all duration-700 ease-out w-full"
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Outer border with hover effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600/40 via-purple-600/40 to-cyan-600/40 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm group-hover:blur-none"></div>
              
              {/* Card background with individual dark variations - More rectangular */}
              <div className={`relative bg-gradient-to-br ${solution.darkBgColor} backdrop-blur-xl border border-white/10 rounded-xl p-6 h-full min-h-[280px] w-full`}>
                
                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 to-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon container with enhanced gradient - Smaller size */}
                  <div className="mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${solution.gradient} rounded-xl flex items-center justify-center shadow-lg shadow-black/50 group-hover:shadow-xl group-hover:shadow-black/70 transition-all duration-500 group-hover:scale-110`}>
                      <solution.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Title with enhanced styling - Smaller font */}
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-500 leading-snug">
                    {solution.title}
                  </h3>
                  
                  {/* Description with improved readability - Smaller text, flex-grow for consistent spacing */}
                  <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed transition-colors duration-300 flex-grow">
                    {solution.description}
                  </p>
                  
                  {/* Example section with dark theming - Smaller padding */}
                  <div className="mt-4 p-3 bg-gradient-to-r from-black/40 to-blue-900/30 rounded-lg border border-white/5">
                    <div className="flex items-center text-xs text-gray-400">
                      <Check className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      <span className="group-hover:text-gray-300 transition-colors">Enhanced Performance</span>
                    </div>
                  </div>
                </div>
                
                {/* Animated corner accent - More rectangular */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Call-to-Action Section */}
        <div className="mt-12 md:mt-16 text-center px-4">
          <motion.div 
            className="group relative inline-block"
            whileHover={{ scale: 1.05 }}
          >
            {/* CTA outer border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 rounded-xl opacity-75 group-hover:opacity-100 blur group-hover:blur-none transition-all duration-500"></div>
            
            <div className="relative bg-gradient-to-r from-black/40 to-blue-900/40 backdrop-blur-xl px-6 md:px-8 py-4 md:py-5 rounded-xl border border-white/20 group-hover:from-black/60 group-hover:to-blue-900/60 transition-all duration-500">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                Ready to Transform Your Storage?
              </h3>
              <p className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                Experience the power of optimized decentralized storage
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSolutions;