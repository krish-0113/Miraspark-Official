import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Smartphone, Globe, Palette, Search, Settings } from "lucide-react";

const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const cardInView = useInView(cardRef, { once: true, amount: 0.3 });
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group relative rounded-2xl p-[2px] transition-all duration-300"
      style={{
        background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
      }}
    >
      <div className="bg-gradient-to-br from-black via-black to-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full border border-gray-800/50">
        <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-blue-500/30">
          <service.icon className="text-blue-400" size={28} />
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {service.title}
        </h3>
        
        <p className="text-gray-300 mb-6 leading-relaxed">
          {service.description}
        </p>
        
        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-sm text-gray-300">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-2 border-blue-500/30"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Learn More
        </motion.button>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies for optimal performance and user experience.",
      features: ["React & Next.js", "Node.js Backend", "Database Design", "API Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"]
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that create memorable user experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"]
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Comprehensive digital strategies that align technology with your business objectives.",
      features: ["Market Analysis", "Technology Planning", "Growth Strategy", "Digital Transformation"]
    },
    {
      icon: Search,
      title: "SEO & Marketing",
      description: "Data-driven marketing strategies that increase visibility and drive qualified traffic.",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Analytics"]
    },
    {
      icon: Settings,
      title: "Maintenance & Support",
      description: "Ongoing support and maintenance to keep your digital assets running smoothly.",
      features: ["24/7 Monitoring", "Regular Updates", "Performance Optimization", "Technical Support"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-black via-black to-gray-900 relative overflow-hidden" ref={ref}>
      {/* Background overlay for extra depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-950/20 via-black/50 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-900/15 via-black/50 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full text-sm font-medium text-blue-300 border-2 border-blue-500/30 backdrop-blur-sm mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Complete Digital
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Solutions
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, we provide end-to-end digital services 
            that help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const cardRef = useRef(null);
            const cardInView = useInView(cardRef, { once: true, amount: 0.3 });
            
            return (
              <motion.div
                key={index}
                ref={cardRef}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={cardInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative rounded-2xl p-[2px] transition-all duration-300"
                style={{
                  background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
                }}
              >
                <div className="bg-gradient-to-br from-black via-black to-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 h-full border border-gray-800/50">
                <div className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-blue-500/30">
                  <service.icon className="text-blue-400" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-2 border-blue-500/30"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div 
            className="relative rounded-2xl p-[2px] transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)',
            }}
          >
            <div className="bg-gradient-to-br from-black via-black to-gray-900 backdrop-blur-sm rounded-2xl p-8 shadow-2xl hover:shadow-blue-500/20 transition-all duration-300 border border-gray-800/50">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help transform your digital presence and achieve your business goals.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 border-2 border-blue-500/30"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get Free Consultation
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;