import type { Metadata } from 'next';
import './globals.css';
import './static/css/root.scss';
import React from 'react';
import Header from '@/app/components/Header/Header';
import Footer from '@/app/components/Footer/Footer';
import RecoilRootWrapper from '@/app/components/RecoilRootWrapper/RecoilRootWrapper';

export const metadata: Metadata = {
  title: 'We EaT',
  description: '오늘 우리가 무엇을 먹을지 고민하고 해결하는 소프트웨어입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <div className={'container'}>
          <Header />
          <div className={'bodyContainer'}>
            <RecoilRootWrapper>{children}</RecoilRootWrapper>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
