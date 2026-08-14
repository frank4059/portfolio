import { experience } from "@/data";
import MotionReveal from "./MotionReveal";
import Section from "./Section";

export default function Experience() {
  return (
    <Section
      id="experience"
      title="Work Experience"
      subtitle="Career"
    >
      <ol className="relative border-l border-line">
        {experience.map((job, index) => (
          <li key={job.company} className="ml-6 pb-12 last:pb-0">
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
            <MotionReveal delay={index * 0.08}>
              <div className="mb-1 flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <h3 className="text-2xl uppercase">{job.company}</h3>
                <span className="text-sm font-medium text-muted">
                  {job.period}
                </span>
              </div>
              <p className="mb-2 text-sm font-semibold tracking-wide text-accent uppercase">
                {job.position}
              </p>
              <p className="mb-3 max-w-2xl text-muted">{job.description}</p>
              <ul className="max-w-2xl space-y-2">
                {job.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </MotionReveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}