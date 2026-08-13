import type { ReactNode } from "react";
import MotionReveal from "./MotionReveal";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${className ?? ""}`}>
      <MotionReveal>
        <div className="mb-12">
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-muted uppercase">
            {subtitle}
          </p>
          <h2 className="text-4xl tracking-tight text-foreground uppercase md:text-5xl">
            {title}
          </h2>
        </div>
      </MotionReveal>
      {children}
    </section>
  );
}