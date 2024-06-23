import { fetchNotes } from "@/lib/note";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const alt = "pung.dev";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";

// Image generation
export default async function Image({ params }: { params: { slug: string } }) {
  const notes = await fetchNotes();

  const note = notes.find(
    (note) => decodeURIComponent(note.slug) === params.slug
  );

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: "#111827",
          color: "#f3f4f6",
          padding: "24px",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {note?.title}
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: "Pretendard",
      //     data: await pretendard,
      //     style: "normal",
      //     weight: 400,
      //   },
      // ],
    }
  );
}
