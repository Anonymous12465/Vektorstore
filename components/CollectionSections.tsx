import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import Link from 'next/link';

export default function CollectionSections() {
  // Aapke products.ts file ki actual categories
// Updated categories array
const categories = ["Tops", "Bottoms", "Home & Living", "Watches", "Footwear", "Kitchen Appliances" , "Cycling", "tools", "gadgets"];
  return (
    <>
      {categories.map((collectionName) => {
        // products.ts se category wise max 4 products filter kar rahe hain
        const collectionProducts = products.filter(
          (p) => p.category.toLowerCase().trim() === collectionName.toLowerCase().trim()
        ).slice(0, 4);

        if (collectionProducts.length === 0) return null;

        return (
          <section key={collectionName} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-black">
                {collectionName}
              </h2>
              <Link
                href={`/products?category=${encodeURIComponent(collectionName.toLowerCase())}`}
                className="text-black hover:text-gray-700 font-medium transition-colors"
              >
                View All →
              </Link>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {collectionProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}