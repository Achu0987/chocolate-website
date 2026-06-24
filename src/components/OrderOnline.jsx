'use client';

export default function OrderOnline() {
  return (
    <section className="relative z-30 bg-[#3A2618] overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

        {/* Left Column - Form */}
        <div className="py-24 px-6 md:px-12 lg:pl-24 lg:pr-12 flex flex-col items-center text-center">

          <h3 className="text-4xl md:text-5xl text-[#D4AF37] font-serif italic mb-2 tracking-wide drop-shadow-md">
            Choose your Flavour
          </h3>
          <h2 className="text-2xl md:text-3xl font-black text-white tracking-[0.2em] uppercase">
            Order Online
          </h2>

          <div className="flex items-center justify-center gap-3 my-6 text-[#D4AF37]">
            <div className="h-[1px] w-12 md:w-16 bg-[#D4AF37]"></div>
            <span className="text-xl leading-none mb-1">&#x25B3;</span>
            <div className="h-[1px] w-12 md:w-16 bg-[#D4AF37]"></div>
          </div>

          <p className="text-white/60 text-sm md:text-base max-w-md mx-auto leading-relaxed font-light">
            The day for a three hour tour a three hour tour then one day he was shooting at some food and up through the ground came a oil that is its a beautiful day.
          </p>

          <form className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl">
            <input
              type="text"
              placeholder="NAME *"
              className="w-full bg-transparent border border-white/20 px-5 py-4 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <input
              type="text"
              placeholder="PHONE NUMBER *"
              className="w-full bg-transparent border border-white/20 px-5 py-4 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />
            <div className="relative">
              <select className="w-full bg-transparent border border-white/20 px-5 py-4 text-white/40 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors appearance-none cursor-pointer">
                <option value="" className="bg-[#3A2618]">FLAVOURS</option>
                <option value="chocolate" className="bg-[#3A2618]">Dark Chocolate</option>
                <option value="vanilla" className="bg-[#3A2618]">Vanilla Bean</option>
                <option value="strawberry" className="bg-[#3A2618]">Strawberry</option>
              </select>
              <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
            <input
              type="text"
              placeholder="YOUR ADDRESS *"
              className="w-full bg-transparent border border-white/20 px-5 py-4 text-white text-sm placeholder-white/40 focus:outline-none focus:border-[#D4AF37] transition-colors"
            />

            <div className="md:col-span-2 flex justify-center mt-2">
              <button
                type="button"
                className="bg-[#D4AF37] text-white font-bold uppercase tracking-widest text-sm px-12 py-4 hover:bg-white hover:text-[#D4AF37] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Order Now
              </button>
            </div>
          </form>

          <div className="mt-12 text-center text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase">
            <span className="text-[#D4AF37]">For more queries call us at : </span>
            <span className="text-white">1-800-23-456-7890</span>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative h-full w-full hidden lg:flex items-center justify-end overflow-visible">
          <img
            src="https://demoxml.com/html/royalbakery/images/order-online.png"
            alt="Cake"
            className="w-[120%] max-w-none object-contain translate-x-[10%] drop-shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
