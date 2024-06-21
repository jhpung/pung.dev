import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "pung.dev",
    short_name: "pung.dev",
    description: "개발 관련 지식, 경험들을 정리해두고 있습니다.",
    start_url: "/",
    display: "standalone",
    background_color: "#f3f4f6",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
