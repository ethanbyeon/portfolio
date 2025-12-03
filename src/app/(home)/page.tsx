import { About } from "./about";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <main className="space-y-12">
        <About />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
