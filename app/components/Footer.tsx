export default function Footer() {
  const year = new Date().getFullYear();
  
  return (
    <footer className="max-w-7xl mx-auto px-8 md:px-12 py-12 border-t border-slate-200">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#" className="hover:text-slate-900 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Github</a>
          <a href="#" className="hover:text-slate-900 transition-colors">Dribbble</a>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"></div>
          <span className="text-[10px] font-medium text-slate-600 italic tracking-wider">
            Available for new projects in {year}
          </span>
        </div>
      </div>
    </footer>
  );
}
