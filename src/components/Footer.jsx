'use client';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative z-40 bg-[#3A2618] text-white pt-32 pb-10 overflow-hidden">

      {/* Top inner shadow for depth */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black/30 to-transparent pointer-events-none"></div>

      {/* Massive Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-white/[0.03] pointer-events-none select-none tracking-tighter whitespace-nowrap z-0">
        CHOCOLATE
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Top Newsletter Section - Full Width Centered */}
        <div className="flex flex-col items-center text-center mb-28 max-w-2xl mx-auto relative group">
          <div className="absolute -inset-10 bg-[#D4AF37]/5 blur-[100px] rounded-full pointer-events-none group-hover:bg-[#D4AF37]/10 transition-colors duration-700"></div>
          <h2 className="text-4xl md:text-5xl font-serif italic text-[#D4AF37] mb-6">Join The Club</h2>
          <p className="text-white/70 mb-10 font-light leading-relaxed">
            Subscribe to receive exclusive access to new seasonal collections, special offers, and behind-the-scenes stories from our Master Chocolatiers.
          </p>
          <form className="w-full flex flex-col md:flex-row relative group/form gap-6 md:gap-0 mt-4 md:mt-0">
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full bg-transparent border-b border-white/20 py-4 md:pl-2 md:pr-36 text-white placeholder-white/30 focus:outline-none focus:border-[#D4AF37] transition-all duration-300 text-base md:text-lg text-center md:text-left"
            />
            <button
              type="submit"
              className="md:absolute right-0 bottom-0 top-0 px-6 py-4 md:py-0 font-bold tracking-[0.2em] text-sm text-[#D4AF37] hover:text-white transition-all duration-300 uppercase flex items-center justify-center md:justify-end gap-2 group-hover/form:md:pr-2 border border-[#D4AF37] md:border-none w-max mx-auto md:w-auto md:mx-0"
            >
              Subscribe <span className="text-xl md:text-2xl leading-none font-light group-hover/form:translate-x-2 transition-transform duration-300">&rarr;</span>
            </button>
          </form>
        </div>

        {/* Separator */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24"></div>

        {/* 3 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-16 mb-16 md:mb-24">

          {/* Brand Info */}
          <div className="space-y-6 md:space-y-8 md:pr-10 flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-black tracking-tighter uppercase text-white">
              CHOCOLATE<span className="text-[#D4AF37]">.</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Crafting the finest artisanal chocolates using ethically sourced cacao and century-old techniques. A true premium experience in every bite.
            </p>
            <div className="flex space-x-5 pt-4 justify-center md:justify-start">
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#3A2618] transition-all duration-500 group shadow-lg hover:shadow-[#D4AF37]/20">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#3A2618] transition-all duration-500 group shadow-lg hover:shadow-[#D4AF37]/20">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#D4AF37] hover:border-[#D4AF37] hover:text-[#3A2618] transition-all duration-500 group shadow-lg hover:shadow-[#D4AF37]/20">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-serif italic text-[#D4AF37]">Explore</h3>
            <ul className="space-y-5 flex flex-col items-center md:items-start">
              {['Our Story', 'Signature Collection', 'Master Chocolatiers', 'Online Shop', 'Contact Us'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/60 hover:text-white text-sm transition-all duration-300 uppercase tracking-[0.2em] font-light flex items-center justify-center md:justify-start gap-4 group">
                    <span className="hidden md:block w-0 h-[1px] bg-[#D4AF37] group-hover:w-8 transition-all duration-500 ease-out"></span>
                    <span className="group-hover:translate-x-0 md:group-hover:translate-x-2 group-hover:text-[#D4AF37] md:group-hover:text-white transition-all duration-500 ease-out">{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-6 md:space-y-8 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-2xl font-serif italic text-[#D4AF37]">Get in Touch</h3>
            <ul className="space-y-8 md:space-y-6 flex flex-col items-center md:items-start">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-5 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 shrink-0 mt-0 md:mt-1 shadow-lg group-hover:shadow-[#D4AF37]/20">
                  <MapPin className="w-4 h-4 text-[#D4AF37] group-hover:text-[#3A2618] transition-colors duration-500" />
                </div>
                <span className="text-white/60 text-sm leading-relaxed font-light group-hover:text-white transition-colors duration-300 pt-0 md:pt-1 text-center md:text-left">123 Luxury Avenue, Suite 400<br className="hidden md:block" /> New York, NY 10012</span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3 md:gap-5 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 shrink-0 shadow-lg group-hover:shadow-[#D4AF37]/20">
                  <Phone className="w-4 h-4 text-[#D4AF37] group-hover:text-[#3A2618] transition-colors duration-500" />
                </div>
                <span className="text-white/60 text-sm font-light group-hover:text-white transition-colors duration-300">+1-800-23-456-7890</span>
              </li>
              <li className="flex flex-col md:flex-row items-center gap-3 md:gap-5 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:border-[#D4AF37] transition-all duration-500 shrink-0 shadow-lg group-hover:shadow-[#D4AF37]/20">
                  <Mail className="w-4 h-4 text-[#D4AF37] group-hover:text-[#3A2618] transition-colors duration-500" />
                </div>
                <span className="text-white/60 text-sm font-light group-hover:text-white transition-colors duration-300">contact@chocolate.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/40 text-[10px] md:text-xs tracking-[0.2em] uppercase font-light text-center">
            &copy; {new Date().getFullYear()} Chocolate. All rights reserved.
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="text-white/40 hover:text-[#D4AF37] text-[10px] md:text-xs tracking-[0.15em] uppercase transition-colors font-light relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-500">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-[#D4AF37] text-[10px] md:text-xs tracking-[0.15em] uppercase transition-colors font-light relative after:content-[''] after:absolute after:-bottom-2 after:left-0 after:w-0 after:h-[1px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-500">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
