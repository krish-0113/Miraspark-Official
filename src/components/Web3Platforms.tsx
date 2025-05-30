import { Database, Shield, Zap, Globe } from "lucide-react";

const Web3Platforms = () => {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10 p-8 md:p-12 lg:p-16">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-8 tracking-tight">
            Our Web3 SaaS Platforms
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
            Revolutionary SaaS platforms empowering you to build groundbreaking applications 
            with decentralized blockchain technology and AI integration
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Decentralized IPFS Node */}
          <div className="group relative">
            {/* Glowing outer border effect */}
            <div className="absolute -inset-[3px] bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm animate-pulse"></div>
            
            {/* Sharp outer border */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-blue-500/20 hover:shadow-xl overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-[1.02] border border-gray-600/50 hover:border-transparent">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                    Decentralized IPFS Node
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-base">
                  Experience true decentralization with Miraspark's IPFS Node—secure, scalable, 
                  and censorship-resistant storage solution enabling efficient data management 
                  across distributed networks.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Shield, text: "Secure and tamper-proof storage" },
                    { icon: Database, text: "Redundant data persistence" },
                    { icon: Zap, text: "Lightning-fast content retrieval" },
                    { icon: Globe, text: "Private network support" },
                    { icon: Database, text: "Intuitive management dashboard" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                      <div className="w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                        <item.icon className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Enterprise Storage */}
          <div className="group relative">
            {/* Glowing outer border effect */}
            <div className="absolute -inset-[3px] bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm animate-pulse"></div>
            
            {/* Sharp outer border */}
            <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            
            {/* Card */}
            <div className="relative bg-gradient-to-br from-gray-800/95 to-gray-900/95 backdrop-blur-xl rounded-2xl shadow-lg hover:shadow-cyan-500/20 hover:shadow-xl overflow-hidden transition-all duration-500 border border-gray-600/50 hover:border-transparent group-hover:-translate-y-2 group-hover:scale-[1.02]">
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-xl flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-300">
                    Enterprise Storage
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed text-base">
                  Purpose-built for businesses requiring secure, reliable, and scalable 
                  decentralized storage solutions with enterprise-grade performance 
                  and unmatched reliability.
                </p>

                <div className="space-y-3">
                  {[
                    { icon: Zap, text: "High-performance storage architecture" },
                    { icon: Database, text: "Automated intelligent backups" },
                    { icon: Shield, text: "Military-grade encryption" },
                    { icon: Shield, text: "Granular access controls" },
                    { icon: Globe, text: "99.99% uptime guarantee" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300 group-hover:text-white transition-all duration-300 transform group-hover:translate-x-1">
                      <div className="w-5 h-5 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg flex items-center justify-center mr-3 shadow-sm">
                        <item.icon className="w-2.5 h-2.5 text-white" />
                      </div>
                      <span className="text-base">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Bottom gradient accent */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 via-emerald-500 to-teal-500 opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Web3Platforms;