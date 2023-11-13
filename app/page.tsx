'use client';

import Image from 'next/image';
import { redirect } from 'next/navigation';
import ButtonElement from './components/ButtonElement/ButtonElement';
import axios from 'axios';

export default function Home() {
  const handleButtonClick = async () => {
    try {
      const response = await axios.get('/api/');
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };
  return <ButtonElement text={'TEST ME'} handleButtonClick={handleButtonClick} />;
}
