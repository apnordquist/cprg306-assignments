import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore";
import { db } from "../_utils/firebase";

export async function dbAddBlogPost(userId, blogPostObj) {
  try {
    const newBlogPostReference = collection(db, "users", userId, "blog-posts");
    const newBlogPostPromise = await addDoc(newBlogPostReference, blogPostObj);
    console.log(newBlogPostPromise.id);
  } catch (error) {
    console.log(error);
  }
}

export async function dbGetAllBlogPostsByUser(userId, blogPostListStateSetter) {
  try {
    const allBlogPostsReference = collection(db, "users", userId, "blog-posts");
    const allBlogPostsQuery = query(allBlogPostsReference);
    const querySnapshot = await getDocs(allBlogPostsQuery);
    let blogPostArray = [];
    querySnapshot.forEach((docSnap) => {
      let thisPost = {
        id: docSnap.id,
        ...docSnap.data(),
      };
      blogPostArray.push(thisPost);
    });
    blogPostListStateSetter(blogPostArray);
  } catch (error) {
    console.log(error);
  }
}

export async function dbGetBlogPost(userId, postId, blogPostStateSetter) {
  try {
    const blogPostReference = doc(db, "users", userId, "blog-posts", postId);
    const documentSnapshot = await getDoc(blogPostReference);
    if (documentSnapshot.exists()) {
      blogPostStateSetter(documentSnapshot.data());
    } else {
      console.log("Post does not exist");
    }
  } catch (error) {
    console.log(error);
  }
}
