import Image from "next/image";
import { profile } from "@/data";
import MotionReveal from "./MotionReveal";

const personalInfo = [
  { label: "Fecha de nacimiento", value: profile.birthDate },
  { label: "Educación", value: profile.education },
];

const contactIcons: Record<string, React.ReactNode> = {
  Email: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
    </svg>
  ),
  WhatsApp: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 8.5 19.9L3 21Z" />
      <path d="M8.5 10.5c0 3.5 2 6 5.5 6 .5 0 1-.2 1.3-.6l.7-1.1-1.9-1-.9.8c-1-.4-1.8-1.2-2.2-2.2l.8-.9-1-1.9-1.1.7c-.4.3-.6.8-.6 1.3Z" />
    </svg>
  ),
};

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  {
    label: "Instagram",
    value: profile.instagram,
    href: profile.instagramUrl,
  },
  {
    label: "WhatsApp",
    value: profile.whatsapp,
    href: profile.whatsappUrl,
  },
];

export default function About() {
  return (
    <section id="sobre-mi" className="scroll-mt-28 pt-14 pb-20">
      <MotionReveal>
        <h2 className="mb-6 text-center text-7xl leading-[0.9] tracking-tight uppercase md:text-9xl">
          I&apos;M {profile.name}
        </h2>
      </MotionReveal>

      <div className="grid gap-0 md:grid-cols-[640px_1fr] md:-mx-16">
        <MotionReveal delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={profile.photoUrl}
              alt={`Foto de ${profile.name}`}
              width={853}
              height={846}
              sizes="640px"
              className="h-auto w-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-[linear-gradient(to_top,rgba(255,255,255,1)_0%,rgba(255,255,255,0.9)_20%,rgba(255,255,255,0.6)_50%,rgba(255,255,255,0.3)_75%,rgba(255,255,255,0)_100%)]" />
          </div>
        </MotionReveal>

        <div className="flex flex-col justify-center gap-8">
          <MotionReveal delay={0.15}>
            <p className="text-lg leading-relaxed text-muted">
              {profile.description}
            </p>
          </MotionReveal>

          <MotionReveal delay={0.2}>
            <div className="grid gap-4 sm:grid-cols-2">
              {personalInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-line p-4"
                >
                  <p className="text-xs font-semibold tracking-[0.2em] text-muted uppercase">
                    {item.label}
                  </p>
                  <p className="mt-1 text-sm font-medium">{item.value}</p>
                </div>
              ))}
            </div>
          </MotionReveal>

          <MotionReveal delay={0.25}>
            <div className="rounded-2xl border border-line p-4">
              <div className="grid gap-3 sm:grid-cols-3">
                {contactLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="group flex flex-col items-center gap-2 text-center"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      item.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                      {contactIcons[item.label]}
                    </span>
                    <span className="text-xs font-medium underline-offset-4 group-hover:underline">
                      {item.value}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
}