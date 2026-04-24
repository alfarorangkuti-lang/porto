import { motion } from 'motion/react';
import { Mail, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="max-w-7xl mx-auto px-8 md:px-12 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        <div>
          <span className="label-mono mb-6 block">03 / Connect</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 leading-none">
            Ready for <br /> our next <br /> move?
          </h2>
        </div>
        
        <div className="bg-slate-900 p-12 md:p-16 text-white flex flex-col justify-between aspect-square md:aspect-auto">
          <div className="flex justify-between items-start mb-20">
            <Mail className="w-8 h-8 text-slate-500" />
            <div className="w-4 h-4 bg-white"></div>
          </div>
          
          <div>
            <p className="text-slate-400 mb-2 label-mono">Inquiry</p>
            <h3 className="text-2xl md:text-4xl font-bold mb-8">alfarorangkuti<br/>@gmail.com</h3>
            <a 
              href="mailto:alfarorangkuti@gmail.com" 
              className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-2 hover:border-slate-500 transition-colors"
            >
              Send Message <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
