import { createClient } from '@supabase/supabase-js';
import { redirect } from 'next/navigation';
import ModalOpenController from '@/app/components/ModalOpenController/ModalOpenController';
import ServerComponentAddEvent from '@/app/components/ServerComponentAddEvent/ServerComponentAddEvent';
import RestaurantList, { RestaurantListProps } from '@/app/restaurantList/RestaurantList';

export const revalidate = 60; // 최대 1시간마다 다시 유효성을 검사합니다.

export default async function () {
  if (!process.env.superbaseUrl || !process.env.superbaseKey) {
    throw new Error('개발환경이라면 .env 파일을 확인해주세요');
  }

  const supabase = createClient(process.env.superbaseUrl, process.env.superbaseKey);
  const { data: restaurantList }: any = await supabase.from('restaurantList').select();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <RestaurantList restaurantList={restaurantList} />
    </div>
  );
}
