import getAllPost from "@/lib/getAllPost";
import Link from "next/link";
import React from "react";


export default async function Posts() {
  const posts = await getAllPost();
  return (
    <main className="mt-6">
      <h1>All Posts</h1>
      <ul className="mt-6">
          {
            posts.map(function(post, key){
              return(
                <li key={key}> <Link href={`/posts/${post.id}`}>{post.title}</Link></li>
              )
            })
          }
      </ul>
    </main>
  );
}
