export const GITHUB_USER = "libearis";

// `pages: true` enables the "Live demo" option once GitHub Pages is on for that repo.
// `summary` supports <strong> for emphasis (trusted, hand-written content only).
export const projects = [
  {
    repo: "Gentongku",
    name: "Gentongku",
    branch: "main",
    pages: false,
    icon: "bag",
    accent: "var(--c-dotnet)",
    language: { name: "C#", color: "#178600" },
    tagline: "E-commerce as a testbed for a .NET modular monolith.",
    summary:
      "A storefront (buyer, seller, admin) that deliberately stays simple so its three showcase features have a real app to live in: a Clean Architecture <strong>modular monolith</strong> with per-module Postgres schemas, a live <strong>Benchmark</strong> tool that compares cache, index and query strategies, and a Hangfire <strong>Scheduler</strong> that generates dummy data on demand.",
    tags: [".NET 10", "Angular", "PostgreSQL", "Redis", "Hangfire", "Seq", "gRPC client"],
    badge: { text: "↔ Reports bugs to TaskFlow", linked: true },
  },
  {
    repo: "Taskflow",
    name: "TaskFlow",
    branch: "main",
    pages: false,
    icon: "board",
    accent: "var(--c-python)",
    language: { name: "Python", color: "#3572A5" },
    tagline: "A scaled-down Jira built around CQRS and the Outbox pattern.",
    summary:
      "Projects, tasks, a board and a workload dashboard. Writes go to <strong>PostgreSQL</strong>; reads come from a denormalized <strong>MongoDB</strong> view model that an <strong>Outbox</strong> worker keeps in sync, without a message broker. gRPC is used for exactly two jobs it suits: live board updates via server-streaming, and the external issue-intake API.",
    tags: ["FastAPI", "Vue 3", "Pinia", "PostgreSQL", "MongoDB", "gRPC-web", "Envoy"],
    badge: { text: "↔ Receives tickets via gRPC", linked: true },
  },
  {
    repo: "Attendance",
    name: "Attendance",
    branch: "main",
    pages: false,
    icon: "calendar",
    accent: "var(--c-ts)",
    language: { name: "TypeScript", color: "#3178c6" },
    tagline: "WFH attendance and employee monitoring for HR.",
    summary:
      "Two independent <strong>NestJS services</strong> (attendance and monitoring) and a React frontend. Employees check in and out with photo (EXIF) validation, and HRD admins get a dashboard for monitoring. The services never call each other: each <strong>owns its own database</strong> and reads the other's through a <strong>read-only connection</strong>, so check-in keeps working even if monitoring is down.",
    tags: ["NestJS", "React", "TypeORM", "MySQL 8", "JWT"],
    badge: { text: "Standalone", linked: false },
  },
];

export const stack = [
  ".NET", "Angular", "Python · FastAPI", "Vue 3", "NestJS", "React",
  "PostgreSQL", "MongoDB", "MySQL", "Redis", "gRPC", "Docker",
];
