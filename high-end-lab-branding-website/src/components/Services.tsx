import { motion } from 'framer-motion';
import { Palette, Code, Rocket, BarChart, Smartphone, Globe } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    description: 'Crafting unique visual identities that resonate with your audience and stand the test of time.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Building blazing-fast, responsive websites that deliver exceptional user experiences.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Rocket,
    title: 'Digital Strategy',
    description: 'Data-driven strategies that propel your brand to new heights in the digital landscape.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: BarChart,
    title: 'Growth Marketing',
    description: 'Precision-targeted campaigns that convert prospects into loyal brand advocates.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    description: 'Intuitive mobile applications that keep your brand in your customers\' pockets.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Globe,
    title: 'Global Expansion',
    description: 'Scaling your brand across borders with culturally intelligent localization strategies.',
    color: 'from-pink-500 to-rose-500',
  },
];

const Services = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      
      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.3, 1, 1.3],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 12,
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
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Comprehensive solutions designed to elevate your brand in the digital age.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500"
            >
              {/* Gradient Border on Hover */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-white/60 leading-relaxed">{service.description}</p>
                
                {/* Animated Line */}
                <motion.div
                  className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-6"
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
