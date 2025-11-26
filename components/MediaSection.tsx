import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const MediaSection: React.FC = () => {
  return (
    <section id="music" className="py-24 bg-[#0a0a0a] relative overflow-hidden border-b border-white/5">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-smarta-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
            <div className="flex items-center gap-4 mb-12">
                <span className="w-12 h-[1px] bg-smarta-highlight"></span>
                <span className="text-smarta-highlight font-mono text-xs tracking-widest uppercase">Latest Releases</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-16 leading-none">
                Sight & <span className="text-transparent bg-clip-text bg-gradient-to-r from-smarta-highlight to-smarta-accent">Sound</span>
            </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Video Section - Autoplaying */}
            <div className="lg:col-span-7">
                <FadeIn delay={200} className="h-full">
                    <div className="relative aspect-video w-full bg-black border border-white/10 group overflow-hidden shadow-2xl">
                        <video 
                            autoPlay 
                            muted 
                            loop 
                            playsInline
                            className="w-full h-full object-cover opacity-80"
                            poster="https://picsum.photos/1920/1080?random=301"
                        >
                            {/* Stock footage of studio/music environment */}
                            <source src="https://assets.mixkit.co/videos/preview/mixkit-man-working-in-music-studio-at-night-42207-large.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        
                        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none">
                            <div className="mt-auto w-full text-center bg-black/60 backdrop-blur-md p-4 border-t border-smarta-accent/50">
                                <span className="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-bold uppercase tracking-wider mb-2 animate-pulse">Now Playing</span>
                                <h3 className="text-2xl md:text-3xl font-display font-bold text-white uppercase tracking-tight">Smartaman042 - "Texas Forever"</h3>
                                <p className="text-gray-300 text-xs font-mono mt-1 uppercase tracking-widest">Official Music Video</p>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>

            {/* Spotify Player Section */}
            <div className="lg:col-span-5 flex flex-col">
                <FadeIn delay={400} className="h-full">
                    <div className="bg-smarta-card border border-white/5 p-2 h-full flex flex-col min-h-[450px] shadow-2xl relative">
                         <div className="absolute -top-3 -right-3 z-20">
                             <span className="flex h-6 w-6 relative">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-6 w-6 bg-green-500"></span>
                             </span>
                         </div>
                        
                        <iframe 
                            style={{ borderRadius: '12px' }} 
                            src="https://open.spotify.com/embed/artist/3bA2a8FnW6zjYgbOw8fsYW?utm_source=generator&theme=0" 
                            width="100%" 
                            height="100%" 
                            frameBorder="0" 
                            allowFullScreen 
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                            loading="lazy"
                            className="flex-grow min-h-[352px]"
                        ></iframe>
                        
                        <div className="p-4 mt-2 border-t border-white/5 flex justify-between items-center bg-black/20 rounded-b-lg">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                <span className="text-xs text-gray-500 font-mono tracking-wider">STREAMING ON SPOTIFY</span>
                            </div>
                            <a href="https://smartaman042.com" target="_blank" rel="noopener noreferrer" className="text-xs font-bold uppercase tracking-wider text-smarta-accent hover:text-white flex items-center gap-2 transition-colors">
                                Official Site <ExternalLink className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
      </div>
    </section>
  );
};