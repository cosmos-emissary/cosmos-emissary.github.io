import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Cosmos",
  DESCRIPTION: "You can find everthing on your mind",
  EMAIL: "",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/cosmos-emissary",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/muhammed-bostancı",
  },
];
