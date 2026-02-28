import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Microscope, 
  Dna, 
  Activity, 
  Award, 
  Clock, 
  Users, 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Star, 
  ArrowRight,
  CheckCircle,
  FileText,
  Shield,
  Heart,
  Brain,
  TestTube,
  FlaskConical,
  Hand,
  ChevronDown,
  Linkedin,
  Instagram,
  Twitter
} from 'lucide-react';
import confetti from 'canvas-confetti';

// ============ CONFIGURATION - EDIT EVERYTHING HERE ============
const CONFIG = {
  branding: {
    name: "Dev-nandan",
    fullName: "Dev-nandan Pathology Laboratory",
    tagline: "Precision in Every Test, Care in Every Report",
    subtitle: "ISO 9001:2015 Certified Laboratory | Since 2009",
    email: "info@devnandanlab.com",
    phone: "+91 98765 43210",
    whatsapp: "+91 98765 43210",
    address: "123 Medical Complex, Health City, HC 110001",
    timings: "Mon-Sat: 6:00 AM - 9:00 PM | Sun: 7:00 AM - 1:00 PM"
  },
  colors: {
    red: "#e31e24",
    blue: "#1e6fa8",
    green: "#6ba539",
    dark: "#1a1a1a",
    light: "#ffffff"
  },
  services: [
    {
      icon: Microscope,
      title: "Clinical Pathology",
      description: "Comprehensive blood, urine, and body fluid analysis with advanced microscopy",
      color: "from-[#1e6fa8] to-[#3b82f6]"
    },
    {
      icon: Dna,
      title: "Molecular Diagnostics",
      description: "Advanced genetic testing and PCR-based diagnostics for precision medicine",
      color: "from-[#e31e24] to-[#ef4444]"
    },
    {
      icon: Activity,
      title: "Biochemistry",
      description: "Complete metabolic profiles, hormone assays, and specialized tests",
      color: "from-[#6ba539] to-[#22c55e]"
    },
    {
      icon: FlaskConical,
      title: "Microbiology",
      description: "Culture and sensitivity testing, pathogen identification",
      color: "from-[#1e6fa8] to-[#6ba539]"
    },
    {
      icon: TestTube,
      title: "Hematology",
      description: "Complete blood counts, coagulation studies, and blood banking",
      color: "from-[#e31e24] to-[#1e6fa8]"
    },
    {
      icon: Shield,
      title: "Immunology",
      description: "Autoimmune disorders, allergy testing, and immunological assays",
      color: "from-[#6ba539] to-[#e31e24]"
    },
    {
      icon: Heart,
      title: "Cardiac Markers",
      description: "Troponin, CK-MB, BNP, and other cardiovascular diagnostics",
      color: "from-[#e31e24] to-[#f43f5e]"
    },
    {
      icon: Brain,
      title: "Thyroid Profile",
      description: "Complete thyroid function tests including T3, T4, TSH",
      color: "from-[#1e6fa8] to-[#8b5cf6]"
    }
  ],
  tests: [
    { name: "Complete Blood Count (CBC)", category: "Hematology", price: "₹350", popular: true },
    { name: "Lipid Profile", category: "Biochemistry", price: "₹600", popular: true },
    { name: "Thyroid Profile (T3, T4, TSH)", category: "Hormones", price: "₹800", popular: true },
    { name: "HbA1c (Diabetes)", category: "Biochemistry", price: "₹500", popular: false },
    { name: "Liver Function Test (LFT)", category: "Biochemistry", price: "₹550", popular: false },
    { name: "Kidney Function Test (KFT)", category: "Biochemistry", price: "₹600", popular: false },
    { name: "Vitamin D Total", category: "Vitamins", price: "₹1200", popular: false },
    { name: "Vitamin B12", category: "Vitamins", price: "₹1000", popular: false }
  ],
  process: [
    { number: "01", title: "Sample Collection", description: "Professional home collection or walk-in to our state-of-the-art facility", icon: Hand },
    { number: "02", title: "Laboratory Analysis", description: "Advanced automated analyzers with strict quality control measures", icon: Microscope },
    { number: "03", title: "Quality Verification", description: "Expert pathologist review and verification of all test results", icon: CheckCircle },
    { number: "04", title: "Report Delivery", description: "Digital reports via email/WhatsApp or physical copies at center", icon: FileText }
  ],
  features: [
    { icon: Clock, title: "Fast Reports", description: "Most reports within 24 hours" },
    { icon: Shield, title: "ISO Certified", description: "ISO 9001:2015 Quality Certified" },
    { icon: Users, title: "Expert Team", description: "Qualified pathologists & technicians" },
    { icon: Award, title: "Advanced Technology", description: "Fully automated analyzers" }
  ],
  testimonials: [
    { name: "Dr. Rajesh Kumar", role: "Senior Physician", content: "Dev-nandan Lab provides the most accurate and reliable test reports. I trust them with all my patients.", rating: 5 },
    { name: "Priya Sharma", role: "Patient", content: "Excellent service! Home collection was on time, and the report was delivered within 12 hours. Highly recommended!", rating: 5 },
    { name: "Amit Patel", role: "Regular Customer", content: "Been coming here for 5 years. The staff is professional, and the reports are always accurate. Great experience!", rating: 5 }
  ],
  stats: [
    { value: "15+", label: "Years of Excellence" },
    { value: "500K+", label: "Tests Conducted" },
    { value: "50+", label: "Test Parameters" },
    { value: "24/7", label: "Emergency Services" }
  ],
  certifications: [
    "ISO 9001:2015 Certified",
    "NABL Accredited",
    "CDC Approved",
    "Government Recognized"
  ]
};

