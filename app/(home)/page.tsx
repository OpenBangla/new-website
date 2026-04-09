import Blogs from "./_components/sections/blogs";
import Capabilities from "./_components/sections/capabilities";
import Features from "./_components/sections/features";
import Footer from "./_components/sections/footer";
import GetObk from "./_components/sections/get-obk";
import Hero from "./_components/sections/hero";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <Capabilities />
      <GetObk />
      <Blogs />
      <Footer />
    </>
  );
}
