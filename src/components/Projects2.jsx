import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "NoteShare",
    status: "Live · Production",
    statusType: "live",
    url: "https://noteshare.online",
    colSpan: "lg:col-span-2",
    featured: true,
    description:
      "Solo-built MERN academic platform for sharing notes, question papers, and resources across college branches and years. Features multi-level caching (L1 in-memory + L2 Redis), an Android app via Capacitor with FLAG_SECURE (blocks screenshots), PDF streaming with watermarking, RBAC, Google AdSense, and an admin dashboard. Zero paid infrastructure.",
    metrics: [
      { value: "1.8M req/hr", label: "Sustained throughput on zero paid infra" },
      { value: "30 → 512 req/s", label: "17× performance improvement via caching" },
      { value: "162 Users", label: "Registered & active on noteshare.online" },
    ],
    systemDesign: [
      "Multi-level caching: L1 in-memory + L2 Redis (cache-aside pattern)",
      "protectCached middleware for auth caching",
      "MongoDB compound indexes + .lean() queries",
      "RBAC · CDN offloading · Cache key namespacing",
      "Offset pagination · Google AdSense · Admin dashboard",
      "Cloudflare R2 for PDF storage (S3-compatible, zero egress fees)",
    ],
    stack: [
      "React + Vite", "Node.js", "Express", "MongoDB Atlas",
      "Redis", "Cloudflare R2", "Capacitor", "JWT", "Vercel + Render",
    ],
    targeting: null,
  },
  {
    id: 2,
    name: "Stock Tracker",
    status: "In Progress",
    statusType: "wip",
    url: null,
    colSpan: "lg:col-span-1",
    featured: false,
    description:
      "Real-time portfolio dashboard with live P&L updates via WebSockets. Tracks positions, unrealised gains/losses, and market data with auto-reconnection logic and price alert system.",
    metrics: null,
    systemDesign: null,
    stack: ["WebSockets", "Node.js", "React", "PostgreSQL", "JWT"],
    targeting: ["Goldman Sachs", "DE Shaw", "Arcesium", "Morgan Stanley"],
  },
  {
    id: 3,
    name: "Expense Splitter",
    status: "In Progress",
    statusType: "wip",
    url: null,
    colSpan: "lg:col-span-1",
    featured: false,
    description:
      "Group expense management app with a greedy graph debt-simplification algorithm that minimises the number of transactions needed to settle balances. Full RESTful API with PostgreSQL schema and JWT auth.",
    metrics: null,
    systemDesign: null,
    stack: ["PostgreSQL", "Node.js", "Express", "Greedy Algorithm", "JWT"],
    targeting: ["Slice", "PhonePe", "Razorpay", "CRED", "Juspay", "Intuit"],
  },
  {
    id: 4,
    name: "URL Shortener",
    status: "In Progress",
    statusType: "wip",
    url: null,
    colSpan: "lg:col-span-2",
    featured: false,
    description:
      "Backend-focused URL shortening service with Base62 encoding for compact slugs, Redis caching for sub-millisecond redirects, and a click-analytics dashboard showing geographic and referrer data.",
    metrics: null,
    systemDesign: null,
    stack: ["Redis", "PostgreSQL", "Node.js", "Base62", "REST API"],
    targeting: ["Amazon", "Microsoft", "Atlassian", "Swiggy"],
  },
  {
    id: 5,
    name: "Skin Cancer Detection",
    status: "Research · Group Project",
    statusType: "research",
    url: null,
    colSpan: "lg:col-span-2",
    featured: false,
    description:
      "Medical ML application that classifies skin lesion images and uses Grad-CAM heatmap visualisation to highlight the exact skin regions that triggered the prediction — making the model interpretable for doctors. Integrated Google Maps API to surface nearby dermatologists based on user location. Suraj owned the frontend and Grad-CAM visualisation layer.",
    metrics: null,
    systemDesign: null,
    stack: ["React", "Python", "Grad-CAM", "TensorFlow", "Google Maps API", "ML"],
    targeting: ["Samsung", "Adobe"],
  },
];

