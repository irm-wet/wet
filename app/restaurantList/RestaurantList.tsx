'use client';

import DetailModal from '@/app/components/DetailModal/DetailModal';
import { useRecoilState } from 'recoil';
import { modalOpenState } from '@/app/store/detailModalStore';
import React, { useState } from 'react';
import { supabase } from '@/app/components/common/superbaseClient';

export interface RestaurantListProps {
  restaurantList: {
    id: number;
    restaurant_name: string;
    restaurant_food: string;
    restaurant_type: string;
    restaurant_description: string;
    restaurant_image: string;
  }[];
}

const RestaurantList = ({ restaurantList }: RestaurantListProps) => {
  const [isOpen, setIsOpen] = useRecoilState(modalOpenState);
  const [selectedCard, setSelectedCard] = useState({
    restaurant_name: '',
    restaurant_location: '',
  });

  const handleCardClick = async (e: React.MouseEvent<HTMLDivElement>) => {
    const restaurantDetail = await supabase.from('restaurantList').select().eq('id', e.currentTarget.getAttribute('data-key'));
    try {
      if (restaurantDetail && restaurantDetail.data && restaurantDetail.data[0] && restaurantDetail.data.length > 0) {
        setSelectedCard({
          restaurant_name: restaurantDetail.data[0].restaurant_name,
          restaurant_location: restaurantDetail.data[0].restaurant_location,
        });
        setIsOpen(true);
      }
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      {restaurantList.map(restaurant => (
        <div
          className="cardContainer flex gap-5 bg-white hover:bg-slate-300 p-4 rounded-md shadow-md"
          key={restaurant.id}
          onClick={handleCardClick}
          data-key={restaurant.id} // 데이터 속성을 통해 id 전달
        >
          <div className="flex-1">
            <h2 className="text-xl font-semibold">{restaurant.restaurant_name}</h2>
            <p className="text-gray-800 mt-2">
              <span className={'font-bold'}>음식: </span>
              {restaurant.restaurant_food}
            </p>
            <p className="text-gray-500">
              <span className={'font-bold'}>종류: </span>
              {restaurant.restaurant_type}
            </p>
            <p className="text-gray-500">
              <span className={'font-bold'}>비고: </span>
              {restaurant.restaurant_description}
            </p>
          </div>
          <div className="flex-1">
            <img src={restaurant.restaurant_image} alt="사진" className="w-full h-full rounded-lg object-cover" />
          </div>
        </div>
      ))}
      <DetailModal isOpen={isOpen} restaurant_name={selectedCard.restaurant_name} restaurant_location={selectedCard.restaurant_location} />
    </>
  );
};

export default RestaurantList;
