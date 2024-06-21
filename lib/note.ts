import { readFileSync } from "fs";
import { globSync } from "glob";
import path from "path";
import grayMatter from "gray-matter";
import { z } from "zod";
import readingTime from "reading-time";
import { isExists } from "./util";

const ROOT_PATH = path.join(process.cwd(), "/notes");

const NoteMatter = z.object({
  title: z.string(),
  description: z.string(),
  tags: z.array(z.string()).nullish(),
  category: z.string(),
  draft: z.boolean().default(true).nullish(),
  date: z.coerce.date(),
  thumbnail: z.string().nullish(),
});

const Note = NoteMatter.extend({
  content: z.string(),
  minutes: z.number(),
  slug: z.string(),
});

export type NoteMatter = z.infer<typeof NoteMatter>;
export type Note = z.infer<typeof Note>;

export async function fetchNotes() {
  const paths = globSync(`${ROOT_PATH}/**/*.mdx`);

  return paths.map(parseNote).filter(isExists);
}

export function parseNote(path: string) {
  try {
    const file = readFileSync(path);

    const { content, data } = grayMatter(file);

    const noteMatter = NoteMatter.parse(data);

    if (noteMatter.draft) {
      return null;
    }
    const Node = Note.parse({
      ...noteMatter,
      content,
      slug: path.split("/").at(-1)?.replace(".mdx", ""),
      minutes: readingTime(content).minutes,
    });

    return Node;
  } catch (err: unknown) {
    console.error(err);
    return null;
  }
}
