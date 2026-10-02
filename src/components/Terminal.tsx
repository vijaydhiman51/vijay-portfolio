import { ChevronRight, X } from "lucide-react";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { createPortal } from "react-dom";

type TerminalProps = {
  openTerminal: boolean;
  onTerminalClose: () => void;
};

type HistoryLine = {
  id: number;
  type: "system" | "command" | "output" | "error";
  text: string;
};

type CommandResult = string | string[];

const PROMPT = "vijay@portfolio:~$";

const COMMANDS: Record<string, CommandResult> = {
  help: [
    "Available commands:",
    "",
    "help       Show available commands",
    "projects   View projects",
    "stack      View technology stack",
    "journey    View career journey",
    "thinking   How I approach problems",
    "contact    Contact information",
    "clear      Clear terminal",
  ],

  projects: [
    "01  webDistribute",
    "02  webSmartOMS",
    "03  webSmartMarket",
    "04  webPipeline",
    "05  SQL Performance Optimization",
  ],

  stack: [
    ".NET 8 | C# | ASP.NET Core | Web API",
    "SQL Server | Kafka | React | Azure | AI",
  ],

  journey: [
    "2020  Software Trainee",
    "2020  Associate Software Developer",
    "2021  Software Developer",
    "2022  Senior Software Developer I",
    "2023  Senior Software Developer II",
    "2025  Technical Lead – Development",
  ],

  thinking: "Investigate → Isolate → Optimize → Measure",

  contact: ["Email: vijaydhiman51@gmail.com", "LinkedIn: /in/vijaydhiman51"],
};

const createInitialHistory = (): HistoryLine[] => [
  {
    id: 1,
    type: "system",
    text: "VJ Engineering Portfolio",
  },
  {
    id: 2,
    type: "system",
    text: 'Type "help" to explore.',
  },
];

