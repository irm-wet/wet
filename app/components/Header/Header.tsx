'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { HeaderLayout } from '@/app/components/Header/Header.styled';

const Header = () => {
  return (
    <HeaderLayout>
      <Link href={'/'}>Home</Link>
      <Link href={'/restaurantList'}>RestaurantList</Link>
    </HeaderLayout>
  );
};

export default Header;
