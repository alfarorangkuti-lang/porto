import { motion } from 'motion/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-8 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-end justify-between border-b border-slate-200 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="label-mono mb-8 block">Full Stack Developer</span>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.95] mb-8 text-slate-900">
            Digital Product <br /> 
            App Developer<span className="text-slate-300">.</span>
          </h1>
          <p className="text-xl text-slate-500 max-w-lg leading-relaxed font-medium">
            Alfaro — Specializing in building clean and high-performance app.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden md:flex flex-col items-end"
        >
          <div className="w-48 h-48 bg-slate-200 rounded-full mb-6 flex items-center justify-center overflow-hidden border-4 border-white shadow-sm">
            <img 
                src="/1769505634409.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
          </div>
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400">Based in Jakarta</span>
        </motion.div>
      </div>

      <div className="mt-12 flex flex-wrap gap-12">
        <div className="flex flex-col">
          <span className="label-mono mb-2">Available for</span>
          <span className="text-sm font-bold uppercase tracking-wider">New Projects 2026</span>
        </div>
        <div className="flex flex-col">
          <span className="label-mono mb-2">Role</span>
          <span className="text-sm font-bold uppercase tracking-wider">Fulstack Developer</span>
        </div>
        <div className="flex flex-col ml-auto">
          <motion.a 
            href="#projects"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-slate-900 pr-2"
          >
            Scroll to work <ArrowRight className="w-3 h-3" />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
