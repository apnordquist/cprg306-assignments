"use client";

import ItemList from "./itemlist";
import ItemButton from "./new-item";
import itemData from "./items.json";
import MealIdeas from "./meal-ideas";
import { useState } from "react";

export default function Page() {
  let items = itemData.map((item) => ({ ...item }));
  const [itemList, setItemList] = useState(items);
  const [selectedItem, setSelectedItem] = useState("");

  const handleAddItem = (newItemObj) => {
    setItemList([...itemList, newItemObj]);
  };

  const handleItemSelect = (name) => {
    let newName = name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
        ""
      );

    setSelectedItem(newName);
  };

  return (
    <main>
      <h1 className="font-bold text-3xl m-3 text-yellow-100">Shopping List</h1>
      <ItemButton onAddItemFunc={handleAddItem} />
      <div className="flex">
        <ItemList itemList={itemList} onSelect={handleItemSelect} />
        <MealIdeas ingredient={selectedItem} />
      </div>
    </main>
  );
}
