export const profile = {
  name: "Frank",
  shortName: "Frank Sarmiento",
  role: "Video Editor",
  title: "Portfolio 2026 | Video Editor",
  location: "Saint Vincent and the Grenadines",
  description: [
    {
      text: "Self-taught video editor with 4+ years of experience creating content that grabs attention from the very first second. ",
    },
    {
      text: "I specialize in video editing, motion graphics and 3d animation — mastering Premiere Pro, After Effects, Photoshop and Blender",
      bold: true,
    },
    {
      text: " to take every project from concept to final result. My focus: pacing, storytelling and details that make the difference.",
    },
  ],
  email: "frankssleyva@gmail.com",
  instagram: "@frank_editions",
  instagramUrl: "https://www.instagram.com/frank_editions/",
  whatsapp: "+1 784 497 7662",
  whatsappUrl: "https://wa.me/17844977662",
  photoUrl: "/frank2.png",
  tools: ["After Effects", "Photoshop", "Premiere Pro", "Blender"],
  fields: ["Editing", "Graphic Design", "Motion Graphics"],
};

export type Job = {
  company: string;
  period: string;
  position: string;
  description: string;
  items: string[];
};

export const experience: Job[] = [
  {
    company: "DigiKagency",
    period: "Mar 2026 — Jul 2026",
    position: "Contract Video Editor & Motion Designer",
    description:
      "Contract work for international clients across social media and advertising campaigns.",
    items: [
      "Accelerated production turnaround by 25% by streamlining post-production workflows and developing reusable motion graphics templates for recurring social media campaigns.",
      "Maximized multi-platform performance for international clients by adapting pacing, typography, animation, aspect ratios, and brand guidelines across vertical and horizontal formats.",
    ],
  },
  {
    company: "The Keyes Company",
    period: "Aug 2025 — Feb 2026",
    position: "Contract Video Editor & Motion Designer",
    description:
      "Corporate and promotional video production for the Florida, USA real estate market.",
    items: [
      "Drove a 35% increase in website engagement and organic reach by conceptualizing, editing, and animating 3 high-impact corporate and promotional video projects.",
      "Enhanced financial and real estate market communication for investors and buyers by integrating animated data visualizations, custom motion graphics, and clean visual hierarchy.",
    ],
  },
  {
    company: "Creative Studio Melisa Medel",
    period: "2022 — 2025",
    position: "Video Editor & Motion Graphics Specialist",
    description:
      "Branding and marketing content for diverse client identities, delivered under tight deadlines.",
    items: [
      "Increased average watch time by 40% across client campaigns by implementing retention-focused pacing, kinetic typography, custom transitions, visual effects, and sound design.",
      "Produced 150+ vertical and horizontal video assets for branding and marketing campaigns while enforcing strict visual standards across diverse client brand identities.",
      "Translated strategic briefs into platform-optimized content for YouTube, social media, and corporate distribution under tight deadlines and remote feedback cycles.",
    ],
  },
];

export type Project = {
  id: string;
  title: string;
  tag: string;
  description: string;
  items: string[];
  color: string;
  cover: string;
};

export const projects: Project[] = [
  {
    id: "motion-graphic",
    title: "Motion Graphic",
    tag: "Motion Graphics",
    description:
      "Graphic animation for social media and commercial use. Playing with typography, shapes and pacing to build a visual identity in motion.",
    items: [
      "Animated typography",
      "Shapes and transitions",
      "Animation for socials and commercials",
    ],
    color: "#7c3aed",
    cover: "/placeholders/project-motion.png",
  },
  {
    id: "short-content",
    title: "Social Content",
    tag: "Short Form",
    description:
      "Editing content for Reels and TikTok. Cutting and organizing clips, syncing songs and video to capture the viewer's attention.",
    items: [
      "Reels and TikTok",
      "Cutting and organizing clips",
      "Music and pacing adjustment",
    ],
    color: "#f59e0b",
    cover: "/placeholders/project-short.png",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    tag: "Graphic Design",
    description:
      "Design of visual assets: posters, thumbnails and brand pieces. Composition, hierarchy and brand consistency in every deliverable.",
    items: [
      "Posters and thumbnails",
      "Composition and hierarchy",
      "Brand consistency",
    ],
    color: "#0891b2",
    cover: "/placeholders/project-design.png",
  },
];

