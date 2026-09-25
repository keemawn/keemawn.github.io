export interface ExperienceEntry {
  id: number
  company: string
  role: string
  period: string
  location: string
  bullets: string[]
}

export const experiences: ExperienceEntry[] = [
  {
    id: 1,
    company: 'TOFFs Technologies',
    role: 'AI Engineer',
    period: 'May 2025 – Present',
    location: 'Singapore',
    bullets: [
      'Architected multi-agent systems using LLM frameworks and MCP servers, designing state schemas, failure-recovery policies, and human-in-the-loop approval gates alongside RAG and Neo4j knowledge graphs for grounded, auditable agent reasoning.',
      'Built and deployed full-stack AI applications spanning LLM orchestration, REST APIs, and frontend interfaces, owning the complete technical architecture from design through production deployment.',
      'Led end-to-end delivery of AI-assisted engineering tools as primary technical owner, translating domain expert knowledge into structured system specifications and production-ready prototypes.',
      'Managed stakeholder discovery across client leadership, domain experts, and internal supervisors, synthesising requirements into PRD-driven development workflows that scoped MVPs for agentic builds.',
    ],
  },
  {
    id: 2,
    company: 'Apple',
    role: 'Specialist',
    period: 'Aug 2024 – Feb 2025',
    location: 'Singapore',
    bullets: [
      "Delivered personalised customer experiences by matching Apple's product ecosystem to individual needs, driving satisfaction and repeat loyalty.",
      'Translated deep product knowledge into clear, accessible guidance that empowered customers to make confident purchasing decisions.',
      'Coordinated with cross-functional teams to ensure seamless store operations and a consistent end-to-end customer journey.',
      "Represented Apple's brand values of innovation and simplicity, building genuine relationships through every customer interaction.",
      'Stayed current with new product launches and updates to provide informed recommendations and handle advanced technical queries.',
      "Proactively identified and engaged potential business partners to support Apple's commercial presence and community relationships.",
    ],
  },
  {
    id: 3,
    company: 'Bosch',
    role: 'AI Engineer Intern',
    period: 'Jan 2024 – May 2024',
    location: 'Singapore',
    bullets: [
      'Used MATLAB Simulink to model and simulate feedback control systems, providing reference data for experimental analysis.',
      'Contributed to research on sensor anomaly cases, assisting in the development of solutions for problem identification and correction.',
      'Conducted laboratory experiments to collect test data for training an anomaly detection algorithm using K-means clustering and Mahalanobis distance.',
      'Applied machine learning techniques, including CNNs, across diverse datasets to refine predictive models and enhance outlier detection.',
    ],
  },
  {
    id: 4,
    company: 'Edwards Lifesciences',
    role: 'Digital Transformation and Analytics Intern',
    period: 'Jul 2023 – Dec 2023',
    location: 'Singapore',
    bullets: [
      'Conducted time study and data analysis of tissue processing and valve stem assembly operations, delivering visualised insights to the team.',
      'Implemented impact studies on the Manufacturing Execution System (MES), concluding a 46% increase in administration productivity for one manufacturing process.',
      'Set up digital workstations using CAMSTAR MES, expanding the production line and improving data flow.',
      'Participated in User Acceptance Testing and Functional Testing to ensure software alignment with business requirements.',
    ],
  },
]
