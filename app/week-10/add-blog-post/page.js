"use client";

import { useState } from "react";
import { useUserAuth } from "../_utils/auth-context";
import { dbAddBlogPost } from "../_services/blog-service";

export default function addBlogPostPage() {
  const { user } = useUserAuth();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleTitleChange = (event) => setTitle(event.target.value);
  const handleContentChange = (event) => setContent(event.target.value);
  const handleSubmit = (event) => {
    event.preventDefault();
    let newBlogPost = {
      title: title,
      content: content,
    };
    dbAddBlogPost(user.uid, newBlogPost);
    setTitle("");
    setContent("");
  };

  if (!user) {
    return (
      <main>
        <p>you must be logged in to submit a blog post</p>
      </main>
    );
  }

  return (
    <main>
      <header>
        <h1>Add a new post</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input type="text" onChange={handleTitleChange} value={title} />
        </div>
        <div>
          <label>Content</label>
          <input type="text" onChange={handleContentChange} value={content} />
        </div>
        <div>
          <button type="submit">add post</button>
        </div>
      </form>
    </main>
  );
}
