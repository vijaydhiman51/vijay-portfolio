import { useState } from "react";
import {
  ArrowUpRight,
  Braces,
  Database,
  Layers3,
  MessageSquare,
  Server,
  Workflow,
} from "lucide-react";

const skillGroups = [
  {
    title: "Backend",
    icon: Server,
    skills: [
      {
        name: "C#",
        detail: "Primary backend language for enterprise application development.",
      },
      {
        name: ".NET 8",
        detail: "Modern .NET services and enterprise application development.",
      },
      {
        name: "ASP.NET Core",
        detail: "Web APIs, middleware, dependency injection and services.",
      },
      {
        name: "Web API",
        detail: "RESTful APIs supporting enterprise workflows and integrations.",
      },
      {
        name: "EF Core",
        detail: "ORM-based data access where appropriate.",
      },
      {
        name: "ADO.NET",
        detail: "Direct database access for database-intensive workloads.",
      },
      {
        name: "LINQ",
        detail: "Querying and transforming application data.",
      },
    ],
  },
  {
    title: "Data",
    icon: Database,
    skills: [
      {
        name: "SQL Server",
        detail: "Production database development and performance optimization.",
      },
      {
        name: "PostgreSQL",
        detail: "Enterprise application persistence and reporting.",
      },
      {
        name: "MongoDB",
        detail: "Document-oriented data storage.",
      },
      {
        name: "Stored Procedures",
        detail: "Database-centric business logic and reporting.",
      },
      {
        name: "Query Optimization",
        detail: "Execution plans, indexing and bottleneck investigation.",
      },
      {
        name: "JSON",
        detail: "API contracts and application data exchange.",
      },
    ],
  },
  {
    title: "Distributed Systems",
    icon: Workflow,
    skills: [
      {
        name: "Apache Kafka",
        detail: "Event-driven communication between application components.",
      },
      {
        name: "REST",
        detail: "Service-to-service and frontend-backend communication.",
      },
      {
        name: "Microservices",
        detail: "Service-oriented application boundaries and integration.",
      },
      {
        name: "Async Processing",
        detail: "Asynchronous workflows and background processing.",
      },
      {
        name: "Hangfire",
        detail: "Background and scheduled job processing.",
      },
    ],
  },
  {
    title: "Architecture",
    icon: Layers3,
    skills: [
      {
        name: "Dependency Injection",
        detail: "Loose coupling and maintainable application design.",
      },
      {
        name: "Application Modernization",
        detail: "Moving database-centric business logic into .NET services.",
      },
      {
        name: "System Design",
        detail: "Thinking about boundaries, dependencies and failure modes.",
      },
      {
        name: "Performance Optimization",
        detail: "Measure, investigate, optimize and validate.",
      },
    ],
  },
  {
    title: "Frontend",
    icon: Braces,
    skills: [
      {
        name: "JavaScript",
        detail: "Frontend scripting and enterprise application development.",
      },
      {
        name: "Sencha ExtJS",
        detail: "Production experience across enterprise applications.",
      },
      {
        name: "React",
        detail:
          "Beginner level — currently learning components, props, state, hooks and API integration.",
        learning: true,
      },
    ],
  },
  {
    title: "Engineering",
    icon: MessageSquare,
    skills: [
      {
        name: "Code Reviews",
        detail: "Reviewing implementation quality and maintainability.",
      },
      {
        name: "Technical Mentoring",
        detail: "Helping developers solve technical problems.",
      },
      {
        name: "Agile / SDLC",
        detail: "Planning, development and delivery across enterprise teams.",
      },
      {
        name: "Production Support",
        detail: "Investigating and resolving live-system issues.",
      },
    ],
  },
];

