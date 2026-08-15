"use client";

import { projects, works } from "@/data";
import CircularGallery from "./CircularGallery";
import MotionReveal from "./MotionReveal";
import Section from "./Section";

const items = works.map((work) => ({
  image: work.media,
  text: work.label,
}));

export default function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work"
      align="center"
      titleClassName="text-5xl md:text-7xl"
      headingClassName="mb-1"
    >
      <MotionReveal>
        <div className="relative left-1/2 w-screen -translate-x-1/2">
          <div className="relative h-[520px] w-full overflow-hidden md:h-[600px]">
            <CircularGallery
              items={items}
              bend={3}
              borderRadius={0.05}
              textColor="#0a0a0a"
            scrollSpeed={2}
            scrollEase={0.05}
            autoSpeed={0.05}
            itemScale={0.7}
            font="bold 30px Inter"
            fontUrl="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,0.9)_40%,rgba(255,255,255,0)_100%)] md:w-48" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(to_left,rgba(255,255,255,1)_0%,rgba(255,255,255,0.9)_40%,rgba(255,255,255,0)_100%)] md:w-48" />
          </div>
        </div>
      </MotionReveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <MotionReveal key={project.id} delay={index * 0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-white/40 bg-white/50 p-6 shadow-lg shadow-black/5 backdrop-blur-xl transition-all duration-300 hover:border-white/60 hover:bg-white/70 hover:shadow-xl hover:shadow-black/5">
              <h3 className="font-display text-3xl tracking-tight uppercase">
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{project.description}</p>
              <ul className="mt-5 space-y-2.5">
                {project.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium"
                  >
                    <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-foreground/40" />
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}