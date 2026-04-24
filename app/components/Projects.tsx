import { motion } from 'motion/react';
import { ExternalLink} from 'lucide-react';

const projects = [
  {
    title: "Gadget Inventory System",
    description: "A web-based inventory system designed to manage stock, track incoming and outgoing items, and maintain data history. Built with a focus on structured data handling and efficient workflows for daily operations.",
    tags: ["Laravel", "TailwindCSS"],
    image: "/image.png",
    link: "#",
    github: "#"
  },
  {
    title: "Point of Sale",
    description: "A simple point of sale system for handling transactions, recording sales, and calculating totals in real time. Designed to streamline the checkout process with a clean and intuitive interface.",
    tags: ["Next.js", "Golang"],
    image: "/image2.png",
    link: "#",
    github: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 md:px-12 py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-slate-200 pb-12">
        <div className="max-w-xl">
          <span className="label-mono mb-6 block">02 / Works</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter uppercase">
            Work Archive<span className="text-slate-300">.</span>
          </h2>
        </div>
        <p className="mt-8 md:mt-0 text-slate-500 max-w-xs font-medium uppercase text-[10px] tracking-widest leading-loose">
          A selection of projects that balance geometric stability with digital fluidity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="group cursor-pointer"
          >
            <div className={`aspect-4/3 geometric-card ${index === 0 ? 'bg-slate-900 border-slate-900' : ''}`}
            >
              
              <div className="flex justify-between items-start">
                <span className={`label-mono ${index === 0 ? 'text-slate-500' : ''}`}>
                  0{index + 1} {project.tags.map((pr, i) => (` / ${pr}`))}
                </span>
                <div className={`w-3 h-3 ${index === 0 ? 'bg-white' : 'bg-slate-900'}`}></div>
              </div>
            <img src={project.image} className='object-contain rounded-lg h-full w-full my-4 ' alt="" />
              
              <div className={`${index === 0 ? 'text-slate-900' : 'text-white'}`}>
                <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                <p className={`text-sm ${index === 0 ? 'text-slate-400' : 'text-slate-500'}`}>{project.description}</p>
              </div>
            </div>
            
            <div className="mt-4 flex gap-4">
              <a href={project.link} className="text-[10px] font-bold uppercase tracking-widest hover:text-slate-400">Launch</a>
              <a href={project.github} className="text-[10px] font-bold uppercase tracking-widest hover:text-slate-400">Source</a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
