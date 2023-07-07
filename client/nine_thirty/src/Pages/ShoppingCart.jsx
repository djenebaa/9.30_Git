import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../App";

function ShoppingCart() {
  const { setCart } = useContext(CartContext);
  const { cart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    let price = 0;
    cart.forEach((item) => {
      price += parseInt(item.price);
    });
    setTotalPrice(price);
  }, [cart]);

  const handleDelete = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const generateFakeOrderNumber = () => {
    const characters = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let orderNumber = "";
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        orderNumber += characters[randomIndex];
      }
      if (i < 4) {
        orderNumber += "-";
      }
    }
    return orderNumber;
  };
  
  const handlePlaceOrder = () => {
    // const fakeOrderNumber = Math.floor(Math.random() * 1000000) + 1;
    setOrderNumber(generateFakeOrderNumber().toString());
    setShowPopup(true);
    // Clear the cart and local storage
    setCart([]);
    localStorage.removeItem("cart");
  };
  const CloseOrder = () => {
    setShowPopup(false);
    setOrderNumber("");
  };

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md mb-4"
            >
              <div className="flex items-center">
                <img
                  src={item.picture}
                  alt={item.type}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <p>{item.type}</p>
                  <p>Price: {item.price}</p>
                </div>
              </div>
              <button
                className="bg-[#2E2E68] text-white px-4 py-2 rounded"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
          <p>Total Price: {totalPrice}€</p>
          <button
            className="bg-[#2E2E68] text-white px-4 py-2 rounded"
            onClick={handlePlaceOrder}
          >
            Place Order
          </button>
         
        </>
      )}
       {showPopup && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
              <div className="bg-white p-4 rounded-lg">
                <p className="text-lg font-semibold">
                  Order Placed Successfully!
                </p>
                <p>Order Number: {orderNumber}</p>
                <button
                  className="bg-[#2E2E68] text-white px-4 py-2 rounded mt-4"
                  onClick={CloseOrder}
                >
                  Close
                </button>
              </div>
            </div>
          )}
    </div>
  );
}

export default ShoppingCart;
