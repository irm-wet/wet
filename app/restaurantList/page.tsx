'use client';

import { createClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import Link from 'next/link';

export default async function () {
  const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
  const { data: restaurantList } = await supabase.from('restaurantList').select();

  console.log('DD CONSOLE CHECK > ', restaurantList);

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
      {restaurantList.map((restaurant, index) => (
        <Link href={`${restaurant.restaurant_location ? restaurant.restaurant_location : ''}`}>
          <div key={index} className="cardContainer bg-white hover:bg-slate-300 p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">{restaurant.restaurant_name}</h2>
            <p className="text-gray-800 mt-2">
              <span className={'font-bold'}>음식: </span>
              {restaurant.restaurant_food || ''}
            </p>
            <p className="text-gray-500">
              <span className={'font-bold'}>종류: </span>
              {restaurant.restaurant_type || ''}
            </p>
            <p className="text-gray-500">
              <span className={'font-bold'}>비고: </span>
              {restaurant.restaurant_description || ''}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
