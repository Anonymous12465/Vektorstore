import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - VektorStore Premium Fashion',
  description: 'Get in touch with VektorStore customer support. We\'re here to help with your orders, questions, and feedback. Contact us today.',
  openGraph: {
    title: 'Contact Us - VektorStore Premium Fashion',
    description: 'Get in touch with VektorStore customer support. We\'re here to help with your orders and questions.',
    images: ['/images/banner1.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - VektorStore Premium Fashion',
    description: 'Get in touch with VektorStore customer support. We\'re here to help with your orders and questions.',
    images: ['/images/banner1.png'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}