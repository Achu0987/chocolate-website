'use client';

export default function OurGallery() {
  const images = [
    { id: 1, src: '/our_story_1.png', span: 'col-span-2 row-span-2 md:col-span-2 md:row-span-2' },
    { id: 2, src: '/delicious_chocolate.png', span: 'col-span-1 row-span-1' },
    { id: 3, src: '/mix_chocolates.png', span: 'col-span-1 row-span-1' },
    { id: 4, src: '/choco_nuts.png', span: 'col-span-1 row-span-1' },
    { id: 5, src: '/soft_cake.png', span: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="relative z-30 py-32 bg-[#3A2618] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h3 className="text-sm tracking-[0.4em] text-[#D4AF37] uppercase font-mono">Sweet Moments</h3>
          <h2 className="text-5xl md:text-6xl font-light tracking-tight font-serif italic text-white">Our Gallery</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px]">
          {images.map((img) => (
            <div 
              key={img.id} 
              className={`relative group overflow-hidden cursor-pointer ${img.span} rounded-sm shadow-xl`}
            >
              <img 
                src={img.src} 
                alt="Gallery Item" 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#3A2618]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full border border-[#D4AF37] flex items-center justify-center transform translate-y-10 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[#D4AF37] text-xl font-light">+</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* View More Button */}
        <div className="mt-16 text-center">
          <button className="px-10 py-4 border border-[#D4AF37]/50 text-[#D4AF37] hover:bg-[#D4AF37] hover:text-black transition-all duration-500 uppercase tracking-widest text-xs font-bold">
            Follow Our Instagram
          </button>
        </div>

      </div>
    </section>
  );
}
