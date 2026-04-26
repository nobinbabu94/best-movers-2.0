export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/maintenance", "/api"],
      },
    ],
    sitemap: "https://best-movers.in/sitemap.xml",
  };
}
