import GlassNav from "@/components/GlassNav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <GlassNav />

      <div className="mx-auto flex w-full max-w-6xl flex-1 px-6 pt-16">
        <main className="min-w-0 flex-1">
          <About />
          <Projects />
          <Tools />
          <Experience />
        </main>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} Frank Sarmiento · Video Editor
          </p>
          <p>Editing · Graphic Design · Motion Graphics</p>
        </div>
      </footer>
    </div>
  );
}