import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechVision',
    content: 'Labs transformed our brand completely. Their attention to detail and creative vision exceeded all expectations. The results speak for themselves - 300% growth in 6 months.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Founder, InnovateCo',
    content: 'Working with Labs was a game-changer. They understood our vision from day one and delivered a digital experience that our customers absolutely love.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    role: 'CMO, GlobalReach',
    content: 'The team at Labs is simply exceptional. Their strategic approach and flawless execution helped us launch our most successful campaign ever.',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
      
      <motion.div
        className="absolute top-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.1, 0.2],
        }}
        transition={{
          duration: 10,
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
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            What Clients Say
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what industry leaders have to say about working with us.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className="relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <Quote className="w-6 h-6 text-white" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <motion.img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-purple-500/50"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div>
                  <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                  <p className="text-white/50 text-sm">{testimonial.role}</p>
                </div>
              </div>

              {/* Decorative Line */}
              <motion.div
                className="h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mt-6"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 + 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 pt-20 border-t border-white/10"
        >
          <p className="text-center text-white/40 text-sm mb-8">Trusted by industry leaders worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {['Google', 'Microsoft', 'Amazon', 'Meta', 'Apple'].map((company, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-2xl font-bold text-white/60"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
