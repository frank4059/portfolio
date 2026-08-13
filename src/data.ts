export const profile = {
  name: "Frank",
  shortName: "Frank Sarmiento",
  role: "Video Editor",
  title: "Portfolio 2026 | Video Editor",
  location: "San Vicente y las Granadinas",
  description:
    "Editor de video autodidacta con más de 5 años de experiencia creando contenido que capta la atención desde el primer segundo. Me especializo en edición de video, motion graphics y diseño — dominando Premiere Pro, After Effects, Photoshop y Blender para llevar cada proyecto del concepto al resultado final. Mi enfoque: ritmo, narrativa y detalles que hacen la diferencia.",
  birthDate: "30 de diciembre de 1996",
  education: "Autodidacta",
  email: "frankssleyva@gmail.com",
  instagram: "@frank_editions",
  instagramUrl: "https://www.instagram.com/frank_editions/",
  whatsapp: "+1 784 497 7662",
  whatsappUrl: "https://wa.me/17844977662",
  photoUrl: "/frank2.png",
  stats: {
    likes: "1.2K",
    views: "38.5K",
    publishDate: "12 de agosto de 2026",
  },
  tools: ["After Effects", "Photoshop", "Premiere Pro", "Blender"],
  fields: ["Edición", "Diseño Gráfico", "Gráficos en Movimiento"],
};

export type Job = {
  company: string;
  period: string;
  position: string;
  description: string;
};

export const experience: Job[] = [
  {
    company: "Putih Agency",
    period: "2025 — Actualidad",
    position: "Editor de Video Senior",
    description:
      "Dirección de la edición de campañas para clientes de moda y lifestyle. Creación de motion graphics de marca y supervisión del flujo de post-producción del equipo.",
  },
  {
    company: "KPURI",
    period: "2023 — 2025",
    position: "Editor de Video",
    description:
      "Edición de contenido de formato corto para redes sociales. Corte y organización de clips, ajuste de música y ritmo para maximizar la retención del espectador.",
  },
  {
    company: "Kasoem Group",
    period: "2022 — 2023",
    position: "Diseñador Gráfico y Editor",
    description:
      "Diseño de activos visuales para campañas de producto: carteles, miniaturas y piezas para redes. Soporte en la edición de video corporativo.",
  },
  {
    company: "The Biker Shop",
    period: "2021 — 2022",
    position: "Fotógrafo y Editor Junior",
    description:
      "Producción de fotografía y video para catálogo y redes sociales. Edición de reels promocionales y retoque fotográfico de producto.",
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
    tag: "Gráficos en Movimiento",
    description:
      "Animación de gráficos para redes sociales y uso comercial. Juego con tipografía, formas y ritmo para construir identidad visual en movimiento.",
    items: [
      "Tipografía animada",
      "Formas y transiciones",
      "Animación para redes y comerciales",
    ],
    color: "#7c3aed",
    cover: "/placeholders/project-motion.png",
  },
  {
    id: "short-content",
    title: "Short Content",
    tag: "Contenido Corto",
    description:
      "Edición de contenido para Reels y TikTok. Corte y organización de clips, ajuste de canciones y video para capturar la atención del espectador.",
    items: [
      "Reels y TikTok",
      "Corte y organización de clips",
      "Ajuste de música y ritmo",
    ],
    color: "#f59e0b",
    cover: "/placeholders/project-short.png",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    tag: "Diseño Gráfico",
    description:
      "Diseño de activos visuales: carteles, miniaturas y piezas de marca. Composición, jerarquía y consistencia de marca en cada entrega.",
    items: [
      "Carteles y miniaturas",
      "Composición y jerarquía",
      "Consistencia de marca",
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
};

export const tools: Tool[] = [
  {
    name: "After Effects",
    short: "AE",
    color: "#9999FF",
    description: "Motion graphics y composición",
  },
  {
    name: "Photoshop",
    short: "PS",
    color: "#31A8FF",
    description: "Retoque y diseño de imagen",
  },
  {
    name: "Premiere Pro",
    short: "PR",
    color: "#9999FF",
    description: "Edición de video",
  },
  {
    name: "DaVinci Resolve",
    short: "DR",
    color: "#F26F21",
    description: "Colorización y acabado",
  },
  {
    name: "Blender",
    short: "BL",
    color: "#E87D0D",
    description: "Modelado 3D y animación",
  },
];

export type Comment = {
  id: number;
  name: string;
  date: string;
  text: string;
  avatarColor: string;
  replies?: { name: string; date: string; text: string; avatarColor: string }[];
};

export const initialComments: Comment[] = [
  {
    id: 1,
    name: "Rizky Pratama",
    date: "3 de agosto de 2026",
    text: "El reel de motion graphics quedó increíble. La animación de tipografía está muy limpia, felicitaciones!",
    avatarColor: "#7c3aed",
    replies: [
      {
        name: "Quennel Damairo",
        date: "4 de agosto de 2026",
        text: "Gracias Rizky! Fue un proyecto en el que trabajé mucho el timing.",
        avatarColor: "#0a0a0a",
      },
    ],
  },
  {
    id: 2,
    name: "Sinta Wulandari",
    date: "28 de julio de 2026",
    text: "Me encanta la selección de colores en el diseño gráfico. Gran consistencia de marca.",
    avatarColor: "#0891b2",
  },
  {
    id: 3,
    name: "Andi Saputra",
    date: "15 de julio de 2026",
    text: "Los cortes del short content para TikTok están en otro nivel. Cuántos clips editaste en ese proyecto?",
    avatarColor: "#f59e0b",
  },
];