export type Tool = {
  name: string;
  short: string;
  color: string;
  description: string;
  logo?: string;
};

export type Works = {
  id: string;
  title: string;
  caption: string;
  media: string;
  type: "video" | "image";
  color: string;
  label: string;
};

export const works: Works[] = [
  {
    id: "tu-marca-en-movimiento",
    title: "Tu marca en movimiento",
    caption:
      "Tu marca sigue quieta? Las animaciones aumentan retención, mejoran el recuerdo de marca y hacen que tu contenido destaque.",
    media: "/works/projects-1.mp4",
    type: "video",
    color: "#7c3aed",
    label: "Melisa Medel",
  },
  {
    id: "reel-1",
    title: "Reel",
    caption: "Motion reel.",
    media: "/works/projects-2.mp4",
    type: "video",
    color: "#f59e0b",
    label: "Motion Graphic",
  },
  {
    id: "reel-2",
    title: "Reel",
    caption: "Motion reel.",
    media: "/works/projects-3.mp4",
    type: "video",
    color: "#0891b2",
    label: "Keyes Company",
  },
  {
    id: "reel-3",
    title: "Reel",
    caption: "Motion reel.",
    media: "/works/projects-4.mp4",
    type: "video",
    color: "#7c3aed",
    label: "Keyes Web",
  },
  {
    id: "reel-4",
    title: "Reel",
    caption: "Motion reel.",
    media: "/works/projects-5.mp4",
    type: "video",
    color: "#f59e0b",
    label: "LA The Builder",
  },
  {
    id: "socal-dumpsters",
    title: "SoCal Dumpsters",
    caption:
      "Bringing brands to life - frame by frame. A custom identity in motion for SoCal Dumpsters LLC.",
    media: "/works/projects-6.mp4",
    type: "video",
    color: "#0891b2",
    label: "SoCal Dumpsters",
  },
  {
    id: "keyes-case-study",
    title: "Keyes Case Study",
    caption:
      "Case Study: Video & Motion Design for the launch of Keyes' new real estate website.",
    media: "/works/projects-7.mp4",
    type: "video",
    color: "#7c3aed",
    label: "3D animation",
  },
  {
    id: "keyes-case-study-2",
    title: "Keyes Case Study",
    caption:
      "Case Study: Video & Motion Design for the launch of Keyes' new real estate website.",
    media: "/works/projects-8.mp4",
    type: "video",
    color: "#f59e0b",
    label: "Motion Graphic",
  },
];

export const tools: Tool[] = [
  {
    name: "After Effects",
    short: "AE",
    color: "#9999FF",
    description: "Motion graphics and compositing",
    logo: "/iconos/after-effects-2.svg",
  },
  {
    name: "Photoshop",
    short: "PS",
    color: "#31A8FF",
    description: "Photo retouching and image design",
    logo: "/iconos/photoshop-2.svg",
  },
  {
    name: "Illustrator",
    short: "AI",
    color: "#FF9A00",
    description: "Vector design and illustration",
    logo: "/iconos/illustrator-2.svg",
  },
  {
    name: "Premiere Pro",
    short: "PR",
    color: "#9999FF",
    description: "Video editing",
    logo: "/iconos/premiere-pro-2.svg",
  },
  {
    name: "CapCut",
    short: "CC",
    color: "#34E1FF",
    description: "Quick edits for social media",
    logo: "/iconos/capcut-2.svg",
  },
  {
    name: "Blender",
    short: "BL",
    color: "#E87D0D",
    description: "3D modeling and animation",
    logo: "/iconos/blender-2.svg",
  },
];