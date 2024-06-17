import { Post } from "@/lib/post";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypePrettyCode from "rehype-pretty-code";
import mdxMermaid from "mdx-mermaid";
import { Mermaid } from "mdx-mermaid/Mermaid";

interface PostViewProps {
  post: Post;
}

export default function PostView({ post }: PostViewProps) {
  return (
    <section>
      <h1>{post.title}</h1>
      <article>
        <MDXRemote
          source={post.content}
          components={{
            mermaid: Mermaid,
          }}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm, [mdxMermaid, { output: "svg" }]],
              rehypePlugins: [
                rehypeSlug,
                rehypeAutolinkHeadings,
                rehypeToc,
                rehypePrettyCode,
              ],
            },
          }}
        />
      </article>
    </section>
  );
}
