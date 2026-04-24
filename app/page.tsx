/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
'use client'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'motion/react';
import Image from 'next/image'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 selection:bg-slate-900 selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* About Section */}
        <section id="about" className="max-w-7xl mx-auto px-8 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start border-t border-slate-200 pt-24">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="label-mono mb-8 block">01 / Profile</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-12 leading-tight uppercase">
                build <br />
                reliable <br /> 
                systems<span className="text-slate-300">.</span>
              </h2>
              <div className="space-y-8 text-slate-500 font-medium leading-relaxed max-w-lg text-lg">
                <p>
                  I’m a self-taught fullstack developer with a background in design. I focus on building web applications that are not only functional, but also structured, maintainable, and easy to use.
                </p>
                <p>
                  Over the past year, I’ve been developing personal projects and exploring modern web technologies — from backend logic to frontend interfaces. This process has shaped how I approach problems: with attention to detail, clarity in structure, and a preference for practical solutions.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-12 mt-16 border-t border-slate-200 pt-12">
                <div>
                  <h4 className="label-mono mb-6">Stack</h4>
                  <ul className="text-xs font-bold uppercase tracking-widest space-y-3">
                    <li>Laravel</li>
                    <li>NextJS</li>
                    <li>React / Vite</li>
                    <li>REST APIs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="label-mono mb-6">Core</h4>
                  <ul className="text-xs font-bold uppercase tracking-widest space-y-3">
                    <li>PHP</li>
                    <li>Typescript</li>
                    <li>Node.js</li>
                    <li>Mysql</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/5] bg-white border border-slate-200 p-4"
            >
              <img 
                src="/1769505634409.jpg"
                alt="Profile"
                className="w-full h-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-slate-900 -z-10"></div>
            </motion.div>
          </div>
        </section>

        <Projects />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
