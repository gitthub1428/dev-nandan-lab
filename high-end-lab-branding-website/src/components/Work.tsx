import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Neon Ventures',
    category: 'Brand Identity',
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?w=800',
    color: 'from-purple-600 to-pink-600',
  },
  {
    title: 'Quantum Tech',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    title: 'EcoSphere',
    category: 'Digital Strategy',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    color: 'from-green-600 to-emerald-600',
  },
  {
    title: 'Urban Pulse',
    category: 'Mobile App',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800',
    color: 'from-orange-600 to-red-600',
  },
  {
    title: 'Stellar Finance',
    category: 'Brand Revamp',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    title: 'Apex Gaming',
    category: 'Interactive Experience',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
    color: 'from-pink-600 to-rose-600',
  },
];

const Work = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-purple-950/20 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100px_100px]" />
      
      <motion.div
        className="absolute top-1/3 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          x: [-30, 30, -30],
          y: [-30, 30, -30],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Featured Work
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A showcase of our most impactful projects that transformed brands.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden cursor-pointer"
            >
              {/* Image */}
              <div className="aspect-[4/5] relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-90 transition-opacity duration-500`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <motion.span
                    className="text-white/80 text-sm mb-2"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.category}
                  </motion.span>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                  <motion.div
                    className="flex items-center gap-2 text-white"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="font-semibold">View Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.div>
                </div>
              </div>
              
              {/* Hover Border Glow */}
              <div className={`absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-500 pointer-events-none`} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 rounded-full font-semibold text-white hover:bg-white/20 transition-colors flex items-center gap-3 mx-auto"
          >
            View All Projects
            <ExternalLink className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
