import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import Image from "next/image";
import { Facebook, Twitter, GitHub, Mail } from "./Icons";

export default function Footer() {
  return (
    <>
      <section className="py-16 bg-white">
        <Container>
          <Flex className="flex-col justify-baseline items-baseline">
            <Flex className="gap-5">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="https://placehold.co/48x48"
                  alt="placeholder"
                  width={48}
                  height={48}
                />
              </div>
              <h3 className="text-xl font-bold font-bricolage-grotesque">
                OpenBangla Keyboard
              </h3>
            </Flex>
            <p className="pt-4 pb-8 max-w-sm text-lg text-[#5D5D5D] ">
              The versatile, all-in-one solution for both phonetic and
              fixed-layout writing.
            </p>
            <Flex className="gap-4">
              <Facebook />
              <GitHub />
              <Mail />
              <Twitter />
            </Flex>
          </Flex>
        </Container>
      </section>
      <footer className="bg-[#06402B] py-6">
        <Container>
          <Flex className="justify-between text-white font-medium">
            <p>Copyright 2015-2026 OpenBangla Team. All rights reserved.</p>
            <p>
              Made with 💖 by <span className="text-[#FFE498]">Muhsin</span>
            </p>
          </Flex>
        </Container>
      </footer>
    </>
  );
}
