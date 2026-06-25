import Blogs from "./_components/sections/blogs";
import Features from "./_components/sections/features";
import Footer from "./_components/sections/footer";
import GetObk from "./_components/sections/get-obk";
import Hero from "./_components/sections/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <GetObk />
      <Blogs />
      <Footer />
    </>
  );
}
