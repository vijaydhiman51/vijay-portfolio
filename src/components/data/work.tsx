export type ArchitectureNode = {
  name: string;
  description: string;
  details: string[];
};

export type PerformanceStep = {
  label: string;
  time: number;
  description: string;
};

export type Project = {
  number: string;
  name: string;
  category: string;
  overview: string;
  studyHeader: string;
  studyOverview: string;
  architecture?: string;
  architectureNodes?: ArchitectureNode[];
  role: string;
  technologies: string[];
  challenges: string[];
  impact: string;
  tabs: string[];
  performance?: {
    before: number;
    after: number;
    steps: PerformanceStep[];
  };
};

export const projects: Project[] = [
  {
    number: "01",
    name: "webDistribute",
    category: "DERMS / Energy & Utilities",
    overview:
      "Distributed Energy Resource Management System supporting utility operations, including dispatch and scheduling of load resources and distributed generation.",
    architecture:
      "The Dispatch & Scheduling Manager sits within the webDistribute platform. The modernization work moved database-centric business logic toward scalable .NET services while continuing to support enterprise scheduling workflows.",
    studyHeader:
      "Modernizing the Dispatch & Scheduling Manager by moving database-centric business logic toward scalable .NET services while preserving existing utility scheduling workflows.",
    studyOverview:
      "webDistribute is a Distributed Energy Resource Management System supporting utility dispatch and scheduling operations. I worked on the Dispatch & Scheduling Manager, where database-centric business logic was progressively moved toward scalable .NET services while maintaining existing enterprise scheduling workflows.",
    architectureNodes: [
      {
        name: "Frontend",
        description:
          "User-facing workflows for resource scheduling and dispatch operations.",
        details: [
          "ExtJS",
          "Scheduling Manager",
          "Scheduling Workflows",
          "Resource Interaction",
        ],
      },
      {
        name: "Web API",
        description:
          "RESTful API layer connecting application workflows with backend services.",
        details: [
          "ASP.NET Core",
          "REST APIs",
          "Request Processing",
          "Validation",
        ],
      },
      {
        name: ".NET Services",
        description:
          "Modernized service layer responsible for business logic and processing.",
        details: ["C#", ".NET 8", "Business logic", "Dependency Injection"],
      },
      {
        name: "SQL Server",
        description:
          "Persistent data layer supporting enterprise scheduling and operational workflows.",
        details: [
          "SQL Server",
          "Stored Procedures",
          "Query optimization",
          "Data processing",
        ],
      },
    ],
    role: "Led development of Dispatch & Scheduling Manager functionality, designed and developed backend services and RESTful APIs, and contributed to modernization of database-centric business logic into scalable .NET services.",
    technologies: [
      ".NET 8",
      "C#",
      "ASP.NET Core",
      "Web API",
      "REST",
      "SQL Server",
      "Stored Procedures",
      "LINQ",
      "Dependency Injection",
    ],
    challenges: [
      "Modernizing database-centric business logic without disrupting existing enterprise workflows.",
      "Designing service boundaries around existing application functionality.",
      "Maintaining reliability while introducing a more scalable .NET service architecture.",
    ],
    impact:
      "Improved maintainability and deployment flexibility by moving business logic toward a scalable .NET service architecture while continuing to support utility dispatch and scheduling operations.",
    tabs: [
      "Overview",
      "Architecture",
      "My Role",
      "Technologies",
      "Challenges",
      "Impact",
    ],
  },
  {
    number: "02",
    name: "webSmartOMS",
    category: "OMS / Outage Management",
    overview:
      "Centralized outage management platform used for planning, coordination, approval and tracking of outage requests across transmission, distribution and generation operations.",
    studyHeader:
      "Building and enhancing outage-management workflows with .NET and Kafka, connecting operational UI components with backend processing through event-driven communication.",
    studyOverview:
      "webSmartOMS is a centralized outage management platform used for planning, coordination, approval and tracking of outage requests across transmission, distribution and generation operations. My work included the Outage Display and OMS Configuration modules, backend and reporting functionality, and Kafka-based communication between UI and Processor applications.",
    architecture:
      "The platform used event-driven communication between UI and Processor applications through Kafka, supporting outage request processing and responsive operational workflows.",
    architectureNodes: [
      {
        name: "UI",
        description:
          "Operational interface used by users to work with outage-management workflows.",
        details: [
          "ExtJS",
          "Outage Display",
          "OMS Configuration",
          "User workflows",
        ],
      },
      {
        name: "API / Services",
        description:
          "Backend services handling business operations and application requests.",
        details: ["ASP.NET Core", "C#", "REST APIs", "Business logic"],
      },
      {
        name: "Kafka",
        description:
          "Event-driven communication layer between UI and Processor applications.",
        details: [
          "Event streaming",
          "Topics",
          "Partitions",
          "Offsets",
          "Retries",
        ],
      },
      {
        name: "Processor",
        description:
          "Processing component responsible for consuming and handling outage-related events.",
        details: [
          "Message processing",
          "Business processing",
          "Event handling",
        ],
      },
      {
        name: "Database",
        description:
          "Persistence layer supporting outage-management data and reporting.",
        details: ["SQL Server", "PostgreSQL", "Queries", "Reporting"],
      },
    ],
    role: "Designed and developed the Outage Display and OMS Configuration modules. Worked across backend services, reporting and database functionality and implemented event-driven communication between UI and Processor applications using Kafka.",
    technologies: [
      "C#",
      ".NET",
      "ASP.NET Core",
      "Web API",
      "Kafka",
      "ExtJS",
      "SQL Server",
      "PostgreSQL",
      "REST APIs",
    ],
    challenges: [
      "Coordinating communication between UI and Processor components.",
      "Supporting event-driven outage processing using Kafka.",
      "Maintaining reliability and responsiveness across operational workflows.",
      "Building functionality around complex outage-management business processes.",
    ],
    impact:
      "Supported outage-management workflows through event-driven processing, backend services, reporting and operational modules used for outage planning, coordination, approval and tracking.",
    tabs: [
      "Overview",
      "Architecture",
      "My Role",
      "Technologies",
      "Challenges",
      "Impact",
    ],
  },
  {
    number: "03",
    name: "webSmartMarket",
    category: "Energy Market Operations",
    overview:
      "Market-clearing platform that matches bids and offers and supports end-to-end energy-market operations, including portfolio analysis and reporting.",
    studyHeader:
      "Developing bid and transaction workflows that support energy-market operations, from bid creation and market-outcome review to transaction visibility and reporting.",
    studyOverview:
      "webSmartMarket is a market-clearing platform that matches bids and offers and supports end-to-end energy-market operations. I worked on the Daily Bid Blotter and Transactions Display modules, enabling users to create and review bids, view market outcomes and track bid-related transactions.",
    architecture:
      "The platform integrates market workflows with OASIS and ETS for end-to-end automation and supports portfolio analysis, transmission analysis and real-time and after-the-fact reporting.",
    architectureNodes: [
      {
        name: "Market UI",
        description:
          "User-facing workflows for bids, transactions and market information.",
        details: [
          "Daily Bid Blotter",
          "Transactions Display",
          "Bid creation",
          "Market outcomes",
        ],
      },
      {
        name: "Application Services",
        description:
          "Backend functionality supporting market workflows and processing.",
        details: ["C#", ".NET", "Business logic", "Reporting"],
      },
      {
        name: "OASIS",
        description:
          "External market-system integration supporting end-to-end market operations.",
        details: ["Integration", "Market data", "Automation"],
      },
      {
        name: "ETS",
        description:
          "External integration participating in the market workflow.",
        details: ["Integration", "Automation", "Market operations"],
      },
      {
        name: "Data Layer",
        description:
          "Data and reporting layer supporting operational and historical analysis.",
        details: ["SQL Server", "PostgreSQL", "Reporting", "Transactions"],
      },
    ],
    role: "Developed the Daily Bid Blotter module, enabling users to view submitted bids, review market outcomes and create new bid entries. Also built the Transactions Display module to provide visibility into bid-related transactions and operational activity.",
    technologies: [
      "C#",
      ".NET",
      "ASP.NET",
      "SQL Server",
      "PostgreSQL",
      "ExtJS",
      "JavaScript",
      "REST",
    ],
    challenges: [
      "Working with market-specific workflows and business rules.",
      "Presenting complex bid and transaction information clearly to users.",
      "Supporting reporting and operational visibility across market activities.",
      "Integrating application functionality with external market systems.",
    ],
    impact:
      "Supported energy-market operations through bid management, market-outcome visibility, transaction tracking and reporting workflows.",
    tabs: [
      "Overview",
      "Architecture",
      "My Role",
      "Technologies",
      "Challenges",
      "Impact",
    ],
  },
  {
    number: "04",
    name: "webPipeline",
    category: "Real-Time Natural Gas Operations",
    overview:
      "Fully integrated, cloud-based platform providing real-time communication and management of daily natural gas operations within a unified system.",
    studyHeader:
      "Supporting real-time natural gas operations through an integrated cloud-based platform, with a focus on operational workflows, scheduling, reporting and production reliability.",
    studyOverview:
      "webPipeline is a fully integrated, cloud-based platform for real-time communication and management of daily natural gas operations. My work focused on workflow enhancements, reporting functionality, customer-requested features and production support across operational applications.",
    architecture:
      "A cloud-based enterprise platform bringing operational workflows and real-time communication into a single system for daily natural gas operations.",
    architectureNodes: [
      {
        name: "Operations UI",
        description:
          "Interface used for daily natural gas operational workflows.",
        details: [
          "Operational displays",
          "Scheduling workflows",
          "User interaction",
        ],
      },
      {
        name: "Application Layer",
        description:
          "Business and workflow processing for natural gas operations.",
        details: [".NET", "Business logic", "Workflow processing"],
      },
      {
        name: "Scheduling",
        description:
          "Supports real-time scheduling activities within the platform.",
        details: [
          "Real-time operations",
          "Scheduling",
          "Operational workflows",
        ],
      },
      {
        name: "Data Layer",
        description:
          "Persistence and reporting functionality supporting operations.",
        details: ["SQL Server", "Reporting"],
      },
    ],
    role: "Delivered workflow enhancements, reporting functionality and customer-requested features for webPipeline and supported production maintenance and issue resolution across live enterprise applications.",
    technologies: [
      ".NET",
      "C#",
      "ASP.NET Core",
      "SQL Server",
      "PostgreSQL",
      "ExtJS",
      "JavaScript",
      "REST APIs",
    ],
    challenges: [
      "Supporting real-time operational workflows.",
      "Implementing customer-requested enhancements without disrupting existing functionality.",
      "Maintaining production applications used for daily operations.",
    ],
    impact:
      "Contributed to a unified platform for real-time communication and management of daily natural gas operations and scheduling workflows.",
    tabs: [
      "Overview",
      "Architecture",
      "My Role",
      "Technologies",
      "Challenges",
      "Impact",
    ],
  },
  {
    number: "05",
    name: "SQL Performance Optimization",
    category: "Performance Engineering",
    overview:
      "A business-critical SQL Server process was taking approximately 15 minutes in production. Through systematic investigation and targeted optimization, execution time was reduced to under 2 minutes.",
    studyHeader:
      "Diagnosing and optimizing a business-critical SQL Server process by analyzing execution plans, database load and query bottlenecks, reducing production execution time from approximately 15 minutes to under 2 minutes.",
    studyOverview:
      "A business-critical SQL Server process was taking approximately 15 minutes in production. I investigated execution plans, join conditions, temporary-table indexing and database/server load, then applied targeted query optimizations and validated the result against production performance, reducing execution time to under 2 minutes.",
    role: "Investigated execution plans, join conditions, temporary-table indexing and database/server load. Applied targeted query optimizations and validated the result against production performance.",
    technologies: [
      "SQL Server",
      "Stored Procedures",
      "Execution Plans",
      "Indexes",
      "Query Optimization",
      "Performance Tuning",
    ],
    challenges: [
      "Identifying the actual bottleneck rather than making broad infrastructure changes.",
      "Understanding execution-plan behavior and database load.",
      "Improving performance while preserving existing business behavior.",
      "Validating that the optimization produced measurable production results.",
    ],
    impact:
      "Reduced the production execution time from approximately 15 minutes to under 2 minutes.",
    tabs: ["Overview", "My Role", "Technologies", "Challenges", "Impact"],
    performance: {
      before: 15,
      after: 2,
      steps: [
        {
          label: "Check latency",
          time: 15,
          description:
            "Establish the baseline and confirm the production performance problem.",
        },
        {
          label: "Inspect execution plan",
          time: 12,
          description:
            "Analyze the execution plan to identify expensive operations.",
        },
        {
          label: "Analyze database load",
          time: 9,
          description:
            "Check database and server load to distinguish query issues from broader system constraints.",
        },
        {
          label: "Identify bottleneck",
          time: 6,
          description:
            "Investigate join conditions and expensive query operations.",
        },
        {
          label: "Optimize",
          time: 4,
          description:
            "Apply targeted query changes and indexes on temporary tables.",
        },
        {
          label: "Measure again",
          time: 2,
          description:
            "Validate the optimized process and confirm the production result.",
        },
      ],
    },
  },
];
