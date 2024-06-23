import PostView from "@/components/post/PostView";
import { fetchPosts } from "@/lib/post";
import { ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
) {
  const slug = params.slug;
  const posts = await fetchPosts();
  const post = posts.find((post) => post.slug === slug);
  const p = await parent;

  return {
    title: post?.title,
    description: post?.description,
  };
}

export default async function PostPage({ params }: Props) {
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
