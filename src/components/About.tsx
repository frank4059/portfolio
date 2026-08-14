import Image from "next/image";
import { profile } from "@/data";
import MotionReveal from "./MotionReveal";

const contactIcons: Record<string, string> = {
  Email: "/iconos/email.svg",
  Instagram: "/iconos/instagram.svg",
  WhatsApp: "/iconos/whatsapp.svg",
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
    <section id="about" className="scroll-mt-28 pt-14 pb-20">
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
              alt={`Photo of ${profile.name}`}
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
                    <Image
                      src={contactIcons[item.label]}
                      alt=""
                      width={64}
                      height={64}
                      className="h-16 w-16 drop-shadow-md transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-xs font-medium transition-transform duration-300 group-hover:scale-110">
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