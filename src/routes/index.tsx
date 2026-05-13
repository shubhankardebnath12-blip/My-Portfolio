import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import projectMarketMind from "@/assets/project-marketmind.jpg";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LoadingScreen } from "@/components/LoadingScreen";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shubhankar Debnath — Front-end Developer & CSE Student" },
      {
        name: "description",
        content:
          "Portfolio of Shubhankar Debnath — Computer Science Engineering student passionate about front-end development, React.js, and building modern, user-focused web applications.",
      },
      { property: "og:title", content: "Shubhankar Debnath — Front-end Developer" },
      {
        property: "og:description",
        content:
          "CSE student crafting modern, interactive web interfaces with React, JavaScript, and a strong CS foundation.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

const projects = [
  {
    title: "MarketMind AI",
    tagline:
      "Full-stack AI-powered stock market analysis platform with RSI, SMA20 & SMA50 indicators driving Buy / Sell / Hold predictions for Indian and global stocks.",
    year: "2024",
    image: projectMarketMind,
    stack: ["HTML", "CSS", "JavaScript", "Python"],
  },
];

const stack = [
  { label: "LANGUAGES", items: ["Python", "Java", "JavaScript", "HTML5", "CSS3"] },
  { label: "FRAMEWORKS", items: ["React.js", "Angular", "Node.js", "Express"] },
  { label: "DATABASES", items: ["MongoDB", "MySQL"] },
  { label: "LIBRARIES", items: ["NumPy", "Pandas", "Matplotlib"] },
  {
    label: "CONCEPTS",
    items: ["Data Structures", "OOP", "DBMS", "Operating Systems", "Networks"],
  },
  { label: "TOOLS", items: ["VS Code", "Git", "GitHub", "Adobe Premiere Pro"] },
];

const education = [
  {
    period: "2023 — 2027",
    role: "B.Tech — Computer Science Engineering / Parul University",
    body: "Vadodara, Gujarat. Coursework: DSA, OOP, Operating Systems, DBMS, Computer Networks, Software Engineering, Python. CGPA: 6.52.",
  },
  {
    period: "2021 — 2023",
    role: "Higher Secondary (Class XII) / Tezpur Science Academy",
    body: "Tezpur, Assam. PCM with Computer Science and Biology. Percentile: 62.2.",
  },
  {
    period: "2010 — 2021",
    role: "Secondary (Class X) / Sacred Heart High School",
    body: "Tezpur, Assam. Science, Mathematics and Computer Science track. Percentile: 74.33.",
  },
];

const certifications = [
  "AI Fundamentals — IBM",
  "Computer Network & Internet Protocol — SkillIndia",
  "Introduction to Cybersecurity",
];

function Portfolio() {
  const [resumeOpen, setResumeOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <LoadingScreen />
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
        <div className="scan-line absolute inset-x-0 h-24" />
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="font-mono text-sm tracking-tighter">
            <span className="text-primary">./</span>SHUBHANKAR
          </div>
          <div className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-widest sm:flex">
            <a href="#projects" className="transition-colors hover:text-primary">Projects</a>
            <a href="#stack" className="transition-colors hover:text-primary">Stack</a>
            <a href="#education" className="transition-colors hover:text-primary">Education</a>
            <a href="#contact" className="transition-colors hover:text-primary">Contact</a>
            <button
              type="button"
              onClick={() => setResumeOpen(true)}
              className="cursor-pointer border border-primary/60 bg-primary/10 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Resume ↗
            </button>
          </div>
        </div>
      </nav>

      {/* Resume Preview Modal */}
      <Dialog open={resumeOpen} onOpenChange={setResumeOpen}>
        <DialogContent className="flex max-h-[95vh] w-[95vw] max-w-4xl flex-col gap-0 border-border bg-background p-0 sm:max-w-4xl">
          <DialogHeader className="flex flex-row items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-6 sm:py-4">
            <div className="min-w-0 flex-1">
              <DialogTitle className="truncate font-display text-base uppercase tracking-tight sm:text-2xl">
                Resume_Preview
              </DialogTitle>
              <DialogDescription className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground sm:block">
                Shubhankar Debnath · CV / 2026
              </DialogDescription>
            </div>
            <a
              href="/Shubhankar_Debnath_Resume.pdf"
              download
              className="mr-6 shrink-0 border border-primary/60 bg-primary/10 px-2 py-1.5 font-mono text-[10px] uppercase tracking-widest text-primary transition-colors hover:bg-primary hover:text-primary-foreground sm:mr-8 sm:px-3 sm:py-2"
            >
              <span className="hidden sm:inline">Download ↓</span>
              <span className="sm:hidden">↓ PDF</span>
            </a>
          </DialogHeader>
          <div className="h-[70vh] min-h-0 w-full flex-1 bg-surface sm:h-[75vh]">
            <iframe
              src="/Shubhankar_Debnath_Resume.pdf#view=FitH"
              title="Shubhankar Debnath Resume"
              className="h-full w-full"
            />
          </div>
        </DialogContent>
      </Dialog>

      <main className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <section className="flex min-h-[80vh] flex-col justify-center py-20">
          <div
            className="mb-4 font-mono text-xs text-primary"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "100ms" }}
          >
            (01) // FRONT-END DEVELOPER · CSE STUDENT
          </div>
          <h1
            className="text-balance font-display uppercase leading-[0.85]"
            style={{
              fontSize: "clamp(3.5rem, 11vw, 9rem)",
              animation: "var(--animate-reveal-up)",
              animationDelay: "200ms",
            }}
          >
            Shubhankar
            <br />
            Debnath
          </h1>
          <div
            className="mt-8 flex flex-col justify-between gap-8 md:flex-row md:items-end"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "300ms" }}
          >
            <p className="max-w-xl text-pretty text-lg font-light text-muted-foreground">
              Passionate Computer Science Engineering student building modern, interactive, and
              scalable web interfaces with React.js — backed by a strong foundation in DSA, OOP,
              DBMS, OS and Networks.
            </p>
            <div className="flex items-center gap-4">
              <div className="size-3 animate-pulse rounded-full bg-primary" />
              <span className="font-mono text-[10px] uppercase tracking-widest">
                Open to internships/Jobs
              </span>
            </div>
          </div>

          <div
            className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-8 font-mono text-[11px] uppercase tracking-widest text-muted-foreground sm:grid-cols-4"
            style={{ animation: "var(--animate-reveal-up)", animationDelay: "400ms" }}
          >
            <div>
              <div className="mb-1 text-primary">LOC</div>
              <div className="text-foreground">Tezpur, Assam · IN</div>
            </div>
            <div>
              <div className="mb-1 text-primary">EDU</div>
              <div className="text-foreground">B.Tech CSE · 2027</div>
            </div>
            <div>
              <div className="mb-1 text-primary">FOCUS</div>
              <div className="text-foreground">Front-end / React</div>
            </div>
            <div>
              <div className="mb-1 text-primary">STATUS</div>
              <div className="text-foreground">Available</div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-32">
          <div className="mb-12 flex items-center justify-between">
            <h2 className="font-display text-5xl uppercase">Featured_Works</h2>
            <div
              className="mx-8 h-px flex-1 bg-border"
              style={{ animation: "var(--animate-line-grow)" }}
            />
            <span className="font-mono text-xs text-muted-foreground">
              [{projects.length} SELECTED]
            </span>
          </div>

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {projects.map((p) => (
              <article key={p.title} className="group cursor-pointer">
                <div className="relative aspect-video w-full overflow-hidden border border-border bg-surface transition-colors duration-500 group-hover:border-primary/50">
                  <img
                    src={p.image}
                    alt={p.title}
                    width={1280}
                    height={720}
                    loading="lazy"
                    className="h-full w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="mt-6 flex items-start justify-between gap-6">
                  <div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight">{p.title}</h3>
                    <p className="text-sm font-light text-muted-foreground">{p.tagline}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {p.stack.map((s) => (
                        <span
                          key={s}
                          className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest text-muted-foreground"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="border border-border px-2 py-1 font-mono text-[10px]">
                    {p.year}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Stack */}
        <section id="stack" className="border-t border-border py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="sticky top-24">
                <h2 className="mb-6 font-display text-5xl uppercase leading-none">Tech_Stack</h2>
                <p className="font-light text-muted-foreground">
                  The languages, frameworks and CS fundamentals I use to turn ideas into
                  interactive, scalable web experiences.
                </p>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 gap-y-16 sm:grid-cols-3">
                {stack.map((g) => (
                  <div key={g.label}>
                    <span className="mb-4 block font-mono text-[10px] text-primary">
                      {g.label}
                    </span>
                    <ul className="space-y-2 text-lg font-bold">
                      {g.items.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education */}
        <section id="education" className="border-t border-border py-32">
          <h2 className="mb-16 font-display text-5xl uppercase">Education</h2>
          <div className="flex flex-col">
            {education.map((e, idx) => (
              <div
                key={e.role}
                className={`flex flex-col gap-8 py-8 md:flex-row ${
                  idx > 0 ? "border-t border-border/50" : ""
                }`}
              >
                <span className="shrink-0 font-mono text-sm text-muted-foreground md:w-32">
                  {e.period}
                </span>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold tracking-tight">{e.role}</h3>
                  <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section className="border-t border-border py-32">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-display text-5xl uppercase leading-none">Certifications</h2>
            </div>
            <div className="lg:col-span-8">
              <ul className="divide-y divide-border/50">
                {certifications.map((c, i) => (
                  <li
                    key={c}
                    className="flex items-center justify-between gap-6 py-6 transition-colors hover:text-primary"
                  >
                    <span className="text-lg font-medium">{c}</span>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      0{i + 1}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <footer id="contact" className="pb-16 pt-32">
          <div className="border-t border-primary/30 pt-16">
            <div className="flex flex-col items-end justify-between gap-12 md:flex-row">
              <div>
                <h2 className="font-display text-7xl uppercase leading-none">Let's_Build</h2>
                <p className="mt-6 font-mono text-sm">
                  <a
                    href="mailto:shubhankardebnath12@gmail.com"
                    className="text-primary hover:underline"
                  >
                    shubhankardebnath12@gmail.com
                  </a>
                </p>
                <p className="mt-2 font-mono text-xs text-muted-foreground">+91 84869 07768</p>
              </div>
              <div className="flex gap-8 font-mono text-xs uppercase tracking-widest text-muted-foreground">
                <a href="https://github.com/shubhankardebnath12-blip" className="hover:text-primary">GitHub</a>
                <a href="https://www.linkedin.com/in/shubhankar-debnath-470143295?utm_source=share_via&utm_content=profile&utm_medium=member_ios" className="hover:text-primary">LinkedIn</a>
                <a href="https://leetcode.com/u/Shubhankar__94/" className="hover:text-primary">LeetCode</a>
              </div>
            </div>
            <div className="mt-24 flex flex-col justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground sm:flex-row">
              <span>&copy; 2026 SHUBHANKAR_DEBNATH</span>
              <span>TEZPUR · ASSAM · IN</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
