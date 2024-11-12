"use client";

import { useEffect, useState } from "react";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { dbGetAllBlogPostsByUser } from "./_services/blog-service";

export default function SignInPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  async function HandleSignIn() {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.log(error);
    }
  }

  async function HandleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  const [blogPostList, setBlogPostList] = useState([]);
  useEffect(() => {
    if (user) {
      dbGetAllBlogPostsByUser(user.uid, setBlogPostList);
    }
  }, [user]);

  return (
    <main>
      <header>
        <h1 className="text-xl text-center m-8">Firebase Authorization</h1>
      </header>
      {user ? (
        <div>
          <div>
            <img className="w-20 h-20 rounded-full m-2" src={user.photoURL} />
          </div>
          <div>
            <p className="text-lg m-2">Welcome {user.displayName}!</p>
          </div>
          <div>
            <Link href="/week-10/add-blog-post/">Create post.</Link>
            <section>
              <h2>My Posts</h2>
              <ul>
                {blogPostList.map((post) => {
                  let postUrl = `/week-10/${post.id}`;
                  return (
                    <li key={post.id}>
                      <Link href={postUrl}>{post.title}</Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div>
            <button
              type="button"
              className="text-lg rounded bg-red-600 text-slate-300 p-2 m-4"
              onClick={HandleSignOut}
            >
              Sign Out
            </button>
          </div>
        </div>
      ) : (
        <div>
          <button
            type="button"
            className="text-lg rounded bg-green-600 text-slate-300 p-2 m-4"
            onClick={HandleSignIn}
          >
            Sign In
          </button>
        </div>
      )}
    </main>
  );
}
