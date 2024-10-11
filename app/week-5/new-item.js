"use client";

import { useState } from "react";

export function ItemButton() {
  // old from week 4
  let buttonClass =
    "flex-1 bg-sky-400 text-white text-center rounded-md hover:bg-sky-600 disabled:bg-stone-300";
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    setQuantity(quantity - 1);
  };

  // new for week 5
  const [name, setName] = useState("");
  const [category, setCategory] = useState("produce");

  const handleNameChange = (event) => setName(event.target.value);
  const handleCategoryChange = (event) => setCategory(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault;

    let registrationObject = {
      item: name,
      quant: quantity,
      cat: category,
    };

    alert(`
        Name: ${registrationObject.item} 
        Quantity needed: ${registrationObject.quant} 
        Category: ${registrationObject.cat} 
        `);

    setName("");
    setQuantity(1);
    setCategory("produce");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-2 m-4 bg-teal-950 rounded-md"
    >
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
      <div className="p-4 m-4 bg-sky-400 text-white text-center rounded-md hover:bg-sky-600 disabled:bg-stone-300">
        <button type="submit">Add to list</button>
      </div>
    </form>
  );
}
