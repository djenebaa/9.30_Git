import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../App";

function CartLogo() {
  const { cart, setCart } = useContext(CartContext);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCart(parsedCart);
      setCartCount(parsedCart.length);
    }
  }, [setCart]);

  useEffect(() => {
    setCartCount(cart.length);
  }, [cart]);

  return (
    <NavLink to="/ShoppingCart">
      <div className="relative">
        <img className="h-6" src="panier.png" alt="icone panier" />
        {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
      </div>
    </NavLink>
  );
}

export default CartLogo;
