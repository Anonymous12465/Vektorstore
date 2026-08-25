"use client";

import React, { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { getProductByName } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { useToast } from '@/components/ToastProvider';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  // Match product by name from the URL (folder is [name], not [id]).
  const product = getProductByName((params.name as string) || '');

  // FIXED: these were previously called directly in the render body
  // (`if (!selectedColor) setSelectedColor(...)`), which is invalid in React —
  // updating state during render can trigger "Cannot update state during render"
  // warnings and even infinite re-render loops. Moved into useEffect so they
  // only run once, after the product data is available / changes.
  useEffect(() => {
    if (!product) return;

    if (!selectedColor && product.colors.length > 0) {
      setSelectedColor(product.colors[0].name);
    }
    if (!selectedSize && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl font-bold text-black mb-4">Product Not Found</h1>
        <button
          onClick={() => router.push('/products')}
          className="text-black hover:text-gray-700 font-medium"
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedColor) {
      showToast('Please select a color');
      return;
    }
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      showToast('Please select a size');
      return;
    }
    // Note: Agar aapke CartContext mein size support bhi hai, toh aap selectedSize wahan pass kar sakte hain
    addToCart(product, selectedColor, quantity);
    showToast('Added to cart!');
  };

  const handleBuyNow = () => {
    handleAddToCart();
    router.push('/cart');
  };

  const images = [product.image, ...product.additionalImages];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 text-sm">
        <button
          onClick={() => router.push('/products')}
          className="text-gray-600 hover:text-black"
        >
          Products
        </button>
        <span className="mx-2 text-gray-400">/</span>
        <span className="text-black">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Images */}
        <div className="space-y-4">
          <div className="relative aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden">
            <Image
              src={images[selectedImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-gray-100 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-black' : 'border-transparent'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <p className="text-sm text-gray-500 mb-2">{product.category}</p>
            <h1 className="text-3xl font-bold text-black mb-2">{product.name}</h1>
            <p className="text-2xl font-bold text-black">${product.price.toFixed(2)}</p>
          </div>

          {/* Stock Status */}
          <div className="flex items-center gap-2">
            <span
              className={`inline-block w-2 h-2 rounded-full ${
                product.inStock ? 'bg-green-500' : 'bg-red-500'
              }`}
            />
            <span className="text-sm font-medium">
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>

          {/* Description */}
          <div>
            <h3 className="font-medium text-black mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Color Selection */}
          {product.colors.length > 0 && (
            <div>
              <h3 className="font-medium text-black mb-3">Color: {selectedColor}</h3>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color: { name: string; hex: string }) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`relative w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name
                        ? 'border-black ring-2 ring-black ring-offset-2'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                    style={{ backgroundColor: color.hex }}
                    title={color.name}
                    aria-label={`Select ${color.name}`}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Size Selection */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <h3 className="font-medium text-black mb-3">Size: <span className="font-bold">{selectedSize}</span></h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size: string) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`min-w-[48px] h-12 px-4 rounded-lg border text-sm font-medium transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-300 bg-white text-gray-900 hover:border-gray-400'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity Selector */}
          <div>
            <h3 className="font-medium text-black mb-3">Quantity</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors disabled:opacity-50"
                disabled={quantity <= 1}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                </svg>
              </button>
              <span className="w-12 text-center font-medium">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-4">
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full bg-black text-white py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              disabled={!product.inStock}
              className="w-full bg-white text-black border-2 border-black py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors disabled:bg-gray-100 disabled:border-gray-300 disabled:text-gray-400 disabled:cursor-not-allowed"
            >
              Buy Now
            </button>
          </div>

          {/* Additional Info */}
          <div className="pt-6 border-t border-gray-200">
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Free shipping on orders over $50</p>
              <p>• 30-day return policy</p>
              <p>• Secure checkout with PayPal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}