import GlassNav from "@/components/GlassNav";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Comments from "@/components/Comments";

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <GlassNav />

      <div className="mx-auto flex w-full max-w-6xl flex-1 px-6 pt-16">
        <main className="min-w-0 flex-1">
          <About />
          <Experience />
          <Projects />
          <Tools />
          <Comments />
        </main>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-8 text-xs text-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} Frank Sarmiento · Video Editor
          </p>
          <p>Edición · Diseño Gráfico · Motion Graphics</p>
        </div>
      </footer>
    </div>
  );
}