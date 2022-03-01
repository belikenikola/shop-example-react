import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { arr } from '../data/data';

const Product = () => {
  let { id } = useParams();
  const [products, setProducts] = useState(arr);
  const [user, setUser] = useState({});

  useEffect(() => {
    console.log(id);

    let fetchedUser = arr.find((u) => u.id === id);
    if (fetchedUser) {
      setUser(fetchedUser);
    } else {
      alert('User not found');
    }
  }, [id]);

  return (
    <div>
      <p>
        <span>{user.title}</span> <br />
        <span>{user.body}</span> <br />
      </p>
    </div>
  );
};

export default Product;
