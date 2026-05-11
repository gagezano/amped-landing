export type TeamSocialNetwork = "linkedin" | "x" | "threads" | "instagram";

export type TeamSocialAccount = {
  network: TeamSocialNetwork;
  href: string;
};

export type TeamMember = {
  name: string;
  title: string;
  /** Stock placeholder (Unsplash); swap for real portraits when available. */
  imageSrc: string;
  /** One to several profiles per person (replace hrefs when ready). */
  socials: TeamSocialAccount[];
};

export const TEAM: TeamMember[] = [
  {
    name: "Steve McBee",
    title: "Founder & CEO",
    imageSrc:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&h=800&auto=format&fit=crop",
    socials: [
      { network: "linkedin", href: "https://www.linkedin.com/in/steve-mcbee" },
      { network: "x", href: "https://x.com/SteveMcBeeDC" },
      { network: "threads", href: "https://www.threads.net/@stevemcbee" },
    ],
  },
  {
    name: "Anne Andrew",
    title: "Partner",
    imageSrc:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&h=800&auto=format&fit=crop",
    socials: [{ network: "x", href: "https://x.com/AnneAndrewDC" }],
  },
  {
    name: "Tom Carver",
    title: "Partner",
    imageSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&h=800&auto=format&fit=crop",
    socials: [
      { network: "threads", href: "https://www.threads.net/@tomcarver" },
      { network: "instagram", href: "https://www.instagram.com/tomcarverenergy" },
    ],
  },
  {
    name: "Adrian Deveny",
    title: "Partner",
    imageSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&h=800&auto=format&fit=crop",
    socials: [
      { network: "instagram", href: "https://www.instagram.com/adriandeveny" },
      { network: "linkedin", href: "https://www.linkedin.com/in/adrian-deveny" },
      { network: "x", href: "https://x.com/AdrianDeveny" },
    ],
  },
  {
    name: "Brandon Hurlbut",
    title: "Partner",
    imageSrc:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&h=800&auto=format&fit=crop",
    socials: [{ network: "linkedin", href: "https://www.linkedin.com/in/brandon-hurlbut" }],
  },
  {
    name: "Meghan Nutting",
    title: "Partner",
    imageSrc:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&h=800&auto=format&fit=crop",
    socials: [
      { network: "x", href: "https://x.com/MeghanKNutting" },
      { network: "instagram", href: "https://www.instagram.com/meghanknutting" },
    ],
  },
  {
    name: "Fletcher Stumph",
    title: "Associate",
    imageSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&h=800&auto=format&fit=crop",
    socials: [
      { network: "threads", href: "https://www.threads.net/@fletcherstumph" },
      { network: "x", href: "https://x.com/FletcherStumph" },
    ],
  },
  {
    name: "Karen Zelmar",
    title: "Partner",
    imageSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&h=800&auto=format&fit=crop",
    socials: [
      { network: "instagram", href: "https://www.instagram.com/karenzelmar" },
      { network: "linkedin", href: "https://www.linkedin.com/in/karen-zelmar" },
      { network: "threads", href: "https://www.threads.net/@karenzelmar" },
    ],
  },
];
