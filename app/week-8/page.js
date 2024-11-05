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

  const handleItemSelect = (itemObj) => {
    setSelectedItem = itemObj.name;
  };

  return (
    <main>
      <h1 className="font-bold text-3xl m-3 text-yellow-100">Shopping List</h1>
      <ItemButton onAddItemFunc={handleAddItem} />
      <ItemList itemList={itemList} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectedItem} />
    </main>
  );
}
