"use client";

import { useState } from "react";

export function ItemButton() {
  let buttonClass =
    "flex-1 bg-blue-400 text-white text-center rounded-md hover:bg-blue-600 disabled:bg-slate-300";
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const decrement = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div className="flex flex-row justify-between gap-2 w-52 m-4 p-4 bg-slate-50 font-bold rounded-md">
      <button
        onClick={decrement}
        className={buttonClass}
        disabled={quantity <= 1}
      >
        -
      </button>
      <span className="flex-1 text-black text-center">{quantity}</span>
      <button
        onClick={increment}
        className={buttonClass}
        disabled={quantity >= 20}
      >
        +
      </button>
    </div>
  );
}
