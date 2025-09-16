"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { navItems } from "@/data";

// Dynamically import components that might touch the DOM on import.
// These will only load on the client, preventing server-side `document` errors.
const FloatingNav = dynamic(
  () => import("@/components/ui/FloatingNavbar").then((m) => m.FloatingNav),
  { ssr: false }
);
const Loader = dynamic(
  () => import("@/components/ui/multi-step-loader").then((m) => m.MultiStepLoader),
  { ssr: false }
);
const Hero = dynamic(() => import("@/components/Hero"), { ssr: false });
const Grid = dynamic(() => import("@/components/Grid"), { ssr: false });
const RecentProjects = dynamic(() => import("@/components/RecentProjects"), { ssr: false });
const Clients = dynamic(() => import("@/components/Clients"), { ssr: false });
const Experience = dynamic(() => import("@/components/Experience"), { ssr: false });
const Certificate = dynamic(() => import("@/components/Certificate"), { ssr: false });
const Achievement = dynamic(() => import("@/components/Achievement"), { ssr: false });
const Approach = dynamic(() => import("@/components/Approach"), { ssr: false });
const Footer = dynamic(() => import("@/components/Footer"), { ssr: false });

const loadingStates = [
  { text: "Loading portfolio..." },
  { text: "Fetching data..." },
  { text: "Welcome to my portfolio!" },
];

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // guard so this handler never runs on server (shouldn't anyway inside useEffect)
    if (typeof document === "undefined") return;

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <Loader loadingStates={loadingStates} loading={loading} duration={1000} />
      {!loading && (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <div className="max-w-7xl w-full">
            <FloatingNav navItems={navItems} />
            <Hero />
            <Grid />
            <RecentProjects />
            <Clients />
            <Experience />
            <Certificate />
            <Achievement />
            <Approach />
            <Footer />
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
