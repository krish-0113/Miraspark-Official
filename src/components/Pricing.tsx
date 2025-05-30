import React, { useState } from "react";
import { Check, Star, Zap, Shield, Rocket } from "lucide-react";
import FAQSection from "@/components/FAQ";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "Up to 5 team members",
        "10GB cloud storage",
        "Basic analytics",
        "Email support",
        "Standard integrations",
        "Mobile app access"
      ],
      icon: <Rocket className="w-6 h-6" />,
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "Up to 25 team members",
        "100GB cloud storage",
        "Advanced analytics & reporting",
        "Priority support",
        "Custom integrations",
        "API access",
        
      ],
      icon: <Zap className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with complex needs",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Unlimited team members",
        "Unlimited cloud storage",
        "Enterprise analytics",
        "24/7 dedicated support",
        "Custom development",
        "Advanced API access",
        
      ],
      icon: <Shield className="w-6 h-6" />,
      popular: false
    }
  ];

  const services = [
    {
      title: "Consulting Services",
      price: "Starting at $150/hour",
      description: "Expert consulting for digital transformation and strategy"
    },
    {
      title: "Custom Development",
      price: "Project-based pricing",
      description: "Tailored software solutions built for your specific needs"
    },
    {
      title: "Training & Support",
      price: "From $500/session",
      description: "Comprehensive training programs for your team"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              💎 Premium Plans Available
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
            Choose Your
            <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Perfect Plan
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
            Unlock your business potential with our cutting-edge solutions. 
            From innovative startups to enterprise giants, we provide the tools you need to dominate your market.
          </p>
          
          {/* Pricing Toggle */}
          <div className="flex items-center justify-center mb-12">
            <div className="bg-black/60 backdrop-blur-sm border border-gray-700/50 rounded-full p-1 flex items-center shadow-2xl">
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${!isAnnual ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${isAnnual ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'}`}
              >
                Annual
                <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                  -20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative transition-all duration-500 hover:transform hover:scale-105 group ${
                plan.popular ? 'scale-105' : ''
              }`}
            >
              {/* Gradient Border Container */}
              <div 
                className={`p-[2px] rounded-3xl ${
                  plan.popular 
                    ? 'bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 shadow-2xl shadow-purple-500/25' 
                    : 'bg-gradient-to-r from-blue-600/50 via-purple-600/50 to-cyan-600/50 group-hover:from-cyan-400 group-hover:via-purple-500 group-hover:to-pink-500'
                } transition-all duration-500`}
                style={{
                  background: plan.popular 
                    ? 'linear-gradient(135deg, #00f0ff, #8b00ff, #ff00c8, #00f0ff)' 
                    : undefined
                }}
              >
                {/* Inner Card */}
                <div className="bg-gradient-to-b from-gray-950 via-black to-gray-950 rounded-3xl p-6 h-full backdrop-blur-xl">
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
                        <Star className="w-4 h-4 mr-2 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6">
                      <div className="flex items-center justify-center mb-4">
                        <div className={`p-3 rounded-2xl ${plan.popular ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20' : 'bg-gray-800/50'} group-hover:scale-110 transition-transform duration-300`}>
                          {plan.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{plan.description}</p>
                      
                      <div className="mb-6">
                        <div className="flex items-baseline justify-center">
                          <span className="text-4xl font-bold text-white">
                            ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                          </span>
                          <span className="text-gray-400 ml-1 text-sm">
                            /{isAnnual ? 'year' : 'month'}
                          </span>
                        </div>
                        {isAnnual && (
                          <p className="text-green-400 text-xs mt-2 font-medium">
                            Save ${(plan.monthlyPrice * 12) - plan.annualPrice} annually
                          </p>
                        )}
                      </div>
                      
                      <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white shadow-xl shadow-cyan-500/25'
                          : 'bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white border border-gray-600/50 hover:border-gray-500'
                      }`}>
                        Get Started Now
                      </button>
                    </div>
                    
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-300 border-b border-gray-700/50 pb-2">
                        Everything included:
                      </h4>
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start group/feature">
                          <div className="flex-shrink-0 mr-3 mt-0.5">
                            <div className="w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          </div>
                          <span className="text-gray-300 group-hover/feature:text-white transition-colors text-sm leading-relaxed">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services Section */}
        <div className="text-center mb-16">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
              🚀 Professional Services
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            Custom Solutions
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Need something extraordinary? Our elite team delivers bespoke solutions that transform your vision into reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Gradient Border Container */}
              <div className="p-[2px] rounded-3xl bg-gradient-to-r from-purple-600/50 via-pink-600/50 to-orange-600/50 group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-orange-400 transition-all duration-500 shadow-lg group-hover:shadow-2xl group-hover:shadow-purple-500/25">
                {/* Inner Card */}
                <div className="bg-gradient-to-b from-gray-950 via-black to-gray-950 rounded-3xl p-6 h-full backdrop-blur-xl relative overflow-hidden">
                  {/* Animated background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 animate-pulse"></div>
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-pink-500/20 group-hover:from-purple-400/30 group-hover:to-pink-400/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/20">
                      <Zap className="w-7 h-7 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:via-pink-400 group-hover:to-orange-400 group-hover:bg-clip-text transition-all duration-300">
                      {service.title}
                    </h3>
                    
                    {/* Price */}
                    <p className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6 group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                      {service.price}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-400 mb-8 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                    
                    {/* Button */}
                    <button className="w-full py-3 px-6 bg-gradient-to-r from-gray-800 to-gray-900 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 border border-gray-700/50 hover:border-transparent text-white shadow-lg hover:shadow-xl hover:shadow-purple-500/20 group-hover:bg-gradient-to-r group-hover:from-purple-600/80 group-hover:to-pink-600/80">
                      <span className="group-hover:scale-110 inline-block transition-transform duration-300">
                        Learn More
                      </span>
                    </button>
                  </div>
                  
                  {/* Decorative corner elements */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-purple-500/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative">
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl blur-xl"></div>
          
          <div className="relative text-center bg-gradient-to-r from-gray-900/80 to-black/80 backdrop-blur-xl rounded-3xl p-16 border border-gray-700/50 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
            
            <div className="mb-8">
              <span className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-full text-lg font-bold mb-8 backdrop-blur-sm">
                🎯 Ready to Dominate?
              </span>
            </div>
            
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Transform Your Business
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Starting Today
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join the elite circle of companies that chose excellence. Experience the power of cutting-edge technology 
              and unparalleled service that sets industry leaders apart.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-2xl shadow-blue-500/25 hover:shadow-purple-500/25 transform hover:scale-105 min-w-[200px]">
                <span className="group-hover:scale-110 inline-block transition-transform">
                  🚀 Start Free Trial
                </span>
              </button>
              <button className="group border-2 border-gray-600 hover:border-white text-white px-10 py-4 rounded-xl font-bold text-lg transition-all duration-300 hover:bg-white hover:text-black transform hover:scale-105 min-w-[200px]">
                <span className="group-hover:scale-110 inline-block transition-transform">
                  💬 Contact Sales
                </span>
              </button>
            </div>
            
            <div className="mt-12 flex items-center justify-center space-x-8 text-gray-500">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5" />
                <span>Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5" />
                <span>99.9% Uptime</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="w-5 h-5" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAQSection/>
    </div>
   
  );
};

export default Pricing;