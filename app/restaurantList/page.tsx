import { createClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import ModalOpenController from '@/app/components/ModalOpenController/ModalOpenController';
import ServerComponentAddEvent from '@/app/components/ServerComponentAddEvent/ServerComponentAddEvent';

export const revalidate = 60; // 최대 1시간마다 다시 유효성을 검사합니다.

export default async function () {
  if (!process.env.superbaseUrl || !process.env.superbaseKey) {
    throw new Error('개발환경이라면 .env 파일을 확인해주세요');
  }

  const supabase = createClient(process.env.superbaseUrl, process.env.superbaseKey);
  const { data: restaurantList } = await supabase.from('restaurantList').select();

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {restaurantList?.map(restaurant => (
        <div className="cardContainer bg-white hover:bg-slate-300 p-4 rounded-md shadow-md" id={restaurant.id} key={restaurant.id}>
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
      ))}
      <ServerComponentAddEvent />
    </div>
  );
}
