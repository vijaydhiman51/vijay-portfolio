import { useEffect, useRef, useState } from "react";
import { ArrowRight, Check, ChevronRight, X } from "lucide-react";
import { projects, type Project, type ArchitectureNode } from "./data/work";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeTab, setActiveTab] = useState("Overview");
  const [selectedArchitectureNode, setSelectedArchitectureNode] =
    useState<ArchitectureNode | null>(null);
  const [performanceStep, setPerformanceStep] = useState(0);

  const caseStudyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!selectedProject) return;

    const timeout = window.setTimeout(() => {
      caseStudyRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 50);

    return () => window.clearTimeout(timeout);
  }, [selectedProject]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setActiveTab(project.tabs?.[0] ?? "Overview");
    setSelectedArchitectureNode(project.architectureNodes?.[0] ?? null);
    setPerformanceStep(0);
  };

  const closeProject = () => {
    setSelectedProject(null);
    setSelectedArchitectureNode(null);
    setPerformanceStep(0);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    if (tab === "Architecture") {
      setSelectedArchitectureNode(
        selectedProject?.architectureNodes?.[0] ?? null,
      );
    }

    if (tab === "Impact") {
      setPerformanceStep(0);
    }
  };

  const performance = selectedProject?.performance;
  const currentPerformanceStep = performance?.steps[performanceStep];

  return (
    <div id="work" className="bg-[#f7f7f3] dark:bg-[#1f1f1c]">

      {/* Work Introduction */}
      <section className="border-t border-neutral-200 px-[5.5vw] pb-16 pt-24 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              02 / SELECTED WORK
            </p>

            <h2 className="mt-5 max-w-[900px] text-6xl font-medium leading-[0.88] tracking-[-0.07em] text-neutral-950 md:text-8xl dark:text-[#f7f7f3]">
              Real systems.
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">
                Real impact.
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[15px] leading-7 text-neutral-500 dark:text-neutral-300">
              Enterprise applications in Energy & Utilities where reliability,
              performance and operational clarity matter.
            </p>
          </div>
        </div>
      </section>

      {/* Project Index */}
      <section
        id="work-projects"
        className="border-t border-neutral-200 px-[5.5vw] py-16 dark:border-neutral-700"
      >
        <div className="mx-auto max-w-[1160px]">
          <div className="mb-9 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
                PROJECT INDEX
              </p>

              <h2 className="mt-4 text-5xl font-medium leading-[0.94] tracking-[-0.06em] text-neutral-950 md:text-6xl dark:text-[#f7f7f3]">
                Systems I've
                <br />
                <span className="text-neutral-400 dark:text-neutral-500">
                  worked on.
                </span>
              </h2>
            </div>

            <p className="max-w-[430px] text-sm leading-7 text-neutral-500 dark:text-neutral-300">
              Click a project to inspect the architecture, engineering
              decisions, technologies, challenges and measurable impact.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.number}
                onClick={() => openProject(project)}
                className={`group relative flex min-h-[285px] cursor-pointer flex-col justify-between overflow-hidden rounded-xl border border-neutral-200 bg-white p-7 transition-all duration-500 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-[0_18px_50px_rgba(18,20,24,0.06)] dark:border-neutral-700 dark:bg-[#252525] dark:hover:border-neutral-500 ${index === 0 ? "md:col-span-2 md:min-h-[270px]" : ""}`}
              >
                <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-neutral-500/[0.025] blur-3xl transition-all duration-500 group-hover:bg-neutral-500/[0.05]" />

                <div className="relative flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
                    {project.number}
                  </span>

                  <span className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-[9px] uppercase tracking-[0.12em] text-neutral-500 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-400">
                    {project.category}
                  </span>
                </div>

                <div className="relative mt-7">
                  <h3 className="max-w-[650px] text-3xl font-medium tracking-[-0.045em] text-neutral-950 transition-transform duration-500 group-hover:translate-x-1 md:text-4xl dark:text-[#f7f7f3]">
                    {project.name}
                  </h3>

                  <p className="mt-3 max-w-[650px] text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                    {project.overview}
                  </p>
                </div>

                <div className="relative mt-7 flex items-center justify-between">
                  <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-400 transition-colors duration-300 group-hover:text-neutral-800 dark:text-neutral-500 dark:group-hover:text-neutral-200">
                    Explore case study
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-neutral-500 group-hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:group-hover:border-neutral-400 dark:group-hover:text-white">
                    <ArrowRight
                      size={16}
                      style={{ transform: "rotate(-45deg)" }}
                    />
                  </span>
                </div>

                <span className="pointer-events-none absolute -bottom-8 -right-2 select-none text-[150px] font-bold leading-none tracking-[-0.1em] text-neutral-950/[0.025] transition-all duration-700 group-hover:-translate-y-2 group-hover:text-neutral-950/[0.045] dark:text-white/[0.02] dark:group-hover:text-white/[0.04]">
                  {project.number}
                </span>
              </article>
            ))}
          </div>

          {/* Case Study */}
          {selectedProject && (
            <div
              ref={caseStudyRef}
              className="mt-5 scroll-mt-20 overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-[#1f1f25]"
            >
              {/* Case Study Header */}
              <div className="border-b border-neutral-200 p-6 md:p-8 dark:border-neutral-700">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-neutral-500 dark:text-neutral-400">
                      PROJECT {selectedProject.number}
                    </p>

                    <h3 className="mt-3 text-4xl font-medium tracking-[-0.055em] text-neutral-950 md:text-5xl dark:text-[#f7f7f3]">
                      {selectedProject.name}
                    </h3>

                    <p className="mt-3 max-w-[750px] text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                      {selectedProject.studyHeader}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={closeProject}
                    aria-label="Close case study"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-neutral-200 text-neutral-500 transition-all duration-200 hover:border-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:hover:border-neutral-500 dark:hover:bg-neutral-800 dark:hover:text-white"
                  >
                    <X size={15} />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex flex-col gap-1 border-b border-neutral-200 px-5 py-2 md:flex-row md:px-8 dark:border-neutral-700">
                {selectedProject.tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleTabChange(tab)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-[10px] uppercase tracking-[0.11em] transition-all duration-200 ${activeTab === tab ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : "text-neutral-400 hover:bg-neutral-100 hover:text-neutral-800 dark:hover:bg-neutral-800 dark:hover:text-neutral-200"}`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Case Study Content */}
              <div className="p-6 md:px-8 md:py-7">

                {/* Overview */}
                {activeTab === "Overview" && (
                  <div className="grid gap-8 md:grid-cols-[1fr_0.65fr]">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                        Overview
                      </p>

                      <h4 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                        What the system does
                      </h4>

                      <p className="mt-4 max-w-[700px] text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                        {selectedProject.studyOverview}
                      </p>
                    </div>

                    <div className="border-l border-neutral-200 pl-6 dark:border-neutral-700">
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                        Domain
                      </p>

                      <p className="mt-2 text-sm text-neutral-950 dark:text-[#f7f7f3]">
                        {selectedProject.category}
                      </p>

                      <div className="mt-5 h-px bg-neutral-200 dark:bg-neutral-700" />

                      <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                        Engineering focus
                      </p>

                      <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-300">
                        Reliability · Maintainability · Performance
                      </p>
                    </div>
                  </div>
                )}

                {/* Architecture */}
                {activeTab === "Architecture" &&
                  selectedProject.architectureNodes && (
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                        Architecture
                      </p>

                      <h4 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                        Explore the system
                      </h4>

                      <p className="mt-2 max-w-[750px] text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                        {selectedProject.architecture}
                      </p>

                      <div className="mt-6 grid gap-3 md:grid-cols-5">
                        {selectedProject.architectureNodes.map(
                          (node, index) => (
                            <div
                              key={node.name}
                              className="flex items-center gap-2"
                            >
                              <button
                                type="button"
                                onClick={() =>
                                  setSelectedArchitectureNode(node)
                                }
                                className={`min-h-[84px] flex-1 rounded-lg border px-4 py-4 text-center text-sm transition-all duration-300 hover:-translate-y-0.5 ${selectedArchitectureNode?.name === node.name ? "border-neutral-500 bg-neutral-100 text-neutral-950 shadow-[0_8px_24px_rgba(18,20,24,0.06)] dark:border-neutral-500 dark:bg-neutral-800 dark:text-white" : "border-neutral-200 bg-neutral-50 text-neutral-900 hover:border-neutral-400 hover:bg-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 dark:text-white dark:hover:border-neutral-500 dark:hover:bg-neutral-700"}`}
                              >
                                {node.name}
                              </button>

                              {selectedProject.architectureNodes &&
                                index <
                                  selectedProject.architectureNodes.length -
                                    1 && (
                                  <ChevronRight
                                    size={15}
                                    className="hidden shrink-0 text-neutral-300 md:block dark:text-neutral-600"
                                  />
                                )}
                            </div>
                          ),
                        )}
                      </div>

                      {selectedArchitectureNode && (
                        <div className="mt-6 grid gap-7 border-t border-neutral-200 pt-6 md:grid-cols-[0.8fr_1.2fr] dark:border-neutral-700">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                              Selected component
                            </p>

                            <h4 className="mt-3 text-2xl font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                              {selectedArchitectureNode.name}
                            </h4>

                            <p className="mt-2 text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                              {selectedArchitectureNode.description}
                            </p>
                          </div>

                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-400">
                              Responsibilities
                            </p>

                            <div className="mt-3 grid gap-2 sm:grid-cols-2">
                              {selectedArchitectureNode.details.map(
                                (detail) => (
                                  <div
                                    key={detail}
                                    className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-sm text-neutral-600 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300"
                                  >
                                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neutral-200 text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
                                      <Check size={11} />
                                    </span>

                                    {detail}
                                  </div>
                                ),
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                {/* My Role */}
                {activeTab === "My Role" && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                      My Role
                    </p>

                    <h4 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                      Engineering contribution
                    </h4>

                    <p className="mt-4 max-w-[750px] text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                      {selectedProject.role}
                    </p>
                  </div>
                )}

                {/* Technologies */}
                {activeTab === "Technologies" && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                      Technologies
                    </p>

                    <h4 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                      Tools used in the system
                    </h4>

                    <div className="mt-4 flex max-w-[850px] flex-wrap gap-2">
                      {selectedProject.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-neutral-200 bg-neutral-50 px-4 py-2.5 text-xs text-neutral-600 transition-colors hover:border-neutral-400 hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:bg-neutral-700 dark:hover:text-white"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Challenges */}
                {activeTab === "Challenges" && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                      Engineering Challenges
                    </p>

                    <h4 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                      Problems worth solving
                    </h4>

                    <div className="mt-4 max-w-[850px]">
                      {selectedProject.challenges.map((challenge, index) => (
                        <div
                          key={challenge}
                          className="flex gap-5 border-b border-neutral-200 py-4 first:pt-0 last:border-b-0 dark:border-neutral-700"
                        >
                          <span className="pt-1 font-mono text-xs text-neutral-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <p className="text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                            {challenge}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact */}
                {activeTab === "Impact" && (
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500 dark:text-neutral-400">
                      Impact
                    </p>

                    <h4 className="mt-2 text-2xl font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                      {performance
                        ? "Performance transformation"
                        : "Engineering impact"}
                    </h4>

                    {performance && currentPerformanceStep ? (
                      <div className="mt-5">
                        <p className="max-w-[750px] text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                          {selectedProject.impact}
                        </p>

                        <div className="mt-6 rounded-xl border border-neutral-200 bg-neutral-50 p-5 md:p-6 dark:border-neutral-700 dark:bg-neutral-800/50">
                          <div className="flex items-end justify-between gap-4">
                            <div>
                              <p className="text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                                Execution time
                              </p>

                              <p className="mt-2 text-5xl font-medium tracking-[-0.06em] text-neutral-950 dark:text-[#f7f7f3]">
                                {currentPerformanceStep.time}:00
                              </p>
                            </div>

                            <span className="text-xs uppercase tracking-[0.12em] text-neutral-400">
                              Step {performanceStep + 1}/
                              {performance.steps.length}
                            </span>
                          </div>

                          <div className="mt-5 h-2 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-700">
                            <div
                              className="h-full rounded-full bg-neutral-700 transition-all duration-700 ease-out dark:bg-neutral-300"
                              style={{
                                width: `${Math.max((currentPerformanceStep.time / performance.before) * 100, 8)}%`,
                              }}
                            />
                          </div>

                          <div className="mt-5 border-l-2 border-neutral-500 pl-4 dark:border-neutral-400">
                            <p className="text-sm font-medium text-neutral-900 dark:text-neutral-200">
                              {currentPerformanceStep.label}
                            </p>

                            <p className="mt-2 text-sm leading-6 text-neutral-500 dark:text-neutral-300">
                              {currentPerformanceStep.description}
                            </p>
                          </div>

                          <div className="mt-6 flex flex-col md:flex-row flex-wrap gap-2">
                            {performance.steps.map((step, index) => (
                              <button
                                key={step.label}
                                type="button"
                                onClick={() => setPerformanceStep(index)}
                                className={`rounded-full border px-3 py-2 text-[11px] transition-all duration-200 ${performanceStep === index ? "border-neutral-500 bg-neutral-900 text-white dark:border-neutral-400 dark:bg-white dark:text-neutral-900" : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"}`}
                              >
                                {index + 1}. {step.label}
                              </button>
                            ))}
                          </div>

                          <button
                            type="button"
                            onClick={() =>
                              setPerformanceStep(performance.steps.length - 1)
                            }
                            className="mt-6 flex rounded-lg bg-neutral-950 px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 dark:bg-white dark:text-neutral-950 dark:hover:bg-neutral-200"
                          >
                            Run optimization <ArrowRight className="ml-2 size-4"/>
                          </button>

                          {performanceStep === performance.steps.length - 1 && (
                            <div className="mt-7 flex flex-col md:flex-row gap-2 border-t border-neutral-200 pt-7 sm:items-end dark:border-neutral-700">
                              <div>
                                <p className="text-4xl font-medium tracking-[-0.06em] text-neutral-950 dark:text-[#f7f7f3]">
                                  15 min
                                </p>
                                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                                  Before
                                </p>
                              </div>

                              <ArrowRight className="h-7 w-7 text-neutral-400 sm:block ml-10 md:ml-0 rotate-90 md:rotate-0 md:mb-7" />

                              <div>
                                <p className="text-4xl font-medium tracking-[-0.06em] text-neutral-700 dark:text-neutral-200">
                                  &lt;2 min
                                </p>
                                <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-neutral-400">
                                  Production result
                                </p>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ) : (
                      <div className="mt-4 max-w-[750px]">
                        <p className="text-sm leading-7 text-neutral-500 dark:text-neutral-300">
                          {selectedProject.impact}
                        </p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Work;
