// The script. Every word and number on the site lives here.
// Sources: Ayishik's résumés (SDE / AI / Fin, Aug 2026) and his profiles.

export const site = {
  name: "Ayishik Das",
  role: "System Engineer",
  email: "ayishikofficial@gmail.com",
  url: "https://ad-folio.vercel.app",
  github: "https://github.com/AyishikD",
  linkedin: "https://linkedin.com/in/ayishik-das",
  resume: "/resume/Ayishik_Das_Software_Engineering.pdf",
  tagline: ["Building tomorrow's tech,", "one line at a time."],
  /** The film's nominal runtime; scroll progress maps onto it for the timecode. */
  runtimeSeconds: 72,
};

/** Three cuts of the same film: one résumé per role. */
export const resumes = [
  {
    id: "sde",
    cut: "01",
    title: "The Director's Cut",
    focus: "Software Engineering",
    line: "Backend and systems. FluxTrade, ModelLogger, Recallix, PayP.",
    file: "/resume/Ayishik_Das_Software_Engineering.pdf",
  },
  {
    id: "ai",
    cut: "02",
    title: "The AI Cut",
    focus: "AI / ML Engineering",
    line: "Generative AI, RAG and agents. ModelLogger, Recallix.",
    file: "/resume/Ayishik_Das_AI_ML.pdf",
  },
  {
    id: "fin",
    cut: "03",
    title: "The Systems Cut",
    focus: "Systems & Fintech",
    line: "Low-latency and performance. FluxTrade, Recallix, Vault, PayP.",
    file: "/resume/Ayishik_Das_Systems_Fintech.pdf",
  },
];

export const nav = [
  { id: "origins", label: "Origins" },
  { id: "call", label: "The Call" },
  { id: "work", label: "The Work" },
  { id: "trials", label: "Trials" },
  { id: "laurels", label: "Laurels" },
  { id: "credits", label: "Credits" },
];

export const origins = {
  chapter: "I · Origins",
  place: "Kolkata, India",
  past: [
    { year: "2019", line: "ICSE · St. Paul's Academy · 87.4%" },
    { year: "2021", line: "ISC (PCM) · St. Paul's Academy · 86.25%" },
  ],
  now: {
    year: "2025",
    degree: "B.Tech · Computer Science & Business Systems",
    school: "Academy of Technology (MAKAUT)",
    cgpaLabel: "CGPA",
    cgpa: "8.28",
  },
};

export const call = {
  chapter: "II · The Call",
  role: "System Engineer",
  org: "Tata Consultancy Services · Kolkata",
  when: "Jan 2026 — Present",
  stats: [
    { value: 3, decimals: 0, suffix: "", label: "Generative AI PoCs built for enterprise clients", accent: false },
    { value: 70, decimals: 0, suffix: "%", label: "approx. reduction in manual processing time", accent: true },
  ],
  lines: [
    "Conversational AI, workflow automation and enterprise data integration.",
    "Generative AI with Claude and Python, integrated with PeopleSoft.",
  ],
};

export type HeroProject = {
  scene: string;
  name: string;
  value: number;
  decimals: number;
  unit: string;
  label: string;
  detail: string;
  stack: string;
  github: string;
  live?: string;
  align: "left" | "right" | "center";
};

export const heroProjects: HeroProject[] = [
  {
    scene: "01",
    name: "Recallix",
    value: 0.106,
    decimals: 3,
    unit: "ms",
    label: "Average search · 1M memory nodes",
    detail: "A persistent memory engine for AI agents. SIMD-accelerated HNSW indexing, asynchronous index construction, SQLite WAL persistence, hybrid neural-heuristic reranking and cross-model memory transfer at 100% retrieval fidelity.",
    stack: "C++ · Python · SQLite · HNSW · RAG",
    github: "https://github.com/AyishikD/Recallix",
    live: "https://recallix.vercel.app/",
    align: "left",
  },
  {
    scene: "02",
    name: "PayP",
    value: 30,
    decimals: 0,
    unit: "min",
    label: "Account lockout after repeated failed logins",
    detail: "A UPI-inspired payment API: reusable endpoints for user authentication, balance management, transfers, transaction history and project/product payments. JWT authentication, bcrypt credential hashing and payment-PIN protection.",
    stack: "Node.js · Express · PostgreSQL · Sequelize · JWT · bcrypt",
    github: "https://github.com/AyishikD/PayP",
    live: "https://payp.onrender.com",
    align: "right",
  },
  {
    scene: "03",
    name: "FluxTrade",
    value: 68.9,
    decimals: 1,
    unit: "ns",
    label: "Single-trade matching",
    detail: "A deterministic electronic exchange simulator in Modern C++20: a price-time priority limit order book and a zero-allocation matching engine. 161.5 ns multi-level sweeps in LTO release benchmarks.",
    stack: "C++20 · CMake · lock-free SPSC/MPSC queues · object pools · Google Benchmark",
    github: "https://github.com/AyishikD/FluxTrade",
    align: "center",
  },
];

