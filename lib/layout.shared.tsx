import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { Book, FileText } from "lucide-react";

// fill this with your actual GitHub info, for example:
export const gitConfig = {
  user: "openbangla",
  repo: "openbangla-keyboard",
  branch: "master",
};

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: "OpenBangla Keyboard",
      transparentMode: "top",
    },
    links: [
      {
        icon: <Book />,
        text: "Docs",
        url: "/docs",
      },
      {
        icon: <FileText />,
        text: "Blog",
        url: "/blog",
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
