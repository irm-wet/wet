'use client';

import Image from 'next/image';
import KakaoLogin from './static/images/kakao_login_medium_narrow.png';
import { redirect } from 'next/navigation';
import ButtonElement from './components/ButtonElement/ButtonElement';
import axios from 'axios';

export default function Home() {
  const handleKakaoLogin = () => {
    alert('TEST');
  };

  return (
    <div className={'flex justify-center align-center'}>
      <Image src={KakaoLogin} onClick={handleKakaoLogin} style={{ cursor: 'pointer' }} />
    </div>
  );
}
