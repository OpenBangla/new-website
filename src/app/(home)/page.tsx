import Link from "next/link";
import {
  ArrowRight,
  CornerDownLeft,
  Keyboard,
  PencilRuler,
  Sparkles,
  SpellCheck,
} from "lucide-react";

export const metadata = {
  title: "OpenBangla Keyboard",
  description: "A free and open-source Bangla keyboard for Linux, macOS, and Windows.",
};

const features = [
  {
    icon: Keyboard,
    title: "Layouts for every typist",
    description:
      "Type with Avro, Probhat, Munir Optima, Jatiya & more. Avro users will feel at home.",
  },
  {
    icon: PencilRuler,
    title: "Add your own layout",
    description: "Create a custom keyboard layout if none of the built-in ones suit you.",
  },
  {
    icon: Sparkles,
    title: "Word suggestions",
    description: "As you type, suggested words appear so you can finish a word faster.",
  },
  {
    icon: SpellCheck,
    title: "Autocorrect",
    description: "Common spellings are corrected for you, and you can edit or add entries.",
  },
];

const platforms = [
  {
    name: "Linux",
    status: "Available now",
    available: true,
    description:
      "Prebuilt packages for Ubuntu, Fedora, and Arch Linux, with IBus and Fcitx5 setup guides.",
    href: "/docs/installation/linux",
  },
  {
    name: "macOS",
    status: "Installer in progress",
    available: false,
    description:
      "The installation guide links to a manual setup path while the installer is built.",
    href: "/docs/installation/macos",
  },
  {
    name: "Windows",
    status: "Installer in progress",
    available: false,
    description:
      "We are working on an installer. The installation guide will be updated when it is ready.",
    href: "/docs/installation/windows",
  },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-foreground";

export default function HomePage() {
  return (
    <div className="mx-auto w-full max-w-(--fd-layout-width) px-4 pb-16 pt-10 sm:pt-16">
      <section className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,26rem)] lg:gap-16">
        <div className="max-w-xl">
          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">OpenBangla Keyboard</h1>
          <p className="mt-5 text-xl text-fd-foreground sm:text-2xl">
            Write Bangla on Linux, macOS, and Windows.
          </p>
          <p className="mt-4 max-w-lg leading-relaxed text-fd-muted-foreground">
            A free and open-source Bangla keyboard. Type phonetically or with a layout you already
            know, and pick from word suggestions as you write.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/docs/installation"
              className={`inline-flex items-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-hover sm:px-5 ${focusRing}`}
            >
              Install OpenBangla
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href="https://github.com/OpenBangla/OpenBangla-Keyboard"
              target="_blank"
              rel="noreferrer"
              className={`rounded-lg border border-fd-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-fd-accent sm:px-5 ${focusRing}`}
            >
              View on GitHub
            </a>
          </div>
        </div>

        <figure className="mx-auto w-full max-w-md overflow-hidden rounded-2xl border border-fd-border bg-fd-card shadow-sm lg:mx-0 lg:max-w-none">
          <div className="flex items-center justify-between border-b border-fd-border px-5 py-3">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.12em] text-fd-muted-foreground">
              <Keyboard className="size-3.5" aria-hidden />
              Avro Phonetic
            </span>
            <span className="rounded border border-fd-border px-1.5 py-0.5 text-[11px] text-fd-muted-foreground">
              bn
            </span>
          </div>

          <div className="space-y-6 px-5 py-7 sm:px-7 sm:py-8">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-fd-muted-foreground">
                You type
              </p>
              <p className="mt-2 font-mono text-3xl tracking-tight">
                amar
                <span
                  aria-hidden
                  className="caret ml-1 inline-block h-[1.1em] w-0.5 translate-y-[0.15em] bg-brand"
                />
              </p>
            </div>

            <div className="flex items-center gap-3 text-fd-muted-foreground/70" aria-hidden>
              <span className="h-px flex-1 bg-fd-border" />
              <CornerDownLeft className="size-4" />
              <span className="h-px flex-1 bg-fd-border" />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-fd-muted-foreground">
                OpenBangla writes
              </p>
              <p lang="bn" className="mt-2 text-5xl font-semibold leading-tight">
                আমার
              </p>
            </div>
          </div>

          <figcaption className="border-t border-fd-border px-5 py-3 text-xs text-fd-muted-foreground">
            Avro Phonetic is one of the included layouts.
          </figcaption>
        </figure>
      </section>

      <section
        aria-labelledby="platforms-heading"
        className="mt-16 border-t border-fd-border pt-10 sm:mt-20"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
          <h2 id="platforms-heading" className="text-2xl font-semibold tracking-tight">
            Get OpenBangla Keyboard
          </h2>
          <Link
            href="/docs/installation"
            className={`text-sm text-fd-muted-foreground transition-colors hover:text-fd-foreground ${focusRing}`}
          >
            All installation guides
          </Link>
        </div>

        <ul className="mt-6 grid gap-3 lg:grid-cols-3">
          {platforms.map((platform) => (
            <li key={platform.name} className="min-w-0">
              <Link
                href={platform.href}
                className={`group flex h-full flex-col rounded-xl border border-fd-border bg-fd-card p-5 transition-colors hover:bg-fd-accent ${focusRing}`}
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="font-medium">{platform.name}</span>
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs ${
                      platform.available ? "text-fd-foreground" : "text-fd-muted-foreground"
                    }`}
                  >
                    <span
                      aria-hidden
                      className={`size-1.5 rounded-full ${
                        platform.available ? "bg-brand" : "bg-fd-muted-foreground/50"
                      }`}
                    />
                    {platform.status}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-fd-muted-foreground">
                  {platform.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium">
                  Installation guide
                  <ArrowRight
                    className="size-3.5 transition-transform group-hover:translate-x-0.5"
                    aria-hidden
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="features-heading"
        className="mt-16 border-t border-fd-border pt-10 sm:mt-20"
      >
        <h2 id="features-heading" className="text-2xl font-semibold tracking-tight">
          Features
        </h2>
        <ul className="mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {features.map((feature) => (
            <li key={feature.title} className="flex gap-4">
              <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg border border-fd-border bg-fd-card text-fd-muted-foreground">
                <feature.icon className="size-4.5" aria-hidden />
              </span>
              <div>
                <h3 className="font-medium">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-fd-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-16 border-t border-fd-border pt-6 text-sm text-fd-muted-foreground sm:mt-20">
        Free software under the GPL-3.0 license.{" "}
        <Link
          href="/docs/contributing"
          className={`underline underline-offset-4 transition-colors hover:text-fd-foreground ${focusRing}`}
        >
          Contributions are welcome.
        </Link>
      </footer>
    </div>
  );
}
