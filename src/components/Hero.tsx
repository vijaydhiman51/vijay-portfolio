import { ArrowRight, Dot } from "lucide-react";

const skills: string[] = [
  ".NET 8",
  "C#",
  "SQL Server",
  "Kafka",
  "React",
  "Entity Framework",
  "Microservices",
];

const Hero = () => {
  return (
    <div id="home" className="bg-[#f7f7f3] dark:bg-[#1f1f1c]">
      <section className="border-t border-neutral-200 px-[5.5vw] dark:border-neutral-700">
        <div className="mx-auto grid min-h-screen max-w-[1260px] grid-cols-1 items-center gap-12 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 lg:py-16">
          {/* LEFT SIDE */}
          <div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              <span className="h-2 w-2 rounded-full bg-neutral-900 dark:bg-white" />
              Senior .NET / Full Stack Engineer
            </div>

            <h1 className="mt-5 max-w-[900px] text-5xl font-medium leading-[0.88] tracking-[-0.07em] text-neutral-950 md:text-7xl xl:text-8xl dark:text-[#f7f7f3]">
              I build systems
              <br />
              that work in
              <br />
              the real world.
            </h1>

            <div className="mt-5 flex max-w-xl flex-wrap items-center gap-x-2 gap-y-1 text-[14px] leading-7 text-neutral-500 dark:text-neutral-300">
              <span>Modernization</span>

              <Dot size={18} className="text-neutral-400" />

              <span>Performance</span>

              <Dot size={18} className="text-neutral-400" />

              <span>Enterprise applications</span>
            </div>

            {/* ACTIONS */}
            <div className="mt-5 flex gap-2.5">
              <a
                href="#work"
                className="flex items-center rounded-lg border border-neutral-950 bg-neutral-950 px-[18px] py-[13px] text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-neutral-800 dark:border-white dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
              >
                Explore my work
                <ArrowRight size={15} className="ml-1.5" />
              </a>

              <a
                href="#thinking"
                className="flex items-center rounded-lg border border-neutral-200 bg-white px-[18px] py-[13px] text-sm text-neutral-700 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-400 dark:border-neutral-700 dark:bg-[#1f1f1c] dark:text-neutral-200 dark:hover:border-neutral-500"
              >
                How I think
                <ArrowRight size={15} className="ml-1.5" />
              </a>
            </div>

            {/* STATS */}
            <div className="mt-7 grid grid-cols-2 gap-y-5 border-t border-neutral-200 pt-5 text-[11px] text-neutral-500 md:grid-cols-4 md:gap-x-5 dark:border-neutral-700 dark:text-neutral-400">
              <div>
                <strong className="block text-[20px] font-medium tracking-[-0.04em] text-neutral-950 dark:text-[#f7f7f3]">
                  6+
                </strong>
                <span>Years Experience</span>
              </div>

              <div>
                <strong className="block text-[20px] font-medium tracking-[-0.04em] text-neutral-950 dark:text-[#f7f7f3]">
                  10+
                </strong>
                <span>Enterprise Modules</span>
              </div>

              <div>
                <strong className="flex items-center text-[20px] font-medium tracking-[-0.04em] text-neutral-950 dark:text-[#f7f7f3]">
                  15
                  <ArrowRight size={15} className="mx-1" />
                  &lt;2 min
                </strong>
                <span>Query Optimization</span>
              </div>

              <div>
                <strong className="block text-[20px] font-medium tracking-[-0.04em] text-neutral-950 dark:text-[#f7f7f3]">
                  100%
                </strong>
                <span>Problem Solving Focus</span>
              </div>
            </div>

            {/* STACK */}
            <div className="mt-5 flex gap-x-4 overflow-x-auto border-t border-neutral-200 pt-4 text-[11px] text-neutral-500 dark:border-neutral-700 dark:text-neutral-400">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="flex shrink-0 items-center gap-1.5"
                >
                  <Dot size={14} className="text-neutral-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative min-h-[500px] overflow-hidden rounded-xl border border-neutral-200 bg-gradient-to-br from-[#eeeeea] to-[#d9d9d3] dark:border-neutral-700 dark:from-[#242422] dark:to-[#30302d]">
            {/* Portrait */}
            <img
              src="/images/hero-portrait.png"
              alt="VJ"
              className="pointer-events-none absolute left-1/2 top-1/2 z-[2] h-[115%] w-auto max-w-none -translate-x-1/2 -translate-y-1/2 rotate-y-180 object-contain p-10 opacity-90"
            />

            {/* Orbit */}
            <div className="absolute left-[14%] top-[12%] z-[1] aspect-square w-[72%] rounded-full border border-neutral-400/60">
              <div className="absolute inset-[11%] rounded-full border border-dashed border-neutral-400/50" />

              <span className="absolute right-[-5px] top-1/2 h-2.5 w-2.5 rounded-full bg-neutral-900 shadow-[0_0_0_7px_rgba(17,18,20,0.08)] dark:bg-white dark:shadow-[0_0_0_7px_rgba(255,255,255,0.08)]" />
            </div>

            {/* 6+ YEARS */}
            <div className="absolute bottom-[40%] left-[7%] z-[4] border border-neutral-200 bg-white/95 px-3 py-2 text-[9px] uppercase tracking-[0.08em] text-neutral-500 shadow-sm dark:border-neutral-700 dark:bg-[#252523]/95">
              <strong className="text-[13px] normal-case tracking-normal text-neutral-950 dark:text-white">
                6+ years
              </strong>
              <br />
              enterprise engineering
            </div>

            {/* KAFKA */}
            <div className="absolute right-[6%] top-[22%] z-[4] border border-neutral-200 bg-white/95 px-3 py-2 text-[9px] uppercase tracking-[0.08em] text-neutral-500 shadow-sm dark:border-neutral-700 dark:bg-[#252523]/95">
              <strong className="mb-0.5 flex text-[13px] normal-case tracking-normal text-neutral-950 dark:text-white">
                Kafka
              </strong>{" "}
              Event-driven systems
            </div>

            {/* .NET Services */}
            <div className="absolute bottom-[9%] right-[9%] z-[4] border border-neutral-200 bg-white/95 px-3 py-2 text-[9px] uppercase tracking-[0.08em] text-neutral-500 shadow-sm dark:border-neutral-700 dark:bg-[#252523]/95">
              <strong className="text-[13px] normal-case tracking-normal text-neutral-950 dark:text-white">
                .NET Services
              </strong>
              <br />
              Application modernization
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
