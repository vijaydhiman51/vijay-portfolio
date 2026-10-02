import {
  ArrowUpRight,
  Mail,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-[#f7f7f3] dark:bg-[#1f1f1c]">
      {/* INTRO */}
      <section className="border-t border-neutral-200 px-[5.5vw] pb-24 pt-20 dark:border-neutral-700 lg:pb-32 lg:pt-28">
        <div className="mx-auto max-w-[1160px]">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
            06 / CONTACT
          </p>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_360px] lg:items-end">
            <h1 className="max-w-[900px] text-6xl font-medium leading-[0.88] tracking-[-0.07em] text-neutral-950 dark:text-[#f7f7f3] md:text-8xl">
              Let's build
              <br />
              <span className="text-neutral-400 dark:text-neutral-500">
                something useful.
              </span>
            </h1>

            <p className="max-w-[360px] text-[14px] leading-7 text-neutral-500 dark:text-neutral-300">
              Open to senior .NET and full-stack engineering opportunities,
              backend-heavy products, application modernization and technically
              challenging systems.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="border-t border-neutral-200 px-[5.5vw] py-16 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-x-16 gap-y-12 md:grid-cols-3">
            {/* EMAIL */}
            <a
              href="mailto:vijaydhiman51@gmail.com"
              className="group border-b border-neutral-200 pb-5 dark:border-neutral-700"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Mail
                    size={16}
                    strokeWidth={1.5}
                    className="text-neutral-400 dark:text-neutral-500"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                    Email
                  </span>
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-neutral-500"
                />
              </div>

              <div className="text-[14px] text-neutral-700 transition-colors group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-white">
                vijaydhiman51@gmail.com
              </div>
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/vijaydhiman51/"
              target="_blank"
              rel="noreferrer"
              className="group border-b border-neutral-200 pb-5 dark:border-neutral-700"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img src="/images/linkedin-square-icon.svg" className="h-5 invert bg-none" alt="ln" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                    LinkedIn
                  </span>
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-neutral-500"
                />
              </div>

              <div className="text-[14px] text-neutral-700 transition-colors group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-white">
                linkedin.com/in/vijaydhiman51
              </div>
            </a>

            {/* PHONE */}
            <a
              href="tel:+919896241974"
              className="group border-b border-neutral-200 pb-5 dark:border-neutral-700"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Phone
                    size={16}
                    strokeWidth={1.5}
                    className="text-neutral-400 dark:text-neutral-500"
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                    Phone
                  </span>
                </div>

                <ArrowUpRight
                  size={15}
                  className="text-neutral-400 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 dark:text-neutral-500"
                />
              </div>

              <div className="text-[14px] text-neutral-700 transition-colors group-hover:text-neutral-950 dark:text-neutral-300 dark:group-hover:text-white">
                +91 98962 49174
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="border-t border-neutral-200 px-[5.5vw] py-20 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                WHAT I'M LOOKING FOR
              </p>

              <h2 className="mt-5 max-w-[600px] text-4xl font-medium leading-[0.95] tracking-[-0.055em] text-neutral-950 dark:text-[#f7f7f3] md:text-5xl">
                Problems worth
                <br />
                <span className="text-neutral-400 dark:text-neutral-500">
                  solving.
                </span>
              </h2>
            </div>

            <div className="border-t border-neutral-200 pt-6 dark:border-neutral-700">
              <p className="max-w-[540px] text-[14px] leading-7 text-neutral-500 dark:text-neutral-300">
                I'm particularly interested in roles where I can contribute
                across backend engineering, system design, application
                modernization, performance optimization and technical
                problem-solving.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[11px] uppercase tracking-[0.14em] text-neutral-400 dark:text-neutral-500">
                <span>.NET</span>
                <span>Backend</span>
                <span>Full Stack</span>
                <span>Enterprise Systems</span>
                <span>Architecture</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="border-t border-neutral-200 px-[5.5vw] py-14 dark:border-neutral-700">
        <div className="mx-auto max-w-[1160px]">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-neutral-400 dark:text-neutral-500">
                PREFERRED CONTACT
              </p>

              <a
                href="mailto:vijaydhiman51@gmail.com"
                className="mt-2 inline-block text-[16px] text-neutral-800 transition-colors hover:text-neutral-500 dark:text-neutral-200 dark:hover:text-neutral-400"
              >
                vijaydhiman51@gmail.com
              </a>
            </div>

            <a
              href="mailto:vijaydhiman51@gmail.com"
              className="inline-flex w-fit items-center gap-2 border border-neutral-300 px-4 py-3 text-[11px] font-medium uppercase tracking-[0.12em] text-neutral-800 transition-colors hover:border-neutral-500 dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-neutral-500"
            >
              Start a conversation
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;