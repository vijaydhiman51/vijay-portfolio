export type Scenario = {
  id: string;
  label: string;
  title: string;
  description: string;
  options: {
    id: string;
    label: string;
    text: string;
  }[];
};

export type Result = {
  title: string;
  steps: string[];
  note: string;
};

export const scenarios: Scenario[] = [
  {
    id: "api",
    label: "01 / SLOW PRODUCTION API",
    title: "A production API is slow. What do you do?",
    description:
      "Choose the first engineering move. The goal is to find evidence before changing architecture.",
    options: [
      { id: "rewrite", label: "A", text: "Rewrite the entire API" },
      { id: "scale", label: "B", text: "Add more servers" },
      { id: "investigate", label: "C", text: "Investigate first" },
      { id: "sql", label: "D", text: "Blame SQL" },
    ],
  },
  {
    id: "kafka",
    label: "02 / KAFKA FAILURE",
    title: "A Kafka consumer processes the same event twice. What do you do?",
    description:
      "Distributed systems can deliver messages more than once. The consumer needs to handle that safely.",
    options: [
      { id: "ignore", label: "A", text: "Ignore the duplicate" },
      { id: "manual", label: "B", text: "Delete the duplicate manually" },
      { id: "threads", label: "C", text: "Increase consumer threads" },
      { id: "idempotent", label: "D", text: "Make processing idempotent" },
    ],
  },
  {
    id: "modernization",
    label: "03 / APPLICATION MODERNIZATION",
    title:
      "A critical workflow relies heavily on stored procedures. How do you modernize it?",
    description:
      "Move toward service-oriented business logic without creating unnecessary migration risk.",
    options: [
      { id: "rewrite-all", label: "A", text: "Rewrite everything at once" },
      { id: "incremental", label: "B", text: "Migrate incrementally" },
      {
        id: "controllers",
        label: "C",
        text: "Move everything into controllers",
      },
      { id: "leave", label: "D", text: "Leave it untouched" },
    ],
  },
];

export const results: Record<string, Result> = {
  investigate: {
    title: "Good choice.",
    steps: [
      "Check request latency",
      "Inspect the execution plan",
      "Analyze database load",
      "Identify the expensive query",
      "Make a targeted optimization",
      "Measure and validate",
    ],
    note: "This is the same evidence-first approach used to reduce a production SQL process from roughly 15 minutes to under 2 minutes.",
  },
  rewrite: {
    title: "Start with evidence before rewriting.",
    steps: [
      "Check endpoint latency",
      "Trace downstream dependencies",
      "Inspect database and service timings",
      "Identify the actual bottleneck",
      "Apply the smallest targeted change",
      "Measure the result",
    ],
    note: "A rewrite can be justified later if the evidence shows an architectural problem.",
  },
  scale: {
    title: "Scaling is a hypothesis, not the first move.",
    steps: [
      "Check CPU and memory",
      "Check database waits",
      "Check downstream latency",
      "Identify the constrained resource",
      "Scale only when evidence supports it",
      "Measure the result",
    ],
    note: "More servers cannot fix a slow query or a saturated shared dependency.",
  },
  sql: {
    title: "SQL may be the bottleneck — prove it first.",
    steps: [
      "Separate API time from SQL time",
      "Inspect execution plans",
      "Check waits and IO",
      "Identify the expensive operation",
      "Optimize the specific bottleneck",
      "Measure before and after",
    ],
    note: "Blaming a layer without telemetry makes the diagnosis weaker.",
  },
  idempotent: {
    title: "Good choice.",
    steps: [
      "Define a stable event or business key",
      "Check whether the event was already processed",
      "Make the state change idempotent",
      "Commit processing safely",
      "Retry failed processing",
      "Monitor duplicate handling",
    ],
    note: "The goal is safe redelivery rather than assuming duplicate delivery cannot happen.",
  },
  ignore: {
    title: "Duplicate delivery should be handled explicitly.",
    steps: [
      "Confirm the delivery semantics",
      "Inspect consumer offsets",
      "Understand the redelivery path",
      "Add idempotency",
      "Protect the state-changing operation",
      "Monitor duplicate events",
    ],
    note: "Ignoring duplicates can turn a messaging problem into a data consistency problem.",
  },
  manual: {
    title: "Fix the system, not just the symptom.",
    steps: [
      "Identify the duplicate event",
      "Find the redelivery path",
      "Define an idempotency key",
      "Protect the write operation",
      "Add automated tests",
      "Monitor future duplicates",
    ],
    note: "Manual cleanup may resolve one incident without preventing recurrence.",
  },
  threads: {
    title: "Concurrency is not the same as correctness.",
    steps: [
      "Check consumer lag",
      "Inspect partition assignment",
      "Understand delivery semantics",
      "Identify why duplicates occur",
      "Make processing idempotent",
      "Tune concurrency afterward",
    ],
    note: "More consumers can improve throughput without solving duplicate processing.",
  },
  incremental: {
    title: "Good choice.",
    steps: [
      "Map stored-procedure dependencies",
      "Identify business rules",
      "Define a service boundary",
      "Migrate one workflow",
      "Validate behavior and performance",
      "Retire the legacy path gradually",
    ],
    note: "Incremental modernization reduces the number of things changing simultaneously.",
  },
  "rewrite-all": {
    title: "Reduce migration risk first.",
    steps: [
      "Inventory procedures and dependencies",
      "Separate business rules from data access",
      "Define service contracts",
      "Migrate one capability",
      "Validate the new path",
      "Remove legacy code gradually",
    ],
    note: "Large rewrites increase the number of variables changing at the same time.",
  },
  controllers: {
    title: "Keep business logic out of controllers.",
    steps: [
      "Identify the business capability",
      "Create an application-service boundary",
      "Move business rules into services",
      "Keep controllers thin",
      "Test the behavior independently",
      "Migrate incrementally",
    ],
    note: "Controllers should coordinate HTTP concerns rather than become the new stored-procedure layer.",
  },
  leave: {
    title: "Stability and modernization can coexist.",
    steps: [
      "Document current dependencies",
      "Identify the highest-risk coupling",
      "Add tests around existing behavior",
      "Define the target architecture",
      "Migrate valuable boundaries",
      "Measure each change",
    ],
    note: "Modernization does not have to mean an immediate rewrite.",
  },
};

export const architecture = [
  {
    id: "frontend",
    title: "Frontend",
    tech: "ExtJS / React",
    description:
      "Presentation, user interaction and client-side state. Keep business rules outside the UI.",
  },
  {
    id: "api",
    title: "Web API",
    tech: "ASP.NET Core",
    description:
      "HTTP boundary responsible for contracts, authentication, validation, status codes and observability.",
  },
  {
    id: "services",
    title: ".NET Services",
    tech: "C# / .NET 8",
    description:
      "Business logic boundary. Focus on dependency direction, testability, transaction boundaries and maintainability.",
  },
  {
    id: "kafka",
    title: "Kafka",
    tech: "Event Streaming",
    description:
      "Asynchronous communication. Think about partitions, offsets, ordering, retries and duplicate delivery.",
  },
  {
    id: "database",
    title: "SQL Server",
    tech: "Persistence",
    description:
      "Data layer where execution plans, indexing, IO, waits and query shape matter.",
  },
];
