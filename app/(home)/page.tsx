import Blogs from "./_components/blogs";
import Capabilities from "./_components/capabilities";
import Features from "./_components/features";
import Footer from "./_components/footer";
import GetObk from "./_components/get-obk";
import Hero from "./_components/hero";

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
