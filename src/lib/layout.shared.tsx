// https://www.fumadocs.dev/docs/ui/layouts

import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { appName, gitConfig } from "./shared";
import iconSvg from "@/app/icon.svg";
import { BookHeart, BookIcon, BookText } from "lucide-react";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="inline-flex items-center gap-2">
          <img src={iconSvg.src} alt="" className="h-5 w-5 rounded-md" aria-hidden />
          <span>{appName}</span>
        </span>
      ),
    },
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
    links: [
      { icon: <BookText />, text: "Blog", url: "/blog" },
      { icon: <BookIcon />, text: "Docs", url: "/docs" },
      { icon: <BookHeart />, text: "Thanks", url: "/thanks" },
    ],
  };
}
