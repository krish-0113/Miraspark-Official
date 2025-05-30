"use client"

import { motion } from "framer-motion"
import { Heart, Mail, Phone, MapPin, Github, Twitter, Linkedin, Instagram } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ]

  const services = [
    "Web Development",
    "Mobile Apps",
    "UI/UX Design",
    "Digital Strategy",
    "SEO & Marketing",
    "Maintenance",
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-gradient-to-br from-black via-black to-blue-950 text-white relative overflow-hidden">
      {/* Background overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Miraspark
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming ideas into exceptional digital experiences. We create innovative solutions that drive growth
              and engage users.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-black to-gray-900 backdrop-blur-sm p-3 rounded-lg hover:bg-gradient-to-br hover:from-gray-900 hover:to-blue-950 hover:shadow-blue-500/20 transition-all duration-300 border-2 border-gray-700/50 hover:border-blue-500/50 relative overflow-hidden group"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon
                    size={18}
                    className="relative z-10 text-gray-300 group-hover:text-blue-400 transition-colors duration-300"
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-black/30 to-blue-950/20 rounded-xl p-6 border border-gray-800/50"
          >
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-all duration-200 hover:translate-x-2 transform inline-block relative group"
                  >
                    <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 bottom-0 group-hover:w-full transition-all duration-300"></span>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-black/30 to-blue-950/20 rounded-xl p-6 border border-gray-800/50"
          >
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-gray-300 hover:text-blue-400 transition-all duration-200 cursor-pointer hover:translate-x-2 transform inline-block relative group">
                    <span className="absolute left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 bottom-0 group-hover:w-full transition-all duration-300"></span>
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-black/30 to-blue-950/20 rounded-xl p-6 border border-gray-800/50"
          >
            <h4 className="text-lg font-semibold mb-6 text-blue-400">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-2 rounded-lg border border-blue-500/30">
                  <Mail className="text-blue-400 flex-shrink-0" size={16} />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-200">
                    hello@miraspark.in
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-2 rounded-lg border border-blue-500/30">
                  <Phone className="text-blue-400 flex-shrink-0" size={16} />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-200">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3 group">
                <div className="bg-gradient-to-br from-blue-900/50 to-purple-900/50 p-2 rounded-lg border border-blue-500/30">
                  <MapPin className="text-blue-400 flex-shrink-0" size={16} />
                </div>
                <div>
                  <p className="text-gray-300 group-hover:text-blue-400 transition-colors duration-200">
                    123 Innovation Street
                    <br />
                    Tech City, TC 12345
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t-2 border-gray-800/50"
        >
          <div className="text-center">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">Stay Updated</h4>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest updates on technology trends and digital innovation.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gradient-to-br from-black to-gray-900 backdrop-blur-sm border-2 border-gray-700/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 rounded-lg font-semibold hover:shadow-blue-500/25 transition-all duration-300 border-2 border-blue-500/30 hover:shadow-2xl relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative z-10">Subscribe</span>
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t-2 border-gray-800/50 text-center"
        >
          <div className="bg-gradient-to-r from-black/50 to-blue-950/30 rounded-xl p-6 border border-gray-800/30">
            <p className="text-gray-300 flex items-center justify-center gap-2 flex-wrap">
              © {currentYear} Miraspark. All rights reserved.
              {/* <Heart className="text-red-400 animate-pulse" size={16} /> */}
              {/* <span className="text-blue-400">Made with passion</span> */}
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
