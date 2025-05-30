"use client"
import { motion } from "framer-motion"
import type React from "react"

import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))

      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. We'll get back to you soon.",
        variant: "default",
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      value: "hello@miraspark.in",
      link: "mailto:hello@miraspark.in",
      glowColor: "blue-500",
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
      glowColor: "purple-500",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Innovation Street, Tech City, TC 12345",
      link: "#",
      glowColor: "cyan-500",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-gray-900 via-blue-950 to-black relative overflow-hidden"
      ref={ref}
    >
      {/* Background ambient effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-6 h-6 bg-blue-500/30 rounded-full blur-md"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-8 h-8 bg-purple-500/20 rounded-full blur-lg"
          animate={{
            y: [15, -15, 15],
            x: [10, -10, 10],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.span
            className="inline-block px-6 py-3 bg-gradient-to-r from-black/90 via-blue-950/80 to-black/90 rounded-full text-sm font-bold text-blue-300 border-2 border-blue-500/40 backdrop-blur-lg mb-6 shadow-2xl shadow-blue-500/20"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.4)",
              borderColor: "rgba(59, 130, 246, 0.6)",
            }}
          >
            ✨ Get In Touch ✨
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 drop-shadow-2xl">
            Let's Create Something
            <motion.span
              className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-2xl"
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
              Amazing Together
            </motion.span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Ready to transform your digital presence? We'd love to hear about your project and discuss how we can help
            bring your vision to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative group">
              {/* Outer glow for title section */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600/20 via-purple-600/30 to-blue-600/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative bg-gradient-to-r from-black/80 via-blue-950/60 to-black/80 backdrop-blur-xl rounded-2xl p-6 border-2 border-blue-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                <h3 className="text-3xl font-black text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Start a Conversation
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We're here to help you every step of the way. Whether you have a question, need a consultation, or
                  want to start a project, don't hesitate to reach out.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                >
                  {/* Outer glow layers */}
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r from-${info.glowColor}/20 via-blue-600/30 to-${info.glowColor}/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500`}
                  />
                  <div
                    className={`absolute -inset-0.5 bg-gradient-to-r from-${info.glowColor}/30 via-purple-500/20 to-${info.glowColor}/30 rounded-xl blur-xs opacity-60 group-hover:opacity-100 transition-all duration-300`}
                  />

                  <motion.a
                    href={info.link}
                    className={`relative flex items-center p-6 bg-gradient-to-r from-black/90 via-gray-900/80 to-black/90 backdrop-blur-lg rounded-xl border-2 border-gray-600/40 group-hover:border-${info.glowColor}/60 shadow-2xl group-hover:shadow-${info.glowColor}/20 transition-all duration-300 overflow-hidden`}
                    whileHover={{
                      boxShadow: `0 25px 50px -12px rgba(59, 130, 246, 0.4)`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100"
                      animate={{ x: [-100, 400] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    />

                    <div
                      className={`bg-gradient-to-r from-${info.glowColor}/20 via-blue-900/30 to-${info.glowColor}/20 w-14 h-14 rounded-xl flex items-center justify-center mr-5 group-hover:scale-110 transition-transform duration-300 border-2 border-${info.glowColor}/40 relative z-10`}
                    >
                      <info.icon className={`text-${info.glowColor} drop-shadow-lg`} size={24} />
                    </div>
                    <div className="relative z-10">
                      <h4
                        className={`font-bold text-white group-hover:text-${info.glowColor} transition-colors duration-300 text-lg`}
                      >
                        {info.title}
                      </h4>
                      <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div
                      className={`absolute top-2 right-2 w-2 h-2 bg-${info.glowColor}/60 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                    />
                  </motion.a>
                </motion.div>
              ))}
            </div>

            {/* Business Hours Card */}
            <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
              {/* Outer glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600/20 via-blue-600/30 to-purple-600/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500" />

              <div className="relative bg-gradient-to-r from-black/90 via-gray-900/80 to-black/90 backdrop-blur-lg rounded-xl p-6 border-2 border-gray-600/40 group-hover:border-cyan-500/60 shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-300">
                <h4 className="font-bold text-white mb-3 text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Business Hours
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: 10:00 AM - 4:00 PM
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative group"
          >
            {/* Multiple outer glow layers for form */}
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600/15 via-purple-600/25 via-pink-500/15 to-blue-600/15 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/25 via-purple-500/35 to-cyan-500/25 rounded-2xl blur-lg opacity-60 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400/30 via-purple-400/40 to-pink-400/30 rounded-2xl blur-md opacity-80 group-hover:opacity-100 transition-all duration-300" />

            <div className="relative bg-gradient-to-r from-black/85 via-gray-900/75 via-blue-950/60 to-black/85 backdrop-blur-2xl rounded-2xl p-8 border-2 border-gray-600/40 group-hover:border-purple-500/60 shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Form background pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-purple-900/10 to-pink-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl" />

              {/* Floating particles in form */}
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

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/60 border-2 border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400/70 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-black/60 border-2 border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400/70 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-gray-300 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-black/60 border-2 border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400/70 transition-all duration-300 text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/60 border-2 border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-400/70 transition-all duration-300 resize-none text-white placeholder-gray-400 backdrop-blur-sm"
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-purple-500/40 hover:border-pink-400/70 overflow-hidden group/button"
                >
                  {/* Button shimmer */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/button:opacity-100"
                    animate={{ x: [-100, 300] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                  />
                  <span className="relative z-10">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-2 w-3 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={10} />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-blue-400/40 group-hover:border-blue-300/70 transition-colors duration-300" />
              <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-purple-400/40 group-hover:border-purple-300/70 transition-colors duration-300" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-pink-400/40 group-hover:border-pink-300/70 transition-colors duration-300" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-cyan-400/40 group-hover:border-cyan-300/70 transition-colors duration-300" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
