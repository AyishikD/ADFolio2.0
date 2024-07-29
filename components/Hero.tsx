import { AuroraBackground } from "./ui/aurora-background";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4 min-h-screen w-full"
      >
      <div className="pb-20 pt-36">
        {/**
         *  UI: Spotlights
         *  Link: https://ui.aceternity.com/components/spotlight
         */}
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>

        

        <div className="flex justify-center relative my-20 z-10">
          <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
            <TextGenerateEffect
              words="A WARM WELCOME TO MY PORTFOLIO!"
              className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
            />

            {/**
             *  Link: https://ui.aceternity.com/components/text-generate-effect
             *
             *  change md:text-6xl, add more responsive code
             */}
            <TextGenerateEffect
              words="Building Tomorrow&apos;s Tech, One Line at a Time"
              className="text-center text-[40px] md:text-5xl lg:text-6xl"
            />

            <TextGenerateEffect
              words="Hi! I&apos;m Ayishik Das, A final year Full Stack Developer based in India eager to work on exciting projects."
              className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl"
            />

            <a href="#projects">
              <MagicButton
                title="View my projects"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
          </div>
        </div>
      </div>
      </motion.div>
    </AuroraBackground>
  );
};

export default Hero;
