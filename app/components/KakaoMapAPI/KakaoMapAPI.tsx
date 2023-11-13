'use client';

import React, { useEffect } from 'react';

const KakaoMapAPI = ({ restaurant_name, restaurant_location }): React.FC => {
  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=262b9335f92d9f664cf287bf29a682d8&libraries=services&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.493056, 127.034096),
          level: 2,
        };

        const map = new window.kakao.maps.Map(container, options);

        const zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT); // zoom 기능 구현

        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch('서울시 강남구 역삼로 8길 15, 홍우빌딩', function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            const marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            const infowindow = new kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
            });
            infowindow.open(map, marker);

            map.setCenter(coords);
          }
        }); // 마커 및 텍스트 표시 기능 구현
      });
    };
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI);
  }, []);

  return (
    <main className="w-full flex flex-col items-center justify-center pt-4">
      <div className="w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <div id="map" style={{ width: '50%', height: '50%' }}></div>
      </div>
    </main>
  );
};

export default KakaoMapAPI;
