"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import ItemList from "./itemlist";
import ItemButton from "./new-item";
import MealIdeas from "./meal-ideas";
import { useState, useEffect } from "react";
import { dbGetItems, dbAddItem } from "../_services/shopping-list-service";

export default function ProtectedPage() {
  const { user, firebaseSignOut } = useUserAuth();

  const [itemList, setItemList] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");

  const handleAddItem = (newItemObj) => {
    dbAddItem(user.uid, newItemObj);
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

  async function HandleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (user) {
      dbGetItems(user.uid, setItemList);
    }
  }, [user]);

  return (
    <main>
      {user ? (
        <div>
          <h1 className="font-bold text-3xl m-3 text-yellow-100">
            Shopping List
          </h1>
          <ItemButton onAddItemFunc={handleAddItem} />
          <div className="flex">
            <ItemList itemList={itemList} onItemSelect={handleItemSelect} />
            <MealIdeas ingredient={selectedItem} />
          </div>
        </div>
      ) : (
        <div>
          <p>access denied</p>
          <Link href="/week-9/">return to login</Link>
        </div>
      )}
      <div>
        <button
          type="button"
          className="text-lg rounded bg-red-600 text-slate-300 p-2 m-4"
          onClick={HandleSignOut}
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}
