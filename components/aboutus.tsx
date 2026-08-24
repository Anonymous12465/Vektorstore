export default function AboutUs() {
  return (
    <section className="bg-white text-gray-900 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Brand Logo Showcase */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-6 rounded-full p-1 bg-gradient-to-tr from-gray-200 via-gray-100 to-gray-300 shadow-md">
          <div className="relative w-full h-full rounded-full overflow-hidden bg-white flex items-center justify-center">
            <img
              src="/images/logo.jpg"
              alt="Vektor Store Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Section Heading */}
        <span className="text-gray-500 uppercase tracking-widest text-xs sm:text-sm font-semibold mb-2">
          Welcome to VIP Excellence
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-gray-900">
          About Vektor Store
        </h2>
        <div className="w-16 h-1 bg-black my-6 rounded-full" />
        
        {/* Description & Collections */}
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
          At <strong className="text-gray-900 font-semibold">Vektor Store</strong>, we redefine luxury and everyday elegance for the discerning shopper. Our exclusive VIP collection spans a carefully curated selection of <span className="text-gray-900 font-medium">Crockeries, Men's Wear, Women's Wear, Watches, Jewellery Items, and Toys</span>, bringing together superior craftsmanship and timeless style all under one roof.
        </p>

        <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl">
          Whether you are upgrading your personal wardrobe, looking for sophisticated accessories, or choosing special gifts, Vektor Store ensures uncompromising quality and a seamless shopping experience tailored just for you.
        </p>

      </div>
    </section>
  );
}