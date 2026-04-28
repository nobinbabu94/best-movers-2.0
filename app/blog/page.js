export const metadata = {
  title: "Blog | Packers and Movers in Kochi - Home Shifting Tips",
  description:
    "Blog articles on choosing reliable packers and movers, home shifting costs in Kochi, and tips for stress-free relocation.",
  keywords: [
    "packers and movers blog",
    "how to choose reliable packers and movers",
    "cost of home shifting in kochi",
    "home shifting tips",
    "relocation advice",
  ],
};

const posts = [
  {
    title: "How to Choose Reliable Packers and Movers",
    summary:
      "Learn the top questions to ask, red flags to avoid, and the checklist for hiring trustworthy packers and movers in Kochi.",
    href: "#choose-reliable-packers",
  },
  {
    title: "Cost of Home Shifting in Kochi",
    summary:
      "Understand the main cost factors for home shifting services in Kochi, and how to compare quotes for a transparent move.",
    href: "#home-shifting-costs",
  },
];

import BlogContent from "./BlogContent";

export default function BlogPage() {
  return <BlogContent posts={posts} />;
}
