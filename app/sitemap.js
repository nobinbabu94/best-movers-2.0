export default function sitemap() {
  const baseUrl = "https://best-movers.in";

  // In a real app, you might fetch dynamic routes from an API or database
  // For now, we define the static routes
  const routes = [
    "",
    "/about",
    "/contact",
    "/services",
    "/gallery",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));

  return routes;
}
