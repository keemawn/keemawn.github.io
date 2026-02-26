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
    company: 'AgileAlgo',
    role: 'Data Scientist',
    period: 'May 2025 – Present',
    location: 'Singapore',
    bullets: [
      'Designed and deployed agentic AI solutions across cybersecurity, accountancy, travel, and real estate sectors using CrewAI, LangGraph, and knowledge graph retrieval.',
      'Developed customer-facing prototypes in Streamlit, including itinerary recommendation engines, automated customer service chat flows, OCR document parsing, and knowledge graph-enhanced lead capture pipelines.',
      'Conducted root-cause analysis to identify inefficiencies in client platforms and processes, integrating Python-based solutions to improve operational efficiency.',
      'Led presales discovery with clients across multiple sectors, translating business requirements into tailored AI solutions and aligning technical deliverables with client objectives.',
    ],
  },
  {
    id: 2,
    company: 'Apple',
    role: 'Specialist',
    period: 'Aug 2024 – Feb 2025',
    location: 'Singapore',
    bullets: [
      'Delivered personalised customer experiences by matching Apple\'s product ecosystem to individual needs, driving satisfaction and repeat loyalty.',
      'Translated deep product knowledge into clear, accessible guidance that empowered customers to make confident purchasing decisions.',
      'Coordinated with cross-functional teams to ensure seamless store operations and a consistent end-to-end customer journey.',
      'Represented Apple\'s brand values of innovation and simplicity, building genuine relationships through every customer interaction.',
      'Stayed current with new product launches and updates to provide informed recommendations and handle advanced technical queries.',
      'Proactively identified and engaged potential business partners to support Apple\'s commercial presence and community relationships.',
    ],
  },
  {
    id: 3,
    company: 'Bosch',
    role: 'Machine Learning/AI & Sustainability Research Engineer Intern',
    period: 'Jan 2024 – May 2024',
    location: 'Singapore',
    bullets: [
      'Utilised MATLAB Simulink for modelling and simulation of feedback control systems, providing reference data for experimental analysis.',
      'Contributed to research on sensor anomaly cases, assisting in the development of solutions for problem identification and correction.',
      'Collected test data through laboratory experiments to train an anomaly detection algorithm using K-means clustering and Mahalanobis distance.',
      'Applied CNN models on diverse datasets to refine predictive models and enhance outlier detection.',
    ],
  },
  {
    id: 4,
    company: 'Edwards Lifesciences',
    role: 'Digitalization Intern',
    period: 'Jul 2023 – Dec 2023',
    location: 'Singapore',
    bullets: [
      'Conducted time study and data analysis of tissue processing and valve stem assembly operations, delivering visualised insights to the team.',
      'Implemented impact studies on the Manufacturing Execution System (MES), concluding a 46% increase in administration productivity for one manufacturing process.',
      'Set up digital workstations using CAMSTAR MES, expanding the production line and improving data flow.',
      'Participated in User Acceptance Testing and Functional Testing to ensure software alignment with business requirements.',
    ],
  },
  {
    id: 5,
    company: 'Asia GMP',
    role: 'Writer & Administrative Assistant',
    period: 'May 2023 – Jun 2023',
    location: 'Singapore',
    bullets: [
      'Drafted and maintained SOPs to streamline workflows and ensure regulatory compliance.',
      'Produced accurate written reports and internal documentation with clarity and precision.',
      'Supported day-to-day operations through data entry, scheduling, and administrative coordination.',
      'Worked cross-functionally with team members to improve process efficiency.',
    ],
  },
  {
    id: 6,
    company: 'Samsung Electronics',
    role: 'Galaxy Specialist',
    period: 'May 2022 – Jun 2023',
    location: 'Singapore',
    bullets: [
      'Maintained strong product knowledge across the Samsung Galaxy lineup to support informed customer consultations.',
      'Conducted on-site training for newly launched products across multiple major electronics retail locations in Singapore.',
      'Guided customers through purchase decisions with tailored recommendations based on individual needs.',
      'Managed and reconciled inventory across multiple stock locations to ensure product availability.',
    ],
  },
]
