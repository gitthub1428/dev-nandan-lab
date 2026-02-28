import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/30 to-transparent" />
      
      <motion.div
        className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05],
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
          <span className="text-purple-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="text-5xl md:text-6xl font-bold mt-4 mb-6 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
            Let's Create Magic
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Ready to transform your brand? Let's start the conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8">Contact Information</h3>
            <p className="text-white/60 text-lg mb-12">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-8">
              {[
                { icon: Mail, label: 'Email', value: 'hello@labs.com', color: 'from-purple-500 to-pink-500' },
                { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', color: 'from-blue-500 to-cyan-500' },
                { icon: MapPin, label: 'Location', value: 'San Francisco, CA', color: 'from-orange-500 to-red-500' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-white/50 text-sm">{item.label}</p>
                    <p className="text-white font-semibold text-lg">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <p className="text-white/50 text-sm mb-6">Follow us on social media</p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'Instagram', 'Dribbble'].map((social, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-white/70 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                  >
                    {social[0]}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white/80 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white/80 mb-2">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white/80 mb-2">Your Message</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/20 text-white placeholder-white/30 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-all resize-none"
                  placeholder="Tell us about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl font-semibold text-white shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-shadow flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
