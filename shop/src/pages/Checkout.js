import React, { useEffect, useState } from 'react';
import { Header } from '../components/Header';
import { useRecoilState } from 'recoil';
import { cartState, totalState } from '../atoms/cartAtom';

export const Checkout = () => {
  const [cart, setCart] = useRecoilState(cartState);
  const [totalCart, setTotalCart] = useRecoilState(totalState);
  const [selectedItem, setSelectedItem] = useState({});
  const [selectedQuantityChange, setSelectedQuantity] = useState(1);
  useEffect(() => {
    getCart();
  }, [totalCart, cart]);
  function makeArr(item) {
    var a = [];
    for (var i = 0; i < item; i++) {
      a.push(i + 1);
    }
    return a;
  }

  const getCart = () => {
    const subTotal = cart.reduce((total, product) => {
      return total + product.price * +product.selectedQuantity;
    }, 0);
    setTotalCart(subTotal);
  };

  function deleteHandler(id) {
    console.log('test', id);
    const newCart = cart.filter((item) => item.id !== id);
    newCart.filter((item) => item.id !== id);
    setCart(newCart);
    console.log('radi', cart);
  }

  const quantityHandler = (e, item) => {
    const updatedData = cart.map((x) =>
      x.id === item.id ? { ...x, selectedQuantity: e.target.value } : x
    );
    const subTotal = updatedData.reduce((total, product) => {
      return total + product.price * +product.selectedQuantity;
    }, 0);
    console.log('subTotal: ' + subTotal);
    setCart(updatedData);
    return setTotalCart(subTotal);
  };
  return (
    <div>
      <Header />
      <div className="bg-gray-50 min-h-screen">
        <div>
          <div className="p-4">
            <div className="bg-white p-4 rounded-md">
              <div>
                <h2 className="mb-4 text-xl font-bold text-gray-700">
                  Checkout
                </h2>
                <div>
                  <span>Total price: {totalCart}</span>
                </div>
                <div>
                  <div>
                    <div className="flex justify-between bg-gradient-to-tr from-indigo-600 to-purple-600 rounded-md py-2 px-4 text-white font-bold text-md">
                      <div>
                        <span>Product Name</span>
                      </div>
                      <div>
                        <span>Brand</span>
                      </div>
                      <div>
                        <span>Price</span>
                      </div>
                      <div>
                        <span>Weight</span>
                      </div>
                      <div>
                        <span>Quantity</span>
                      </div>
                      <div>
                        <span>Actions</span>
                      </div>
                    </div>
                    <div>
                      {cart.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between border-t-2 text-sm font-normal mt-4 space-x-4"
                        >
                          <div className="px-2">
                            <span>{item.name}</span>
                          </div>
                          <div>
                            <span>{item.brand}</span>
                          </div>
                          <div className="px-2">
                            <span>${item.price}</span>
                          </div>
                          <div className="px-2">
                            <span>{item.weight}</span>
                          </div>
                          <div className="px-2">
                            <select onChange={(e) => quantityHandler(e, item)}>
                              {makeArr(item.quantity).map((option) => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                          <div onClick={() => deleteHandler(item.id)}>
                            <a className="btn">Delete</a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
