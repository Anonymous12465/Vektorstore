import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - VektorStore Premium Fashion',
  description: 'Learn about VektorStore\'s story, values, and commitment to quality fashion. Discover our passion for premium clothing and customer satisfaction.',
  openGraph: {
    title: 'About Us - VektorStore Premium Fashion',
    description: 'Learn about VektorStore\'s story, values, and commitment to quality fashion.',
    images: ['/images/banner1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us - VektorStore Premium Fashion',
    description: 'Learn about VektorStore\'s story, values, and commitment to quality fashion.',
    images: ['/images/banner1.png'],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}