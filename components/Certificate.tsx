"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button as BorderButton } from "@/components/ui/MovingBorders";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    name: "MongoDB Node.js Developer Path",
    company: "MongoDB",
    link: "https://learn.mongodb.com/c/mfwpIbbhTzaqc2xe2ydS2g",
  },
  {
    name: "Postman API Fundamentals Student Expert",
    company: "Canvas Credentials (Badgr)",
    link: "https://api.badgr.io/public/assertions/gHbrEDt6SIO6i7YHyuUE3w",
  },
  {
    name: "Programming for everybody (Getting started with Python)",
    company: "Coursera",
    link: "https://coursera.org/share/37de750aba7e97927d0fe385807696a5",
  },
];

const fadeZoom = {
  hidden: { opacity: 0, scale: 0.9, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Certificate = () => {
  return (
    <section id="certificates" className="py-20 px-6 bg-transparent">
      <h2 className="text-4xl font-bold text-center mb-12 text-zinc-800 dark:text-zinc-100">
        🎓 My <span className="text-purple">Certificates</span>
      </h2>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeZoom}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
          >
            <BorderButton
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                background: "rgb(4,7,29)",
                backgroundColor:
                  "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                borderRadius: `calc(1.75rem * 0.96)`,
              }}
              className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800 h-full"
            >
              <Card
                className="h-[15rem] flex flex-col justify-between hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 rounded-2xl bg-white/60 dark:bg-zinc-800/60 backdrop-blur-md border dark:border-zinc-700"
              >
                <CardHeader className="flex-grow">
                  <CardTitle className="text-lg text-purple-600 dark:text-purple-400">
                    {cert.name}
                  </CardTitle>
                  <CardDescription className="text-sm text-zinc-600 dark:text-zinc-300">
                    Issued by{" "}
                    <span className="font-medium">{cert.company}</span>
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", bounce: 0.3 }}
                  >
                    <Button
                      asChild
                      variant="outline"
                      className="w-full dark:border-zinc-600 relative overflow-hidden group"
                    >
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="relative z-10">View Certificate</span>
                        <span className="absolute inset-0 bg-purple-100 dark:bg-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"></span>
                      </a>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </BorderButton>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificate;
