import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "pung.dev";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/jpg";

// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "#111827",
          color: "#f3f4f6",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        pung.dev
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
