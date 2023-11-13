'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { HeaderLayout } from '@/app/components/Header/Header.styled';

const Header = () => {
  return (
    <HeaderLayout>
      <div className={'h-full text-white font-semibold text-xl'}>
        <div className={'h-full flex justify-center items-center gap-4'}>
          <Link href={'/'}>Home</Link>
          <Link href={'/restaurantList'}>RestaurantList</Link>
        </div>
      </div>
    </HeaderLayout>
  );
};

export default Header;
