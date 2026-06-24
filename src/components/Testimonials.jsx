'use client';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Jenkins',
      text: 'Absolutely the finest chocolate I have ever tasted. The craftsmanship and attention to detail in every single truffle are simply unmatched in the industry.',
      title: 'Culinary Critic'
    },
    {
      id: 2,
      name: 'Michael Chen',
      text: 'Their dark chocolate collection is a revelation. A perfect balance of deep cacao bitterness and silky creamy texture. A true masterclass in chocolate making.',
      title: 'Executive Chef'
    },
    {
      id: 3,
      name: 'Eleanor Vance',
      text: 'I order their custom assortments for all my luxury events. The premium packaging is exactly as breathtaking as the chocolate melting on your tongue.',
      title: 'Event Director'
    }
  ];

  return (
    <section className="relative z-30 py-32 bg-[#3A2618] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center space-y-4 mb-20">
          <h3 className="text-sm tracking-[0.4em] text-[#D4AF37] uppercase font-mono">Testimonials</h3>
          <h2 className="text-4xl md:text-5xl font-light tracking-tight font-serif italic">A Word From Our Clients</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reviews.map((review) => (
            <div key={review.id} className="bg-[#5C463D] p-10 relative group hover:-translate-y-2 transition-transform duration-500 border border-white/5 hover:border-[#D4AF37]/30 shadow-2xl">

              <Quote className="absolute top-6 right-6 w-12 h-12 text-[#D4AF37] opacity-10 group-hover:opacity-20 transition-opacity duration-500" />

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                ))}
              </div>

              <p className="text-white/70 font-light leading-relaxed mb-8 relative z-10 italic">
                "{review.text}"
              </p>

              <div className="mt-auto">
                <h4 className="font-serif tracking-wide text-lg text-white">{review.name}</h4>
                <p className="text-[#D4AF37] text-xs uppercase tracking-widest mt-1">{review.title}</p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
