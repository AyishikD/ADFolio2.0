export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Tech-Stack", link: "#tech-stack" },
  { name: "Education", link: "#education" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize learning and applying technologies to real time projects. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications and tech stack",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Resume",
    description: "Have a look at",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a website to ease government facilities",
    description: "The Insider News",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to collaborate together or hire me?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "ADgov- Government Facilities",
    des: "ADgov is a comprehensive platform designed to provide all government schemes, facilities, and scholarships under one roof.",
    img: "/p1.jpg",
    github: "https://github.com/AyishikD/ADgov",
    link: "https://adgov.vercel.app/",
  },
  {
    id: 2,
    title: "Adapp- Social media platform",
    des: "ADapp is a social media web application designed to facilitate discussions and interactions among users.",
    img: "/p2.jpg",
    github: "https://github.com/AyishikD/ADapp",
    link: "https://adapp.vercel.app/sign-up?redirect_url=https%3A%2F%2Fadapp.vercel.app%2F",
  },
  {
    id: 3,
    title: "ADeditor- Versatile code editor",
    des: "ADeditor is a versatile online code editor built using React, Tailwind CSS, and Judge0 API. It empowers developers to compile and run code in over 8 languages, with options for customization through 10+ themes. ",
    img: "/p3.jpg",
    github: "https://github.com/AyishikD/ADeditor",
    link: "https://adeditor.vercel.app/",
  },
  {
    id: 4,
    title: "Shopify- Full stack E-Commerce Platform",
    des: "hopify is a modern and fully-featured e-commerce platform built using Next.js, Sanity, and Shadcn/UI.",
    img: "/p4.jpg",
    github: "https://github.com/AyishikD/shopify",
    link: "https://shopify-silk.vercel.app/",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Co-Founder and CP Lead",
    company: "Resourcio Community [Dec 2022 - Present]",
    desc: "Created and running a tech community with over 2000 members.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Member of Prayukti",
    company: "Ingenium [Oct 2023 - Present]",
    desc: "Review different technical writings on different CS topics written by other writers and share feedback.",
    className: "md:col-span-2", 
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Software Engineering Virtual Experience",
    company: "JP MORGAN [Dec 2023]",
    desc: "Fixed broken files and used Perspective library to generate live graphs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    company: "Github [Oct 2022 - Present]",
    desc: "Contribute and mentor in different open source events like Hacktoberfest, GSSOC and Apertre.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/yourusername"
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://linkedin.com/in/yourusername"
  }
];