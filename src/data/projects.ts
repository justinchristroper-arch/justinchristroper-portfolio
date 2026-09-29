export type ProjectLink = {
  label: string
  href: string
  kind: 'primary' | 'secondary'
}

export type CaseStudySection = {
  eyebrow?: string
  title: string
  body?: string[]
  bullets?: string[]
  flow?: string[]
  metrics?: { value: string; label: string; note?: string }[]
  callout?: string
}

export type Project = {
  slug: string
  index: string
  name: string
  shortName: string
  category: string
  description: string
  summary: string
  year: string
  status: string
  technologies: string[]
  highlights: string[]
  image?: string
  imageAlt?: string
  links: ProjectLink[]
  sections: CaseStudySection[]
}

export const projects: Project[] = [
  {
    slug: 'cvscreener',
    index: '01',
    name: 'CvScreener',
    shortName: 'CVS',
    category: 'AI-assisted CV Screening System',
    description: 'An evidence-first screening workflow that turns candidate CVs and job requirements into structured, auditable matches and rankings.',
    summary: 'A full-stack system designed to make CV screening more structured, transparent, and reviewable—while keeping the final matching and scoring logic deterministic.',
    year: '2026',
    status: 'Completed · Deployed',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'OpenRouter', 'Docker'],
    highlights: ['Evidence-first matching', 'Deterministic scoring', '1,468 tests passed at baseline'],
    image: '/projects/cvscreener.png',
    imageAlt: 'CvScreener candidate evidence screen showing matched requirements, source evidence, verdict tags, and score',
    links: [
      { label: 'Live demo', href: 'https://ai-cv-screener-h8ru.vercel.app/', kind: 'primary' },
      { label: 'GitHub', href: 'https://github.com/justinchristroper-arch/ai-cv-screener', kind: 'secondary' },
    ],
    sections: [
      {
        eyebrow: 'Overview',
        title: 'Structured screening, with evidence attached',
        body: [
          'CvScreener helps a reviewer define job requirements, upload candidate CVs, and compare applicants through a consistent screening pipeline.',
          'The current full UI workflow uses an LLM to extract a structured candidate profile. Once structured, requirement matching, scoring, and ranking are deterministic and do not require an LLM.',
        ],
        metrics: [
          { value: '1,333', label: 'Backend tests passed', note: 'Project testing baseline' },
          { value: '135', label: 'Frontend tests passed', note: 'Project testing baseline' },
          { value: '97%', label: 'Backend coverage', note: 'Measured baseline—not a production guarantee' },
        ],
      },
      {
        eyebrow: 'Problem',
        title: 'Screening becomes difficult to defend when the reasoning is hidden',
        body: [
          'CV review can be inconsistent and hard to audit when requirements, evidence, and decisions live only in a reviewer’s head. A useful system needs to show not just a score, but what information supported it.',
        ],
        bullets: ['Unstructured CV formats', 'Inconsistent requirement interpretation', 'Weak traceability from evidence to verdict', 'Difficult candidate comparison'],
      },
      {
        eyebrow: 'Solution · System Flow',
        title: 'A clear pipeline from document to ranking',
        flow: ['CV', 'PDF validation', 'Text extraction', 'Normalization', 'Profile extraction', 'Requirement matching', 'Evidence', 'Verdict', 'Scoring', 'Ranking'],
        body: ['Each stage has a focused responsibility, making errors easier to locate and decisions easier to inspect.'],
      },
      {
        eyebrow: 'Architecture',
        title: 'Full-stack separation with deterministic matching at the core',
        body: [
          'The React and TypeScript interface manages requirements, uploads, results, and rankings. FastAPI coordinates validation, extraction, persistence, and screening. PostgreSQL stores structured jobs, candidates, evidence, and results.',
          'OpenRouter and DeepSeek support candidate profile extraction in the current UI workflow. The structured matching engine then applies explicit rules and deterministic scoring.',
        ],
        flow: ['React UI', 'FastAPI API', 'Extraction workflow', 'Matching engine', 'PostgreSQL', 'Ranked results'],
      },
      {
        eyebrow: 'Evidence-first approach',
        title: 'A verdict should be traceable to the source',
        body: ['Requirements are evaluated against structured candidate information and paired with supporting evidence. This makes results more reviewable than an unexplained similarity score.'],
        bullets: ['Explicit job requirements', 'Structured candidate attributes', 'Evidence attached to matches', 'Transparent verdicts', 'Reproducible scores and ranks'],
      },
      {
        eyebrow: 'Key engineering decisions',
        title: 'Designed for clarity before automation',
        bullets: [
          'Separate profile extraction from structured matching.',
          'Keep matching and scoring deterministic once data is structured.',
          'Validate PDFs before deeper processing.',
          'Preserve evidence so reviewers can inspect decisions.',
          'Containerize the stack for repeatable local and hosted environments.',
        ],
      },
      {
        eyebrow: 'Tech stack',
        title: 'Tools chosen around the workflow',
        bullets: ['React · TypeScript · Vite', 'Python · FastAPI', 'PostgreSQL · SQLAlchemy · psycopg3', 'OpenRouter · DeepSeek', 'Docker · Railway · Vercel'],
      },
      {
        eyebrow: 'Testing · Deployment',
        title: 'A thoroughly tested portfolio baseline',
        body: ['At the recorded project baseline, 1,333 backend tests and 135 frontend tests passed, with 97% backend coverage. These figures describe that test run; they are not guarantees about real-world operation.'],
        bullets: ['Frontend deployed on Vercel', 'API and database hosted through Railway', 'Docker-based local development'],
      },
      {
        eyebrow: 'Limitations',
        title: 'Important boundaries of the public demonstration',
        callout: 'Portfolio demonstration only. Do not upload real applicant CVs or use the output for real hiring decisions.',
        bullets: [
          'The public demo has no authentication.',
          'Complex or multi-column PDFs can have reading-order limitations.',
          'The system does not include OCR.',
          'No fairness or 100% accuracy guarantees are made.',
          'Human review remains necessary for consequential decisions.',
        ],
      },
    ],
  },
  {
    slug: 'nusamart',
    index: '02',
    name: 'NusaMart E-Commerce Analytics',
    shortName: 'NMA',
    category: 'End-to-End Analytics & Business Intelligence',
    description: 'A fictional marketplace case study that transforms raw public e-commerce data into a reconciled star schema, dashboard, and decision-ready insights.',
    summary: 'An end-to-end analytics project using the Brazilian E-Commerce Public Dataset by Olist. NusaMart is a fictional business case created to demonstrate data cleaning, modeling, analysis, visualization, and business communication.',
    year: '2026',
    status: 'Completed · Published',
    technologies: ['Python', 'Pandas', 'PostgreSQL', 'SQL', 'Power BI', 'DAX'],
    highlights: ['110,197 fact rows', '36 DAX measures', '3-page Power BI report'],
    image: '/projects/nusamart.png',
    imageAlt: 'NusaMart Power BI Executive Overview with KPI cards and revenue, AOV, and freight burden charts',
    links: [
      { label: 'Case study', href: 'https://justinchristroper-arch.github.io/nusamart-ecommerce-analytics/', kind: 'primary' },
      { label: 'Power BI', href: 'https://app.powerbi.com/view?r=eyJrIjoiNWQ3ZjljMjgtZmRjZS00YjhjLWI2ZjctZGViNmIxNTJiMTJiIiwidCI6IjM0ODViOTYzLTgyYmEtNGE2Zi04MTBmLWI1Y2MyMjZmZjg5OCIsImMiOjEwfQ%3D%3D', kind: 'secondary' },
      { label: 'GitHub', href: 'https://github.com/justinchristroper-arch/nusamart-ecommerce-analytics', kind: 'secondary' },
    ],
    sections: [
      {
        eyebrow: 'Overview',
        title: 'From raw marketplace data to an executive view',
        body: [
          'NusaMart is a fictional marketplace scenario built on the public Olist dataset. The project covers the full path from data preparation to an executive presentation, with reconciled definitions documented along the way.',
          'The analysis window spans January 2017 through July 2018.',
        ],
        metrics: [
          { value: 'R$12.34M', label: 'Delivered product revenue', note: 'Freight excluded' },
          { value: '89,860', label: 'Delivered orders' },
          { value: '86,960', label: 'Unique customers' },
          { value: '102,738', label: 'Units sold' },
        ],
      },
      {
        eyebrow: 'Business Problem',
        title: 'Create one reliable view of commercial performance',
        body: ['The case asks how an e-commerce team could turn disconnected operational tables into consistent KPIs, explain what drove growth, and identify questions worth testing next.'],
        bullets: ['Reconcile core KPI definitions', 'Understand growth drivers', 'Assess customer retention', 'Compare geographic and category performance', 'Communicate findings without overstating causality'],
      },
      {
        eyebrow: 'Data · Methodology',
        title: 'Definitions before dashboards',
        body: [
          'Revenue is the sum of item price for delivered orders only; freight is excluded. Customers are identified with customer_unique_id, not customer_id.',
          'Profit and margin are not calculated because product and company cost data is unavailable. Freight burden is total freight value divided by total product revenue—a proxy for shipping cost relative to product value, not profitability or company cost.',
        ],
      },
      {
        eyebrow: 'Data Architecture',
        title: 'A star schema built for consistent analysis',
        flow: ['Raw Olist data', 'Python / Pandas cleaning', 'PostgreSQL', 'Star schema', 'SQL analysis', 'Power BI', 'Insights', 'Recommendations'],
        bullets: ['fact_sales — one row per item/unit from a delivered order (110,197 rows)', 'dim_customer', 'dim_product', 'dim_date'],
      },
      {
        eyebrow: 'Dashboard',
        title: 'Three pages for three levels of decision-making',
        bullets: ['Executive Overview — headline KPIs and trend context', 'Customer Analysis — concentration, frequency, and repeat behavior', 'Product & Category — mix, performance, and freight burden'],
        body: ['The report uses 36 DAX measures to keep business logic reusable and consistent across visuals.'],
      },
      {
        eyebrow: 'Main KPIs',
        title: 'A reconciled commercial baseline',
        metrics: [
          { value: 'R$137.35', label: 'Average order value' },
          { value: '16.57%', label: 'Freight burden', note: 'Proxy, not profit margin' },
          { value: '3.00%', label: 'Repeat customer rate' },
          { value: '41.09%', label: 'Revenue from top 10% customers' },
        ],
      },
      {
        eyebrow: 'Key Insights',
        title: 'Growth was strong; customer depth was not',
        bullets: [
          'Jan–Jul 2018 versus Jan–Jul 2017: revenue +161.6%, orders +160.8%, customers +161.8%, and AOV +0.3%—indicating volume-led growth.',
          '97% of customers made only one order; the 12-month repeat rate was 3.32%.',
          'The top 10% of customers generated 41.09% of revenue, but most revenue in this segment came from one-time buyers.',
          'Freight burden varied significantly across states and categories.',
          'São Paulo dominated revenue, while product category mix shifted meaningfully.',
        ],
      },
      {
        eyebrow: 'Recommendations',
        title: 'Questions to test, not impact to assume',
        body: ['The recommendations are framed as experiments because the dataset does not prove future business impact.'],
        bullets: [
          'Test lifecycle campaigns aimed at a second purchase within selected windows.',
          'Segment high-value one-time buyers and trial category-specific follow-ups.',
          'Review high freight-burden state/category combinations before changing offers.',
          'Monitor category mix alongside contribution data if reliable cost data becomes available.',
        ],
      },
      {
        eyebrow: 'Limitations',
        title: 'What the analysis cannot claim',
        callout: 'NusaMart is a fictional business case. The underlying data is the Brazilian E-Commerce Public Dataset by Olist.',
        bullets: ['No profit or margin analysis without product and company cost data.', 'Freight burden is a relative shipping proxy only.', 'Observational patterns do not establish causality.', 'The dataset ends in 2018 and should not be treated as a current market view.'],
      },
    ],
  },
  {
    slug: 'requestflow',
    index: '03',
    name: 'RequestFlow',
    shortName: 'RF',
    category: 'Internal IT & Procurement Request Automation',
    description: 'A simulated business-process system that centralizes requests, conditional approvals, procurement ownership, audit trails, and SLA monitoring.',
    summary: 'A full-stack portfolio business case that translates a fragmented chat, email, and spreadsheet process into a centralized, role-based, auditable workflow.',
    year: '2026',
    status: 'Completed · Deployed',
    technologies: ['React 19', 'TypeScript', 'FastAPI', 'PostgreSQL 17', 'Docker', 'Recharts'],
    highlights: ['Conditional approvals', 'Role-based access', 'SLA and audit tracking'],
    image: '/projects/requestflow.png',
    imageAlt: 'RequestFlow Admin analytics dashboard with operational KPIs and monthly request trend',
    links: [
      { label: 'Live demo', href: 'https://requestflow-one.vercel.app/', kind: 'primary' },
      { label: 'GitHub', href: 'https://github.com/justinchristroper-arch/requestflow', kind: 'secondary' },
      { label: 'API docs', href: 'https://requestflow-api-production.up.railway.app/docs', kind: 'secondary' },
    ],
    sections: [
      {
        eyebrow: 'Overview',
        title: 'A clear path from request to completion',
        body: ['RequestFlow is a simulated portfolio business case exploring how an internal IT and procurement process could be centralized, governed by role, and made easier to audit.'],
        metrics: [
          { value: '5', label: 'Workflow roles' },
          { value: '4', label: 'Core entities' },
          { value: '116', label: 'Backend tests passed', note: 'Project baseline' },
        ],
      },
      {
        eyebrow: 'Business Problem · AS-IS',
        title: 'Requests are hard to manage when the process lives everywhere',
        body: ['In the simulated scenario, employees submit IT and procurement needs through chat, email, and spreadsheets. The process depends on manual follow-up and has no shared source of truth.'],
        bullets: ['Scattered requests', 'Unclear status', 'Manual approvals', 'Weak auditability', 'SLA difficult to track', 'No centralized reporting'],
      },
      {
        eyebrow: 'TO-BE · Workflow',
        title: 'A centralized, role-based request lifecycle',
        flow: ['Employee submits', 'Manager approval', 'Finance if ≥ Rp5M', 'Approved', 'Procurement processing', 'Completed'],
        body: ['Employees can track progress in one place while Manager, Finance, Procurement, and Admin roles receive the actions and visibility relevant to them.'],
      },
      {
        eyebrow: 'Business Rules',
        title: 'Conditional routing encoded explicitly',
        bullets: ['Requests below Rp5,000,000 skip Finance approval.', 'Requests at or above Rp5,000,000 require Finance approval.', 'Users can cancel requests when allowed by workflow state.', 'Procurement ownership makes fulfillment responsibility visible.'],
      },
      {
        eyebrow: 'System Architecture',
        title: 'A modular full-stack application',
        flow: ['React SPA', 'REST API + JWT', 'FastAPI modular monolith', 'PostgreSQL'],
        bullets: ['User', 'Request', 'Approval', 'AuditLog'],
        body: ['Alembic manages database migrations, Docker Compose supports local orchestration, and the frontend and API deploy independently to Vercel and Railway.'],
      },
      {
        eyebrow: 'Key Features',
        title: 'Controls and visibility across the workflow',
        bullets: ['JWT authentication and Argon2id password hashing', 'RBAC and object-level authorization', 'Conditional approval routing', 'Request tracking and cancellation', 'Procurement ownership', 'Audit trail', 'SLA monitoring', 'Admin analytics dashboard', 'Responsive user interface'],
      },
      {
        eyebrow: 'SLA',
        title: 'Priority-based targets with visible status',
        metrics: [
          { value: '1 day', label: 'High priority target' },
          { value: '3 days', label: 'Medium priority target' },
          { value: '5 days', label: 'Low priority target' },
        ],
        bullets: ['On Track', 'Due Soon', 'Breached', 'Completed On Time', 'Completed Late', 'Not Applicable'],
      },
      {
        eyebrow: 'Auditability · Security',
        title: 'Important actions leave context behind',
        body: ['The application records workflow events in an audit trail and restricts actions with role and object-level authorization. These are portfolio implementation choices, not a claim of enterprise-grade production security.'],
      },
      {
        eyebrow: 'Testing',
        title: 'Verified across backend, frontend, and browser flows',
        bullets: ['116 backend tests passed', 'Frontend build passed', 'Frontend lint passed', 'Local browser regression passed', 'Hosted browser regression passed'],
        body: ['These results describe the project quality baseline and are not production SLA commitments.'],
      },
      {
        eyebrow: 'Limitations',
        title: 'A simulated case—not a company deployment',
        callout: 'RequestFlow is a simulated portfolio business case. It has not been deployed inside a real company.',
        bullets: ['No real-company ROI or productivity improvement is claimed.', 'No enterprise deployment impact is claimed.', 'The public app should not be treated as an enterprise security certification.', 'Real adoption would require organization-specific policy, security, and integration work.'],
      },
    ],
  },
  {
    slug: 'helpdesk-ai',
    index: '04',
    name: 'HelpDesk AI',
    shortName: 'HDAI',
    category: 'Evidence-First IT Knowledge Assistant',
    description: 'An evidence-first IT knowledge assistant using semantic retrieval, FastEmbed, PostgreSQL/pgvector, deterministic grounded answers, and backend-controlled citations.',
    summary: 'A retrieval-focused assistant that keeps source evidence and citation control in the backend, with optional MindRouter synthesis kept outside the core functionality path.',
    year: '2026',
    status: 'Completed · Deployed',
    technologies: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL', 'pgvector', 'FastEmbed', 'Neon', 'Vercel'],
    highlights: ['Backend-controlled citations', 'Deterministic fallback', '177 backend tests passed'],
    links: [
      { label: 'Live demo', href: 'https://helpdesk-ai-mu-ten.vercel.app/', kind: 'primary' },
      { label: 'GitHub', href: 'https://github.com/justinchristroper-arch/helpdesk-ai', kind: 'secondary' },
    ],
    sections: [
      {
        eyebrow: 'Overview',
        title: 'Answers grounded in retrievable evidence',
        body: [
          'HelpDesk AI is an IT knowledge assistant built around semantic retrieval and explicit source evidence. Its core path is designed to return grounded answers with citations controlled by the backend.',
          'The project keeps optional MindRouter synthesis outside the required functionality path, so retrieval, citations, history, feedback, and deterministic fallback remain core capabilities.',
        ],
        metrics: [
          { value: '177', label: 'Backend tests passed', note: 'Project verification baseline' },
          { value: '7', label: 'Frontend tests passed', note: 'Project verification baseline' },
          { value: '1', label: 'Deterministic fallback', note: 'Core functionality path' },
        ],
      },
      {
        eyebrow: 'Retrieval',
        title: 'Semantic search with a traceable source path',
        body: ['The assistant uses FastEmbed for semantic representations and PostgreSQL with pgvector for retrieval. Retrieved evidence is kept available to the answer flow instead of being hidden behind an opaque response.'],
        flow: ['Question', 'FastEmbed', 'pgvector retrieval', 'Grounded answer', 'Backend citations'],
      },
      {
        eyebrow: 'Architecture',
        title: 'A focused full-stack retrieval system',
        body: ['The React and TypeScript frontend connects to a FastAPI backend. PostgreSQL/pgvector stores and retrieves the knowledge base, with Neon and Vercel supporting the hosted deployment.'],
        flow: ['React UI', 'FastAPI API', 'Semantic retrieval', 'PostgreSQL / pgvector', 'Cited response'],
      },
      {
        eyebrow: 'Grounding',
        title: 'Citations are controlled where the evidence lives',
        bullets: ['Backend-controlled citation assembly', 'Deterministic fallback when synthesis is unavailable', 'Retrieval, citation, history, and feedback flows verified in the hosted app', 'Optional MindRouter synthesis is not required for core functionality'],
      },
      {
        eyebrow: 'Administration',
        title: 'Operational controls are part of the product surface',
        bullets: ['Admin analytics verified', 'Authorization behavior verified', 'Conversation history and feedback supported', 'Public Vercel deployment works'],
      },
      {
        eyebrow: 'Tech stack',
        title: 'Tools chosen for retrieval and control',
        bullets: ['React · TypeScript · Vite', 'Python · FastAPI', 'PostgreSQL · pgvector · Neon', 'FastEmbed', 'Vercel'],
      },
      {
        eyebrow: 'Testing · Deployment',
        title: 'Verified across core hosted workflows',
        body: ['The recorded project baseline includes 177 backend tests passed and 7 frontend tests passed. Hosted retrieval, citations, history, feedback, admin analytics, authorization, deterministic fallback, and the public Vercel deployment were verified.'],
      },
      {
        eyebrow: 'Scope note',
        title: 'The core assistant does not depend on optional synthesis',
        callout: 'Optional MindRouter synthesis is not required for core functionality. The retrieval and deterministic fallback path remains the foundation of the assistant.',
      },
    ],
  },
]

export function getProject(slug?: string) {
  return projects.find((project) => project.slug === slug)
}
