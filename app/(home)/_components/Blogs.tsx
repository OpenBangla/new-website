import Container from "@/components/common/Container";
import BlogCard from "./BlogCard";

const BLOGS = [
  {
    imgSrc: "https://placehold.co/160x90",
    imgAlt: "placeholder",
    title: "বিশেষ বিজ্ঞপ্তি!",
    date: "October 2, 2026",
    description:
      "প্রায় ২ বছর পর আপনাদের কাছে ওপেনবাংলা কিবোর্ডের ২.০.০ সংস্করণ এনে দিতে পেরে আমরা খুবই আনন্দিত। তবে আগেই বলে দিতে চাই, এযাবতকালে ওপেনবাংলা কিবোর্ডের অন্যতম বড় রিলিজ হতে চলেছে এটি!",
  },
];

export default function Blogs() {
  return (
    <section className="py-20">
      <Container>
        <div>
          <h1 className="font-bold font-bricolage-grotesque text-4xl">
            Stay Updated
          </h1>
          <p className="pt-2 text-[#5D5D5D] text-xl">
            Release notes, announcements, and updates from the OpenBangla team.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 py-10">
          {BLOGS.map((blog) => (
            <BlogCard
              key={blog.title}
              imgSrc={blog.imgSrc}
              imgAlt={blog.imgAlt}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
