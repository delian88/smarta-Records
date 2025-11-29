import React from 'react';
import { Calendar, MapPin, Star, Ticket, Zap, Radio } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-smarta-dark relative border-b border-white/5 overflow-hidden">
      {/* Dynamic Background FX */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px] animate-pulse-slow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex items-center gap-4 mb-12">
             <span className="w-12 h-[1px] bg-smarta-accent"></span>
             <span className="text-smarta-accent font-mono text-xs tracking-widest uppercase">Live Experiences</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter mb-16 leading-none">
             Upcoming <span className="text-transparent bg-clip-text bg-gradient-to-r from-smarta-accent to-purple-600">Events</span>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Event Poster Card */}
          <div className="lg:col-span-12">
            <FadeIn delay={200}>
              <div className="relative overflow-hidden group bg-black border border-white/10 hover:border-smarta-accent/50 transition-all duration-700 rounded-2xl shadow-2xl hover:shadow-smarta-accent/20">
                
                {/* Animated Shine/Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/10 via-black to-purple-900/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Moving Shine Stripe */}
                <div className="absolute -inset-full top-0 block h-full w-1/2 -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-5 group-hover:animate-shine pointer-events-none" />
                
                <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-12">
                  {/* Date Badge */}
                  <div className="flex-shrink-0 relative group/date cursor-default">
                     <div className="absolute inset-0 bg-smarta-accent blur-md opacity-20 group-hover/date:opacity-60 transition-opacity duration-500 rounded-full"></div>
                     <div className="relative flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white text-black font-display font-black border-4 border-smarta-accent rotate-3 group-hover/date:-rotate-2 transition-transform duration-500 shadow-xl z-10">
                        <span className="text-3xl md:text-4xl">21</span>
                        <span className="text-sm md:text-base uppercase tracking-wider">DEC</span>
                        <span className="text-xs font-mono mt-1">2025</span>
                      </div>
                  </div>

                  <div className="flex-grow space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-smarta-accent/20 border border-smarta-accent/50 text-smarta-highlight text-[10px] font-bold uppercase tracking-wider mb-4 rounded-full">
                        <Star className="w-3 h-3 fill-current animate-spin-slow" /> AfroSyde Festival Presents
                      </div>
                      <h3 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tight mb-2 leading-none">
                        GOD WIN <span className="text-transparent bg-clip-text bg-gradient-to-r from-smarta-accent via-purple-400 to-smarta-accent bg-[length:200%_200%] animate-gradient-x">CONCERT</span>
                      </h3>
                      <p className="text-gray-400 font-mono text-sm tracking-widest uppercase flex items-center gap-2">
                         Powered by Smartaman Multimedia Group LLC <Zap className="w-3 h-3 text-yellow-400" />
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4 group/item">
                          <MapPin className="w-6 h-6 text-smarta-accent flex-shrink-0 group-hover/item:text-white transition-colors" />
                          <div>
                            <h4 className="text-white font-bold uppercase text-sm group-hover/item:text-smarta-highlight transition-colors">Venue</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Debaylux Hotel & Suites<br/>
                              No 7 Lekki Beach Road
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4 group/item">
                          <Radio className="w-6 h-6 text-smarta-accent flex-shrink-0 group-hover/item:text-white transition-colors" />
                          <div>
                            <h4 className="text-white font-bold uppercase text-sm group-hover/item:text-smarta-highlight transition-colors">Activities</h4>
                            <p className="text-gray-400 text-sm">
                              Talent Hunt • Music Policy • Artist Performances
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 p-6 border-l-2 border-smarta-accent relative overflow-hidden group/feat">
                         <div className="absolute inset-0 bg-smarta-accent/10 translate-x-[-100%] group-hover/feat:translate-x-0 transition-transform duration-500"></div>
                         <h4 className="relative z-10 text-smarta-highlight font-mono text-xs uppercase tracking-widest mb-3">Featuring Live Performance By</h4>
                         <p className="relative z-10 text-2xl font-display font-bold text-white uppercase mb-1">LANO ROY</p>
                         <p className="relative z-10 text-xs text-gray-400 font-medium uppercase group-hover/feat:text-white transition-colors">
                           Smarta Record Newly Signed Artist &<br/> Brand Ambassador Afro Syde Festival
                         </p>
                      </div>
                    </div>

                    {/* Sponsors */}
                    <div className="pt-8 mt-4">
                      <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4 text-center md:text-left">Official Sponsors</p>
                      <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start opacity-70">
                        {/* Placeholder Logos using text since images aren't provided */}
                        <div className="h-12 border border-white/20 px-4 flex items-center justify-center bg-white/5 hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                          <span className="font-display font-bold text-xs">AFRO SYDE</span>
                        </div>
                        <div className="h-12 border border-white/20 px-4 flex items-center justify-center bg-white/5 hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                          <span className="font-display font-bold text-xs">SMARTAMAN</span>
                        </div>
                        <div className="h-12 border border-white/20 px-4 flex items-center justify-center bg-white/5 hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                          <span className="font-display font-bold text-xs">LIGHT & AMORE</span>
                        </div>
                         <div className="h-12 border border-white/20 px-4 flex items-center justify-center bg-white/5 hover:bg-white hover:text-black transition-all duration-300 cursor-default">
                          <span className="font-display font-bold text-xs">DEBAYLUX</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex flex-col justify-end">
                    <button className="relative px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest overflow-hidden group/btn hover:text-white transition-colors duration-300 shadow-lg hover:shadow-smarta-accent/50">
                       <span className="absolute inset-0 w-full h-full bg-smarta-accent scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></span>
                       <span className="relative flex items-center gap-2">
                          <Ticket className="w-4 h-4" /> Get Tickets
                       </span>
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
};