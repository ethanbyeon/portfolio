export type Experience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link?: string;
  description: string;
};

export const EXPERIENCE: Experience[] = [
  {
    company: "Padoh",
    title: "Full-Stack Engineer, Founder",
    start: "2025",
    end: "Present",
    link: "https://padoh.vercel.app",
    description:
      "K-pop analytics and social catalog with real-time leaderboards for groups and music videos.",
  },
  {
    company: "UC Santa Cruz",
    title: "Software Engineer, Frontend Developer",
    start: "Oct",
    end: "Dec 2024",
    description:
      "Frontend for a web app turning grocery receipts into live budget and nutrition insights.",
  },
  {
    company: "STEMPIA",
    title: "Computer Science Instructor",
    start: "Jan",
    end: "Jun 2022",
    description:
      "Taught remote Java & Python courses to 20+ students; 10+ earned Microsoft Python certification.",
  },
  {
    company: "Google",
    title: "Software Engineering Trainee",
    start: "Jan",
    end: "Jun 2021",
    description:
      "Google CSSI participant building JavaScript/Firebase web apps with engineer mentorship.",
  },
];
