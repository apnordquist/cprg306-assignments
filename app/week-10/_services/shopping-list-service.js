import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query } from "firebase/firestore";

export async function dbGetItems(userId, itemStateSetter) {
    try {
      const allItems = collection(db, "users", userId, "items");
      const allItemsQuery = query(allItems);
      const querySnapshot = await getDocs(allItemsQuery);
      let itemArray = [];
      querySnapshot.forEach((docSnap) => {
        let item = {
          id: docSnap.id,
          ...docSnap.data(),
        };
        itemArray.push(item);
      });
      itemStateSetter(itemArray);
    } catch (error) {
      console.log(error);
    }
  }

  export async function dbAddItem(userId, itemObj) {
    try {
      const newItemReference = collection(db, "users", userId, "items");
      const newItemPromise = await addDoc(newItemReference, itemObj);
      console.log(newItemPromise.id);
    } catch (error) {
      console.log(error);
    }
  }