"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import avroPhoneticDark from "@/assets/home/avro-phonetic-dark.webp";
import avroPhoneticLight from "@/assets/home/avro-phonetic-light.webp";
import configurationToolDark from "@/assets/home/configuration-tool-dark.webp";
import configurationToolLight from "@/assets/home/configuration-tool-light.webp";
import dictionaryDark from "@/assets/home/dictionary-dark.webp";
import dictionaryLight from "@/assets/home/dictionary-light.webp";
import fixedLayoutsDark from "@/assets/home/fixed-layouts-dark.webp";
import fixedLayoutsLight from "@/assets/home/fixed-layouts-light.webp";

const CAPABILITIES = [
  {
    id: "avro-phonetic",
    label: "Avro Phonetic",
    description: "Preview window with smart suggestions for fluid phonetic typing.",
    image: avroPhoneticLight,
    imageDark: avroPhoneticDark,
  },
  {
    id: "fixed-layout-support",
    label: "Fixed Layout Support",
    description: "Probhat, Munir Optima, National (Jatiya) layouts built-in.",
    image: fixedLayoutsLight,
    imageDark: fixedLayoutsDark,
  },
  {
    id: "dictionary-for-fixed-layouts",
    label: "Dictionary for Fixed Layouts",
    description: "Intelligent suggestions even when using non-phonetic layouts.",
    image: dictionaryLight,
    imageDark: dictionaryDark,
  },
  {
    id: "configuration-tool",
    label: "Configuration Tool",
    description: "Dedicated GUI tool for easy, intuitive customization.",
    image: configurationToolLight,
    imageDark: configurationToolDark,
  },
];

export default function Capabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (window.innerWidth < 768) return;
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!containerRef.current) return;

          const rect = containerRef.current.getBoundingClientRect();
          const sectionHeight = containerRef.current.scrollHeight;

          const scrollable = sectionHeight - window.innerHeight;
          if (scrollable <= 0) return;

          const progress = Math.min(1, Math.abs(rect.top) / scrollable);

          const index = Math.min(
            Math.floor(progress * CAPABILITIES.length),
            CAPABILITIES.length - 1,
          );

          if (rect.top <= 0 && index >= 0) {
            setActiveIndex(index);
          }

          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // The height of this container (500vh) determines how long the user scrolls
    <section
      ref={containerRef}
      className="relative h-auto md:h-[500vh] bg-neutral-50 dark:bg-neutral-950"
    >
      <div className="relative md:sticky top-0 flex h-auto md:h-screen items-center overflow-hidden py-16 md:py-0">
        <div className="mx-auto w-full max-w-350 px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
            {/* Left Side: Images - Hidden on mobile, shown on iPads and up */}
            <div className="hidden md:block relative h-75 w-full max-w-125 overflow-hidden rounded-3xl border border-zinc-200 bg-white lg:h-125 lg:w-1/2 dark:border-zinc-800 dark:bg-zinc-900">
              {CAPABILITIES.map((cap, i) => {
                const isActive = activeIndex === i;
                return (
                  <div
                    key={cap.id}
                    className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] will-change-transform will-change-opacity ${
                      isActive
                        ? "opacity-100 translate-y-0 scale-100"
                        : "opacity-0 translate-y-6 scale-[0.98]"
                    }`}
                  >
                    <div className="absolute inset-6 overflow-hidden rounded-2xl border border-zinc-200/80 bg-white shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
                      <Image
                        src={cap.image}
                        alt={cap.label}
                        fill
                        className="object-contain p-3 dark:hidden"
                        priority={i === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <Image
                        src={cap.imageDark}
                        alt={cap.label}
                        fill
                        className="hidden object-contain p-3 dark:block"
                        priority={i === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Mobile fallback image */}
            <div className="md:hidden mb-6 w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-sm dark:border-zinc-800">
              <Image
                src={CAPABILITIES[activeIndex]?.image || CAPABILITIES[0].image}
                alt={CAPABILITIES[activeIndex]?.label || "Capability"}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl object-cover"
              />
            </div>

            {/* Vertical progress indicator - left of cards */}
            <div className="hidden lg:flex flex-col items-center gap-3 w-1 self-stretch py-2">
              <div className="relative h-full w-0.5 bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 w-full bg-emerald-500 transition-[height] duration-200 ease-out rounded-full"
                  style={{ height: `${((activeIndex + 1) / CAPABILITIES.length) * 100}%` }}
                />
              </div>
              <div className="flex flex-col gap-3 -mt-3">
                {CAPABILITIES.map((_, i) => (
                  <div
                    key={i}
                    role="img"
                    aria-label={`Step ${i + 1}`}
                    className={`w-2 h-2 rounded-full border transition-colors duration-200 ${
                      activeIndex === i
                        ? "bg-emerald-500 border-emerald-500"
                        : "bg-white dark:bg-zinc-900"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Side: Clickable Options (Stationary) */}
            <div className="grid w-full grid-cols-1 gap-4 lg:w-1/2">
              <div className="mb-6 flex flex-col gap-2">
                <h2 className="font-bold font-bricolage-grotesque text-3xl text-zinc-900 md:text-4xl dark:text-zinc-50">
                  Core Typing Capabilities
                </h2>
                <p className="h-6 text-sm font-semibold text-emerald-700 dark:text-emerald-300 transition-all duration-300">
                  {CAPABILITIES[activeIndex]?.label}
                </p>
              </div>

              {CAPABILITIES.map((capability, i) => (
                <button
                  type="button"
                  key={capability.id}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      setActiveIndex(i);
                      return;
                    }
                    if (!containerRef.current) return;
                    const scrollPos =
                      containerRef.current.offsetTop +
                      i * (containerRef.current.scrollHeight / CAPABILITIES.length);
                    window.scrollTo({ top: scrollPos, behavior: "smooth" });
                  }}
                  className={`flex flex-col gap-2 rounded-2xl border p-6 text-left transition-all duration-300 border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm cursor-pointer ${
                    activeIndex === i
                      ? "md:border-emerald-500/50 md:shadow-md"
                      : "md:opacity-50 md:shadow-none hover:md:opacity-100"
                  }`}
                >
                  <h3
                    className={`font-bold transition-colors text-zinc-900 dark:text-zinc-50 ${
                      activeIndex === i
                        ? "md:text-emerald-700 md:dark:text-emerald-200"
                        : "md:text-zinc-700 md:dark:text-zinc-300"
                    }`}
                  >
                    {capability.label}
                  </h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {capability.description}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
