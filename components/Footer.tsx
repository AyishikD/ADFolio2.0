import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Excited to <span className="text-purple">start together</span> something new?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
        Let&apos;s connect and explore how I can contribute towards it!
        </p>

        <a href="mailto:ayishikad@gmail.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Ayishik Das
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <a href="https://github.com/AyishikD" target="_blank" rel="noopener noreferrer">
            <div className="w-14 h-14 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img src="/git.svg" alt="GitHub" width={30} height={30} />
            </div>
          </a>
          <a href="https://linkedin.com/in/ayishik-das" target="_blank" rel="noopener noreferrer">
            <div className="w-14 h-14 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
              <img src="/link.svg" alt="LinkedIn" width={30} height={30} />
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;