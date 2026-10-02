import { ArrowRight, Menu, Palette, X } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Terminal from "./Terminal";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Work", href: "#work" },
  { label: "Journey", href: "#journey" },
  { label: "How I Think", href: "#thinking" }, 
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    const themeMode = localStorage.getItem("IsDarkTheme");

    if (themeMode) {
      const mode = JSON.parse(themeMode);

      if (mode) {
        document.documentElement.classList.add("dark");
      }

      return mode;
    }

    return false;
  });

  const navRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
  const isProgrammaticScroll = useRef(false);

  const [indicator, setIndicator] = useState({
    left: 0,
    width: 0,
  });

  const handleTerminalState = () => {
    setTerminalOpen((open) => !open);
  };

  const toggleTheme = () => {
    const modeVal = !darkMode;

    setDarkMode(modeVal);
    localStorage.setItem("IsDarkTheme", JSON.stringify(modeVal));
    document.documentElement.classList.toggle("dark");
  };

  useEffect(() => {
    const sectionElements = navItems
      .map((item) => document.getElementById(item.href.substring(1)))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        if (isProgrammaticScroll.current) return;

        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top));

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: 0,
        rootMargin: "-25% 0px -60% 0px",
      },
    );

    sectionElements.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    const link = navRefs.current[activeSection];
    const nav = navRef.current;

    if (!link || !nav) return;

    const linkRect = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    setIndicator({
      left: linkRect.left - navRect.left,
      width: linkRect.width,
    });
  }, [activeSection]);

  useEffect(() => {
    const handleResize = () => {
      const link = navRefs.current[activeSection];
      const nav = navRef.current;

      if (!link || !nav) return;

      const linkRect = link.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();

      setIndicator({
        left: linkRect.left - navRect.left,
        width: linkRect.width,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeSection]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();

    const section = document.getElementById(href.substring(1));

    if (!section) return;

    const sectionId = href.replace("#", "");

    isProgrammaticScroll.current = true;
    setActiveSection(sectionId);
    setMobileMenuOpen(false);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", href);

    window.setTimeout(() => {
      isProgrammaticScroll.current = false;
    }, 800);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/80 bg-[#f7f7f3]/90 backdrop-blur-xl dark:border-neutral-800/80 dark:bg-[#1f1f1c]/90">
      <nav className="mx-auto flex h-[68px] max-w-[1500px] items-center px-6 md:px-10">
        {/* Logo */}

        <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="mr-auto text-[20px] font-semibold tracking-[-0.055em] text-neutral-950 dark:text-[#f7f7f3]">
          VJ<span className="text-neutral-400">.</span>
        </a>

        {/* Desktop Navigation */}

        <div ref={navRef} className="relative hidden items-center gap-7 md:flex">
          <span className="pointer-events-none absolute -bottom-[22px] h-px bg-neutral-900 transition-all duration-300 ease-out dark:bg-neutral-100" style={{ left: indicator.left, width: indicator.width }} />

          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={item.href}
                href={item.href}
                ref={(element) => {
                  navRefs.current[sectionId] = element;
                }}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`relative py-2 text-[12px] transition-colors duration-300 ${isActive ? "font-medium text-neutral-950 dark:text-[#f7f7f3]" : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Controls */}

        <div className="ml-auto flex items-center gap-2 md:ml-8">
          {/* Terminal */}

          <button
            type="button"
            onClick={handleTerminalState}
            aria-label="Open terminal"
            className="flex items-center rounded-md border border-neutral-200 bg-transparent px-3 py-2 text-[11px] text-neutral-600 transition-all duration-200 hover:-translate-y-px hover:border-neutral-400 hover:text-neutral-950 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
          >
            Terminal
            <ArrowRight size={14} className="ml-1.5" style={{ transform: "rotate(-45deg)" }} />
          </button>

          {/* Theme */}

          <button
            type="button"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-500 transition-all duration-200 hover:-translate-y-px hover:border-neutral-400 hover:text-neutral-900 dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
          >
            <Palette size={14} />
          </button>

          {/* Mobile Menu */}

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 text-neutral-600 transition-all duration-200 hover:border-neutral-400 hover:text-neutral-950 md:hidden dark:border-neutral-700 dark:text-neutral-300 dark:hover:border-neutral-500 dark:hover:text-white"
          >
            {mobileMenuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}

      <div className={`overflow-hidden border-t border-neutral-200/80 bg-[#f7f7f3] transition-all duration-300 ease-out md:hidden dark:border-neutral-800/80 dark:bg-[#1f1f1c] ${mobileMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="px-6 py-4">
          <div className="flex flex-col">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`border-b border-neutral-200/80 py-4 text-sm transition-all duration-200 last:border-b-0 dark:border-neutral-800/80 ${isActive ? "translate-x-1 font-medium text-neutral-950 dark:text-[#f7f7f3]" : "text-neutral-500 hover:translate-x-1 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"}`}
                >
                  <span className="flex items-center justify-between">
                    {item.label}

                    {isActive && <span className="text-[9px] text-neutral-400">●</span>}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {terminalOpen && <Terminal openTerminal={true} onTerminalClose={() => setTerminalOpen(false)} />}
    </header>
  );
};

export default Navbar;