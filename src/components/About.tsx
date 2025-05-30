"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, Zap, Shield, Cloud } from "lucide-react"

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: Database,
      title: "Decentralized IPFS Node",
      description:
        "Custom IPFS node with fast, reliable performance, enhanced security, scalable storage, and easy integration for seamless management.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      borderGradient: "border-blue-gradient",
    },
    {
      icon: Zap,
      title: "Reliable Performance",
      description:
        "Optimized with smart caching, multi-node redundancy, and dedicated gateways, ensuring low latency and high availability.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      borderGradient: "border-blue-gradient",
    },
    {
      icon: Shield,
      title: "Enhanced Security & Privacy",
      description:
        "Private IPFS networks with end-to-end encryption and access control, preventing unauthorized data access and manipulation.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      borderGradient: "border-blue-gradient",
    },
    {
      icon: Cloud,
      title: "Scalable & Cost-Efficient",
      description:
        "Flexible infrastructure that scales with your needs, reducing storage costs while maintaining decentralization.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-900/20 to-cyan-900/20",
      borderGradient: "border-blue-gradient",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-black via-black to-blue-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Background overlay for extra depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full text-sm font-medium text-blue-300 border-2 border-blue-500/30 backdrop-blur-sm mb-4">
            About Miraspark
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Crafting Digital
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a passionate team of digital innovators, designers, and developers committed to transforming ideas
            into powerful digital experiences that drive success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">Why Choose Miraspark?</h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              With years of experience in the digital landscape, we combine creativity with technical expertise to
              deliver solutions that not only look amazing but perform exceptionally. Our team is dedicated to pushing
              boundaries and creating innovative digital experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From startups to enterprise-level businesses, we've helped organizations across various industries
              establish strong digital presences and achieve their business objectives through technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-2 border-blue-500/30"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Let's Work Together
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" }
            }}
          >
            {/* Main card with outer border */}
            <div className="p-[2px] rounded-2xl shadow-2xl bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-500/40 group-hover:from-blue-500/70 group-hover:via-purple-500/70 group-hover:to-cyan-500/70 transition-all duration-300">
              <div className="bg-gradient-to-r from-black to-blue-950/70 rounded-2xl p-8 backdrop-blur-sm">
                {/* Image with outer border */}
                <div className="p-[2px] rounded-xl bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-cyan-400/30 group-hover:from-blue-400/60 group-hover:via-purple-400/60 group-hover:to-cyan-400/60 transition-all duration-300">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=400&fit=crop"
                    alt="Team collaboration"
                    className="w-full h-64 object-cover rounded-xl bg-gradient-to-r from-gray-900 to-gray-800"
                  />
                </div>
              </div>
            </div>
            
            {/* Stats card with outer border */}
            <div className="absolute -bottom-4 -right-4 p-[2px] rounded-xl shadow-2xl bg-gradient-to-r from-blue-500/50 via-purple-500/50 to-cyan-500/50 group-hover:from-blue-500/80 group-hover:via-purple-500/80 group-hover:to-cyan-500/80 transition-all duration-300">
              <div className="bg-gradient-to-br from-black to-blue-950/90 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-blue-400 group-hover:text-blue-300 transition-colors duration-300">5+</div>
                <div className="text-sm text-gray-300 group-hover:text-gray-200 transition-colors duration-300">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
              className="group cursor-pointer h-full"
            >
              {/* Outer border with gradient */}
              <div className="p-[2px] rounded-2xl shadow-2xl bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-cyan-500/30 group-hover:from-blue-500/60 group-hover:via-purple-500/60 group-hover:to-cyan-500/60 transition-all duration-300 h-full">
                <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-6 text-center h-full relative overflow-hidden flex flex-col">
                  {/* Subtle background effect that becomes more visible on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.bgGradient} opacity-5 group-hover:opacity-15 rounded-2xl transition-opacity duration-300`}></div>
                  
                  {/* Animated border glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-cyan-500/10 transition-all duration-300"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icon Section */}
                    <div className="flex-shrink-0 mb-6">
                      <div className="bg-gradient-to-r from-black/80 to-gray-900/80 group-hover:from-blue-950/50 group-hover:to-purple-950/50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto transition-all duration-300 border border-gray-800/50 group-hover:border-blue-500/30">
                        <feature.icon className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300" size={28} />
                      </div>
                    </div>
                    
                    {/* Title Section */}
                    <div className="flex-shrink-0 mb-4">
                      <h4 className="text-lg font-semibold text-white group-hover:text-blue-100 transition-colors duration-300 leading-tight min-h-[3.5rem] flex items-center justify-center">
                        {feature.title}
                      </h4>
                    </div>
                    
                    {/* Description Section - Takes remaining space */}
                    <div className="flex-grow flex items-start">
                      <p className="text-sm text-gray-300 group-hover:text-gray-200 leading-relaxed transition-colors duration-300 text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About