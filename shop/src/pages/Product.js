import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Header } from '../components/Header';
import ItemCard from '../components/ItemCard';
import data from '../data/data.json';
import { useRecoilState } from 'recoil';
import { cartState } from '../atoms/cartAtom';
import { productAtom } from '../atoms/productAtom';

const Product = () => {
  let { id } = useParams();
  const { items } = data;
  const [options, setOptions] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const [product, setProduct] = useRecoilState(productAtom);
  const [cart, setCart] = useRecoilState(cartState);

  useEffect(() => {
    let fetchedProduct = items.find((u) => u.id === +id);
    if (fetchedProduct) {
      setProduct(fetchedProduct);
      setOptions(fetchedProduct.options);
    } else {
      alert('There is no product with id:' + id);
    }
  }, [id, items]);

  const optionHandler = (e) => {
    let filteredOption = options.filter((o) => o.color === e.target.value);
    if (Object.entries(filteredOption[0])[1][0] !== 'quantity') {
      setFilteredOptions(Object.entries(filteredOption[0])[1]);
      setSelectedQuantity(filteredOption[0].quantity);
      setProduct({
        ...product,
        color: e.target.value,
        selectedQuantity: 1,
        quantity: selectedQuantity,
      });
    } else {
      setProduct({
        ...product,
        selectedQuantity: 1,
        color: e.target.value,
        quantity: filteredOption[0].quantity,
      });
    }
  };

  const cartHandler = (e) => {
    e.preventDefault();
    let checkForProduct = cart.find((p) => p === product);
    if (checkForProduct) {
      return alert(`Product ${product.name} it is already in the cart`);
    } else {
      setCart((prevState) => [...prevState, product]);
    }
  };

  const secondOptionHandler = (e) => {
    setProduct({
      ...product,
      selectedQuantity: 1,
      [filteredOptions[0]]: e.target.value,
      quantity: selectedQuantity,
    });
  };

  console.log('cart', cart);

  return (
    <div>
      <Header />
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://dummyimage.com/400x400"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {product.brand}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div className="flex mb-4 items-center  justify-center mx-auto">
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3">
                    {product.available ? 'Available' : "It's not available"}
                  </span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s" />
                <span className="flex items-center">
                  <span className="text-gray-600 ml-3">
                    {product.weight} kg
                  </span>
                </span>
              </div>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aspernatur cupiditate, dolorem doloremque doloribus et iste iure
                laudantium minus neque non nulla, odit quas rem sed, sint
                tenetur unde? Ad, vero!
              </p>
              <div className="flex mt-6 items-center justify-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Color</span>
                  <div className="relative">
                    <select
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                      onChange={optionHandler}
                    >
                      <option>Select Color</option>
                      {options?.map((o) => (
                        <option key={o.color}>{o.color}</option>
                      ))}
                    </select>
                  </div>
                </div>{' '}
                <div className="flex ml-6 items-center">
                  <span className="mr-3">
                    {filteredOptions.length === 0
                      ? 'First Select color'
                      : filteredOptions[0]}
                  </span>
                  <div className="relative">
                    <select
                      disabled={filteredOptions.length === 0}
                      className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10"
                      onChange={secondOptionHandler}
                    >
                      <option>Select</option>
                      {filteredOptions[1] !== undefined &&
                        filteredOptions[1].map((o) => (
                          <option key={o} value={o}>
                            {o}
                          </option>
                        ))}
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${product.price}
                </span>
              </div>
              <div className="flex justify-center mt-5 mb-3">
                <button
                  className="flex  text-white  justify-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-full"
                  onClick={cartHandler}
                >
                  Add To Cart
                </button>{' '}
              </div>{' '}
              <div className="flex justify-center mt-5 mb-3">
                <Link to="/checkout">
                  <button
                    className={`
                    flex  text-white  justify-center ${
                      cart.length === 0
                        ? 'bg-indigo-200 cursor-not-allowed'
                        : 'bg-indigo-500 hover:bg-indigo-600 cursor-pointer'
                    } border-0 py-2 px-6 focus:outline-none  rounded w-full
                  `}
                  >
                    Checkout
                  </button>
                </Link>{' '}
              </div>
              <Link to="/shop">
                <button className="flex  text-white  justify-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded w-full">
                  Back to shop
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;
