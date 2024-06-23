import { readFileSync } from "fs";
import { globSync } from "glob";
import path from "path";
import grayMatter from "gray-matter";
import { z } from "zod";
import readingTime from "reading-time";
import { isExists } from "./util";

const ROOT_PATH = path.join(process.cwd(), "/posts");

const PostMatter = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).nullish(),
  series: z.string().nullish(),
  draft: z.boolean().default(true).nullish(),
  date: z.coerce.date(),
  thumbnail: z.string().nullish(),
});

const Post = PostMatter.extend({
  content: z.string(),
  minutes: z.number(),
  slug: z.string(),
});

export type PostMatter = z.infer<typeof PostMatter>;
export type Post = z.infer<typeof Post>;

export async function fetchPosts() {
  const paths = globSync(`${ROOT_PATH}/**/*.mdx`);

  return paths.map(parsePost).filter(isExists);
}

export function parsePost(path: string) {
  try {
    const file = readFileSync(path);

    const { content, data } = grayMatter(file);

    const postMatter = PostMatter.parse(data);

    if (postMatter.draft) {
      return null;
    }
    const post = Post.parse({
      ...postMatter,
      content,
      slug: path.split("/").at(-1)?.replace(".mdx", ""),
      minutes: Math.ceil(readingTime(content).minutes),
    });

    return post;
  } catch (err: unknown) {
    console.error(err);
    return null;
  }
}
