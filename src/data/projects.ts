export interface Project {
  id: number
  title: string
  tagline: string
  description: string
  techTags: string[]
  period?: string
  githubUrl: string
  liveUrl?: string
  size: 'large' | 'medium' | 'small'
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'JobScoped',
    tagline: 'Resume Analyzer & Career Pathfinder for Singapore job seekers',
    description:
      'Full-stack AI application. Users upload a resume, get matched to career paths, receive skill gap analysis, and a personalised learning roadmap powered by LangGraph and DeepSeek LLM.',
    techTags: [
      'React',
      'TypeScript',
      'FastAPI',
      'Python',
      'Supabase',
      'DeepSeek LLM',
      'LangGraph',
      'PostgreSQL',
    ],
    githubUrl: '#',
    size: 'large',
  },
  {
    id: 2,
    title: 'SPY Analytics & Forecasting',
    tagline: "Deep dive into SPY's historical performance and ML-driven future growth projections",
    description:
      'Comprehensive analysis of inflation-adjusted returns, historical trend analysis, and machine learning forecasting of S&P 500 index performance using ensemble methods.',
    techTags: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib', 'Machine Learning'],
    period: 'Aug 2024 – Dec 2024',
    githubUrl: '#',
    size: 'medium',
  },
  {
    id: 3,
    title: 'SMU BI&A Club Datathon 2025',
    tagline: 'Interactive dashboards for structured data extraction and visualization',
    description:
      'Delivered data pipeline and interactive dashboards for the SMU Business Intelligence & Analytics Club Datathon. Extracted structured data and built a full visualization layer in Plotly Dash.',
    techTags: ['Python', 'Plotly Dash', 'Data Visualization', 'SQL'],
    period: 'Jan 2025 – Feb 2025',
    githubUrl: '#',
    size: 'medium',
  },
]
