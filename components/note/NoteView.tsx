import { Note } from "@/lib/note";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeToc from "rehype-toc";
import rehypePrettyCode from "rehype-pretty-code";
import mdxMermaid from "mdx-mermaid";

interface NoteViewProps {
  note: Note;
}

export default function NoteView({ note }: NoteViewProps) {
  return (
    <section>
      <h1>{note.title}</h1>
      <article>
        <MDXRemote
          source={note.content}
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
