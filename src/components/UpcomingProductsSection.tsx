"use client";
import { motion } from "framer-motion";
import { Shield, Globe, TestTube, Lock, Zap, Database, Bitcoin, Coins, Network } from "lucide-react";

const UpcomingProductsSection = () => {
  return (
    <div 
      className="w-full px-4 md:px-8 lg:px-16 py-20 text-white relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #000000, #000305, #000814, #000305, #000000)"
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full blur-3xl opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(0,240,255,0.2) 0%, rgba(139,0,255,0.1) 40%, rgba(0,0,0,0) 70%)"
          }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl opacity-15"
          style={{
            background: "radial-gradient(circle, rgba(255,0,200,0.2) 0%, rgba(139,0,255,0.1) 40%, rgba(0,0,0,0) 70%)"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto space-y-10 relative z-10">
        
        {/* Main Card: Upcoming Products */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative p-[2px] rounded-2xl"
          style={{
            background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)'
          }}
        >
            
          <div 
            className="relative rounded-2xl p-6 md:p-10"
            style={{
              background: 'linear-gradient(135deg, #000000, #001122, #000814)',
              boxShadow: '0 0 40px rgba(0, 240, 255, 0.15), inset 0 0 30px rgba(139, 0, 255, 0.1)'
            }}
          >
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent"
                style={{
                  background: "linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                Upcoming Products
              </h2>
              <p className="text-gray-300 text-base md:text-lg max-w-4xl mx-auto leading-relaxed">
                We are launching <strong className="text-cyan-400">private, testnet, and mainnet nodes</strong> for leading blockchains like <strong className="text-purple-400">Bitcoin, Ethereum, Solana, Polygon, Binance Smart Chain, and Injective</strong>. These nodes provide secure, scalable, and high-performance blockchain access for developers and enterprises.
              </p>
            </div>

            {/* Blockchain Icons Header */}
            {/* <div className="flex justify-center items-center gap-6 mb-8 flex-wrap">
              {[
                { name: "Bitcoin", icon: Bitcoin, color: "from-orange-400 to-yellow-500" },
                { name: "Ethereum", icon: Database, color: "from-blue-400 to-purple-500" },
                { name: "Solana", icon: Zap, color: "from-purple-400 to-pink-500" },
                { name: "Polygon", icon: Network, color: "from-purple-500 to-blue-500" },
                { name: "Binance", icon: Coins, color: "from-yellow-400 to-orange-500" },
                { name: "Injective", icon: Globe, color: "from-cyan-400 to-blue-500" }
              ].map((blockchain, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${blockchain.color} flex items-center justify-center shadow-lg`}
                  title={blockchain.name}
                >
                  <blockchain.icon className="w-6 h-6 text-white" />
                </motion.div>
              ))}
            </div> */}

            {/* Node Types Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Private Nodes",
                  description: "Deploy dedicated nodes for Bitcoin, Ethereum, Solana, Polygon, Binance, and Injective, ensuring secure, permissioned environments for private transactions and enterprise blockchain solutions.",
                  icon: Shield,
                  gradient: "from-green-500 to-emerald-600",
                  bgGradient: "from-green-900/20 to-emerald-800/10"
                },
                {
                  title: "Mainnet Nodes",
                  description: "Run full nodes on Bitcoin, Ethereum, Solana, Polygon, Binance, and Injective for real-time transaction validation, blockchain data access, and decentralized application hosting with high reliability.",
                  icon: Globe,
                  gradient: "from-blue-500 to-cyan-600",
                  bgGradient: "from-blue-900/20 to-cyan-800/10"
                },
                {
                  title: "Testnet Nodes",
                  description: "Access test networks for Bitcoin, Ethereum, Solana, Polygon, Binance, and Injective to develop and test dApps, smart contracts, and blockchain integrations without financial risks.",
                  icon: TestTube,
                  gradient: "from-purple-500 to-pink-600",
                  bgGradient: "from-purple-900/20 to-pink-800/10"
                }
              ].map((nodeType, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`relative p-6 rounded-xl bg-gradient-to-br ${nodeType.bgGradient} border border-white/10 hover:border-white/20 transition-all duration-300 group hover:transform hover:-translate-y-2`}
                  style={{
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
                  }}
                >
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-r ${nodeType.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <nodeType.icon className="w-7 h-7 text-white" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-300 transition-all duration-300">
                    {nodeType.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {nodeType.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-4 space-y-2">
                    {[
                      "High Performance",
                      "Enterprise Security",
                      "24/7 Monitoring"
                    ].map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-white/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center mt-10"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30 backdrop-blur-sm">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-cyan-300 font-medium">Coming Soon</span>
                <Zap className="w-4 h-4 text-purple-400" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingProductsSection;