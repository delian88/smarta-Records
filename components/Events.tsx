import React from 'react';
import { Calendar, MapPin, Star, Ticket, Zap } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

export const Events: React.FC = () => {
  return (
    <section id="events" className="py-24 bg-smarta-dark relative border-b border-white/5">
      {/* Background FX */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      
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
              <div className="relative overflow-hidden group bg-black border border-white/10 hover:border-smarta-accent transition-all duration-500 rounded-none">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-black/80 z-0"></div>
                
                <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-12">
                  {/* Date Badge */}
                  <div className="flex-shrink-0 flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white text-black font-display font-black border-4 border-smarta-accent rotate-3 group-hover:rotate-0 transition-transform duration-500">
                    <span className="text-3xl md:text-4xl">21</span>
                    <span className="text-sm md:text-base uppercase tracking-wider">DEC</span>
                    <span className="text-xs font-mono mt-1">2025</span>
                  </div>

                  <div className="flex-grow space-y-6">
                    <div>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-smarta-accent/20 border border-smarta-accent/50 text-smarta-highlight text-[10px] font-bold uppercase tracking-wider mb-4 rounded-full">
                        <Star className="w-3 h-3 fill-current" /> AfroSyde Festival Presents
                      </div>
                      <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tight mb-2">
                        GOD WIN <span className="text-smarta-accent">CONCERT</span>
                      </h3>
                      <p className="text-gray-400 font-mono text-sm tracking-widest uppercase">
                        Powered by Smartaman Multimedia Group LLC
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 border-t border-white/10 pt-6">
                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <MapPin className="w-6 h-6 text-smarta-accent flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-bold uppercase text-sm">Venue</h4>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              Debaylux Hotel & Suites<br/>
                              No 7 Lekki Beach Road
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-4">
                          <Zap className="w-6 h-6 text-smarta-accent flex-shrink-0" />
                          <div>
                            <h4 className="text-white font-bold uppercase text-sm">Activities</h4>
                            <p className="text-gray-400 text-sm">
                              Talent Hunt • Music Policy • Artist Performances
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white/5 p-6 border-l-2 border-smarta-accent">
                         <h4 className="text-smarta-highlight font-mono text-xs uppercase tracking-widest mb-3">Featuring Live Performance By</h4>
                         <p className="text-2xl font-display font-bold text-white uppercase mb-1">LANO ROY</p>
                         <p className="text-xs text-gray-400 font-medium uppercase">
                           Smarta Record Newly Signed Artist &<br/> Brand Ambassador Afro Syde Festival
                         </p>
                      </div>
                    </div>

                    {/* Sponsors */}
                    <div className="pt-8 mt-4">
                      <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mb-4 text-center md:text-left">Official Sponsors</p>
                      <div className="flex flex-wrap gap-6 items-center justify-center md:justify-start opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholder Logos using text since images aren't provided */}
                        <div className="h-12 border border-white/20 px-4 flex items-center justify-center bg-white/5">
                          <span className="font-display font-bold text-white text-xs">AFRO SYDE</span>
                        </div>
                        <div className="h-12 border border-white/20 px-4 flex items-center justify-center bg-white/5">
                          <span className="font-display font-bold text-white text-xs">SMARTAMAN</span>
                        </div>
                        <div className="h-12 border border-white/20 px-4 flex items-center justify-center bg-white/5">
                          <span className="font-display font-bold text-white text-xs">LIGHT & AMORE</span>
                        </div>
                         <div className="h-12 border border-white/20 px-4 flex items-center justify-center bg-white/5">
                          <span className="font-display font-bold text-white text-xs">DEBAYLUX</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex-shrink-0 flex flex-col justify-end">
                    <button className="px-8 py-4 bg-white text-black font-display font-bold uppercase tracking-widest hover:bg-smarta-accent hover:text-white transition-all duration-300 flex items-center gap-2 whitespace-nowrap">
                       <Ticket className="w-4 h-4" /> Get Tickets
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