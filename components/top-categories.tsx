import Link from 'next/link';
import Image from 'next/image';

export default function TopCategories() {
  const topCategories = [
    { name: "Tops", image: "/images/products/brown hoodie.jpg", href: "/products?category=tops" },
    { name: "Bottoms", image: "/images/products/cargo.jpg", href: "/products?category=bottoms" },
    { name: "Home & Living", image: "/images/products/tumbler.jpg", href: "/products?category=home+%26+living" },
    { name: "Watches", image: "/images/products/w1.jpg", href: "/products?category=watches" },
    { name: "Kitchen Appliances", image: "/images/products/j3.jpg", href: "/products?category=Kitchen Appliances" },
        { name: "Footwear", image: "/images/products/shoes3.jpg", href: "/products?category=Footwear" },
        { name: "Cycling", image: "/images/products/b1.jpg", href: "/products?category=Cycling" },
        { name: "Tools", image: "/images/products/t2.png", href: "/products?category=Tools" },
                        { name: "Gadgets", image: "/images/products/t11.jpg", href: "/products?category=Gadgets" }


  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-black mb-10 uppercase tracking-wider">
        Top Categories
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {topCategories.map((cat) => (
          <Link 
            key={cat.name} 
            href={cat.href}
            className="flex flex-col items-center group cursor-pointer"
          >
            {/* Rounded Image Container with Shadow */}
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full p-1 bg-white shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1">
              <div className="w-full h-full rounded-full overflow-hidden relative border-2 border-gray-100">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Category Name */}
            <span className="mt-3 text-sm md:text-base font-semibold text-gray-800 text-center group-hover:text-black transition-colors">
              {cat.name}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}