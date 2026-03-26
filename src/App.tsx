import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter, 
  Menu, 
  X,
  CheckCircle2,
  Users,
  Trophy,
  Zap
} from 'lucide-react';

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Membership', href: '#membership' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-8 h-8 text-brand-orange" />
          <span className="text-2xl font-display tracking-tighter uppercase">Rudra Gym</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium uppercase tracking-widest hover:text-brand-orange transition-colors"
            >
              {link.name}
            </a>
          ))}
          <button className="bg-brand-orange text-brand-dark px-6 py-2 rounded-full font-bold uppercase text-xs tracking-widest hover:scale-105 transition-transform">
            Join Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark border-b border-white/10 p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-brand-orange text-brand-dark px-6 py-3 rounded-full font-bold uppercase text-sm tracking-widest w-full">
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
          alt="Gym Background" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-brand-dark/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm mb-4 block">
            Neredmet's Finest Fitness Center
          </span>
          <h1 className="text-[12vw] md:text-[8vw] leading-[0.85] font-display uppercase tracking-tighter mb-6">
            Unleash <br />
            <span className="text-stroke">The Beast</span> <br />
            Within
          </h1>
          <p className="max-w-xl text-lg text-white/70 mb-8 leading-relaxed">
            Premium equipment, expert trainers, and a community that pushes you to your limits. Located in the heart of Neredmet, Old PS.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-brand-orange text-brand-dark px-8 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform flex items-center gap-2">
              Start Your Journey <ChevronRight className="w-5 h-5" />
            </button>
            <button className="border border-white/20 hover:bg-white/10 px-8 py-4 rounded-full font-bold uppercase tracking-widest transition-all">
              View Plans
            </button>
          </div>
        </motion.div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-12 right-6 hidden lg:block">
        <div className="flex gap-12">
          {[
            { label: 'Members', value: '500+' },
            { label: 'Trainers', value: '15+' },
            { label: 'Equipments', value: '100+' },
          ].map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1 }}
              className="text-right"
            >
              <div className="text-4xl font-display text-brand-orange">{stat.value}</div>
              <div className="text-xs uppercase tracking-widest text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: 'Strength Training',
      desc: 'Modern weightlifting floor with premium racks and free weights.',
      icon: <Dumbbell className="w-8 h-8" />,
      img: 'https://images.unsplash.com/photo-1581009146145-b5ef03a7403f?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Cardio Zone',
      desc: 'High-end treadmills, ellipticals, and rowers for peak endurance.',
      icon: <Zap className="w-8 h-8" />,
      img: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?q=80&w=1974&auto=format&fit=crop'
    },
    {
      title: 'Personal Coaching',
      desc: 'One-on-one sessions tailored to your specific fitness goals.',
      icon: <Users className="w-8 h-8" />,
      img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Group Classes',
      desc: 'High-energy HIIT, Yoga, and Zumba classes every week.',
      icon: <Trophy className="w-8 h-8" />,
      img: 'https://images.unsplash.com/photo-1518611012118-29a8d63ee0c2?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-dark relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4 block">What We Offer</span>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">Premium Facilities <br /> For Real Results</h2>
          </div>
          <p className="text-white/50 max-w-sm mb-2">
            We provide everything you need to transform your physique and mindset. From raw iron to digital tracking.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div 
              key={service.title}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] overflow-hidden rounded-2xl border border-white/10"
            >
              <img 
                src={service.img} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-60"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="text-brand-orange mb-4">{service.icon}</div>
                <h3 className="text-2xl font-display uppercase mb-2">{service.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Membership = () => {
  const plans = [
    {
      name: 'Basic',
      price: '₹1,500',
      period: 'Month',
      features: ['Gym Access', 'Locker Room', 'Standard Equipment', 'Free WiFi'],
      popular: false
    },
    {
      name: 'Pro',
      price: '₹3,500',
      period: 'Quarterly',
      features: ['Gym Access', 'Personal Trainer (2 sessions)', 'Diet Plan', 'All Classes', 'Locker Room'],
      popular: true
    },
    {
      name: 'Elite',
      price: '₹10,000',
      period: 'Yearly',
      features: ['24/7 Access', 'Unlimited PT', 'Custom Nutrition', 'All Classes', 'Guest Passes', 'Merchandise'],
      popular: false
    }
  ];

  return (
    <section id="membership" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Choose Your Plan</span>
          <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter">Membership Plans</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div 
              key={plan.name}
              className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-brand-orange bg-brand-orange/5' : 'border-white/10 bg-brand-dark'} flex flex-col`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <div className="mb-8">
                <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-display text-brand-orange">{plan.price}</span>
                  <span className="text-white/50 text-sm">/{plan.period}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-white/80">
                    <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-full font-bold uppercase tracking-widest transition-all ${plan.popular ? 'bg-brand-orange text-brand-dark hover:scale-105' : 'border border-white/20 hover:bg-white/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-xs mb-4 block">Get In Touch</span>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-tighter mb-8">Ready to <br /> Transform?</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Location</h4>
                  <p className="text-white/60 leading-relaxed">
                    Neredmet, Old PS, Telangana, <br />
                    Hyderabad, Medchal Malkajgiri, 500056
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-orange shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Phone</h4>
                  <p className="text-white/60">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-brand-orange shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-sm mb-1">Working Hours</h4>
                  <p className="text-white/60">Mon - Sat: 5:00 AM - 10:00 PM</p>
                  <p className="text-white/60">Sun: 6:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-orange hover:text-brand-dark transition-all">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div className="bg-zinc-900 p-8 md:p-12 rounded-3xl border border-white/10">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50">Full Name</label>
                  <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange outline-none transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest font-bold text-white/50">Email Address</label>
                  <input type="email" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange outline-none transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/50">Subject</label>
                <select className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange outline-none transition-colors">
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>General Question</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold text-white/50">Message</label>
                <textarea rows={4} className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 focus:border-brand-orange outline-none transition-colors" placeholder="Your message here..."></textarea>
              </div>
              <button className="w-full bg-brand-orange text-brand-dark py-4 rounded-xl font-bold uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98] transition-all">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/10 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-2">
          <Dumbbell className="w-6 h-6 text-brand-orange" />
          <span className="text-xl font-display tracking-tighter uppercase">Rudra Gym</span>
        </div>
        <p className="text-white/40 text-sm">
          © {new Date().getFullYear()} Rudra Gym Neredmet. All rights reserved.
        </p>
        <div className="flex gap-8 text-xs uppercase tracking-widest font-bold text-white/60">
          <a href="#" className="hover:text-brand-orange">Privacy Policy</a>
          <a href="#" className="hover:text-brand-orange">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <Hero />
      <Services />
      <Membership />
      <Contact />
      <Footer />
    </div>
  );
}
