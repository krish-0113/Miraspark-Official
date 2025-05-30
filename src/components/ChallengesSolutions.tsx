"use client"

import { Check, Database, Zap, Shield, Lock, Cloud, Star } from "lucide-react"
import { motion } from "framer-motion"

const ChallengesSolutions = () => {
  const solutions = [
    {
      icon: Database,
      title: "Data Persistence & Reliability",
      description:
        "Traditional IPFS nodes risk data loss due to garbage collection. We solve this with automated pinning and multi-node redundancy.",
      gradient: "from-blue-500 to-cyan-500",
      borderGradient: "border-rainbow-gradient",
    },
    {
      icon: Zap,
      title: "Slow Content Retrieval & Latency",
      description:
        "IPFS retrieval can be slow due to node availability. Our smart caching and dedicated gateways improve speed dramatically.",
      gradient: "from-blue-500 to-cyan-500",
      borderGradient: "border-rainbow-gradient",
    },
    {
      icon: Shield,
      title: "Security & Data Integrity",
      description:
        "Public IPFS nodes have security risks. We offer private networks with encryption and verifiable storage proofs.",
      gradient: "from-blue-500 to-cyan-500",
      borderGradient: "border-rainbow-gradient",
    },
    {
      icon: Cloud,
      title: "High Infrastructure Costs",
      description:
        "Running IPFS nodes can be expensive. Our scalable, cost-efficient model optimizes storage affordably.",
      gradient: "from-blue-500 to-cyan-500",
      borderGradient: "border-rainbow-gradient",
    },
    {
      icon: Lock,
      title: "Difficult Setup & Management",
      description:
        "Managing an IPFS node is complex. We provide a plug-and-play system with intuitive dashboard integration.",
      gradient: "from-blue-500 to-cyan-500",
      borderGradient: "border-rainbow-gradient",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-black via-black to-blue-950">
      {/* Background overlay for extra depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-1 h-1 bg-purple-400/40 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 left-1/4 w-1.5 h-1.5 bg-cyan-400/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-1 h-1 bg-green-400/30 rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full text-sm font-medium text-blue-300 border-2 border-blue-500/30 backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4" />
            Innovative Solutions
            <Star className="w-4 h-4" />
          </motion.div>

          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full mx-auto mb-4"></div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Challenges &
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Solutions
            </span>
          </h2>

          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            In the decentralized storage landscape, IPFS provides a robust solution, but it comes with certain
            challenges. At Miraspark, we have identified key issues and developed innovative solutions.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`${solution.borderGradient} p-[2px] rounded-2xl shadow-2xl h-full`}
            >
              <div className="bg-gradient-to-br from-black to-gray-900 rounded-2xl p-8 text-center h-full flex flex-col">
                {/* Subtle background effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-cyan-900/10 opacity-10 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Centered Icon at Top */}
                  <div className="flex justify-center mb-6">
                    <div className="bg-gradient-to-r from-black to-gray-900 w-20 h-20 rounded-2xl flex items-center justify-center border-2 border-blue-500/30 relative overflow-hidden group-hover:border-blue-400/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-cyan-900/20 opacity-20"></div>
                      <solution.icon className="text-blue-400 relative z-10" size={32} />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-4 leading-tight">{solution.title}</h3>

                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed mb-6 flex-grow">{solution.description}</p>

                  {/* Enhanced Performance Badge */}
                  <div className="mt-auto">
                    <div className="bg-gradient-to-r from-black/60 to-blue-900/40 rounded-xl p-4 border border-blue-500/20">
                      <div className="flex items-center justify-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>Enhanced Performance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call-to-Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="border-rainbow-gradient p-[2px] rounded-2xl shadow-2xl inline-block">
            <div className="bg-gradient-to-r from-black/80 to-blue-900/60 backdrop-blur-xl px-8 py-6 rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-3">Ready to Transform Your Storage?</h3>
              <p className="text-gray-300 mb-6">Experience the power of optimized decentralized storage</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-2 border-blue-500/30"
              >
                Get Started Today
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ChallengesSolutions
