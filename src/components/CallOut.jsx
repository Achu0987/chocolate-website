'use client';

export default function CallOut() {
  return (
    <section className="relative z-40 w-full bg-[#F3B05A] py-10 flex items-center shadow-2xl">
      <div className="max-w-7xl mx-auto w-full px-6 flex flex-col md:flex-row items-center justify-end relative">

        {/* Overlapping Image */}
        <div className="relative md:absolute -mt-24 md:mt-0 md:left-10 md:top-1/2 md:-translate-y-1/2 z-10 w-48 md:w-72 drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]">
          <img
            src="https://demoxml.com/html/royalbakery/images/call-out.png"
            alt="Delicious Cake Slice"
            className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Text Content */}
        <div className="text-white font-bold tracking-[0.15em] text-xs sm:text-sm md:text-lg lg:text-xl uppercase z-20 mt-6 mb-4 md:mb-0 md:mt-0 md:ml-auto md:w-auto text-center md:text-right drop-shadow-md">
          FOR MORE INFORMATION, CONTACT US ON:<br className="md:hidden" /> (+1-800-23-456-7890)
        </div>

      </div>
    </section>
  );
}
