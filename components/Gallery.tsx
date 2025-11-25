import React from 'react';
import { FadeIn } from './ui/FadeIn';

export const Gallery: React.FC = () => {
  const images = [
    { src: "https://picsum.photos/800/800?random=1", size: "col-span-1 md:col-span-1 row-span-1" },
    { src: "https://picsum.photos/800/1200?random=2", size: "col-span-1 md:col-span-1 row-span-2" },
    { src: "https://picsum.photos/1200/800?random=3", size: "col-span-1 md:col-span-2 row-span-1" },
    { src: "https://picsum.photos/800/800?random=4", size: "col-span-1 md:col-span-1 row-span-1" },
    { src: "https://picsum.photos/800/1000?random=5", size: "col-span-1 md:col-span-1 row-span-2" },
    { src: "https://picsum.photos/900/900?random=6", size: "col-span-1 md:col-span-1 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-smarta-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <FadeIn>
            <h2 className="text-5xl md:text-7xl font-display font-black text-white uppercase tracking-tighter leading-none">
              Life At <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-smarta-highlight to-smarta-accent">Smarta</span>
            </h2>
          </FadeIn>
          <FadeIn delay={200} direction="left">
            <p className="text-gray-400 mt-6 md:mt-0 md:text-right max-w-sm font-light border-l border-smarta-accent pl-4">
              Behind the scenes. In the booth. On the stage. <br/>
              Documenting the rise of the next generation.
            </p>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((img, idx) => (
            <FadeIn key={idx} delay={idx * 100} className={`relative group overflow-hidden ${img.size}`}>
               <div className="w-full h-full">
                <img 
                  src={img.src} 
                  alt={`Gallery ${idx}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="text-smarta-highlight text-xs font-mono uppercase tracking-widest mb-1 block">Smarta Records</span>
                        <span className="text-white font-display font-bold text-xl uppercase">Backstage Access</span>
                    </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
            <button className="px-10 py-4 border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 text-sm">
                View Full Archive
            </button>
        </div>
      </div>
    </section>
  );
};