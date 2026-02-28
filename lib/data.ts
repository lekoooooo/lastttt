export type Experience = {
  role: string;
  company?: string;
  date: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Fullstack Developer",
    date: "Dec 2024 – Present",
    description:
      "Worked on multiple  projects delivering clean, responsive, and accessible websites. Focused on React, Next.js, and Tailwind CSS.",
  },
  {
    role: "Fullstack Intern",
    company: "Re-educate",
    date: "Oct 2024 – Present",
    description:
      "Contributed to the front-end development of client projects, writing reusable components and improving UI consistency across web apps.",
  },
];

export type ContactLink = {
  name: string;
  href: string;
  icon: string;
};

export const contactLinks: ContactLink[] = [
  {
    name: "Email",
    href: "mailto:levdidebashvili@gmail.com",
    icon: "/images/png/email.png",
  },
  {
    name: "GitHub",
    href: "https://github.com/lekoooooo",
    icon: "/images/svg/lilhub.svg",
  },

  {
    name: "Instagram",
    href: "https://www.instagram.com/ft.leko",
    icon: "/images/instagram.svg",
  },
];
