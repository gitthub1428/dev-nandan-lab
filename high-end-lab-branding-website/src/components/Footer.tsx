import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: ['Brand Identity', 'Web Development', 'Mobile Apps', 'Digital Strategy'],
    company: ['About Us', 'Careers', 'Blog', 'Press'],
    support: ['Contact', 'FAQ', 'Privacy Policy', 'Terms of Service'],
  };

  return (
    <footer className="bg-slate-900 border-t border-white/10 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-4xl font-bold bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent mb-6">
                Labs
              </h3>
              <p className="text-white/60 text-lg mb-8 max-w-sm">
                We craft digital experiences that transform brands into legends. 
                Where creativity meets cutting-edge technology.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' },
                  { icon: Instagram, href: '#' },
                  { icon: Github, href: '#' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/20 flex items-center justify-center text-white/70 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Services Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: '#c084fc' }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: '#c084fc' }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-white font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-4">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 5, color: '#c084fc' }}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-white/40 text-sm">
            © 2024 Labs. All rights reserved. Crafted with passion.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-white/70 hover:bg-purple-500/20 hover:border-purple-500/50 hover:text-white transition-all duration-300"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
