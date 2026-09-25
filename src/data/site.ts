export const site = {
  name: 'Justin Christroper',
  email: 'justinchristroper@gmail.com',
  github: 'https://github.com/justinchristroper-arch',
  linkedin: 'https://www.linkedin.com/in/justin-christroper-b48494390',
  positioning: 'I build practical technology solutions that connect business problems, data, and software.',
}

export const navItems = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Certifications', href: '/#certifications' },
  { label: 'Resume', href: '/#resume' },
  { label: 'Contact', href: '/#contact' },
]

export const skillGroups = [
  { title: 'Programming', items: ['Python', 'C++', 'C', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Data & Analytics', items: ['PostgreSQL', 'Pandas', 'Power BI', 'DAX', 'Data Modeling'] },
  { title: 'AI & Intelligent Systems', items: ['LLM', 'NLP', 'Retrieval-Augmented Generation', 'AI-assisted Systems'] },
  { title: 'Software & Web', items: ['React', 'FastAPI', 'REST API', 'Docker', 'Git', 'GitHub'] },
  { title: 'Business & Systems', items: ['Business Analysis', 'Requirements Analysis', 'AS-IS / TO-BE', 'Process Modeling', 'KPI Design', 'SLA Design'] },
]

export const credentials = [
  {
    issuer: 'Microsoft · GreatNusa · BINUS University',
    title: 'Microsoft Elevate AI Training',
    detail: 'Azure AI Fundamentals learning program',
    date: '2026',
    type: 'Training completion',
    image: '/certifications/microsoft-elevate-ai.png',
    imageAlt: 'Microsoft Elevate AI Training certificate awarded to Justin Christroper',
  },
  {
    issuer: 'IBM SkillsBuild',
    title: 'AI Fundamentals: Foundations for Understanding AI',
    detail: 'Foundational artificial intelligence learning credential',
    date: 'Issued 24 Sep 2026',
    type: 'Digital credential',
    image: '/certifications/ibm-ai-fundamentals.png',
    imageAlt: 'IBM SkillsBuild AI Fundamentals certificate awarded to Justin Christroper',
    verificationUrl: 'https://www.credly.com/go/HZCX13nd',
  },
  {
    issuer: 'Cisco Networking Academy',
    title: 'Data Analytics Essentials',
    detail: 'Data analytics foundational credential',
    date: 'Issued 25 Sep 2026',
    type: 'Digital credential',
    image: '/certifications/cisco-data-analytics.png',
    imageAlt: 'Cisco Networking Academy Data Analytics Essentials certificate awarded to Justin Christroper',
    verificationUrl: 'https://www.credly.com/badges/ebcbf54f-4da0-4af9-bae3-9adf7fbf71e7/public_url',
  },
]

export const processSteps = [
  { number: '01', title: 'Understand', body: 'Understand the problem, users, business needs, and constraints.' },
  { number: '02', title: 'Analyze', body: 'Break down requirements, processes, systems, or data.' },
  { number: '03', title: 'Design', body: 'Choose an appropriate solution and architecture.' },
  { number: '04', title: 'Build', body: 'Implement, test, and validate the solution.' },
  { number: '05', title: 'Communicate', body: 'Present results, insights, and decisions clearly.' },
]
