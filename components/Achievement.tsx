
import { SiCodechef, SiLeetcode } from "react-icons/si";
import { FaTrophy } from "react-icons/fa";
import { FocusCards } from "@/components/ui/focus-cards";

const Achievement = () => {
  const cards = [
    {
            content: (
              <>
                <SiCodechef className="text-orange-500 text-5xl mb-2" />
                <h3 className="text-xl font-bold">CodeChef</h3>
                <p className="text-sm text-white/70">
                  <a
                    href="https://www.codechef.com/users/bright_shop_20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-400"
                  >
                    Link: ayishik_das
                  </a>
                </p>
                <p className="text-sm">Rating: 6 ⭐ (2211)</p>
                <p className="text-sm text-white/60">AIR: 186</p>
                <p className="text-sm text-white/60">Global Rank: 483</p>
              </>
            ),
          },          
    {
      content: (
        <>
          <SiLeetcode className="text-yellow-400 text-5xl mb-2" />
          <h3 className="text-xl font-bold">LeetCode</h3>
          <p className="text-sm text-white/70">
                  <a
                    href="https://leetcode.com/u/sweet_note/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-400"
                  >
                    Link: ayishik_das
                  </a>
                </p>
          <p className="text-sm">Rating: 2157</p>
          <p className="text-sm">Guardian Level</p>
          <p className="text-sm text-white/60">Top 1.24% Worldwide</p>
        </>
      ),
    },
    {
      content: (
        <>
          <FaTrophy className="text-purple-400 text-5xl mb-2" />
          <h3 className="text-xl font-bold">Winner of CxthSense 2.0</h3>
          <p className="text-sm text-white/70">Intra-college Competitive Programming Contest</p>
          <p className="text-sm">🏆 1st Place</p>
          <p className="text-sm text-white/60">30+ teams participated</p>
        </>
      ),
    },
  ];

  return (
    <section className="py-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
        Achievements
      </h2>
      <FocusCards cards={cards} />
    </section>
  );
};

export default Achievement;