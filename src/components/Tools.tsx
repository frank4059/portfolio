"use client";

import { motion } from "framer-motion";
import { tools } from "@/data";
import MotionReveal from "./MotionReveal";
import Section from "./Section";

export default function Tools() {
  const marquee = [...tools, ...tools];

  return (
    <Section id="herramientas" title="Herramientas" subtitle="Mi stack creativo">
      <div className="mb-14 overflow-hidden border-y border-line py-4">
        <motion.div
          className="flex w-max gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {marquee.map((tool, index) => (
            <span
              key={`${tool.name}-${index}`}
              className="font-display text-2xl whitespace-nowrap text-muted uppercase"
            >
              {tool.name}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool, index) => (
          <MotionReveal key={tool.name} delay={index * 0.08}>
            <div
              className="group relative overflow-hidden rounded-3xl border border-line p-6 transition-colors"
              style={{
                background: `linear-gradient(150deg, ${tool.color}14 0%, transparent 60%)`,
              }}
            >
              <div className="flex items-center justify-between">
                <span
                  className="flex h-16 w-16 items-center justify-center rounded-full font-display text-xl"
                  style={{ backgroundColor: tool.color, color: "#ffffff" }}
                >
                  <motion.span
                    animate={{ rotateY: [0, 360] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {tool.short}
                  </motion.span>
                </span>
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: tool.color }}
                />
              </div>
              <h3 className="mt-6 text-xl font-bold">{tool.name}</h3>
              <p className="mt-1 text-sm text-muted">{tool.description}</p>
              <div
                className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ backgroundColor: tool.color }}
              />
            </div>
          </MotionReveal>
        ))}
      </div>
    </Section>
  );
}