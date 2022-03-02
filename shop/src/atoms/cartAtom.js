import { atom } from 'recoil';

export const cartState = atom({
  key: 'cartState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
export const totalState = atom({
  key: 'totalState', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});
