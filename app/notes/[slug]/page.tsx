import NoteView from "@/components/note/NoteView";
import { fetchNotes } from "@/lib/note";
import { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;
  const notes = await fetchNotes();
  const note = notes.find((note) => note.slug === slug);
  const p = await parent;

  return {
    title: note?.title,
    description: note?.description,
  };
}

export default async function NotePage({ params }: Props) {
  const notes = await fetchNotes();
  const note = notes.find(
    (note) => encodeURIComponent(note.slug) === params.slug
  );

  if (!note) {
    notFound();
  }

  return (
    <main className="max-w-screen-md mx-auto p-5 pt-10">
      <NoteView note={note} />
    </main>
  );
}
