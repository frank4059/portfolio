import GlassNav from "@/components/GlassNav";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col bg-background text-foreground">
      <GlassNav />

      <div className="mx-auto flex w-full max-w-6xl flex-1 px-6 pt-16">
        <main className="min-w-0 flex-1">
          <About />
          <Projects />
          <Tools />
        </main>
      </div>

      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-xs text-muted sm:flex-row">
          <div className="flex items-center gap-3">
            <Image
              src="/frank-logo.svg"
              alt="Frank Editions logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="font-display text-base tracking-tight text-foreground uppercase">
              Frank Editions
            </span>
          </div>
          <p>Editing · 3D Animation · Motion Graphics</p>
        </div>
      </footer>
    </div>
  );
}