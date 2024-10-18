"use client";

import ItemList from "./itemlist";
import ItemButton from "./new-item";
import itemData from "./items.json";
import { useState } from "react";

export default function Page() {
  let items = itemData.map((item) => ({ ...item }));
  const [itemList, setItemList] = useState(items);

  const handleAddItem = (newItemObj) => {
    setItemList([...itemList, newItemObj]);
  };

  return (
    <main>
      <h1 className="font-bold text-3xl m-3 text-yellow-100">Shopping List</h1>
      <ItemButton onAddItemFunc={handleAddItem} />
      <ItemList itemList={itemList} />
    </main>
  );
}
