'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/app/components/common/superbaseClient';
import DetailModal from '@/app/components/DetailModal/DetailModal';
import { useRecoilState } from 'recoil';
import { modalOpenState } from '@/app/store/detailModalStore';

const ServerComponentAddEvent = () => {
  const [isOpen, setIsOpen] = useRecoilState(modalOpenState);
  const [selectedObj, setSelectedObj] = useState({
    restaurant_name: '',
    restaurant_location: '',
  });

  useEffect(() => {
    const restaurant_list = document.getElementsByClassName('cardContainer');
    for (let i = 0; i < restaurant_list.length; i++) {
      restaurant_list[i].addEventListener('click', async () => {
        const restaurantDetail = await supabase.from('restaurantList').select().eq('id', restaurant_list[i].id);

        // 데이터가 없는 경우에 대한 처리
        if (restaurantDetail.data && restaurantDetail.data.length > 0) {
          setSelectedObj({
            restaurant_name: restaurantDetail.data[0].restaurant_name,
            restaurant_location: restaurantDetail.data[0].restaurant_location,
          });
          setIsOpen(true);
        } else {
          console.error('Restaurant detail not found.');
        }
      });
    }
  }, []);

  return <DetailModal isOpen={isOpen} restaurant_name={selectedObj.restaurant_name} restaurant_location={selectedObj.restaurant_location} />;
};

export default ServerComponentAddEvent;
