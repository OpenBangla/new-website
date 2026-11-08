import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ContributorAvatar } from "@/components/contributor-avatar";
import data from "@/data/contributors.json";

export const metadata: Metadata = {
  title: "Thanks | OpenBangla Keyboard",
  description: "All-time contributors to OpenBangla.",
};

// Standard competition ranking: equal commit counts share a rank (1, 2, 2, 4 ...).
function withRanks(list: { name: string; commits: number; login?: string; avatar?: string }[]) {
  const sorted = [...list].sort((a, b) => b.commits - a.commits || a.name.localeCompare(b.name));
  let rank = 0;

  return sorted.map((contributor, index) => {
    if (index === 0 || contributor.commits !== sorted[index - 1].commits) {
      rank = index + 1;
    }

    return {
      ...contributor,
      rank,
      key: `${index}-${contributor.name}`,
    };
  });
}

const number = new Intl.NumberFormat("en-US");

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fd-foreground";

export default function ThanksPage() {
  const rows = withRanks(data.contributors);
  const total = rows.reduce((sum, contributor) => sum + contributor.commits, 0);
  const stats = [
    ["Contributors", rows.length],
    ["Commits", total],
    ["Repositories", data.repositories],
  ] as const;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:py-16">
      <header>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Thanks</h1>
        <p className="mt-3 text-lg text-fd-muted-foreground">All-time OpenBangla contributors</p>
        <p className="mt-4 max-w-2xl leading-relaxed text-fd-muted-foreground">
          OpenBangla exists because of the people below. Thank you for every commit. The list counts
          commits on the default branch of each repository in the OpenBangla organization, excluding
          merge commits.
        </p>

        <dl className="mt-8 grid grid-cols-3 overflow-hidden rounded-xl border border-fd-border bg-fd-card">
          {stats.map(([label, value], index) => (
            <div
              key={label}
              className={`px-4 py-4 sm:px-5 ${index > 0 ? "border-l border-fd-border" : ""}`}
            >
              <dt className="text-xs text-fd-muted-foreground sm:text-sm">{label}</dt>
              <dd className="mt-1 text-xl font-semibold tabular-nums sm:text-2xl">
                {number.format(value)}
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <section aria-label="Contributors" className="mt-10">
        <div className="overflow-hidden rounded-xl border border-fd-border bg-fd-card">
          <table className="w-full border-collapse text-left text-sm">
            <caption className="sr-only">OpenBangla contributors ranked by commit count</caption>
            <thead className="bg-fd-muted text-xs uppercase tracking-wide text-fd-muted-foreground">
              <tr>
                <th scope="col" className="w-14 px-3 py-2.5 text-right font-medium sm:w-16 sm:px-4">
                  Rank
                </th>
                <th scope="col" className="px-3 py-2.5 font-medium sm:px-4">
                  Contributor
                </th>
                <th scope="col" className="px-3 py-2.5 text-right font-medium sm:px-4">
                  Commits
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((contributor) => (
                <tr
                  key={contributor.key}
                  className="border-t border-fd-border transition-colors hover:bg-fd-accent/40"
                >
                  <td className="px-3 py-2.5 text-right tabular-nums text-fd-muted-foreground sm:px-4">
                    {contributor.rank}
                  </td>
                  <td className="px-3 py-2.5 sm:px-4">
                    <span className="flex min-w-0 items-center gap-2.5">
                      <ContributorAvatar
                        name={contributor.name}
                        login={contributor.login}
                        avatar={contributor.avatar}
                      />
                      <span className="text-fd-card-foreground">{contributor.name}</span>
                      {contributor.name.endsWith("[bot]") && (
                        <span className="rounded border border-fd-border px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-fd-muted-foreground">
                          bot
                        </span>
                      )}
                    </span>
                  </td>
                  <td className="px-3 py-2.5 text-right font-medium tabular-nums text-fd-foreground sm:px-4">
                    {contributor.commits}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <p className="mt-6 text-sm text-fd-muted-foreground">
        Last updated on{" "}
        <time dateTime={data.updatedAt}>
          {new Date(`${data.updatedAt}T00:00:00Z`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
            timeZone: "UTC",
          })}
        </time>
        . This site is static, so the list is refreshed by hand.
      </p>

      <div className="mt-8 flex flex-col gap-4 border-t border-fd-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-fd-muted-foreground">Want to see your name here?</p>
        <Link
          href="/docs/contributing"
          className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-brand-text ${focusRing}`}
        >
          Read the contributing guide
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
