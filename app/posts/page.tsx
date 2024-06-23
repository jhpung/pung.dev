import { fetchPosts } from "@/lib/post";
import Link from "next/link";
import dayjs from "dayjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Posts",
  description: "경험을 정리하여 기록한 공간입니다.",
};

export default async function PostsPage() {
  const posts = await fetchPosts();
  return (
    <main className="max-w-screen-md mx-auto p-5">
      <section>
        <h1>Posts</h1>
        <p>경험을 정리하여 기록한 공간입니다.</p>
        <div className="flex flex-col gap-y-4">
          {posts
            .sort((a, b) => (a.date > b.date ? -1 : 1))
            .map((post) => (
              <Link key={`post-item-${post.slug}`} href={`/posts/${post.slug}`}>
                <section className="not-prose flex flex-col">
                  <h2 className="text-2xl mb-2">{post.title}</h2>
                  <p className="text-base mb-2 font-light text-gray-700">
                    {post.description}
                  </p>
                  <p className="text-sm font-light text-gray-500">
                    {dayjs(post.date).format("YYYY. MM. DD")}
                  </p>
                </section>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
