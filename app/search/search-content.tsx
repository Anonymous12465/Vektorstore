"use client";

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductCard from '@/components/ProductCard';
import { searchProducts } from '@/data/products';
import Link from 'next/link';

export default function SearchContent() {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(searchProducts(''));

  useEffect(() => {
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);
    setResults(searchProducts(searchQuery));
  }, [searchParams]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-black mb-8">
        {query ? `Search Results for "${query}"` : 'Search'}
      </h1>

      {query && (
        <div className="mb-8">
          <p className="text-gray-600 mb-4">
            {results.length} {results.length === 1 ? 'result' : 'results'} found
          </p>
          <Link
            href="/products"
            className="text-black hover:text-gray-700 font-medium inline-flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Browse all products
          </Link>
        </div>
      )}

      {results.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          {query ? (
            <>
              <p className="text-gray-500 text-lg mb-4">
                No products found for "{query}"
              </p>
              <Link
                href="/products"
                className="text-black hover:text-gray-700 font-medium"
              >
                Browse all products
              </Link>
            </>
          ) : (
            <p className="text-gray-500 text-lg">
              Enter a search term to find products
            </p>
          )}
        </div>
      )}
    </div>
  );
}