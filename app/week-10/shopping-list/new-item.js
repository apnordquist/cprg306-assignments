"use client";

import { useState } from "react";

export default function ItemButton({ onAddItemFunc }) {
  let buttonClass =
    "flex-1 bg-sky-400 w-full h-full text-white text-center rounded-md hover:bg-sky-600 disabled:bg-stone-300";

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");
  const [id, setId] = useState(Math.random() * 1000);

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault;

    let newItem = {
      id: id,
      name: name,
      quantity: quantity,
      category: category,
    };

    onAddItemFunc(newItem);

    setName("");
    setQuantity(1);
    setCategory("produce");
    setId(Math.random() * 1000);
  };

  return (
    <form className="flex flex-col max-w-96 p-2 m-4 bg-teal-950 rounded-md">
      {/* new for week 5 */}
      <div className="m-4">
        <input
          type="text"
          onChange={handleNameChange}
          value={name}
          placeholder="Item Name"
          className="w-full p-4 rounded-md bg-stone-50 text-indigo-950"
          required
        />
      </div>
      <div className="flex justify-between">
        {/* old from week 4 */}
        <div className="flex flex-row justify-between gap-2 w-52 m-4 p-4 font-bold rounded-md bg-stone-50">
          <button
            onClick={decrement}
            className={buttonClass}
            disabled={quantity <= 1}
            type="button"
          >
            -
          </button>
          <span className="flex-1 text-indigo-950 text-center">{quantity}</span>
          <button
            onClick={increment}
            className={buttonClass}
            disabled={quantity >= 20}
            type="button"
          >
            +
          </button>
        </div>

        {/* new for week 5 */}
        <div className="m-4 p-4 rounded-md bg-stone-50 text-indigo-950">
          <select
            onChange={handleCategoryChange}
            value={category}
            className="bg-inherit text-inherit w-full"
          >
            <option value="produce">Produce</option>
            <option value="dairy">Dairy</option>
            <option value="bakery">Bakery</option>
            <option value="meat">Meat</option>
            <option value="frozen">Frozen Foods</option>
            <option value="canned">Canned Goods</option>
            <option value="dry">Dry Goods</option>
            <option value="beverages">beverages</option>
            <option value="snacks">Snacks</option>
            <option value="household">Household</option>
            <option value="other">other</option>
          </select>
        </div>
      </div>
      <div className="max-w-96 h-14 m-4 bg-sky-400 text-white text-center rounded-md hover:bg-sky-600 disabled:bg-stone-300">
        <button className="w-full h-full" type="submit" onClick={handleSubmit}>
          Add to list
        </button>
      </div>
    </form>
  );
}
