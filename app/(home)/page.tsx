import Blogs from "./_components/Blogs";
import Capabilities from "./_components/Capabilities";
import Features from "./_components/Features";
import Footer from "./_components/Footer";
import GetObk from "./_components/GetObk";
import Hero from "./_components/Hero";

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
