import React, { useState } from 'react';
import { Sparkles, Send, Loader2 } from 'lucide-react';
import { generateLyrics } from '../services/geminiService';
import { FadeIn } from './ui/FadeIn';

export const AiAssistant: React.FC = () => {
  const [topic, setTopic] = useState('');
  const [mood, setMood] = useState('Energetic');
  const [lyrics, setLyrics] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!topic) return;

    setIsLoading(true);
    const result = await generateLyrics(topic, mood);
    setLyrics(result);
    setIsLoading(false);
  };

  return (
    <section id="creative-ai" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-indigo-900/10" />
      <div className="absolute -right-40 -top-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -left-40 bottom-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        <FadeIn>
            <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-4">
                    <Sparkles className="w-3 h-3" /> Powered by Gemini AI
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Writer's Block?</h2>
                <p className="text-gray-400">
                    Use our Smarta Creative Assistant to spark your next hit. Enter a topic, pick a vibe, and let the AI drop a hook.
                </p>
            </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={200} direction="right" className="h-full">
                <form onSubmit={handleGenerate} className="glass-panel p-6 rounded-2xl h-full flex flex-col justify-center">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">What's the song about?</label>
                            <input 
                                type="text" 
                                value={topic}
                                onChange={(e) => setTopic(e.target.value)}
                                placeholder="e.g. Late nights in Houston"
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                            />
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">Vibe / Mood</label>
                            <select 
                                value={mood}
                                onChange={(e) => setMood(e.target.value)}
                                className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:ring-2 focus:ring-indigo-500 outline-none"
                            >
                                <option value="Hype">Hype / Energetic</option>
                                <option value="Melodic">Melodic / Emotional</option>
                                <option value="Dark">Dark / Gritty</option>
                                <option value="Soulful">Soulful / Smooth</option>
                            </select>
                        </div>

                        <button 
                            type="button" // Change to button for safety if form submit acts up, but form submit is fine
                            onClick={handleGenerate}
                            disabled={isLoading || !topic}
                            className={`w-full py-3 px-6 rounded-lg font-bold flex items-center justify-center gap-2 transition-all ${
                                isLoading || !topic 
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/25'
                            }`}
                        >
                            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                            {isLoading ? 'Writing...' : 'Generate Lyrics'}
                        </button>
                    </div>
                </form>
            </FadeIn>

            <FadeIn delay={400} direction="left" className="h-full">
                <div className="glass-panel p-6 rounded-2xl h-full min-h-[300px] relative border border-white/10 flex flex-col">
                    <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">AI Output</h3>
                    <div className="flex-grow bg-black/40 rounded-xl p-6 font-mono text-sm leading-relaxed text-indigo-100 overflow-y-auto">
                        {lyrics ? (
                            <div className="whitespace-pre-line">{lyrics}</div>
                        ) : (
                            <div className="h-full flex flex-col items-center justify-center text-gray-600">
                                <Music className="w-8 h-8 mb-2 opacity-20" />
                                <p>Your lyrics will appear here...</p>
                            </div>
                        )}
                    </div>
                </div>
            </FadeIn>
        </div>
      </div>
    </section>
  );
};

// Simple icon component for placeholder
function Music(props: { className?: string }) {
    return (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" height="24" viewBox="0 0 24 24" 
          fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
          className={props.className}
        >
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </svg>
    )
}
