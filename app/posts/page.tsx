import { fetchPosts } from "@/lib/post";
import Link from "next/link";

export default async function PostsPage() {
  const posts = await fetchPosts();
  return (
    <main className="max-w-screen-md mx-auto p-5">
      <section>
        <h1>Posts</h1>
        {posts.map((post) => (
          <Link key={`post-item-${post.slug}`} href={`/posts/${post.slug}`}>
            <section>
              <h2>{post.title}</h2>
            </section>
          </Link>
        ))}
      </section>
    </main>
  );
}
