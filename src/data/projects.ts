export type Project = {
  title: string;
  date: string;
  link?: string;
  madeAt?: string;
  tech: string[];
  summary: string;
};

export const PROJECTS: Project[] = [
  {
    title: "Portfolio",
    date: "Nov 2025",
    link: "https://github.com/ethanbyeon/portfolio",
    tech: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui", "Vercel"],
    summary: "This site.",
  },
  {
    title: "Padoh",
    date: "Jun 2025",
    link: "https://padoh.vercel.app",
    tech: [
      "Next.js",
      "TypeScript",
      "Go",
      "PostgreSQL",
      "Tailwind",
      "shadcn/ui",
      "Supabase",
      "Drizzle ORM",
      "Google Cloud Platform",
      "Docker",
      "Vercel",
      "Gin",
      "pgx",
    ],
    summary:
      "Real time K-pop analytics platform that tracks YouTube performance, trends, and rankings across groups and music videos.",
  },
  {
    title: "BudgetByte",
    date: "Dec 2024",
    link: "https://github.com/NavDaBoss/TheBudgetByte",
    madeAt: "UC Santa Cruz",
    tech: [
      "Next.js",
      "TypeScript",
      "Firebase",
      "Tesseract OCR",
      "OpenAI API",
      "Figma",
    ],
    summary:
      "Processes grocery receipts into dashboards that visualize food groups and spending patterns against MyPlate style guidelines.",
  },
  {
    title: "JavaScript Parallelism & WebGPU",
    date: "Nov 2024",
    madeAt: "UC Santa Cruz",
    tech: ["JavaScript", "WebGPU", "Web Workers", "Docker"],
    summary:
      "Built particle simulations that benchmark CPU single and multithreaded paths against GPU rendering, reaching about 4x higher FPS.",
  },
  {
    title: "CPU Emulator",
    date: "Jun 2024",
    madeAt: "UC Santa Cruz",
    tech: ["C++", "GitHub Actions"],
    summary:
      "Implemented a CPU emulator with a fetch–decode–execute pipeline and core instruction set, kept CI green across team merges.",
  },
  {
    title: "Caching Simulator",
    date: "Dec 2023",
    madeAt: "UC Santa Cruz",
    tech: ["C"],
    summary:
      "Implemented a caching simulator with FIFO, LRU, and Clock eviction policies to reduce redundant disk reads and surface cache miss stats.",
  },
  {
    title: "Multi-Threaded HTTP Server",
    date: "Nov 2023",
    madeAt: "UC Santa Cruz",
    tech: ["C"],
    summary:
      "Built a thread-pool HTTP server and tuned concurrency to reduce latency under concurrent load.",
  },
  {
    title: "Barriers & Memory Models",
    date: "Nov 2023",
    madeAt: "UC Santa Cruz",
    tech: ["C++", "Docker"],
    summary:
      "Implemented sense reversing barriers and analyzed store buffering on x86 to highlight relaxed memory behavior and correct synchronization.",
  },
  {
    title: "Data Analysis & ML Exploration",
    date: "Mar 2023",
    link: "https://github.com/ethanbyeon/HO5",
    madeAt: "UC Santa Cruz",
    tech: ["Python", "Scikit-learn", "Pandas", "NumPy"],
    summary:
      "Explored multi-class classification with logistic regression, k-nearest neighbors, and decision trees on a small, noisy dataset.",
  },
  {
    title: "Music Analytics Tool",
    date: "Jul 2022",
    madeAt: "USC SW Pioneer Hackathon",
    tech: ["Python", "NumPy", "Matplotlib", "Spotify API"],
    summary:
      "Analyzed audio features for top K-pop tracks and visualized trends using Spotify streaming and feature data.",
  },
  {
    title: "Toucan Tango",
    date: "Aug 2021",
    link: "https://github.com/cssi-2021-21/team-12",
    madeAt: "Google CSSI",
    tech: ["JavaScript", "Firebase", "HTML/CSS"],
    summary:
      "Built a messaging web app that hosts chat rooms and can turn messages into GIF conversations using the GIPHY API.",
  },
];
