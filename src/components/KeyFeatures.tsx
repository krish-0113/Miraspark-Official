// import { Database, Zap, Shield, Cloud } from "lucide-react";

// const KeyFeatures = () => {
//   const features = [
//     {
//       icon: Database,
//       title: "Decentralized IPFS Node",
//       description: "Custom IPFS node with fast, reliable performance, enhanced security, scalable storage, and easy integration for seamless management.",
//       gradient: "from-blue-500 to-cyan-500",
//       bgGradient: "from-blue-50 to-cyan-50"
//     },
//     {
//       icon: Zap,
//       title: "Reliable Performance",
//       description: "Optimized with smart caching, multi-node redundancy, and dedicated gateways, ensuring low latency and high availability.",
//       gradient: "from-purple-500 to-pink-500",
//       bgGradient: "from-purple-50 to-pink-50"
//     },
//     {
//       icon: Shield,
//       title: "Enhanced Security & Privacy",
//       description: "Private IPFS networks with end-to-end encryption and access control, preventing unauthorized data access and manipulation.",
//       gradient: "from-green-500 to-emerald-500",
//       bgGradient: "from-green-50 to-emerald-50"
//     },
//     {
//       icon: Cloud,
//       title: "Scalable & Cost-Efficient",
//       description: "Flexible infrastructure that scales with your needs, reducing storage costs while maintaining decentralization.",
//       gradient: "from-orange-500 to-red-500",
//       bgGradient: "from-orange-50 to-red-50"
//     }
//   ];

//   return (
//     <section className="relative">
//       <div className="text-center mb-12">
//         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6">
//           Key Features: Decentralized IPFS Node
//         </h2>
//         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//           Powerful features designed to revolutionize your decentralized storage experience
//         </p>
//       </div>

//       <div className="grid md:grid-cols-2 gap-8">
//         {features.map((feature, index) => (
//           <div
//             key={index}
//             className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
//           >
//             <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient}`}></div>
//             <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/60"></div>
            
//             <div className="relative z-10 p-8">
//               <div className="flex items-start mb-6">
//                 <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300`}>
//                   <feature.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="flex-grow">
//                   <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
//                     {feature.title}
//                   </h3>
//                 </div>
//               </div>
              
//               <p className="text-gray-700 leading-relaxed text-lg">
//                 {feature.description}
//               </p>
              
//               {/* Additional feature - Easy Management for the last item */}
//               {index === 3 && (
//                 <div className="mt-6 p-4 bg-white/60 rounded-xl border border-white/40">
//                   <h4 className="font-semibold text-gray-800 mb-2">Easy Management & Integration</h4>
//                   <p className="text-gray-700">
//                     Plug-and-play deployment with an intuitive dashboard and developer-friendly APIs 
//                     for seamless integration into any application.
//                   </p>
//                 </div>
//               )}
//             </div>
            
//             {/* Animated border effect */}
//             <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default KeyFeatures;
