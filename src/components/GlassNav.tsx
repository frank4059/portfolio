"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Hoverable from "./Hoverable";
import { profile } from "@/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Tools", href: "#tools" },
];

const contactLinks = [
  {
    label: "Email",
    href: `mailto:${profile.email}`,
    icon: "/iconos/email-2.svg",
  },
  {
    label: "Instagram",
    href: profile.instagramUrl,
    icon: "/iconos/instagram-2.svg",
  },
  {
    label: "WhatsApp",
    href: profile.whatsappUrl,
    icon: "/iconos/whatsapp-2.svg",
  },
];

export default function GlassNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-all duration-300 sm:px-6 ${
          scrolled
            ? "border-white/40 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl"
            : "border-white/30 bg-white/50 backdrop-blur-md"
        }`}
      >
        <Hoverable
          href="#about"
          hover={{ scale: 1.05 }}
          tap={{ scale: 0.98 }}
          hold={0}
          className="flex items-center gap-2"
        >
          <Image
            src="/frank-logo.svg"
            alt="Frank Editions logo"
            width={48}
            height={48}
            loading="eager"
            className="h-12 w-12"
          />
          <span className="font-display text-lg tracking-tight uppercase">
            Frank Editions
          </span>
        </Hoverable>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <Hoverable
              key={link.label}
              href={link.href}
              hover={{ scale: 1.1, y: -4 }}
              tap={{ scale: 0.95 }}
              hold={0}
              className="rounded-full px-4 py-2 text-sm font-medium whitespace-nowrap text-foreground/70 transition-colors hover:bg-white/60 hover:text-foreground"
            >
              {link.label}
            </Hoverable>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {contactLinks.map((item) => (
            <Hoverable
              key={item.label}
              href={item.href}
              aria-label={item.label}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={
                item.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              hover={{ scale: 1.2, y: -6 }}
              tap={{ scale: 0.9 }}
              hold={0}
              className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/60"
            >
              <Image
                src={item.icon}
                alt=""
                width={24}
                height={24}
                className="h-6 w-6 drop-shadow-sm"
              />
            </Hoverable>
          ))}
        </div>

        <Hoverable
          href={`mailto:${profile.email}`}
          hover={{ scale: 1.08, y: -3 }}
          tap={{ scale: 0.95 }}
          hold={0}
          className="hidden h-10 items-center rounded-full bg-foreground px-5 text-sm font-semibold text-background transition-opacity hover:opacity-85 md:flex"
        >
          Contact me
        </Hoverable>

        <button
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl transition-colors hover:bg-white/60 md:hidden"
        >
          <motion.span
            animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-5 rounded-full bg-foreground"
          />
          <motion.span
            animate={open ? { opacity: 0 } : { opacity: 1 }}
            className="h-0.5 w-5 rounded-full bg-foreground"
          />
          <motion.span
            animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            className="h-0.5 w-5 rounded-full bg-foreground"
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="absolute top-full mt-3 w-[calc(100%-2rem)] max-w-6xl rounded-2xl border border-white/40 bg-white/80 p-3 shadow-lg shadow-black/5 backdrop-blur-xl md:hidden"
          >
            {links.map((link) => (
              <Hoverable
                key={link.label}
                href={link.href}
                hover={{ scale: 1.05, x: 4 }}
                tap={{ scale: 0.97 }}
                hold={0}
                onClick={() => setOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground/80 transition-colors hover:bg-white/70"
              >
                {link.label}
              </Hoverable>
            ))}
            <div className="mt-2 flex items-center justify-center gap-4 border-t border-white/40 pt-3">
              {contactLinks.map((item) => (
                <Hoverable
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  hover={{ scale: 1.2, y: -6 }}
                  tap={{ scale: 0.9 }}
                  hold={0}
                  className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/70"
                >
                  <Image
                    src={item.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="h-6 w-6 drop-shadow-sm"
                  />
                </Hoverable>
              ))}
            </div>
            <Hoverable
              href={`mailto:${profile.email}`}
              hover={{ scale: 1.03 }}
              tap={{ scale: 0.97 }}
              hold={0}
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-xl bg-foreground px-4 py-3 text-center text-sm font-semibold text-background"
            >
              Contact me
            </Hoverable>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}