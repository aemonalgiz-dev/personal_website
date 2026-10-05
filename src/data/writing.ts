export interface Publication {
  title: string;
  venue?: string;
  kind: 'Paper' | 'Article' | 'Research note';
  url?: string;
  summary?: string;
  topics: string[];
}

export const publications: Publication[] = [
  {
    title: 'Contextual Copying Failures Beyond Isolated Token Probes',
    venue: 'Academia.edu',
    kind: 'Paper',
    url: 'https://www.academia.edu/176671076/Contextual_Copying_Failures_Beyond_Isolated_Token_Probes',
    topics: ['Tokenization', 'Hallucinations', 'Homologies', 'LLMs'],
  },
  {
    title: 'Stability Analysis of a Model for the Market Dynamics of a Smart Grid',
    venue: 'IEEE',
    kind: 'Paper',
    url: 'https://www.academia.edu/176523276/Stability_analysis_of_a_model_for_the_market_dynamics_of_a_smart_grid',
    topics: ['Smart grid', 'Stability analysis', 'Market dynamics'],
  },
  {
    title: 'A Generative AI Framework for Earth Observation Analysis',
    venue: 'IEEE IGARSS',
    kind: 'Paper',
    url: '',
    summary:
      'An automation platform for earth observation tasks such as burn scar ' +
      'mapping and NDBI/NDVI, where the analysis is assembled by a generative ' +
      'model rather than by hand, one pipeline per question.',
    topics: ['Earth observation', 'Generative AI', 'GIS'],
  },
  {
    title: 'Improving EO-GPT: An LLM Orchestration Framework',
    venue: 'IEEE IGARSS',
    kind: 'Paper',
    url: '',
    summary:
      'LLMs orchestrating earth observation tooling and infrastructure at scale, ' +
      'so that a researcher states the analysis and the framework works out ' +
      'which instruments, projections and computations it needs.',
    topics: ['Orchestration', 'LLMs', 'Earth observation'],
  },
  {
    title: 'Glitch Tokens Compared to Fragile Tokens',
    venue: 'Towards AI',
    kind: 'Article',
    url: '',
    topics: ['Tokenization', 'Hallucinations', 'Homologies', 'LLMs'],
  },
  {
    title: 'Hallucinations Related to Glitch and Fragile Tokens',
    venue: 'Towards Deep Learning',
    kind: 'Article',
    url: '',
    topics: ['Tokenization', 'Hallucinations', 'Homologies', 'LLMs'],
  },
  {
    title: 'KPIs: The Voice AI Agentic Trap',
    venue: 'Stackademic',
    kind: 'Article',
    url: '',
    summary:
      'Containment counts the calls that did not escalate, which includes every ' +
      'caller who gave up. Latency averages hide the tail that people actually ' +
      'hang up on. Shipping the model is where the measurement problem starts, ' +
      'and without feature-level analysis the conversational failure gets ' +
      'diagnosed as the wrong thing.',
    topics: ['Voice AI', 'Evaluation', 'KPIs'],
  },
  {
    title: 'Intuition of Looped Attention LLMs',
    venue: 'Towards AI',
    kind: 'Research note',
    url: '',
    summary:
      'Looped attention and recurrent transformer architectures: what iterative ' +
      'refinement in latent space buys at inference time, and which of the ' +
      'behaviors called emergent are really the loop being run more times.',
    topics: ['Architecture', 'Attention', 'Reasoning'],
  },
];
