import React from 'react';
import noImg from '../assets/Noimg.jpg';
import { Link } from 'react-router-dom';

function ItemCard({ item }) {
  const { name, brand, price, available, weight, id } = item;
  return (
    <div className="p-8">
      <div className="bg-white shadow p-4 rounded lg:w-64">
        <div className="text-center mt-4">
          <p className="text-gray-600 font-bold">{name}</p>
          <p className="text-sm font-hairline text-gray-600 mt-1">{brand}</p>
        </div>

        <div className="mt-6 flex justify-between text-center">
          <div>
            <p className="text-gray-700 font-bold">${price}</p>
            <p className="text-xs mt-2 text-gray-600 font-hairline">Price</p>
          </div>
          <div>
            <p className="text-gray-700 font-bold">{weight}kg</p>
            <p className="text-xs mt-2 text-gray-600 font-hairline">Weight</p>
          </div>
          <div>
            <p className="text-gray-700 font-bold">
              {available ? "It's available" : "It's  not available"}
            </p>
            <p className="text-xs mt-2 text-gray-700 font-hairline" />
          </div>
        </div>
        <div className="mt-6">
          <Link to={`/product/${id}`}>
            <button className="rounded shadow-md w-full items-center shadow bg-blue-500 px-4 py-2 text-white hover:bg-blue-400">
              Product Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ItemCard;
