import Image from "next/image";
import Container from "@/components/common/Container";
import Flex from "@/components/common/Flex";
import { Facebook, GitHub, Mail, Twitter } from "./Icons";

export default function Footer() {
  return (
    <>
      <section className="border-zinc-100 border-t bg-white py-12 md:py-16 dark:border-zinc-900 dark:bg-zinc-950">
        <Container>
          <Flex className="flex-col items-center justify-between gap-10 text-center lg:flex-row lg:items-start lg:text-left">
            <Flex className="flex-col items-center lg:items-start">
              <Flex className="gap-4">
                <div className="overflow-hidden rounded-xl shadow-sm">
                  <Image
                    src="https://placehold.co/48x48"
                    alt="placeholder"
                    width={48}
                    height={48}
                  />
                </div>
                <h3 className="font-bold font-bricolage-grotesque text-xl text-zinc-900 md:text-2xl dark:text-zinc-50">
                  OpenBangla Keyboard
                </h3>
              </Flex>
              <p className="max-w-sm pt-4 pb-6 text-base text-zinc-500 md:text-lg dark:text-zinc-400">
                The versatile, all-in-one solution for both phonetic and
                fixed-layout writing.
              </p>
              <Flex className="gap-5 text-zinc-400 transition-colors hover:text-emerald-500 dark:text-zinc-600">
                <Facebook className="cursor-pointer hover:text-emerald-500" />
                <GitHub className="cursor-pointer hover:text-emerald-500" />
                <Mail className="cursor-pointer hover:text-emerald-500" />
                <Twitter className="cursor-pointer hover:text-emerald-500" />
              </Flex>
            </Flex>
          </Flex>
        </Container>
      </section>
      <footer className="border-emerald-900/50 border-t bg-emerald-950 py-8 dark:border-zinc-900 dark:bg-black">
        <Container>
          <Flex className="flex-col items-center justify-between gap-4 font-medium text-emerald-100/70 text-sm md:flex-row md:text-base dark:text-zinc-500">
            <p className="text-center md:text-left">
              © 2015-2026 OpenBangla Team. All rights reserved.
            </p>
            <p>
              Made with 💖 by{" "}
              <span className="text-amber-200 dark:text-amber-500/80">
                Muhsin
              </span>
            </p>
          </Flex>
        </Container>
      </footer>
    </>
  );
}
