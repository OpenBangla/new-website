import Image from "next/image";
import Link from "next/link";

import heroDark from "@/assets/home/hero-dark.webp";
import heroLight from "@/assets/home/hero-light.webp";

export default function Hero() {
  return (
    <section className="bg-neutral-50 py-12 md:py-20 lg:py-28 dark:bg-neutral-950">
      <div className="mx-auto w-full max-w-350 px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-0">
          <div className="flex justify-center flex-col items-baseline">
            <h4 className="rounded-full bg-emerald-500/20 px-5 py-2.5 font-medium text-emerald-900 text-sm dark:bg-emerald-500/10 dark:text-emerald-400">
              Open Source • Cross Platform
            </h4>

            <h1 className="max-w-2xl pt-4 pb-5 font-bricolage-grotesque font-extrabold text-3xl text-zinc-900 leading-tight tracking-tight md:text-5xl dark:text-zinc-50">
              A keyboard built for{" "}
              <span className="bg-linear-to-r from-emerald-900 to-emerald-800/80 bg-clip-text text-transparent dark:bg-linear-to-r dark:from-emerald-600 dark:to-emerald-600/80">
                Bangla
              </span>
            </h1>

            <p className="max-w-xl pb-8 font-medium text-lg text-zinc-600 leading-relaxed md:pb-12 md:text-xl dark:text-zinc-400">
              Type in Bangla naturally — phonetic, fixed layouts, smart suggestions. Free and open
              source.
            </p>

            <div className="w-full flex flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row sm:gap-6">
              <Link
                href="/docs/installation"
                className="px-7 py-4 font-semibold items-center justify-center rounded-2xl duration-200 ease-in-out border border-transparent bg-emerald-700 text-white hover:bg-emerald-800/90 dark:bg-emerald-700 dark:hover:bg-emerald-600/90"
              >
                Install OpenBangla Keyboard
              </Link>
              <Link
                href="/docs/usage"
                className="px-7 py-4 font-semibold items-center justify-center rounded-2xl duration-200 ease-in-out border border-[#5D5D5D] bg-transparent text-[#5D5D5D] hover:border-transparent hover:bg-gray-300 dark:text-gray-100 dark:hover:bg-gray-300/30 dark:hover:text-white"
              >
                View Demo
              </Link>
            </div>
          </div>
          <div className="flex w-full justify-center lg:w-auto">
            <div className="w-full max-w-[520px] rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
              <Image
                src={heroLight}
                alt="OpenBangla Keyboard 3.0 layout viewer"
                width={902}
                height={420}
                className="h-auto w-full rounded-xl dark:hidden"
                priority
              />
              <Image
                src={heroDark}
                alt="OpenBangla Keyboard 3.0 layout viewer"
                width={902}
                height={420}
                className="hidden h-auto w-full rounded-xl dark:block"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
