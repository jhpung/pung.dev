import { fetchNotes } from "@/lib/note";
import { fetchPosts } from "@/lib/post";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchPosts();
  const notes = await fetchNotes();

  const postUrls = posts.map(
    (post) =>
      ({
        url: `https://www.pung.dev/posts/${post.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      } as MetadataRoute.Sitemap[number])
  );

  const noteUrls = notes.map(
    (note) =>
      ({
        url: `https://www.pung.dev/notes/${note.slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      } as MetadataRoute.Sitemap[number])
  );

  return [
    {
      url: "https://www.pung.dev",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: "https://www.pung.dev/posts",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://www.pung.dev/notes",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...postUrls,
    ...noteUrls,
  ];
}
