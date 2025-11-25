import React from 'react';
import { Disc } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          <div className="flex items-center gap-2 mb-6">
             <Disc className="w-6 h-6 text-indigo-500" />
             <span className="font-display font-bold text-xl text-white">SMARTA RECORDS</span>
          </div>
          
          <p className="text-gray-500 text-sm text-center max-w-md mb-8">
            Innovating the soundscape from Texas to the World. 
            Join the revolution.
          </p>

          <div className="w-full h-px bg-white/5 mb-8"></div>

          <div className="flex flex-col md:flex-row items-center justify-between w-full text-xs text-gray-600">
            <p>&copy; {new Date().getFullYear()} Smarta Records. All rights reserved.</p>
            <p className="mt-2 md:mt-0 font-medium">
              Powered by <span className="text-indigo-500">smartaman Multimedia group</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};