import Link from "next/link";
import Container from "@/app/(home)/_components/common/container";
import { formatBlogPostDate, getLatestBlogPosts } from "@/lib/blog";
import { getBlogImage } from "@/lib/source";
import BlogCard from "../ui/blog-card";

export default function Blogs() {
  const posts = getLatestBlogPosts(4);

  return (
    <section className="bg-neutral-50 py-14 dark:bg-neutral-950">
      <Container>
        <div className="text-center lg:text-left">
          <h2 className="font-bold font-bricolage-grotesque text-3xl text-zinc-900 md:text-4xl dark:text-zinc-50">
            Stay Updated
          </h2>
          <p className="pt-2 text-lg text-zinc-600 md:text-xl dark:text-zinc-400">
            Release notes, announcements, and updates from the OpenBangla team.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 pt-10 lg:grid-cols-2">
          {posts.map((post) => (
            <Link key={post.url} href={post.url} className="block">
              <BlogCard
                imgSrc={getBlogImage(post).url}
                imgAlt={post.data.title}
                title={post.data.title}
                date={formatBlogPostDate(post)}
                description={post.data.description ?? ""}
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
