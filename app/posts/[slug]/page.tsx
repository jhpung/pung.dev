import PostView from "@/components/post/PostView";
import { fetchPosts } from "@/lib/post";
import { notFound } from "next/navigation";

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await fetchPosts();
  const post = posts.find(
    (post) => encodeURIComponent(post.slug) === params.slug
  );

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-screen-md mx-auto p-5 pt-10">
      <PostView post={post} />
    </main>
  );
}