export const reel = [
  {
    scene: "04",
    name: "ModelLogger",
    when: "May 2026 — now",
    line: "Research observability for AI/ML teams, validated on real GPT-2 training runs.",
    stack: "FastAPI · PostgreSQL + pgvector · Redis · Next.js · WebSockets",
    github: "https://github.com/AyishikD/xlogger",
    live: "https://xlogger.vercel.app",
  },
  {
    scene: "05",
    name: "Vault",
    when: "May — Jun 2025",
    line: "A Redis-compatible, versioned key-value store you talk to through redis-cli.",
    stack: "C++ · TCP · RESP · COMMIT / CHECKOUT / DIFF / RESET",
    github: "https://github.com/AyishikD/vault",
  },
];

export const earlyWorks = [
  { name: "ADgov", line: "Government schemes and scholarships under one roof", github: "https://github.com/AyishikD/ADgov", live: "https://adgov.vercel.app" },
  { name: "ADapp", line: "A social platform for discussions", github: "https://github.com/AyishikD/ADapp", live: "https://adapp.vercel.app/" },
  { name: "Shopify", line: "A full-stack e-commerce platform", github: "https://github.com/AyishikD/shopify", live: "https://shopify-silk.vercel.app/" },
  { name: "Crux", line: "A high-performance command-line tool", github: "https://github.com/AyishikD/crux" },
  { name: "MyShell", line: "A Linux shell written in C", github: "https://github.com/AyishikD/myshell" },
];

export const trials = {
  chapter: "The Trials",
  hero: {
    value: "2nd",
    label: "TCS AI Friday · Kolkata",
    sub: "Secured second place",
  },
  rows: [
    { value: "1st", what: "CxthSense 2.0 · coding contest" },
    { value: "1st", what: "TechQuisitive 5.0 · quiz contest" },
    { value: "5★", what: "HackerRank · C++ and Java" },
  ],
};

export const laurels = [
  { kicker: "Open-source mentor", name: ["GirlScript", "Summer", "of Code"] },
  { kicker: "Open-source mentor", name: ["Winter", "of", "Blockchain"] },
];

export const certificates = [
  { name: "Postman API Fundamentals Student Expert", link: "https://api.badgr.io/public/assertions/gHbrEDt6SIO6i7YHyuUE3w" },
  { name: "MongoDB Node.js Developer Path", link: "https://learn.mongodb.com/c/mfwpIbbhTzaqc2xe2ydS2g" },
  { name: "Linux Command Line: From Zero to Hero" },
  { name: "Programming for Everybody (Python) · Coursera", link: "https://coursera.org/share/37de750aba7e97927d0fe385807696a5" },
];

export const cast = [
  ["C++", "as The Engine"],
  ["Python", "as The Brain"],
  ["PostgreSQL", "as The Memory"],
  ["Redis", "as The Cache"],
  ["FastAPI", "as The Gatekeeper"],
  ["Node.js", "as The Runtime"],
  ["Next.js", "as The Face"],
  ["Docker", "as The Container"],
  ["Linux", "as The Ground It All Stands On"],
];

export const crew = [
  ["Languages", "C++ · C · Python · Java · JavaScript · Shell"],
  ["Backend", "Node.js · Express · FastAPI · REST · PostgreSQL · MySQL · SQLite · Redis · pgvector"],
  ["Frontend", "React · Next.js · Tailwind CSS"],
  ["AI/ML", "Generative AI · RAG · vector search · HNSW · LLM agents"],
  ["Tools", "Git · Docker · Linux · WSL · Make · Postman"],
];

export const scenes = {
  title: "SC 01 · Title",
  origins: "SC 02 · Origins",
  call: "SC 03 · The Call",
  work: "SC 04 · The Work",
  reel: "SC 05 · The Reel",
  trials: "SC 06 · The Trials",
  laurels: "SC 07 · Laurels",
  credits: "SC 08 · Credits",
  post: "SC 09 · After the Credits",
};
