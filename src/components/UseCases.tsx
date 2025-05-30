"use client";
import { motion } from "framer-motion";

const FeatureSection = () => {
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
        
        {/* Top Card: Use Cases for Businesses */}
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
            <h2 className="text-xl md:text-3xl font-bold mb-6 bg-clip-text text-transparent"
              style={{
                background: "linear-gradient(90deg, #00f0ff, #8b00ff, #ff00c8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent"
              }}
            >
              Use Cases for Businesses
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {[
                {
                  title: "Secure Data Storage & Backup:",
                  description: "Store critical data on a decentralized network, ensuring redundancy, security, and protection from data loss. Enterprises can back up important documents without relying on centralized cloud providers.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  )
                },
                {
                  title: "Fast & Reliable Content Delivery:",
                  description: "Improve content accessibility with low-latency retrieval and global availability, ideal for serving large files efficiently. Media companies can distribute high-resolution videos and digital assets without slowdowns.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )
                },
                {
                  title: "Private & Encrypted File Sharing:",
                  description: "Enable secure, tamper-proof file sharing with end-to-end encryption, ensuring data privacy and control. Legal and healthcare firms can share sensitive documents without risk of unauthorized access.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  )
                },
                {
                  title: "Web3 & Decentralized Applications:",
                  description: "Enable decentralized storage for blockchain applications, ensuring censorship resistance and secure data access. NFT marketplaces can store metadata and assets reliably.",
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-3 p-4 rounded-lg bg-gradient-to-r from-gray-900/50 to-gray-800/30 border border-cyan-900/20"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-cyan-400 to-purple-500 flex items-center justify-center mt-1 flex-shrink-0 text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <span className="font-semibold text-cyan-300">{feature.title}</span>
                    <span className="text-gray-200 text-sm md:text-base ml-2">{feature.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>


      </div>
    </div>
  );
};

export default FeatureSection;