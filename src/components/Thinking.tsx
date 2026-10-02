import { useState } from "react";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { scenarios, results, architecture } from "./data/Thinking";

const Thinking = () => {
  const [scenarioIndex, setScenarioIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [architectureIndex, setArchitectureIndex] = useState(2);

  const scenario = scenarios[scenarioIndex];
  const result = selectedOption ? results[selectedOption] : null;
  const selectedArchitecture = architecture[architectureIndex];

  const changeScenario = (index: number) => {
    setScenarioIndex(index);
    setSelectedOption(null);
  };

  return (
    <section id="thinking" className="border-t-2 border-gray-300 bg-[#f7f7f3] dark:border-neutral-700 dark:bg-[#1f1f1c]">
      {/* HERO */}
      <div className="mx-auto flex py-10 lg:py-15 w-[89%] max-w-[1160px] items-center">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-neutral-500 dark:text-neutral-400">
            04 / Engineering Mindset
          </p>

          <h2 className="mt-4 max-w-[850px] text-[clamp(48px,6.5vw,82px)] font-medium leading-[0.92] tracking-[-0.06em] text-neutral-950 dark:text-[#f7f7f3]">
            A look into
            <br />
            <span className="text-neutral-400 dark:text-neutral-500">
              how I think.
            </span>
          </h2>

          <p className="mt-5 max-w-[620px] text-[15px] leading-7 text-neutral-500 dark:text-neutral-300">
            Real scenarios. Real decisions. See how I approach problems before
            jumping to solutions.
          </p>
        </div>
      </div>

      {/* DECISION LAB */}
      <div className="border-t border-neutral-200 dark:border-neutral-700">
        <div className="mx-auto w-[89%] max-w-[1160px] py-10 lg:py-15">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-neutral-500 dark:text-neutral-400">
                Decision Lab
              </p>

              <h3 className="mt-3 text-[clamp(38px,5vw,64px)] font-medium leading-[0.92] tracking-[-0.06em] text-neutral-950 dark:text-[#f7f7f3]">
                How I approach
                <br />
                <span className="text-neutral-400 dark:text-neutral-500">
                  real problems.
                </span>
              </h3>
            </div>

            <p className="max-w-[400px] text-[14px] leading-6 text-neutral-500 dark:text-neutral-400">
              Pick a production scenario, make a decision, then inspect the
              reasoning path.
            </p>
          </div>

          {/* SCENARIO SELECTOR */}
          <div className="mb-4 flex flex-wrap gap-2">
            {scenarios.map((item, index) => (
              <button
                key={item.id}
                type="button"
                onClick={() => changeScenario(index)}
                className={`border px-3.5 py-2 text-[11px] font-medium transition-all duration-200 ${
                  scenarioIndex === index
                    ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-200 dark:bg-neutral-200 dark:text-neutral-900"
                    : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:bg-[#242422] dark:text-neutral-400 dark:hover:border-neutral-500 dark:hover:text-neutral-200"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* DECISION AREA */}
          <div className="overflow-hidden border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-[#242422]">
            <div className="grid lg:grid-cols-[1fr_0.9fr]">
              {/* QUESTION */}
              <div className="p-6 md:p-8 lg:p-10">
                <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-neutral-400">
                  {scenario.label}
                </p>

                <h4 className="mt-3 max-w-xl text-[clamp(25px,3vw,36px)] font-medium leading-[1.05] tracking-[-0.045em] text-neutral-950 dark:text-[#f7f7f3]">
                  {scenario.title}
                </h4>

                <p className="mt-4 max-w-xl text-[13px] leading-6 text-neutral-500 dark:text-neutral-400">
                  {scenario.description}
                </p>

                <div className="mt-7 space-y-2">
                  {scenario.options.map((option) => {
                    const isSelected = selectedOption === option.id;

                    return (
                      <button
                        key={option.id}
                        type="button"
                        onClick={() => setSelectedOption(option.id)}
                        className={`group flex w-full items-center gap-3 border p-3.5 text-left transition-all duration-200 ${
                          isSelected
                            ? "border-neutral-950 bg-[#f1f1ed] dark:border-neutral-200 dark:bg-[#30302d]"
                            : "border-neutral-200 bg-[#f7f7f3] hover:border-neutral-400 hover:bg-white dark:border-neutral-700 dark:bg-[#1f1f1c] dark:hover:border-neutral-500"
                        }`}
                      >
                        <span
                          className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold transition-colors ${
                            isSelected
                              ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-200 dark:bg-neutral-200 dark:text-neutral-900"
                              : "border-neutral-300 text-neutral-500 dark:border-neutral-600"
                          }`}
                        >
                          {isSelected ? <Check size={13} /> : option.label}
                        </span>

                        <span className="text-[13px] leading-5 text-neutral-800 dark:text-neutral-200">
                          {option.text}
                        </span>

                        <ChevronRight
                          size={15}
                          className="ml-auto shrink-0 text-neutral-300 transition-transform duration-200 group-hover:translate-x-1 dark:text-neutral-600"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* REASONING */}
              <div className="border-t border-neutral-200 p-6 dark:border-neutral-700 md:p-8 lg:border-l lg:border-t-0 lg:p-10">
                {!result ? (
                  <div className="flex min-h-[330px] items-center justify-center text-center">
                    <div className="hidden sm:block">
                      <div className="mx-auto mb-4 h-9 w-9 rounded-full border border-dashed border-neutral-300 dark:border-neutral-600" />

                      <p className="text-sm text-neutral-400">
                        Select a decision
                      </p>

                      <p className="mt-1 text-[11px] text-neutral-400">
                        The reasoning path will appear here.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-neutral-500 dark:text-neutral-400">
                      Reasoning Path
                    </p>

                    <h4 className="mt-3 text-[22px] font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                      {result.title}
                    </h4>

                    <div className="mt-5">
                      {result.steps.map((step, index) => (
                        <div
                          key={step}
                          className="flex gap-4 border-b border-neutral-100 py-3 dark:border-neutral-700"
                        >
                          <span className="w-5 shrink-0 pt-0.5 font-mono text-[10px] text-neutral-400">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-[13px] leading-5 text-neutral-600 dark:text-neutral-300">
                            {step}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 border-t border-neutral-100 pt-5 dark:border-neutral-700">
                      <p className="text-[13px] leading-6 text-neutral-500 dark:text-neutral-400">
                        {result.note}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ARCHITECTURE EXPLORER */}
      <div className="border-t border-neutral-200 dark:border-neutral-700">
        <div className="mx-auto w-[89%] max-w-[1160px] py-16 lg:py-20">
          <div className="mb-8 flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-neutral-500 dark:text-neutral-400">
                Architecture Explorer
              </p>

              <h3 className="mt-3 text-[clamp(38px,5vw,64px)] font-medium leading-[0.92] tracking-[-0.06em] text-neutral-950 dark:text-[#f7f7f3]">
                Trace the
                <br />
                <span className="text-neutral-400 dark:text-neutral-500">
                  system.
                </span>
              </h3>
            </div>

            <p className="max-w-[400px] text-[14px] leading-6 text-neutral-500 dark:text-neutral-400">
              Explore each boundary and see what matters there: contracts,
              failure modes, data, observability and maintainability.
            </p>
          </div>

          {/* ARCHITECTURE FLOW */}
          <div className="border border-neutral-200 bg-white p-5 dark:border-neutral-700 dark:bg-[#242422] md:p-7">
            <div className="grid gap-2 md:grid-cols-5">
              {architecture.map((item, index) => (
                <div key={item.id} className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setArchitectureIndex(index)}
                    className={`w-full border px-4 py-4 text-left transition-all duration-200 ${
                      architectureIndex === index
                        ? "border-neutral-950 bg-neutral-950 text-white dark:border-neutral-200 dark:bg-neutral-200 dark:text-neutral-900"
                        : "border-neutral-200 bg-[#f7f7f3] hover:border-neutral-400 dark:border-neutral-700 dark:bg-[#1f1f1c] dark:hover:border-neutral-500"
                    }`}
                  >
                    <div className="text-[13px] font-medium">
                      {item.title}
                    </div>

                    <div
                      className={`mt-1 font-mono text-[9px] uppercase ${
                        architectureIndex === index
                          ? "text-neutral-300 dark:text-neutral-600"
                          : "text-neutral-400"
                      }`}
                    >
                      {item.tech}
                    </div>
                  </button>

                  {index < architecture.length - 1 && (
                    <ArrowRight
                      size={14}
                      className="hidden shrink-0 text-neutral-300 md:block dark:text-neutral-600"
                    />
                  )}
                </div>
              ))}
            </div>

            {/* SELECTED LAYER */}
            <div className="mt-6 border-t border-neutral-200 pt-5 dark:border-neutral-700">
              <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-neutral-400">
                Selected Layer
              </p>

              <div className="mt-2 flex flex-col gap-1.5 md:flex-row md:items-baseline md:gap-4">
                <h4 className="text-[21px] font-medium tracking-[-0.035em] text-neutral-950 dark:text-[#f7f7f3]">
                  {selectedArchitecture.title}
                </h4>

                <span className="font-mono text-[9px] uppercase text-neutral-400">
                  {selectedArchitecture.tech}
                </span>
              </div>

              <p className="mt-3 max-w-3xl text-[13px] leading-6 text-neutral-500 dark:text-neutral-400">
                {selectedArchitecture.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Thinking;