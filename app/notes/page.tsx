import { fetchNotes } from "@/lib/note";
import dayjs from "dayjs";
import Link from "next/link";

export default async function NotesPage() {
  const notes = await fetchNotes();

  return (
    <main className="max-w-screen-md mx-auto p-5">
      <section>
        <h1>Notes</h1>
        <p>학습한 지식을 정리해놓는 공간입니다.</p>
        <div className="flex flex-col gap-y-4">
          {notes
            .sort((a, b) => (a.date > b.date ? -1 : 1))
            .map((note) => (
              <Link key={`note-item-${note.slug}`} href={`/notes/${note.slug}`}>
                <section className="not-prose flex flex-col">
                  <h2 className="text-2xl mb-2">{note.title}</h2>
                  <p className="text-base mb-2 font-light text-gray-700">
                    {note.description}
                  </p>
                  <p className="text-sm font-light text-gray-500">
                    {dayjs(note.date).format("YYYY. MM. DD")}
                  </p>
                </section>
              </Link>
            ))}
        </div>
      </section>
    </main>
  );
}