const statusStyles = {
  live:     "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",
  wip:      "bg-amber-500/10 text-amber-400 border border-amber-500/30",
  research: "bg-purple-500/10 text-purple-400 border border-purple-500/30",
};

function StackPill({ label }) {
  return (
    <span className="text-xs font-mono px-2 py-1 rounded border border-white/10 text-white/50 hover:border-white/30 hover:text-white/80 transition-colors duration-150">
      {label}
    </span>
  );
}

function FeaturedCard({ project }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-xl border border-white/10
        bg-white/[0.03] p-6
        hover:-translate-y-1 transition-transform duration-300
        ${project.colSpan}
      `}
    >
      {/* Bottom border reveal */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-teal-400 group-hover:w-full transition-all duration-500" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-start justify-between">
            <span className={`text-xs font-mono px-2.5 py-1 rounded ${statusStyles[project.statusType]}`}>
              {project.status}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/30 hover:text-white transition-colors"
                aria-label="Open NoteShare"
              >
                <ArrowUpRight size={18} />
              </a>
            )}
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white">
            {project.name}
          </h3>

          <p className="text-sm text-white/55 leading-relaxed">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/[0.07]">
            {project.stack.map((s) => (
              <StackPill key={s} label={s} />
            ))}
          </div>
        </div>

        {/* Right column — metrics + system design callout */}
        <div className="flex flex-col gap-4">
          {project.metrics && (
            <div className="flex flex-col gap-3">
              {project.metrics.map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="text-xl font-bold tracking-tight text-white">{m.value}</span>
                  <span className="text-xs text-white/40 font-mono">{m.label}</span>
                </div>
              ))}
            </div>
          )}

          {project.systemDesign && (
            <div className="rounded-lg border border-purple-500/20 bg-purple-500/[0.06] p-4">
              <p className="text-xs font-mono uppercase tracking-widest text-purple-400/70 mb-3">
                System Design Highlights
              </p>
              <ul className="flex flex-col gap-1.5">
                {project.systemDesign.map((item) => (
                  <li key={item} className="text-xs text-white/50 font-mono before:content-['▸_'] before:text-purple-400/50">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function StandardCard({ project }) {
  return (
    <div
      className={`
        group relative overflow-hidden rounded-xl border border-white/10
        bg-white/[0.03] p-6 flex flex-col gap-4
        hover:-translate-y-2 transition-transform duration-300
        ${project.colSpan}
      `}
    >
      {/* Bottom border reveal */}
      <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-teal-400 group-hover:w-full transition-all duration-500" />

      <div className="flex items-start justify-between">
        <span className={`text-xs font-mono px-2.5 py-1 rounded ${statusStyles[project.statusType]}`}>
          {project.status}
        </span>
        {project.url ? (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white transition-colors"
          >
            <ArrowUpRight size={18} />
          </a>
        ) : (
          <ArrowUpRight size={18} className="text-white/20 group-hover:text-white/50 transition-colors" />
        )}
      </div>

      <h3 className="text-xl font-bold tracking-tight text-white">{project.name}</h3>

      <p className="text-sm text-white/55 leading-relaxed flex-1">{project.description}</p>

      <div className="flex flex-wrap gap-2 pt-4 border-t border-white/[0.07]">
        {project.stack.map((s) => (
          <StackPill key={s} label={s} />
        ))}
      </div>

      {project.targeting && (
        <div className="pt-2">
          <span className="text-xs font-mono text-white/30 uppercase tracking-widest">Targeting · </span>
          <span className="text-xs font-mono text-white/40">{project.targeting.join(", ")}</span>
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-16 max-w-6xl mx-auto">
      <p className="text-xs font-mono uppercase tracking-widest text-white/30 mb-2">
        <span className="text-purple-400 mr-2">02</span>Selected Work
      </p>
      <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-12">
        Things I've shipped.
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project) =>
          project.featured ? (
            <FeaturedCard key={project.id} project={project} />
          ) : (
            <StandardCard key={project.id} project={project} />
          )
        )}
      </div>
    </section>
  );
}