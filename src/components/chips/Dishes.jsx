import React from "react";

const Dishes = () => {
  return (
    <div
      className="flex flex-row items-center gap-1 px-1 bg-white rounded-full w-max"
      onClick={() => alert("You won another hug! That's great, isn't it?")}
    >
      <span className="text-lg text-liberet-primary-yellow">+1</span>
      Dishes
    </div>
  );
};

export default Dishes;
