import SmoothScroll from "@/components/film/SmoothScroll";
import Intro from "@/components/film/Intro";
import Chrome from "@/components/film/Chrome";
import Title from "@/components/film/Title";
import Origins from "@/components/film/Origins";
import TheCall from "@/components/film/TheCall";
import TheWork from "@/components/film/TheWork";
import Reel from "@/components/film/Reel";
import Trials from "@/components/film/Trials";
import Laurels from "@/components/film/Laurels";
import Credits from "@/components/film/Credits";
import PostCredits from "@/components/film/PostCredits";
import ResumeModal from "@/components/film/ResumeModal";

export default function Home() {
  return (
    <SmoothScroll>
      <Intro />
      <Chrome />
      <main id="film">
        <Title />
        <Origins />
        <TheCall />
        <TheWork />
        <Reel />
        <Trials />
        <Laurels />
        <Credits />
        <PostCredits />
      </main>
      <ResumeModal />
      <div className="grain" aria-hidden="true" />
    </SmoothScroll>
  );
}
