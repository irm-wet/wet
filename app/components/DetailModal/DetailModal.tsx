'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import KakaoMapAPI from '@/app/components/KakaoMapAPI/KakaoMapAPI';
import { useRecoilState } from 'recoil';
import { mapLocationState } from '@/app/store/kakaoMapStore';

const DetailModal = ({ isOpen }) => {
  const [open, setOpen] = useState(isOpen);
  const mapLocation = useRecoilState(mapLocationState);

  const cancelButtonRef = useRef(null);

  useEffect(() => {
    setOpen(isOpen);
  }, [isOpen]);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                        음식점 위치
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">우측의 확대, 축소 바를 활용하여 유동적으로 위치를 찾으실 수 있습니다.</p>
                        <p className="text-sm text-gray-500">정확한 위치의 확인이 어렵거나 표시되지 않는 경우 우측 하단의 카카오맵 열기를 활용해주세요.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <KakaoMapAPI />
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                    onClick={() => {
                      const kakaoMapCustomUrl = `kakaomap://route?sp=37.537229,127.005515&ep=${Number(mapLocation[0].latitude)},${Number(mapLocation[0].longtitude)}&by=FOOT`;
                      window.location.href = kakaoMapCustomUrl;
                    }}>
                    카카오맵 열기
                  </button>
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}>
                    취소
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default DetailModal;
