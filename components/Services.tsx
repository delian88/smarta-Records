import React from 'react';
import { Mic2, Film, Globe, Zap, Music, BarChart3, ArrowRight } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

const services = [
  {
    title: "Production",
    subtitle: "Beat Creation & Composition",
    desc: "World-class beat creation tailored to your unique sound signature.",
    icon: <Music className="w-8 h-8" />,
    bg: "bg-gradient-to-br from-indigo-900/50 to-black"
  },
  {
    title: "Engineering",
    subtitle: "Mixing & Mastering",
    desc: "Professional mixing ensuring your tracks are streaming compliant.",
    icon: <Mic2 className="w-8 h-8" />,
    bg: "bg-gradient-to-br from-purple-900/50 to-black"
  },
  {
    title: "Visuals",
    subtitle: "Direction & Cinema",
    desc: "Cinematic music videos directed by Smartaman Multimedia Group.",
    icon: <Film className="w-8 h-8" />,
    bg: "bg-gradient-to-br from-blue-900/50 to-black"
  },
  {
    title: "Strategy",
    subtitle: "Brand Management",
    desc: "Comprehensive artist development and digital presence strategy.",
    icon: <Zap className="w-8 h-8" />,
    bg: "bg-gradient-to-br from-pink-900/50 to-black"
  },
  {
    title: "Distribution",
    subtitle: "Global Reach",
    desc: "Getting your music on all major platforms including Spotify & Apple Music.",
    icon: <Globe className="w-8 h-8" />,
    bg: "bg-gradient-to-br from-emerald-900/50 to-black"
  },
  {
    title: "Growth",
    subtitle: "Analytics & Marketing",
    desc: "Data-driven marketing campaigns to grow your fanbase.",
    icon: <BarChart3 className="w-8 h-8" />,
    bg: "bg-gradient-to-br from-orange-900/50 to-black"
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-smarta-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Header Column */}
            <div className="lg:col-span-4 sticky top-24 self-start">
                <FadeIn>
                    <div className="mb-8">
                        <span className="text-smarta-highlight font-mono text-xs tracking-widest uppercase mb-2 block">
                            Smartaman Multimedia Group
                        </span>
                        <h2 className="text-5xl md:text-6xl font-display font-black text-white mb-6 leading-none">
                            THE <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">SERVICES</span>
                        </h2>
                        <p className="text-gray-400 leading-relaxed mb-8 border-l border-white/10 pl-4">
                            From the visionary mind of Smartaman042, we provide an ecosystem for artists to thrive. 
                            We don't just record music; we build careers.
                        </p>
                        
                        <a href="https://smartaman042.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 px-6 py-3 border border-white/20 hover:border-smarta-accent transition-all duration-300 group">
                            <span className="text-sm font-bold uppercase tracking-wider text-white group-hover:text-smarta-highlight">Visit Smartaman042.com</span>
                            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* Grid Column */}
            <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, idx) => (
                        <FadeIn key={idx} delay={idx * 100}>
                            <div className={`group relative h-full min-h-[280px] p-8 border border-white/5 hover:border-smarta-accent/50 transition-all duration-500 overflow-hidden ${service.bg}`}>
                                <div className="absolute inset-0 bg-noise opacity-10"></div>
                                <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-100 group-hover:text-smarta-accent transition-all duration-500 transform group-hover:scale-110">
                                    {service.icon}
                                </div>
                                
                                <div className="relative z-10 h-full flex flex-col justify-end">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <h4 className="text-xs font-mono text-smarta-highlight mb-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                            {service.subtitle}
                                        </h4>
                                        <h3 className="text-3xl font-display font-bold text-white mb-3">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                                            {service.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};