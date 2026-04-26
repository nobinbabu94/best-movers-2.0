export default function manifest() {
  return {
    name: "Best Packers & Movers",
    short_name: "Best Movers",
    description: "Professional packing and moving services across India.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2563eb",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/assets/best-packers-logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/assets/best-packers-logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
