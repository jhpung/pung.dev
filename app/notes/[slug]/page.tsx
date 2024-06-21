import NoteView from "@/components/note/NoteView";
import { fetchNotes } from "@/lib/note";
import { notFound } from "next/navigation";

export default async function NotePage({
  params,
}: {
  params: { slug: string };
}) {
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
