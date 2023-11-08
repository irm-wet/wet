import React from 'react';
import Header from '@/app/components/Header/Header';

export default function IntroLayout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
