import { type InferPageType, PathUtils } from "fumadocs-core/source";
import { blog } from "./source";

type BlogPage = InferPageType<typeof blog>;

function getName(path: string) {
  return PathUtils.basename(path, PathUtils.extname(path));
}

export function getBlogPostDate(post: BlogPage) {
  return new Date(post.data.date ?? getName(post.path));
}

export function formatBlogPostDate(post: BlogPage) {
  return getBlogPostDate(post).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function getLatestBlogPosts(limit?: number) {
  const posts = [...blog.getPages()].sort(
    (a, b) => getBlogPostDate(b).getTime() - getBlogPostDate(a).getTime(),
  );

  return typeof limit === "number" ? posts.slice(0, limit) : posts;
}
