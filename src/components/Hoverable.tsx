"use client";

import { motion } from "framer-motion";
import { useRef, useState, type ReactNode } from "react";

type HoverableProps = {
  children: ReactNode;
  hover: { scale?: number; y?: number; x?: number };
  tap?: { scale?: number };
  hold?: number;
  className?: string;
  href?: string;
  target?: string;
  rel?: string;
  "aria-label"?: string;
  type?: "button";
  onClick?: () => void;
};

export default function Hoverable({
  children,
  hover,
  tap,
  hold = 200,
  className,
  href,
  ...rest
}: HoverableProps) {
  const timer = useRef<number | undefined>(undefined);
  const [active, setActive] = useState(false);

  const onHoverStart = () => {
    window.clearTimeout(timer.current);
    setActive(true);
  };

  const onHoverEnd = () => {
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setActive(false), hold);
  };

  const transition = { type: "spring", stiffness: 200, damping: 17 } as const;
  const animate = active ? hover : { scale: 1, y: 0, x: 0 };

  if (href) {
    return (
      <motion.a
        href={href}
        className={className}
        animate={animate}
        whileTap={tap}
        transition={transition}
        onHoverStart={onHoverStart}
        onHoverEnd={onHoverEnd}
        {...rest}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      className={className}
      animate={animate}
      whileTap={tap}
      transition={transition}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
      {...rest}
    >
      {children}
    </motion.button>
  );
}