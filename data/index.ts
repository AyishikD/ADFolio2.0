export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Tech-Stack", link: "#tech-stack" },
  { name: "Education", link: "#education" },
  { name: "Certificate", link: "#certificates"},
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
    title: "Currently working on backend tech and looking for new challenges and ideas.",
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
    title: "PayP: Payment Platform API",
    des: "This project is a payment architecture based on UPI architecture, designed to accept payments and send them. It includes core features such as secure user accounts, balance management, transaction logs, and a lockout mechanism for failed login attempts. It provides a great alternative to Razorpay or Stripe for development since it completely works like UPI. ",
    img: "/proj1.jpg",
    github: "https://github.com/AyishikD/PayP",
    link: "https://www.postman.com/mission-geologist-4118891/payp/collection/za1hjme/routes-payp",
  },
  {
    id: 4,
    title: "Shopify- Full stack E-Commerce Platform",
    des: "Shopify is a modern and fully-featured e-commerce platform built using Next.js, Sanity, and Shadcn/UI.",
    img: "/p4.jpg",
    github: "https://github.com/AyishikD/shopify",
    link: "https://shopify-silk.vercel.app/",
  },
  {
    id: 5,
    title: "Crux - A High-Performance Command Line Tool",
    des: "Crux is a lightweight, high-performance command line tool designed to provide users with powerful utilities while keeping it simple, efficient, and fast. Crux is designed to be easily extensible and ideal for users looking for a fast and flexible command-line solution. ",
    img: "/img4.jpg",
    github: "https://github.com/AyishikD/crux",
    link: "https://github.com/AyishikD/crux",
  },
  {
    id: 6,
    title: "MyShell - A Custom Linux Terminal Shell",
    des: "MyShell is a lightweight, custom-built terminal shell written in C. It replicates several core features of standard Linux shells like Bash, including command execution, piping, redirection, background jobs, and more — all in a colorful and interactive interface. It feels like you`re using your own shell but in a more simplistic manner with cool colors and extended functionality. ",
    img: "/shell1.jpg",
    github: "https://github.com/AyishikD/myshell",
    link: "https://github.com/AyishikD/myshell",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Web Developer Intern",
    company: "GSI NEXT [Nov 2024 - Dec 2024]",
    desc: "Created a register and login system using jwt tokens and MongoDB and hashed using bcrypt.Created a dynamic booking system in the backend based on Salon timings and Specialist timing.Created a dynamic Review system where it updates with input from each user.",
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
    className: "md:col-span-2", 
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Co-Founder and CP Lead",
    company: "Resourcio Community [Dec 2022 - Present]",
    desc: "Created and running a tech community with over 2000 members.",
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