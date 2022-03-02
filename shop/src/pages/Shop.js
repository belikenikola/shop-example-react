import React from 'react';
import ItemCard from '../components/ItemCard';
import { Header } from '../components/Header';
import data from '../data/data.json';

const Shop = () => {
  const { items } = data;
  console.log(items);
  return (
    <>
      <Header />
      <div className="flex items-center h-screen">
        <div className="container mx-auto my-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
