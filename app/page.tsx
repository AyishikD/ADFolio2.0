// src/pages/home.tsx or home.tsx
"use client";

import { useState, useEffect } from "react";
import { navItems } from "@/data";

import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Clients from "@/components/Clients";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { MultiStepLoader as Loader } from "@/components/ui/multi-step-loader"; // Make sure the path is correct

const loadingStates = [
  {
    text: "Loading portfolio...",
  },
  {
    text: "Fetching data...",
  },
  {
    text: "Welcome to my portfolio!",
  },
];

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time, replace this with your actual data fetching logic
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000); // 6 seconds for 3 steps with 2 seconds duration each
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />
      {!loading && (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Approach />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
