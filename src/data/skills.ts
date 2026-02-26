export interface SkillCategory {
  id: string
  title: string
  skills: string[]
  size: 'large' | 'medium' | 'small'
}

export interface Certification {
  name: string
  issuer: string
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Core Languages',
    skills: ['Python', 'R', 'SQL', 'MATLAB'],
    size: 'large',
  },
  {
    id: 'ml',
    title: 'AI / ML Frameworks',
    skills: ['CrewAI', 'LangGraph', 'Scikit-learn', 'TensorFlow', 'CNNs'],
    size: 'large',
  },
  {
    id: 'data',
    title: 'Data & Visualization',
    skills: ['Tableau', 'Power BI', 'Streamlit', 'Plotly Dash', 'Matplotlib', 'Seaborn'],
    size: 'medium',
  },
  {
    id: 'graph',
    title: 'Graph & Networks',
    skills: ['Knowledge Graphs', 'GNNs', 'NetworkX'],
    size: 'medium',
  },
  {
    id: 'cloud',
    title: 'Cloud & Databases',
    skills: ['AWS', 'Supabase', 'PostgreSQL'],
    size: 'small',
  },
  {
    id: 'web',
    title: 'Web & Dev',
    skills: ['HTML', 'CSS', 'SOLIDWORKS'],
    size: 'small',
  },
  {
    id: 'spoken',
    title: 'Spoken Languages',
    skills: ['English', 'Mandarin', 'Cantonese'],
    size: 'small',
  },
]

export const certifications: Certification[] = [
  { name: 'Machine Learning Specialization', issuer: 'DeepLearning.AI' },
  { name: 'Applied Machine Learning in Python', issuer: 'University of Michigan' },
  { name: 'Using SQL Databases with Python', issuer: 'University of Michigan' },
  { name: 'AWS Cloud Practitioner Essentials', issuer: 'Amazon Web Services' },
  { name: 'Advanced Data Analytics Specialization', issuer: 'Google' },
]
