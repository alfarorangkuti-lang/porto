'use client'

import { motion } from 'motion/react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Menu, X, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white py-4 border-b border-slate-200' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 md:px-12 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-slate-900 rounded-sm"></div>
          <span className="font-bold text-xl tracking-tight uppercase">ROO.</span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-slate-900 transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center space-x-6 pl-6 border-l border-slate-200"
          >
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><FaGithub className="w-4 h-4" /></a>
            <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors"><FaLinkedin className="w-4 h-4" /></a>
          </motion.div>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-primary">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white absolute top-full left-0 right-0 border-b border-neutral-100 p-6 flex flex-col space-y-4"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-secondary hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 pt-4 border-t border-neutral-100">
            <a href="#" className="text-secondary hover:text-primary"><FaGithub className="w-6 h-6" /></a>
            <a href="#" className="text-secondary hover:text-primary"><FaLinkedin className="w-6 h-6" /></a>
            <a href="#" className="text-secondary hover:text-primary"><Mail className="w-6 h-6" /></a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
