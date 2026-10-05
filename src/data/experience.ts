export interface Figure {
  value: string;
  label: string;
}

export interface Role {
  title: string;
  org: string;
  note?: string;
  location: string;
  start: string;
  end: string;
  /** One or two sentences of context: what the company does, what I owned. */
  summary?: string;
  figures?: Figure[];
  points: string[];
  stack?: string[];
}

export const currentRoles: Role[] = [
  {
    title: 'Principal Machine Learning Researcher',
    org: 'Analytical Mechanics Associates (NASA)',
    location: 'Tyler, Texas',
    start: '2023',
    end: 'Present',
    points: [
      'Authoring research with the Center for Earth Observation Sciences on agentic processes for GIS task automation: detecting urbanization, burn scars, and other environmental change from satellite spectral data.',
      'Acting as in-house subject matter expert, keeping the research aligned with the state of the art.',
    ],
  },
];

export const pastRoles: Role[] = [
  {
    title: 'Vice President of Machine Learning',
    org: 'Checkmate',
    location: 'Tyler, Texas (Remote)',
    start: '2024',
    end: 'August 2026',
    summary:
      'Checkmate is a leader in first- and third-party ordering and restaurant ' +
      'management. I head Voice AI: automating drive-thru and phone ordering and ' +
      'integrating it with menu management, digital menu boards, and prep time.',
    figures: [
      { value: '60% → 99.99%', label: 'Platform uptime' },
      { value: '40% → 92%', label: 'Call containment' },
      { value: '4 → 48', label: 'Organization size, direct and indirect' },
    ],
    points: [
      'Rebuilt an unstable LLM platform with containerization, Terraform-managed infrastructure, CI/CD, and real observability, taking uptime from 60% to 99.99% and containment from 40% to 92%.',
      'Grew the Voice AI organization from 3 engineers and 1 PM to 12 direct and 36 indirect reports spanning software, prompt engineering, analytics, audio engineering, and QA.',
      'Architected the core business logic and agentic tooling: GPT-driven intent tracking, cart generation, and conversation state management. Restaurant onboarding dropped from weeks to days.',
      'Trained and deployed in-house ASR models that cut interruptions by 86%, reduced phonetic transcription error from 7.2% to 2.2%, and pushed intent detection past 97%.',
      'Scaled testing from 80 daily calls to over a thousand using Mechanical Turk and Coval agentic automation, widening the interaction distribution and removing survivorship bias from our KPIs.',
      'Built evaluation and analytics pipelines syncing LangFuse to Snowflake, tying speech behavior, containment, and latency directly to business KPIs.',
      'Instituted A/B testing, structured releases, and red/blue/purple team practice so voice features ship faster with more confidence.',
    ],
    stack: ['LLMs', 'ASR', 'Agents', 'Terraform', 'Docker', 'LangFuse', 'Snowflake'],
  },
  {
    title: 'Founding Machine Learning Engineer',
    org: 'Develop Health',
    location: 'Albuquerque, New Mexico (Remote)',
    start: '2023',
    end: '2024',
    summary:
      'Prior authorization is a major time sink for physicians and their staff, and ' +
      'it delays patient care. Develop Health automates it. I architected the voice ' +
      'systems that submit and accelerate approvals.',
    figures: [
      { value: '55% → 83%', label: 'Automation containment' },
      { value: 'Hours → minutes', label: 'Staff workload per authorization' },
    ],
    points: [
      'Built a voice-powered prior-authorization pipeline that reduced physician, pharmacist, and admin workload from hours to minutes.',
      'Applied LLMs, ASR, TTS, and supporting automation to intake and submit pharmacy and medical authorizations.',
      'Raised containment from 55% to 83% with a human-in-the-loop escalation framework that generated training data for continuous improvement.',
      'Owned end-to-end AI systems: prompt engineering, agent architecture, business logic, RAG over patient data, and automated PBM calling with IVR navigation across hundreds of phone trees.',
      'Established evaluation and observability for containment rate, interaction time, and time-to-approval: production accountability, not dashboards for their own sake.',
    ],
    stack: ['LLMs', 'ASR', 'TTS', 'RAG', 'Agents'],
  },
  {
    title: 'Sr. Technical Director of Machine Learning',
    org: 'Materialytics',
    note: 'Acquired',
    location: 'Albuquerque, New Mexico (Remote)',
    start: '2022',
    end: '2023',
    summary:
      'Materialytics disproved the assumption that a mineral’s source cannot be ' +
      'traced. I led the use of high-dimensional laser-induced breakdown spectroscopy ' +
      '(LIBS) to design, train, and deploy provenance models.',
    figures: [
      { value: '$1.20 → $0.05', label: 'Compute cost per sample' },
      { value: '4 → 15', label: 'Engineers across ML, systems, and platform' },
      { value: '~24 → 200+', label: 'Mineral samples analyzed per day' },
    ],
    points: [
      'Scaled the engineering organization from 4 to 15 across machine learning, systems, and platform, building a production-grade foundation for spectral analytics.',
      'Cut per-unit cost from $1.20 to $0.05 a sample through GPTQ 4-bit quantization and model pruning, which changed the market economics of the product.',
      'Delivered a proprietary computer-vision analytics platform that scaled provenance labeling from a few dozen samples a day to over 200.',
      'Built the observability, monitoring, and analytics pipelines that made model iteration data-driven rather than anecdotal.',
      'Standardized experimentation on Jupyter, replacing scattered MATLAB scripts and giving engineering and data science a shared surface to collaborate on.',
      'Partnered with C-suite leadership to align ML and platform strategy with business objectives, positioning the analytics platform as the core differentiator.',
    ],
    stack: ['LIBS spectra', 'Computer vision', 'GPTQ', 'Pruning', 'Jupyter'],
  },
  {
    title: 'Principal Machine Learning Engineer',
    org: 'Materialytics',
    note: 'Acquired',
    location: 'Albuquerque, New Mexico (Remote)',
    start: '2020',
    end: '2022',
    figures: [
      { value: '80% → 95%+', label: 'Provenance accuracy' },
      { value: '65,000', label: 'Input dimensions per LIBS spectrum' },
    ],
    points: [
      'Designed custom channel-attention, siamese, and convolutional architectures for 65,000-dimensional LIBS data, replacing algorithmic methods and lifting provenance accuracy from 80% to over 95%.',
      'Architected sparse modeling with persistent homology and 2D wavelet transforms to strip noise from limited-provenance datasets: average accuracy 70% → 85%, worst case 60% → 80%, best case 82% → 91%.',
      'Implemented a novel grid-based approach to giving provenance models stronger context, reducing perplexity between near-identical material sources and improving F1.',
      'Drove deeper observability into model performance, surfacing systematic data problems that had previously been invisible.',
      'Worked with senior leadership on prioritization and timelines so engineering capacity matched business need.',
    ],
    stack: ['Attention', 'Siamese networks', 'Persistent homology', 'Wavelets'],
  },
  {
    title: 'Lead Computer Vision Engineer',
    org: 'MicroNet Solutions',
    note: 'Acquired',
    location: 'Albuquerque, New Mexico (Hybrid)',
    start: '2017',
    end: '2020',
    summary:
      'Reconstructing integrated-circuit logic from scanning electron microscope ' +
      'imagery, at a scale where a single misaligned tile corrupts the whole netlist.',
    points: [
      'Designed a novel stitching algorithm for SEM image tiles that held circuit alignment, and therefore circuit logic, consistent across millions of tiles and multiple metal and poly layers.',
      'Automated extraction of traces and via polygons at well over 95% alignment accuracy, backed by a UNet that could be retrained per logic board.',
    ],
    stack: ['UNet', 'Image registration', 'Segmentation'],
  },
  {
    title: 'Lead Natural Language Processing Engineer',
    org: 'Access Innovations',
    location: 'Albuquerque, New Mexico',
    start: '2013',
    end: '2017',
    figures: [
      { value: '2 days → <1 hour', label: 'Tagging time for large corpora' },
      { value: '300k+', label: 'Medical codes mapped' },
    ],
    points: [
      'Led development of Access Integrity, automating ICD-9/10, CPT, HCPCS, and SNOMED tagging across more than 300,000 medical codes read from physician notes.',
      'Led four engineers on the Data Harmony platform, owning the NLP tooling: the semantic rules engine and the NLP machine learning components.',
      'Cut semantic tagging on multi-gigabyte corpora from two days to under an hour through rule hashing, conditional logic branching, and parallelization.',
    ],
    stack: ['NLP', 'Semantic rules', 'Ontologies', 'Parallel processing'],
  },
];

