import React from "react";
import cart from "../assets/cart.png";

const Cart = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-full gap-3 my-16 md:mt-0">
        <img src={cart} alt="user profile pic" className="w-40 p-10 " />
        <div className="flex flex-col items-end h-full gap-10">
          <h2 className="text-xl font-semibold ">Tu carrito está vacío</h2>
          <button className="px-2 border-2 border-gray-200 rounded w-max bg-liberet-secondary-blue">
            Seguir comprando
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
