import { atom } from 'recoil';

export const mapLocationState = atom({
  key: 'mapLocationState',
  default: {
    latitude: 0,
    longtitude: 0,
  },
});
