import { About } from "./about";
import { Contact } from "./contact";
import { Technologies } from "./technologies";
import { Experience } from "./experience";
import { Projects } from "./projects";
import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <main className="space-y-12">
        <About />
        <Contact />
        <Technologies />
        <Experience />
        <Projects />
      </main>
      <Footer />
    </>
  );
}