// ============ ANIMATED BACKGROUND ============
const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{ x: number; y: number; size: number; speedX: number; speedY: number; opacity: number; color: string }> = [];
    const colors = ['#1e6fa8', '#e31e24', '#6ba539'];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 1,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.4 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x > canvas.width) particle.x = 0;
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.y < 0) particle.y = canvas.height;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color.replace(')', `, ${particle.opacity})`).replace('rgb', 'rgba');
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />
  );
};

// ============ NAVBAR ============
const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Services', id: 'services' },
    { label: 'Tests', id: 'tests' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/10 shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            <img src="/logo.svg" alt="Dev-nandan Lab" className="h-12 w-12 object-contain" />
            <div className="text-2xl font-bold bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] bg-clip-text text-transparent">
              {CONFIG.branding.name}
            </div>
          </motion.div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1, color: '#1e6fa8' }}
                className="text-white/80 hover:text-white transition-colors font-medium cursor-pointer"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-[#1e6fa8]/50 transition-all"
              onClick={() => scrollToSection('contact')}
            >
              Book Test
            </motion.button>
          </div>

          <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  className="block w-full text-left text-white/80 hover:text-white py-2 font-medium"
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.label}
                </button>
              ))}
              <button
                className="w-full bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] text-white px-6 py-3 rounded-full font-semibold"
                onClick={() => scrollToSection('contact')}
              >
                Book Test
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