export const advisory: Role[] = [
  {
    title: 'Executive Engineering Advisor',
    org: 'Develop Health',
    location: 'Menlo Park, California',
    start: '2024',
    end: '2025',
    points: [
      'Defined engineering hiring requirements before and after fundraising, for both development and operations.',
      'Articulated the technical and business value proposition for the in-house automated prior-authorization platform.',
      'Advised go-to-market and operational scaling, contributing to ARR growth beyond $15M.',
    ],
  },
];

export interface Degree {
  degree: string;
  school: string;
  location: string;
  years: string;
  detail: string[];
}

export const education: Degree[] = [
  {
    degree: 'M.S. in Electrical and Computer Engineering',
    school: 'University of New Mexico',
    location: 'Albuquerque, New Mexico',
    years: '2008 – 2009',
    detail: [
      'Focus on machine learning and algorithms',
      'Thesis on machine learning in natural language processing',
      'Technical GPA 3.9 / 4.0',
    ],
  },
  {
    degree: 'B.S. in Mechanical Engineering and Applied Mathematics',
    school: 'University of New Mexico',
    location: 'Albuquerque, New Mexico',
    years: '2004 – 2008',
    detail: [
      'Summa cum laude',
      'Formula SAE: drivetrain and controllers',
      'Technical GPA 3.8 / 4.0',
    ],
  },
];

export const skills = [
  {
    heading: 'Machine learning',
    items: [
      'Transformers & attention',
      'Multimodal models',
      'Self-supervised & reinforcement learning',
      'Quantization, pruning, distillation',
      'Evaluation & observability',
      'NLP · LLMs · ASR · computer vision',
      'Agent architecture',
    ],
  },
  {
    heading: 'Engineering',
    items: [
      'Distributed systems',
      'Scalable deployment & MLOps',
      'Cloud infrastructure & CI/CD',
      'Algorithm design',
      'Graph databases & ETL',
      'APIs & systems integration',
    ],
  },
  {
    heading: 'Leadership',
    items: [
      'Team development & hiring',
      'Business KPI definition & reporting',
      'Product strategy & roadmapping',
      'Executive communication',
      'Engineering process & compliance',
      'People-first management',
    ],
  },
];

export const languages = [
  { name: 'Python', level: 'Native' },
  { name: 'Java', level: 'Native' },
  { name: 'Rust', level: 'Native' },
  { name: '.NET / C#', level: 'Native' },
  { name: 'TypeScript', level: 'Proficient' },
  { name: 'Go', level: 'Proficient' },
];
