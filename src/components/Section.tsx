import type { ReactNode } from "react";
import MotionReveal from "./MotionReveal";

type SectionProps = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  align?: "left" | "center";
  titleClassName?: string;
  headingClassName?: string;
};

export default function Section({
  id,
  title,
  subtitle,
  children,
  className,
  align = "left",
  titleClassName,
  headingClassName,
}: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-24 py-20 ${className ?? ""}`}>
      <MotionReveal>
        <div
          className={`${align === "center" ? "text-center" : ""} ${headingClassName ?? "mb-12"}`}
        >
          <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-muted uppercase">
            {subtitle}
          </p>
          <h2
            className={`text-4xl tracking-tight text-foreground uppercase md:text-5xl ${titleClassName ?? ""}`}
          >
            {title}
          </h2>
        </div>
      </MotionReveal>
      {children}
    </section>
  );
}