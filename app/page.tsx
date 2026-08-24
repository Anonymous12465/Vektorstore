import HeroSlider from '@/components/HeroSlider';
import TopCategories from '@/components/top-categories';
import AboutUs from '@/components/aboutus';
import CollectionSections from '@/components/CollectionSections';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'VektorStore - Premium Fashion & Modern Style',
  description: 'Discover premium fashion at VektorStore. Quality clothing including hoodies, chinos, and accessories with free shipping on orders over $50.',
  openGraph: {
    title: 'VektorStore - Premium Fashion & Modern Style',
    description: 'Discover premium fashion at VektorStore. Quality clothing with free shipping on orders over $50.',
    images: ['/images/banner1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VektorStore - Premium Fashion & Modern Style',
    description: 'Discover premium fashion at VektorStore. Quality clothing with free shipping on orders over $50.',
    images: ['/images/banner1.png'],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Slider */}
      <HeroSlider />

      {/* Top Categories Section */}
      <TopCategories />

      

      {/* Dynamic Collection Wise Sections */}
      <CollectionSections />

      {/* USP Sections */}
      <section className="bg-gray-50 py-12 mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Free Shipping</h3>
              <p className="text-gray-600 text-sm">On orders over $50. Fast and reliable delivery.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Easy Returns</h3>
              <p className="text-gray-600 text-sm">30-day return policy. No questions asked.</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 bg-black rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636l3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">24/7 Support</h3>
              <p className="text-gray-600 text-sm">Dedicated customer service always available.</p>
            </div>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <AboutUs /> 
    </div>
  );
}