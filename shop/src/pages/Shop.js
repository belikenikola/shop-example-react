import React from 'react';
import { Link } from 'react-router-dom';
import { arr } from '../data/data';

const Shop = () => {
  return (
    <div>
      {arr.map((user) => (
        <div key={user.id}>
          <p>
            <span>{user.title}</span> <br />
            <span>{user.body}</span> <br />
            <span>{user.publishedAt}</span> <br />
            <Link to={`/product/${user.id}`}> View Product</Link>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Shop;
