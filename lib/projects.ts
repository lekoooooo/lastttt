interface Project {
  id: string;
  title: string;
  description: string;
  year: number;
  role: string;
  githubUrl: string;
  demoUrl: string;
  image: string;
  language: string;
  isPrivate: boolean;
}

export const projects: Project[] = [
  {
    id: "streamvibe",
    title: "StreamVibe",
    description:
      "StreamVibe is a streaming platform concept showcasing responsive UI design and seamless navigation. Built with Next.js and Tailwind CSS, focusing on user experience and scalability.",
    year: 2024,
    role: "Front-end Developer",
    githubUrl: "https://github.com/Saba-Vardosanidze/StreamVibe",
    demoUrl: "https://streamvibe.vercel.app", // if deployed
    image: "/images/png/streamvibe.png",
    language: "TypeScript",
    isPrivate: false,
  },
  {
    id: "shop-co",
    title: "Shop-Co",
    description:
      "Shop-Co is a modern e-commerce web app designed to provide a clean and intuitive shopping experience. Built with Next.js and TypeScript, featuring reusable components and Tailwind CSS for styling.",
    year: 2024,
    role: "Front-end Developer",
    githubUrl: "https://github.com/lekoooooo/shop-co",
    demoUrl: "https://shop-co.vercel.app",
    image: "/images/shopco.webp",
    language: "TypeScript",
    isPrivate: false,
  },
  {
    id: "unilab-client",
    title: "UniLab Client",
    description:
      "UniLab Client is a client-side application for UniLab, showcasing responsive UI design and seamless navigation. Built with Next.js and Tailwind CSS, focusing on user experience and scalability.",
    year: 2025,
    role: "Front-end Developer",
    githubUrl: "https://github.com/Mind1a/unilab-client",
    demoUrl: "https://unilab-client.vercel.app",
    image: "/images/png/unilabClient.png",
    language: "JavaScript",
    isPrivate: false,
  },
];
