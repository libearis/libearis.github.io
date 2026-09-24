// Content for the "Professional experience" slider. Keep it in sync with the CV PDF.
export const slides = [
  {
    key: "architecture",
    label: "Architecture",
    title: "I pick the structure that fits the problem",
    intro:
      "I've built and maintained systems across the whole spectrum, so I can tell when a split pays off and when it just adds overhead.",
    items: [
      {
        icon: "network",
        title: "Microservices",
        body: "Distributed .NET services behind a YARP API gateway that handles request routing and service abstraction.",
      },
      {
        icon: "box",
        title: "Modular monolith",
        body: "One deployable with strict module boundaries and per-module schemas, the core idea behind Gentongku and TaskFlow.",
      },
      {
        icon: "layers",
        title: "Clean Architecture",
        body: "Domain, application and infrastructure layers kept separate so business rules stay testable and framework-free.",
      },
      {
        icon: "columns",
        title: "Monolith and MVC",
        body: "Classic layered and MVC apps, which are still the right call for many straightforward products.",
      },
    ],
  },
  {
    key: "building-blocks",
    label: "Building blocks",
    title: "The pieces around the core app",
    intro: "Each tool is there for a reason. This is what I've used each one for in production work.",
    items: [
      {
        icon: "message",
        title: "Message broker · RabbitMQ",
        body: "Asynchronous, event-driven communication between microservices, so services stay decoupled.",
      },
      {
        icon: "file-text",
        title: "Logging and auditing · Serilog, NLog",
        body: "Dual-sink logging: general events go to files, and sensitive audit trails go to the database for compliance.",
      },
      {
        icon: "clock",
        title: "Scheduler · Hangfire",
        body: "Background jobs for monthly reports, automated tasks and heavy file processing.",
      },
      {
        icon: "plug",
        title: "App integration · gRPC, REST",
        body: "Connecting one application with two different external apps, like Gentongku filing tickets into TaskFlow.",
      },
      {
        icon: "bolt",
        title: "Caching · Redis",
        body: "Takes load off the database and speeds up summaries and reports under heavy traffic.",
      },
      {
        icon: "database",
        title: "High-volume data · Go",
        body: "Tuned an app handling ~1M-row Excel uploads that grew to 513M+ records in one table within 3 months.",
      },
    ],
  },
  {
    key: "stack",
    label: "Tech stack",
    title: "Technologies I've used so far",
    intro: ".NET is my main expertise. The rest I've shipped with on real projects.",
    groups: [
      { name: "Languages", items: ["C#", "Go", "Java", "Python", "TypeScript", "Bash"] },
      { name: "Backend", items: ["ASP.NET Core", "Gin", "Spring Boot", "FastAPI", "NestJS"] },
      { name: "Frontend", items: ["Vue.js", "Angular", "React", "Pinia", "Signals"] },
      { name: "Data", items: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL", "Redis", "EF Core", "GORM", "SQLAlchemy"] },
      { name: "Messaging and jobs", items: ["RabbitMQ", "gRPC", "Hangfire", "Serilog", "NLog"] },
      { name: "Infra and tools", items: ["YARP (API gateway)", "Docker", "CI/CD", "Rancher", "GitHub", "GitLab", "SSH"] },
    ],
  },
];
