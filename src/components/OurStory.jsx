'use client';

export default function OurStory() {
  return (
    <section className="relative z-30 py-32 bg-[#3A2618] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* Header Section */}
        <div className="text-center space-y-4 mb-20">
          <h3 className="text-sm tracking-[0.4em] text-[#D4AF37] uppercase font-mono">The Legacy</h3>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight font-serif italic">Our Story</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Images Section (Asymmetrical) */}
          <div className="relative h-[600px] w-full group">
            {/* Background Image */}
            <div className="absolute top-0 left-0 w-3/4 h-[80%] rounded-sm overflow-hidden shadow-2xl z-10">
              <img
                src="/our_story_1.png"
                alt="Pouring Chocolate"
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
              />
            </div>

            {/* Foreground Image */}
            <div className="absolute bottom-0 right-0 w-2/3 h-[60%] rounded-sm overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] z-30 border-4 border-[#3A2618]">
              <img
                src="/our_story_2.png"
                alt="Gold Leaf Chocolate"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-8 lg:pl-10">
            <h3 className="text-3xl md:text-4xl font-serif tracking-wide leading-tight">
              A Passion Born in the <br /><span className="text-[#D4AF37] italic">Heart of Cacao</span>
            </h3>

            <p className="text-white/60 font-light text-lg leading-relaxed">
              For over three generations, our master chocolatiers have dedicated their lives to the art of fine chocolate. What began as a small artisan workshop has blossomed into a global symbol of uncompromising luxury.
            </p>

            <p className="text-white/60 font-light text-lg leading-relaxed">
              We travel the world to source the rarest, most flavorful cacao beans, forging direct relationships with sustainable farmers. Every truffle, every bar, and every delicate piece is crafted by hand with meticulous precision, blending centuries-old techniques with modern culinary innovation.
            </p>

            <div className="pt-6">
              <button className="relative overflow-hidden group px-8 py-4 border border-[#D4AF37] text-[#D4AF37] uppercase tracking-widest text-xs font-bold transition-all duration-500">
                <span className="relative z-10 group-hover:text-black transition-colors duration-500">Read the Full Journey</span>
                <div className="absolute inset-0 bg-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0"></div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
