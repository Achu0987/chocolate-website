'use client';

import { useState } from 'react';

import Image from 'next/image';
import deliciousChocolateImg from '../../public/delicious_chocolate.png';
import softCakeImg from '../../public/soft_cake.png';
import mixChocolatesImg from '../../public/mix_chocolates.png';
import chocoNutsImg from '../../public/choco_nuts.png';

const menuItems = [
  { id: 1, name: "Dark Chocolate Tart", desc: "A rich, gooey dark chocolate filling in a crisp shell.", price: "₹ 850", category: "Cakes & Pies", img: deliciousChocolateImg },
  { id: 2, name: "Raspberry Chocolate Cake", desc: "Three layers of chocolate sponge with raspberry coulis.", price: "₹ 1,200", category: "Cakes & Pies", img: softCakeImg },
  { id: 3, name: "Classic Fudge Brownie", desc: "Warm fudge brownie served with vanilla bean ice cream.", price: "₹ 450", category: "Other Sweets", img: mixChocolatesImg },
  { id: 4, name: "Pecan Caramel Pie", desc: "Toasted pecans and gooey caramel in a buttery crust.", price: "₹ 950", category: "Cakes & Pies", img: chocoNutsImg },
  { id: 5, name: "Chocolate Macarons", desc: "Delicate French macarons filled with dark chocolate ganache.", price: "₹ 600", category: "Other Sweets", img: deliciousChocolateImg },
  { id: 6, name: "Hazelnut Eclair", desc: "Choux pastry filled with creamy hazelnut praline.", price: "₹ 550", category: "Other Sweets", img: chocoNutsImg },
];

const categories = ["All", "Cakes & Pies", "Other Sweets"];

export default function OurMenu() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems = menuItems.filter(
    item => activeTab === "All" || item.category === activeTab
  );

  return (
    <section className="relative z-30 py-16 md:py-24 bg-[#3A2618] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="text-center space-y-4 mb-10 md:mb-16">
          <h3 className="text-sm tracking-[0.4em] text-[#D4AF37] uppercase font-mono">Discover</h3>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight font-serif italic">Our Menu</h2>
          <div className="w-16 h-[1px] bg-[#D4AF37] mx-auto mt-6"></div>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10 md:mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`text-sm tracking-widest uppercase pb-2 border-b-2 transition-all duration-300 ${activeTab === cat
                  ? "text-[#D4AF37] border-[#D4AF37] font-bold"
                  : "text-white/50 border-transparent hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
          {filteredItems.map((item) => (
            <div key={item.id} className="group flex items-center gap-4 md:gap-6 cursor-pointer">

              {/* Image with hover reveal */}
              <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 shrink-0 overflow-hidden rounded-full border-2 border-transparent group-hover:border-[#D4AF37]/50 transition-colors duration-500">
                <Image
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Text content */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1 md:mb-2">
                  <h4 className="text-lg sm:text-xl md:text-2xl font-serif tracking-wide group-hover:text-[#D4AF37] transition-colors duration-300 leading-tight">
                    {item.name}
                  </h4>
                  <div className="hidden sm:block flex-1 border-b border-dashed border-white/20 mx-4 relative top-[-6px]"></div>
                  <span className="text-base sm:text-lg md:text-xl font-bold font-mono text-[#D4AF37] mt-1 sm:mt-0">
                    {item.price}
                  </span>
                </div>
                <p className="text-white/60 font-light text-xs sm:text-sm md:text-base leading-relaxed line-clamp-2 sm:line-clamp-none mt-1 sm:mt-0">
                  {item.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
