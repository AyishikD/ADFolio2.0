"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiOracle,
  SiFirebase,
  SiPostman,
  SiC,
  SiCplusplus,
  SiShell,
} from "react-icons/si";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const techStack = [
  {
    id: 1,
    name: "ReactJS",
    icon: <FaReact />,
  },
  {
    id: 2,
    name: "NodeJS",
    icon: <FaNodeJs />,
  },
  {
    id: 3,
    name: "JavaScript",
    icon: <FaJs />,
  },
  {
    id: 4,
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    id: 5,
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    id: 6,
    name: "Python",
    icon: <FaPython />,
  },
  {
    id: 7,
    name: "Java",
    icon: <FaJava />,
  },
  {
    id: 8,
    name: "Shell Script",
    icon: <SiShell />,
  },
  {
    id: 9,
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    id: 10,
    name: "Next.js",
    icon: <SiNextdotjs />,
  },
  {
    id: 11,
    name: "C",
    icon: <SiC />,
  },
  {
    id: 12,
    name: "C++",
    icon: <SiCplusplus />,
  },
  {
    id: 13,
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    id: 14,
    name: "Express.js",
    icon: <SiExpress />,
  },
  {
    id: 15,
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    id: 16,
    name: "MySQL",
    icon: <SiMysql />,
  },
  {
    id: 17,
    name: "Oracle SQL",
    icon: <SiOracle />,
  },
  {
    id: 18,
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    id: 19,
    name: "Firebase",
    icon: <SiFirebase />,
  },
  {
    id: 20,
    name: "REST API",
    icon: <SiPostman />,
  },
];

const Clients = () => {
  return (
    <section id="tech-stack" className="py-20">
      <h1 className="heading">
        Here are some of the <span className="text-purple">tech stuff I know</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[30vh] md:h-[20rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={techStack.map((tech) => ({
              name: tech.name,
              icon: tech.icon,
            }))}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
