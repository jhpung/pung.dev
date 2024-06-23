import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "edge";

// Image metadata
export const alt = "pung.dev";
export const size = {
  width: 300,
  height: 150,
};

export const contentType = "image/jpg";

// Image generation
export default async function Image() {
  // Font
  const pretendard = fetch(
    new URL("../public/static/fonts/PretendardVariable.woff2", import.meta.url)
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          background: "white",
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
