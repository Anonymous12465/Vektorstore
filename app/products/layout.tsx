import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products - VektorStore Premium Fashion',
  description: 'Browse our collection of premium fashion including hoodies, chinos, and accessories. Free shipping on orders over $50.',
  openGraph: {
    title: 'Products - VektorStore Premium Fashion',
    description: 'Browse our collection of premium fashion including hoodies, chinos, and accessories. Free shipping on orders over $50.',
    images: ['/images/banner1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products - VektorStore Premium Fashion',
    description: 'Browse our collection of premium fashion including hoodies, chinos, and accessories. Free shipping on orders over $50.',
    images: ['/images/banner1.png'],
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}