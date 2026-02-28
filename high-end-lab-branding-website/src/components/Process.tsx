import { motion } from 'framer-motion';
import { Lightbulb, PenTool, Rocket, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Lightbulb,
    title: 'Discovery',
    description: 'We dive deep into your brand, understanding your vision, goals, and target audience.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '02',
    icon: PenTool,
    title: 'Strategy',
    description: 'Crafting a tailored roadmap that aligns with your objectives and market dynamics.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '03',
    icon: Lightbulb,
    title: 'Creation',
    description: 'Bringing ideas to life with cutting-edge design and development excellence.',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Launch',
    description: 'Deploying your project with precision and monitoring for continuous optimization.',
    color: 'from-green-500 to-emerald-500',
  },
];

const Process = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-slate-900 via-slate-900 to-purple-950/20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Our Process</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            How We Work
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A proven methodology that ensures exceptional results every time.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent transform -translate-y-1/2" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500">
                  {/* Step Number */}
                  <motion.div
                    className={`absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center font-bold text-white shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.div>

                  {/* Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}
                    whileHover={{ rotate: 10 }}
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                  <p className="text-white/60 leading-relaxed">{step.description}</p>

                  {/* Animated Progress */}
                  <motion.div
                    className={`h-1 bg-gradient-to-r ${step.color} mt-6 rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mt-20"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow flex items-center gap-2"
          >
            Start Your Project
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
