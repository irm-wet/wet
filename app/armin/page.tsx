'use client';

import BasicModal from '@/app/components/Roulette/basic/BasicModal';
import RouletteModal from '@/app/components/Roulette/roulette/RouletteModal';
import Link from 'next/link';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 gap-10">
      <div>Apps 입니다</div>
      <BasicModal />
      <RouletteModal />
      <Link href={{ pathname: '/' }}>홈화면으로 돌아가기</Link>
    </main>
  );
}
