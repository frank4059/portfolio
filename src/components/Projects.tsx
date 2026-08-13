import { projects } from "@/data";
import MotionReveal from "./MotionReveal";
import Section from "./Section";

export default function Projects() {
  return (
    <Section id="proyectos" title="Proyectos" subtitle="Trabajo seleccionado">
      <div className="space-y-20">
        {projects.map((project, index) => (
          <article key={project.id}>
            <MotionReveal>
              <div
                className="mb-8 h-64 overflow-hidden rounded-3xl border border-line md:h-80"
                style={{
                  background: `linear-gradient(135deg, ${project.color}22 0%, ${project.color}55 100%)`,
                }}
              >
                <div className="flex h-full flex-col items-center justify-center gap-3">
                  <span
                    className="font-display text-6xl tracking-tight uppercase md:text-8xl"
                    style={{ color: project.color }}
                  >
                    {project.title}
                  </span>
                  <span className="rounded-full border border-foreground/20 px-4 py-1 text-xs font-semibold tracking-widest uppercase">
                    {project.tag}
                  </span>
                </div>
              </div>
            </MotionReveal>

            <div className="grid gap-6 md:grid-cols-[1fr_320px]">
              <MotionReveal delay={0.1}>
                <h3 className="mb-4 text-4xl tracking-tight uppercase md:text-5xl">
                  {project.title}
                </h3>
                <p className="max-w-2xl text-lg text-muted">
                  {project.description}
                </p>
              </MotionReveal>
              <MotionReveal delay={0.15}>
                <ul className="space-y-3 rounded-2xl border border-line p-5">
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
              </MotionReveal>
            </div>

            {index < projects.length - 1 && (
              <div className="mt-20 h-px w-full bg-line" />
            )}
          </article>
        ))}
      </div>
    </Section>
  );
}