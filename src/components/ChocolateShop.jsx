'use client';

import { Users, Bell, Globe } from 'lucide-react';

export default function ChocolateShop() {
  const products = [
    {
      id: 1,
      name: 'DELICIOUS CHOCOLATE',
      price: '₹ 1,900.00',
      image: '/delicious_chocolate.png',
    },
    {
      id: 2,
      name: 'MIX OF CHOCOLATES',
      price: '₹ 2,600.00',
      image: '/mix_chocolates.png',
    },
    {
      id: 3,
      name: 'CHOCO NUTS',
      price: '₹ 1,600.00',
      image: '/choco_nuts.png',
    },
    {
      id: 4,
      name: 'SOFT CAKE',
      price: '₹ 1,200.00',
      image: '/soft_cake.png',
    },
  ];

  return (
    <section className="relative z-30 bg-[#3A2618] py-16 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Features Bar */}
        <div className="bg-white py-10 px-4 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-[#3A2618]">
          <div className="flex flex-col items-center justify-center space-y-4 group cursor-pointer">
            <Users size={32} className="group-hover:scale-110 transition-transform duration-300 fill-current" />
            <h3 className="font-serif font-bold text-sm tracking-wider">PERSONALIZED SHOP</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-4 group cursor-pointer">
            <Bell size={32} className="group-hover:scale-110 transition-transform duration-300 fill-current" />
            <h3 className="font-serif font-bold text-sm tracking-wider">EMAIL NOTIFICATION</h3>
          </div>
          
          <div className="flex flex-col items-center justify-center space-y-4 group cursor-pointer">
            <Globe size={32} className="group-hover:scale-110 transition-transform duration-300" />
            <h3 className="font-serif font-bold text-sm tracking-wider">WORLDWIDE SHIPPING</h3>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="bg-white flex flex-col group cursor-pointer shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ease-out"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col items-center justify-center py-8 px-4 space-y-3">
                <h4 className="font-serif font-bold text-xs tracking-wider text-black text-center">{product.name}</h4>
                <p className="font-serif font-bold text-lg text-black">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
