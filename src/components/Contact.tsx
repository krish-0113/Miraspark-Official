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
    },
    {
      icon: Phone,
      title: "Call Us",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      value: "123 Innovation Street, Tech City, TC 12345",
      link: "#",
    },
  ]

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-black to-blue-950 relative overflow-hidden"
      ref={ref}
    >
      {/* Background overlay for extra depth */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

      {/* Animated background particles */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-2 h-2 bg-blue-400/30 rounded-full"
          animate={{
            y: [-20, 20, -20],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-2 h-2 bg-blue-400/20 rounded-full"
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
          <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full text-sm font-medium text-blue-300 border-2 border-blue-500/30 backdrop-blur-sm mb-6">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Create Something
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Amazing Together
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
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
            <div className="border-blue-gradient p-[2px] rounded-2xl">
              <div className="bg-black/90 hover:bg-gradient-to-r hover:from-black hover:to-blue-950/60 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300">
                <h3 className="text-2xl font-bold text-white mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Let's Start a Conversation
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We're here to help you every step of the way. Whether you have a question, need a consultation, or
                  want to start a project, don't hesitate to reach out.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 8, scale: 1.02 }}
                  className="border-blue-gradient p-[2px] rounded-xl"
                >
                  <a
                    href={info.link}
                    className="flex items-center p-6 bg-black/90 hover:bg-gradient-to-r hover:from-black hover:to-gray-900 backdrop-blur-lg rounded-xl transition-all duration-300"
                  >
                    <div className="bg-black/90 hover:bg-gradient-to-r hover:from-black hover:to-gray-900 w-14 h-14 rounded-xl flex items-center justify-center mr-5 border-2 border-blue-500/30 transition-all duration-300">
                      <info.icon className="text-blue-400" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-lg">{info.title}</h4>
                      <p className="text-gray-300">{info.value}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Business Hours Card */}
            <motion.div className="border-blue-gradient p-[2px] rounded-xl">
              <div className="bg-black/90 hover:bg-gradient-to-r hover:from-black hover:to-gray-900 backdrop-blur-lg rounded-xl p-6 transition-all duration-300">
                <h4 className="font-bold text-white mb-3 text-lg bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
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
  className="rounded-[20px]" // Removed border-blue-gradient and padding
>
  <div className="bg-black/90 hover:bg-gradient-to-r hover:from-black hover:to-blue-950/60 backdrop-blur-xl rounded-2xl p-8 transition-all duration-300">
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black/60 border-2 border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 bg-black/60 border-2 border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          required
          className="w-full px-4 py-3 bg-black/60 border-2 border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 text-white placeholder-gray-400"
          placeholder="How can we help you?"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={5}
          className="w-full px-4 py-3 bg-black/60 border-2 border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none text-white placeholder-gray-400"
          placeholder="Tell us about your project..."
        ></textarea>
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg shadow-2xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed border-2 border-blue-500/30"
      >
        {isSubmitting ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <Send size={18} />
          </>
        )}
      </motion.button>
    </form>
  </div>
</motion.div>


        </div>
      </div>
    </section>
  )
}

export default Contact
