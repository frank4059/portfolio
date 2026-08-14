"use client";

import { projects } from "@/data";
import CircularGallery from "./CircularGallery";
import MotionReveal from "./MotionReveal";
import Section from "./Section";

function projectImage(project: (typeof projects)[number]) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${project.color}" stop-opacity="0.45"/><stop offset="1" stop-color="${project.color}" stop-opacity="0.95"/></linearGradient></defs><rect width="800" height="600" fill="url(#g)"/></svg>`;
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

const items = projects.map((project) => ({
  image: projectImage(project),
  text: project.title,
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
            />
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-[linear-gradient(to_right,rgba(255,255,255,1)_0%,rgba(255,255,255,0.9)_40%,rgba(255,255,255,0)_100%)] md:w-48" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-[linear-gradient(to_left,rgba(255,255,255,1)_0%,rgba(255,255,255,0.9)_40%,rgba(255,255,255,0)_100%)] md:w-48" />
          </div>
        </div>
      </MotionReveal>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {projects.map((project, index) => (
          <MotionReveal key={project.id} delay={index * 0.1}>
            <article className="flex h-full flex-col rounded-2xl border border-line p-6">
              <h3
                className="font-display text-3xl tracking-tight uppercase"
                style={{ color: project.color }}
              >
                {project.title}
              </h3>
              <p className="mt-3 text-sm text-muted">{project.description}</p>
              <ul className="mt-5 space-y-2.5">
                {project.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm font-medium"
                  >
                    <span
                      className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                      style={{ backgroundColor: project.color }}
                    />
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