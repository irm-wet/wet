'use client';

import DetailModal from '@/app/components/DetailModal/DetailModal';
import { useState } from 'react';

export default function () {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(prev => !prev);
          console.log(isOpen);
        }}>
        TEST
      </button>
      <DetailModal isOpen={isOpen} />
    </div>
  );
}
