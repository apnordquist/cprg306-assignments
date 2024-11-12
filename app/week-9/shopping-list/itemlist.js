"use client";

import { useState } from "react";
import ItemComp from "./item";

export default function ItemList({ itemList, onItemSelect }) {
  const [sortBy, setSortBy] = useState("id");

  itemList.sort((a, b) => {
    if (isNaN(parseInt(a[sortBy]))) {
      let nameA = a[sortBy].toUpperCase();
      let nameB = b[sortBy].toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    } else {
      return a.id - b.id;
    }
  });

  const handleChangeSort = (event) => setSortBy(event.target.value);

  let selectedButton =
    "inline-block bg-amber-300 rounded text-black p-1 m-1 active:bg-amber-900 active:text-white";
  let unselectedButton =
    "inline-block bg-amber-600 rounded text-black p-1 m-1 active:bg-amber-900 active:text-white";

  return (
    <div>
      <div className="m-3 p-3">
        <p className="inline-block text-xl">Sort by:</p>
        <button
          className={sortBy == "name" ? selectedButton : unselectedButton}
          value="name"
          type="button"
          onClick={handleChangeSort}
        >
          Name
        </button>

        <button
          className={sortBy == "category" ? selectedButton : unselectedButton}
          value="category"
          type="button"
          onClick={handleChangeSort}
        >
          Category
        </button>
      </div>
      <ul>
        {itemList.map((item) => (
          <ItemComp itemObj={item} onSelect={onItemSelect} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