const Skills = () => {
  const [selected, setSelected] = useState("C#");

  const selectedSkill = skillGroups
    .flatMap((group) => group.skills)
    .find((skill) => skill.name === selected);

  return (
    <div id="skills" className="bg-[#f7f7f3] dark:bg-[#1f1f1c]">
      {/* INTRO */}
      <section className="border-t border-neutral-200 px-[5.5vw] py-16 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            05 / ENGINEERING SKILLS
          </p>

          <h2 className="mt-5 max-w-[900px] text-6xl font-medium leading-[0.88] tracking-[-0.07em] text-neutral-950 dark:text-[#f7f7f3] md:text-8xl">
            The tools
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">
              behind the work.
            </span>
          </h2>

          <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-neutral-500 dark:text-neutral-300">
            A practical engineering stack built around backend systems,
            enterprise applications, data, distributed workflows and
            performance.
          </p>
        </div>
      </section>

      {/* SKILL MATRIX */}
      <section className="border-t border-neutral-200 px-[5.5vw] py-16 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[1fr_300px]">
            <div className="grid gap-x-12 gap-y-12 sm:grid-cols-2">
              {skillGroups.map((group) => {
                const Icon = group.icon;

                return (
                  <div key={group.title}>
                    <div className="mb-5 flex items-center gap-3">
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                        className="text-neutral-400 dark:text-neutral-500"
                      />

                      <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                        {group.title}
                      </h3>
                    </div>

                    <div>
                      {group.skills.map((skill) => {
                        const active = selected === skill.name;

                        return (
                          <button
                            key={skill.name}
                            type="button"
                            onClick={() => setSelected(skill.name)}
                            className={`group flex w-full items-center justify-between border-b py-3 text-left transition-colors ${
                              active
                                ? "border-neutral-400 dark:border-neutral-500"
                                : "border-neutral-200 dark:border-neutral-700"
                            }`}
                          >
                            <span
                              className={`text-[14px] ${
                                active
                                  ? "text-neutral-950 dark:text-white"
                                  : "text-neutral-600 dark:text-neutral-300"
                              }`}
                            >
                              {skill.name}
                            </span>

                            <div className="flex items-center gap-2">
                              {skill.learning && (
                                <span className="text-[8px] uppercase tracking-[0.12em] text-neutral-400 dark:text-neutral-500">
                                  Learning
                                </span>
                              )}

                              <ArrowUpRight
                                size={13}
                                className={`transition-all ${
                                  active
                                    ? "text-neutral-500 dark:text-neutral-400"
                                    : "text-neutral-300 opacity-0 group-hover:translate-x-0.5 group-hover:opacity-100 dark:text-neutral-600"
                                }`}
                              />
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CONTEXT */}
            <div className="hidden md:block border-l border-neutral-200 pl-6 dark:border-neutral-700 lg:sticky lg:top-28 lg:self-start">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                SELECTED
              </p>

              <h3 className="mt-4 text-[25px] font-medium tracking-[-0.04em] text-neutral-950 dark:text-[#f7f7f3]">
                {selectedSkill?.name}
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-neutral-500 dark:text-neutral-300">
                {selectedSkill?.detail}
              </p>

              {selectedSkill?.learning && (
                <div className="mt-5 text-[9px] uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-500">
                  Currently building
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING PROFILE */}
      <section className="border-t border-neutral-200 px-[5.5vw] py-16 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                ENGINEERING PROFILE
              </p>

              <h2 className="mt-5 text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-neutral-950 dark:text-[#f7f7f3] md:text-6xl">
                Backend first.
                <br />
                <span className="text-neutral-400 dark:text-neutral-500">
                  Systems aware.
                </span>
              </h2>
            </div>

            <div className="border-t border-neutral-200 pt-6 dark:border-neutral-700">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-3 text-[13px] text-neutral-500 dark:text-neutral-400">
                <span className="text-neutral-900 dark:text-neutral-200">
                  C# / .NET
                </span>

                <span className="text-neutral-300 dark:text-neutral-600">
                  →
                </span>

                <span>ASP.NET Core</span>

                <span className="text-neutral-300 dark:text-neutral-600">
                  →
                </span>

                <span>REST / Kafka</span>

                <span className="text-neutral-300 dark:text-neutral-600">
                  →
                </span>

                <span>SQL / Data</span>

                <span className="text-neutral-300 dark:text-neutral-600">
                  →
                </span>

                <span className="text-neutral-900 dark:text-neutral-200">
                  Production
                </span>
              </div>

              <p className="mt-5 max-w-[620px] text-[13px] leading-6 text-neutral-500 dark:text-neutral-400">
                The common thread is understanding how application code,
                services, messaging, databases and production behavior
                interact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT DIRECTION */}
      <section className="border-t border-neutral-200 px-[5.5vw] py-12 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                CURRENT DIRECTION
              </p>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-[13px] text-neutral-500 dark:text-neutral-400">
                <span className="text-neutral-700 dark:text-neutral-200">
                  React
                </span>

                <span className="text-neutral-300 dark:text-neutral-600">
                  /
                </span>

                <span>Azure</span>

                <span className="text-neutral-300 dark:text-neutral-600">
                  /
                </span>

                <span>AI Engineering</span>
              </div>
            </div>

            <span className="text-[9px] uppercase tracking-[0.15em] text-neutral-400 dark:text-neutral-600">
              Continuous learning
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;