"use client";

import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function ProtectedPage() {
  const { user, firebaseSignOut } = useUserAuth();

  async function HandleSignOut() {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main>
      <h1>Protected Page</h1>
      {user ? (
        <div>
          <p>
            Hello {user.displayName} your email is: {user.email}
          </p>
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