// ============ HERO SECTION ============
const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const handleConfetti = () => {
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#1e6fa8', '#e31e24', '#6ba539']
    });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <AnimatedBackground />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1e6fa8]/10 to-slate-900" />
      
      <motion.div style={{ y: y1, opacity }} className="absolute top-20 left-10 w-72 h-72 bg-[#e31e24]/20 rounded-full blur-3xl" />
      <motion.div style={{ y: y2, opacity }} className="absolute bottom-20 right-10 w-96 h-96 bg-[#1e6fa8]/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="inline-block mb-6 px-6 py-2 bg-[#1e6fa8]/20 backdrop-blur-md rounded-full border border-[#1e6fa8]/30"
          >
            <span className="text-[#1e6fa8] font-medium">🔬 ISO 9001:2015 Certified Laboratory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-white via-[#1e6fa8] to-white bg-clip-text text-transparent">
              {CONFIG.branding.name}
            </span>
            <br />
            <motion.span
              className="bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
            >
              {CONFIG.branding.tagline}
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="text-xl md:text-2xl text-white/70 mb-12 max-w-3xl mx-auto"
          >
            {CONFIG.branding.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(30, 111, 168, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConfetti}
              className="group bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] text-white px-8 py-4 rounded-full font-bold text-lg flex items-center gap-3 hover:shadow-2xl transition-all"
            >
              Book Home Collection
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-full font-bold text-lg border-2 border-[#1e6fa8]/50 text-white hover:bg-[#1e6fa8]/20 transition-all"
              onClick={() => document.getElementById('tests')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Tests
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {CONFIG.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#1e6fa8] to-[#6ba539] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/60 text-sm mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="cursor-pointer"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <ChevronDown className="text-white/50 w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// ============ SERVICES SECTION ============
const Services = () => (
  <section id="services" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] bg-clip-text text-transparent">
            Our Services
          </span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Comprehensive diagnostic services with cutting-edge technology
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CONFIG.services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -10, scale: 1.03 }}
            className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-[#1e6fa8]/50 transition-all duration-500 overflow-hidden"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
            <div className="relative z-10">
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="text-white w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#1e6fa8] transition-colors">{service.title}</h3>
              <p className="text-white/60 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ============ TESTS SECTION ============
const Tests = () => (
  <section id="tests" className="py-32 relative bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] bg-clip-text text-transparent">
            Popular Tests
          </span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Affordable health checkups with accurate results
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CONFIG.tests.map((test, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ y: -5 }}
            className={`relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border ${test.popular ? 'border-[#e31e24]/50' : 'border-white/10'} transition-all duration-500`}
          >
            {test.popular && (
              <div className="absolute -top-3 right-4 bg-[#e31e24] text-white text-xs font-bold px-3 py-1 rounded-full">
                POPULAR
              </div>
            )}
            <div className="text-[#1e6fa8] text-sm font-medium mb-2">{test.category}</div>
            <h3 className="text-lg font-bold text-white mb-3">{test.name}</h3>
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold bg-gradient-to-r from-[#1e6fa8] to-[#6ba539] bg-clip-text text-transparent">
                {test.price}
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="bg-gradient-to-r from-[#1e6fa8] to-[#6ba539] text-white px-4 py-2 rounded-full text-sm font-semibold"
              >
                Book
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ============ FEATURES SECTION ============
const Features = () => (
  <section className="py-20 relative">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        {CONFIG.features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1e6fa8] via-[#e31e24] to-[#6ba539] flex items-center justify-center">
              <feature.icon className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-white/60">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ============ PROCESS SECTION ============
const Process = () => (
  <section id="process" className="py-32 relative">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] bg-clip-text text-transparent">
            How It Works
          </span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Simple 4-step process for your convenience
        </p>
      </motion.div>

      <div className="relative">
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] transform -translate-y-1/2" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CONFIG.process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="relative text-center group"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#1e6fa8] via-[#e31e24] to-[#6ba539] flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-[#1e6fa8]/50 group-hover:shadow-[#1e6fa8]/80 transition-all z-10 relative"
              >
                {step.number}
              </motion.div>
              <step.icon className="w-10 h-10 mx-auto mb-4 text-[#1e6fa8]" />
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#1e6fa8] transition-colors">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// ============ TESTIMONIALS SECTION ============
const Testimonials = () => (
  <section id="testimonials" className="py-32 relative bg-slate-900/50">
    <div className="max-w-7xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-20"
      >
        <h2 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] bg-clip-text text-transparent">
            Patient Stories
          </span>
        </h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Trusted by thousands of patients and doctors
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {CONFIG.testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-[#1e6fa8]/50 transition-all duration-500"
          >
            <div className="flex mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#e31e24] text-[#e31e24]" />
              ))}
            </div>
            <p className="text-white/80 text-lg mb-6 italic">"{testimonial.content}"</p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e6fa8] to-[#6ba539] flex items-center justify-center text-white font-bold text-lg mr-4">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <div className="text-white font-bold">{testimonial.name}</div>
                <div className="text-white/60 text-sm">{testimonial.role}</div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

// ============ CONTACT SECTION ============
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#1e6fa8', '#e31e24', '#6ba539'] });
    alert('Thank you! We will contact you shortly.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Book your test or inquire about our services
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e6fa8] to-[#e31e24] flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Phone</div>
                    <div className="text-white font-medium">{CONFIG.branding.phone}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#e31e24] to-[#6ba539] flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Email</div>
                    <div className="text-white font-medium">{CONFIG.branding.email}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6ba539] to-[#1e6fa8] flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Address</div>
                    <div className="text-white font-medium">{CONFIG.branding.address}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1e6fa8] to-[#6ba539] flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm">Timings</div>
                    <div className="text-white font-medium">{CONFIG.branding.timings}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-white font-bold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {[Twitter, Linkedin, Instagram].map((Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      whileHover={{ scale: 1.2, y: -5 }}
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-gradient-to-r hover:from-[#1e6fa8] hover:to-[#e31e24] transition-all"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 space-y-6">
              <div>
                <label className="block text-white/80 mb-2 font-medium">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#1e6fa8] transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#1e6fa8] transition-colors"
                  placeholder="+91 98765 43210"
                  required
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#1e6fa8] transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-white/80 mb-2 font-medium">Message / Test Required</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-[#1e6fa8] transition-colors resize-none"
                  placeholder="I want to book a CBC test..."
                  required
                />
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] text-white py-4 rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-[#1e6fa8]/50 transition-all"
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ FOOTER ============
const Footer = () => (
  <footer className="py-16 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-12 mb-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src="/logo.svg" alt="Dev-nandan Lab" className="h-10 w-10 object-contain" />
            <div className="text-2xl font-bold bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] bg-clip-text text-transparent">
              {CONFIG.branding.name}
            </div>
          </div>
          <p className="text-white/60 mb-4">{CONFIG.branding.tagline}</p>
          <div className="space-y-2">
            {CONFIG.certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-white/60 text-sm">
                <CheckCircle className="w-4 h-4 text-[#6ba539]" />
                {cert}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Services</h4>
          <ul className="space-y-2 text-white/60">
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Clinical Pathology</li>
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Biochemistry</li>
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Hematology</li>
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Microbiology</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-white/60">
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Book Home Collection</li>
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">View Reports</li>
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Health Packages</li>
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Contact Us</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4">Legal</h4>
          <ul className="space-y-2 text-white/60">
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Privacy Policy</li>
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Terms of Service</li>
            <li className="hover:text-[#1e6fa8] cursor-pointer transition-colors">Disclaimer</li>
          </ul>
        </div>
      </div>
      <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
        <div className="text-white/60 text-sm mb-4 md:mb-0">
          © 2024 {CONFIG.branding.fullName}. All rights reserved.
        </div>
        <div className="flex space-x-6">
          {[Twitter, Linkedin, Instagram].map((Icon, index) => (
            <motion.a
              key={index}
              href="#"
              whileHover={{ scale: 1.2 }}
              className="text-white/60 hover:text-[#1e6fa8] transition-colors"
            >
              <Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

// ============ SCROLL TO TOP ============
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => setIsVisible(window.scrollY > 500);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-[#1e6fa8] via-[#e31e24] to-[#6ba539] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#1e6fa8]/50 z-50"
        >
          <ChevronDown className="transform rotate-180 w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

// ============ MAIN APP ============
function App() {
  return (
    <div className="bg-slate-900 min-h-screen text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <Tests />
      <Features />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
