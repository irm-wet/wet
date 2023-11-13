'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <div className={'h-full text-2xl font-semibold p-6'}>
      <div className={'h-full flex justify-center items-center gap-12'}>
        <Link href={'/'}>Home</Link>
        <Link href={'/restaurantList'}>RestaurantList</Link>
      </div>
    </div>
  );
};

export default Header;
