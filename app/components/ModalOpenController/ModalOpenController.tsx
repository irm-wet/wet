'use client';

import { useEffect } from 'react';

const ModalOpenController = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    console.log(children);
  });
  return <></>;
};

export default ModalOpenController;
