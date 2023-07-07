// Composant enfant qui va être importé dans la page Furnitures.

import React, { useState, useEffect, useContext } from "react";
import AddtoCartButton from "./AddtoCartButton";
import { CartContext } from "../App";

// ici on défini toutes les props qui composent chaque produit.
function Furniture({
  type,
  price,
  description,
  picture,
  material,
  size_deep,
  size_height,
  size_width,
  height,
  width,
}) {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  },[]);

  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);
  

  const handleAddToCart = (e) => {
    e.preventDefault();
    const newItem = { type, price, description, picture };
    setCart([...cart, newItem]);
    setShowModal(true);
  };
  const closeModal = () => {
    setShowModal(false);
};
  return (

    <div class=" shadow-lg shadow-slate-200 rounded-xl p-2 m-2 flex-shrink-0 whitespace-normal"
    >
            <div class="flex h-60 items-center ">
                <img
                src={picture}
                alt="products picture"
                class="h-3/4 w-full text-center mb-1"
                />
            </div>
            <div>
              <h1 class="flex font-medium h-28 items-center text-left">{type}</h1>
            </div>
            <div class="flex font-medium h-10 items-center text-left">
              <p class="font-light">{price}</p>
            </div>
            <div class="mb-4">
              <AddtoCartButton onClick={handleAddToCart} />
              {showModal && (
                          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                              <div className="bg-white p-4 rounded-lg">
                                  <p className="text-lg font-semibold">You added {type} to cart!</p>
                                  <button
                                      className="bg-[#2E2E68] text-white px-4 py-2 rounded mt-4"
                                      onClick={closeModal}
                                  >
                                      Close
                                  </button>
                              </div>
                          </div>
                      )}
            </div>
    </div>
  );
}

export default Furniture;
