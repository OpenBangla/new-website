import Image from "next/image";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";

export default function Hero() {
  return (
    <section className="py-28">
      <Container>
        <Flex className="justify-between">
          <Flex className="flex-col items-baseline">
            <h4 className="rounded-full bg-[#16CD8A]/25 px-5 py-2.5 font-medium text-[#06402B] text-sm">
              Open Source • Cross Platform
            </h4>

            <h1 className="max-w-2xl tracking-tight pt-4 pb-5 font-bricolage-grotesque font-extrabold text-5xl text-[#202020] leading-14">
              The Last{" "}
              <span className="bg-linear-to-r from-[#0D8C5E] to-[#06402A] bg-clip-text text-transparent">
                Bangla writing solution
              </span>{" "}
              you'll ever need!
            </h1>

            <p className="max-w-xl pb-12 font-medium text-[#5D5D5D] text-xl leading-8">
              Fast, smart Bangla typing with phonetic and fixed layouts
              Available on
              <span className="font-bold"> Linux, Windows, and macOS.</span>
            </p>

            <Flex className="gap-6">
              <Button className="font-semibold">
                Install OpenBangla Keyboard
              </Button>{" "}
              <Button className="border-[#5D5D5D] bg-transparent text-[#5D5D5D]">
                View Demo
              </Button>
            </Flex>
          </Flex>
          <div>
            <Image
              src="https://placehold.co/500x300"
              alt="placeholder"
              height={300}
              width={500}
              loading="eager"
            />
          </div>
        </Flex>
      </Container>
    </section>
  );
}
