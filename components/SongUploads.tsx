import React, { useState, useRef, useCallback } from 'react';
import { UploadCloud, X, CheckCircle, FileAudio, AlertCircle, Loader2 } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';

interface UploadedFile {
  id: string;
  file: File;
  progress: number;
  status: 'uploading' | 'completed' | 'error';
}

export const SongUploads: React.FC = () => {
  const [dragActive, setDragActive] = useState(false);
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setFiles(prev => prev.map(f => 
          f.id === fileId ? { ...f, progress: 100, status: 'completed' } : f
        ));
      } else {
        setFiles(prev => prev.map(f => 
          f.id === fileId ? { ...f, progress } : f
        ));
      }
    }, 300);
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;
    
    const validFiles: UploadedFile[] = Array.from(newFiles)
      .filter(file => file.type.startsWith('audio/'))
      .map(file => ({
        id: Math.random().toString(36).substring(7),
        file,
        progress: 0,
        status: 'uploading'
      }));

    if (validFiles.length === 0 && newFiles.length > 0) {
        alert("Please upload audio files only (MP3, WAV, AIFF).");
        return;
    }

    setFiles(prev => [...prev, ...validFiles]);
    validFiles.forEach(f => simulateUpload(f.id));
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFiles(e.dataTransfer.files);
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFiles(e.target.files);
    }
  };

  const removeFile = (id: string) => {
      setFiles(prev => prev.filter(f => f.id !== id));
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const formatBytes = (bytes: number, decimals = 2) => {
    if (!+bytes) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
  };

  return (
    <section id="uploads" className="py-24 bg-smarta-card relative border-y border-white/5">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
            <FadeIn>
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
                    <div>
                        <h2 className="text-4xl font-display font-black text-white uppercase tracking-tighter">
                            Demo <span className="text-smarta-highlight">Drop</span>
                        </h2>
                        <p className="text-gray-400 mt-2 font-mono text-xs tracking-widest">
                            DIRECT LINE TO A&R // SECURE UPLOAD
                        </p>
                    </div>
                    <div className="hidden md:block">
                        <span className="inline-block w-3 h-3 bg-red-500 rounded-full animate-pulse mr-2"></span>
                        <span className="text-xs font-bold text-gray-400 uppercase">Portal Active</span>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={200}>
                <div 
                    className={`relative border border-dashed rounded-none transition-all duration-300 group p-12 ${
                        dragActive 
                        ? 'border-smarta-accent bg-smarta-accent/5' 
                        : 'border-white/20 bg-black/40 hover:border-white/40'
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={onDrop}
                >
                    <input 
                        ref={inputRef}
                        type="file" 
                        className="hidden" 
                        multiple 
                        accept="audio/*"
                        onChange={handleChange}
                    />
                    
                    <div className="flex flex-col items-center justify-center text-center">
                        <UploadCloud className={`w-12 h-12 mb-6 text-gray-500 transition-colors duration-300 ${dragActive ? 'text-smarta-accent' : 'group-hover:text-white'}`} />
                        <h3 className="text-xl font-display font-bold text-white mb-2 uppercase">Drag & Drop Audio Files</h3>
                        <p className="text-gray-500 text-sm mb-8 max-w-xs mx-auto">MP3, WAV, AIFF supported. Maximum file size 50MB per track.</p>
                        
                        <button 
                            onClick={onButtonClick}
                            className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-smarta-accent hover:text-white transition-all duration-300 text-xs"
                        >
                            Select Files
                        </button>
                    </div>
                </div>
            </FadeIn>

            {files.length > 0 && (
                <div className="mt-8 space-y-px bg-white/5 border border-white/10">
                    {files.map((file) => (
                        <div key={file.id} className="p-4 flex items-center gap-4 bg-black/40 hover:bg-white/5 transition-colors">
                            <div className="w-8 h-8 flex items-center justify-center text-smarta-highlight">
                                <FileAudio className="w-5 h-5" />
                            </div>
                            
                            <div className="flex-grow min-w-0">
                                <div className="flex justify-between items-center mb-1">
                                    <h5 className="text-white font-medium text-sm truncate pr-4">{file.file.name}</h5>
                                    <span className="text-xs text-gray-500 font-mono">{formatBytes(file.file.size)}</span>
                                </div>
                                <div className="w-full bg-gray-800 h-1">
                                    <div 
                                        className={`h-full transition-all duration-300 ease-out ${file.status === 'completed' ? 'bg-green-500' : 'bg-smarta-accent'}`}
                                        style={{ width: `${file.progress}%` }}
                                    ></div>
                                </div>
                            </div>

                            <div className="flex-shrink-0 ml-4">
                                {file.status === 'uploading' && <Loader2 className="w-4 h-4 text-smarta-accent animate-spin" />}
                                {file.status === 'completed' && <CheckCircle className="w-4 h-4 text-green-500" />}
                                {file.status === 'error' && <AlertCircle className="w-4 h-4 text-red-500" />}
                            </div>

                            <button onClick={() => removeFile(file.id)} className="text-gray-600 hover:text-white transition-colors">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>
            )}
            
            {files.length > 0 && (
                <div className="mt-6 flex justify-end">
                     <button className="px-8 py-3 bg-smarta-accent text-white font-bold uppercase tracking-widest hover:bg-smarta-accentHover transition-colors text-xs">
                        Submit Demos
                     </button>
                </div>
            )}
        </div>
    </section>
  );
};