import { routes } from "../lib/constants";
// import { allPosts } from "contentlayer/generated";

export default async function sitemap() {
  // const blogs = allBlogs.map((post) => ({
  //   url: `https://harshasomisetty.me/blog/${post.slug}`,
  //   lastModified: post.publishedAt,
  // }));

  const routeUrls = Object.keys(routes).map((route) => ({
    url: `https://harshasomisetty.me${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routeUrls];
}
