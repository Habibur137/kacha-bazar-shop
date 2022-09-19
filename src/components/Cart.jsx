import React from "react";

import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
const Cart = () => {
  const { products, count } = useSelector((state) => state.products);
  return (
    <div>
      {count > 0 ? (
        <div>
          {products.map(
            (cart) =>
              cart.quantity > 0 && <CartItem key={cart.id} cart={cart} />
          )}
        </div>
      ) : (
        <EmptyCart />
      )}
    </div>
  );
};

export default Cart;
