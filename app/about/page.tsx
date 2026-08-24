import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-20">
        
        {/* Hero / Intro Section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest bg-black text-white px-3 py-1 rounded-full font-semibold">
            Our Story
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-black tracking-tight">
            Redefining Modern Style & Quality
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            VektorStore was founded with a simple mission: to bring premium, contemporary fashion to individuals who appreciate quality without compromising on style.
          </p>
        </div>

        {/* Stats / Highlights Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center">
          <div>
            <div className="text-3xl font-extrabold text-black mb-1">100%</div>
            <div className="text-sm text-gray-500 font-medium">Quality Assured</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-black mb-1">5K+</div>
            <div className="text-sm text-gray-500 font-medium">Happy Customers</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-black mb-1">24/7</div>
            <div className="text-sm text-gray-500 font-medium">Dedicated Support</div>
          </div>
          <div>
            <div className="text-3xl font-extrabold text-black mb-1">30-Day</div>
            <div className="text-sm text-gray-500 font-medium">Easy Returns</div>
          </div>
        </div>

        {/* Deep Dive: Story & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-black tracking-tight">
              Crafted with Care, Designed for You
            </h2>
            <p className="text-gray-600 leading-relaxed">
              What started as a small passion project has grown into a brand that serves thousands of customers who share our appreciation for thoughtful design and exceptional quality. 
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every piece in our collection is carefully selected and built to meet high standards for craftsmanship, comfort, and enduring style.
            </p>
          </div>
          <div className="bg-zinc-900 text-white p-8 md:p-10 rounded-2xl shadow-lg relative overflow-hidden space-y-4">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gray-800 rounded-full blur-2xl opacity-50"></div>
            <h3 className="text-xl font-bold relative z-10">Our Philosophy</h3>
            <p className="text-gray-300 text-sm leading-relaxed relative z-10">
              "We don't just sell clothing—we curate an experience. We believe shopping should be straightforward, enjoyable, and rewarding for everyone who walks through our digital doors."
            </p>
          </div>
        </div>

        {/* Our Core Values Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-3xl font-bold text-black">Our Core Values</h2>
            <p className="text-gray-600 text-sm mt-2">The principles that drive every decision we make.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Quality First</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We never compromise on quality. From fabric selection to final stitching, every detail matters to us.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Timeless Design</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We create pieces that transcend trends. Our clothing is designed to be worn and loved for years.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Customer Focus</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Your satisfaction is our priority. We're committed to providing exceptional service and support at every step.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-bold text-lg mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-black mb-2">Sustainability</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We're mindful of our environmental impact and continuously work towards more responsible, sustainable practices.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Call to Action */}
        <div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 text-center space-y-6">
          <h2 className="text-3xl font-bold text-black">Be Part of Our Journey</h2>
          <p className="text-gray-600 max-w-xl mx-auto text-sm leading-relaxed">
            Thank you for being part of VektorStore. We're excited to continue growing and evolving with you as your trusted fashion destination.
          </p>
          <div className="pt-2">
            <Link
              href="/products"
              className="inline-block bg-black text-white px-8 py-4 rounded-xl font-medium hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl text-sm"
            >
              Explore Collection
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}