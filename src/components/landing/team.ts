export type TeamSocialNetwork = "linkedin";

export type TeamSocialAccount = {
  network: TeamSocialNetwork;
  href: string;
};

export type TeamMember = {
  name: string;
  title?: string;
  /** Local portrait under `public/team/` (square raster, e.g. JPEG or PNG). */
  imageSrc: string;
  /** LinkedIn profile for each person. */
  socials: TeamSocialAccount[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Steve McBee",
    title: "Founder & CEO",
    imageSrc: "/team/steve-mcbee.png",
    socials: [{ network: "linkedin", href: "https://linkedin.com/in/steve-mcbee-b521a741" }],
  },
  {
    name: "Tom Carver",
    imageSrc: "/team/tom-carver.jpg",
    socials: [{ network: "linkedin", href: "https://linkedin.com/in/tom-carver-29808938" }],
  },
  {
    name: "Adrian Deveny",
    imageSrc: "/team/adrian-deveny.jpg",
    socials: [{ network: "linkedin", href: "https://linkedin.com/in/adrian-deveny-32336211" }],
  },
  {
    name: "Brandon Hurlbut",
    imageSrc: "/team/brandon-hurlbut.jpg",
    socials: [{ network: "linkedin", href: "https://linkedin.com/in/brandon-hurlbut" }],
  },
  {
    name: "Meghan Nutting",
    imageSrc: "/team/meghan-nutting.jpg",
    socials: [{ network: "linkedin", href: "https://linkedin.com/in/meghan-nutting-6b1332b" }],
  },
  {
    name: "Fletcher Stumph",
    imageSrc: "/team/fletcher-stumph.jpg",
    socials: [{ network: "linkedin", href: "https://www.linkedin.com/in/fletcher-stumph" }],
  },
  {
    name: "Karen Zelmar",
    imageSrc: "/team/karen-zelmar.jpg",
    socials: [{ network: "linkedin", href: "https://linkedin.com/in/karenzelmar" }],
  },
];
