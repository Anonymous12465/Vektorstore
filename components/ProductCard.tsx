import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // FIXED: was linking with product.id (`/product/${product.id}`), but the
  // detail page now looks products up by NAME via getProductByName().
  // That mismatch is why products weren't showing — every link 404'd /
  // hit "Product Not Found" because no product's name equals its id.
  // encodeURIComponent handles spaces and special characters in the name.
  return (
    <Link href={`/product/${encodeURIComponent(product.name)}`} className="group">
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300">
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <span className="text-white font-medium">Out of Stock</span>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-1 group-hover:text-black transition-colors line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-2">{product.category}</p>
          <p className="text-lg font-bold text-black">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  );
}
