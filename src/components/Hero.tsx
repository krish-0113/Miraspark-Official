"use client"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Zap, Globe, Star, Heart, Rocket } from "lucide-react"

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Enhanced Dark Animated Gradient Background with smoother transitions */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 via-blue-950 to-black animate-gradient-shift bg-400%"></div>

      {/* Additional gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>

      {/* Enhanced Floating Particles with More Drama */}
      <div className="absolute inset-0">
        {/* Original floating elements with enhanced animations */}
        <motion.div
          className="absolute top-20 left-10 text-blue-400 drop-shadow-2xl filter blur-[0.5px]"
          animate={{
            y: [-15, 15, -15],
            rotate: [0, 360],
            scale: [1, 1.3, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Sparkles size={45} />
        </motion.div>

        <motion.div
          className="absolute top-40 right-20 text-purple-400 drop-shadow-2xl filter blur-[0.5px]"
          animate={{
            y: [15, -15, 15],
            x: [-8, 8, -8],
            scale: [1, 1.2, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 3.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Zap size={55} />
        </motion.div>

        <motion.div
          className="absolute bottom-40 left-20 text-cyan-300 drop-shadow-2xl filter blur-[0.5px]"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Globe size={50} />
        </motion.div>

        {/* Additional floating elements with enhanced effects */}
        <motion.div
          className="absolute top-60 left-1/4 text-pink-400 drop-shadow-xl filter blur-[0.3px]"
          animate={{
            y: [0, -25, 0],
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Star size={30} />
        </motion.div>

        <motion.div
          className="absolute bottom-60 right-1/3 text-cyan-400 drop-shadow-xl filter blur-[0.3px]"
          animate={{
            y: [0, 18, 0],
            x: [0, 12, 0],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 15, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Heart size={35} />
        </motion.div>

        <motion.div
          className="absolute top-32 right-1/4 text-emerald-400 drop-shadow-xl filter blur-[0.3px]"
          animate={{
            y: [-12, 12, -12],
            rotate: [0, 60, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        >
          <Rocket size={40} />
        </motion.div>

        {/* Enhanced floating orbs for ambient lighting */}
        <motion.div
          className="absolute top-1/3 left-1/3 w-6 h-6 bg-blue-500/40 rounded-full blur-md"
          animate={{
            y: [-25, 25, -25],
            x: [-15, 15, -15],
            scale: [1, 1.8, 1],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-8 h-8 bg-purple-500/30 rounded-full blur-lg"
          animate={{
            y: [20, -20, 20],
            x: [10, -10, 10],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/5 w-4 h-4 bg-cyan-500/50 rounded-full blur-sm"
          animate={{
            y: [-18, 18, -18],
            x: [-12, 12, -12],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Additional ambient particles */}
        <motion.div
          className="absolute top-1/4 right-1/5 w-3 h-3 bg-blue-400/60 rounded-full blur-sm"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.4, 0.8, 0.4],
            scale: [1, 1.6, 1],
          }}
          transition={{
            duration: 4.2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/6 w-5 h-5 bg-purple-400/40 rounded-full blur-md"
          animate={{
            y: [15, -15, 15],
            x: [8, -8, 8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5.8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <motion.span
              className="inline-block px-8 py-4 bg-gradient-to-r from-black/95 via-blue-950/90 to-black/95 rounded-full text-sm font-bold text-blue-300 border-2 border-blue-400/50 backdrop-blur-lg mb-4 shadow-2xl shadow-blue-500/30"
              whileHover={{
                scale: 1.08,
                boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.5)",
                borderColor: "rgba(59, 130, 246, 0.7)",
              }}
              transition={{ duration: 0.3 }}
            >
              ✨ Digital Innovation Starts Here ✨
            </motion.span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-8xl font-black text-white mb-6 leading-tight drop-shadow-2xl"
          >
            Transform Your
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl filter blur-[0.3px]"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{ backgroundSize: "300% auto" }}
            >
              Digital Future
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-xl font-light"
          >
            We create <span className="text-blue-400 font-semibold">stunning digital experiences</span> that drive
            growth, engage users, and transform businesses through{" "}
            <span className="text-purple-400 font-semibold">cutting-edge technology</span> solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-20"
          >
            <motion.button
              whileHover={{
                scale: 1.1,
                boxShadow: "0 30px 60px -12px rgba(59, 130, 246, 0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group bg-gradient-to-r from-black via-blue-600 to-black text-white px-12 py-6 rounded-2xl font-bold text-lg shadow-2xl hover:shadow-blue-500/40 transition-all duration-400 flex items-center gap-4 border-2 border-blue-400/50 hover:border-blue-300/70 backdrop-blur-sm relative overflow-hidden"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0"
                animate={{ x: [-120, 400] }}
                transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              />
              <span className="relative z-10">Get Started</span>
              <ArrowRight
                className="group-hover:translate-x-3 transition-transform duration-400 relative z-10"
                size={24}
              />
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.08,
                backgroundColor: "rgba(0, 0, 0, 0.95)",
                borderColor: "rgba(59, 130, 246, 0.8)",
                boxShadow: "0 25px 50px -12px rgba(59, 130, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-black/95 via-blue-950/90 to-black/95 backdrop-blur-lg text-gray-200 px-12 py-6 rounded-2xl font-bold text-lg border-2 border-blue-500/40 hover:border-blue-400/70 transition-all duration-400 shadow-2xl hover:shadow-blue-400/30"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
            >
              Our Services
            </motion.button>
          </motion.div>

          {/* Enhanced Stats with Dramatic Dark Theme and Gorgeous Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              {
                number: "500+",
                label: "Projects Completed",
                icon: "🚀",
                bg: "from-black/90 via-slate-900/80 to-black/90",
                glowColor: "blue-500",
              },
              {
                number: "50+",
                label: "Happy Clients",
                icon: "😊",
                bg: "from-slate-900/90 via-black/80 to-slate-900/90",
                glowColor: "purple-500",
              },
              {
                number: "5+",
                label: "Years Experience",
                icon: "⭐",
                bg: "from-black/80 via-blue-950/90 to-black/80",
                glowColor: "cyan-500",
              },
              {
                number: "24/7",
                label: "Support Available",
                icon: "🛡️",
                bg: "from-blue-950/90 via-black/80 to-blue-950/90",
                glowColor: "pink-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="relative group text-center"
                whileHover={{
                  y: -15,
                  scale: 1.08,
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.15, duration: 0.8 }}
              >
                {/* Outer glowing border */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r from-${stat.glowColor}/30 via-blue-600/40 to-${stat.glowColor}/30 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500`}
                />
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r from-${stat.glowColor}/20 via-blue-500/30 to-${stat.glowColor}/20 rounded-3xl blur-xs opacity-60 group-hover:opacity-100 transition-all duration-500`}
                />

                {/* Main card */}
                <motion.div
                  className={`relative p-8 bg-gradient-to-br ${stat.bg} backdrop-blur-xl rounded-3xl border-2 border-blue-600/30 group-hover:border-${stat.glowColor}/60 transition-all duration-500 overflow-hidden shadow-2xl group-hover:shadow-${stat.glowColor}/20`}
                  whileHover={{
                    boxShadow: `0 35px 70px -12px rgba(59, 130, 246, 0.5)`,
                  }}
                >
                  {/* Inner glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r from-${stat.glowColor}/5 via-blue-900/10 to-${stat.glowColor}/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                  />

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl">
                    <div
                      className={`absolute inset-0 border border-${stat.glowColor}/20 rounded-3xl group-hover:border-${stat.glowColor}/50 transition-colors duration-500`}
                    />
                  </div>

                  {/* Shimmer effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{ x: [-100, 400] }}
                    transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className="text-4xl mb-4 filter drop-shadow-lg"
                      whileHover={{
                        scale: 1.3,
                        rotate: [0, -10, 10, 0],
                        filter: "drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))",
                      }}
                      transition={{ duration: 0.4 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <motion.div
                      className={`text-3xl md:text-5xl font-black bg-gradient-to-r from-blue-400 via-${stat.glowColor} to-purple-400 bg-clip-text text-transparent mb-3 drop-shadow-2xl`}
                      whileHover={{
                        scale: 1.2,
                        filter: "drop-shadow(0 0 10px rgba(59, 130, 246, 0.8))",
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {stat.number}
                    </motion.div>
                    <div className="text-gray-300 font-semibold text-sm tracking-wide group-hover:text-gray-200 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>

                  {/* Corner accents */}
                  <div
                    className={`absolute top-2 right-2 w-3 h-3 bg-${stat.glowColor}/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                  <div
                    className={`absolute bottom-2 left-2 w-2 h-2 bg-blue-400/40 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Enhanced Call-to-Action Section with Gorgeous Outer Gradients */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="relative z-10 max-w-4xl mx-auto px-6 pb-16"
      >
        <motion.div
          className="relative group"
          whileHover={{
            scale: 1.02,
          }}
          transition={{ duration: 0.4 }}
        >
          {/* Multiple outer glow layers */}
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/20 via-purple-600/30 via-pink-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/30 via-purple-500/40 to-cyan-500/30 rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/40 via-purple-400/50 to-pink-400/40 rounded-3xl blur-md opacity-80 group-hover:opacity-100 transition-all duration-300" />

          {/* Main CTA container */}
          <motion.div
            className="relative bg-gradient-to-r from-black/80 via-blue-950/60 via-purple-950/40 to-black/80 backdrop-blur-2xl rounded-3xl p-10 border-2 border-blue-500/40 group-hover:border-purple-400/60 shadow-2xl overflow-hidden"
            whileHover={{
              boxShadow: "0 40px 80px -12px rgba(59, 130, 246, 0.6)",
              borderColor: "rgba(168, 85, 247, 0.8)",
            }}
          >
            {/* Animated background patterns */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-purple-900/15 to-pink-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl" />

            {/* Floating particles inside CTA */}
            <motion.div
              className="absolute top-4 right-6 w-2 h-2 bg-blue-400/60 rounded-full blur-sm"
              animate={{
                y: [-5, 5, -5],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute bottom-6 left-8 w-3 h-3 bg-purple-400/50 rounded-full blur-sm"
              animate={{
                y: [5, -5, 5],
                x: [-2, 2, -2],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />

            {/* Shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/3 to-transparent opacity-0 group-hover:opacity-100"
              animate={{ x: [-200, 600] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <div className="relative z-10 text-center">
              <motion.h3
                className="text-3xl md:text-4xl font-black text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  filter: "drop-shadow(0 0 20px rgba(168, 85, 247, 0.8))",
                }}
              >
                Ready to Start Your Digital Journey?
              </motion.h3>
              <motion.p
                className="text-gray-300 text-xl mb-8 leading-relaxed max-w-2xl mx-auto group-hover:text-gray-200 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
              >
                Let's build something extraordinary together. Transform your vision into reality with cutting-edge
                innovation.
              </motion.p>
              <motion.button
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0 30px 60px -12px rgba(168, 85, 247, 0.6)",
                }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-12 py-5 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-300 border-2 border-purple-400/50 hover:border-pink-400/70 overflow-hidden group/button"
              >
                {/* Button shimmer */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                />
                <span className="relative z-10">Let's Talk</span>
              </motion.button>
            </div>

            {/* Corner decorations */}
            <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-blue-400/40 group-hover:border-blue-300/70 transition-colors duration-300" />
            <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-300/70 transition-colors duration-300" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-pink-400/40 group-hover:border-pink-300/70 transition-colors duration-300" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-cyan-400/40 group-hover:border-cyan-300/70 transition-colors duration-300" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
