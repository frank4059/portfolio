"use client";

import Image from "next/image";
import Hoverable from "./Hoverable";
import { tools } from "@/data";
import MotionReveal from "./MotionReveal";

export default function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 py-20">
      <MotionReveal>
        <div className="mb-4">
          <div className="text-center">
            <p className="mb-2 text-xs font-semibold tracking-[0.25em] text-muted uppercase">
              My creative stack
            </p>
            <h2 className="text-5xl tracking-tight text-foreground uppercase md:text-7xl">
              Tools
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="group relative">
                <Hoverable
                  type="button"
                  aria-label={tool.name}
                  hover={{ scale: 1.1, y: -4 }}
                  tap={{ scale: 0.95 }}
                  className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm md:h-20 md:w-20"
                >
                  <Image
                    src={tool.logo!}
                    alt={tool.name}
                    width={80}
                    height={80}
                    className="h-full w-full object-cover"
                  />
                </Hoverable>
                <span className="pointer-events-none absolute top-full left-1/2 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-full border border-line bg-background px-3 py-1 text-xs font-semibold tracking-wide uppercase opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                  {tool.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>
    </section>
  );
}