const Terminal = ({ openTerminal, onTerminalClose }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>(createInitialHistory);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const terminalRef = useRef<HTMLDivElement>(null);
  const historyEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const dragging = useRef(false);

  const dragOffset = useRef({
    x: 0,
    y: 0,
  });

  const historyId = useRef(2);

  const addHistory = useCallback((type: HistoryLine["type"], text: string) => {
    historyId.current += 1;

    setHistory((previous) => [
      ...previous,
      {
        id: historyId.current,
        type,
        text,
      },
    ]);
  }, []);

  useEffect(() => {
    historyEndRef.current?.scrollIntoView({
      behavior: "instant",
      block: "end",
    });
  }, [history]);

  useEffect(() => {
    if (!openTerminal) return;

    const timer = window.setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => window.clearTimeout(timer);
  }, [openTerminal]);

  useEffect(() => {
    if (!openTerminal) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onTerminalClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openTerminal, onTerminalClose]);

  const handleCommand = useCallback(() => {
    const command = input.trim().toLowerCase();

    if (!command) return;

    addHistory("command", command);

    if (command === "clear" || command === "cls") {
      setHistory([]);
      setInput("");
      return;
    }

    const result = COMMANDS[command];

    if (!result) {
      addHistory("error", `Command not found: ${command}`);
      addHistory("system", 'Type "help" to see available commands.');
      setInput("");
      return;
    }

    const lines = Array.isArray(result) ? result : result.split("\n");

    lines.forEach((line) => {
      addHistory("output", line);
    });

    setInput("");
  }, [input, addHistory]);

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;

    if (target.closest("button") || target.closest("input")) {
      return;
    }

    const terminal = terminalRef.current;

    if (!terminal) return;

    const rect = terminal.getBoundingClientRect();

    dragging.current = true;

    dragOffset.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;

    const terminal = terminalRef.current;

    if (!terminal) return;

    const rect = terminal.getBoundingClientRect();
    const nextLeft = event.clientX - dragOffset.current.x;
    const nextTop = event.clientY - dragOffset.current.y;

    const padding = 16;
    const minLeft = padding;
    const maxLeft = window.innerWidth - rect.width - padding;
    const minTop = padding;
    const maxTop = window.innerHeight - rect.height - padding;

    const clampedLeft = Math.max(minLeft, Math.min(nextLeft, maxLeft));
    const clampedTop = Math.max(minTop, Math.min(nextTop, maxTop));

    setPosition({
      x: clampedLeft + rect.width / 2 - window.innerWidth / 2,
      y: clampedTop + rect.height / 2 - window.innerHeight / 2,
    });
  };

  const stopDragging = (event: ReactPointerEvent<HTMLDivElement>) => {
    dragging.current = false;

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Pointer capture may already be released.
    }
  };

  if (!openTerminal) {
    return null;
  }

  return createPortal(
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={terminalRef}
        className="pointer-events-auto fixed left-1/2 top-1/2 w-[min(720px,calc(100vw-24px))] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl border border-neutral-700 bg-[#111315] text-neutral-200 shadow-[0_35px_100px_rgba(0,0,0,0.45)]"
        style={{ marginLeft: position.x, marginTop: position.y }}
      >
        {/* Header */}

        <div
          className="flex h-12 select-none items-center border-b border-neutral-800 bg-[#181a1d] px-4 cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
        >
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500/80" />
          </div>

          <div className="ml-4 flex items-center gap-2 font-mono text-[11px]">
            <span className="text-neutral-500">vijay@portfolio</span>
            <span className="text-neutral-700">:</span>
            <span className="text-blue-400">~</span>
            <span className="text-neutral-600">—</span>
            <span className="text-neutral-400">Terminal</span>
          </div>

          <button
            type="button"
            aria-label="Close terminal"
            onPointerDown={(event) => {
              event.preventDefault();
              event.stopPropagation();
              onTerminalClose();
            }}
            className="ml-auto flex h-7 w-7 items-center justify-center rounded-md text-neutral-500 transition hover:bg-red-500/10 hover:text-red-400"
          >
            <X size={14} />
          </button>
        </div>

        {/* Body */}

        <div className="p-5">
          <div className="max-h-[min(520px,65vh)] min-h-[280px] overflow-y-auto pr-2 font-mono text-[12px] leading-6 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-700">
            {history.map((line) => {
              if (line.type === "command") {
                return (
                  <div key={line.id} className="flex">
                    <span className="shrink-0 text-blue-400">{PROMPT}</span>
                    <span className="ml-2 text-white">{line.text}</span>
                  </div>
                );
              }

              if (line.type === "error") {
                return (
                  <div
                    key={line.id}
                    className="whitespace-pre-wrap text-red-400"
                  >
                    {line.text}
                  </div>
                );
              }

              if (line.type === "system") {
                return (
                  <div
                    key={line.id}
                    className="whitespace-pre-wrap text-neutral-500"
                  >
                    {line.text}
                  </div>
                );
              }

              return (
                <div
                  key={line.id}
                  className="whitespace-pre-wrap text-neutral-300"
                >
                  {line.text}
                </div>
              );
            })}

            <div className="mt-2 flex items-center">
              <span className="shrink-0 text-blue-400">{PROMPT}</span>

              <input
                ref={inputRef}
                autoFocus
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    handleCommand();
                  }
                }}
                className="ml-2 min-w-0 flex-1 bg-transparent text-white outline-none caret-blue-400"
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal command input"
              />

              <ChevronRight
                size={13}
                className="ml-1 shrink-0 text-blue-400 opacity-70"
              />
            </div>

            <div ref={historyEndRef} />
          </div>
        </div>

        {/* Footer */}

        <div className="flex items-center justify-between border-t border-neutral-800 bg-[#0e1012] px-5 py-2.5 font-mono text-[10px] text-neutral-600">
          <span>VJ / ENGINEERING PORTFOLIO</span>
          <span className="text-blue-500/70">interactive shell</span>
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default Terminal;
