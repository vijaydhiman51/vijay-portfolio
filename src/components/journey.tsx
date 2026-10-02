import { ArrowRight } from "lucide-react";
import { useState } from "react";

type JourneyItem = {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
};

const journey: JourneyItem[] = [
  {
    period: "2025 — 2026",
    role: "Technical Lead – Development",
    company: "OATI",
    description:
      "Leading technical development for enterprise Energy & Utilities applications, with a focus on backend engineering, modernization and scalable application design.",
    highlights: [
      "Led development of the Dispatch & Scheduling Manager within webDistribute.",
      "Worked on modernization of database-centric business logic into scalable .NET services.",
      "Designed and developed RESTful APIs and backend services.",
      "Worked on SQL Server performance optimization and technical problem solving.",
    ],
  },
  {
    period: "2023 — 2025",
    role: "Senior Software Developer II",
    company: "OATI",
    description:
      "Worked across enterprise applications involving outage management, energy markets, backend services, reporting and event-driven processing.",
    highlights: [
      "Developed functionality for webSmartOMS.",
      "Implemented Kafka-based communication between UI and Processor applications.",
      "Worked on webSmartMarket modules including Daily Bid Blotter and Transactions Display.",
      "Contributed to backend, database and reporting functionality.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Senior Software Developer I",
    company: "OATI",
    description:
      "Expanded responsibility across enterprise application development, backend services, database functionality and production support.",
    highlights: [
      "Developed and maintained enterprise application modules.",
      "Worked across .NET, SQL Server and frontend functionality.",
      "Handled production issues and customer-driven enhancements.",
      "Contributed to application performance and reliability improvements.",
    ],
  },
  {
    period: "2021 — 2022",
    role: "Software Developer",
    company: "OATI",
    description:
      "Built enterprise application functionality across backend, database and frontend layers while developing deeper domain knowledge in Energy & Utilities.",
    highlights: [
      "Developed application features using C# and .NET.",
      "Worked with SQL Server and stored procedures.",
      "Built REST/API functionality and application workflows.",
      "Worked across existing enterprise applications and modules.",
    ],
  },
  {
    period: "2020 — 2021",
    role: "Associate Software Developer",
    company: "OATI",
    description:
      "Moved into full-time software development and began working on enterprise applications supporting utility operations.",
    highlights: [
      "Developed features using C# and .NET.",
      "Worked with SQL Server and application databases.",
      "Contributed to frontend and backend functionality.",
      "Built experience with enterprise development workflows.",
    ],
  },
  {
    period: "Jan — Jul 2020",
    role: "Software Trainee",
    company: "OATI",
    description:
      "Started my software engineering career, learning enterprise development practices and working with the technologies used across the product ecosystem.",
    highlights: [
      "Built foundational knowledge of C# and .NET.",
      "Worked with SQL Server and enterprise application development.",
      "Learned development, debugging and testing workflows.",
      "Started building domain knowledge in Energy & Utilities.",
    ],
  },
];

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleRole = (index: number) => {
    setActiveIndex((current) => (current === index ? null : index));
  };

  return (
    <div id="journey" className="bg-[#f7f7f3] dark:bg-[#1f1f1c]">
      <section className="border-t border-neutral-200 px-[5.5vw] py-16 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          {/* SECTION INTRO */}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              03 / CAREER JOURNEY
            </p>

            <h2 className="mt-5 max-w-[900px] text-6xl font-medium leading-[0.88] tracking-[-0.07em] text-neutral-950 md:text-8xl dark:text-[#f7f7f3]">
              Growth through
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">
                experience.
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-neutral-500 dark:text-neutral-300">
              From writing my first lines of code to leading technical
              initiatives across enterprise Energy & Utilities applications.
            </p>
          </div>

          {/* CAREER TIMELINE */}
          <div className="relative mt-14">
            {/* Timeline line */}
            <div className="absolute bottom-0 left-[7px] top-0 w-px bg-neutral-200 md:left-[118px] dark:bg-neutral-700" />

            <div>
              {journey.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <div key={`${item.period}-${item.role}`} className="relative">
                    <div className="grid grid-cols-1 gap-4 pb-5 pl-9 md:grid-cols-[95px_1fr_40px] md:gap-7 md:pl-0">
                      {/* PERIOD */}
                      <div className="pt-1 text-[11px] text-neutral-400 md:text-right dark:text-neutral-500">
                        {item.period}
                      </div>

                      {/* TIMELINE NODE */}
                      <span className={`absolute left-[2px] top-[4px] z-10 flex h-[12px] w-[12px] items-center justify-center rounded-full border-[3px] border-[#f7f7f3] transition-all duration-300 md:left-[112px] dark:border-[#1f1f1c] ${isActive ? "bg-neutral-950 ring-4 ring-neutral-200 dark:bg-white dark:ring-neutral-700" : "bg-neutral-300 dark:bg-neutral-600"}`} />

                      {/* ROLE */}
                      <button
                        type="button"
                        onClick={() => toggleRole(index)}
                        className="w-full text-left"
                      >
                        <div className="flex items-start justify-between gap-5">
                          <div>
                            <h3 className={`text-[18px] font-medium tracking-[-0.03em] transition-colors duration-200 md:text-[21px] ${isActive ? "text-neutral-950 dark:text-white" : "text-neutral-700 dark:text-neutral-300"}`}>
                              {item.role}
                            </h3>

                            <span className="mt-1 block text-[11px] text-neutral-400 md:text-[12px] dark:text-neutral-500">
                              {item.company}
                            </span>
                          </div>

                          {/* MOBILE ARROW */}
                          <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 md:hidden dark:border-neutral-700 ${isActive ? "rotate-90 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950" : "text-neutral-400"}`}>
                            <ArrowRight size={14} />
                          </span>
                        </div>

                        {/* EXPANDED CONTENT */}
                        <div className={`grid transition-all duration-300 ${isActive ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                          <div className="overflow-hidden">
                            <p className="max-w-[760px] text-[12px] leading-6 text-neutral-500 md:text-[13px] dark:text-neutral-400">
                              {item.description}
                            </p>

                            <div className="mt-4 grid max-w-[800px] grid-cols-1 gap-2 md:grid-cols-2">
                              {item.highlights.map((highlight) => (
                                <div
                                  key={highlight}
                                  className="border border-neutral-200 bg-white px-3 py-2 text-[11px] leading-5 text-neutral-500 dark:border-neutral-700 dark:bg-[#242423] dark:text-neutral-400"
                                >
                                  {highlight}
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </button>

                      {/* DESKTOP ARROW */}
                      <div className="hidden md:block">
                        <button
                          type="button"
                          onClick={() => toggleRole(index)}
                          aria-label={`Toggle ${item.role}`}
                          className={`flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 transition-all duration-300 dark:border-neutral-700 ${isActive ? "rotate-90 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950" : "bg-white text-neutral-400 hover:border-neutral-400 dark:bg-[#1f1f1c]"}`}
                        >
                          <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* PROGRESSION */}
          <div className="mt-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
            <span className="h-px w-10 bg-neutral-300 dark:bg-neutral-700" />
            <span>2020</span>
            <ArrowRight size={12} />
            <span>2026</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Journey;