import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';

import { cartState } from '../atoms/cartAtom';
import { useRecoilValue } from 'recoil';

export const Header = () => {
  const cart = useRecoilValue(cartState);
  return (
    <div className="flex flex-row items-center p-2 lg:px-5 shadow-md justify-between sticky top-0 z-50 bg-white">
      {/* Left */}
      <div className="flex flex-row items-center gap-2 rounded-full ">
        <p> Cart</p>
      </div>
      {/* Right */}
      <div className="flex items-center sm:space-x-2 justify-end cursor-pointer bg-gray-100 rounded-full hover:bg-gray-300">
        <span className="relative inline-block">
          <ShoppingCartIcon className="h-14 w-14" />

          {cart.length > 0 && (
            <span className="absolute top-0 right-0 px-2 py-1 text-xs font-bold leading-none text-red-100 transform bg-red-600 rounded-full">
              {cart.length}
            </span>
          )}
        </span>
      </div>
    </div>
  );
};
