import type { Metadata } from 'next';
import { getProductById } from '@/data/products';

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  
  if (!product) {
    return {
      title: 'Product Not Found - VektorStore',
      description: 'The requested product could not be found.',
    };
  }

  return {
    title: `${product.name} - VektorStore Premium Fashion`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: `${product.name} - VektorStore Premium Fashion`,
      description: product.description.substring(0, 160),
      images: [product.image],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${product.name} - VektorStore Premium Fashion`,
      description: product.description.substring(0, 160),
      images: [product.image],
    },
  };
}

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}