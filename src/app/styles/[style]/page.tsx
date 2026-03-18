import React from 'react';
import { notFound } from 'next/navigation';
import { interiorStyles } from '@/data/styles';
import StyleDetailClient from '@/components/StyleDetailClient';

export function generateStaticParams() {
  return interiorStyles.map((style) => ({
    style: style.slug,
  }));
}

interface PageProps {
  params: {
    style: string;
  };
}

export default function StyleDetailPage({ params }: PageProps) {
  const { style: styleSlug } = params;
  
  const style = interiorStyles.find(s => s.slug === styleSlug);

  if (!style) {
    notFound();
  }

  return <StyleDetailClient style={style} />;
}
