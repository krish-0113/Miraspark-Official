
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Database, Zap, Shield, Cloud } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const features = [
    {
      icon: Database,
      title: "Decentralized IPFS Node",
      description: "Custom IPFS node with fast, reliable performance, enhanced security, scalable storage, and easy integration for seamless management.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    {
      icon: Zap,
      title: "Reliable Performance",
      description: "Optimized with smart caching, multi-node redundancy, and dedicated gateways, ensuring low latency and high availability.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50"
    },
    {
      icon: Shield,
      title: "Enhanced Security & Privacy",
      description: "Private IPFS networks with end-to-end encryption and access control, preventing unauthorized data access and manipulation.",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-50 to-emerald-50"
    },
    {
      icon: Cloud,
      title: "Scalable & Cost-Efficient",
      description: "Flexible infrastructure that scales with your needs, reducing storage costs while maintaining decentralization.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-black via-gray-900 to-blue-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            We are a passionate team of digital innovators, designers, and developers 
            committed to transforming ideas into powerful digital experiences that drive success.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-white">
              Why Choose Miraspark?
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed">
              With years of experience in the digital landscape, we combine creativity with 
              technical expertise to deliver solutions that not only look amazing but perform 
              exceptionally. Our team is dedicated to pushing boundaries and creating 
              innovative digital experiences.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              From startups to enterprise-level businesses, we've helped organizations 
              across various industries establish strong digital presences and achieve 
              their business objectives through technology.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-2 border-blue-500/30"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Work Together
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/50 rounded-2xl p-8 border-2 border-gray-600/50 shadow-2xl backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&h=400&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover rounded-xl border-2 border-gray-600/30"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-gray-800/90 backdrop-blur-sm rounded-xl p-4 shadow-2xl border-2 border-blue-500/30">
              <div className="text-2xl font-bold text-blue-400">5+</div>
              <div className="text-sm text-gray-300">Years Experience</div>
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
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 text-center shadow-2xl border-2 border-gray-600/50 hover:border-blue-500/50 hover:shadow-blue-500/20 transition-all duration-300"
            >
              <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 border-2 border-blue-500/30">
                <feature.icon className="text-blue-400" size={28} />
              </div>
              <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
